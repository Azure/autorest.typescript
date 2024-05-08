// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  FleetsGet200Response,
  FleetsGetDefaultResponse,
  FleetsCreate200Response,
  FleetsCreate201Response,
  FleetsCreateLogicalResponse,
  FleetsCreateDefaultResponse,
  FleetsUpdateAsync200Response,
  FleetsUpdateAsync202Response,
  FleetsUpdateAsyncLogicalResponse,
  FleetsUpdateAsyncDefaultResponse,
  FleetsDelete200Response,
  FleetsDelete202Response,
  FleetsDelete204Response,
  FleetsDeleteLogicalResponse,
  FleetsDeleteDefaultResponse,
  FleetsListByResourceGroup200Response,
  FleetsListByResourceGroupDefaultResponse,
  FleetsListBySubscription200Response,
  FleetsListBySubscriptionDefaultResponse,
  FleetsListCredentials200Response,
  FleetsListCredentialsDefaultResponse,
  FleetMembersGet200Response,
  FleetMembersGetDefaultResponse,
  FleetMembersCreate200Response,
  FleetMembersCreate201Response,
  FleetMembersCreateLogicalResponse,
  FleetMembersCreateDefaultResponse,
  FleetMembersUpdateAsync200Response,
  FleetMembersUpdateAsync202Response,
  FleetMembersUpdateAsyncLogicalResponse,
  FleetMembersUpdateAsyncDefaultResponse,
  FleetMembersDelete200Response,
  FleetMembersDelete202Response,
  FleetMembersDelete204Response,
  FleetMembersDeleteLogicalResponse,
  FleetMembersDeleteDefaultResponse,
  FleetMembersListByFleet200Response,
  FleetMembersListByFleetDefaultResponse,
  UpdateRunsGet200Response,
  UpdateRunsGetDefaultResponse,
  UpdateRunsCreateOrUpdate200Response,
  UpdateRunsCreateOrUpdate201Response,
  UpdateRunsCreateOrUpdateLogicalResponse,
  UpdateRunsCreateOrUpdateDefaultResponse,
  UpdateRunsDelete200Response,
  UpdateRunsDelete202Response,
  UpdateRunsDelete204Response,
  UpdateRunsDeleteLogicalResponse,
  UpdateRunsDeleteDefaultResponse,
  UpdateRunsListByFleet200Response,
  UpdateRunsListByFleetDefaultResponse,
  UpdateRunsStart200Response,
  UpdateRunsStart202Response,
  UpdateRunsStartLogicalResponse,
  UpdateRunsStartDefaultResponse,
  UpdateRunsStop200Response,
  UpdateRunsStop202Response,
  UpdateRunsStopLogicalResponse,
  UpdateRunsStopDefaultResponse,
  UpdateRunsSkip200Response,
  UpdateRunsSkip202Response,
  UpdateRunsSkipLogicalResponse,
  UpdateRunsSkipDefaultResponse,
  FleetUpdateStrategiesGet200Response,
  FleetUpdateStrategiesGetDefaultResponse,
  FleetUpdateStrategiesCreateOrUpdate200Response,
  FleetUpdateStrategiesCreateOrUpdate201Response,
  FleetUpdateStrategiesCreateOrUpdateLogicalResponse,
  FleetUpdateStrategiesCreateOrUpdateDefaultResponse,
  FleetUpdateStrategiesDelete200Response,
  FleetUpdateStrategiesDelete202Response,
  FleetUpdateStrategiesDelete204Response,
  FleetUpdateStrategiesDeleteLogicalResponse,
  FleetUpdateStrategiesDeleteDefaultResponse,
  FleetUpdateStrategiesListByFleet200Response,
  FleetUpdateStrategiesListByFleetDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /providers/Microsoft.ContainerService/operations": ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/fleets":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/listCredentials":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/start":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/start":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/stop":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/stop":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/skip":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/skip":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies":
    ["200"],
};

