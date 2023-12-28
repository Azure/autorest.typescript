// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  LongRunningOperation,
  LroResourceLocationConfig,
  LroResponse,
  OperationState,
  PromisePollerLike,
  createHttpPromisePoller
} from "@azure/core-lro";
import { Client, HttpResponse, createRestError } from "@azure-rest/core-client";

export interface GetLongRunningPollerOptions {
  method: string;
  url: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /**
   * The potential location of the result of the LRO if specified by the LRO extension in the swagger.
   */
  resourceLocationConfig?: LroResourceLocationConfig;
}
export function getLongRunningPoller<TResponse extends HttpResponse>(
  client: Client,
  getInitialResponse: () => PromiseLike<TResponse>,
  processResponseBody: (result: TResponse) => PromiseLike<unknown>,
  options: GetLongRunningPollerOptions
): PromisePollerLike<OperationState<unknown>, unknown> {
  let initialResponse: TResponse;
  const poller: LongRunningOperation<unknown> = {
    requestMethod: options.method,
    requestPath: options.url,
    sendInitialRequest: async () => {
      initialResponse = (await getInitialResponse()) as TResponse;
      return getLroResponse(initialResponse, processResponseBody);
    },
    sendPollRequest: async (path) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      if (!path || path === options.url) {
        path = initialResponse.request.url ?? options.url;
      }
      const response = await client.pathUnchecked(path).get();
      response.headers["x-ms-original-url"] = initialResponse.request.url;
      const lroResponse = getLroResponse(
        response as TResponse,
        processResponseBody
      );
      return lroResponse;
    }
  };
  return createHttpPromisePoller(poller, {
    intervalInMs: options?.updateIntervalInMs,
    resourceLocationConfig: options?.resourceLocationConfig
  });
}
/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @param deserializeFn - deserialize function to convert Rest response to modular output
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResponse extends HttpResponse>(
  response: TResponse,
  deserializeFn: (result: TResponse) => PromiseLike<unknown>
): LroResponse {
  if (Number.isNaN(response.status)) {
    createRestError(
      `Status code of the response is not a number. Value: ${response.status}`,
      response
    );
  }
  return {
    flatResponse: deserializeFn(response),
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body
    }
  };
}
