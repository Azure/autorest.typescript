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
  const lroStrategy: LROStrategy<TResult> = getStrategyFromResult(state);

  // Check if last result is terminal
  if (lroStrategy.isTerminal()) {
    const result = await lroStrategy.sendFinalRequest();
    state.lastOperation = result;
    state.result = state.lastOperation.result;
    state.isCompleted = true;
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

/**
 * This function determines which strategy to use based on the response from
 * the last operation executed, this last operation can be an initial operation
 * or a polling operation. The 3 possible strategies are described below:
 *
 * A) Azure-AsyncOperation or Operation-Location
 * B) Location
 * C) BodyPolling (provisioningState)
 *  - This strategy is used when:
 *    - Response doesn't contain any of the following headers Location, Azure-AsyncOperation or Operation-Location
 *    - Last operation method is PUT
 */
function getStrategyFromResult<TResult extends BaseResult>(
  state: LROOperationState<TResult>
): LROStrategy<TResult> {
  const {
    lastOperation: { spec, result }
  } = state;

  if (result.azureAsyncOperation) {
    throw new Error("Azure-AsyncOperation strategy is not yet implemented");
  }

  if (result.location) {
    throw new Error("Location strategy is not yet implemented");
  }

  // TODO: Should we include here other methods like Patch?
  if (spec.httpMethod === "PUT") {
    // We should use BodyPolling strategy
    // Return BodyPolling Strategy
    return createBodyPollingStrategy(state);
  }

  throw new Error("Unknown Long Running Operation strategy");
}
