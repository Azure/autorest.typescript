// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  WorkloadNetworkPortMirroring,
  WorkloadNetworkPortMirroringUpdate,
} from "../../models/models.js";
import {
  listByWorkloadNetwork,
  get,
  create,
  update,
  $delete,
} from "../../api/workloadNetworkPortMirroringProfiles/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams,
  WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
  WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
} from "../../models/options.js";

export interface WorkloadNetworkPortMirroringProfilesOperations {
  listByWorkloadNetwork: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  ) => Promise<WorkloadNetworkPortMirroring>;
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroringUpdate,
    options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    portMirroringId: string,
    privateCloudName: string,
    options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkPortMirroringProfiles(context: AVSContext) {
  return {
    listByWorkloadNetwork: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams,
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
      portMirroringId: string,
      options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        portMirroringId,
        options,
      ),
    create: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
      options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
    ) =>
      create(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroringUpdate,
      options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      portMirroringId: string,
      privateCloudName: string,
      options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        portMirroringId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkPortMirroringProfilesOperations(
  context: AVSContext,
): WorkloadNetworkPortMirroringProfilesOperations {
  return {
    ...getWorkloadNetworkPortMirroringProfiles(context),
  };
}
