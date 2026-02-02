// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  TagsObject,
  tagsObjectSerializer,
  NetworkFunctionDefinitionGroup,
  networkFunctionDefinitionGroupSerializer,
  networkFunctionDefinitionGroupDeserializer,
  _NetworkFunctionDefinitionGroupListResult,
  _networkFunctionDefinitionGroupListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  NetworkFunctionDefinitionGroupsListByPublisherOptionalParams,
  NetworkFunctionDefinitionGroupsDeleteOptionalParams,
  NetworkFunctionDefinitionGroupsUpdateOptionalParams,
  NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams,
  NetworkFunctionDefinitionGroupsGetOptionalParams,
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
  options: NetworkFunctionDefinitionGroupsListByPublisherOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups{?api%2Dversion}",
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
): Promise<_NetworkFunctionDefinitionGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _networkFunctionDefinitionGroupListResultDeserializer(result.body);
}

/** Gets information of the network function definition groups under a publisher. */
export function listByPublisher(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  options: NetworkFunctionDefinitionGroupsListByPublisherOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NetworkFunctionDefinitionGroup> {
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
  networkFunctionDefinitionGroupName: string,
  options: NetworkFunctionDefinitionGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkFunctionDefinitionGroupName: networkFunctionDefinitionGroupName,
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

/** Deletes a specified network function definition group. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  options: NetworkFunctionDefinitionGroupsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
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
  networkFunctionDefinitionGroupName: string,
  parameters: TagsObject,
  options: NetworkFunctionDefinitionGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkFunctionDefinitionGroupName: networkFunctionDefinitionGroupName,
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
): Promise<NetworkFunctionDefinitionGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkFunctionDefinitionGroupDeserializer(result.body);
}

/** Updates a network function definition group resource. */
export async function update(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  parameters: TagsObject,
  options: NetworkFunctionDefinitionGroupsUpdateOptionalParams = { requestOptions: {} },
): Promise<NetworkFunctionDefinitionGroup> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    publisherName,
    networkFunctionDefinitionGroupName,
    parameters,
    options,
  );
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  parameters: NetworkFunctionDefinitionGroup,
  options: NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkFunctionDefinitionGroupName: networkFunctionDefinitionGroupName,
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
      body: networkFunctionDefinitionGroupSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkFunctionDefinitionGroup> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkFunctionDefinitionGroupDeserializer(result.body);
}

/** Creates or updates a network function definition group. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  parameters: NetworkFunctionDefinitionGroup,
  options: NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<NetworkFunctionDefinitionGroup>, NetworkFunctionDefinitionGroup> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        parameters,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<NetworkFunctionDefinitionGroup>, NetworkFunctionDefinitionGroup>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  options: NetworkFunctionDefinitionGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkFunctionDefinitionGroupName: networkFunctionDefinitionGroupName,
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
): Promise<NetworkFunctionDefinitionGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkFunctionDefinitionGroupDeserializer(result.body);
}

/** Gets information about the specified networkFunctionDefinition group. */
export async function get(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  options: NetworkFunctionDefinitionGroupsGetOptionalParams = { requestOptions: {} },
): Promise<NetworkFunctionDefinitionGroup> {
  const result = await _getSend(
    context,
    resourceGroupName,
    publisherName,
    networkFunctionDefinitionGroupName,
    options,
  );
  return _getDeserialize(result);
}
