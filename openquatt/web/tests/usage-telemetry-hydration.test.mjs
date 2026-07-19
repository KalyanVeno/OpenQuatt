import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { FAST_OVERVIEW_KEYS, OVERVIEW_KEYS, QUICK_STEPS } from "../js/src/core/config.js";

globalThis.__OQ_PREVIEW__ = false;

const { getPrimeBaseKeys } = await import("../js/src/core/entity-sync.js");

test("usage telemetry is hydrated before Quick Start filters optional steps", () => {
  const usageStep = QUICK_STEPS.find((step) => step.id === "usage-telemetry");

  assert.equal(usageStep?.optionalEntity, "usageTelemetryEnabled");
  assert.ok(getPrimeBaseKeys().includes("usageTelemetryEnabled"));
  assert.ok(FAST_OVERVIEW_KEYS.includes("usageTelemetryEnabled"));
  assert.ok(OVERVIEW_KEYS.includes("usageTelemetryEnabled"));
});

test("usage telemetry disclosure matches the hourly payload scope", async () => {
  const quickStartSource = await readFile(new URL("../js/src/features/quickstart.js", import.meta.url), "utf8");
  const settingsSource = await readFile(new URL("../js/src/settings/privacy.js", import.meta.url), "utf8");

  assert.match(quickStartSource, /ongeveer elk uur via MQTT/);
  assert.match(quickStartSource, /wifi-signaal/);
  assert.match(quickStartSource, /Aan\/uit-status van CiC, OpenTherm-thermostaat, ketelondersteuning, MQTT-inputs en lokale historie/);
  assert.match(quickStartSource, /ketelaansluiting \(aan\/uit of OpenTherm\)/);
  assert.match(quickStartSource, /Geen ingestelde temperaturen, grenzen, MQTT-topics of logs/);
  assert.match(settingsSource, /MQTT-inputs/);
  assert.match(settingsSource, /ketelaansluiting \(aan\/uit of OpenTherm\)/);
  assert.match(settingsSource, /Geen MAC-adres, netwerkadres, MQTT-brokergegevens of -topics/);
});
