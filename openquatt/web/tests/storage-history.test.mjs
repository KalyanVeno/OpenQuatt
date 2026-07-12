import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;

const { parseDecisionLogStorageMetadata } = await import("../js/src/features/storage-history.js");

test("decision log storage metadata normalizes firmware values", () => {
  const metadata = parseDecisionLogStorageMetadata({
    enabled: true,
    available: true,
    stored_hours: 42,
    capacity_hours: 168,
    oldest_epoch_s: 1783700000,
    newest_epoch_s: 1783850000,
    last_flush_epoch_s: 1783851000,
    storage_bytes: 86016,
    write_count: 44,
  });

  assert.deepEqual(metadata, {
    enabled: true,
    available: true,
    storedHours: 42,
    capacityHours: 168,
    oldestEpochS: 1783700000,
    newestEpochS: 1783850000,
    lastFlushEpochS: 1783851000,
    storageBytes: 86016,
    writeCount: 44,
  });
});

test("decision log storage metadata clamps invalid counters", () => {
  const metadata = parseDecisionLogStorageMetadata({
    stored_hours: -3,
    capacity_hours: 0,
    storage_bytes: "invalid",
  });

  assert.equal(metadata.enabled, false);
  assert.equal(metadata.available, false);
  assert.equal(metadata.storedHours, 0);
  assert.equal(metadata.capacityHours, 168);
  assert.equal(metadata.storageBytes, 0);
});
