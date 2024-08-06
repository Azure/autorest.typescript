// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  nestedProxyResourcePropertiesSerializer,
  NestedProxyResource,
  _NestedProxyResourceListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { ResourcesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  NestedProxyResourcesGetOptionalParams,
  NestedProxyResourcesCreateOrReplaceOptionalParams,
  NestedProxyResourcesUpdateOptionalParams,
  NestedProxyResourcesDeleteOptionalParams,
  NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams,
} from "../../models/options.js";

export function _nestedProxyResourcesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  options: NestedProxyResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
      nextedProxyResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nestedProxyResourcesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<NestedProxyResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          description: result.body.properties?.["description"],
        },
  };
}

/** Get a NestedProxyResource */
export async function nestedProxyResourcesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  options: NestedProxyResourcesGetOptionalParams = { requestOptions: {} },
): Promise<NestedProxyResource> {
  const result = await _nestedProxyResourcesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    topLevelTrackedResourceName,
    nextedProxyResourceName,
    options,
  );
  return _nestedProxyResourcesGetDeserialize(result);
}

export function _nestedProxyResourcesCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  resource: NestedProxyResource,
  options: NestedProxyResourcesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
      nextedProxyResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : nestedProxyResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _nestedProxyResourcesCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<NestedProxyResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          description: result.body.properties?.["description"],
        },
  };
}

/** Create a NestedProxyResource */
export function nestedProxyResourcesCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  resource: NestedProxyResource,
  options: NestedProxyResourcesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<NestedProxyResource>, NestedProxyResource> {
  return getLongRunningPoller(
    context,
    _nestedProxyResourcesCreateOrReplaceDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _nestedProxyResourcesCreateOrReplaceSend(
          context,
          subscriptionId,
          resourceGroupName,
          topLevelTrackedResourceName,
          nextedProxyResourceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
}

export function _nestedProxyResourcesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  properties: NestedProxyResource,
  options: NestedProxyResourcesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
      nextedProxyResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : nestedProxyResourcePropertiesSerializer(properties.properties),
      },
    });
}

export async function _nestedProxyResourcesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NestedProxyResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          description: result.body.properties?.["description"],
        },
  };
}

/** Update a NestedProxyResource */
export function nestedProxyResourcesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  properties: NestedProxyResource,
  options: NestedProxyResourcesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<NestedProxyResource>, NestedProxyResource> {
  return getLongRunningPoller(
    context,
    _nestedProxyResourcesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _nestedProxyResourcesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          topLevelTrackedResourceName,
          nextedProxyResourceName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<NestedProxyResource>, NestedProxyResource>;
}

export function _nestedProxyResourcesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  options: NestedProxyResourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
      nextedProxyResourceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _nestedProxyResourcesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a NestedProxyResource */
export function nestedProxyResourcesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  nextedProxyResourceName: string,
  options: NestedProxyResourcesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _nestedProxyResourcesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _nestedProxyResourcesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          topLevelTrackedResourceName,
          nextedProxyResourceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _nestedProxyResourcesListByTopLevelTrackedResourceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  options: NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nestedProxyResourcesListByTopLevelTrackedResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<_NestedProxyResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
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
    nextLink: result.body["nextLink"],
  };
}

/** List NestedProxyResource resources by TopLevelTrackedResource */
export function nestedProxyResourcesListByTopLevelTrackedResource(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  options: NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NestedProxyResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _nestedProxyResourcesListByTopLevelTrackedResourceSend(
        context,
        subscriptionId,
        resourceGroupName,
        topLevelTrackedResourceName,
        options,
      ),
    _nestedProxyResourcesListByTopLevelTrackedResourceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
