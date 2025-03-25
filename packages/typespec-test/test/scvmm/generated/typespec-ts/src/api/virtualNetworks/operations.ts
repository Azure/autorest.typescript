// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  VirtualNetwork,
  virtualNetworkSerializer,
  virtualNetworkDeserializer,
  VirtualNetworkTagsUpdate,
  virtualNetworkTagsUpdateSerializer,
  _VirtualNetworkListResult,
  _virtualNetworkListResultDeserializer,
} from "../../models/models.js";
import {
  VirtualNetworksListBySubscriptionOptionalParams,
  VirtualNetworksListByResourceGroupOptionalParams,
  VirtualNetworksDeleteOptionalParams,
  VirtualNetworksUpdateOptionalParams,
  VirtualNetworksCreateOrUpdateOptionalParams,
  VirtualNetworksGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _virtualNetworksListBySubscriptionSend(
  context: Client,
  options: VirtualNetworksListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualNetworks{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualNetworksListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualNetworkListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _virtualNetworkListResultDeserializer(result.body);
}

/** List of VirtualNetworks in a subscription. */
export function virtualNetworksListBySubscription(
  context: Client,
  options: VirtualNetworksListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetwork> {
  return buildPagedAsyncIterator(
    context,
    () => _virtualNetworksListBySubscriptionSend(context, options),
    _virtualNetworksListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualNetworksListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: VirtualNetworksListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualNetworksListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualNetworkListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _virtualNetworkListResultDeserializer(result.body);
}

/** List of VirtualNetworks in a resource group. */
export function virtualNetworksListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: VirtualNetworksListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetwork> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualNetworksListByResourceGroupSend(
        context,
        resourceGroupName,
        options,
      ),
    _virtualNetworksListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualNetworksDeleteSend(
  context: Client,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}{?api-version,force}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      virtualNetworkName: virtualNetworkName,
      "api-version": context.apiVersion,
      force: options?.force,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualNetworksDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deregisters the ScVmm virtual network from Azure. */
export function virtualNetworksDelete(
  context: Client,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualNetworksDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworksDeleteSend(
          context,
          resourceGroupName,
          virtualNetworkName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualNetworksUpdateSend(
  context: Client,
  resourceGroupName: string,
  virtualNetworkName: string,
  properties: VirtualNetworkTagsUpdate,
  options: VirtualNetworksUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      virtualNetworkName: virtualNetworkName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: virtualNetworkTagsUpdateSerializer(properties),
    });
}

export async function _virtualNetworksUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetwork> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualNetworkDeserializer(result.body);
}

/** Updates the VirtualNetworks resource. */
export function virtualNetworksUpdate(
  context: Client,
  resourceGroupName: string,
  virtualNetworkName: string,
  properties: VirtualNetworkTagsUpdate,
  options: VirtualNetworksUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualNetwork>, VirtualNetwork> {
  return getLongRunningPoller(
    context,
    _virtualNetworksUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworksUpdateSend(
          context,
          resourceGroupName,
          virtualNetworkName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
}

export function _virtualNetworksCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  virtualNetworkName: string,
  resource: VirtualNetwork,
  options: VirtualNetworksCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      virtualNetworkName: virtualNetworkName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: virtualNetworkSerializer(resource),
    });
}

export async function _virtualNetworksCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetwork> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualNetworkDeserializer(result.body);
}

/** Onboards the ScVmm virtual network as an Azure virtual network resource. */
export function virtualNetworksCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  virtualNetworkName: string,
  resource: VirtualNetwork,
  options: VirtualNetworksCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualNetwork>, VirtualNetwork> {
  return getLongRunningPoller(
    context,
    _virtualNetworksCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworksCreateOrUpdateSend(
          context,
          resourceGroupName,
          virtualNetworkName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
}

export function _virtualNetworksGetSend(
  context: Client,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      virtualNetworkName: virtualNetworkName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualNetworksGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetwork> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualNetworkDeserializer(result.body);
}

/** Implements VirtualNetwork GET method. */
export async function virtualNetworksGet(
  context: Client,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksGetOptionalParams = { requestOptions: {} },
): Promise<VirtualNetwork> {
  const result = await _virtualNetworksGetSend(
    context,
    resourceGroupName,
    virtualNetworkName,
    options,
  );
  return _virtualNetworksGetDeserialize(result);
}
