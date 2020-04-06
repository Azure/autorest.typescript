import {
  BaseResult,
  LROOperationState,
  LROOperation,
  LROStrategy
} from "./models";
import { createBodyPollingStrategy } from "./bodyPollingStrategy";

/**
 * Creates a copy of the operation from a given State
 */
export function makeOperation<TResult extends BaseResult>(
  state: LROOperationState<TResult>
): LROOperation<TResult> {
  return {
    state: { ...state },
    update,
    cancel,
    toString: function(this: LROOperation<TResult>) {
      return JSON.stringify(this.state);
    }
  };
}

/**
 * General update function for LROPoller, the general process is as follows
 * 1. Check initial operation result to determine the strategy to use
 *  - Strategies: Location, Azure-AsyncOperation, Original Uri
 * 2. Check if the operation result has a terminal state
 *  - Terminal state will be determined by each strategy
 *  2.1 If it is terminal state Check if a final GET request is required, if so
 *      send final GET request and return result from operation. If no final GET
 *      is required, just return the result from operation.
 *      - Determining what to call for final request is responsibility of each strategy
 *  2.2 If it is not terminal state, call the polling operation call it and go to step 1
 *      - Determining what to call for polling is responsibility of each strategy
 *      - Strategies will always use the latest URI for polling if provided otherwise
 *        the last known one
 */
async function update<TResult extends BaseResult>(
  this: LROOperation<TResult>
): Promise<LROOperation<TResult>> {
  const state = { ...this.state };

  // Get strategy from last operation
  const lroStrategy: LROStrategy<TResult> = this.state.pollingStrategy;

  if (state.result) {
    state.isCompleted = true;
    return makeOperation(state);
  }

  // Check if last result is terminal
  if (lroStrategy.isTerminal()) {
    const result = await lroStrategy.sendFinalRequest();
    state.lastOperation = result;
    state.result = state.lastOperation.result;
  } else {
    const result = await lroStrategy.poll();
    state.lastOperation = result;
  }

  // Return operation
  return makeOperation(state);
}

/**
 * Swagger doesn't support defining a cancel operation, we'll just mark
 * the operation state as cancelled
 */
async function cancel<TResult extends BaseResult>(
  this: LROOperation<TResult>
): Promise<LROOperation<TResult>> {
  return makeOperation({ ...this.state, isCancelled: true });
}
