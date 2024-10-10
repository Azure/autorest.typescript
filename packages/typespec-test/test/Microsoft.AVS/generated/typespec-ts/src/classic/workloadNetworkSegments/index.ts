// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkSegment } from "../../models/models.js";
import {
  listByWorkloadNetwork,
  get,
  create,
  update,
  deleteSegment,
} from "../../api/workloadNetworkSegments/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams,
  WorkloadNetworkSegmentsGetOptionalParams,
  WorkloadNetworkSegmentsCreateOptionalParams,
  WorkloadNetworkSegmentsUpdateOptionalParams,
  WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkSegments operations. */
export interface WorkloadNetworkSegmentsOperations {
  /** List WorkloadNetworkSegment resources by WorkloadNetwork */
  listByWorkloadNetwork: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkSegment>;
  /** Get a WorkloadNetworkSegment */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    options?: WorkloadNetworkSegmentsGetOptionalParams,
  ) => Promise<WorkloadNetworkSegment>;
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
  /** Update a WorkloadNetworkSegment */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    properties: WorkloadNetworkSegment,
    options?: WorkloadNetworkSegmentsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
  /** Delete a WorkloadNetworkSegment */
  deleteSegment: (
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkSegments(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByWorkloadNetwork: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams,
    ) =>
      listByWorkloadNetwork(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      options?: WorkloadNetworkSegmentsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
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
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        workloadNetworkSegment,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      properties: WorkloadNetworkSegment,
      options?: WorkloadNetworkSegmentsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        properties,
        options,
      ),
    deleteSegment: (
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
    ) =>
      deleteSegment(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        segmentId,
        options,
      ),
  };
}

export function getWorkloadNetworkSegmentsOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkSegmentsOperations {
  return {
    ...getWorkloadNetworkSegments(context, subscriptionId),
  };
}
