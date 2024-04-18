// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PollerLike,
  OperationState,
  ResourceLocationConfig,
  LongRunningOperation,
  createHttpPoller,
  OperationResponse
} from "@azure/core-lro";

import {
  Client,
  PathUncheckedResponse,
  createRestError
} from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";
import { isUnexpected } from "../rest/index.js";

export interface GetLongRunningPollerOptions<TResponse> {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /**
   * The signal which can be used to abort requests.
   */
  abortSignal?: AbortSignalLike;
  /**
   * The potential location of the result of the LRO if specified by the LRO extension in the swagger.
   */
  resourceLocationConfig?: ResourceLocationConfig;
  /**
   * The original url of the LRO
   * Should not be null when restoreFrom is set
   */
  initialUrl?: string;
  /**
   * A serialized poller which can be used to resume an existing paused Long-Running-Operation.
   */
  restoreFrom?: string;
  /**
   * The function to get the initial response
   */
  getInitialResponse?: (options?: {
    abortSignal?: AbortSignalLike;
  }) => PromiseLike<TResponse>;
}
export function getLongRunningPoller<
  TResponse extends PathUncheckedResponse,
  TResult = void
>(
  client: Client,
  processResponseBody: (result: TResponse) => PromiseLike<TResult>,
  options: GetLongRunningPollerOptions<TResponse>
): PollerLike<OperationState<TResult>, TResult> {
  const abortController = new AbortController();
  function abortListener(): void {
    abortController.abort();
  }
  const { restoreFrom, getInitialResponse } = options;
  if (!restoreFrom && !getInitialResponse) {
    throw new Error(
      "Either restoreFrom or getInitialResponse must be specified"
    );
  }
  let initialResponse: TResponse | undefined = undefined;
  const poller: LongRunningOperation<TResponse> = {
    sendInitialRequest: async () => {
      if (!getInitialResponse) {
        throw new Error(
          "getInitialResponse is required when initializing a new poller"
        );
      }
      const clientAbortSignal = options?.abortSignal;
      const abortSignal = abortController.signal;
      if (clientAbortSignal?.aborted) {
        abortController.abort();
      } else if (!abortSignal.aborted) {
        clientAbortSignal?.addEventListener("abort", abortListener, {
          once: true
        });
      }
      initialResponse = await getInitialResponse({ abortSignal });
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (
      path: string,
      pollOptions?: {
        abortSignal?: AbortSignalLike;
      }
    ) => {
      const clientAbortSignal = options?.abortSignal;
      const methodAbortSignal = pollOptions?.abortSignal;

      const abortSignal = abortController.signal;
      if (methodAbortSignal?.aborted) {
        abortController.abort();
      } else if (clientAbortSignal?.aborted) {
        abortController.abort();
      } else if (!abortSignal.aborted) {
        clientAbortSignal?.addEventListener("abort", abortListener, {
          once: true
        });
        methodAbortSignal?.addEventListener("abort", abortListener, {
          once: true
        });
      }
      const response = await client
        .pathUnchecked(path)
        .get({ abortSignal: abortSignal });
      if (options.initialUrl || initialResponse) {
        response.headers["x-ms-original-url"] =
          options.initialUrl ?? initialResponse!.request.url;
      }

      return getLroResponse(response as TResponse);
    }
  };
  return createHttpPoller(poller, {
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
function getLroResponse<TResponse extends PathUncheckedResponse>(
  response: TResponse
): OperationResponse<TResponse> {
  if (isUnexpected(response as PathUncheckedResponse)) {
    throw createRestError(response);
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
