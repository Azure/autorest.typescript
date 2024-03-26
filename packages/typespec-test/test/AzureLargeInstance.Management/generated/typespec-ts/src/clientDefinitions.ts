// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsListParameters,
  AzureLargeInstancesGetParameters,
  AzureLargeInstancesUpdateParameters,
  AzureLargeInstancesListByResourceGroupParameters,
  AzureLargeInstancesListBySubscriptionParameters,
  AzureLargeInstancesStartParameters,
  AzureLargeInstancesRestartParameters,
  AzureLargeInstancesShutdownParameters,
  AzureLargeStorageInstancesGetParameters,
  AzureLargeStorageInstancesUpdateParameters,
  AzureLargeStorageInstancesListByResourceGroupParameters,
  AzureLargeStorageInstancesListBySubscriptionParameters,
} from "./parameters.js";
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
  AzureLargeInstancesStartDefaultResponse,
  AzureLargeInstancesRestart200Response,
  AzureLargeInstancesRestart202Response,
  AzureLargeInstancesRestartDefaultResponse,
  AzureLargeInstancesShutdown200Response,
  AzureLargeInstancesShutdown202Response,
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface OperationsList {
  /** List the operations for the provider */
  get(
    options?: OperationsListParameters,
  ): StreamableMethod<
    OperationsList200Response | OperationsListDefaultResponse
  >;
}

export interface AzureLargeInstancesGet {
  /**
   * Gets an Azure Large Instance for the specified subscription, resource group,
   * and instance name.
   */
  get(
    options?: AzureLargeInstancesGetParameters,
  ): StreamableMethod<
    AzureLargeInstancesGet200Response | AzureLargeInstancesGetDefaultResponse
  >;
  /**
   * Patches the Tags field of an Azure Large Instance for the specified
   * subscription, resource group, and instance name.
   */
  patch(
    options: AzureLargeInstancesUpdateParameters,
  ): StreamableMethod<
    | AzureLargeInstancesUpdate200Response
    | AzureLargeInstancesUpdateDefaultResponse
  >;
}

export interface AzureLargeInstancesListByResourceGroup {
  /**
   * Gets a list of Azure Large Instances in the specified subscription and resource
   * group. The operations returns various properties of each Azure Large Instance.
   */
  get(
    options?: AzureLargeInstancesListByResourceGroupParameters,
  ): StreamableMethod<
    | AzureLargeInstancesListByResourceGroup200Response
    | AzureLargeInstancesListByResourceGroupDefaultResponse
  >;
}

export interface AzureLargeInstancesListBySubscription {
  /**
   * Gets a list of Azure Large Instances in the specified subscription. The
   * operations returns various properties of each Azure Large Instance.
   */
  get(
    options?: AzureLargeInstancesListBySubscriptionParameters,
  ): StreamableMethod<
    | AzureLargeInstancesListBySubscription200Response
    | AzureLargeInstancesListBySubscriptionDefaultResponse
  >;
}

export interface AzureLargeInstancesStart {
  /** The operation to start an Azure Large Instance (only for compute instances) */
  post(
    options?: AzureLargeInstancesStartParameters,
  ): StreamableMethod<
    | AzureLargeInstancesStart200Response
    | AzureLargeInstancesStart202Response
    | AzureLargeInstancesStartDefaultResponse
  >;
}

export interface AzureLargeInstancesRestart {
  /** The operation to restart an Azure Large Instance (only for compute instances) */
  post(
    options?: AzureLargeInstancesRestartParameters,
  ): StreamableMethod<
    | AzureLargeInstancesRestart200Response
    | AzureLargeInstancesRestart202Response
    | AzureLargeInstancesRestartDefaultResponse
  >;
}

export interface AzureLargeInstancesShutdown {
  /** The operation to shutdown an Azure Large Instance (only for compute instances) */
  post(
    options?: AzureLargeInstancesShutdownParameters,
  ): StreamableMethod<
    | AzureLargeInstancesShutdown200Response
    | AzureLargeInstancesShutdown202Response
    | AzureLargeInstancesShutdownDefaultResponse
  >;
}

export interface AzureLargeStorageInstancesGet {
  /**
   * Gets an Azure Large Storage instance for the specified subscription, resource
   * group, and instance name.
   */
  get(
    options?: AzureLargeStorageInstancesGetParameters,
  ): StreamableMethod<
    | AzureLargeStorageInstancesGet200Response
    | AzureLargeStorageInstancesGetDefaultResponse
  >;
  /**
   * Patches the Tags field of a Azure Large Storage Instance for the specified
   * subscription, resource group, and instance name.
   */
  patch(
    options: AzureLargeStorageInstancesUpdateParameters,
  ): StreamableMethod<
    | AzureLargeStorageInstancesUpdate200Response
    | AzureLargeStorageInstancesUpdateDefaultResponse
  >;
}

export interface AzureLargeStorageInstancesListByResourceGroup {
  /**
   * Gets a list of AzureLargeStorageInstances in the specified subscription and
   * resource group. The operations returns various properties of each Azure
   * LargeStorage instance.
   */
  get(
    options?: AzureLargeStorageInstancesListByResourceGroupParameters,
  ): StreamableMethod<
    | AzureLargeStorageInstancesListByResourceGroup200Response
    | AzureLargeStorageInstancesListByResourceGroupDefaultResponse
  >;
}

export interface AzureLargeStorageInstancesListBySubscription {
  /**
   * Gets a list of AzureLargeStorageInstances in the specified subscription. The
   * operations returns various properties of each Azure LargeStorage instance.
   */
  get(
    options?: AzureLargeStorageInstancesListBySubscriptionParameters,
  ): StreamableMethod<
    | AzureLargeStorageInstancesListBySubscription200Response
    | AzureLargeStorageInstancesListBySubscriptionDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/providers/Microsoft.AzureLargeInstance/operations' has methods for the following verbs: get */
  (path: "/providers/Microsoft.AzureLargeInstance/operations"): OperationsList;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/\{azureLargeInstanceName\}' has methods for the following verbs: get, patch */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}",
    subscriptionId: string,
    resourceGroupName: string,
    azureLargeInstanceName: string,
  ): AzureLargeInstancesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureLargeInstance/azureLargeInstances' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances",
    subscriptionId: string,
    resourceGroupName: string,
  ): AzureLargeInstancesListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.AzureLargeInstance/azureLargeInstances' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureLargeInstance/azureLargeInstances",
    subscriptionId: string,
  ): AzureLargeInstancesListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/\{azureLargeInstanceName\}/start' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/start",
    subscriptionId: string,
    resourceGroupName: string,
    azureLargeInstanceName: string,
  ): AzureLargeInstancesStart;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/\{azureLargeInstanceName\}/restart' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/restart",
    subscriptionId: string,
    resourceGroupName: string,
    azureLargeInstanceName: string,
  ): AzureLargeInstancesRestart;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/\{azureLargeInstanceName\}/shutdown' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/shutdown",
    subscriptionId: string,
    resourceGroupName: string,
    azureLargeInstanceName: string,
  ): AzureLargeInstancesShutdown;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances/\{azureLargeStorageInstanceName\}' has methods for the following verbs: get, patch */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances/{azureLargeStorageInstanceName}",
    subscriptionId: string,
    resourceGroupName: string,
    azureLargeStorageInstanceName: string,
  ): AzureLargeStorageInstancesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances",
    subscriptionId: string,
    resourceGroupName: string,
  ): AzureLargeStorageInstancesListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances",
    subscriptionId: string,
  ): AzureLargeStorageInstancesListBySubscription;
}

export type AzureLargeInstanceClient = Client & {
  path: Routes;
};
