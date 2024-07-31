// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PollerLike,
  OperationState,
  ResourceLocationConfig,
  RunningOperation,
  createHttpPoller,
  OperationResponse,
} from "@azure/core-lro";

import {
  Client,
  OperationOptions,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";

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
  initialRequestUrl?: string;
  /**
   * A serialized poller which can be used to resume an existing paused Long-Running-Operation.
   */
  restoreFrom?: string;
  /**
   * The function to get the initial response
   */
  getInitialResponse?: () => PromiseLike<TResponse>;
}
export function getLongRunningPoller<
  TResponse extends PathUncheckedResponse,
  TResult = void,
>(
  client: Client,
  processResponseBody: (result: TResponse) => Promise<TResult>,
  options: GetLongRunningPollerOptions<TResponse>,
): PollerLike<OperationState<TResult>, TResult> {
  const { restoreFrom, getInitialResponse } = options;
  if (!restoreFrom && !getInitialResponse) {
    throw new Error(
      "Either restoreFrom or getInitialResponse must be specified",
    );
  }
  let initialResponse: TResponse | undefined = undefined;
  const pollAbortController = new AbortController();
  const poller: RunningOperation<TResponse> = {
    sendInitialRequest: async () => {
      if (!getInitialResponse) {
        throw new Error(
          "getInitialResponse is required when initializing a new poller",
        );
      }
      initialResponse = await getInitialResponse();
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (
      path: string,
      pollOptions?: {
        abortSignal?: AbortSignalLike;
      },
    ) => {
      // The poll request would both listen to the user provided abort signal and the poller's own abort signal
      function abortListener(): void {
        pollAbortController.abort();
      }
      const abortSignal = pollAbortController.signal;
      if (options.abortSignal?.aborted) {
        pollAbortController.abort();
      } else if (pollOptions?.abortSignal?.aborted) {
        pollAbortController.abort();
      } else if (!abortSignal.aborted) {
        options.abortSignal?.addEventListener("abort", abortListener, {
          once: true,
        });
        pollOptions?.abortSignal?.addEventListener("abort", abortListener, {
          once: true,
        });
      }
      let response;
      try {
        response = await client.pathUnchecked(path).get({ abortSignal });
      } finally {
        options.abortSignal?.removeEventListener("abort", abortListener);
        pollOptions?.abortSignal?.removeEventListener("abort", abortListener);
      }
      if (options.initialRequestUrl || initialResponse) {
        response.headers["x-ms-original-url"] =
          options.initialRequestUrl ?? initialResponse!.request.url;
      }

      return getLroResponse(response as TResponse);
    },
  };
  return createHttpPoller(poller, {
    intervalInMs: options?.updateIntervalInMs,
    resourceLocationConfig: options?.resourceLocationConfig,
    restoreFrom: options?.restoreFrom,
    processResult: (result: unknown) => {
      return processResponseBody(result as TResponse);
    },
  });
}
/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @param deserializeFn - deserialize function to convert Rest response to modular output
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResponse extends PathUncheckedResponse>(
  response: TResponse,
): OperationResponse<TResponse> {
  checkResponse(response);
  return {
    flatResponse: response,
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body,
    },
  };
}

/**
 * Checks if a request failed
 */
function checkResponse(response: PathUncheckedResponse): void {
  const statusCode = Number(response.status);
  if (statusCode < 200 || statusCode >= 300) {
    const errorMessage = response.body?.message ?? "";
    if (statusCode >= 400 && statusCode < 500) {
      throw createRestError(
        `Poller failed with client error statusCode ${response.status}\n ${errorMessage}`,
        response,
      );
    } else if (statusCode >= 500) {
      throw createRestError(
        `Poller failed with server error statusCode ${response.status}\n ${errorMessage}`,
        response,
      );
    } else {
      throw createRestError(
        `Poller failed with unexpected statusCode ${response.status}\n ${errorMessage}`,
        response,
      );
    }
  }
}

export interface RestorePollerOptions<
  TResult,
  TResponse extends PathUncheckedResponse = PathUncheckedResponse,
> extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /**
   * The signal which can be used to abort requests.
   */
  abortSignal?: AbortSignalLike;
  /** Deserialization function for raw response body */
  processResponseBody?: (result: TResponse) => Promise<TResult>;
}
