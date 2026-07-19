import assert from "node:assert/strict";
import test from "node:test";

const timers = [];
let reloadCount = 0;
const originalFetch = globalThis.fetch;

globalThis.__OQ_PREVIEW__ = false;
globalThis.window = {
  clearTimeout(timer) {
    timer.cancelled = true;
  },
  location: {
    reload() {
      reloadCount += 1;
    },
  },
  localStorage: { getItem: () => null },
  matchMedia: () => ({ matches: false }),
  setTimeout(callback, delay) {
    const timer = { callback, cancelled: false, delay };
    timers.push(timer);
    return timer;
  },
};

const { state } = await import("../js/src/core/state.js");
const { noteEntityRefreshSuccess } = await import("../js/src/core/entity-sync.js");
const { requestFirmwareOta } = await import("../js/src/features/firmware-actions.js");
const {
  OTA_REFRESH_DELAY_MS,
  armOtaRefresh,
  beginDeviceReconnect,
  clearOtaRefresh,
  clearDeviceReconnect,
  markDeviceReconnectRecovered,
  scheduleOtaRefresh,
} = await import("../js/src/core/device-reconnect.js");

test.afterEach(() => {
  clearDeviceReconnect();
  clearOtaRefresh();
  state.entities = {};
  timers.length = 0;
  reloadCount = 0;
  globalThis.fetch = originalFetch;
});

test("a lost OTA acknowledgement reloads after a device reboot is observed", async () => {
  state.entities = {
    firmwareUpdateStatus: { state: "Idle" },
    projectVersionText: { state: "v0.42.0" },
    uptime: { state: 3600 },
  };
  globalThis.fetch = async () => {
    throw new TypeError("Failed to fetch");
  };

  await assert.rejects(requestFirmwareOta("/ota", { method: "POST" }), /Failed to fetch/);

  state.entities.firmwareUpdateStatus = { state: "Idle" };
  state.entities.uptime = { state: 4 };
  noteEntityRefreshSuccess();

  const refreshTimer = timers.find((timer) => timer.delay === OTA_REFRESH_DELAY_MS && !timer.cancelled);
  assert.ok(refreshTimer);
  refreshTimer.callback();

  assert.equal(reloadCount, 1);
  assert.equal(state.otaRefresh.pending, false);
});

test("an unreachable device recovery does not prove that OTA started", async () => {
  state.entities = {
    firmwareUpdateStatus: { state: "Idle" },
    projectVersionText: { state: "v0.42.0" },
    uptime: { state: 3600 },
  };
  globalThis.fetch = async () => {
    throw new TypeError("Failed to fetch");
  };

  await assert.rejects(requestFirmwareOta("/ota", { method: "POST" }), /Failed to fetch/);

  state.entities.firmwareUpdateStatus = { state: "Idle" };
  state.entities.uptime = { state: 3610 };
  noteEntityRefreshSuccess();

  assert.equal(state.otaRefresh.timer.delay, 300000);
  assert.equal(state.otaRefresh.wait, true);
  assert.equal(reloadCount, 0);

  const evidenceTimer = timers.find((timer) => timer.delay === 300000 && !timer.cancelled);
  assert.ok(evidenceTimer);
  evidenceTimer.callback();

  assert.equal(state.otaRefresh.pending, false);
  assert.equal(reloadCount, 0);
});

test("a changed firmware version confirms an ambiguously acknowledged OTA", async () => {
  state.entities = {
    projectVersionText: { state: "v0.42.0" },
    uptime: { state: 3600 },
  };
  globalThis.fetch = async () => {
    throw new TypeError("Failed to fetch");
  };

  await assert.rejects(requestFirmwareOta("/ota", { method: "POST" }), /Failed to fetch/);

  state.entities.projectVersionText = { state: "v0.43.0" };
  noteEntityRefreshSuccess();

  assert.equal(state.otaRefresh.timer.delay, OTA_REFRESH_DELAY_MS);
  assert.equal(state.otaRefresh.wait, false);
});

test("a proactive OTA reboot phase does not reload before a connection failure", () => {
  armOtaRefresh();
  beginDeviceReconnect("ota");

  assert.equal(markDeviceReconnectRecovered(), true);
  assert.equal(state.otaRefresh.pending, true);
  assert.equal(state.otaRefresh.timer, null);
});

test("an OTA entity poll does not reload before install completion", () => {
  armOtaRefresh();

  noteEntityRefreshSuccess();

  assert.equal(state.otaRefresh.pending, true);
  assert.equal(state.otaRefresh.timer, null);
});

test("a normal restart recovery does not reload the page", () => {
  beginDeviceReconnect("restart");

  assert.equal(markDeviceReconnectRecovered(), true);
  assert.equal(state.otaRefresh.pending, false);
  assert.equal(reloadCount, 0);
});

test("a rejected OTA cancels its pending page reload", () => {
  armOtaRefresh();

  scheduleOtaRefresh();
  const refreshTimer = timers[0];
  clearOtaRefresh();
  refreshTimer.callback();

  assert.equal(refreshTimer.cancelled, true);
  assert.equal(reloadCount, 0);
});

test("a lost OTA acknowledgement enters reconnect recovery", async () => {
  globalThis.fetch = async () => {
    throw new TypeError("Failed to fetch");
  };

  await assert.rejects(requestFirmwareOta("/ota", { method: "POST" }), /Failed to fetch/);

  assert.equal(state.otaRefresh.pending, true);
  assert.equal(state.otaRefresh.wait, true);
  assert.equal(state.deviceReconnectMode, "ota");
});

test("an explicit OTA rejection clears its pending refresh", async () => {
  globalThis.fetch = async () => ({ ok: false, status: 503 });

  await assert.rejects(requestFirmwareOta("/ota", { method: "POST" }), /HTTP 503/);

  assert.equal(state.otaRefresh.pending, false);
  assert.equal(state.deviceReconnectMode, "");
});
