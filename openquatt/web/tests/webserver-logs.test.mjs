import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;

const { clearWebServerLogHistory, getWebServerLogClearUrl, refreshWebServerLogHistory } =
  await import("../js/src/features/webserver-logs.js");
const { state } = await import("../js/src/core/state.js");

function seedLogState() {
  state.nativeOpen = false;
  state.systemModal = null;
  state.busyAction = "";
  state.webServerLogHistoryError = "";
  state.webServerLogHistoryLoaded = true;
  state.webServerLogCsrfToken = "test-csrf-token";
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
  assert.equal(requests.length, 1);
  assert.equal(requests[0].url, "/openquatt/logs/clear");
  assert.equal(requests[0].options.method, "POST");
  assert.equal(requests[0].options.body.get("csrf_token"), "test-csrf-token");
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

test("clearWebServerLogHistory does not replace another pending action", async (t) => {
  const originalWindow = globalThis.window;
  t.after(() => {
    globalThis.window = originalWindow;
  });

  seedLogState();
  state.busyAction = "save-debugLevel";
  let requested = false;
  globalThis.window = {
    location: { pathname: "/" },
    fetch: async () => {
      requested = true;
      return { ok: true, status: 200 };
    },
  };

  assert.equal(await clearWebServerLogHistory(), false);
  assert.equal(requested, false);
  assert.equal(state.busyAction, "save-debugLevel");
  assert.equal(state.webServerLogEntries.length, 1);
});

test("clearWebServerLogHistory requires a firmware CSRF token", async (t) => {
  const originalWindow = globalThis.window;
  t.after(() => {
    globalThis.window = originalWindow;
  });

  seedLogState();
  state.webServerLogCsrfToken = "";
  let requested = false;
  globalThis.window = {
    location: { pathname: "/" },
    fetch: async () => {
      requested = true;
      return { ok: true, status: 200 };
    },
  };

  assert.equal(await clearWebServerLogHistory(), false);
  assert.equal(requested, false);
  assert.match(state.webServerLogHistoryError, /beveiligingstoken/);
  assert.equal(state.webServerLogEntries.length, 1);
});

test("refreshWebServerLogHistory stores the firmware CSRF token", async (t) => {
  const originalWindow = globalThis.window;
  const originalSystemModal = state.systemModal;
  t.after(() => {
    globalThis.window = originalWindow;
    state.systemModal = originalSystemModal;
  });

  seedLogState();
  state.systemModal = "webserver-logs";
  state.webServerLogCsrfToken = "";
  globalThis.window = {
    location: { pathname: "/" },
    fetch: async () => ({
      ok: true,
      status: 200,
      json: async () => ({ enabled: true, csrf_token: "firmware-csrf-token", entries: [] }),
    }),
  };

  await refreshWebServerLogHistory();
  assert.equal(state.webServerLogCsrfToken, "firmware-csrf-token");
});
