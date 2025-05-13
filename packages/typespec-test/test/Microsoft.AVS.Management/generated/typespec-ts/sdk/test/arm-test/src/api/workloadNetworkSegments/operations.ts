// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _WorkloadNetworkSegmentsList,
  _workloadNetworkSegmentsListDeserializer,
  WorkloadNetworkSegment,
  workloadNetworkSegmentSerializer,
  workloadNetworkSegmentDeserializer,
} from "../../models/models.js";
import {
  WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
  WorkloadNetworkSegmentsUpdateOptionalParams,
  WorkloadNetworkSegmentsCreateOptionalParams,
  WorkloadNetworkSegmentsGetOptionalParams,
  WorkloadNetworkSegmentsListOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _deleteSegmentSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsDeleteSegmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      segmentId: segmentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteSegmentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a WorkloadNetworkSegment */
export function deleteSegment(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsDeleteSegmentOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deleteSegmentDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deleteSegmentSend(
          context,
          resourceGroupName,
          privateCloudName,
          segmentId,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      segmentId: segmentId,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: workloadNetworkSegmentSerializer(workloadNetworkSegment),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkSegmentDeserializer(result.body);
}

/** Update a WorkloadNetworkSegment */
export function update(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        privateCloudName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      segmentId: segmentId,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: workloadNetworkSegmentSerializer(workloadNetworkSegment),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkSegmentDeserializer(result.body);
}

/** Create a WorkloadNetworkSegment */
export function create(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  workloadNetworkSegment: WorkloadNetworkSegment,
  options: WorkloadNetworkSegmentsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        privateCloudName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
      segmentId: segmentId,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<WorkloadNetworkSegment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return workloadNetworkSegmentDeserializer(result.body);
}

/** Get a WorkloadNetworkSegment */
export async function get(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  segmentId: string,
  options: WorkloadNetworkSegmentsGetOptionalParams = { requestOptions: {} },
): Promise<WorkloadNetworkSegment> {
  const result = await _getSend(
    context,
    resourceGroupName,
    privateCloudName,
    segmentId,
    options,
  );
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkSegmentsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      privateCloudName: privateCloudName,
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
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_WorkloadNetworkSegmentsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _workloadNetworkSegmentsListDeserializer(result.body);
}

/** List WorkloadNetworkSegment resources by WorkloadNetwork */
export function list(
  context: Client,
  resourceGroupName: string,
  privateCloudName: string,
  options: WorkloadNetworkSegmentsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WorkloadNetworkSegment> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, privateCloudName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
