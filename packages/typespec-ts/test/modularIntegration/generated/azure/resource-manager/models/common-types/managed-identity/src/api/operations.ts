// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  managedIdentityTrackedResourcePropertiesSerializer,
  managedServiceIdentitySerializer,
  ManagedIdentityTrackedResource,
} from "../models/models.js";
import {
  CreateWithSystemAssigned200Response,
  CreateWithSystemAssigned201Response,
  CreateWithSystemAssignedDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  isUnexpected,
  ManagedIdentityContext as Client,
  UpdateWithUserAssignedAndSystemAssigned200Response,
  UpdateWithUserAssignedAndSystemAssignedDefaultResponse,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  GetOptionalParams,
  CreateWithSystemAssignedOptionalParams,
  UpdateWithUserAssignedAndSystemAssignedOptionalParams,
} from "../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  managedIdentityTrackedResourceName: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod<Get200Response | GetDefaultResponse> {
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
  result: Get200Response | GetDefaultResponse,
): Promise<ManagedIdentityTrackedResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : { provisioningState: result.body.properties?.["provisioningState"] },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
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
): StreamableMethod<
  | CreateWithSystemAssigned200Response
  | CreateWithSystemAssigned201Response
  | CreateWithSystemAssignedDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.CommonTypes.ManagedIdentity/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      managedIdentityTrackedResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : managedIdentityTrackedResourcePropertiesSerializer(
              resource.properties,
            ),
        identity: !resource.identity
          ? resource.identity
          : managedServiceIdentitySerializer(resource.identity),
      },
    });
}

export async function _createWithSystemAssignedDeserialize(
  result:
    | CreateWithSystemAssigned200Response
    | CreateWithSystemAssigned201Response
    | CreateWithSystemAssignedDefaultResponse,
): Promise<ManagedIdentityTrackedResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : { provisioningState: result.body.properties?.["provisioningState"] },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
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
): StreamableMethod<
  | UpdateWithUserAssignedAndSystemAssigned200Response
  | UpdateWithUserAssignedAndSystemAssignedDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.CommonTypes.ManagedIdentity/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      managedIdentityTrackedResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        location: properties["location"],
        properties: !properties.properties
          ? properties.properties
          : managedIdentityTrackedResourcePropertiesSerializer(
              properties.properties,
            ),
        identity: !properties.identity
          ? properties.identity
          : managedServiceIdentitySerializer(properties.identity),
      },
    });
}

export async function _updateWithUserAssignedAndSystemAssignedDeserialize(
  result:
    | UpdateWithUserAssignedAndSystemAssigned200Response
    | UpdateWithUserAssignedAndSystemAssignedDefaultResponse,
): Promise<ManagedIdentityTrackedResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : { provisioningState: result.body.properties?.["provisioningState"] },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
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
