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
        "Ongeveer elk uur via MQTT: een willekeurig installatie-ID, software- en platforminformatie, technische systeemstatus, de ketelaansluiting (aan/uit of OpenTherm) en de aan/uit-status van CiC, de OpenTherm-thermostaat, ketelondersteuning, MQTT-inputs en lokale historie. Bij wifi gaat ook de signaalsterkte mee. De huidige verbinding op poort 1883 is niet versleuteld. Geen MAC-adres, netwerkadres, MQTT-brokergegevens of -topics, ingestelde temperaturen of grenzen, verwarmingsmetingen, regelwaarden of loginhoud.",
        "Delen staat aan. Uitzetten stopt nieuwe berichten; het installatie-ID blijft lokaal bewaard.",
        "Delen staat uit. Er worden geen gebruiksstatistieken verstuurd.",
      )}
    </div>`,
  );
}
