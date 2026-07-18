import { hasEntity } from "../core/app-shared.js";
import { renderSettingsSection, renderSettingsSwitchField } from "./controls.js";

export function renderSettingsPrivacySection() {
  if (!hasEntity("usageTelemetryEnabled")) {
    return "";
  }

  return renderSettingsSection(
    "Privacy",
    "Gebruiksstatistieken",
    "Beheer hier of OpenQuatt beperkte technische gebruiksstatistieken mag delen.",
    `<div class="oq-settings-grid">
      ${renderSettingsSwitchField(
        "usageTelemetryEnabled",
        "Technische gebruiksstatistieken delen",
        "Ongeveer elke vier uur via MQTT met TLS: een willekeurig installatie-ID, uptime, firmware en releasekanaal, hardwareprofiel en -revisie, opstelling en verbindingstype. Geen MAC-adres, meetwaarden, regelwaarden, instellingen of logs.",
        "Delen staat aan. Uitzetten stopt nieuwe berichten; het installatie-ID blijft lokaal bewaard.",
        "Delen staat uit. Er worden geen gebruiksstatistieken verstuurd.",
      )}
    </div>`,
  );
}
