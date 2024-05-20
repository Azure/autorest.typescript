// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsListParameters,
  StandbyVirtualMachinePoolsGetParameters,
  StandbyVirtualMachinePoolsCreateOrUpdateParameters,
  StandbyVirtualMachinePoolsDeleteParameters,
  StandbyVirtualMachinePoolsUpdateParameters,
  StandbyVirtualMachinePoolsListByResourceGroupParameters,
  StandbyVirtualMachinePoolsListBySubscriptionParameters,
  StandbyVirtualMachinesGetParameters,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceParameters,
  StandbyContainerGroupPoolsGetParameters,
  StandbyContainerGroupPoolsCreateOrUpdateParameters,
  StandbyContainerGroupPoolsDeleteParameters,
  StandbyContainerGroupPoolsUpdateParameters,
  StandbyContainerGroupPoolsListByResourceGroupParameters,
  StandbyContainerGroupPoolsListBySubscriptionParameters,
} from "./parameters.js";
import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  StandbyVirtualMachinePoolsGet200Response,
  StandbyVirtualMachinePoolsGetDefaultResponse,
  StandbyVirtualMachinePoolsCreateOrUpdate200Response,
  StandbyVirtualMachinePoolsCreateOrUpdate201Response,
  StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse,
  StandbyVirtualMachinePoolsDelete202Response,
  StandbyVirtualMachinePoolsDelete204Response,
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
  StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse,
  StandbyContainerGroupPoolsDelete202Response,
  StandbyContainerGroupPoolsDelete204Response,
  StandbyContainerGroupPoolsDeleteDefaultResponse,
  StandbyContainerGroupPoolsUpdate200Response,
  StandbyContainerGroupPoolsUpdateDefaultResponse,
  StandbyContainerGroupPoolsListByResourceGroup200Response,
  StandbyContainerGroupPoolsListByResourceGroupDefaultResponse,
  StandbyContainerGroupPoolsListBySubscription200Response,
  StandbyContainerGroupPoolsListBySubscriptionDefaultResponse,
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

export interface StandbyVirtualMachinePoolsGet {
  /** Get a StandbyVirtualMachinePoolResource */
  get(
    options?: StandbyVirtualMachinePoolsGetParameters,
  ): StreamableMethod<
    | StandbyVirtualMachinePoolsGet200Response
    | StandbyVirtualMachinePoolsGetDefaultResponse
  >;
  /** Create a StandbyVirtualMachinePoolResource */
  put(
    options: StandbyVirtualMachinePoolsCreateOrUpdateParameters,
  ): StreamableMethod<
    | StandbyVirtualMachinePoolsCreateOrUpdate200Response
    | StandbyVirtualMachinePoolsCreateOrUpdate201Response
    | StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse
  >;
  /** Delete a StandbyVirtualMachinePoolResource */
  delete(
    options?: StandbyVirtualMachinePoolsDeleteParameters,
  ): StreamableMethod<
    | StandbyVirtualMachinePoolsDelete202Response
    | StandbyVirtualMachinePoolsDelete204Response
    | StandbyVirtualMachinePoolsDeleteDefaultResponse
  >;
  /** Update a StandbyVirtualMachinePoolResource */
  patch(
    options: StandbyVirtualMachinePoolsUpdateParameters,
  ): StreamableMethod<
    | StandbyVirtualMachinePoolsUpdate200Response
    | StandbyVirtualMachinePoolsUpdateDefaultResponse
  >;
}

export interface StandbyVirtualMachinePoolsListByResourceGroup {
  /** List StandbyVirtualMachinePoolResource resources by resource group */
  get(
    options?: StandbyVirtualMachinePoolsListByResourceGroupParameters,
  ): StreamableMethod<
    | StandbyVirtualMachinePoolsListByResourceGroup200Response
    | StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse
  >;
}

export interface StandbyVirtualMachinePoolsListBySubscription {
  /** List StandbyVirtualMachinePoolResource resources by subscription ID */
  get(
    options?: StandbyVirtualMachinePoolsListBySubscriptionParameters,
  ): StreamableMethod<
    | StandbyVirtualMachinePoolsListBySubscription200Response
    | StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse
  >;
}

