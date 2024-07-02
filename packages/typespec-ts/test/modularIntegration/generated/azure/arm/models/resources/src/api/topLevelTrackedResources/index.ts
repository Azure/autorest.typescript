// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  topLevelTrackedResourcePropertiesSerializer,
  topLevelTrackedResourceUpdatePropertiesSerializer,
  CreatedByType,
  TopLevelTrackedResource,
  TopLevelTrackedResourceUpdate,
  _TopLevelTrackedResourceListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ResourcesContext as Client,
  TopLevelTrackedResourcesCreateOrReplace200Response,
  TopLevelTrackedResourcesCreateOrReplace201Response,
  TopLevelTrackedResourcesCreateOrReplaceDefaultResponse,
  TopLevelTrackedResourcesCreateOrReplaceLogicalResponse,
  TopLevelTrackedResourcesDelete202Response,
  TopLevelTrackedResourcesDelete204Response,
  TopLevelTrackedResourcesDeleteDefaultResponse,
  TopLevelTrackedResourcesDeleteLogicalResponse,
  TopLevelTrackedResourcesGet200Response,
  TopLevelTrackedResourcesGetDefaultResponse,
  TopLevelTrackedResourcesListByResourceGroup200Response,
  TopLevelTrackedResourcesListByResourceGroupDefaultResponse,
  TopLevelTrackedResourcesListBySubscription200Response,
  TopLevelTrackedResourcesListBySubscriptionDefaultResponse,
  TopLevelTrackedResourcesUpdate200Response,
  TopLevelTrackedResourcesUpdate202Response,
  TopLevelTrackedResourcesUpdateDefaultResponse,
  TopLevelTrackedResourcesUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  TopLevelTrackedResourcesGetOptionalParams,
  TopLevelTrackedResourcesCreateOrReplaceOptionalParams,
  TopLevelTrackedResourcesUpdateOptionalParams,
  TopLevelTrackedResourcesDeleteOptionalParams,
  TopLevelTrackedResourcesListByResourceGroupOptionalParams,
  TopLevelTrackedResourcesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _topLevelTrackedResourcesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  options: TopLevelTrackedResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | TopLevelTrackedResourcesGet200Response
  | TopLevelTrackedResourcesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _topLevelTrackedResourcesGetDeserialize(
  result:
    | TopLevelTrackedResourcesGet200Response
    | TopLevelTrackedResourcesGetDefaultResponse,
): Promise<TopLevelTrackedResource> {
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
          createdByType: result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          description: result.body.properties?.["description"],
        },
  };
}

/** Get a TopLevelTrackedResource */
export async function topLevelTrackedResourcesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  options: TopLevelTrackedResourcesGetOptionalParams = { requestOptions: {} },
): Promise<TopLevelTrackedResource> {
  const result = await _topLevelTrackedResourcesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    topLevelTrackedResourceName,
    options,
  );
  return _topLevelTrackedResourcesGetDeserialize(result);
}

export function _topLevelTrackedResourcesCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  resource: TopLevelTrackedResource,
  options: TopLevelTrackedResourcesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | TopLevelTrackedResourcesCreateOrReplace200Response
  | TopLevelTrackedResourcesCreateOrReplace201Response
  | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse
  | TopLevelTrackedResourcesCreateOrReplaceLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
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
          : topLevelTrackedResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _topLevelTrackedResourcesCreateOrReplaceDeserialize(
  result:
    | TopLevelTrackedResourcesCreateOrReplace200Response
    | TopLevelTrackedResourcesCreateOrReplace201Response
    | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse
    | TopLevelTrackedResourcesCreateOrReplaceLogicalResponse,
): Promise<TopLevelTrackedResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as TopLevelTrackedResourcesCreateOrReplaceLogicalResponse;
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
          createdByType: result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          description: result.body.properties?.["description"],
        },
  };
}

/** Create a TopLevelTrackedResource */
export function topLevelTrackedResourcesCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  resource: TopLevelTrackedResource,
  options: TopLevelTrackedResourcesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<TopLevelTrackedResource>,
  TopLevelTrackedResource
