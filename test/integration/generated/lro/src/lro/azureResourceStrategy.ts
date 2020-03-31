import {
  BaseResult,
  LroOperationState,
  LroOperation,
  ResourceProvisioningState
} from "./models";
import { makeOperation } from "./operation";
import { RestError, OperationSpec } from "@azure/core-http";
import { transformInitialSpecToPoll } from "./utils";

/**
 * Poller strategy for Azure Resource Long Running Operations
 * This function is used to poll a long running operation
 */
export async function azureResourcePoll<TResult extends BaseResult>(
  originalState: LroOperationState<TResult>
): Promise<LroOperation<TResult>> {
  const state = { ...originalState };

  // Check last response for terminal status
  const isTerminalStatus = isTerminalResult(state.result);

  // If the last response returned a terminal state. Mark operation as completed
  if (isTerminalStatus) {
    state.isCompleted = true;
    state.provisioningState = state.result?.provisioningState;
    return makeOperation(state);
  }

  // Execute the operation
  const result = await executePollOperation(state);
  checkResult(result);

  const provisioningState = getProvisioningState(result);
  return makeOperation({
    ...state,
    result,
    provisioningState
  });
}

function isTerminalResult<TResult extends BaseResult>(
  result: TResult | undefined
) {
  const status = getStatusFromResponse(result);
  return isTerminalStatus(status);
}

/**
 * Checks for any errors in the poll response
 */
function checkResult<TResult extends BaseResult>({ _response }: TResult) {
  // The response must a non error status code, otherwise throw.
  if (!_response || ![200, 201, 202, 204].includes(_response.status)) {
    const error = new RestError(
      `Invalid status code with response body "${_response?.bodyAsText}" occurred when polling for operation status.`
    );
    error.statusCode = _response?.status;

    throw error;
  }

  if (!_response.parsedBody) {
    throw new Error(
      "The response from long running operation does not contain a body."
    );
  }
}

/**
 * Sends the Poll operation
 */
function executePollOperation<TResult extends BaseResult>({
  initialOperation: { args, sendOperationRequest, spec }
}: LroOperationState<TResult>) {
  const pollOperationSpec = transformInitialSpecToPoll(spec);
  return sendOperationRequest(args, pollOperationSpec);
}

/**
 * Extracts or deduces the Provisioning status from the polled response
 */
function getStatusFromResponse<TResult extends BaseResult>(
  response: TResult | undefined
): ResourceProvisioningState {
  if (!response || !response._response) {
    throw new Error("Expected a result");
  }

  const statusCode = response._response.status;
  const provisioningState = getProvisioningState(response);

  switch (statusCode) {
    case 202:
      return "InProgress";
    case 204:
      return "Succeeded";
    case 201:
      return provisioningState || "InProgress";
    case 200:
      return provisioningState || "Succeeded";
    default:
      return "Failed";
  }
}

function isTerminalStatus(status: ResourceProvisioningState) {
  return ["Succeeded", "Failed", "Cancelled"].includes(status);
}

/**
 * Tries to extract the provisioning State from a response
 */
function getProvisioningState<TResult extends BaseResult>(
  response: TResult | undefined
) {
  return (
    response?.provisioningState ||
    response?.properties?.provisioningState ||
    undefined
  );
}
