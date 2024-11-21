// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  DataTypesCreateOptionalParams,
  DataTypesDeleteDataOptionalParams,
  DataTypesDeleteOptionalParams,
  DataTypesGenerateStorageContainerSasTokenOptionalParams,
  DataTypesGetOptionalParams,
  DataTypesListByDataProductOptionalParams,
  DataTypesUpdateOptionalParams,
} from "../index.js";
import {
  DataType,
  dataTypeSerializer,
  dataTypeDeserializer,
  DataTypeUpdate,
  dataTypeUpdateSerializer,
  _deleteDataRequestSerializer,
  ContainerSaS,
  containerSaSSerializer,
  ContainerSasToken,
  containerSasTokenDeserializer,
  _DataTypeListResult,
  _dataTypeListResultDeserializer,
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

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  resource: DataType,
  options: DataTypesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: dataTypeSerializer(resource),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<DataType> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataTypeDeserializer(result.body);
}

/** Create data type resource. */
export function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  resource: DataType,
  options: DataTypesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataType>, DataType> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DataType>, DataType>;
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: DataTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<DataType> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataTypeDeserializer(result.body);
}

/** Retrieve data type resource. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: DataTypesGetOptionalParams = { requestOptions: {} },
): Promise<DataType> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    options,
  );
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  properties: DataTypeUpdate,
  options: DataTypesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: dataTypeUpdateSerializer(properties),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataType> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataTypeDeserializer(result.body);
}

/** Update data type resource. */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  properties: DataTypeUpdate,
  options: DataTypesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataType>, DataType> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DataType>, DataType>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: DataTypesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete data type resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: DataTypesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _$deleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _$deleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          dataProductName,
          dataTypeName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _deleteDataSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: Record<string, any>,
  options: DataTypesDeleteDataOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}/deleteData",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: _deleteDataRequestSerializer(body),
    });
}

export async function _deleteDataDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete data for data type. */
export function deleteData(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: Record<string, any>,
  options: DataTypesDeleteDataOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deleteDataDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deleteDataSend(
          context,
          subscriptionId,
          resourceGroupName,
          dataProductName,
          dataTypeName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _generateStorageContainerSasTokenSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: ContainerSaS,
  options: DataTypesGenerateStorageContainerSasTokenOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}/generateStorageContainerSasToken",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: containerSaSSerializer(body),
    });
}

export async function _generateStorageContainerSasTokenDeserialize(
  result: PathUncheckedResponse,
): Promise<ContainerSasToken> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return containerSasTokenDeserializer(result.body);
}

/** Generate sas token for storage container. */
export async function generateStorageContainerSasToken(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  body: ContainerSaS,
  options: DataTypesGenerateStorageContainerSasTokenOptionalParams = {
    requestOptions: {},
  },
): Promise<ContainerSasToken> {
  const result = await _generateStorageContainerSasTokenSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    body,
    options,
  );
  return _generateStorageContainerSasTokenDeserialize(result);
}

export function _listByDataProductSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataTypesListByDataProductOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByDataProductDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataTypeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _dataTypeListResultDeserializer(result.body);
}

/** List data type by parent resource. */
export function listByDataProduct(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataTypesListByDataProductOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DataType> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByDataProductSend(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        options,
      ),
    _listByDataProductDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
