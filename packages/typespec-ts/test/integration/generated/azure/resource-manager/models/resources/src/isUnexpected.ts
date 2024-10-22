// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TopLevelTrackedResourcesGet200Response,
  TopLevelTrackedResourcesGetDefaultResponse,
  TopLevelTrackedResourcesCreateOrReplace200Response,
  TopLevelTrackedResourcesCreateOrReplace201Response,
  TopLevelTrackedResourcesCreateOrReplaceLogicalResponse,
  TopLevelTrackedResourcesCreateOrReplaceDefaultResponse,
  TopLevelTrackedResourcesUpdate200Response,
  TopLevelTrackedResourcesUpdate202Response,
  TopLevelTrackedResourcesUpdateLogicalResponse,
  TopLevelTrackedResourcesUpdateDefaultResponse,
  TopLevelTrackedResourcesDelete202Response,
  TopLevelTrackedResourcesDelete204Response,
  TopLevelTrackedResourcesDeleteLogicalResponse,
  TopLevelTrackedResourcesDeleteDefaultResponse,
  TopLevelTrackedResourcesListByResourceGroup200Response,
  TopLevelTrackedResourcesListByResourceGroupDefaultResponse,
  TopLevelTrackedResourcesListBySubscription200Response,
  TopLevelTrackedResourcesListBySubscriptionDefaultResponse,
  TopLevelTrackedResourcesActionSync204Response,
  TopLevelTrackedResourcesActionSyncDefaultResponse,
  NestedProxyResourcesGet200Response,
  NestedProxyResourcesGetDefaultResponse,
  NestedProxyResourcesCreateOrReplace200Response,
  NestedProxyResourcesCreateOrReplace201Response,
  NestedProxyResourcesCreateOrReplaceLogicalResponse,
  NestedProxyResourcesCreateOrReplaceDefaultResponse,
  NestedProxyResourcesUpdate200Response,
  NestedProxyResourcesUpdate202Response,
  NestedProxyResourcesUpdateLogicalResponse,
  NestedProxyResourcesUpdateDefaultResponse,
  NestedProxyResourcesDelete202Response,
  NestedProxyResourcesDelete204Response,
  NestedProxyResourcesDeleteLogicalResponse,
  NestedProxyResourcesDeleteDefaultResponse,
  NestedProxyResourcesListByTopLevelTrackedResource200Response,
  NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse,
  SingletonTrackedResourcesGetByResourceGroup200Response,
  SingletonTrackedResourcesGetByResourceGroupDefaultResponse,
  SingletonTrackedResourcesCreateOrUpdate200Response,
  SingletonTrackedResourcesCreateOrUpdate201Response,
  SingletonTrackedResourcesCreateOrUpdateLogicalResponse,
  SingletonTrackedResourcesCreateOrUpdateDefaultResponse,
  SingletonTrackedResourcesUpdate200Response,
  SingletonTrackedResourcesUpdateDefaultResponse,
  SingletonTrackedResourcesListByResourceGroup200Response,
  SingletonTrackedResourcesListByResourceGroupDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/actionSync":
    ["204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources":
    ["200"],
};

