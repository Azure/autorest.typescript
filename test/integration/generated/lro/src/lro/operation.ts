import {
  BaseResult,
  LroOperationState,
  LroOperation,
  LROFinalStateBy
} from "./models";
import { azureResourcePoll } from "./azureResourceStrategy";

/**
 * Creates a copy of the operation from a given State
 */
export function makeOperation<TResult extends BaseResult>(
  state: LroOperationState<TResult>
): LroOperation<TResult> {
  return {
    state: { ...state },
    update,
    cancel,
    toString: function(this: LroOperation<TResult>) {
      return JSON.stringify(this.state);
    }
  };
}

/**
 * Implementation of the Update function, here we figure out the strategy to
 * use in order to get to the final state. Currently there are 3 strategies we can follow
 * 1) Azure Resource - which uses provisioningState and the same PATH
 * 2) AzureAsyncOperation - which uses the header 'azure-async-operation'
 * 3) Location - which uses the header 'location'
 */
async function update<TResult extends BaseResult>(
  this: LroOperation<TResult>
): Promise<LroOperation<TResult>> {
  let state: LroOperationState<TResult> = { ...this.state };
  if (state.isCompleted) {
    return makeOperation(state);
  } else if (!state.isStarted) {
    // Trigger initial request
    state.result = await initialOperation(state);
    state.isStarted = true;
    state.finalStateBy = getFinalStateByFromResponse(state.result, state);
    return makeOperation(state);
  } else {
    // Poll
    const pollRequest = getUpdateStrategy(state);
    return await pollRequest(state);
  }

  // TODO Handle cancelled
}

function initialOperation<TResult extends BaseResult>({
  initialOperation: { sendOperationRequest, args, spec }
}: LroOperationState<TResult>): Promise<TResult> {
  return sendOperationRequest(args, spec);
}

async function cancel<TResult extends BaseResult>(
  this: LroOperation<TResult>
): Promise<LroOperation<TResult>> {
  return makeOperation({ ...this.state, isCancelled: true });
}

function getUpdateStrategy<TResult extends BaseResult>(
  state: LroOperationState<TResult>
): (
  originalState: LroOperationState<TResult>
) => Promise<LroOperation<TResult>> {
  if (!state.finalStateBy) {
    // Since the swagger doesn't specify final-state-by we need to figure out at runtime
    throw new Error("LRO Runtime strategy not yet implemented");
  }

  // TODO Handle remaining strategies
  switch (state.finalStateBy) {
    case LROFinalStateBy.GetResource:
      return azureResourcePoll;
    default:
      throw new Error(`${state.finalStateBy} strategy not implemented`);
  }
}

/**
 * Figures out which strategy to used based on the shape of the response
 */
function getFinalStateByFromResponse<TResult extends BaseResult>(
  response: TResult,
  { initialOperation }: LroOperationState<TResult>
): LROFinalStateBy {
  if (response.azureAsyncOperation) {
    return LROFinalStateBy.AzureAsyncOperation;
  }

  if (response.location) {
    return LROFinalStateBy.Location;
  }

  if (["PUT", "PATCH"].includes(initialOperation.spec.httpMethod)) {
    return LROFinalStateBy.GetResource;
  }

  throw new Error("Can't determine long running operation polling strategy.");
}
