// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsListParameters,
  FleetsGetParameters,
  FleetsCreateParameters,
  FleetsUpdateAsyncParameters,
  FleetsDeleteParameters,
  FleetsListByResourceGroupParameters,
  FleetsListBySubscriptionParameters,
  FleetsListCredentialsParameters,
  FleetMembersGetParameters,
  FleetMembersCreateParameters,
  FleetMembersUpdateAsyncParameters,
  FleetMembersDeleteParameters,
  FleetMembersListByFleetParameters,
  UpdateRunsGetParameters,
  UpdateRunsCreateOrUpdateParameters,
  UpdateRunsDeleteParameters,
  UpdateRunsListByFleetParameters,
  UpdateRunsStartParameters,
  UpdateRunsStopParameters,
  UpdateRunsSkipParameters,
  FleetUpdateStrategiesGetParameters,
  FleetUpdateStrategiesCreateOrUpdateParameters,
  FleetUpdateStrategiesDeleteParameters,
  FleetUpdateStrategiesListByFleetParameters,
} from "./parameters.js";
import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  FleetsGet200Response,
  FleetsGetDefaultResponse,
  FleetsCreate200Response,
  FleetsCreate201Response,
  FleetsCreateDefaultResponse,
  FleetsUpdateAsync200Response,
  FleetsUpdateAsync202Response,
  FleetsUpdateAsyncDefaultResponse,
  FleetsDelete200Response,
  FleetsDelete202Response,
  FleetsDelete204Response,
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
  FleetMembersCreateDefaultResponse,
  FleetMembersUpdateAsync200Response,
  FleetMembersUpdateAsync202Response,
  FleetMembersUpdateAsyncDefaultResponse,
  FleetMembersDelete200Response,
  FleetMembersDelete202Response,
  FleetMembersDelete204Response,
  FleetMembersDeleteDefaultResponse,
  FleetMembersListByFleet200Response,
  FleetMembersListByFleetDefaultResponse,
  UpdateRunsGet200Response,
  UpdateRunsGetDefaultResponse,
  UpdateRunsCreateOrUpdate200Response,
  UpdateRunsCreateOrUpdate201Response,
  UpdateRunsCreateOrUpdateDefaultResponse,
  UpdateRunsDelete200Response,
  UpdateRunsDelete202Response,
  UpdateRunsDelete204Response,
  UpdateRunsDeleteDefaultResponse,
  UpdateRunsListByFleet200Response,
  UpdateRunsListByFleetDefaultResponse,
  UpdateRunsStart200Response,
  UpdateRunsStart202Response,
  UpdateRunsStartDefaultResponse,
  UpdateRunsStop200Response,
  UpdateRunsStop202Response,
  UpdateRunsStopDefaultResponse,
  UpdateRunsSkip200Response,
  UpdateRunsSkip202Response,
  UpdateRunsSkipDefaultResponse,
  FleetUpdateStrategiesGet200Response,
  FleetUpdateStrategiesGetDefaultResponse,
  FleetUpdateStrategiesCreateOrUpdate200Response,
  FleetUpdateStrategiesCreateOrUpdate201Response,
  FleetUpdateStrategiesCreateOrUpdateDefaultResponse,
  FleetUpdateStrategiesDelete200Response,
  FleetUpdateStrategiesDelete202Response,
  FleetUpdateStrategiesDelete204Response,
  FleetUpdateStrategiesDeleteDefaultResponse,
  FleetUpdateStrategiesListByFleet200Response,
  FleetUpdateStrategiesListByFleetDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface OperationsList {
  /** List the operations for the provider */
  get(
    options?: OperationsListParameters,
  ): StreamableMethod<
    OperationsList200Response | OperationsListDefaultResponse
  >;
}

