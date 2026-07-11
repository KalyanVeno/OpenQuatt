import { render } from "../core/render-scheduler.js";
import { state } from "../core/state.js";
import {
  abortQuickStartFlowTest,
  applyQuickStartFlowSourceConfiguration,
  applyQuickStartThermostatSourceConfiguration,
  refreshQuickStartFlowSignal,
  refreshQuickStartStepHydration,
  startQuickStartFlowTest,
} from "./quickstart-actions.js";
import { selectQuickStepByOffset } from "./quickstart.js";

function moveQuickStartStep(offset) {
  selectQuickStepByOffset(offset);
  render();
  void refreshQuickStartStepHydration(state.currentStep);
}

const quickStartActionHandlers = {
  "close-quickstart-modal": () => {
    state.quickStartModalOpen = false;
    render();
  },
  "open-quickstart-modal": () => {
    state.currentStep = "generation";
    state.quickStartModalMode = "wizard";
    state.quickStartModalOpen = true;
    render();
  },
  "open-generation-modal": () => {
    state.currentStep = "generation";
    state.quickStartModalMode = "generation";
    state.quickStartModalOpen = true;
    render();
  },
  "select-step": (button) => {
    state.currentStep = button.dataset.stepId || "generation";
    render();
    void refreshQuickStartStepHydration(state.currentStep);
  },
  "apply-quickstart-flow-source": () => void applyQuickStartFlowSourceConfiguration(),
  "refresh-quickstart-flow-signal": () => void refreshQuickStartFlowSignal(),
  "start-quickstart-flow-test": () => void startQuickStartFlowTest(),
  "abort-quickstart-flow-test": () => void abortQuickStartFlowTest(),
  "apply-quickstart-thermostat-source": () => void applyQuickStartThermostatSourceConfiguration(),
  "previous-step": () => moveQuickStartStep(-1),
  "next-step": () => moveQuickStartStep(1),
};

export function handleQuickStartAction(action, button) {
  const handler = quickStartActionHandlers[action];
  if (!handler) {
    return false;
  }
  handler(button);
  return true;
}