export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response: FleetsGet200Response | FleetsGetDefaultResponse,
): response is FleetsGetDefaultResponse;
export function isUnexpected(
  response:
    | FleetsCreate200Response
    | FleetsCreate201Response
    | FleetsCreateLogicalResponse
    | FleetsCreateDefaultResponse,
): response is FleetsCreateDefaultResponse;
export function isUnexpected(
  response:
    | FleetsUpdateAsync200Response
    | FleetsUpdateAsync202Response
    | FleetsUpdateAsyncLogicalResponse
    | FleetsUpdateAsyncDefaultResponse,
): response is FleetsUpdateAsyncDefaultResponse;
export function isUnexpected(
  response:
    | FleetsDelete200Response
    | FleetsDelete202Response
    | FleetsDelete204Response
    | FleetsDeleteLogicalResponse
    | FleetsDeleteDefaultResponse,
): response is FleetsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | FleetsListByResourceGroup200Response
    | FleetsListByResourceGroupDefaultResponse,
): response is FleetsListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | FleetsListBySubscription200Response
    | FleetsListBySubscriptionDefaultResponse,
): response is FleetsListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | FleetsListCredentials200Response
    | FleetsListCredentialsDefaultResponse,
): response is FleetsListCredentialsDefaultResponse;
export function isUnexpected(
  response: FleetMembersGet200Response | FleetMembersGetDefaultResponse,
): response is FleetMembersGetDefaultResponse;
export function isUnexpected(
  response:
    | FleetMembersCreate200Response
    | FleetMembersCreate201Response
    | FleetMembersCreateLogicalResponse
    | FleetMembersCreateDefaultResponse,
): response is FleetMembersCreateDefaultResponse;
export function isUnexpected(
  response:
    | FleetMembersUpdateAsync200Response
    | FleetMembersUpdateAsync202Response
    | FleetMembersUpdateAsyncLogicalResponse
    | FleetMembersUpdateAsyncDefaultResponse,
): response is FleetMembersUpdateAsyncDefaultResponse;
export function isUnexpected(
  response:
    | FleetMembersDelete200Response
    | FleetMembersDelete202Response
    | FleetMembersDelete204Response
    | FleetMembersDeleteLogicalResponse
    | FleetMembersDeleteDefaultResponse,
): response is FleetMembersDeleteDefaultResponse;
export function isUnexpected(
  response:
    | FleetMembersListByFleet200Response
    | FleetMembersListByFleetDefaultResponse,
): response is FleetMembersListByFleetDefaultResponse;
export function isUnexpected(
  response: UpdateRunsGet200Response | UpdateRunsGetDefaultResponse,
): response is UpdateRunsGetDefaultResponse;
export function isUnexpected(
  response:
    | UpdateRunsCreateOrUpdate200Response
    | UpdateRunsCreateOrUpdate201Response
    | UpdateRunsCreateOrUpdateLogicalResponse
    | UpdateRunsCreateOrUpdateDefaultResponse,
): response is UpdateRunsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | UpdateRunsDelete200Response
    | UpdateRunsDelete202Response
    | UpdateRunsDelete204Response
    | UpdateRunsDeleteLogicalResponse
    | UpdateRunsDeleteDefaultResponse,
): response is UpdateRunsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | UpdateRunsListByFleet200Response
    | UpdateRunsListByFleetDefaultResponse,
): response is UpdateRunsListByFleetDefaultResponse;
export function isUnexpected(
  response:
    | UpdateRunsStart200Response
    | UpdateRunsStart202Response
    | UpdateRunsStartLogicalResponse
    | UpdateRunsStartDefaultResponse,
): response is UpdateRunsStartDefaultResponse;
export function isUnexpected(
  response:
    | UpdateRunsStop200Response
    | UpdateRunsStop202Response
    | UpdateRunsStopLogicalResponse
    | UpdateRunsStopDefaultResponse,
): response is UpdateRunsStopDefaultResponse;
export function isUnexpected(
  response:
    | UpdateRunsSkip200Response
    | UpdateRunsSkip202Response
    | UpdateRunsSkipLogicalResponse
    | UpdateRunsSkipDefaultResponse,
): response is UpdateRunsSkipDefaultResponse;
export function isUnexpected(
  response:
    | FleetUpdateStrategiesGet200Response
    | FleetUpdateStrategiesGetDefaultResponse,
): response is FleetUpdateStrategiesGetDefaultResponse;
export function isUnexpected(
  response:
    | FleetUpdateStrategiesCreateOrUpdate200Response
    | FleetUpdateStrategiesCreateOrUpdate201Response
    | FleetUpdateStrategiesCreateOrUpdateLogicalResponse
    | FleetUpdateStrategiesCreateOrUpdateDefaultResponse,
): response is FleetUpdateStrategiesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | FleetUpdateStrategiesDelete200Response
    | FleetUpdateStrategiesDelete202Response
    | FleetUpdateStrategiesDelete204Response
    | FleetUpdateStrategiesDeleteLogicalResponse
    | FleetUpdateStrategiesDeleteDefaultResponse,
): response is FleetUpdateStrategiesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | FleetUpdateStrategiesListByFleet200Response
    | FleetUpdateStrategiesListByFleetDefaultResponse,
): response is FleetUpdateStrategiesListByFleetDefaultResponse;
export function isUnexpected(
  response:
    | OperationsList200Response
    | OperationsListDefaultResponse
    | FleetsGet200Response
    | FleetsGetDefaultResponse
    | FleetsCreate200Response
    | FleetsCreate201Response
    | FleetsCreateLogicalResponse
    | FleetsCreateDefaultResponse
    | FleetsUpdateAsync200Response
    | FleetsUpdateAsync202Response
    | FleetsUpdateAsyncLogicalResponse
    | FleetsUpdateAsyncDefaultResponse
    | FleetsDelete200Response
    | FleetsDelete202Response
    | FleetsDelete204Response
    | FleetsDeleteLogicalResponse
    | FleetsDeleteDefaultResponse
    | FleetsListByResourceGroup200Response
    | FleetsListByResourceGroupDefaultResponse
    | FleetsListBySubscription200Response
    | FleetsListBySubscriptionDefaultResponse
    | FleetsListCredentials200Response
    | FleetsListCredentialsDefaultResponse
    | FleetMembersGet200Response
    | FleetMembersGetDefaultResponse
    | FleetMembersCreate200Response
    | FleetMembersCreate201Response
    | FleetMembersCreateLogicalResponse
    | FleetMembersCreateDefaultResponse
    | FleetMembersUpdateAsync200Response
    | FleetMembersUpdateAsync202Response
    | FleetMembersUpdateAsyncLogicalResponse
    | FleetMembersUpdateAsyncDefaultResponse
    | FleetMembersDelete200Response
    | FleetMembersDelete202Response
    | FleetMembersDelete204Response
    | FleetMembersDeleteLogicalResponse
    | FleetMembersDeleteDefaultResponse
    | FleetMembersListByFleet200Response
    | FleetMembersListByFleetDefaultResponse
    | UpdateRunsGet200Response
    | UpdateRunsGetDefaultResponse
    | UpdateRunsCreateOrUpdate200Response
    | UpdateRunsCreateOrUpdate201Response
    | UpdateRunsCreateOrUpdateLogicalResponse
    | UpdateRunsCreateOrUpdateDefaultResponse
    | UpdateRunsDelete200Response
    | UpdateRunsDelete202Response
    | UpdateRunsDelete204Response
    | UpdateRunsDeleteLogicalResponse
    | UpdateRunsDeleteDefaultResponse
    | UpdateRunsListByFleet200Response
    | UpdateRunsListByFleetDefaultResponse
    | UpdateRunsStart200Response
    | UpdateRunsStart202Response
    | UpdateRunsStartLogicalResponse
    | UpdateRunsStartDefaultResponse
    | UpdateRunsStop200Response
    | UpdateRunsStop202Response
    | UpdateRunsStopLogicalResponse
    | UpdateRunsStopDefaultResponse
    | UpdateRunsSkip200Response
    | UpdateRunsSkip202Response
    | UpdateRunsSkipLogicalResponse
    | UpdateRunsSkipDefaultResponse
    | FleetUpdateStrategiesGet200Response
    | FleetUpdateStrategiesGetDefaultResponse
    | FleetUpdateStrategiesCreateOrUpdate200Response
    | FleetUpdateStrategiesCreateOrUpdate201Response
    | FleetUpdateStrategiesCreateOrUpdateLogicalResponse
    | FleetUpdateStrategiesCreateOrUpdateDefaultResponse
    | FleetUpdateStrategiesDelete200Response
    | FleetUpdateStrategiesDelete202Response
    | FleetUpdateStrategiesDelete204Response
    | FleetUpdateStrategiesDeleteLogicalResponse
    | FleetUpdateStrategiesDeleteDefaultResponse
    | FleetUpdateStrategiesListByFleet200Response
    | FleetUpdateStrategiesListByFleetDefaultResponse,
): response is
  | OperationsListDefaultResponse
  | FleetsGetDefaultResponse
  | FleetsCreateDefaultResponse
  | FleetsUpdateAsyncDefaultResponse
  | FleetsDeleteDefaultResponse
  | FleetsListByResourceGroupDefaultResponse
  | FleetsListBySubscriptionDefaultResponse
  | FleetsListCredentialsDefaultResponse
  | FleetMembersGetDefaultResponse
  | FleetMembersCreateDefaultResponse
  | FleetMembersUpdateAsyncDefaultResponse
  | FleetMembersDeleteDefaultResponse
  | FleetMembersListByFleetDefaultResponse
  | UpdateRunsGetDefaultResponse
  | UpdateRunsCreateOrUpdateDefaultResponse
  | UpdateRunsDeleteDefaultResponse
  | UpdateRunsListByFleetDefaultResponse
  | UpdateRunsStartDefaultResponse
  | UpdateRunsStopDefaultResponse
  | UpdateRunsSkipDefaultResponse
  | FleetUpdateStrategiesGetDefaultResponse
  | FleetUpdateStrategiesCreateOrUpdateDefaultResponse
  | FleetUpdateStrategiesDeleteDefaultResponse
  | FleetUpdateStrategiesListByFleetDefaultResponse {
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