export interface FleetsGet {
  /** Gets a Fleet. */
  get(
    options?: FleetsGetParameters,
  ): StreamableMethod<FleetsGet200Response | FleetsGetDefaultResponse>;
  /** Creates or updates a Fleet. */
  put(
    options: FleetsCreateParameters,
  ): StreamableMethod<
    | FleetsCreate200Response
    | FleetsCreate201Response
    | FleetsCreateDefaultResponse
  >;
  /** Update a Fleet */
  patch(
    options: FleetsUpdateAsyncParameters,
  ): StreamableMethod<
    | FleetsUpdateAsync200Response
    | FleetsUpdateAsync202Response
    | FleetsUpdateAsyncDefaultResponse
  >;
  /** Delete a Fleet */
  delete(
    options?: FleetsDeleteParameters,
  ): StreamableMethod<
    | FleetsDelete200Response
    | FleetsDelete202Response
    | FleetsDelete204Response
    | FleetsDeleteDefaultResponse
  >;
}

export interface FleetsListByResourceGroup {
  /** Lists fleets in the specified subscription and resource group. */
  get(
    options?: FleetsListByResourceGroupParameters,
  ): StreamableMethod<
    | FleetsListByResourceGroup200Response
    | FleetsListByResourceGroupDefaultResponse
  >;
}

export interface FleetsListBySubscription {
  /** Lists fleets in the specified subscription. */
  get(
    options?: FleetsListBySubscriptionParameters,
  ): StreamableMethod<
    | FleetsListBySubscription200Response
    | FleetsListBySubscriptionDefaultResponse
  >;
}

export interface FleetsListCredentials {
  /** Lists the user credentials of a Fleet. */
  post(
    options: FleetsListCredentialsParameters,
  ): StreamableMethod<
    FleetsListCredentials200Response | FleetsListCredentialsDefaultResponse
  >;
}

export interface FleetMembersGet {
  /** Get a FleetMember */
  get(
    options?: FleetMembersGetParameters,
  ): StreamableMethod<
    FleetMembersGet200Response | FleetMembersGetDefaultResponse
  >;
  /** Create a FleetMember */
  put(
    options: FleetMembersCreateParameters,
  ): StreamableMethod<
    | FleetMembersCreate200Response
    | FleetMembersCreate201Response
    | FleetMembersCreateDefaultResponse
  >;
  /** Update a FleetMember */
  patch(
    options: FleetMembersUpdateAsyncParameters,
  ): StreamableMethod<
    | FleetMembersUpdateAsync200Response
    | FleetMembersUpdateAsync202Response
    | FleetMembersUpdateAsyncDefaultResponse
  >;
  /** Delete a FleetMember */
  delete(
    options?: FleetMembersDeleteParameters,
  ): StreamableMethod<
    | FleetMembersDelete200Response
    | FleetMembersDelete202Response
    | FleetMembersDelete204Response
    | FleetMembersDeleteDefaultResponse
  >;
}

export interface FleetMembersListByFleet {
  /** List FleetMember resources by Fleet */
  get(
    options?: FleetMembersListByFleetParameters,
  ): StreamableMethod<
    FleetMembersListByFleet200Response | FleetMembersListByFleetDefaultResponse
  >;
}

export interface UpdateRunsGet {
  /** Get a UpdateRun */
  get(
    options?: UpdateRunsGetParameters,
  ): StreamableMethod<UpdateRunsGet200Response | UpdateRunsGetDefaultResponse>;
  /** Create a UpdateRun */
  put(
    options: UpdateRunsCreateOrUpdateParameters,
  ): StreamableMethod<
    | UpdateRunsCreateOrUpdate200Response
    | UpdateRunsCreateOrUpdate201Response
    | UpdateRunsCreateOrUpdateDefaultResponse
  >;
  /** Delete a UpdateRun */
  delete(
    options?: UpdateRunsDeleteParameters,
  ): StreamableMethod<
    | UpdateRunsDelete200Response
    | UpdateRunsDelete202Response
    | UpdateRunsDelete204Response
    | UpdateRunsDeleteDefaultResponse
  >;
}

