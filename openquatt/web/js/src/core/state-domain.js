import { state } from "./state.js";

export function createStateDomain(name, ownsKey) {
  function assertOwnedKeys(patch) {
    const foreignKey = Object.keys(patch).find((key) => !ownsKey(key));
    if (foreignKey) {
      throw new Error(`${name} state beheert sleutel ${foreignKey} niet.`);
    }
  }

  return {
    select() {
      return Object.fromEntries(Object.entries(state).filter(([key]) => ownsKey(key)));
    },
    update(patch) {
      assertOwnedKeys(patch);
      Object.assign(state, patch);
    },
  };
}
