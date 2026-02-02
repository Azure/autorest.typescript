// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  TagsObject,
  tagsObjectSerializer,
  NetworkFunctionDefinitionVersion,
  networkFunctionDefinitionVersionSerializer,
  networkFunctionDefinitionVersionDeserializer,
  _NetworkFunctionDefinitionVersionListResult,
  _networkFunctionDefinitionVersionListResultDeserializer,
  NetworkFunctionDefinitionVersionUpdateState,
  networkFunctionDefinitionVersionUpdateStateSerializer,
  networkFunctionDefinitionVersionUpdateStateDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  NetworkFunctionDefinitionVersionsUpdateStateOptionalParams,
  NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOptionalParams,
  NetworkFunctionDefinitionVersionsDeleteOptionalParams,
  NetworkFunctionDefinitionVersionsUpdateOptionalParams,
  NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams,
  NetworkFunctionDefinitionVersionsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _updateStateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  networkFunctionDefinitionVersionName: string,
  parameters: NetworkFunctionDefinitionVersionUpdateState,
  options: NetworkFunctionDefinitionVersionsUpdateStateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}/updateState{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkFunctionDefinitionGroupName: networkFunctionDefinitionGroupName,
      networkFunctionDefinitionVersionName: networkFunctionDefinitionVersionName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: networkFunctionDefinitionVersionUpdateStateSerializer(parameters),
    });
}

export async function _updateStateDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkFunctionDefinitionVersionUpdateState> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkFunctionDefinitionVersionUpdateStateDeserializer(result.body);
}

/** Update network function definition version state. */
export function updateState(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  networkFunctionDefinitionVersionName: string,
  parameters: NetworkFunctionDefinitionVersionUpdateState,
  options: NetworkFunctionDefinitionVersionsUpdateStateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<NetworkFunctionDefinitionVersionUpdateState>,
  NetworkFunctionDefinitionVersionUpdateState
> {
  return getLongRunningPoller(context, _updateStateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateStateSend(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<
    OperationState<NetworkFunctionDefinitionVersionUpdateState>,
    NetworkFunctionDefinitionVersionUpdateState
  >;
}

export function _listByNetworkFunctionDefinitionGroupSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  options: NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions{?api%2Dversion}",
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

export async function _listByNetworkFunctionDefinitionGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_NetworkFunctionDefinitionVersionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _networkFunctionDefinitionVersionListResultDeserializer(result.body);
}

/** Gets information about a list of network function definition versions under a network function definition group. */
export function listByNetworkFunctionDefinitionGroup(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  options: NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NetworkFunctionDefinitionVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByNetworkFunctionDefinitionGroupSend(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        options,
      ),
    _listByNetworkFunctionDefinitionGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2025-03-30" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  networkFunctionDefinitionVersionName: string,
  options: NetworkFunctionDefinitionVersionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkFunctionDefinitionGroupName: networkFunctionDefinitionGroupName,
      networkFunctionDefinitionVersionName: networkFunctionDefinitionVersionName,
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

/** Deletes the specified network function definition version. */
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
  networkFunctionDefinitionVersionName: string,
  options: NetworkFunctionDefinitionVersionsDeleteOptionalParams = { requestOptions: {} },
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
        networkFunctionDefinitionVersionName,
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
  networkFunctionDefinitionVersionName: string,
  parameters: TagsObject,
  options: NetworkFunctionDefinitionVersionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkFunctionDefinitionGroupName: networkFunctionDefinitionGroupName,
      networkFunctionDefinitionVersionName: networkFunctionDefinitionVersionName,
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
): Promise<NetworkFunctionDefinitionVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkFunctionDefinitionVersionDeserializer(result.body);
}

/** Updates a network function definition version resource. */
export async function update(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  networkFunctionDefinitionVersionName: string,
  parameters: TagsObject,
  options: NetworkFunctionDefinitionVersionsUpdateOptionalParams = { requestOptions: {} },
): Promise<NetworkFunctionDefinitionVersion> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    publisherName,
    networkFunctionDefinitionGroupName,
    networkFunctionDefinitionVersionName,
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
  networkFunctionDefinitionVersionName: string,
  parameters: NetworkFunctionDefinitionVersion,
  options: NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkFunctionDefinitionGroupName: networkFunctionDefinitionGroupName,
      networkFunctionDefinitionVersionName: networkFunctionDefinitionVersionName,
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
      body: networkFunctionDefinitionVersionSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkFunctionDefinitionVersion> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkFunctionDefinitionVersionDeserializer(result.body);
}

/** Creates or updates a network function definition version. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  networkFunctionDefinitionVersionName: string,
  parameters: NetworkFunctionDefinitionVersion,
  options: NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<NetworkFunctionDefinitionVersion>, NetworkFunctionDefinitionVersion> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        parameters,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<
    OperationState<NetworkFunctionDefinitionVersion>,
    NetworkFunctionDefinitionVersion
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  networkFunctionDefinitionVersionName: string,
  options: NetworkFunctionDefinitionVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkFunctionDefinitionGroupName: networkFunctionDefinitionGroupName,
      networkFunctionDefinitionVersionName: networkFunctionDefinitionVersionName,
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
): Promise<NetworkFunctionDefinitionVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return networkFunctionDefinitionVersionDeserializer(result.body);
}

/** Gets information about a network function definition version. */
export async function get(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkFunctionDefinitionGroupName: string,
  networkFunctionDefinitionVersionName: string,
  options: NetworkFunctionDefinitionVersionsGetOptionalParams = { requestOptions: {} },
): Promise<NetworkFunctionDefinitionVersion> {
  const result = await _getSend(
    context,
    resourceGroupName,
    publisherName,
    networkFunctionDefinitionGroupName,
    networkFunctionDefinitionVersionName,
    options,
  );
  return _getDeserialize(result);
}
