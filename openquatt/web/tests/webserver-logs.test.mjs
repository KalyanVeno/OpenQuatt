import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;

const { clearWebServerLogHistory, getWebServerLogClearUrl } = await import("../js/src/features/webserver-logs.js");
const { state } = await import("../js/src/core/state.js");

function seedLogState() {
  state.nativeOpen = false;
  state.systemModal = null;
  state.busyAction = "";
  state.webServerLogHistoryError = "";
  state.webServerLogHistoryLoaded = true;
  state.webServerLogEntries = [{ raw: "old log entry", text: "old log entry" }];
}

test("clearWebServerLogHistory clears firmware history before local entries", async (t) => {
  const originalWindow = globalThis.window;
  t.after(() => {
    globalThis.window = originalWindow;
  });

  seedLogState();
  const requests = [];
  globalThis.window = {
    location: { pathname: "/" },
    fetch: async (url, options) => {
      requests.push({ url, options });
      assert.equal(state.webServerLogEntries.length, 1);
      return { ok: true, status: 200 };
    },
  };

  assert.equal(getWebServerLogClearUrl(), "/openquatt/logs/clear");
  assert.equal(await clearWebServerLogHistory(), true);
  assert.deepEqual(requests, [{ url: "/openquatt/logs/clear", options: { method: "POST" } }]);
  assert.deepEqual(state.webServerLogEntries, []);
  assert.equal(state.webServerLogHistoryLoaded, false);
  assert.equal(state.webServerLogHistoryError, "");
  assert.equal(state.busyAction, "");
});

test("clearWebServerLogHistory preserves visible entries when firmware clearing fails", async (t) => {
  const originalWindow = globalThis.window;
  t.after(() => {
    globalThis.window = originalWindow;
  });

  seedLogState();
  globalThis.window = {
    location: { pathname: "/" },
    fetch: async () => ({ ok: false, status: 500 }),
  };

  assert.equal(await clearWebServerLogHistory(), false);
  assert.equal(state.webServerLogEntries.length, 1);
  assert.equal(state.webServerLogHistoryLoaded, true);
  assert.match(state.webServerLogHistoryError, /HTTP 500/);
  assert.equal(state.busyAction, "");
});
