import { hasEntity } from "../core/app-shared.js";
import { renderSettingsSection, renderSettingsSwitchField } from "./controls.js";

export function renderSettingsPrivacySection() {
  if (!hasEntity("usageTelemetryEnabled")) {
    return "";
  }

  return renderSettingsSection(
    "Privacy",
    "Gebruiksstatistieken",
    "Delen staat standaard aan. Zet het hier uit als je geen technische gebruiksstatistieken wilt versturen.",
    `<div class="oq-settings-grid">
      ${renderSettingsSwitchField(
        "usageTelemetryEnabled",
        "Technische gebruiksstatistieken delen",
        "Ongeveer elke vier uur via MQTT: een willekeurig installatie-ID, uptime, firmware en releasekanaal, hardwareprofiel en -revisie, opstelling en verbindingstype. De huidige verbinding op poort 1883 is niet versleuteld. Geen MAC-adres, meetwaarden, regelwaarden, instellingen of logs.",
        "Delen staat aan. Uitzetten stopt nieuwe berichten; het installatie-ID blijft lokaal bewaard.",
        "Delen staat uit. Er worden geen gebruiksstatistieken verstuurd.",
      )}
    </div>`,
  );
}