export interface StandbyVirtualMachinesGet {
  /** Get a StandbyVirtualMachineResource */
  get(
    options?: StandbyVirtualMachinesGetParameters,
  ): StreamableMethod<
    | StandbyVirtualMachinesGet200Response
    | StandbyVirtualMachinesGetDefaultResponse
  >;
}

export interface StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource {
  /** List StandbyVirtualMachineResource resources by StandbyVirtualMachinePoolResource */
  get(
    options?: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceParameters,
  ): StreamableMethod<
    | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource200Response
    | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse
  >;
}

export interface StandbyContainerGroupPoolsGet {
  /** Get a StandbyContainerGroupPoolResource */
  get(
    options?: StandbyContainerGroupPoolsGetParameters,
  ): StreamableMethod<
    | StandbyContainerGroupPoolsGet200Response
    | StandbyContainerGroupPoolsGetDefaultResponse
  >;
  /** Create a StandbyContainerGroupPoolResource */
  put(
    options: StandbyContainerGroupPoolsCreateOrUpdateParameters,
  ): StreamableMethod<
    | StandbyContainerGroupPoolsCreateOrUpdate200Response
    | StandbyContainerGroupPoolsCreateOrUpdate201Response
    | StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse
  >;
  /** Delete a StandbyContainerGroupPoolResource */
  delete(
    options?: StandbyContainerGroupPoolsDeleteParameters,
  ): StreamableMethod<
    | StandbyContainerGroupPoolsDelete202Response
    | StandbyContainerGroupPoolsDelete204Response
    | StandbyContainerGroupPoolsDeleteDefaultResponse
  >;
  /** Update a StandbyContainerGroupPoolResource */
  patch(
    options: StandbyContainerGroupPoolsUpdateParameters,
  ): StreamableMethod<
    | StandbyContainerGroupPoolsUpdate200Response
    | StandbyContainerGroupPoolsUpdateDefaultResponse
  >;
}

export interface StandbyContainerGroupPoolsListByResourceGroup {
  /** List StandbyContainerGroupPoolResource resources by resource group */
  get(
    options?: StandbyContainerGroupPoolsListByResourceGroupParameters,
  ): StreamableMethod<
    | StandbyContainerGroupPoolsListByResourceGroup200Response
    | StandbyContainerGroupPoolsListByResourceGroupDefaultResponse
  >;
}

export interface StandbyContainerGroupPoolsListBySubscription {
  /** List StandbyContainerGroupPoolResource resources by subscription ID */
  get(
    options?: StandbyContainerGroupPoolsListBySubscriptionParameters,
  ): StreamableMethod<
    | StandbyContainerGroupPoolsListBySubscription200Response
    | StandbyContainerGroupPoolsListBySubscriptionDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/providers/Microsoft.StandbyPool/operations' has methods for the following verbs: get */
  (path: "/providers/Microsoft.StandbyPool/operations"): OperationsList;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/\{standbyVirtualMachinePoolName\}' has methods for the following verbs: get, put, delete, patch */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
    subscriptionId: string,
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
  ): StandbyVirtualMachinePoolsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
    subscriptionId: string,
    resourceGroupName: string,
  ): StandbyVirtualMachinePoolsListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
    subscriptionId: string,
  ): StandbyVirtualMachinePoolsListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/\{standbyVirtualMachinePoolName\}/standbyVirtualMachines/\{standbyVirtualMachineName\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines/{standbyVirtualMachineName}",
    subscriptionId: string,
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
    standbyVirtualMachineName: string,
  ): StandbyVirtualMachinesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/\{standbyVirtualMachinePoolName\}/standbyVirtualMachines' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines",
    subscriptionId: string,
    resourceGroupName: string,
    standbyVirtualMachinePoolName: string,
  ): StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/\{standbyContainerGroupPoolName\}' has methods for the following verbs: get, put, delete, patch */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
    subscriptionId: string,
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
  ): StandbyContainerGroupPoolsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.StandbyPool/standbyContainerGroupPools' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools",
    subscriptionId: string,
    resourceGroupName: string,
  ): StandbyContainerGroupPoolsListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.StandbyPool/standbyContainerGroupPools' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyContainerGroupPools",
    subscriptionId: string,
  ): StandbyContainerGroupPoolsListBySubscription;
}

export type StandbyPoolContext = Client & {
  path: Routes;
};
