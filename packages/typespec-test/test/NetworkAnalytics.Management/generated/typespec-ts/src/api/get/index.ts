// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  GetGetOptionalParams,
} from "../index.js";
import {
  DataProduct,
  dataProductDeserializer,
  DataType,
  dataTypeDeserializer,
  DataProductsCatalog,
  dataProductsCatalogDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { json } from "stream/consumers";

export function _getSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  options: GetGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { getContentType: application / json },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProduct> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductDeserializer(result.body);
}

/** Retrieve data product resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  options: GetGetOptionalParams = { requestOptions: {} },
): Promise<DataProduct> {
  const result = await _getSend(
    context,
    resourceGroupName,
    dataProductName,
    options,
  );
  return _getDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: GetGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
      dataTypeName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { getContentType: application / json },
    });
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
  resourceGroupName: string,
  dataProductName: string,
  dataTypeName: string,
  options: GetGetOptionalParams = { requestOptions: {} },
): Promise<DataType> {
  const result = await _getSend(
    context,
    resourceGroupName,
    dataProductName,
    dataTypeName,
    options,
  );
  return _getDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  options: GetGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProductsCatalogs/default",
      subscriptionId,
      resourceGroupName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { getContentType: application / json },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProductsCatalog> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductsCatalogDeserializer(result.body);
}

/** Retrieve data type resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  options: GetGetOptionalParams = { requestOptions: {} },
): Promise<DataProductsCatalog> {
  const result = await _getSend(context, resourceGroupName, options);
  return _getDeserialize(result);
}
