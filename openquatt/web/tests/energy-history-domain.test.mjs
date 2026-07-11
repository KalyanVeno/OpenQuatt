import assert from "node:assert/strict";
import test from "node:test";

import {
  getEnergyHistoryDateInputValue,
  parseEnergyHistoryCurrentLine,
  parseEnergyHistoryDateInputValue,
  parseEnergyHistoryDateKey,
  parseEnergyHistoryHourLine,
  parseEnergyHistoryLine,
} from "../js/src/core/energy-history-domain.js";

test("energy history date parsing rejects impossible calendar dates", () => {
  assert.equal(parseEnergyHistoryDateKey(20240229)?.key, 20240229);
  assert.equal(parseEnergyHistoryDateKey(20230229), null);
  assert.equal(parseEnergyHistoryDateKey(20240431), null);
  assert.equal(parseEnergyHistoryDateInputValue("2024-02-29")?.key, 20240229);
  assert.equal(parseEnergyHistoryDateInputValue("2023-02-29"), null);
  assert.equal(getEnergyHistoryDateInputValue(20240229), "2024-02-29");
});

test("energy history protocol parsers normalize daily and current records", () => {
  const daily = parseEnergyHistoryLine("7|20240229|1|100|90|10|300|20|40|340");
  assert.deepEqual(
    { sequence: daily?.sequence, dateKey: daily?.dateKey, partial: daily?.partial, electricalInputWh: daily?.electricalInputWh },
    { sequence: 7, dateKey: 20240229, partial: true, electricalInputWh: 100 },
  );

  const current = parseEnergyHistoryCurrentLine("@current|20240229|100|90|10|300|20|40|340");
  assert.equal(current?.source, "current");
  assert.equal(current?.systemHeatOutputWh, 340);
  assert.equal(parseEnergyHistoryLine("7|20240230|1|100|90|10|300|20|40|340"), null);
});

test("energy history hour parser validates hour and formats its range", () => {
  const record = parseEnergyHistoryHourLine("@hour|3|20240229|23|10|9|1|30|2|4|34");
  assert.equal(record?.sortKey, 2024022923);
  assert.equal(record?.tooltipLabel, "23:00 - 00:00");
  assert.equal(parseEnergyHistoryHourLine("@hour|3|20240229|24|10|9|1|30|2|4|34"), null);
});
