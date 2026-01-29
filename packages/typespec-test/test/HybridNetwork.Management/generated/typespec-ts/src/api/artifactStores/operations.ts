// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  TagsObject,
  tagsObjectSerializer,
  ArtifactStore,
  artifactStoreSerializer,
  artifactStoreDeserializer,
  _ArtifactStoreListResult,
  _artifactStoreListResultDeserializer,
  ArtifactStoreNetworkFabricControllerEndPoints,
  artifactStoreNetworkFabricControllerEndPointsSerializer,
  _ArtifactStoreNetworkFabricControllerEndPointsList,
  _artifactStoreNetworkFabricControllerEndPointsListDeserializer,
  ArtifactStorePrivateEndPointsFormat,
  artifactStorePrivateEndPointsFormatSerializer,
  _ArtifactStorePrivateEndPointsListResult,
  _artifactStorePrivateEndPointsListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ArtifactStoresListPrivateEndPointsOptionalParams,
  ArtifactStoresRemovePrivateEndPointsOptionalParams,
  ArtifactStoresApprovePrivateEndPointsOptionalParams,
  ArtifactStoresListNetworkFabricControllerPrivateEndPointsOptionalParams,
  ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams,
  ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams,
  ArtifactStoresListByPublisherOptionalParams,
  ArtifactStoresDeleteOptionalParams,
  ArtifactStoresUpdateOptionalParams,
  ArtifactStoresCreateOrUpdateOptionalParams,
  ArtifactStoresGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listPrivateEndPointsSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactStoresListPrivateEndPointsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/listPrivateEndPoints{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listPrivateEndPointsDeserialize(
  result: PathUncheckedResponse,
): Promise<_ArtifactStorePrivateEndPointsListResult> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _artifactStorePrivateEndPointsListResultDeserializer(result.body);
}

