// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../index.js";
import {
  errorResponseDeserializer,
  DiskAccess,
  diskAccessSerializer,
  diskAccessDeserializer,
} from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _createOrUpdateSend(
  context: ComputeContext,
  resourceGroupName: string,
  diskAccessName: string,
  resource: DiskAccess,
  options: DiskAccessesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
      "api%2Dversion": context.apiVersion ?? "2025-01-02",
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
      body: diskAccessSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DiskAccess> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return diskAccessDeserializer(result.body);
}

/** Creates or updates a disk access resource */
export function createOrUpdate(
  context: ComputeContext,
  resourceGroupName: string,
  diskAccessName: string,
  resource: DiskAccess,
  options: DiskAccessesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DiskAccess>, DiskAccess> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, diskAccessName, resource, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DiskAccess>, DiskAccess>;
}

export function _getSend(
  context: ComputeContext,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
      "api%2Dversion": context.apiVersion ?? "2025-01-02",
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<DiskAccess> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return diskAccessDeserializer(result.body);
}

/** Gets information about a disk access resource. */
export async function get(
  context: ComputeContext,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesGetOptionalParams = { requestOptions: {} },
): Promise<DiskAccess> {
  const result = await _getSend(context, resourceGroupName, diskAccessName, options);
  return _getDeserialize(result);
}
