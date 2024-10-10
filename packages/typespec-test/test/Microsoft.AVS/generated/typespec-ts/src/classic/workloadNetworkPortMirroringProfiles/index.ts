// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkPortMirroring } from "../../models/models.js";
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

/** Interface representing a WorkloadNetworkPortMirroringProfiles operations. */
export interface WorkloadNetworkPortMirroringProfilesOperations {
  /** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
  listByWorkloadNetwork: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring>;
  /** Get a WorkloadNetworkPortMirroring */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  ) => Promise<WorkloadNetworkPortMirroring>;
  /** Create a WorkloadNetworkPortMirroring */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
  /** Update a WorkloadNetworkPortMirroring */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
    options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPortMirroring>,
    WorkloadNetworkPortMirroring
  >;
  /** Delete a WorkloadNetworkPortMirroring */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    portMirroringId: string,
    privateCloudName: string,
    options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkPortMirroringProfiles(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByWorkloadNetwork: (
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
      resourceGroupName: string,
      privateCloudName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
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
  subscriptionId: string,
): WorkloadNetworkPortMirroringProfilesOperations {
  return {
    ...getWorkloadNetworkPortMirroringProfiles(context, subscriptionId),
  };
}
