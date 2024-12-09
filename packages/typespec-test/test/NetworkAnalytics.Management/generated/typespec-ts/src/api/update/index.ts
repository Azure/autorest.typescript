// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  UpdateUpdateOptionalParams,
} from "../index.js";
import {
  DataProduct,
  dataProductDeserializer,
  DataProductUpdate,
  dataProductUpdateSerializer,
  DataType,
  dataTypeDeserializer,
  DataTypeUpdate,
  dataTypeUpdateSerializer,
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

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  properties: DataProductUpdate,
  options: UpdateUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      headers: {
        updateContentType: application / json,
        updateContentType: application / json,
      },
      body: dataProductUpdateSerializer(properties),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProduct> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductDeserializer(result.body);
}

/** Update data product resource. */
export function update(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  properties: DataProductUpdate,
  options: UpdateUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataProduct>, DataProduct> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        dataProductName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DataProduct>, DataProduct>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  properties: DataTypeUpdate,
  options: UpdateUpdateOptionalParams = { requestOptions: {} },
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
      headers: {
        updateContentType: application / json,
        updateContentType: application / json,
      },
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
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  properties: DataTypeUpdate,
  options: UpdateUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataType>, DataType> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        dataProductName,
        dataTypeName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DataType>, DataType>;
}
