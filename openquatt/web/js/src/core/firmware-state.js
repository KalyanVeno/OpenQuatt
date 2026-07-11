import { createStateDomain } from "./state-domain.js";

const firmwareState = createStateDomain("Firmware", (key) =>
  key === "updateModalOpen" || key.startsWith("update") || key.startsWith("firmware"));

export const selectFirmwareState = firmwareState.select;
export const updateFirmwareState = firmwareState.update;
