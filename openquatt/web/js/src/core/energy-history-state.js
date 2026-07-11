import { createStateDomain } from "./state-domain.js";

const energyHistoryState = createStateDomain("Energy history", (key) => key.startsWith("energyHistory"));

export const selectEnergyHistoryState = energyHistoryState.select;
export const updateEnergyHistoryState = energyHistoryState.update;
