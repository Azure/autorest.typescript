// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TopLevelTrackedResourcesGetParameters,
  TopLevelTrackedResourcesCreateOrReplaceParameters,
  TopLevelTrackedResourcesUpdateParameters,
  TopLevelTrackedResourcesDeleteParameters,
  TopLevelTrackedResourcesListByResourceGroupParameters,
  TopLevelTrackedResourcesListBySubscriptionParameters,
  TopLevelTrackedResourcesActionSyncParameters,
  NestedProxyResourcesGetParameters,
  NestedProxyResourcesCreateOrReplaceParameters,
  NestedProxyResourcesUpdateParameters,
  NestedProxyResourcesDeleteParameters,
  NestedProxyResourcesListByTopLevelTrackedResourceParameters,
  SingletonTrackedResourcesGetByResourceGroupParameters,
  SingletonTrackedResourcesCreateOrUpdateParameters,
  SingletonTrackedResourcesUpdateParameters,
  SingletonTrackedResourcesListByResourceGroupParameters,
} from "./parameters.js";
import {
  TopLevelTrackedResourcesGet200Response,
  TopLevelTrackedResourcesGetDefaultResponse,
  TopLevelTrackedResourcesCreateOrReplace200Response,
  TopLevelTrackedResourcesCreateOrReplace201Response,
  TopLevelTrackedResourcesCreateOrReplaceDefaultResponse,
  TopLevelTrackedResourcesUpdate200Response,
  TopLevelTrackedResourcesUpdate202Response,
  TopLevelTrackedResourcesUpdateDefaultResponse,
  TopLevelTrackedResourcesDelete202Response,
  TopLevelTrackedResourcesDelete204Response,
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
  NestedProxyResourcesCreateOrReplaceDefaultResponse,
  NestedProxyResourcesUpdate200Response,
  NestedProxyResourcesUpdate202Response,
  NestedProxyResourcesUpdateDefaultResponse,
  NestedProxyResourcesDelete202Response,
  NestedProxyResourcesDelete204Response,
  NestedProxyResourcesDeleteDefaultResponse,
  NestedProxyResourcesListByTopLevelTrackedResource200Response,
  NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse,
  SingletonTrackedResourcesGetByResourceGroup200Response,
  SingletonTrackedResourcesGetByResourceGroupDefaultResponse,
  SingletonTrackedResourcesCreateOrUpdate200Response,
  SingletonTrackedResourcesCreateOrUpdate201Response,
  SingletonTrackedResourcesCreateOrUpdateDefaultResponse,
  SingletonTrackedResourcesUpdate200Response,
  SingletonTrackedResourcesUpdateDefaultResponse,
  SingletonTrackedResourcesListByResourceGroup200Response,
  SingletonTrackedResourcesListByResourceGroupDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface TopLevelTrackedResourcesGet {
  /** Get a TopLevelTrackedResource */
  get(
    options?: TopLevelTrackedResourcesGetParameters,
  ): StreamableMethod<
    | TopLevelTrackedResourcesGet200Response
    | TopLevelTrackedResourcesGetDefaultResponse
  >;
  /** Create a TopLevelTrackedResource */
  put(
    options: TopLevelTrackedResourcesCreateOrReplaceParameters,
  ): StreamableMethod<
    | TopLevelTrackedResourcesCreateOrReplace200Response
    | TopLevelTrackedResourcesCreateOrReplace201Response
    | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse
  >;
  /** Update a TopLevelTrackedResource */
  patch(
    options: TopLevelTrackedResourcesUpdateParameters,
  ): StreamableMethod<
    | TopLevelTrackedResourcesUpdate200Response
    | TopLevelTrackedResourcesUpdate202Response
    | TopLevelTrackedResourcesUpdateDefaultResponse
  >;
  /** Delete a TopLevelTrackedResource */
  delete(
    options?: TopLevelTrackedResourcesDeleteParameters,
  ): StreamableMethod<
    | TopLevelTrackedResourcesDelete202Response
    | TopLevelTrackedResourcesDelete204Response
    | TopLevelTrackedResourcesDeleteDefaultResponse
  >;
}

export interface TopLevelTrackedResourcesListByResourceGroup {
  /** List TopLevelTrackedResource resources by resource group */
  get(
    options?: TopLevelTrackedResourcesListByResourceGroupParameters,
  ): StreamableMethod<
    | TopLevelTrackedResourcesListByResourceGroup200Response
    | TopLevelTrackedResourcesListByResourceGroupDefaultResponse
  >;
}

export interface TopLevelTrackedResourcesListBySubscription {
  /** List TopLevelTrackedResource resources by subscription ID */
  get(
    options?: TopLevelTrackedResourcesListBySubscriptionParameters,
  ): StreamableMethod<
    | TopLevelTrackedResourcesListBySubscription200Response
    | TopLevelTrackedResourcesListBySubscriptionDefaultResponse
  >;
}

export interface TopLevelTrackedResourcesActionSync {
  /** A synchronous resource action that returns no content. */
  post(
    options: TopLevelTrackedResourcesActionSyncParameters,
  ): StreamableMethod<
    | TopLevelTrackedResourcesActionSync204Response
    | TopLevelTrackedResourcesActionSyncDefaultResponse
  >;
}

export interface NestedProxyResourcesGet {
  /** Get a NestedProxyResource */
  get(
    options?: NestedProxyResourcesGetParameters,
  ): StreamableMethod<
    NestedProxyResourcesGet200Response | NestedProxyResourcesGetDefaultResponse
  >;
  /** Create a NestedProxyResource */
  put(
    options: NestedProxyResourcesCreateOrReplaceParameters,
  ): StreamableMethod<
    | NestedProxyResourcesCreateOrReplace200Response
    | NestedProxyResourcesCreateOrReplace201Response
    | NestedProxyResourcesCreateOrReplaceDefaultResponse
  >;
  /** Update a NestedProxyResource */
  patch(
    options: NestedProxyResourcesUpdateParameters,
  ): StreamableMethod<
    | NestedProxyResourcesUpdate200Response
    | NestedProxyResourcesUpdate202Response
    | NestedProxyResourcesUpdateDefaultResponse
  >;
  /** Delete a NestedProxyResource */
  delete(
    options?: NestedProxyResourcesDeleteParameters,
  ): StreamableMethod<
    | NestedProxyResourcesDelete202Response
    | NestedProxyResourcesDelete204Response
    | NestedProxyResourcesDeleteDefaultResponse
  >;
}

export interface NestedProxyResourcesListByTopLevelTrackedResource {
  /** List NestedProxyResource resources by TopLevelTrackedResource */
  get(
    options?: NestedProxyResourcesListByTopLevelTrackedResourceParameters,
  ): StreamableMethod<
    | NestedProxyResourcesListByTopLevelTrackedResource200Response
    | NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse
  >;
}

export interface SingletonTrackedResourcesGetByResourceGroup {
  /** Get a SingletonTrackedResource */
  get(
    options?: SingletonTrackedResourcesGetByResourceGroupParameters,
  ): StreamableMethod<
    | SingletonTrackedResourcesGetByResourceGroup200Response
    | SingletonTrackedResourcesGetByResourceGroupDefaultResponse
  >;
  /** Create a SingletonTrackedResource */
  put(
    options: SingletonTrackedResourcesCreateOrUpdateParameters,
  ): StreamableMethod<
    | SingletonTrackedResourcesCreateOrUpdate200Response
    | SingletonTrackedResourcesCreateOrUpdate201Response
    | SingletonTrackedResourcesCreateOrUpdateDefaultResponse
  >;
  /** Update a SingletonTrackedResource */
  patch(
    options: SingletonTrackedResourcesUpdateParameters,
  ): StreamableMethod<
    | SingletonTrackedResourcesUpdate200Response
    | SingletonTrackedResourcesUpdateDefaultResponse
  >;
}

export interface SingletonTrackedResourcesListByResourceGroup {
  /** List SingletonTrackedResource resources by resource group */
  get(
    options?: SingletonTrackedResourcesListByResourceGroupParameters,
  ): StreamableMethod<
    | SingletonTrackedResourcesListByResourceGroup200Response
    | SingletonTrackedResourcesListByResourceGroupDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/\{topLevelTrackedResourceName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
    subscriptionId: string,
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
  ): TopLevelTrackedResourcesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
    subscriptionId: string,
    resourceGroupName: string,
  ): TopLevelTrackedResourcesListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
    subscriptionId: string,
  ): TopLevelTrackedResourcesListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/\{topLevelTrackedResourceName\}/actionSync' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/actionSync",
    subscriptionId: string,
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
  ): TopLevelTrackedResourcesActionSync;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/\{topLevelTrackedResourceName\}/nestedProxyResources/\{nextedProxyResourceName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
    subscriptionId: string,
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
    nextedProxyResourceName: string,
  ): NestedProxyResourcesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/\{topLevelTrackedResourceName\}/nestedProxyResources' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources",
    subscriptionId: string,
    resourceGroupName: string,
    topLevelTrackedResourceName: string,
  ): NestedProxyResourcesListByTopLevelTrackedResource;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default' has methods for the following verbs: get, put, patch */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default",
    subscriptionId: string,
    resourceGroupName: string,
  ): SingletonTrackedResourcesGetByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources",
    subscriptionId: string,
    resourceGroupName: string,
  ): SingletonTrackedResourcesListByResourceGroup;
}

export type AzureArmResourceClient = Client & {
  path: Routes;
};
