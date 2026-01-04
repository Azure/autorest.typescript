// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../index.js";
import {
  errorResponseDeserializer,
  RestorePointCollection,
  restorePointCollectionSerializer,
  restorePointCollectionDeserializer,
} from "../../../models/models.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  RestorePointCollectionsCreateOrUpdateOptionalParams,
  RestorePointCollectionsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createOrUpdateSend(
  context: ComputeContext,
  resourceGroupName: string,
  restorePointCollectionName: string,
  resource: RestorePointCollection,
  options: RestorePointCollectionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      restorePointCollectionName: restorePointCollectionName,
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
      body: restorePointCollectionSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<RestorePointCollection> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return restorePointCollectionDeserializer(result.body);
}

/** The operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified. */
export async function createOrUpdate(
  context: ComputeContext,
  resourceGroupName: string,
  restorePointCollectionName: string,
  resource: RestorePointCollection,
  options: RestorePointCollectionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<RestorePointCollection> {
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
  context: ComputeContext,
  resourceGroupName: string,
  restorePointCollectionName: string,
  options: RestorePointCollectionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      restorePointCollectionName: restorePointCollectionName,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<RestorePointCollection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return restorePointCollectionDeserializer(result.body);
}

/** The operation to get the restore point collection. */
export async function get(
  context: ComputeContext,
  resourceGroupName: string,
  restorePointCollectionName: string,
  options: RestorePointCollectionsGetOptionalParams = { requestOptions: {} },
): Promise<RestorePointCollection> {
  const result = await _getSend(context, resourceGroupName, restorePointCollectionName, options);
  return _getDeserialize(result);
}
