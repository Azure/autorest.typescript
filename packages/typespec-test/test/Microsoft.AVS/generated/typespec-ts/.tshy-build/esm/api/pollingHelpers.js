// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { createHttpPoller, } from "@azure/core-lro";
import { createRestError, } from "@azure-rest/core-client";
import { isUnexpected } from "../rest/index.js";
export function getLongRunningPoller(client, processResponseBody, options) {
    const { restoreFrom, getInitialResponse } = options;
    if (!restoreFrom && !getInitialResponse) {
        throw new Error("Either restoreFrom or getInitialResponse must be specified");
    }
    let initialResponse = undefined;
    const pollAbortController = new AbortController();
    const poller = {
        sendInitialRequest: async () => {
            if (!getInitialResponse) {
                throw new Error("getInitialResponse is required when initializing a new poller");
            }
            initialResponse = await getInitialResponse();
            return getLroResponse(initialResponse);
        },
        sendPollRequest: async (path, pollOptions) => {
            // The poll request would both listen to the user provided abort signal and the poller's own abort signal
            function abortListener() {
                pollAbortController.abort();
            }
            const abortSignal = pollAbortController.signal;
            if (options.abortSignal?.aborted) {
                pollAbortController.abort();
            }
            else if (pollOptions?.abortSignal?.aborted) {
                pollAbortController.abort();
            }
            else if (!abortSignal.aborted) {
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
            }
            finally {
                options.abortSignal?.removeEventListener("abort", abortListener);
                pollOptions?.abortSignal?.removeEventListener("abort", abortListener);
            }
            if (options.initialUrl || initialResponse) {
                response.headers["x-ms-original-url"] =
                    options.initialUrl ?? initialResponse.request.url;
            }
            return getLroResponse(response);
        },
    };
    return createHttpPoller(poller, {
        intervalInMs: options?.updateIntervalInMs,
        resourceLocationConfig: options?.resourceLocationConfig,
        restoreFrom: options?.restoreFrom,
        processResult: (result) => {
            return processResponseBody(result);
        },
    });
}
/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @param deserializeFn - deserialize function to convert Rest response to modular output
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse(response) {
    if (isUnexpected(response)) {
        throw createRestError(response);
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
//# sourceMappingURL=pollingHelpers.js.map