import { isTrendHistoryEnabled } from "./app-shared.js";
import { APP_VIEW_IDS, FAN_ROTATION_DEG_PER_SEC, FAST_POLL_INTERVAL_MS, FLOW_OFFSET_PX_PER_SEC, HIDDEN_POLL_INTERVAL_MS, OFFICIAL_ESPHOME_UI_URL, POLL_JITTER_MAX_MS, POLL_JITTER_MIN_MS, SETTINGS_GROUP_IDS, SETTINGS_GROUPS } from "./config.js";
import { DEFAULT_TREND_WINDOW_HOURS, TREND_WINDOW_HOURS_OPTIONS, getPrefersReducedMotion, getReducedMotionMedia, getStoredHpLayoutMode, getStoredHpVisualMode, getStoredOverviewTheme, getStoredSurface, getStoredTrendWindowHours, state } from "./state.js";
export { DEFAULT_TREND_WINDOW_HOURS, TREND_WINDOW_HOURS_OPTIONS, state } from "./state.js";
import { handleChange, handleClick, handleFocusChange, handleInput, handleKeyDown, handlePointerDown, handlePointerMove, handlePointerUp, handleSettingsInteractionEnd, handleSettingsInteractionStart, handleWheel } from "./event-handlers.js";
import { primeEntities, syncEntities } from "./entity-sync.js";
import { refreshDebugRecordingDeviceStatus } from "../features/debug-recording.js";
import { isFirmwareOtaQuietActive } from "../features/firmware-update.js";
import { render } from "./render-scheduler.js";



  export function setOverviewTheme(theme) {
    state.overviewTheme = theme === "dark" ? "dark" : "light";
    try {
      window.localStorage.setItem("oq-overview-theme", state.overviewTheme);
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  export function setInterfacePanelOpen(open) {
    state.interfacePanelOpen = open === true;
  }

  export function setStoredSurface(surface) {
    try {
      window.localStorage.setItem("oq-active-surface", surface === "native" ? "native" : "app");
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  export function setSettingsGroup(groupId, options = {}) {
    state.settingsGroup = SETTINGS_GROUP_IDS.has(groupId) ? groupId : SETTINGS_GROUPS[0].id;
    try {
      window.localStorage.setItem("oq-settings-group", state.settingsGroup);
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
    if (options.syncUrl !== false && state.appView === "settings") {
      syncUrlAppView(options.syncMode || "replace");
    }
  }

  export function setDevPanelOpen(open) {
    state.devPanelOpen = open === true;
    try {
      window.localStorage.setItem("oq-dev-panel-open", state.devPanelOpen ? "true" : "false");
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  export function setHpVisualMode(mode) {
    state.hpVisualMode = mode === "compact" ? "compact" : "schematic";
    try {
      window.localStorage.setItem("oq-hp-visual-mode", state.hpVisualMode);
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  export function setHpLayoutMode(mode) {
    state.hpLayoutMode = mode === "focus-hp1" || mode === "focus-hp2" ? mode : "equal";
    try {
      window.localStorage.setItem("oq-hp-layout-mode", state.hpLayoutMode);
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  export function isTrendHistoryFlashEnabled() {
    const entity = state.entities?.trendHistoryFlashEnabled;
    if (!entity) {
      return false;
    }
    if (typeof entity.value === "boolean") {
      return entity.value;
    }
    const raw = String(entity.state ?? entity.value ?? "").toLowerCase();
    return raw === "on" || raw === "true" || raw === "1";
  }

  export function getAvailableTrendWindowHoursOptions() {
    return isTrendHistoryFlashEnabled()
      ? TREND_WINDOW_HOURS_OPTIONS
      : TREND_WINDOW_HOURS_OPTIONS.filter((hours) => hours <= 168);
  }

  export function normalizeTrendWindowHours(hours) {
    const options = getAvailableTrendWindowHoursOptions();
    const numeric = Number(hours);
    if (options.includes(numeric)) {
      return numeric;
    }
    if (Number.isFinite(numeric) && numeric > options[options.length - 1]) {
      return options[options.length - 1];
    }
    return options.includes(DEFAULT_TREND_WINDOW_HOURS) ? DEFAULT_TREND_WINDOW_HOURS : options[0];
  }

  export function setTrendWindowHours(hours) {
    state.trendWindowHours = normalizeTrendWindowHours(hours);
    try {
      window.localStorage.setItem("oq-trend-window-hours", String(state.trendWindowHours));
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  export function getDefaultAppView() {
    return "overview";
  }

  export function handleReducedMotionPreferenceChange(event) {
    state.reducedMotion = Boolean(event?.matches);
    if (state.reducedMotion) {
      stopMotionLoop();
      return;
    }
    startMotionLoop();
  }

  export function bindReducedMotionPreference() {
    const media = getReducedMotionMedia();
    if (!media || state.motionPreferenceMedia === media) {
      return;
    }

    state.motionPreferenceMedia = media;
    state.motionPreferenceListener = handleReducedMotionPreferenceChange;
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", state.motionPreferenceListener);
    } else if (typeof media.addListener === "function") {
      media.addListener(state.motionPreferenceListener);
    }
    state.reducedMotion = Boolean(media.matches);
  }

  export function hasLoadedEntities() {
    return Object.keys(state.entities).length > 0;
  }

  export function stopMotionLoop() {
    if (state.motionFrame) {
      window.cancelAnimationFrame(state.motionFrame);
      state.motionFrame = 0;
    }
    state.motionStartedAt = 0;
    clearLegacyMotionVariables();
  }

  export function getEntityPollJitterMs() {
    return POLL_JITTER_MIN_MS + Math.floor(Math.random() * (POLL_JITTER_MAX_MS - POLL_JITTER_MIN_MS + 1));
  }

  export function getEntityPollDelayMs() {
    const base = document.hidden ? HIDDEN_POLL_INTERVAL_MS : FAST_POLL_INTERVAL_MS;
    return base + getEntityPollJitterMs();
  }

  export function scheduleEntityPolling(delayMs = getEntityPollDelayMs()) {
    if (state.pollTimer || state.nativeOpen || state.updateInstallBusy) {
      return;
    }
    if (isFirmwareOtaQuietActive()) {
      return;
    }
    state.pollTimer = window.setTimeout(async () => {
      state.pollTimer = null;
      await syncEntities();
      scheduleEntityPolling();
    }, delayMs);
  }

  export function startEntityPolling() {
    scheduleEntityPolling();
  }

  export function stopEntityPolling() {
    if (!state.pollTimer) {
      return;
    }
    window.clearTimeout(state.pollTimer);
    state.pollTimer = null;
  }

  export function handleVisibilityChange() {
    if (state.nativeOpen) {
      return;
    }
    stopEntityPolling();
    startEntityPolling();
    if (!document.hidden) {
      void syncEntities({ forceProbe: true });
    }
  }

  export function syncSurfaceRuntime(options = {}) {
    syncNativeVisibility();
    if (state.nativeOpen) {
      stopEntityPolling();
      stopMotionLoop();
      if (!state.nativeFrontendLoaded) {
        void ensureNativeFrontendLoaded();
      }
      return;
    }

    startMotionLoop();
    startEntityPolling();

    if (options.refresh === false) {
      return;
    }
    if (!hasLoadedEntities()) {
      void primeEntities();
      return;
    }
    void syncEntities({ forceFast: true });
  }

  export function normalizeAppView(view) {
    if (view === "trends") {
      view = "diagnosis";
    }
    if (!APP_VIEW_IDS.has(view)) {
      return "";
    }
    if (view === "diagnosis" && !isTrendHistoryEnabled()) {
      return "";
    }
    return view;
  }

  export function normalizeUrlToken(value) {
    return String(value || "").trim().toLowerCase();
  }

  export function getUrlAppView() {
    try {
      const url = new URL(window.location.href);
      const rawQueryView = normalizeUrlToken(url.searchParams.get("view") || "");
      const queryView = normalizeAppView(rawQueryView);
      if (queryView) {
        return queryView;
      }

      const rawHashView = normalizeUrlToken(url.hash.replace(/^#/, ""));
      const hashView = normalizeAppView(rawHashView);
      return hashView || "";
    } catch (_error) {
      return "";
    }
  }

  export function getUrlSettingsGroup() {
    try {
      const url = new URL(window.location.href);
      const section = normalizeUrlToken(url.searchParams.get("section") || "");
      if (SETTINGS_GROUP_IDS.has(section)) {
        return section;
      }

      const legacyGroup = normalizeUrlToken(url.searchParams.get("group") || "");
      if (SETTINGS_GROUP_IDS.has(legacyGroup)) {
        return legacyGroup;
      }

      return "";
    } catch (_error) {
      return "";
    }
  }

  export function syncUrlAppView(mode = "replace") {
    try {
      const url = new URL(window.location.href);
      const normalized = normalizeAppView(state.appView) || getDefaultAppView();
      url.searchParams.set("view", normalized);
      if (normalized === "settings") {
        const group = SETTINGS_GROUP_IDS.has(state.settingsGroup) ? state.settingsGroup : SETTINGS_GROUPS[0].id;
        url.searchParams.set("section", group);
        url.searchParams.delete("group");
      } else {
        url.searchParams.delete("section");
        url.searchParams.delete("group");
      }
      if (url.hash && normalizeAppView(url.hash.replace(/^#/, ""))) {
        url.hash = "";
      }

      const method = mode === "push" ? "pushState" : "replaceState";
      window.history[method]({ oqView: normalized, oqSettingsSection: normalized === "settings" ? state.settingsGroup : "" }, "", url.toString());
    } catch (_error) {
      // Ignore history failures in embedded browsers.
    }
  }

  export function setAppView(view, options = {}) {
    const normalized = normalizeAppView(view) || getDefaultAppView();
    const mode = options.syncMode || "replace";
    const changed = state.appView !== normalized;
    state.appView = normalized;

    if (changed || options.forceSync) {
      syncUrlAppView(mode);
    }
  }

  export function handlePopState() {
    const nextView = getUrlAppView() || getDefaultAppView();
    const nextSettingsGroup = nextView === "settings" ? (getUrlSettingsGroup() || state.settingsGroup) : "";
    if (nextView === state.appView && (nextView !== "settings" || nextSettingsGroup === state.settingsGroup)) {
      return;
    }

    state.appView = nextView;
    if (nextView === "settings" && nextSettingsGroup) {
      state.settingsGroup = nextSettingsGroup;
      try {
        window.localStorage.setItem("oq-settings-group", state.settingsGroup);
      } catch (_error) {
        // Ignore storage failures in embedded browsers.
      }
    }
    render();
    void syncEntities({ forceFast: true });
  }

  export function syncNativeVisibility() {
    if (!state.nativeApp) {
      return;
    }

    state.nativeApp.classList.add("oq-native-app");
    state.nativeApp.classList.toggle("oq-native-app--collapsed", !state.nativeOpen);
    state.nativeApp.setAttribute("aria-hidden", state.nativeOpen ? "false" : "true");
  }

  export function boot() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", mountWhenReady, { once: true });
    } else {
      mountWhenReady();
    }
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("oq-mock-updated", handleMockUpdated);
    window.addEventListener("oq-dev-controls-changed", handleDevControlsChanged);
    document.addEventListener("visibilitychange", handleVisibilityChange);
  }

  export function handleMockUpdated() {
    if (!state.mounted) {
      return;
    }
    void syncEntities();
  }

  export function handleDevControlsChanged() {
    if (!state.mounted) {
      return;
    }
    render();
  }

  export function mountWhenReady() {
    ensureViewportMeta();
    let app = document.querySelector("esp-app");
    if (!app) {
      app = document.createElement("esp-app");
      document.body.appendChild(app);
    }

    state.nativeApp = app;
    state.nativeFrontendLoaded = Array.from(document.scripts).some((script) => script.src === OFFICIAL_ESPHOME_UI_URL);

    if (!state.mounted) {
      mountPanel(app);
      state.mounted = true;
      syncSurfaceRuntime();
    }

    syncNativeVisibility();
    if (!state.nativeOpen) {
      void syncEntities();
      void refreshDebugRecordingDeviceStatus({ silent: true });
    }
  }

  export function ensureViewportMeta() {
    if (!document.head) {
      return;
    }

    let viewport = document.head.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement("meta");
      viewport.name = "viewport";
      document.head.appendChild(viewport);
    }
    viewport.setAttribute("content", "width=device-width, initial-scale=1");
  }

  export function mountPanel(app) {
    const root = document.createElement("section");
    root.id = "oq-helper-root";
    root.lang = "nl-NL";
    if (document.documentElement && !document.documentElement.lang) {
      document.documentElement.lang = "nl-NL";
    }
    app.parentNode.insertBefore(root, app);
    root.addEventListener("click", handleClick);
    root.addEventListener("change", handleChange);
    root.addEventListener("input", handleInput);
    root.addEventListener("keydown", handleKeyDown);
    root.addEventListener("wheel", handleWheel, { passive: false });
    root.addEventListener("focusin", handleFocusChange);
    root.addEventListener("focusout", handleFocusChange);
    root.addEventListener("mouseover", handleSettingsInteractionStart);
    root.addEventListener("mouseout", handleSettingsInteractionEnd);
    root.addEventListener("pointerdown", handlePointerDown);
    state.root = root;
    bindReducedMotionPreference();
    const initialUrlView = getUrlAppView() || getDefaultAppView();
    const initialUrlSettingsGroup = initialUrlView === "settings" ? getUrlSettingsGroup() : "";
    if (initialUrlSettingsGroup) {
      setSettingsGroup(initialUrlSettingsGroup, { syncUrl: false });
    }
    setAppView(initialUrlView, { syncMode: "replace", forceSync: true });
    clearLegacyMotionVariables();
    render();
  }

  export function loadScriptOnce(src) {
    return new Promise((resolve, reject) => {
      if (!src) {
        resolve();
        return;
      }

      const existing = Array.from(document.scripts).find((script) => script.src === src);
      if (existing) {
        if (existing.dataset.loaded === "true") {
          resolve();
          return;
        }

        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", (event) => reject(event), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.addEventListener("load", () => {
        script.dataset.loaded = "true";
        resolve();
      }, { once: true });
      script.addEventListener("error", (event) => reject(event), { once: true });
      document.head.appendChild(script);
    });
  }

  export async function ensureNativeFrontendLoaded() {
    if (state.nativeFrontendLoaded || state.nativeFrontendLoading) {
      return;
    }

    state.nativeFrontendLoading = true;
    if (state.nativeOpen) {
      render();
    }
    try {
      await loadScriptOnce(OFFICIAL_ESPHOME_UI_URL);
      state.nativeFrontendLoaded = true;
    } catch (error) {
      state.controlError = `ESPHome fallback kon niet worden geladen. ${error.message || error}`;
      state.nativeOpen = false;
      setStoredSurface("app");
      render();
      syncSurfaceRuntime();
    } finally {
      state.nativeFrontendLoading = false;
      if (state.nativeOpen) {
        render();
      }
    }
  }

  export function bindHeaderDevControls() {
    if (!state.root) {
      return;
    }
    const controls = typeof window !== "undefined" ? window.__OQ_DEV_CONTROLS__ : null;
    if (!controls || typeof controls.bind !== "function") {
      return;
    }
    controls.bind(state.root);
  }

  export function clearLegacyMotionVariables() {
    if (!state.root) {
      return;
    }

    state.root.style.removeProperty("--oq-flow-offset");
    state.root.style.removeProperty("--oq-flow-offset-reverse");
    state.root.style.removeProperty("--oq-fan-rotation");
    if (!state.root.getAttribute("style")) {
      state.root.removeAttribute("style");
    }
  }

  export function refreshMotionTargets() {
    state.motionTargets = {
      pipeFlows: [],
      fanBlades: [],
    };

    if (!state.root) {
      return 0;
    }

    const runningBoards = state.root.querySelectorAll(".oq-hp-schematic-board.is-running");
    runningBoards.forEach((board) => {
      board.querySelectorAll(".oq-hp-tech-pipe-flow").forEach((node) => {
        state.motionTargets.pipeFlows.push(node);
      });
    });

    const waterFlowBoards = state.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)");
    waterFlowBoards.forEach((board) => {
      board.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach((node) => {
        state.motionTargets.pipeFlows.push(node);
      });
    });

    const fanBoards = state.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running");
    fanBoards.forEach((board) => {
      board.querySelectorAll(".oq-hp-tech-fan-blades").forEach((node) => {
        state.motionTargets.fanBlades.push(node);
      });
    });

    return state.motionTargets.pipeFlows.length + state.motionTargets.fanBlades.length;
  }

  export function hasMotionTargets() {
    return state.motionTargets.pipeFlows.length > 0 || state.motionTargets.fanBlades.length > 0;
  }

  export function syncMotionVariables(now = performance.now()) {
    if (!state.root || state.reducedMotion) {
      return false;
    }

    if (!hasMotionTargets() && refreshMotionTargets() === 0) {
      return false;
    }

    if (!state.motionStartedAt) {
      state.motionStartedAt = now;
    }

    const elapsedSeconds = (now - state.motionStartedAt) / 1000;
    const fanRotation = (elapsedSeconds * FAN_ROTATION_DEG_PER_SEC) % 360;

    state.motionTargets.pipeFlows.forEach((node) => {
      const speedMultiplier = node.dataset.oqFlowVariant === "water" ? 0.42 : 1;
      const nodeOffset = -(elapsedSeconds * FLOW_OFFSET_PX_PER_SEC * speedMultiplier);
      node.style.strokeDashoffset = `${nodeOffset.toFixed(3)}px`;
    });
    state.motionTargets.fanBlades.forEach((node) => {
      node.style.transform = `rotate(${fanRotation.toFixed(3)}deg)`;
    });
    return true;
  }

  export function tickMotion(now) {
    if (!syncMotionVariables(now)) {
      state.motionFrame = 0;
      state.motionStartedAt = 0;
      return;
    }
    state.motionFrame = window.requestAnimationFrame(tickMotion);
  }

  export function startMotionLoop() {
    if (state.motionFrame || state.reducedMotion) {
      return;
    }

    if (refreshMotionTargets() === 0) {
      return;
    }

    const now = performance.now();
    state.motionStartedAt = now;
    if (!syncMotionVariables(now)) {
      state.motionStartedAt = 0;
      return;
    }
    state.motionFrame = window.requestAnimationFrame(tickMotion);
  }
