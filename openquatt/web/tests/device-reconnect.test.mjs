import assert from "node:assert/strict";
import test from "node:test";

const timers = [];
let reloadCount = 0;

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
});

test("a recovered OTA reconnect reloads the page once", () => {
  markOtaBrowserRefreshPending();
  beginDeviceReconnect("ota");

  assert.equal(markDeviceReconnectRecovered(), true);

  const refreshTimer = timers.find((timer) => timer.delay === OTA_BROWSER_REFRESH_DELAY_MS && !timer.cancelled);
  assert.ok(refreshTimer);
  refreshTimer.callback();

  assert.equal(reloadCount, 1);
  assert.equal(state.otaBrowserRefreshPending, false);
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
