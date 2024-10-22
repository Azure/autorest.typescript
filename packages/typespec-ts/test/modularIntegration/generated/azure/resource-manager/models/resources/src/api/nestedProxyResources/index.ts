// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ResourcesContext as Client,
  NestedProxyResourcesCreateOrReplaceOptionalParams,
  NestedProxyResourcesDeleteOptionalParams,
  NestedProxyResourcesGetOptionalParams,
  NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams,
  NestedProxyResourcesUpdateOptionalParams,
} from "../index.js";
import {
  NestedProxyResource,
  nestedProxyResourceSerializer,
  nestedProxyResourceDeserializer,
  _NestedProxyResourceListResult,
  _nestedProxyResourceListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

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

  return nestedProxyResourceDeserializer(result.body);
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
      body: nestedProxyResourceSerializer(resource),
    });
}

export async function _nestedProxyResourcesCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<NestedProxyResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return nestedProxyResourceDeserializer(result.body);
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
      resourceLocationConfig: "azure-async-operation",
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
      body: nestedProxyResourceSerializer(properties),
    });
}

export async function _nestedProxyResourcesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NestedProxyResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return nestedProxyResourceDeserializer(result.body);
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
      resourceLocationConfig: "location",
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
      resourceLocationConfig: "location",
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

  return _nestedProxyResourceListResultDeserializer(result.body);
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