> {
  return getLongRunningPoller(
    context,
    _topLevelTrackedResourcesCreateOrReplaceDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _topLevelTrackedResourcesCreateOrReplaceSend(
          context,
          subscriptionId,
          resourceGroupName,
          topLevelTrackedResourceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<TopLevelTrackedResource>,
    TopLevelTrackedResource
  >;
}

export function _topLevelTrackedResourcesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  properties: TopLevelTrackedResourceUpdate,
  options: TopLevelTrackedResourcesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | TopLevelTrackedResourcesUpdate200Response
  | TopLevelTrackedResourcesUpdate202Response
  | TopLevelTrackedResourcesUpdateDefaultResponse
  | TopLevelTrackedResourcesUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : topLevelTrackedResourceUpdatePropertiesSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _topLevelTrackedResourcesUpdateDeserialize(
  result:
    | TopLevelTrackedResourcesUpdate200Response
    | TopLevelTrackedResourcesUpdate202Response
    | TopLevelTrackedResourcesUpdateDefaultResponse
    | TopLevelTrackedResourcesUpdateLogicalResponse,
): Promise<TopLevelTrackedResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as TopLevelTrackedResourcesUpdateLogicalResponse;
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
          createdByType: result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.[
            "provisioningState"
          ] as any,
          description: result.body.properties?.["description"],
        },
  };
}

/** Update a TopLevelTrackedResource */
export function topLevelTrackedResourcesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  properties: TopLevelTrackedResourceUpdate,
  options: TopLevelTrackedResourcesUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<TopLevelTrackedResource>,
  TopLevelTrackedResource
> {
  return getLongRunningPoller(
    context,
    _topLevelTrackedResourcesUpdateDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _topLevelTrackedResourcesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          topLevelTrackedResourceName,
          properties,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<TopLevelTrackedResource>,
    TopLevelTrackedResource
  >;
}

export function _topLevelTrackedResourcesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  options: TopLevelTrackedResourcesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | TopLevelTrackedResourcesDelete202Response
  | TopLevelTrackedResourcesDelete204Response
  | TopLevelTrackedResourcesDeleteDefaultResponse
  | TopLevelTrackedResourcesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _topLevelTrackedResourcesDeleteDeserialize(
  result:
    | TopLevelTrackedResourcesDelete202Response
    | TopLevelTrackedResourcesDelete204Response
    | TopLevelTrackedResourcesDeleteDefaultResponse
    | TopLevelTrackedResourcesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as TopLevelTrackedResourcesDeleteLogicalResponse;
  return;
}

/** Delete a TopLevelTrackedResource */
export function topLevelTrackedResourcesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  options: TopLevelTrackedResourcesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _topLevelTrackedResourcesDeleteDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _topLevelTrackedResourcesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          topLevelTrackedResourceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _topLevelTrackedResourcesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: TopLevelTrackedResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | TopLevelTrackedResourcesListByResourceGroup200Response
  | TopLevelTrackedResourcesListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _topLevelTrackedResourcesListByResourceGroupDeserialize(
  result:
    | TopLevelTrackedResourcesListByResourceGroup200Response
    | TopLevelTrackedResourcesListByResourceGroupDefaultResponse,
): Promise<_TopLevelTrackedResourceListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      tags: p["tags"],
      location: p["location"],
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"] as CreatedByType,
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.[
              "lastModifiedByType"
            ] as CreatedByType,
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            provisioningState: p.properties?.["provisioningState"] as any,
            description: p.properties?.["description"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List TopLevelTrackedResource resources by resource group */
export function topLevelTrackedResourcesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: TopLevelTrackedResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<TopLevelTrackedResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _topLevelTrackedResourcesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _topLevelTrackedResourcesListByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _topLevelTrackedResourcesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: TopLevelTrackedResourcesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | TopLevelTrackedResourcesListBySubscription200Response
  | TopLevelTrackedResourcesListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _topLevelTrackedResourcesListBySubscriptionDeserialize(
  result:
    | TopLevelTrackedResourcesListBySubscription200Response
    | TopLevelTrackedResourcesListBySubscriptionDefaultResponse,
): Promise<_TopLevelTrackedResourceListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      tags: p["tags"],
      location: p["location"],
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"] as CreatedByType,
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.[
              "lastModifiedByType"
            ] as CreatedByType,
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            provisioningState: p.properties?.["provisioningState"] as any,
            description: p.properties?.["description"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List TopLevelTrackedResource resources by subscription ID */
export function topLevelTrackedResourcesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: TopLevelTrackedResourcesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<TopLevelTrackedResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _topLevelTrackedResourcesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _topLevelTrackedResourcesListBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
