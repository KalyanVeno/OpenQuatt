import { invokeActionMap } from "../core/action-router.js";
import { commitSwitch } from "../core/entity-write-actions.js";
import { render } from "../core/render-scheduler.js";
import { state } from "../core/state.js";
import {
  abortQuickStartFlowTest,
  applyQuickStartFlowSourceConfiguration,
  applyQuickStartThermostatSourceConfiguration,
  initializeQuickStartUsageTelemetryChoice,
  refreshQuickStartFlowSignal,
  refreshQuickStartStepHydration,
  startQuickStartFlowTest,
} from "./quickstart-actions.js";
import { selectQuickStepByOffset } from "./quickstart.js";
import { installQuickStartSetupSwitch } from "./firmware-actions.js";

async function prepareQuickStartStep(stepId) {
  await refreshQuickStartStepHydration(stepId);
  if (stepId === "usage-telemetry") {
    await initializeQuickStartUsageTelemetryChoice();
  }
}

function moveQuickStartStep(offset) {
  selectQuickStepByOffset(offset);
  if (state.currentStep === "usage-telemetry") {
    state.controlError = "";
    state.controlNotice = "";
  }
  render();
  void prepareQuickStartStep(state.currentStep);
}

const quickStartActionHandlers = {
  "close-quickstart-modal": () => {
    state.quickStartModalOpen = false;
    render();
  },
  "open-quickstart-modal": () => {
    state.currentStep = "setup";
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
    if (state.currentStep === "usage-telemetry") {
      state.controlError = "";
      state.controlNotice = "";
    }
    render();
    void prepareQuickStartStep(state.currentStep);
  },
  "select-quickstart-setup": (button) => {
    state.quickStartSetupDraft = button.dataset.setupTarget || "";
    state.quickStartSetupConfirmed = false;
    state.controlError = "";
    state.controlNotice = "";
    render();
    void refreshQuickStartStepHydration("setup");
  },
  "install-quickstart-setup": () => installQuickStartSetupSwitch(),
  "apply-quickstart-flow-source": () => applyQuickStartFlowSourceConfiguration(),
  "refresh-quickstart-flow-signal": () => refreshQuickStartFlowSignal(),
  "start-quickstart-flow-test": () => startQuickStartFlowTest(),
  "abort-quickstart-flow-test": () => abortQuickStartFlowTest(),
  "apply-quickstart-thermostat-source": () => applyQuickStartThermostatSourceConfiguration(),
  "retry-usage-telemetry-choice": () => prepareQuickStartStep("usage-telemetry"),
  "confirm-no-usage-telemetry": () => commitSwitch("usageTelemetryEnabled", false),
  "previous-step": () => moveQuickStartStep(-1),
  "next-step": () => moveQuickStartStep(1),
};

export function handleQuickStartAction(action, button) {
  return invokeActionMap(quickStartActionHandlers, action, button);
}
