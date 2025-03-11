// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
  WorkloadNetworkSegmentsUpdateOptionalParams,
  WorkloadNetworkSegmentsCreateOptionalParams,
  WorkloadNetworkSegmentsGetOptionalParams,
  WorkloadNetworkSegmentsListOptionalParams,
} from "../../api/options.js";
import {
  workloadNetworkSegmentsDeleteSegment,
  workloadNetworkSegmentsUpdate,
  workloadNetworkSegmentsCreate,
  workloadNetworkSegmentsGet,
  workloadNetworkSegmentsList,
} from "../../api/workloadNetworkSegments/index.js";
import { WorkloadNetworkSegment } from "../../models/models.js";
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
      workloadNetworkSegmentsDeleteSegment(
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
      workloadNetworkSegmentsUpdate(
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
      workloadNetworkSegmentsCreate(
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
    ) =>
      workloadNetworkSegmentsGet(
        context,
        resourceGroupName,
        privateCloudName,
        segmentId,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkSegmentsListOptionalParams,
    ) =>
      workloadNetworkSegmentsList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getWorkloadNetworkSegmentsOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkSegmentsOperations {
  return {
    ..._getWorkloadNetworkSegments(context),
  };
}
