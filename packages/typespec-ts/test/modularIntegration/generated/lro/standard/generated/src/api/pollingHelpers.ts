// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CoreNext } from "@azure/core-lro";
import { Client, HttpResponse, createRestError } from "@azure-rest/core-client";

export interface GetLongRunningPollerOptions<TResponse> {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /**
   * The potential location of the result of the LRO if specified by the LRO extension in the swagger.
   */
  resourceLocationConfig?: CoreNext.ResourceLocationConfig;
  /**
   * A serialized poller which can be used to resume an existing paused Long-Running-Operation.
   */
  restoreFrom?: string;
  /**
   * The function to get the initial response
   */
  getInitialResponse?: () => PromiseLike<TResponse>;
  /**
   * The original url of the LRO
   */
  initialUri?: string;
}
export function getLongRunningPoller<
  TResponse extends HttpResponse,
  TResult = void
>(
  client: Client,
  processResponseBody: (result: TResponse) => PromiseLike<TResult>,
  options: GetLongRunningPollerOptions<TResponse>
): CoreNext.PollerLike<CoreNext.OperationState<TResult>, TResult> {
  const { restoreFrom, getInitialResponse } = options;
  if (!restoreFrom && !getInitialResponse) {
    throw new Error(
      "Either restoreFrom or getInitialResponse must be specified"
    );
  }
  let initialResponse: TResponse | undefined = undefined;
  const poller: CoreNext.LongRunningOperation<TResponse> = {
    sendInitialRequest: async () => {
      if (!getInitialResponse) {
        throw new Error("getInitialResponse is required if init a new poller");
      }
      initialResponse = await getInitialResponse();
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (path: string) => {
      const response = await client.pathUnchecked(path).get();
      response.headers["x-ms-original-url"] =
        options.initialUri ?? initialResponse?.request?.url ?? "";
      return getLroResponse(response as TResponse);
    }
  };
  return CoreNext.createHttpPoller(poller, {
    intervalInMs: options?.updateIntervalInMs,
    resourceLocationConfig: options?.resourceLocationConfig,
    restoreFrom: options?.restoreFrom,
    processResult: (result: unknown) => {
      return processResponseBody(result as TResponse) as TResult;
    }
  });
}
/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @param deserializeFn - deserialize function to convert Rest response to modular output
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResponse extends HttpResponse>(
  response: TResponse
): CoreNext.OperationResponse<TResponse> {
  if (Number.isNaN(response.status)) {
    createRestError(
      `Status code of the response is not a number. Value: ${response.status}`,
      response
    );
  }
  return {
    flatResponse: response,
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body
    }
  };
}
