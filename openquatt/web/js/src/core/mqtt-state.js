import { createStateDomain } from "./state-domain.js";

const mqttState = createStateDomain("MQTT", (key) => key.startsWith("mqtt"));

export const selectMqttState = mqttState.select;
export const updateMqttState = mqttState.update;