export function isUnexpected(
  response:
    | TopLevelTrackedResourcesGet200Response
    | TopLevelTrackedResourcesGetDefaultResponse,
): response is TopLevelTrackedResourcesGetDefaultResponse;
export function isUnexpected(
  response:
    | TopLevelTrackedResourcesCreateOrReplace200Response
    | TopLevelTrackedResourcesCreateOrReplace201Response
    | TopLevelTrackedResourcesCreateOrReplaceLogicalResponse
    | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse,
): response is TopLevelTrackedResourcesCreateOrReplaceDefaultResponse;
export function isUnexpected(
  response:
    | TopLevelTrackedResourcesUpdate200Response
    | TopLevelTrackedResourcesUpdate202Response
    | TopLevelTrackedResourcesUpdateLogicalResponse
    | TopLevelTrackedResourcesUpdateDefaultResponse,
): response is TopLevelTrackedResourcesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | TopLevelTrackedResourcesDelete202Response
    | TopLevelTrackedResourcesDelete204Response
    | TopLevelTrackedResourcesDeleteLogicalResponse
    | TopLevelTrackedResourcesDeleteDefaultResponse,
): response is TopLevelTrackedResourcesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | TopLevelTrackedResourcesListByResourceGroup200Response
    | TopLevelTrackedResourcesListByResourceGroupDefaultResponse,
): response is TopLevelTrackedResourcesListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | TopLevelTrackedResourcesListBySubscription200Response
    | TopLevelTrackedResourcesListBySubscriptionDefaultResponse,
): response is TopLevelTrackedResourcesListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | TopLevelTrackedResourcesActionSync204Response
    | TopLevelTrackedResourcesActionSyncDefaultResponse,
): response is TopLevelTrackedResourcesActionSyncDefaultResponse;
export function isUnexpected(
  response:
    | NestedProxyResourcesGet200Response
    | NestedProxyResourcesGetDefaultResponse,
): response is NestedProxyResourcesGetDefaultResponse;
export function isUnexpected(
  response:
    | NestedProxyResourcesCreateOrReplace200Response
    | NestedProxyResourcesCreateOrReplace201Response
    | NestedProxyResourcesCreateOrReplaceLogicalResponse
    | NestedProxyResourcesCreateOrReplaceDefaultResponse,
): response is NestedProxyResourcesCreateOrReplaceDefaultResponse;
export function isUnexpected(
  response:
    | NestedProxyResourcesUpdate200Response
    | NestedProxyResourcesUpdate202Response
    | NestedProxyResourcesUpdateLogicalResponse
    | NestedProxyResourcesUpdateDefaultResponse,
): response is NestedProxyResourcesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | NestedProxyResourcesDelete202Response
    | NestedProxyResourcesDelete204Response
    | NestedProxyResourcesDeleteLogicalResponse
    | NestedProxyResourcesDeleteDefaultResponse,
): response is NestedProxyResourcesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | NestedProxyResourcesListByTopLevelTrackedResource200Response
    | NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse,
): response is NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse;
export function isUnexpected(
  response:
    | SingletonTrackedResourcesGetByResourceGroup200Response
    | SingletonTrackedResourcesGetByResourceGroupDefaultResponse,
): response is SingletonTrackedResourcesGetByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | SingletonTrackedResourcesCreateOrUpdate200Response
    | SingletonTrackedResourcesCreateOrUpdate201Response
    | SingletonTrackedResourcesCreateOrUpdateLogicalResponse
    | SingletonTrackedResourcesCreateOrUpdateDefaultResponse,
): response is SingletonTrackedResourcesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | SingletonTrackedResourcesUpdate200Response
    | SingletonTrackedResourcesUpdateDefaultResponse,
): response is SingletonTrackedResourcesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | SingletonTrackedResourcesListByResourceGroup200Response
    | SingletonTrackedResourcesListByResourceGroupDefaultResponse,
): response is SingletonTrackedResourcesListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | TopLevelTrackedResourcesGet200Response
    | TopLevelTrackedResourcesGetDefaultResponse
    | TopLevelTrackedResourcesCreateOrReplace200Response
    | TopLevelTrackedResourcesCreateOrReplace201Response
    | TopLevelTrackedResourcesCreateOrReplaceLogicalResponse
    | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse
    | TopLevelTrackedResourcesUpdate200Response
    | TopLevelTrackedResourcesUpdate202Response
    | TopLevelTrackedResourcesUpdateLogicalResponse
    | TopLevelTrackedResourcesUpdateDefaultResponse
    | TopLevelTrackedResourcesDelete202Response
    | TopLevelTrackedResourcesDelete204Response
    | TopLevelTrackedResourcesDeleteLogicalResponse
    | TopLevelTrackedResourcesDeleteDefaultResponse
    | TopLevelTrackedResourcesListByResourceGroup200Response
    | TopLevelTrackedResourcesListByResourceGroupDefaultResponse
    | TopLevelTrackedResourcesListBySubscription200Response
    | TopLevelTrackedResourcesListBySubscriptionDefaultResponse
    | TopLevelTrackedResourcesActionSync204Response
    | TopLevelTrackedResourcesActionSyncDefaultResponse
    | NestedProxyResourcesGet200Response
    | NestedProxyResourcesGetDefaultResponse
    | NestedProxyResourcesCreateOrReplace200Response
    | NestedProxyResourcesCreateOrReplace201Response
    | NestedProxyResourcesCreateOrReplaceLogicalResponse
    | NestedProxyResourcesCreateOrReplaceDefaultResponse
    | NestedProxyResourcesUpdate200Response
    | NestedProxyResourcesUpdate202Response
    | NestedProxyResourcesUpdateLogicalResponse
    | NestedProxyResourcesUpdateDefaultResponse
    | NestedProxyResourcesDelete202Response
    | NestedProxyResourcesDelete204Response
    | NestedProxyResourcesDeleteLogicalResponse
    | NestedProxyResourcesDeleteDefaultResponse
    | NestedProxyResourcesListByTopLevelTrackedResource200Response
    | NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse
    | SingletonTrackedResourcesGetByResourceGroup200Response
    | SingletonTrackedResourcesGetByResourceGroupDefaultResponse
    | SingletonTrackedResourcesCreateOrUpdate200Response
    | SingletonTrackedResourcesCreateOrUpdate201Response
    | SingletonTrackedResourcesCreateOrUpdateLogicalResponse
    | SingletonTrackedResourcesCreateOrUpdateDefaultResponse
    | SingletonTrackedResourcesUpdate200Response
    | SingletonTrackedResourcesUpdateDefaultResponse
    | SingletonTrackedResourcesListByResourceGroup200Response
    | SingletonTrackedResourcesListByResourceGroupDefaultResponse,
): response is
  | TopLevelTrackedResourcesGetDefaultResponse
  | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse
  | TopLevelTrackedResourcesUpdateDefaultResponse
  | TopLevelTrackedResourcesDeleteDefaultResponse
  | TopLevelTrackedResourcesListByResourceGroupDefaultResponse
  | TopLevelTrackedResourcesListBySubscriptionDefaultResponse
  | TopLevelTrackedResourcesActionSyncDefaultResponse
  | NestedProxyResourcesGetDefaultResponse
  | NestedProxyResourcesCreateOrReplaceDefaultResponse
  | NestedProxyResourcesUpdateDefaultResponse
  | NestedProxyResourcesDeleteDefaultResponse
  | NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse
  | SingletonTrackedResourcesGetByResourceGroupDefaultResponse
  | SingletonTrackedResourcesCreateOrUpdateDefaultResponse
  | SingletonTrackedResourcesUpdateDefaultResponse
  | SingletonTrackedResourcesListByResourceGroupDefaultResponse {
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
