// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  WorkloadNetworkSegment,
  WorkloadNetworkSegmentUpdate,
} from "../../models/models.js";
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

export interface WorkloadNetworkSegmentsOperations {
  listByWorkloadNetwork: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkSegment>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    options?: WorkloadNetworkSegmentsGetOptionalParams,
  ) => Promise<WorkloadNetworkSegment>;
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    workloadNetworkSegment: WorkloadNetworkSegment,
    options?: WorkloadNetworkSegmentsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    properties: WorkloadNetworkSegmentUpdate,
    options?: WorkloadNetworkSegmentsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkSegment>,
    WorkloadNetworkSegment
  >;
  deleteSegment: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    segmentId: string,
    options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkSegments(context: AVSContext) {
  return {
    listByWorkloadNetwork: (
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      segmentId: string,
      properties: WorkloadNetworkSegmentUpdate,
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
      subscriptionId: string,
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
): WorkloadNetworkSegmentsOperations {
  return {
    ...getWorkloadNetworkSegments(context),
  };
}
