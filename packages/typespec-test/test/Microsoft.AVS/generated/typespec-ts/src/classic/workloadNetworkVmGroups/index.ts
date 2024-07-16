// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkVMGroup } from "../../models/models.js";
import {
  listByWorkloadNetwork,
  get,
  create,
  update,
  $delete,
} from "../../api/workloadNetworkVmGroups/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams,
  WorkloadNetworkVmGroupsGetOptionalParams,
  WorkloadNetworkVmGroupsCreateOptionalParams,
  WorkloadNetworkVmGroupsUpdateOptionalParams,
  WorkloadNetworkVmGroupsDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkVmGroups operations. */
export interface WorkloadNetworkVmGroupsOperations {
  /** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
  listByWorkloadNetwork: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup>;
  /** Get a WorkloadNetworkVMGroup */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    options?: WorkloadNetworkVmGroupsGetOptionalParams,
  ) => Promise<WorkloadNetworkVMGroup>;
  /** Create a WorkloadNetworkVMGroup */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    resource: WorkloadNetworkVMGroup,
    options?: WorkloadNetworkVmGroupsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
  /** Update a WorkloadNetworkVMGroup */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworkVmGroupsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
  /** Delete a WorkloadNetworkVMGroup */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    vmGroupId: string,
    privateCloudName: string,
    options?: WorkloadNetworkVmGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkVmGroups(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByWorkloadNetwork: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams,
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
      vmGroupId: string,
      options?: WorkloadNetworkVmGroupsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      vmGroupId: string,
      resource: WorkloadNetworkVMGroup,
      options?: WorkloadNetworkVmGroupsCreateOptionalParams,
    ) =>
      create(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroup,
      options?: WorkloadNetworkVmGroupsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    delete: (
      resourceGroupName: string,
      vmGroupId: string,
      privateCloudName: string,
      options?: WorkloadNetworkVmGroupsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        vmGroupId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkVmGroupsOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkVmGroupsOperations {
  return {
    ...getWorkloadNetworkVmGroups(context, subscriptionId),
  };
}
