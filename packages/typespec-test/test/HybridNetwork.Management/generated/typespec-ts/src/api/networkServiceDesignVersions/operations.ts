// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  TagsObject,
  tagsObjectSerializer,
  NetworkServiceDesignVersion,
  networkServiceDesignVersionSerializer,
  networkServiceDesignVersionDeserializer,
  _NetworkServiceDesignVersionListResult,
  _networkServiceDesignVersionListResultDeserializer,
  NetworkServiceDesignVersionUpdateState,
  networkServiceDesignVersionUpdateStateSerializer,
  networkServiceDesignVersionUpdateStateDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  NetworkServiceDesignVersionsUpdateStateOptionalParams,
  NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams,
  NetworkServiceDesignVersionsDeleteOptionalParams,
  NetworkServiceDesignVersionsUpdateOptionalParams,
  NetworkServiceDesignVersionsCreateOrUpdateOptionalParams,
  NetworkServiceDesignVersionsGetOptionalParams,
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
  networkServiceDesignGroupName: string,
  networkServiceDesignVersionName: string,
  parameters: NetworkServiceDesignVersionUpdateState,
  options: NetworkServiceDesignVersionsUpdateStateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}/updateState{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkServiceDesignGroupName: networkServiceDesignGroupName,
      networkServiceDesignVersionName: networkServiceDesignVersionName,
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
      body: networkServiceDesignVersionUpdateStateSerializer(parameters),
    });
}

export async function _updateStateDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkServiceDesignVersionUpdateState> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return networkServiceDesignVersionUpdateStateDeserializer(result.body);
}

/** Update network service design version state. */
export function updateState(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  networkServiceDesignVersionName: string,
  parameters: NetworkServiceDesignVersionUpdateState,
  options: NetworkServiceDesignVersionsUpdateStateOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<NetworkServiceDesignVersionUpdateState>,
  NetworkServiceDesignVersionUpdateState
> {
  return getLongRunningPoller(context, _updateStateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateStateSend(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<
    OperationState<NetworkServiceDesignVersionUpdateState>,
    NetworkServiceDesignVersionUpdateState
  >;
}

export function _listByNetworkServiceDesignGroupSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  options: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions{?api%2Dversion}",
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

export async function _listByNetworkServiceDesignGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_NetworkServiceDesignVersionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return _networkServiceDesignVersionListResultDeserializer(result.body);
}

/** Gets information about a list of network service design versions under a network service design group. */
export function listByNetworkServiceDesignGroup(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  options: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NetworkServiceDesignVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByNetworkServiceDesignGroupSend(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        options,
      ),
    _listByNetworkServiceDesignGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2025-03-30" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  networkServiceDesignVersionName: string,
  options: NetworkServiceDesignVersionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkServiceDesignGroupName: networkServiceDesignGroupName,
      networkServiceDesignVersionName: networkServiceDesignVersionName,
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

/** Deletes the specified network service design version. */
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
  networkServiceDesignVersionName: string,
  options: NetworkServiceDesignVersionsDeleteOptionalParams = { requestOptions: {} },
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
        networkServiceDesignVersionName,
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
  networkServiceDesignVersionName: string,
  parameters: TagsObject,
  options: NetworkServiceDesignVersionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkServiceDesignGroupName: networkServiceDesignGroupName,
      networkServiceDesignVersionName: networkServiceDesignVersionName,
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
): Promise<NetworkServiceDesignVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return networkServiceDesignVersionDeserializer(result.body);
}

/** Updates a network service design version resource. */
export async function update(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  networkServiceDesignVersionName: string,
  parameters: TagsObject,
  options: NetworkServiceDesignVersionsUpdateOptionalParams = { requestOptions: {} },
): Promise<NetworkServiceDesignVersion> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    publisherName,
    networkServiceDesignGroupName,
    networkServiceDesignVersionName,
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
  networkServiceDesignVersionName: string,
  parameters: NetworkServiceDesignVersion,
  options: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkServiceDesignGroupName: networkServiceDesignGroupName,
      networkServiceDesignVersionName: networkServiceDesignVersionName,
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
      body: networkServiceDesignVersionSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkServiceDesignVersion> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return networkServiceDesignVersionDeserializer(result.body);
}

/** Creates or updates a network service design version. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  networkServiceDesignVersionName: string,
  parameters: NetworkServiceDesignVersion,
  options: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<NetworkServiceDesignVersion>, NetworkServiceDesignVersion> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<NetworkServiceDesignVersion>, NetworkServiceDesignVersion>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  networkServiceDesignVersionName: string,
  options: NetworkServiceDesignVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      networkServiceDesignGroupName: networkServiceDesignGroupName,
      networkServiceDesignVersionName: networkServiceDesignVersionName,
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
): Promise<NetworkServiceDesignVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return networkServiceDesignVersionDeserializer(result.body);
}

/** Gets information about a network service design version. */
export async function get(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  networkServiceDesignGroupName: string,
  networkServiceDesignVersionName: string,
  options: NetworkServiceDesignVersionsGetOptionalParams = { requestOptions: {} },
): Promise<NetworkServiceDesignVersion> {
  const result = await _getSend(
    context,
    resourceGroupName,
    publisherName,
    networkServiceDesignGroupName,
    networkServiceDesignVersionName,
    options,
  );
  return _getDeserialize(result);
}
