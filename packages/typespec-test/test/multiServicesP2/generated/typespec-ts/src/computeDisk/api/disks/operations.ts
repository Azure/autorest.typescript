// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ComputeDiskDisk,
  computeDiskDiskSerializer,
  computeDiskDiskDeserializer,
} from "../../../models/computeDisk/models.js";
import { errorResponseDeserializer } from "../../../models/models.js";
import { getLongRunningPoller } from "../../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import { ComputeDiskContext } from "../index.js";
import { DisksCreateOrUpdateOptionalParams, DisksGetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _createOrUpdateSend(
  context: ComputeDiskContext,
  resourceGroupName: string,
  diskName: string,
  resource: ComputeDiskDisk,
  options: DisksCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskName: diskName,
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
      body: computeDiskDiskSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(result: PathUncheckedResponse): Promise<ComputeDiskDisk> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return computeDiskDiskDeserializer(result.body);
}

/** Creates or updates a disk. */
export function createOrUpdate(
  context: ComputeDiskContext,
  resourceGroupName: string,
  diskName: string,
  resource: ComputeDiskDisk,
  options: DisksCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ComputeDiskDisk>, ComputeDiskDisk> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, diskName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<ComputeDiskDisk>, ComputeDiskDisk>;
}

export function _getSend(
  context: ComputeDiskContext,
  resourceGroupName: string,
  diskName: string,
  options: DisksGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      diskName: diskName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<ComputeDiskDisk> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return computeDiskDiskDeserializer(result.body);
}

/** Gets information about a disk. */
export async function get(
  context: ComputeDiskContext,
  resourceGroupName: string,
  diskName: string,
  options: DisksGetOptionalParams = { requestOptions: {} },
): Promise<ComputeDiskDisk> {
  const result = await _getSend(context, resourceGroupName, diskName, options);
  return _getDeserialize(result);
}
