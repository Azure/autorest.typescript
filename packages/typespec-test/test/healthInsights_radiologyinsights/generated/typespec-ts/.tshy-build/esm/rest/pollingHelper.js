// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { createHttpPoller, } from "@azure/core-lro";
export async function getLongRunningPoller(client, initialResponse, options = {}) {
    const abortController = new AbortController();
    const poller = {
        sendInitialRequest: async () => {
            // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
            // we are not triggering the initial request here, just extracting the information from the
            // response we were provided.
            return getLroResponse(initialResponse);
        },
        sendPollRequest: async (path, options) => {
            // This is the callback that is going to be called to poll the service
            // to get the latest status. We use the client provided and the polling path
            // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
            // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
            function abortListener() {
                abortController.abort();
            }
            const inputAbortSignal = options?.abortSignal;
            const abortSignal = abortController.signal;
            if (inputAbortSignal?.aborted) {
                abortController.abort();
            }
            else if (!abortSignal.aborted) {
                inputAbortSignal?.addEventListener("abort", abortListener, {
                    once: true,
                });
            }
            let response;
            try {
                response = await client
                    .pathUnchecked(path ?? initialResponse.request.url)
                    .get({ abortSignal });
            }
            finally {
                inputAbortSignal?.removeEventListener("abort", abortListener);
            }
            const lroResponse = getLroResponse(response);
            lroResponse.rawResponse.headers["x-ms-original-url"] =
                initialResponse.request.url;
            return lroResponse;
        },
    };
    options.resolveOnUnsuccessful = options.resolveOnUnsuccessful ?? true;
    const httpPoller = createHttpPoller(poller, options);
    const simplePoller = {
        isDone() {
            return httpPoller.isDone;
        },
        isStopped() {
            return httpPoller.isStopped;
        },
        getOperationState() {
            if (!httpPoller.operationState) {
                throw new Error("Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().");
            }
            return httpPoller.operationState;
        },
        getResult() {
            return httpPoller.result;
        },
        toString() {
            if (!httpPoller.operationState) {
                throw new Error("Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().");
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
function getLroResponse(response) {
    if (Number.isNaN(response.status)) {
        throw new TypeError(`Status code of the response is not a number. Value: ${response.status}`);
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
//# sourceMappingURL=pollingHelper.js.map