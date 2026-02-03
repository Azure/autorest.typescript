// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  TagsObject,
  tagsObjectSerializer,
  NetworkServiceDesignGroup,
  networkServiceDesignGroupSerializer,
  networkServiceDesignGroupDeserializer,
  _NetworkServiceDesignGroupListResult,
  _networkServiceDesignGroupListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  NetworkServiceDesignGroupsListByPublisherOptionalParams,
  NetworkServiceDesignGroupsDeleteOptionalParams,
  NetworkServiceDesignGroupsUpdateOptionalParams,
  NetworkServiceDesignGroupsCreateOrUpdateOptionalParams,
  NetworkServiceDesignGroupsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listByPublisherSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  options: NetworkServiceDesignGroupsListByPublisherOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listByPublisherDeserialize(
  result: PathUncheckedResponse,
): Promise<_NetworkServiceDesignGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _networkServiceDesignGroupListResultDeserializer(result.body);
}

/** Gets information of the network service design groups under a publisher. */
export function listByPublisher(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  options: NetworkServiceDesignGroupsListByPublisherOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NetworkServiceDesignGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _listByPublisherSend(context, resourceGroupName, publisherName, options),
    _listByPublisherDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2025-03-30" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  options: NetworkServiceDesignGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkServiceDesignGroupName: networkServiceDesignGroupName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a specified network service design group. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  options: NetworkServiceDesignGroupsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  parameters: TagsObject,
  options: NetworkServiceDesignGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkServiceDesignGroupName: networkServiceDesignGroupName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: tagsObjectSerializer(parameters),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkServiceDesignGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkServiceDesignGroupDeserializer(result.body);
}

/** Updates a network service design groups resource. */
export async function update(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  parameters: TagsObject,
  options: NetworkServiceDesignGroupsUpdateOptionalParams = { requestOptions: {} },
): Promise<NetworkServiceDesignGroup> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    publisherName,
    networkServiceDesignGroupName,
    parameters,
    options,
  );
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  parameters: NetworkServiceDesignGroup,
  options: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkServiceDesignGroupName: networkServiceDesignGroupName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: networkServiceDesignGroupSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkServiceDesignGroup> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkServiceDesignGroupDeserializer(result.body);
}

/** Creates or updates a network service design group. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  parameters: NetworkServiceDesignGroup,
  options: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<NetworkServiceDesignGroup>, NetworkServiceDesignGroup> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        parameters,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<NetworkServiceDesignGroup>, NetworkServiceDesignGroup>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  options: NetworkServiceDesignGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkServiceDesignGroupName: networkServiceDesignGroupName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkServiceDesignGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkServiceDesignGroupDeserializer(result.body);
}

/** Gets information about the specified networkServiceDesign group. */
export async function get(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  options: NetworkServiceDesignGroupsGetOptionalParams = { requestOptions: {} },
): Promise<NetworkServiceDesignGroup> {
  const result = await _getSend(
    context,
    resourceGroupName,
    publisherName,
    networkServiceDesignGroupName,
    options,
  );
  return _getDeserialize(result);
}
