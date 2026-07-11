import { createStateDomain } from "./state-domain.js";

const webServerLogState = createStateDomain("Webserver logs", (key) => key.startsWith("webServerLog"));

export const selectWebServerLogState = webServerLogState.select;
export const updateWebServerLogState = webServerLogState.update;