/** List manual private endpoints on artifact stores */
export function listPrivateEndPoints(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactStoresListPrivateEndPointsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ArtifactStorePrivateEndPointsFormat> {
  const initialPagingPoller = getLongRunningPoller(
    context,
    async (result: PathUncheckedResponse) => result,
    ["200", "202", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _listPrivateEndPointsSend(
          context,
          resourceGroupName,
          publisherName,
          artifactStoreName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<PathUncheckedResponse>, PathUncheckedResponse>;

  return buildPagedAsyncIterator(
    context,
    async () => await initialPagingPoller,
    _listPrivateEndPointsDeserialize,
    ["200", "202", "201"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _removePrivateEndPointsSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStorePrivateEndPointsFormat,
  options: ArtifactStoresRemovePrivateEndPointsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/removePrivateEndPoints{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
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
      body: artifactStorePrivateEndPointsFormatSerializer(parameters),
    });
}

export async function _removePrivateEndPointsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Remove manual private endpoints on artifact stores */
export function removePrivateEndPoints(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStorePrivateEndPointsFormat,
  options: ArtifactStoresRemovePrivateEndPointsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _removePrivateEndPointsDeserialize, ["202", "200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _removePrivateEndPointsSend(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _approvePrivateEndPointsSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStorePrivateEndPointsFormat,
  options: ArtifactStoresApprovePrivateEndPointsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/approvePrivateEndPoints{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
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
      body: artifactStorePrivateEndPointsFormatSerializer(parameters),
    });
}

export async function _approvePrivateEndPointsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Approve manual private endpoints on artifact stores */
export function approvePrivateEndPoints(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStorePrivateEndPointsFormat,
  options: ArtifactStoresApprovePrivateEndPointsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _approvePrivateEndPointsDeserialize, ["202", "200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _approvePrivateEndPointsSend(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _listNetworkFabricControllerPrivateEndPointsSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactStoresListNetworkFabricControllerPrivateEndPointsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/listNetworkFabricControllerPrivateEndPoints{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listNetworkFabricControllerPrivateEndPointsDeserialize(
  result: PathUncheckedResponse,
): Promise<_ArtifactStoreNetworkFabricControllerEndPointsList> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _artifactStoreNetworkFabricControllerEndPointsListDeserializer(result.body);
}

/** List network fabric controllers to artifact stores */
export function listNetworkFabricControllerPrivateEndPoints(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactStoresListNetworkFabricControllerPrivateEndPointsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ArtifactStoreNetworkFabricControllerEndPoints> {
  const initialPagingPoller = getLongRunningPoller(
    context,
    async (result: PathUncheckedResponse) => result,
    ["200", "202", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _listNetworkFabricControllerPrivateEndPointsSend(
          context,
          resourceGroupName,
          publisherName,
          artifactStoreName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<PathUncheckedResponse>, PathUncheckedResponse>;

  return buildPagedAsyncIterator(
    context,
    async () => await initialPagingPoller,
    _listNetworkFabricControllerPrivateEndPointsDeserialize,
    ["200", "202", "201"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteNetworkFabricControllerEndPointsSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStoreNetworkFabricControllerEndPoints,
  options: ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/deleteNetworkFabricControllerEndPoints{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
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
      body: artifactStoreNetworkFabricControllerEndPointsSerializer(parameters),
    });
}

export async function _deleteNetworkFabricControllerEndPointsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete network fabric controllers on artifact stores */
export function deleteNetworkFabricControllerEndPoints(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStoreNetworkFabricControllerEndPoints,
  options: ArtifactStoresDeleteNetworkFabricControllerEndPointsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deleteNetworkFabricControllerEndPointsDeserialize,
    ["202", "200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deleteNetworkFabricControllerEndPointsSend(
          context,
          resourceGroupName,
          publisherName,
          artifactStoreName,
          parameters,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _addNetworkFabricControllerEndPointsSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStoreNetworkFabricControllerEndPoints,
  options: ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/addNetworkFabricControllerEndPoints{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
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
      body: artifactStoreNetworkFabricControllerEndPointsSerializer(parameters),
    });
}

export async function _addNetworkFabricControllerEndPointsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Add network fabric controllers to artifact stores */
export function addNetworkFabricControllerEndPoints(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStoreNetworkFabricControllerEndPoints,
  options: ArtifactStoresAddNetworkFabricControllerEndPointsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _addNetworkFabricControllerEndPointsDeserialize,
    ["202", "200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _addNetworkFabricControllerEndPointsSend(
          context,
          resourceGroupName,
          publisherName,
          artifactStoreName,
          parameters,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _listByPublisherSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  options: ArtifactStoresListByPublisherOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      "api%2Dversion": context.apiVersion,
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
): Promise<_ArtifactStoreListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _artifactStoreListResultDeserializer(result.body);
}

/** Gets information of the ArtifactStores under publisher. */
export function listByPublisher(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  options: ArtifactStoresListByPublisherOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ArtifactStore> {
  return buildPagedAsyncIterator(
    context,
    () => _listByPublisherSend(context, resourceGroupName, publisherName, options),
    _listByPublisherDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactStoresDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
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

/** Deletes the specified artifact store. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactStoresDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, publisherName, artifactStoreName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: TagsObject,
  options: ArtifactStoresUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
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

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<ArtifactStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return artifactStoreDeserializer(result.body);
}

/** Update artifact store resource. */
export async function update(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: TagsObject,
  options: ArtifactStoresUpdateOptionalParams = { requestOptions: {} },
): Promise<ArtifactStore> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    publisherName,
    artifactStoreName,
    parameters,
    options,
  );
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStore,
  options: ArtifactStoresCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
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
      body: artifactStoreSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ArtifactStore> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return artifactStoreDeserializer(result.body);
}

/** Creates or updates a artifact store. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  parameters: ArtifactStore,
  options: ArtifactStoresCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ArtifactStore>, ArtifactStore> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        parameters,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<ArtifactStore>, ArtifactStore>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactStoresGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<ArtifactStore> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return artifactStoreDeserializer(result.body);
}

/** Gets information about the specified artifact store. */
export async function get(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactStoresGetOptionalParams = { requestOptions: {} },
): Promise<ArtifactStore> {
  const result = await _getSend(
    context,
    resourceGroupName,
    publisherName,
    artifactStoreName,
    options,
  );
  return _getDeserialize(result);
}
