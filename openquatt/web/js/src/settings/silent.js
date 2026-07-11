import { renderSettingsSection } from "./controls.js";
import { renderSettingsSchemaGrid } from "./schema.js";

const silentSettingsFields = [
  { type: "time", key: "silentStartTime", title: "Start stille uren", copy: "Vanaf dit tijdstip werkt het systeem in stille modus." },
  { type: "time", key: "silentEndTime", title: "Einde stille uren", copy: "Vanaf dit tijdstip stopt de stille modus weer." },
  { type: "slider", key: "silentMax", title: "Maximaal niveau tijdens stille uren", copy: "Zo ver mag het systeem nog opschalen tijdens stille uren." },
  { type: "slider", key: "dayMax", title: "Maximaal niveau overdag", copy: "Zo ver mag het systeem overdag opschalen." },
];

  export function renderSilentSettingsGrid(className = "oq-settings-grid") {
    return renderSettingsSchemaGrid(silentSettingsFields, className);
  }

  export function renderSettingsSilentSection() {
    return renderSettingsSection(
      "Comfort",
      "Stille uren",
      "Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",
      renderSilentSettingsGrid(),
    );
  }

  export function renderSilentSettingsFields() {
    return renderSilentSettingsGrid("oq-settings-grid oq-settings-grid--modal");
  }
