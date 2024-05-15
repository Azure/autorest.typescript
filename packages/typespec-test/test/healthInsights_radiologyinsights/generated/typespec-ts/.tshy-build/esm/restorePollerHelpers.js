// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { deserializeState, } from "@azure/core-lro";
import { getLongRunningPoller } from "./api/pollingHelpers.js";
import { _inferRadiologyInsightsDeserialize } from "./api/operations.js";
/**
 * Creates a poller from the serialized state of another poller. This can be
 * useful when you want to create pollers on a different host or a poller
 * needs to be constructed after the original one is not in scope.
 */
export function restorePoller(client, serializedState, sourceOperation, options) {
    const pollerConfig = deserializeState(serializedState).config;
    const { initialUrl, requestMethod, metadata } = pollerConfig;
    if (!initialUrl || !requestMethod) {
        throw new Error(`Invalid serialized state: ${serializedState} for sourceOperation ${sourceOperation?.name}`);
    }
    const resourceLocationConfig = metadata?.["resourceLocationConfig"];
    const deserializeHelper = options?.processResponseBody ??
        getDeserializationHelper(initialUrl, requestMethod);
    if (!deserializeHelper) {
        throw new Error(`Please ensure the operation is in this client! We can't find its deserializeHelper for ${sourceOperation?.name}.`);
    }
    return getLongRunningPoller(client["_client"] ?? client, deserializeHelper, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        resourceLocationConfig,
        restoreFrom: serializedState,
        initialUrl,
    });
}
const deserializeMap = {
    "POST /radiology-insights/jobs": _inferRadiologyInsightsDeserialize,
};
function getDeserializationHelper(urlStr, method) {
    const path = new URL(urlStr).pathname;
    const pathParts = path.split("/");
    // Traverse list to match the longest candidate
    // matchedLen: the length of candidate path
    // matchedValue: the matched status code array
    let matchedLen = -1, matchedValue;
    // Iterate the responseMap to find a match
    for (const [key, value] of Object.entries(deserializeMap)) {
        // Extracting the path from the map key which is in format
        // GET /path/foo
        if (!key.startsWith(method)) {
            continue;
        }
        const candidatePath = getPathFromMapKey(key);
        // Get each part of the url path
        const candidateParts = candidatePath.split("/");
        // track if we have found a match to return the values found.
        let found = true;
        for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
            if (candidateParts[i]?.startsWith("{") &&
                candidateParts[i]?.indexOf("}") !== -1) {
                const start = candidateParts[i].indexOf("}") + 1, end = candidateParts[i]?.length;
                // If the current part of the candidate is a "template" part
                // Try to use the suffix of pattern to match the path
                // {guid} ==> $
                // {guid}:export ==> :export$
                const isMatched = new RegExp(`${candidateParts[i]?.slice(start, end)}`).test(pathParts[j] || "");
                if (!isMatched) {
                    found = false;
                    break;
                }
                continue;
            }
            // If the candidate part is not a template and
            // the parts don't match mark the candidate as not found
            // to move on with the next candidate path.
            if (candidateParts[i] !== pathParts[j]) {
                found = false;
                break;
            }
        }
        // We finished evaluating the current candidate parts
        // Update the matched value if and only if we found the longer pattern
        if (found && candidatePath.length > matchedLen) {
            matchedLen = candidatePath.length;
            matchedValue = value;
        }
    }
    return matchedValue;
}
function getPathFromMapKey(mapKey) {
    const pathStart = mapKey.indexOf("/");
    return mapKey.slice(pathStart);
}
//# sourceMappingURL=restorePollerHelpers.js.map