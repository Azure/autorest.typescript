// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext as Client } from "../index.js";
import {
  ComputeDiskDiskAccess,
  computeDiskDiskAccessSerializer,
  computeDiskDiskAccessDeserializer,
} from "../../models/computeDisk/models.js";
import { errorResponseDeserializer } from "../../models/models.js";
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
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  resource: ComputeDiskDiskAccess,
  options: DiskAccessesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskAccessName: diskAccessName,
      "api%2Dversion": "2025-01-02",
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
      body: computeDiskDiskAccessSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ComputeDiskDiskAccess> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return computeDiskDiskAccessDeserializer(result.body);
}

/** Creates or updates a disk access resource */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  resource: ComputeDiskDiskAccess,
  options: DiskAccessesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, diskAccessName, resource, options),
    resourceLocationConfig: "location",
    apiVersion: "2025-01-02",
  }) as PollerLike<OperationState<ComputeDiskDiskAccess>, ComputeDiskDiskAccess>;
}

export function _getSend(
  context: Client,
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
      "api%2Dversion": "2025-01-02",
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
): Promise<ComputeDiskDiskAccess> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return computeDiskDiskAccessDeserializer(result.body);
}

/** Gets information about a disk access resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  diskAccessName: string,
  options: DiskAccessesGetOptionalParams = { requestOptions: {} },
): Promise<ComputeDiskDiskAccess> {
  const result = await _getSend(context, resourceGroupName, diskAccessName, options);
  return _getDeserialize(result);
}
