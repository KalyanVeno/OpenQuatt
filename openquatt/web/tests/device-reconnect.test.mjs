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
  OTA_BROWSER_REFRESH_DELAY_MS,
  beginDeviceReconnect,
  clearDeviceReconnect,
  clearOtaBrowserRefreshPending,
  markDeviceReconnectRecovered,
  markOtaBrowserRefreshPending,
  scheduleOtaBrowserRefresh,
} = await import("../js/src/core/device-reconnect.js");

test.afterEach(() => {
  clearDeviceReconnect();
  clearOtaBrowserRefreshPending();
  timers.length = 0;
  reloadCount = 0;
  globalThis.fetch = originalFetch;
});

test("a recovered OTA reconnect reloads the page once", () => {
  markOtaBrowserRefreshPending();
  beginDeviceReconnect("ota", "Failed to fetch");

  assert.equal(markDeviceReconnectRecovered(), true);

  const refreshTimer = timers.find((timer) => timer.delay === OTA_BROWSER_REFRESH_DELAY_MS && !timer.cancelled);
  assert.ok(refreshTimer);
  refreshTimer.callback();

  assert.equal(reloadCount, 1);
  assert.equal(state.otaBrowserRefreshPending, false);
});

test("a proactive OTA reboot phase does not reload before a connection failure", () => {
  markOtaBrowserRefreshPending();
  beginDeviceReconnect("ota");

  assert.equal(markDeviceReconnectRecovered(), true);
  assert.equal(state.otaBrowserRefreshPending, true);
  assert.equal(state.otaBrowserRefreshTimer, null);
});

test("an OTA entity poll does not reload before install completion", () => {
  markOtaBrowserRefreshPending();

  noteEntityRefreshSuccess();

  assert.equal(state.otaBrowserRefreshPending, true);
  assert.equal(state.otaBrowserRefreshTimer, null);
});

test("a normal restart recovery does not reload the page", () => {
  beginDeviceReconnect("restart");

  assert.equal(markDeviceReconnectRecovered(), true);
  assert.equal(state.otaBrowserRefreshPending, false);
  assert.equal(reloadCount, 0);
});

test("a rejected OTA cancels its pending page reload", () => {
  markOtaBrowserRefreshPending();

  assert.equal(scheduleOtaBrowserRefresh(), true);
  const refreshTimer = timers[0];
  clearOtaBrowserRefreshPending();
  refreshTimer.callback();

  assert.equal(refreshTimer.cancelled, true);
  assert.equal(reloadCount, 0);
});

test("a lost OTA acknowledgement enters reconnect recovery", async () => {
  globalThis.fetch = async () => {
    throw new TypeError("Failed to fetch");
  };

  await assert.rejects(requestFirmwareOta("/ota", { method: "POST" }), /Failed to fetch/);

  assert.equal(state.otaBrowserRefreshPending, true);
  assert.equal(state.deviceReconnectMode, "ota");
  assert.equal(state.deviceReconnectFailureObserved, true);
});

test("an explicit OTA rejection clears its pending refresh", async () => {
  globalThis.fetch = async () => ({ ok: false, status: 503 });

  await assert.rejects(requestFirmwareOta("/ota", { method: "POST" }), /HTTP 503/);

  assert.equal(state.otaBrowserRefreshPending, false);
  assert.equal(state.deviceReconnectMode, "");
});
