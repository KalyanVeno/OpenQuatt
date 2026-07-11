import { escapeHtml } from "../core/html.js";
import {
  renderSettingsButtonField,
  renderSettingsCheckboxSwitchField,
  renderSettingsNamedButtonField,
  renderSettingsNumberField,
  renderSettingsSelectField,
  renderSettingsSliderField,
  renderSettingsStaticField,
  renderSettingsSwitchField,
  renderSettingsTimeField,
} from "./controls.js";

const fieldRenderers = {
  number: (field) => renderSettingsNumberField(field.key, field.title, field.copy, field.className, field.options),
  select: (field) => renderSettingsSelectField(field.key, field.title, field.copy, field.className),
  slider: (field) => renderSettingsSliderField(field.key, field.title, field.copy, field.className, field.options),
  time: (field) => renderSettingsTimeField(field.key, field.title, field.copy, field.className),
  switch: (field) => renderSettingsSwitchField(
    field.key,
    field.title,
    field.copy,
    field.enabledCopy,
    field.disabledCopy,
    field.className,
  ),
  checkboxSwitch: (field) => renderSettingsCheckboxSwitchField(
    field.key,
    field.title,
    field.copy,
    field.label,
    field.className,
  ),
  button: (field) => renderSettingsButtonField(
    field.key,
    field.title,
    field.copy,
    field.buttonLabel,
    field.action,
    field.className,
    field.options,
  ),
  namedButton: (field) => renderSettingsNamedButtonField(
    field.key,
    field.title,
    field.copy,
    field.buttonLabel,
    field.className,
    field.options,
  ),
  static: (field) => renderSettingsStaticField(
    field.key,
    field.title,
    field.copy,
    typeof field.value === "function" ? field.value() : field.value,
    field.className,
  ),
  custom: (field) => field.render(),
};

export function renderSettingsSchemaField(field) {
  if (!field || (field.visibleWhen && !field.visibleWhen())) {
    return "";
  }

  const renderer = fieldRenderers[field.type];
  if (!renderer) {
    throw new Error(`Onbekend settings-veldtype: ${field.type || "(leeg)"}`);
  }
  return renderer({ className: "", options: {}, ...field });
}

export function renderSettingsSchemaFields(fields) {
  return fields.map(renderSettingsSchemaField).filter(Boolean).join("");
}

export function renderSettingsSchemaGrid(fields, className = "oq-settings-grid") {
  const markup = renderSettingsSchemaFields(fields);
  if (!markup) {
    return "";
  }
  return `<div class="${escapeHtml(className)}">${markup}</div>`;
}
