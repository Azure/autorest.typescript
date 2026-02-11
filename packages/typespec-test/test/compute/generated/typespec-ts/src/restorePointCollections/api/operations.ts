// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RestorePointCollectionsContext as Client } from "./index.js";
import {
  ComputeRestorePointCollection,
  computeRestorePointCollectionSerializer,
  computeRestorePointCollectionDeserializer,
} from "../../models/compute/models.js";
import { errorResponseDeserializer } from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { CreateOrUpdateOptionalParams, GetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  resource: ComputeRestorePointCollection,
  options: CreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      restorePointCollectionName: restorePointCollectionName,
      "api%2Dversion": "2025-04-01",
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
      body: computeRestorePointCollectionSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeRestorePointCollection> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return computeRestorePointCollectionDeserializer(result.body);
}

/** The operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified. */
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  resource: ComputeRestorePointCollection,
  options: CreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<ComputeRestorePointCollection> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    restorePointCollectionName,
    resource,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      restorePointCollectionName: restorePointCollectionName,
      "api%2Dversion": "2025-04-01",
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
): Promise<ComputeRestorePointCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return computeRestorePointCollectionDeserializer(result.body);
}

/** The operation to get the restore point collection. */
export async function get(
  context: Client,
  resourceGroupName: string,
  restorePointCollectionName: string,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<ComputeRestorePointCollection> {
  const result = await _getSend(context, resourceGroupName, restorePointCollectionName, options);
  return _getDeserialize(result);
}
