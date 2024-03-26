// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  AzureLargeInstancesGet200Response,
  AzureLargeInstancesGetDefaultResponse,
  AzureLargeInstancesUpdate200Response,
  AzureLargeInstancesUpdateDefaultResponse,
  AzureLargeInstancesListByResourceGroup200Response,
  AzureLargeInstancesListByResourceGroupDefaultResponse,
  AzureLargeInstancesListBySubscription200Response,
  AzureLargeInstancesListBySubscriptionDefaultResponse,
  AzureLargeInstancesStart200Response,
  AzureLargeInstancesStart202Response,
  AzureLargeInstancesStartLogicalResponse,
  AzureLargeInstancesStartDefaultResponse,
  AzureLargeInstancesRestart200Response,
  AzureLargeInstancesRestart202Response,
  AzureLargeInstancesRestartLogicalResponse,
  AzureLargeInstancesRestartDefaultResponse,
  AzureLargeInstancesShutdown200Response,
  AzureLargeInstancesShutdown202Response,
  AzureLargeInstancesShutdownLogicalResponse,
  AzureLargeInstancesShutdownDefaultResponse,
  AzureLargeStorageInstancesGet200Response,
  AzureLargeStorageInstancesGetDefaultResponse,
  AzureLargeStorageInstancesUpdate200Response,
  AzureLargeStorageInstancesUpdateDefaultResponse,
  AzureLargeStorageInstancesListByResourceGroup200Response,
  AzureLargeStorageInstancesListByResourceGroupDefaultResponse,
  AzureLargeStorageInstancesListBySubscription200Response,
  AzureLargeStorageInstancesListBySubscriptionDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /providers/Microsoft.AzureLargeInstance/operations": ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}":
    ["200"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.AzureLargeInstance/azureLargeInstances":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/start":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/start":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/restart":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/restart":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/shutdown":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/shutdown":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances/{azureLargeStorageInstanceName}":
    ["200"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances/{azureLargeStorageInstanceName}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances":
    ["200"],
};

export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeInstancesGet200Response
    | AzureLargeInstancesGetDefaultResponse,
): response is AzureLargeInstancesGetDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeInstancesUpdate200Response
    | AzureLargeInstancesUpdateDefaultResponse,
): response is AzureLargeInstancesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeInstancesListByResourceGroup200Response
    | AzureLargeInstancesListByResourceGroupDefaultResponse,
): response is AzureLargeInstancesListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeInstancesListBySubscription200Response
    | AzureLargeInstancesListBySubscriptionDefaultResponse,
): response is AzureLargeInstancesListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeInstancesStart200Response
    | AzureLargeInstancesStart202Response
    | AzureLargeInstancesStartLogicalResponse
    | AzureLargeInstancesStartDefaultResponse,
): response is AzureLargeInstancesStartDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeInstancesRestart200Response
    | AzureLargeInstancesRestart202Response
    | AzureLargeInstancesRestartLogicalResponse
    | AzureLargeInstancesRestartDefaultResponse,
): response is AzureLargeInstancesRestartDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeInstancesShutdown200Response
    | AzureLargeInstancesShutdown202Response
    | AzureLargeInstancesShutdownLogicalResponse
    | AzureLargeInstancesShutdownDefaultResponse,
): response is AzureLargeInstancesShutdownDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeStorageInstancesGet200Response
    | AzureLargeStorageInstancesGetDefaultResponse,
): response is AzureLargeStorageInstancesGetDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeStorageInstancesUpdate200Response
    | AzureLargeStorageInstancesUpdateDefaultResponse,
): response is AzureLargeStorageInstancesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeStorageInstancesListByResourceGroup200Response
    | AzureLargeStorageInstancesListByResourceGroupDefaultResponse,
): response is AzureLargeStorageInstancesListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | AzureLargeStorageInstancesListBySubscription200Response
    | AzureLargeStorageInstancesListBySubscriptionDefaultResponse,
): response is AzureLargeStorageInstancesListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | OperationsList200Response
    | OperationsListDefaultResponse
    | AzureLargeInstancesGet200Response
    | AzureLargeInstancesGetDefaultResponse
    | AzureLargeInstancesUpdate200Response
    | AzureLargeInstancesUpdateDefaultResponse
    | AzureLargeInstancesListByResourceGroup200Response
    | AzureLargeInstancesListByResourceGroupDefaultResponse
    | AzureLargeInstancesListBySubscription200Response
    | AzureLargeInstancesListBySubscriptionDefaultResponse
    | AzureLargeInstancesStart200Response
    | AzureLargeInstancesStart202Response
    | AzureLargeInstancesStartLogicalResponse
    | AzureLargeInstancesStartDefaultResponse
    | AzureLargeInstancesRestart200Response
    | AzureLargeInstancesRestart202Response
    | AzureLargeInstancesRestartLogicalResponse
    | AzureLargeInstancesRestartDefaultResponse
    | AzureLargeInstancesShutdown200Response
    | AzureLargeInstancesShutdown202Response
    | AzureLargeInstancesShutdownLogicalResponse
    | AzureLargeInstancesShutdownDefaultResponse
    | AzureLargeStorageInstancesGet200Response
    | AzureLargeStorageInstancesGetDefaultResponse
    | AzureLargeStorageInstancesUpdate200Response
    | AzureLargeStorageInstancesUpdateDefaultResponse
    | AzureLargeStorageInstancesListByResourceGroup200Response
    | AzureLargeStorageInstancesListByResourceGroupDefaultResponse
    | AzureLargeStorageInstancesListBySubscription200Response
    | AzureLargeStorageInstancesListBySubscriptionDefaultResponse,
): response is
  | OperationsListDefaultResponse
  | AzureLargeInstancesGetDefaultResponse
  | AzureLargeInstancesUpdateDefaultResponse
  | AzureLargeInstancesListByResourceGroupDefaultResponse
  | AzureLargeInstancesListBySubscriptionDefaultResponse
  | AzureLargeInstancesStartDefaultResponse
  | AzureLargeInstancesRestartDefaultResponse
  | AzureLargeInstancesShutdownDefaultResponse
  | AzureLargeStorageInstancesGetDefaultResponse
  | AzureLargeStorageInstancesUpdateDefaultResponse
  | AzureLargeStorageInstancesListByResourceGroupDefaultResponse
  | AzureLargeStorageInstancesListBySubscriptionDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
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
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

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

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
