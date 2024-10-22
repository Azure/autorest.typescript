// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ManagedIdentityContext as Client,
  CreateWithSystemAssignedOptionalParams,
  GetOptionalParams,
  UpdateWithUserAssignedAndSystemAssignedOptionalParams,
} from "./index.js";
import {
  ManagedIdentityTrackedResource,
  managedIdentityTrackedResourceSerializer,
  managedIdentityTrackedResourceDeserializer,
} from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  managedIdentityTrackedResourceName: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.CommonTypes.ManagedIdentity/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      managedIdentityTrackedResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedIdentityTrackedResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return managedIdentityTrackedResourceDeserializer(result.body);
}

/** Get a ManagedIdentityTrackedResource */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  managedIdentityTrackedResourceName: string,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<ManagedIdentityTrackedResource> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    managedIdentityTrackedResourceName,
    options,
  );
  return _getDeserialize(result);
}

export function _createWithSystemAssignedSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  managedIdentityTrackedResourceName: string,
  resource: ManagedIdentityTrackedResource,
  options: CreateWithSystemAssignedOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.CommonTypes.ManagedIdentity/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      managedIdentityTrackedResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: managedIdentityTrackedResourceSerializer(resource),
    });
}

export async function _createWithSystemAssignedDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedIdentityTrackedResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return managedIdentityTrackedResourceDeserializer(result.body);
}

/** Create a ManagedIdentityTrackedResource */
export async function createWithSystemAssigned(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  managedIdentityTrackedResourceName: string,
  resource: ManagedIdentityTrackedResource,
  options: CreateWithSystemAssignedOptionalParams = { requestOptions: {} },
): Promise<ManagedIdentityTrackedResource> {
  const result = await _createWithSystemAssignedSend(
    context,
    subscriptionId,
    resourceGroupName,
    managedIdentityTrackedResourceName,
    resource,
    options,
  );
  return _createWithSystemAssignedDeserialize(result);
}

export function _updateWithUserAssignedAndSystemAssignedSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  managedIdentityTrackedResourceName: string,
  properties: ManagedIdentityTrackedResource,
  options: UpdateWithUserAssignedAndSystemAssignedOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.CommonTypes.ManagedIdentity/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      managedIdentityTrackedResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: managedIdentityTrackedResourceSerializer(properties),
    });
}

export async function _updateWithUserAssignedAndSystemAssignedDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedIdentityTrackedResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return managedIdentityTrackedResourceDeserializer(result.body);
}

/** Update a ManagedIdentityTrackedResource */
export async function updateWithUserAssignedAndSystemAssigned(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  managedIdentityTrackedResourceName: string,
  properties: ManagedIdentityTrackedResource,
  options: UpdateWithUserAssignedAndSystemAssignedOptionalParams = {
    requestOptions: {},
  },
): Promise<ManagedIdentityTrackedResource> {
  const result = await _updateWithUserAssignedAndSystemAssignedSend(
    context,
    subscriptionId,
    resourceGroupName,
    managedIdentityTrackedResourceName,
    properties,
    options,
  );
  return _updateWithUserAssignedAndSystemAssignedDeserialize(result);
}
