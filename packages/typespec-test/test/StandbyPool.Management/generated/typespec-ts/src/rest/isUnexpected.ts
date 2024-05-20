// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  StandbyVirtualMachinePoolsGet200Response,
  StandbyVirtualMachinePoolsGetDefaultResponse,
  StandbyVirtualMachinePoolsCreateOrUpdate200Response,
  StandbyVirtualMachinePoolsCreateOrUpdate201Response,
  StandbyVirtualMachinePoolsCreateOrUpdateLogicalResponse,
  StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse,
  StandbyVirtualMachinePoolsDelete202Response,
  StandbyVirtualMachinePoolsDelete204Response,
  StandbyVirtualMachinePoolsDeleteLogicalResponse,
  StandbyVirtualMachinePoolsDeleteDefaultResponse,
  StandbyVirtualMachinePoolsUpdate200Response,
  StandbyVirtualMachinePoolsUpdateDefaultResponse,
  StandbyVirtualMachinePoolsListByResourceGroup200Response,
  StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse,
  StandbyVirtualMachinePoolsListBySubscription200Response,
  StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse,
  StandbyVirtualMachinesGet200Response,
  StandbyVirtualMachinesGetDefaultResponse,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource200Response,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse,
  StandbyContainerGroupPoolsGet200Response,
  StandbyContainerGroupPoolsGetDefaultResponse,
  StandbyContainerGroupPoolsCreateOrUpdate200Response,
  StandbyContainerGroupPoolsCreateOrUpdate201Response,
  StandbyContainerGroupPoolsCreateOrUpdateLogicalResponse,
  StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse,
  StandbyContainerGroupPoolsDelete202Response,
  StandbyContainerGroupPoolsDelete204Response,
  StandbyContainerGroupPoolsDeleteLogicalResponse,
  StandbyContainerGroupPoolsDeleteDefaultResponse,
  StandbyContainerGroupPoolsUpdate200Response,
  StandbyContainerGroupPoolsUpdateDefaultResponse,
  StandbyContainerGroupPoolsListByResourceGroup200Response,
  StandbyContainerGroupPoolsListByResourceGroupDefaultResponse,
  StandbyContainerGroupPoolsListBySubscription200Response,
  StandbyContainerGroupPoolsListBySubscriptionDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /providers/Microsoft.StandbyPool/operations": ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}":
    ["202", "204"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines/{standbyVirtualMachineName}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}":
    ["202", "204"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyContainerGroupPools":
    ["200"],
};