export interface UpdateRunsListByFleet {
  /** List UpdateRun resources by Fleet */
  get(
    options?: UpdateRunsListByFleetParameters,
  ): StreamableMethod<
    UpdateRunsListByFleet200Response | UpdateRunsListByFleetDefaultResponse
  >;
}

export interface UpdateRunsStart {
  /** Starts an UpdateRun. */
  post(
    options: UpdateRunsStartParameters,
  ): StreamableMethod<
    | UpdateRunsStart200Response
    | UpdateRunsStart202Response
    | UpdateRunsStartDefaultResponse
  >;
}

export interface UpdateRunsStop {
  /** Stops an UpdateRun. */
  post(
    options: UpdateRunsStopParameters,
  ): StreamableMethod<
    | UpdateRunsStop200Response
    | UpdateRunsStop202Response
    | UpdateRunsStopDefaultResponse
  >;
}

export interface UpdateRunsSkip {
  /** Skips one or a combination of member/group/stage/afterStageWait(s) of an update run. */
  post(
    options: UpdateRunsSkipParameters,
  ): StreamableMethod<
    | UpdateRunsSkip200Response
    | UpdateRunsSkip202Response
    | UpdateRunsSkipDefaultResponse
  >;
}

export interface FleetUpdateStrategiesGet {
  /** Get a FleetUpdateStrategy */
  get(
    options?: FleetUpdateStrategiesGetParameters,
  ): StreamableMethod<
    | FleetUpdateStrategiesGet200Response
    | FleetUpdateStrategiesGetDefaultResponse
  >;
  /** Create a FleetUpdateStrategy */
  put(
    options: FleetUpdateStrategiesCreateOrUpdateParameters,
  ): StreamableMethod<
    | FleetUpdateStrategiesCreateOrUpdate200Response
    | FleetUpdateStrategiesCreateOrUpdate201Response
    | FleetUpdateStrategiesCreateOrUpdateDefaultResponse
  >;
  /** Delete a FleetUpdateStrategy */
  delete(
    options?: FleetUpdateStrategiesDeleteParameters,
  ): StreamableMethod<
    | FleetUpdateStrategiesDelete200Response
    | FleetUpdateStrategiesDelete202Response
    | FleetUpdateStrategiesDelete204Response
    | FleetUpdateStrategiesDeleteDefaultResponse
  >;
}

export interface FleetUpdateStrategiesListByFleet {
  /** List FleetUpdateStrategy resources by Fleet */
  get(
    options?: FleetUpdateStrategiesListByFleetParameters,
  ): StreamableMethod<
    | FleetUpdateStrategiesListByFleet200Response
    | FleetUpdateStrategiesListByFleetDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/providers/Microsoft.ContainerService/operations' has methods for the following verbs: get */
  (path: "/providers/Microsoft.ContainerService/operations"): OperationsList;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
  ): FleetsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets",
    subscriptionId: string,
    resourceGroupName: string,
  ): FleetsListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.ContainerService/fleets' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/fleets",
    subscriptionId: string,
  ): FleetsListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/listCredentials' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/listCredentials",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
  ): FleetsListCredentials;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/members/\{fleetMemberName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    fleetMemberName: string,
  ): FleetMembersGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/members' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
  ): FleetMembersListByFleet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/updateRuns/\{updateRunName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
  ): UpdateRunsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/updateRuns' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
  ): UpdateRunsListByFleet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/updateRuns/\{updateRunName\}/start' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/start",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
  ): UpdateRunsStart;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/updateRuns/\{updateRunName\}/stop' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/stop",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
  ): UpdateRunsStop;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/updateRuns/\{updateRunName\}/skip' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/skip",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
  ): UpdateRunsSkip;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/updateStrategies/\{updateStrategyName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    updateStrategyName: string,
  ): FleetUpdateStrategiesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.ContainerService/fleets/\{fleetName\}/updateStrategies' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies",
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
  ): FleetUpdateStrategiesListByFleet;
}

export type ContainerServiceContext = Client & {
  path: Routes;
};
