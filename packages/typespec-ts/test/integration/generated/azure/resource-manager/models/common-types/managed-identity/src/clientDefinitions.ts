// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  GetParameters,
  CreateWithSystemAssignedParameters,
  UpdateWithUserAssignedAndSystemAssignedParameters,
} from "./parameters.js";
import {
  Get200Response,
  GetDefaultResponse,
  CreateWithSystemAssigned200Response,
  CreateWithSystemAssigned201Response,
  CreateWithSystemAssignedDefaultResponse,
  UpdateWithUserAssignedAndSystemAssigned200Response,
  UpdateWithUserAssignedAndSystemAssignedDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Get {
  /** Get a ManagedIdentityTrackedResource */
  get(
    options?: GetParameters,
  ): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Create a ManagedIdentityTrackedResource */
  put(
    options: CreateWithSystemAssignedParameters,
  ): StreamableMethod<
    | CreateWithSystemAssigned200Response
    | CreateWithSystemAssigned201Response
    | CreateWithSystemAssignedDefaultResponse
  >;
  /** Update a ManagedIdentityTrackedResource */
  patch(
    options: UpdateWithUserAssignedAndSystemAssignedParameters,
  ): StreamableMethod<
    | UpdateWithUserAssignedAndSystemAssigned200Response
    | UpdateWithUserAssignedAndSystemAssignedDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Azure.ResourceManager.Models.CommonTypes.ManagedIdentity/managedIdentityTrackedResources/\{managedIdentityTrackedResourceName\}' has methods for the following verbs: get, put, patch */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.CommonTypes.ManagedIdentity/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
    subscriptionId: string,
    resourceGroupName: string,
    managedIdentityTrackedResourceName: string,
  ): Get;
}

export type AzureArmModelsCommonTypesManagedIdentityClient = Client & {
  path: Routes;
};
