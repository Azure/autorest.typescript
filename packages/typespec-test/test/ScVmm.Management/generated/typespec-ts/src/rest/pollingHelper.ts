// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, HttpResponse } from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";
import {
  CancelOnProgress,
  CreateHttpPollerOptions,
  RunningOperation,
  OperationResponse,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import {
  VmmServersCreateOrUpdate200Response,
  VmmServersCreateOrUpdate201Response,
  VmmServersCreateOrUpdateDefaultResponse,
  VmmServersCreateOrUpdateLogicalResponse,
  VmmServersUpdate200Response,
  VmmServersUpdate202Response,
  VmmServersUpdateDefaultResponse,
  VmmServersUpdateLogicalResponse,
  VmmServersDelete202Response,
  VmmServersDelete204Response,
  VmmServersDeleteDefaultResponse,
  VmmServersDeleteLogicalResponse,
  CloudsCreateOrUpdate200Response,
  CloudsCreateOrUpdate201Response,
  CloudsCreateOrUpdateDefaultResponse,
  CloudsCreateOrUpdateLogicalResponse,
  CloudsUpdate200Response,
  CloudsUpdate202Response,
  CloudsUpdateDefaultResponse,
  CloudsUpdateLogicalResponse,
  CloudsDelete202Response,
  CloudsDelete204Response,
  CloudsDeleteDefaultResponse,
  CloudsDeleteLogicalResponse,
  VirtualNetworksCreateOrUpdate200Response,
  VirtualNetworksCreateOrUpdate201Response,
  VirtualNetworksCreateOrUpdateDefaultResponse,
  VirtualNetworksCreateOrUpdateLogicalResponse,
  VirtualNetworksUpdate200Response,
  VirtualNetworksUpdate202Response,
  VirtualNetworksUpdateDefaultResponse,
  VirtualNetworksUpdateLogicalResponse,
  VirtualNetworksDelete202Response,
  VirtualNetworksDelete204Response,
  VirtualNetworksDeleteDefaultResponse,
  VirtualNetworksDeleteLogicalResponse,
  VirtualMachineTemplatesCreateOrUpdate200Response,
  VirtualMachineTemplatesCreateOrUpdate201Response,
  VirtualMachineTemplatesCreateOrUpdateDefaultResponse,
  VirtualMachineTemplatesCreateOrUpdateLogicalResponse,
  VirtualMachineTemplatesUpdate200Response,
  VirtualMachineTemplatesUpdate202Response,
  VirtualMachineTemplatesUpdateDefaultResponse,
  VirtualMachineTemplatesUpdateLogicalResponse,
  VirtualMachineTemplatesDelete202Response,
  VirtualMachineTemplatesDelete204Response,
  VirtualMachineTemplatesDeleteDefaultResponse,
  VirtualMachineTemplatesDeleteLogicalResponse,
  AvailabilitySetsCreateOrUpdate200Response,
  AvailabilitySetsCreateOrUpdate201Response,
  AvailabilitySetsCreateOrUpdateDefaultResponse,
  AvailabilitySetsCreateOrUpdateLogicalResponse,
  AvailabilitySetsUpdate200Response,
  AvailabilitySetsUpdate202Response,
  AvailabilitySetsUpdateDefaultResponse,
  AvailabilitySetsUpdateLogicalResponse,
  AvailabilitySetsDelete202Response,
  AvailabilitySetsDelete204Response,
  AvailabilitySetsDeleteDefaultResponse,
  AvailabilitySetsDeleteLogicalResponse,
  VirtualMachineInstancesCreateOrUpdate200Response,
  VirtualMachineInstancesCreateOrUpdate201Response,
  VirtualMachineInstancesCreateOrUpdateDefaultResponse,
  VirtualMachineInstancesCreateOrUpdateLogicalResponse,
  VirtualMachineInstancesUpdate200Response,
  VirtualMachineInstancesUpdate202Response,
  VirtualMachineInstancesUpdateDefaultResponse,
  VirtualMachineInstancesUpdateLogicalResponse,
  VirtualMachineInstancesDelete202Response,
  VirtualMachineInstancesDelete204Response,
  VirtualMachineInstancesDeleteDefaultResponse,
  VirtualMachineInstancesDeleteLogicalResponse,
  VirtualMachineInstancesStop202Response,
  VirtualMachineInstancesStopDefaultResponse,
  VirtualMachineInstancesStopLogicalResponse,
  VirtualMachineInstancesStart202Response,
  VirtualMachineInstancesStartDefaultResponse,
  VirtualMachineInstancesStartLogicalResponse,
  VirtualMachineInstancesRestart202Response,
  VirtualMachineInstancesRestartDefaultResponse,
  VirtualMachineInstancesRestartLogicalResponse,
  VirtualMachineInstancesCreateCheckpoint202Response,
  VirtualMachineInstancesCreateCheckpointDefaultResponse,
  VirtualMachineInstancesCreateCheckpointLogicalResponse,
  VirtualMachineInstancesDeleteCheckpoint202Response,
  VirtualMachineInstancesDeleteCheckpointDefaultResponse,
  VirtualMachineInstancesDeleteCheckpointLogicalResponse,
  VirtualMachineInstancesRestoreCheckpoint202Response,
  VirtualMachineInstancesRestoreCheckpointDefaultResponse,
  VirtualMachineInstancesRestoreCheckpointLogicalResponse,
  GuestAgentsCreate200Response,
  GuestAgentsCreate201Response,
  GuestAgentsCreateDefaultResponse,
  GuestAgentsCreateLogicalResponse,
} from "./responses.js";

/**
 * A simple poller that can be used to poll a long running operation.
 */
export interface SimplePollerLike<
  TState extends OperationState<TResult>,
  TResult,
> {
  /**
   * Returns true if the poller has finished polling.
   */
  isDone(): boolean;
  /**
   * Returns the state of the operation.
   */
  getOperationState(): TState;
  /**
   * Returns the result value of the operation,
   * regardless of the state of the poller.
   * It can return undefined or an incomplete form of the final TResult value
   * depending on the implementation.
   */
  getResult(): TResult | undefined;
  /**
   * Returns a promise that will resolve once a single polling request finishes.
   * It does this by calling the update method of the Poller's operation.
   */
  poll(options?: { abortSignal?: AbortSignalLike }): Promise<TState>;
  /**
   * Returns a promise that will resolve once the underlying operation is completed.
   */
  pollUntilDone(pollOptions?: {
    abortSignal?: AbortSignalLike;
  }): Promise<TResult>;
  /**
   * Invokes the provided callback after each polling is completed,
   * sending the current state of the poller's operation.
   *
   * It returns a method that can be used to stop receiving updates on the given callback function.
   */
  onProgress(callback: (state: TState) => void): CancelOnProgress;

  /**
   * Returns a promise that could be used for serialized version of the poller's operation
   * by invoking the operation's serialize method.
   */
  serialize(): Promise<string>;

  /**
   * Wait the poller to be submitted.
   */
  submitted(): Promise<void>;

  /**
   * Returns a string representation of the poller's operation. Similar to serialize but returns a string.
   * @deprecated Use serialize() instead.
   */
  toString(): string;

  /**
   * Stops the poller from continuing to poll. Please note this will only stop the client-side polling
   * @deprecated Use abortSignal to stop polling instead.
   */
  stopPolling(): void;

  /**
   * Returns true if the poller is stopped.
   * @deprecated Use abortSignal status to track this instead.
   */
  isStopped(): boolean;
}

/**
 * Helper function that builds a Poller object to help polling a long running operation.
 * @param client - Client to use for sending the request to get additional pages.
 * @param initialResponse - The initial response.
 * @param options - Options to set a resume state or custom polling interval.
 * @returns - A poller object to poll for operation state updates and eventually get the final response.
 */
export async function getLongRunningPoller<
  TResult extends
    | VmmServersCreateOrUpdateLogicalResponse
    | VmmServersCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VmmServersCreateOrUpdate200Response
    | VmmServersCreateOrUpdate201Response
    | VmmServersCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VmmServersUpdateLogicalResponse
    | VmmServersUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VmmServersUpdate200Response
    | VmmServersUpdate202Response
    | VmmServersUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VmmServersDeleteLogicalResponse
    | VmmServersDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VmmServersDelete202Response
    | VmmServersDelete204Response
    | VmmServersDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudsCreateOrUpdateLogicalResponse
    | CloudsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudsCreateOrUpdate200Response
    | CloudsCreateOrUpdate201Response
    | CloudsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends CloudsUpdateLogicalResponse | CloudsUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudsUpdate200Response
    | CloudsUpdate202Response
    | CloudsUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends CloudsDeleteLogicalResponse | CloudsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudsDelete202Response
    | CloudsDelete204Response
    | CloudsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualNetworksCreateOrUpdateLogicalResponse
    | VirtualNetworksCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualNetworksCreateOrUpdate200Response
    | VirtualNetworksCreateOrUpdate201Response
    | VirtualNetworksCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualNetworksUpdateLogicalResponse
    | VirtualNetworksUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualNetworksUpdate200Response
    | VirtualNetworksUpdate202Response
    | VirtualNetworksUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualNetworksDeleteLogicalResponse
    | VirtualNetworksDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualNetworksDelete202Response
    | VirtualNetworksDelete204Response
    | VirtualNetworksDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineTemplatesCreateOrUpdateLogicalResponse
    | VirtualMachineTemplatesCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineTemplatesCreateOrUpdate200Response
    | VirtualMachineTemplatesCreateOrUpdate201Response
    | VirtualMachineTemplatesCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineTemplatesUpdateLogicalResponse
    | VirtualMachineTemplatesUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineTemplatesUpdate200Response
    | VirtualMachineTemplatesUpdate202Response
    | VirtualMachineTemplatesUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineTemplatesDeleteLogicalResponse
    | VirtualMachineTemplatesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineTemplatesDelete202Response
    | VirtualMachineTemplatesDelete204Response
    | VirtualMachineTemplatesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AvailabilitySetsCreateOrUpdateLogicalResponse
    | AvailabilitySetsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AvailabilitySetsCreateOrUpdate200Response
    | AvailabilitySetsCreateOrUpdate201Response
    | AvailabilitySetsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AvailabilitySetsUpdateLogicalResponse
    | AvailabilitySetsUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AvailabilitySetsUpdate200Response
    | AvailabilitySetsUpdate202Response
    | AvailabilitySetsUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AvailabilitySetsDeleteLogicalResponse
    | AvailabilitySetsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AvailabilitySetsDelete202Response
    | AvailabilitySetsDelete204Response
    | AvailabilitySetsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineInstancesCreateOrUpdateLogicalResponse
    | VirtualMachineInstancesCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineInstancesCreateOrUpdate200Response
    | VirtualMachineInstancesCreateOrUpdate201Response
    | VirtualMachineInstancesCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineInstancesUpdateLogicalResponse
    | VirtualMachineInstancesUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineInstancesUpdate200Response
    | VirtualMachineInstancesUpdate202Response
    | VirtualMachineInstancesUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineInstancesDeleteLogicalResponse
    | VirtualMachineInstancesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineInstancesDelete202Response
    | VirtualMachineInstancesDelete204Response
    | VirtualMachineInstancesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineInstancesStopLogicalResponse
    | VirtualMachineInstancesStopDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineInstancesStop202Response
    | VirtualMachineInstancesStopDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineInstancesStartLogicalResponse
    | VirtualMachineInstancesStartDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineInstancesStart202Response
    | VirtualMachineInstancesStartDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineInstancesRestartLogicalResponse
    | VirtualMachineInstancesRestartDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineInstancesRestart202Response
    | VirtualMachineInstancesRestartDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineInstancesCreateCheckpointLogicalResponse
    | VirtualMachineInstancesCreateCheckpointDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineInstancesCreateCheckpoint202Response
    | VirtualMachineInstancesCreateCheckpointDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineInstancesDeleteCheckpointLogicalResponse
    | VirtualMachineInstancesDeleteCheckpointDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineInstancesDeleteCheckpoint202Response
    | VirtualMachineInstancesDeleteCheckpointDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachineInstancesRestoreCheckpointLogicalResponse
    | VirtualMachineInstancesRestoreCheckpointDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachineInstancesRestoreCheckpoint202Response
    | VirtualMachineInstancesRestoreCheckpointDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | GuestAgentsCreateLogicalResponse
    | GuestAgentsCreateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | GuestAgentsCreate200Response
    | GuestAgentsCreate201Response
    | GuestAgentsCreateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<TResult extends HttpResponse>(
  client: Client,
  initialResponse: TResult,
  options: CreateHttpPollerOptions<TResult, OperationState<TResult>> = {},
): Promise<SimplePollerLike<OperationState<TResult>, TResult>> {
  const abortController = new AbortController();
  const poller: RunningOperation<TResult> = {
    sendInitialRequest: async () => {
      // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
      // we are not triggering the initial request here, just extracting the information from the
      // response we were provided.
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (
      path: string,
      pollOptions?: { abortSignal?: AbortSignalLike },
    ) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      function abortListener(): void {
        abortController.abort();
      }
      const inputAbortSignal = pollOptions?.abortSignal;
      const abortSignal = abortController.signal;
      if (inputAbortSignal?.aborted) {
        abortController.abort();
      } else if (!abortSignal.aborted) {
        inputAbortSignal?.addEventListener("abort", abortListener, {
          once: true,
        });
      }
      let response;
      try {
        response = await client
          .pathUnchecked(path ?? initialResponse.request.url)
          .get({ abortSignal });
      } finally {
        inputAbortSignal?.removeEventListener("abort", abortListener);
      }
      const lroResponse = getLroResponse(response as TResult);
      lroResponse.rawResponse.headers["x-ms-original-url"] =
        initialResponse.request.url;
      return lroResponse;
    },
  };

  options.resolveOnUnsuccessful = options.resolveOnUnsuccessful ?? true;
  const httpPoller = createHttpPoller(poller, options);
  const simplePoller: SimplePollerLike<OperationState<TResult>, TResult> = {
    isDone() {
      return httpPoller.isDone;
    },
    isStopped() {
      return abortController.signal.aborted;
    },
    getOperationState() {
      if (!httpPoller.operationState) {
        throw new Error(
          "Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().",
        );
      }
      return httpPoller.operationState;
    },
    getResult() {
      return httpPoller.result;
    },
    toString() {
      if (!httpPoller.operationState) {
        throw new Error(
          "Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().",
        );
      }
      return JSON.stringify({
        state: httpPoller.operationState,
      });
    },
    stopPolling() {
      abortController.abort();
    },
    onProgress: httpPoller.onProgress,
    poll: httpPoller.poll,
    pollUntilDone: httpPoller.pollUntilDone,
    serialize: httpPoller.serialize,
    submitted: httpPoller.submitted,
  };
  return simplePoller;
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResult extends HttpResponse>(
  response: TResult,
): OperationResponse<TResult> {
  if (Number.isNaN(response.status)) {
    throw new TypeError(
      `Status code of the response is not a number. Value: ${response.status}`,
    );
  }

  return {
    flatResponse: response,
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body,
    },
  };
}
