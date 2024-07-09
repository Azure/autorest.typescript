// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  topLevelTrackedResourcePropertiesSerializer,
  topLevelTrackedResourceUpdatePropertiesSerializer,
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
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

  const _result = result as unknown as TopLevelTrackedResourcesGet200Response;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.["createdByType"],
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          provisioningState: _result.body.properties?.["provisioningState"],
          description: _result.body.properties?.["description"],
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
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

  const _result =
    result as unknown as TopLevelTrackedResourcesCreateOrReplaceLogicalResponse;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.["createdByType"],
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          provisioningState: _result.body.properties?.["provisioningState"],
          description: _result.body.properties?.["description"],
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
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

  const _result =
    result as unknown as TopLevelTrackedResourcesUpdateLogicalResponse;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.["createdByType"],
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          provisioningState: _result.body.properties?.["provisioningState"],
          description: _result.body.properties?.["description"],
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
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
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
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

  const _result =
    result as unknown as TopLevelTrackedResourcesListByResourceGroup200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              provisioningState: p.properties?.["provisioningState"],
              description: p.properties?.["description"],
            },
      };
    }),
    nextLink: _result.body["nextLink"],
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
      "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
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

  const _result =
    result as unknown as TopLevelTrackedResourcesListBySubscription200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              provisioningState: p.properties?.["provisioningState"],
              description: p.properties?.["description"],
            },
      };
    }),
    nextLink: _result.body["nextLink"],
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
