import { createStateDomain } from "./state-domain.js";

const debugRecordingState = createStateDomain("Debug recording", (key) => key.startsWith("debugRecording"));

export const selectDebugRecordingState = debugRecordingState.select;
export const updateDebugRecordingState = debugRecordingState.update;
