// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ResourcesContext as Client,
  TopLevelTrackedResourcesActionSyncOptionalParams,
  TopLevelTrackedResourcesCreateOrReplaceOptionalParams,
  TopLevelTrackedResourcesDeleteOptionalParams,
  TopLevelTrackedResourcesGetOptionalParams,
  TopLevelTrackedResourcesListByResourceGroupOptionalParams,
  TopLevelTrackedResourcesListBySubscriptionOptionalParams,
  TopLevelTrackedResourcesUpdateOptionalParams,
} from "../index.js";
import {
  TopLevelTrackedResource,
  topLevelTrackedResourceSerializer,
  topLevelTrackedResourceDeserializer,
  _TopLevelTrackedResourceListResult,
  _topLevelTrackedResourceListResultDeserializer,
  NotificationDetails,
  notificationDetailsSerializer,
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

export function _topLevelTrackedResourcesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  options: TopLevelTrackedResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<TopLevelTrackedResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return topLevelTrackedResourceDeserializer(result.body);
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
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: topLevelTrackedResourceSerializer(resource),
    });
}

export async function _topLevelTrackedResourcesCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<TopLevelTrackedResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return topLevelTrackedResourceDeserializer(result.body);
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
    ["200", "201"],
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
      resourceLocationConfig: "azure-async-operation",
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
  properties: TopLevelTrackedResource,
  options: TopLevelTrackedResourcesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: topLevelTrackedResourceSerializer(properties),
    });
}

export async function _topLevelTrackedResourcesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<TopLevelTrackedResource> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return topLevelTrackedResourceDeserializer(result.body);
}

/** Update a TopLevelTrackedResource */
export function topLevelTrackedResourcesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  properties: TopLevelTrackedResource,
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
    ["200", "202"],
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
      resourceLocationConfig: "location",
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
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
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
    ["202", "204", "200"],
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
      resourceLocationConfig: "location",
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
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _topLevelTrackedResourcesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_TopLevelTrackedResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _topLevelTrackedResourceListResultDeserializer(result.body);
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
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _topLevelTrackedResourcesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: TopLevelTrackedResourcesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _topLevelTrackedResourcesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_TopLevelTrackedResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _topLevelTrackedResourceListResultDeserializer(result.body);
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
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _topLevelTrackedResourcesActionSyncSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  body: NotificationDetails,
  options: TopLevelTrackedResourcesActionSyncOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/actionSync",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: notificationDetailsSerializer(body),
    });
}

export async function _topLevelTrackedResourcesActionSyncDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** A synchronous resource action that returns no content. */
export async function topLevelTrackedResourcesActionSync(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  topLevelTrackedResourceName: string,
  body: NotificationDetails,
  options: TopLevelTrackedResourcesActionSyncOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _topLevelTrackedResourcesActionSyncSend(
    context,
    subscriptionId,
    resourceGroupName,
    topLevelTrackedResourceName,
    body,
    options,
  );
  return _topLevelTrackedResourcesActionSyncDeserialize(result);
}
