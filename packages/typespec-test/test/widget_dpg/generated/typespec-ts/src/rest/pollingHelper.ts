// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, HttpResponse } from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";
import {
  CancelOnProgress,
  CreateHttpPollerOptions,
  LongRunningOperation,
  OperationResponse,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import {
  WidgetsCreateOrReplace200Response,
  WidgetsCreateOrReplace201Response,
  WidgetsCreateOrReplaceDefaultResponse,
  WidgetsCreateOrReplaceLogicalResponse,
  BudgetsCreateOrReplace200Response,
  BudgetsCreateOrReplace201Response,
  BudgetsCreateOrReplaceDefaultResponse,
  BudgetsCreateOrReplaceLogicalResponse,
  BudgetsCreateOrUpdate200Response,
  BudgetsCreateOrUpdate201Response,
  BudgetsCreateOrUpdateDefaultResponse,
  BudgetsCreateOrUpdateLogicalResponse,
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
  readonly isDone: boolean;
  /**
   * Returns true if the poller is stopped.
   */
  readonly isStopped: boolean;
  /**
   * Returns the state of the operation.
   */
  readonly operationState: TState | undefined;
  /**
   * Returns the result value of the operation,
   * regardless of the state of the poller.
   * It can return undefined or an incomplete form of the final TResult value
   * depending on the implementation.
   */
  readonly result: TResult | undefined;
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
   * Returns a promise that could be used to check if the poller has been submitted.
   */
  submitted(): Promise<void>;
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
    | BudgetsCreateOrUpdateLogicalResponse
    | BudgetsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | BudgetsCreateOrUpdate200Response
    | BudgetsCreateOrUpdate201Response
    | BudgetsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WidgetsCreateOrReplaceLogicalResponse
    | WidgetsCreateOrReplaceDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WidgetsCreateOrReplace200Response
    | WidgetsCreateOrReplace201Response
    | WidgetsCreateOrReplaceDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | BudgetsCreateOrReplaceLogicalResponse
    | BudgetsCreateOrReplaceDefaultResponse,
>(
  client: Client,
  initialResponse:
    | BudgetsCreateOrReplace200Response
    | BudgetsCreateOrReplace201Response
    | BudgetsCreateOrReplaceDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<TResult extends HttpResponse>(
  client: Client,
  initialResponse: TResult,
  options: CreateHttpPollerOptions<TResult, OperationState<TResult>> = {},
): Promise<SimplePollerLike<OperationState<TResult>, TResult>> {
  const poller: LongRunningOperation<TResult> = {
    sendInitialRequest: async () => {
      // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
      // we are not triggering the initial request here, just extracting the information from the
      // response we were provided.
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (path) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      const response = await client
        .pathUnchecked(path ?? initialResponse.request.url)
        .get();
      const lroResponse = getLroResponse(response as TResult);
      lroResponse.rawResponse.headers["x-ms-original-url"] =
        initialResponse.request.url;
      return lroResponse;
    },
  };

  options.resolveOnUnsuccessful = options.resolveOnUnsuccessful ?? true;
  const httpPoller = createHttpPoller(poller, options);
  const simplePoller: SimplePollerLike<OperationState<TResult>, TResult> = {
    get isDone() {
      return httpPoller.isDone;
    },
    get isStopped() {
      return httpPoller.isStopped;
    },
    get operationState() {
      return httpPoller.operationState;
    },
    get result() {
      return httpPoller.result;
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