export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response:
    | StandbyVirtualMachinePoolsGet200Response
    | StandbyVirtualMachinePoolsGetDefaultResponse,
): response is StandbyVirtualMachinePoolsGetDefaultResponse;
export function isUnexpected(
  response:
    | StandbyVirtualMachinePoolsCreateOrUpdate200Response
    | StandbyVirtualMachinePoolsCreateOrUpdate201Response
    | StandbyVirtualMachinePoolsCreateOrUpdateLogicalResponse
    | StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse,
): response is StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | StandbyVirtualMachinePoolsDelete202Response
    | StandbyVirtualMachinePoolsDelete204Response
    | StandbyVirtualMachinePoolsDeleteLogicalResponse
    | StandbyVirtualMachinePoolsDeleteDefaultResponse,
): response is StandbyVirtualMachinePoolsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | StandbyVirtualMachinePoolsUpdate200Response
    | StandbyVirtualMachinePoolsUpdateDefaultResponse,
): response is StandbyVirtualMachinePoolsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | StandbyVirtualMachinePoolsListByResourceGroup200Response
    | StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse,
): response is StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | StandbyVirtualMachinePoolsListBySubscription200Response
    | StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse,
): response is StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | StandbyVirtualMachinesGet200Response
    | StandbyVirtualMachinesGetDefaultResponse,
): response is StandbyVirtualMachinesGetDefaultResponse;
export function isUnexpected(
  response:
    | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource200Response
    | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse,
): response is StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse;
export function isUnexpected(
  response:
    | StandbyContainerGroupPoolsGet200Response
    | StandbyContainerGroupPoolsGetDefaultResponse,
): response is StandbyContainerGroupPoolsGetDefaultResponse;
export function isUnexpected(
  response:
    | StandbyContainerGroupPoolsCreateOrUpdate200Response
    | StandbyContainerGroupPoolsCreateOrUpdate201Response
    | StandbyContainerGroupPoolsCreateOrUpdateLogicalResponse
    | StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse,
): response is StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | StandbyContainerGroupPoolsDelete202Response
    | StandbyContainerGroupPoolsDelete204Response
    | StandbyContainerGroupPoolsDeleteLogicalResponse
    | StandbyContainerGroupPoolsDeleteDefaultResponse,
): response is StandbyContainerGroupPoolsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | StandbyContainerGroupPoolsUpdate200Response
    | StandbyContainerGroupPoolsUpdateDefaultResponse,
): response is StandbyContainerGroupPoolsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | StandbyContainerGroupPoolsListByResourceGroup200Response
    | StandbyContainerGroupPoolsListByResourceGroupDefaultResponse,
): response is StandbyContainerGroupPoolsListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | StandbyContainerGroupPoolsListBySubscription200Response
    | StandbyContainerGroupPoolsListBySubscriptionDefaultResponse,
): response is StandbyContainerGroupPoolsListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | OperationsList200Response
    | OperationsListDefaultResponse
    | StandbyVirtualMachinePoolsGet200Response
    | StandbyVirtualMachinePoolsGetDefaultResponse
    | StandbyVirtualMachinePoolsCreateOrUpdate200Response
    | StandbyVirtualMachinePoolsCreateOrUpdate201Response
    | StandbyVirtualMachinePoolsCreateOrUpdateLogicalResponse
    | StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse
    | StandbyVirtualMachinePoolsDelete202Response
    | StandbyVirtualMachinePoolsDelete204Response
    | StandbyVirtualMachinePoolsDeleteLogicalResponse
    | StandbyVirtualMachinePoolsDeleteDefaultResponse
    | StandbyVirtualMachinePoolsUpdate200Response
    | StandbyVirtualMachinePoolsUpdateDefaultResponse
    | StandbyVirtualMachinePoolsListByResourceGroup200Response
    | StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse
    | StandbyVirtualMachinePoolsListBySubscription200Response
    | StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse
    | StandbyVirtualMachinesGet200Response
    | StandbyVirtualMachinesGetDefaultResponse
    | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource200Response
    | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse
    | StandbyContainerGroupPoolsGet200Response
    | StandbyContainerGroupPoolsGetDefaultResponse
    | StandbyContainerGroupPoolsCreateOrUpdate200Response
    | StandbyContainerGroupPoolsCreateOrUpdate201Response
    | StandbyContainerGroupPoolsCreateOrUpdateLogicalResponse
    | StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse
    | StandbyContainerGroupPoolsDelete202Response
    | StandbyContainerGroupPoolsDelete204Response
    | StandbyContainerGroupPoolsDeleteLogicalResponse
    | StandbyContainerGroupPoolsDeleteDefaultResponse
    | StandbyContainerGroupPoolsUpdate200Response
    | StandbyContainerGroupPoolsUpdateDefaultResponse
    | StandbyContainerGroupPoolsListByResourceGroup200Response
    | StandbyContainerGroupPoolsListByResourceGroupDefaultResponse
    | StandbyContainerGroupPoolsListBySubscription200Response
    | StandbyContainerGroupPoolsListBySubscriptionDefaultResponse,
): response is
  | OperationsListDefaultResponse
  | StandbyVirtualMachinePoolsGetDefaultResponse
  | StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse
  | StandbyVirtualMachinePoolsDeleteDefaultResponse
  | StandbyVirtualMachinePoolsUpdateDefaultResponse
  | StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse
  | StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse
  | StandbyVirtualMachinesGetDefaultResponse
  | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse
  | StandbyContainerGroupPoolsGetDefaultResponse
  | StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse
  | StandbyContainerGroupPoolsDeleteDefaultResponse
  | StandbyContainerGroupPoolsUpdateDefaultResponse
  | StandbyContainerGroupPoolsListByResourceGroupDefaultResponse
  | StandbyContainerGroupPoolsListBySubscriptionDefaultResponse {
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
