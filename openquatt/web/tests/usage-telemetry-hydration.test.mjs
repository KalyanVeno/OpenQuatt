import assert from "node:assert/strict";
import test from "node:test";

import { FAST_OVERVIEW_KEYS, OVERVIEW_KEYS, QUICK_STEPS } from "../js/src/core/config.js";

test("usage telemetry is hydrated before Quick Start filters optional steps", () => {
  const usageStep = QUICK_STEPS.find((step) => step.id === "usage-telemetry");

  assert.equal(usageStep?.optionalEntity, "usageTelemetryEnabled");
  assert.ok(FAST_OVERVIEW_KEYS.includes("usageTelemetryEnabled"));
  assert.ok(OVERVIEW_KEYS.includes("usageTelemetryEnabled"));
});
