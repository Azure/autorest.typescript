// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ResourcesContext as Client,
  SingletonTrackedResourcesCreateOrUpdateOptionalParams,
  SingletonTrackedResourcesGetByResourceGroupOptionalParams,
  SingletonTrackedResourcesListByResourceGroupOptionalParams,
  SingletonTrackedResourcesUpdateOptionalParams,
} from "../index.js";
import {
  SingletonTrackedResource,
  singletonTrackedResourceSerializer,
  singletonTrackedResourceDeserializer,
  _SingletonTrackedResourceListResult,
  _singletonTrackedResourceListResultDeserializer,
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

export function _singletonTrackedResourcesGetByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SingletonTrackedResourcesGetByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _singletonTrackedResourcesGetByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<SingletonTrackedResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return singletonTrackedResourceDeserializer(result.body);
}

/** Get a SingletonTrackedResource */
export async function singletonTrackedResourcesGetByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SingletonTrackedResourcesGetByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): Promise<SingletonTrackedResource> {
  const result = await _singletonTrackedResourcesGetByResourceGroupSend(
    context,
    subscriptionId,
    resourceGroupName,
    options,
  );
  return _singletonTrackedResourcesGetByResourceGroupDeserialize(result);
}

export function _singletonTrackedResourcesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  resource: SingletonTrackedResource,
  options: SingletonTrackedResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default",
      subscriptionId,
      resourceGroupName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: singletonTrackedResourceSerializer(resource),
    });
}

export async function _singletonTrackedResourcesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SingletonTrackedResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return singletonTrackedResourceDeserializer(result.body);
}

/** Create a SingletonTrackedResource */
export function singletonTrackedResourcesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  resource: SingletonTrackedResource,
  options: SingletonTrackedResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<SingletonTrackedResource>,
  SingletonTrackedResource
> {
  return getLongRunningPoller(
    context,
    _singletonTrackedResourcesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _singletonTrackedResourcesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<SingletonTrackedResource>,
    SingletonTrackedResource
  >;
}

export function _singletonTrackedResourcesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  properties: SingletonTrackedResource,
  options: SingletonTrackedResourcesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default",
      subscriptionId,
      resourceGroupName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: singletonTrackedResourceSerializer(properties),
    });
}

export async function _singletonTrackedResourcesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SingletonTrackedResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return singletonTrackedResourceDeserializer(result.body);
}

/** Update a SingletonTrackedResource */
export async function singletonTrackedResourcesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  properties: SingletonTrackedResource,
  options: SingletonTrackedResourcesUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<SingletonTrackedResource> {
  const result = await _singletonTrackedResourcesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    properties,
    options,
  );
  return _singletonTrackedResourcesUpdateDeserialize(result);
}

export function _singletonTrackedResourcesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SingletonTrackedResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _singletonTrackedResourcesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SingletonTrackedResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _singletonTrackedResourceListResultDeserializer(result.body);
}

/** List SingletonTrackedResource resources by resource group */
export function singletonTrackedResourcesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SingletonTrackedResourcesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SingletonTrackedResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _singletonTrackedResourcesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _singletonTrackedResourcesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
