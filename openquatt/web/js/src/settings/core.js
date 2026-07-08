import { getEntityStateText, hasEntity, isEntityActive } from "../core/app-shared.js";
import { renderOqIcon, SETTINGS_GROUP_IDS, SETTINGS_GROUPS, STRATEGY_OPTION_CURVE, STRATEGY_OPTION_POWER_HOUSE } from "../core/config.js";
import { isCurveMode } from "../core/domain-helpers.js";
import { renderNumberInputControl } from "../core/entity-actions.js";
import { formatValue, getEntityValue, getInputDraftValue, getNumberMeta, normalizeNumber, parseLooseNumber, toTimeInputValue } from "../core/entity-store.js";
import { state } from "../core/runtime.js";
import { formatDiagnosticsDateTime, formatUptimeFromMeta, getDeviceIpAddress, getInstallationLabel } from "../features/device-context.js";
import { getUpdateStatus } from "../features/firmware-update.js";
import { getEspTemperatureLabel } from "../features/header-status.js";
import { getWebAuthStatusDetail, getWebAuthStatusLabel } from "../features/security-access.js";
import { renderSettingsCoolingSection } from "./cooling.js";
import { renderSettingsFlowSection, renderSettingsHeatingSection } from "./heating.js";
import { NON_WARNING_FAILURE_NAMES, renderSettingsBoilerCvSection, renderSettingsCompressorSection, renderSettingsDiagnosticsSection, renderSettingsGenerationSection, renderSettingsInstallationMonitoringSection, renderSettingsOduRuntimeFrequencySection, renderSettingsQuickStartSection } from "./installation.js";
import { renderSettingsMqttSection, renderSettingsOpenThermCicSection, renderSettingsSensorSelectionSection } from "./integrations.js";
import { getApiSecurityStatusDetail, getApiSecurityStatusLabel, renderSettingsAccessSecuritySection } from "./security.js";
import { renderSettingsServiceSection } from "./service.js";
import { renderSettingsSilentSection } from "./silent.js";
import { renderSettingsBackupSection, renderSettingsTrendSection } from "./storage.js";
import { getHpWaterRawValue, renderSettingsWaterSection } from "./water.js";
import { formatFailures } from "../views/heatpump.js";
import { escapeHtml } from "../core/html.js";

  export function renderSettingsInfoToggle(infoId, title, copy) {
    if (!copy) {
      return "";
    }

    return `
      <div class="oq-settings-info${state.settingsInfoOpen === infoId ? " is-open" : ""}" data-oq-settings-info="${escapeHtml(infoId)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${escapeHtml(infoId)}"
          aria-label="${escapeHtml(`Uitleg bij ${title}`)}"
          aria-expanded="${state.settingsInfoOpen === infoId ? "true" : "false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${state.settingsInfoOpen === infoId ? "" : "hidden"}>
          <p>${escapeHtml(copy)}</p>
        </div>
      </div>
    `;
  }

  export function renderSettingsFieldCard(fieldKey, title, copy, controlMarkup, className = "", footerMarkup = "") {
    return `<article class="oq-settings-field${className ? ` ${className}` : ""}" data-oq-settings-field="${escapeHtml(fieldKey)}"><div class="oq-settings-field-head"><h3>${escapeHtml(title)}</h3>${renderSettingsInfoToggle(fieldKey, title, copy)}</div><div class="oq-settings-field-control">${controlMarkup}</div>${footerMarkup}</article>`;
  }

  export function renderSettingsStaticField(fieldKey, title, copy, value, className = "") {
    return renderSettingsFieldCard(fieldKey, title, copy, `<div class="oq-settings-static-value">${escapeHtml(value)}</div>`, className);
  }

  export function getSettingsStatValue(key, options = {}) {
    const config = typeof options === "number"
      ? { decimals: options }
      : (options || {});
    const entity = state.entities[key];
    if (!entity) {
      return "—";
    }

    const numeric = Number(entity.value);
    if (!Number.isNaN(numeric)) {
      const decimals = Number.isInteger(numeric)
        ? 0
        : Number.isFinite(config.decimals) ? config.decimals : 1;
      let formatted = numeric.toFixed(Math.max(0, decimals));
      if (config.trimTrailingZeros && formatted.includes(".")) {
        formatted = formatted.replace(/\.?0+$/, "");
      }
      return `${formatted}${entity.uom ? ` ${entity.uom}` : ""}`;
    }

    const text = String(entity.state ?? entity.value ?? "").trim();
    const normalizedText = text.toLowerCase();
    return !text || normalizedText === "nan" || normalizedText === "unknown" || normalizedText === "unavailable" ? "—" : text;
  }

  export function getSettingsTextStatValue(key, fallback = "—") {
    const entity = state.entities[key];
    if (!entity) {
      return fallback;
    }

    const text = String(entity.state ?? entity.value ?? "").trim();
    if (!text || text === "0" || text === "—") {
      return fallback;
    }

    return text;
  }

  export function formatSettingsNumberValue(value, unit = "", decimals = 2) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      return "—";
    }
    return `${numeric.toFixed(Math.max(0, decimals))}${unit ? ` ${unit}` : ""}`;
  }

  export function getSettingsTemperatureValue(key, decimals = 2) {
    return getSettingsStatValue(key, { decimals });
  }

  export function getStatusTextValue(key, fallback = "IDLE") {
    const rawValue = getSettingsTextStatValue(key, fallback);
    const normalized = String(rawValue ?? "").trim();
    if (!normalized || normalized === "0" || normalized === "UNKNOWN" || normalized === "UNAVAILABLE" || normalized === "NAN") {
      return fallback;
    }
    return normalized;
  }

  export function getCommissioningStatusValue() {
    const rawStatus = getSettingsTextStatValue("commissioningStatus", "");
    const cm100Active = isEntityActive("cm100Active");
    const normalizedRawStatus = String(rawStatus || "").trim().toUpperCase();
    if (
      cm100Active
      || normalizedRawStatus === "CM100 READY"
      || normalizedRawStatus === "CM100 STOPPED"
      || normalizedRawStatus.includes("DONE")
      || normalizedRawStatus.includes("FAILED")
      || normalizedRawStatus.includes("ABORT")
      || normalizedRawStatus.includes("APPLIED")
      || normalizedRawStatus.includes("REFUSED")
    ) {
      state.pendingCommissioningCm100Start = false;
    }
    if (normalizedRawStatus && normalizedRawStatus !== "0") {
      if (normalizedRawStatus === "IDLE" && state.pendingCommissioningCm100Start) {
        return "CM100 REQUESTED";
      }
      return normalizedRawStatus;
    }
    if (state.pendingCommissioningCm100Start) {
      return "CM100 REQUESTED";
    }
    return cm100Active ? "CM100 READY" : "IDLE";
  }

  export function formatSettingsOptionLabel(option) {
    const value = String(option || "").trim();
    if (!value) {
      return "";
    }

    const labels = {
      None: "Geen",
      Manual: "Handmatig",
      Balanced: "Gebalanceerd",
      Stable: "Stabiel",
      Responsive: "Direct",
      Calm: "Rustig",
      Custom: "Aangepast",
      [STRATEGY_OPTION_CURVE]: "Stooklijn",
      [STRATEGY_OPTION_POWER_HOUSE]: "Power House",
      "Dew point required": "Dauwpuntmeting vereist",
      "Dew point": "Dauwpunt",
      "Dew point (MQTT)": "Dauwpunt (MQTT)",
      "Dew point (HA)": "Dauwpunt (HA)",
      "Allow without dew point": "Dauwpuntsbenadering",
      "Allow without dew point, use fallback": "Dauwpuntsbenadering",
      "Allow without dew point, use dew point approximation": "Dauwpuntsbenadering",
      "Allow without dew point, user responsibility": "Expliciet toestaan",
      Fallback: "Dauwpuntsbenadering",
      "Fallback blocked": "Dauwpuntsbenadering geblokkeerd",
      "User responsibility": "Expliciet toegestaan",
      Local: "Lokaal",
      CIC: "CIC",
      "HA input": "HA-invoer",
      "CIC + HA input": "CIC + HA-invoer",
      "OT thermostat": "OT-thermostaat",
      "Outdoor unit": "Buitenunit",
      Auto: "Auto",
      "CIC or HA input": "CIC of HA-invoer",
      "Flowmeter HP1": "Flowmeter HP1",
      "Flowmeter HP2": "Flowmeter HP2",
      "Local aggregate HP1/HP2": "Gecombineerde flow HP1/HP2",
    };

    return labels[value] || value;
  }

  export function renderSettingsChoiceOption({ key, option, currentValue, busy, copy = "", meta = "", image = "", imageAlt = "", infoTitle = "", infoCopy = "", infoId = "" }) {
    const active = option === currentValue;
    const cardBody = `
      <button
        class="oq-settings-choice-card${active ? " is-active" : ""}${image ? " oq-settings-choice-card--with-image" : ""}${infoCopy ? " oq-settings-choice-card--has-info" : ""}"
        type="button"
        data-oq-action="select-settings-option"
        data-select-key="${escapeHtml(key)}"
        data-select-option="${escapeHtml(option)}"
        aria-pressed="${active ? "true" : "false"}"
        ${busy ? "disabled" : ""}
      >
        <span class="oq-settings-choice-head">
          <span class="oq-settings-choice-title">${escapeHtml(formatSettingsOptionLabel(option))}</span>
          ${meta ? `<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${escapeHtml(meta)}</span></span>` : ""}
        </span>
        ${image ? `<span class="oq-settings-choice-media"><img src="${escapeHtml(image)}" alt="${escapeHtml(imageAlt || formatSettingsOptionLabel(option))}" loading="lazy" decoding="async"></span>` : ""}
        ${copy ? `<span class="oq-settings-choice-copy">${escapeHtml(copy)}</span>` : ""}
      </button>
    `;
    if (!infoCopy) {
      return cardBody;
    }

    const toggleTitle = infoTitle || formatSettingsOptionLabel(option);
    const toggleId = infoId || `${key}-${option}`;
    return `
      <article class="oq-settings-choice-card-shell${active ? " is-active" : ""}${image ? " oq-settings-choice-card-shell--with-image" : ""}">
        ${cardBody}
        ${renderSettingsInfoToggle(toggleId, toggleTitle, infoCopy)}
      </article>
    `;
  }

  export function getSelectEntityOptions(entity = {}) {
    if (Array.isArray(entity.option)) {
      return entity.option;
    }
    if (Array.isArray(entity.options)) {
      return entity.options;
    }
    return [];
  }

  export function renderSettingsSelectField(key, title, copy, className = "") {
    if (!hasEntity(key)) {
      return "";
    }
    const entity = state.entities[key] || {};
    const value = String(getEntityValue(key) || "");
    const options = getSelectEntityOptions(entity);
    return renderSettingsFieldCard(key, title, copy, `<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${escapeHtml(key)}" ${state.loadingEntities ? "disabled" : ""}>${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(formatSettingsOptionLabel(option))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`, className);
  }

  export function renderSettingsSwitchPill(key, enabled, onLabel = "Aan", offLabel = "Uit") {
    return `<span class="oq-settings-toggle-state${enabled ? " is-on" : ""}" data-oq-switch-pill="${escapeHtml(key)}" data-on-label="${escapeHtml(onLabel)}" data-off-label="${escapeHtml(offLabel)}">${escapeHtml(enabled ? onLabel : offLabel)}</span>`;
  }

  export function renderSettingsCompactSwitchControl(key, title, enabled, busy, onLabel = "Aan", offLabel = "Uit", showStatus = true) {
    const stateLabel = enabled ? onLabel : offLabel;
    const nextState = enabled ? "off" : "on";
    return `
      <div class="oq-settings-compact-switch-row">
        ${showStatus ? renderSettingsSwitchPill(key, enabled, onLabel, offLabel) : ""}
        <button
          class="oq-settings-toggle-switch${enabled ? " is-on" : ""}"
          type="button"
          role="switch"
          data-oq-action="toggle-overview-control"
          data-control-key="${escapeHtml(key)}"
          data-control-state="${escapeHtml(nextState)}"
          data-switch-title="${escapeHtml(title)}"
          data-on-label="${escapeHtml(onLabel)}"
          data-off-label="${escapeHtml(offLabel)}"
          aria-checked="${enabled ? "true" : "false"}"
          aria-label="${escapeHtml(`${title}: ${stateLabel}`)}"
          ${busy ? "disabled" : ""}
        >
          <span class="oq-settings-toggle-switch-track" aria-hidden="true">
            <span class="oq-settings-toggle-switch-knob"></span>
          </span>
        </button>
      </div>
    `;
  }

  export function renderSettingsSwitchCopy(key, enabled, enabledCopy = "", disabledCopy = "") {
    const copy = enabled ? enabledCopy : disabledCopy;
    if (!copy) {
      return "";
    }
    return `<p data-oq-switch-copy="${escapeHtml(key)}" data-on-copy="${escapeHtml(enabledCopy)}" data-off-copy="${escapeHtml(disabledCopy)}">${escapeHtml(copy)}</p>`;
  }

  export function renderSettingsSwitchField(key, title, copy, enabledCopy = "", disabledCopy = "", className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const enabled = Boolean(getEntityValue(key));
    const busy = state.loadingEntities || state.busyAction === `switch-${key}`;
    return renderSettingsFieldCard(
      key,
      title,
      copy,
      `
        <div class="oq-settings-compact-switch-field">
          ${renderSettingsCompactSwitchControl(key, title, enabled, busy)}
          ${renderSettingsSwitchCopy(key, enabled, enabledCopy, disabledCopy)}
        </div>
      `,
      className,
    );
  }

  export function renderSettingsCheckboxSwitchField(key, title, copy, label, className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const enabled = Boolean(getEntityValue(key));
    const busy = state.loadingEntities || state.busyAction === `switch-${key}`;
    return renderSettingsFieldCard(
      key,
      title,
      copy,
      `
        <div class="oq-settings-compact-switch-field">
          ${renderSettingsCompactSwitchControl(key, title, enabled, busy)}
          ${label ? `<p>${escapeHtml(label)}</p>` : ""}
        </div>
      `,
      className,
    );
  }

  export function renderSettingsIntegrationSwitchCard(key, title, copy) {
    if (!hasEntity(key)) {
      return "";
    }

    const enabled = Boolean(getEntityValue(key));
    const busy = state.loadingEntities || state.busyAction === `switch-${key}`;
    return `
      <article class="oq-settings-integration-card" data-oq-settings-field="${escapeHtml(key)}">
        <div class="oq-settings-integration-card-head">
          <h4>${escapeHtml(title)}</h4>
        </div>
        <p>${escapeHtml(copy)}</p>
        ${renderSettingsCompactSwitchControl(key, title, enabled, busy)}
      </article>
    `;
  }

  export function renderSettingsButtonField(key, title, copy, buttonLabel, action, className = "", options = {}) {
    const busy = state.loadingEntities || state.busyAction === key;
    const disabled = options.disabled === true;
    const buttonClass = options.buttonClass || "oq-helper-button oq-helper-button--ghost";
    const note = options.note || "";
    return renderSettingsFieldCard(
      key,
      title,
      copy,
      `
        <div class="oq-settings-action-field">
          <button
            class="${buttonClass}"
            type="button"
            data-oq-action="${escapeHtml(action)}"
            ${options.buttonKey ? `data-oq-button-key="${escapeHtml(options.buttonKey)}"` : ""}
            ${busy || disabled ? "disabled" : ""}
          >
            ${escapeHtml(buttonLabel)}
          </button>
          ${note ? `<p class="oq-settings-action-note">${escapeHtml(note)}</p>` : ""}
        </div>
      `,
      className,
    );
  }

  export function renderSettingsNamedButtonField(key, title, copy, buttonLabel, className = "", options = {}) {
    return renderSettingsButtonField(
      key,
      title,
      copy,
      buttonLabel,
      "press-named-button",
      className,
      {
        ...options,
        buttonKey: options.buttonKey || key,
      },
    );
  }

  export function renderNamedActionButton(buttonKey, label, buttonClass = "oq-helper-button oq-helper-button--ghost", disabled = false) {
    return `
      <button
        class="${buttonClass}"
        type="button"
        data-oq-action="press-named-button"
        data-oq-button-key="${escapeHtml(buttonKey)}"
        ${disabled ? "disabled" : ""}
      >
        ${escapeHtml(label)}
      </button>
    `;
  }

  export function renderNamedToggleActionButton({
    active,
    startKey,
    stopKey,
    startLabel,
    stopLabel,
    startClass = "oq-helper-button oq-helper-button--primary",
    stopClass = "oq-helper-button oq-helper-button--ghost",
    startDisabled = false,
    stopDisabled = false,
  }) {
    const key = active ? stopKey : startKey;
    const label = active ? stopLabel : startLabel;
    const buttonClass = active ? stopClass : startClass;
    const disabled = active ? stopDisabled : startDisabled;
    return renderNamedActionButton(key, label, buttonClass, disabled);
  }

  export function renderSettingsOptionCardsField(key, title, copy, descriptions, className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const entity = state.entities[key] || {};
    const currentValue = String(getEntityValue(key) || "");
    const options = getSelectEntityOptions(entity);
    const busy = state.loadingEntities || state.busyAction === `save-${key}`;
    const controlMarkup = `
      <div class="oq-settings-choice-grid">
        ${options.map((option) => {
          const description = descriptions[option] || "";
          const optionCopy = typeof description === "string" ? description : (description.copy || "");
          const optionImage = typeof description === "string" ? "" : (description.image || "");
          const optionImageAlt = typeof description === "string" ? "" : (description.alt || "");
          return renderSettingsChoiceOption({ key, option, currentValue, busy, copy: optionCopy, image: optionImage, imageAlt: optionImageAlt });
        }).join("")}
      </div>
    `;

    return renderSettingsFieldCard(key, title, copy, controlMarkup, className);
  }

  export function renderSettingsNumberField(key, title, copy, className = "", options = {}) {
    if (!hasEntity(key)) {
      return "";
    }

    const meta = getNumberMeta(key);
    const value = getInputDraftValue(key);
    const unit = options.unitOverride || meta.uom || "";
    const showUnit = options.showUnit !== false && Boolean(unit);
    const useInlineUnit = showUnit && options.unitMode !== "outside";
    const controlMarkup = renderNumberInputControl({
      key,
      value,
      meta,
      controlClass: `oq-helper-control${showUnit && !useInlineUnit ? " oq-helper-control--split" : ""}${useInlineUnit ? " oq-helper-control--suffix" : ""}`,
      unitMarkup: showUnit
        ? useInlineUnit
          ? `<span class="oq-helper-unit-chip">${escapeHtml(unit)}</span>`
          : `<span class="oq-helper-unit">${escapeHtml(unit)}</span>`
        : "",
    });

    return renderSettingsFieldCard(key, title, copy, controlMarkup, className, options.footerMarkup || "");
  }

  export function renderSettingsSliderField(key, title, copy, className = "", options = {}) {
    if (!hasEntity(key)) {
      return "";
    }
    const meta = getNumberMeta(key);
    const value = normalizeNumber(key, getEntityValue(key));
    const minLabel = options.minLabel || `${meta.min}${meta.uom || ""}`;
    const maxLabel = options.maxLabel || `${meta.max}${meta.uom || ""}`;
    const valueLabel = options.valueLabel || formatValue(key, value);
    return renderSettingsFieldCard(key, title, copy, `<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${escapeHtml(minLabel)}</span><strong>${escapeHtml(valueLabel)}</strong><span>${escapeHtml(maxLabel)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${escapeHtml(key)}" min="${meta.min}" max="${meta.max}" step="${meta.step}" value="${value}" ${state.loadingEntities ? "disabled" : ""}></label>`, className);
  }

  export function renderSettingsMiniNumberField(key, title, copy, options = {}) {
    if (!hasEntity(key)) {
      return "";
    }

    const meta = getNumberMeta(key);
    const value = getInputDraftValue(key);
    const compact = options.compact === true;
    const embedded = options.embedded === true;
    const infoId = options.infoId || key;
    const showCopy = options.showCopy !== false;
    return `
      <article class="oq-settings-mini-field${compact ? " oq-settings-mini-field--compact" : ""}${embedded ? " oq-settings-mini-field--embedded" : ""}">
        <div class="oq-settings-mini-copy">
          <div class="oq-settings-mini-copy-head">
            <h5>${escapeHtml(title)}</h5>
            ${copy ? renderSettingsInfoToggle(infoId, title, copy) : ""}
          </div>
          ${copy && showCopy ? `<p>${escapeHtml(copy)}</p>` : ""}
        </div>
        ${renderNumberInputControl({
          key,
          value,
          meta,
          controlClass: "oq-helper-control oq-helper-control--suffix",
          inputClass: "oq-helper-input oq-helper-input--compact-number",
          unitMarkup: meta.uom ? `<span class="oq-helper-unit-chip">${escapeHtml(meta.uom)}</span>` : "",
        })}
      </article>
    `;
  }

  export function renderSettingsTimeField(key, title, copy, className = "") {
    if (!hasEntity(key)) {
      return "";
    }
    const value = toTimeInputValue(getEntityValue(key));
    return renderSettingsFieldCard(key, title, copy, `<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${escapeHtml(key)}" value="${escapeHtml(value)}" ${state.loadingEntities ? "disabled" : ""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`, className || "oq-settings-field--time");
  }

  export function renderSettingsSection(kicker, title, copy, body, badgeMarkup = "") {
    return `<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${escapeHtml(kicker)}</p>${badgeMarkup ? `<div class="oq-settings-section-head-meta-badge">${badgeMarkup}</div>` : ""}</div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></div>${body}</section>`;
  }

  export function renderSettingsGroupNav() {
    const activeGroup = SETTINGS_GROUP_IDS.has(state.settingsGroup) ? state.settingsGroup : SETTINGS_GROUPS[0].id;
    return `
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${SETTINGS_GROUPS.map((group) => `
          <button
            class="oq-settings-group-button${group.id === activeGroup ? " is-active" : ""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${escapeHtml(group.id)}"
            aria-pressed="${group.id === activeGroup ? "true" : "false"}"
          >
            ${renderOqIcon(group.icon, "oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${escapeHtml(group.label)}</span>
          </button>
        `).join("")}
      </nav>
    `;
  }

  export function renderSettingsGroupContent() {
    const activeGroup = SETTINGS_GROUP_IDS.has(state.settingsGroup) ? state.settingsGroup : SETTINGS_GROUPS[0].id;
    const sections = activeGroup === "installation"
      ? [
          renderSettingsGenerationSection(),
          renderSettingsBoilerCvSection(),
          renderSettingsFlowSection(),
          renderSettingsSilentSection(),
          renderSettingsWaterSection(),
          renderSettingsCompressorSection(),
          renderSettingsOduRuntimeFrequencySection(),
        ]
      : activeGroup === "service"
        ? [
            renderSettingsInstallationMonitoringSection(),
            renderSettingsServiceSection(),
          ]
      : activeGroup === "heating"
        ? [renderSettingsHeatingSection()]
      : activeGroup === "cooling"
        ? [renderSettingsCoolingSection()]
        : activeGroup === "integrations"
            ? [
                renderSettingsOpenThermCicSection(),
                renderSettingsMqttSection(),
                renderSettingsSensorSelectionSection(),
              ]
            : [
                renderSettingsQuickStartSection(),
                renderSettingsTrendSection(),
                renderSettingsAccessSecuritySection(),
                renderSettingsBackupSection(),
                renderSettingsDiagnosticsSection(),
              ];

    return `
      <div class="oq-settings-group-stack">
        ${sections.filter(Boolean).join("")}
      </div>
    `;
  }

  export function patchSettingsDom() {
    if (!state.root || state.appView !== "settings") {
      return false;
    }

    const nav = state.root.querySelector(".oq-settings-group-nav");
    const stack = state.root.querySelector(".oq-settings-group-stack");
    if (!nav || !stack) {
      return false;
    }

    const activeGroup = SETTINGS_GROUP_IDS.has(state.settingsGroup) ? state.settingsGroup : SETTINGS_GROUPS[0].id;
    if (activeGroup === "service") {
      return false;
    }

    const navButtons = nav.querySelectorAll(".oq-settings-group-button");
    if (navButtons.length !== SETTINGS_GROUPS.length) {
      return false;
    }

    navButtons.forEach((button) => {
      const groupId = String(button.dataset.groupId || "");
      const active = groupId === activeGroup;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    stack.querySelectorAll(".oq-settings-info").forEach((info) => {
      const infoId = String(info.dataset.oqSettingsInfo || "");
      const open = state.settingsInfoOpen === infoId;
      info.classList.toggle("is-open", open);
      const popover = info.querySelector(".oq-settings-info-popover");
      if (popover) {
        popover.hidden = !open;
      }
      const button = info.querySelector(".oq-settings-info-button");
      if (button) {
        button.setAttribute("aria-expanded", open ? "true" : "false");
      }
    });

    stack.querySelectorAll("[data-oq-settings-field]").forEach((card) => {
      const key = String(card.dataset.oqSettingsField || "");
      if (!key) {
        return;
      }

      const staticValue = card.querySelector(".oq-settings-static-value");
      if (staticValue) {
        const text = getEntityStateText(key);
        if (staticValue.textContent !== text) {
          staticValue.textContent = text;
        }
      }

      card.querySelectorAll('select[data-oq-field]').forEach((select) => {
        const fieldKey = String(select.dataset.oqField || key);
        const value = String(getEntityValue(fieldKey) || "");
        if (select.value !== value) {
          select.value = value;
        }
      });

      card.querySelectorAll('input[data-oq-field]').forEach((input) => {
        const fieldKey = String(input.dataset.oqField || key);
        const value = String(getInputDraftValue(fieldKey) || "");
        if (input.value !== value) {
          input.value = value;
        }
      });

      const sliderValue = card.querySelector(".oq-helper-slider-meta strong");
      const rangeInput = card.querySelector('input[type="range"][data-oq-field]');
      if (sliderValue && rangeInput) {
        const text = formatValue(key, normalizeNumber(key, getEntityValue(key)));
        if (sliderValue.textContent !== text) {
          sliderValue.textContent = text;
        }
      }
    });

    stack.querySelectorAll('[data-select-key]').forEach((button) => {
      const key = String(button.dataset.selectKey || "");
      const option = String(button.dataset.selectOption || "");
      const currentValue = String(getEntityValue(key) || "");
      const active = option === currentValue;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
      if (key === "strategy") {
        button.disabled = state.loadingEntities || state.busyAction === "save-strategy";
      } else if (key === "hpGeneration") {
        button.disabled = state.loadingEntities || state.busyAction === "save-hpGeneration";
      } else if (key === "curveControlProfile") {
        button.disabled = state.loadingEntities || state.busyAction === "save-curveControlProfile";
      } else if (key === "phResponseProfile") {
        button.disabled = state.loadingEntities || state.busyAction === "save-phResponseProfile";
      }

      const shell = button.closest(".oq-settings-choice-card-shell");
      if (shell) {
        shell.classList.toggle("is-active", active);
      }
    });

    const customProfileCard = stack.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");
    if (customProfileCard) {
      const customActive = String(getEntityValue("phResponseProfile") || "") === "Custom";
      customProfileCard.classList.toggle("is-active", customActive);
      const numberInputs = customProfileCard.querySelectorAll("input[data-oq-field]");
      numberInputs.forEach((input) => {
        const key = String(input.dataset.oqField || "");
        const value = String(getInputDraftValue(key) || "");
        if (input.value !== value) {
          input.value = value;
        }
      });
    }

    stack.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach((button) => {
      const key = String(button.dataset.controlKey || "");
      const current = Boolean(getEntityValue(key));
      const onLabel = String(button.dataset.onLabel || "Aan");
      const offLabel = String(button.dataset.offLabel || "Uit");
      const title = String(button.dataset.switchTitle || key);
      const stateLabel = current ? onLabel : offLabel;
      button.dataset.controlState = current ? "off" : "on";
      button.classList.toggle("is-on", current);
      button.setAttribute("aria-checked", current ? "true" : "false");
      button.setAttribute("aria-label", `${title}: ${stateLabel}`);
      button.disabled = state.loadingEntities || state.busyAction === `switch-${key}`;
    });

    stack.querySelectorAll("[data-oq-switch-pill]").forEach((pill) => {
      const key = String(pill.dataset.oqSwitchPill || "");
      const enabled = Boolean(getEntityValue(key));
      const onLabel = String(pill.dataset.onLabel || "Aan");
      const offLabel = String(pill.dataset.offLabel || "Uit");
      const label = enabled ? onLabel : offLabel;
      pill.classList.toggle("is-on", enabled);
      if (pill.textContent !== label) {
        pill.textContent = label;
      }
    });

    stack.querySelectorAll("[data-oq-switch-copy]").forEach((copyNode) => {
      const key = String(copyNode.dataset.oqSwitchCopy || "");
      const enabled = Boolean(getEntityValue(key));
      const onCopy = String(copyNode.dataset.onCopy || "");
      const offCopy = String(copyNode.dataset.offCopy || "");
      const copy = enabled ? onCopy : offCopy;
      copyNode.hidden = !copy;
      if (copyNode.textContent !== copy) {
        copyNode.textContent = copy;
      }
    });

    const generationStatus = stack.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");
    if (generationStatus) {
      const valueNode = generationStatus.querySelector(".oq-settings-quickstart-status-value");
      const copyNode = generationStatus.querySelector(".oq-settings-quickstart-status-copy");
      const button = generationStatus.querySelector('button[data-oq-action="open-generation-modal"]');
      const currentLabel = getInstallationLabel();
      const entity = state.entities.hpGeneration || {};
      const canEdit = hasEntity("hpGeneration") && getSelectEntityOptions(entity).length > 0;
      if (valueNode) {
        const value = currentLabel || "Onbekend";
        if (valueNode.textContent !== value) {
          valueNode.textContent = value;
        }
      }
      if (copyNode) {
        const copy = "Pas dit aan als je een andere Quatt Hybrid hebt.";
        if (copyNode.textContent !== copy) {
          copyNode.textContent = copy;
        }
      }
      if (button) {
        button.disabled = !canEdit || state.loadingEntities || state.busyAction === "save-hpGeneration";
      }
    }

    const commissioningTeaser = stack.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");
    if (commissioningTeaser) {
      const valueNode = commissioningTeaser.querySelector(".oq-settings-quickstart-status-value");
      const copyNode = commissioningTeaser.querySelector(".oq-settings-quickstart-status-copy");
      const button = commissioningTeaser.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]');
      const cm100Status = getCommissioningStatusValue();
      const cm100Active = isEntityActive("cm100Active");
      if (valueNode && valueNode.textContent !== cm100Status) {
        valueNode.textContent = cm100Status;
      }
      const copy = cm100Active
        ? "CM100 is actief en klaar voor commissioning."
        : "Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";
      if (copyNode && copyNode.textContent !== copy) {
        copyNode.textContent = copy;
      }
      if (button) {
        button.disabled = state.loadingEntities;
      }
    }

    const quickStartStatus = stack.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");
    if (quickStartStatus) {
      const valueNode = quickStartStatus.querySelector(".oq-settings-quickstart-status-value");
      const copyNode = quickStartStatus.querySelector(".oq-settings-quickstart-status-copy");
      const button = quickStartStatus.querySelector('button[data-oq-action="reset"]');
      const statusLabel = state.complete === true ? "Afgerond" : state.complete === false ? "Open" : "Laden...";
      const statusCopy = state.complete === true
        ? "Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset."
        : state.complete === false
          ? "Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen."
          : "De status van Quick Start wordt nog geladen.";
      if (valueNode && valueNode.textContent !== statusLabel) {
        valueNode.textContent = statusLabel;
      }
      if (copyNode && copyNode.textContent !== statusCopy) {
        copyNode.textContent = statusCopy;
      }
      if (button) {
        button.disabled = state.busyAction === "reset";
      }
    }

    const accessRows = stack.querySelectorAll('[data-oq-access-security-item]');
    if (accessRows.length) {
      accessRows.forEach((row) => {
        const item = String(row.dataset.oqAccessSecurityItem || "");
        const valueNode = row.querySelector(".oq-settings-quickstart-status-value");
        const copyNode = row.querySelector(".oq-settings-quickstart-status-copy");
        const button = row.querySelector("button[data-oq-action]");
        if (item === "login") {
          const statusLabel = getWebAuthStatusLabel();
          const statusCopy = getWebAuthStatusDetail();
          if (valueNode && valueNode.textContent !== statusLabel) {
            valueNode.textContent = statusLabel;
          }
          if (copyNode && copyNode.textContent !== statusCopy) {
            copyNode.textContent = statusCopy;
          }
        } else if (item === "api") {
          const statusLabel = getApiSecurityStatusLabel();
          const statusCopy = getApiSecurityStatusDetail();
          if (valueNode && valueNode.textContent !== statusLabel) {
            valueNode.textContent = statusLabel;
          }
          if (copyNode && copyNode.textContent !== statusCopy) {
            copyNode.textContent = statusCopy;
          }
        }
        if (button) {
          button.disabled = false;
        }
      });
    }


    const systemSummary = stack.querySelector(".oq-settings-system-summary");
    if (systemSummary) {
      const rows = systemSummary.querySelectorAll(".oq-settings-system-row");
      const values = {
        uptime: formatUptimeFromMeta(),
        ip: getDeviceIpAddress(),
        updates: getUpdateStatus(),
        datetime: formatDiagnosticsDateTime(),
        espTemp: getEspTemperatureLabel(),
        restart: "Opnieuw opstarten",
      };

      rows.forEach((row) => {
        const valueNode = row.querySelector(".oq-settings-system-row-value");
        const key = row.dataset.oqDiagnosticsRow || "";
        if (!valueNode) {
          return;
        }
        if (Object.prototype.hasOwnProperty.call(values, key)) {
          const nextValue = values[key];
          if (valueNode.textContent !== nextValue) {
            valueNode.textContent = nextValue;
          }
        }
      });

      const updateButton = systemSummary.querySelector('button[data-oq-action="open-update-modal"]');
      if (updateButton) {
        updateButton.disabled = false;
      }
      const restartButton = systemSummary.querySelector('button[data-oq-action="open-restart-confirm"]');
      if (restartButton) {
        const busyRestart = state.busyAction === "restartAction";
        restartButton.disabled = busyRestart;
        restartButton.textContent = busyRestart ? "Herstarten..." : "Herstarten";
      }
    }

    stack.querySelectorAll(".oq-settings-hp-offset-row").forEach((row) => {
      const offsetKey = String(row.dataset.oqSettingsField || "");
      const rawKey = String(row.dataset.oqHpOffsetRawKey || "");
      const finalKey = String(row.dataset.oqHpOffsetFinalKey || "");
      if (!offsetKey || !rawKey || !finalKey) {
        return;
      }
      const meta = getNumberMeta(offsetKey);
      const raw = getHpWaterRawValue(rawKey, finalKey, offsetKey);
      const offsetDraft = parseLooseNumber(getInputDraftValue(offsetKey));
      const finalFromDraft = Number.isFinite(raw) && Number.isFinite(offsetDraft)
        ? formatSettingsNumberValue(raw + offsetDraft, meta.uom || "°C", 2)
        : getSettingsTemperatureValue(finalKey, 2);
      const activeNode = row.querySelector("[data-oq-hp-offset-active]");
      if (activeNode) {
        const activeText = `${getSettingsTemperatureValue(finalKey, 2)} actief`;
        if (activeNode.textContent !== activeText) {
          activeNode.textContent = activeText;
        }
      }
      const rawNode = row.querySelector("[data-oq-hp-offset-raw]");
      if (rawNode) {
        const rawText = Number.isFinite(raw)
          ? formatSettingsNumberValue(raw, meta.uom || "°C", 2)
          : getSettingsTemperatureValue(rawKey, 2);
        if (rawNode.textContent !== rawText) {
          rawNode.textContent = rawText;
        }
      }
      const finalNode = row.querySelector("[data-oq-hp-offset-final]");
      if (finalNode && finalNode.textContent !== finalFromDraft) {
        finalNode.textContent = finalFromDraft;
      }
    });

    const curveShell = stack.querySelector(".oq-settings-curve-shell");
    const currentCurveMode = isCurveMode();
    if (Boolean(curveShell) !== currentCurveMode) {
      return false;
    }

    const customCardExists = Boolean(customProfileCard);
    const customProfileActive = String(getEntityValue("phResponseProfile") || "") === "Custom";
    if (customCardExists !== customProfileActive) {
      return false;
    }

    return true;
  }

  export function getWarningFailureItems(value) {
    const formatted = formatFailures(value);
    if (formatted === "Geen actieve storingen") {
      return [];
    }
    return formatted
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item && !NON_WARNING_FAILURE_NAMES.has(item.toLowerCase()));
  }

  export function formatWarningFailures(value) {
    const warningItems = getWarningFailureItems(value);
    return warningItems.length > 0 ? warningItems.join(", ") : "Geen actieve storingen";
  }
