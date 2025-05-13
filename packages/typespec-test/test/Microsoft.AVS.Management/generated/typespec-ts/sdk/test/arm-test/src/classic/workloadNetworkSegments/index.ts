// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkSegment } from "../../models/models.js";
import {
  WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
  WorkloadNetworkSegmentsUpdateOptionalParams,
  WorkloadNetworkSegmentsCreateOptionalParams,
  WorkloadNetworkSegmentsGetOptionalParams,
  WorkloadNetworkSegmentsListOptionalParams,
} from "../../api/workloadNetworkSegments/options.js";
import {
  deleteSegment,
  update,
  create,
  get,
  list,
} from "../../api/workloadNetworkSegments/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkSegments operations. */
export interface WorkloadNetworkSegmentsOperations {
  /** Delete a WorkloadNetworkSegment */
  deleteSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkSegment */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworkSegmentsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
  /** Create a WorkloadNetworkSegment */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworkSegmentsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
  /** Get a WorkloadNetworkSegment */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    options?: WorkloadNetworkSegmentsGetOptionalParams,
  ) => Promise<WorkloadNetworkSegment>;
  /** List WorkloadNetworkSegment resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkSegmentsListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkSegment>;
}

function _getWorkloadNetworkSegments(context: AzureVMwareSolutionAPIContext) {
  return {
    deleteSegment: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
    ) =>
      deleteSegment(
        context,
        resourceGroupName,
        privateCloudName,
        segmentId,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      workloadNetworkSegment: WorkloadNetworkSegment,
      options?: WorkloadNetworkSegmentsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        privateCloudName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      workloadNetworkSegment: WorkloadNetworkSegment,
      options?: WorkloadNetworkSegmentsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        privateCloudName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      options?: WorkloadNetworkSegmentsGetOptionalParams,
    ) => get(context, resourceGroupName, privateCloudName, segmentId, options),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkSegmentsListOptionalParams,
    ) => list(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getWorkloadNetworkSegmentsOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkSegmentsOperations {
  return {
    ..._getWorkloadNetworkSegments(context),
  };
}
