// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  CreateCreateOptionalParams,
} from "../index.js";
import {
  DataProduct,
  dataProductSerializer,
  dataProductDeserializer,
  DataType,
  dataTypeSerializer,
  dataTypeDeserializer,
} from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";
import { json } from "stream/consumers";

export function _createSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  resource: DataProduct,
  options: CreateCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: {
        createContentType: application / json,
        createContentType: application / json,
      },
      body: dataProductSerializer(resource),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProduct> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductDeserializer(result.body);
}

/** Create data product resource. */
export function create(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  resource: DataProduct,
  options: CreateCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataProduct>, DataProduct> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        dataProductName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DataProduct>, DataProduct>;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  resource: DataType,
  options: CreateCreateOptionalParams = { requestOptions: {} },
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
      headers: {
        createContentType: application / json,
        createContentType: application / json,
      },
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
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  resource: DataType,
  options: CreateCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataType>, DataType> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DataType>, DataType>;
}
