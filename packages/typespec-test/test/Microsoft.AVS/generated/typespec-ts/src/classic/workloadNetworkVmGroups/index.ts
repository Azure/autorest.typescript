// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  WorkloadNetworkVMGroup,
  WorkloadNetworkVMGroupUpdate,
} from "../../models/models.js";
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

export interface WorkloadNetworkVmGroupsOperations {
  listByWorkloadNetwork: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    options?: WorkloadNetworkVmGroupsGetOptionalParams,
  ) => Promise<WorkloadNetworkVMGroup>;
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    resource: WorkloadNetworkVMGroup,
    options?: WorkloadNetworkVmGroupsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroupUpdate,
    options?: WorkloadNetworkVmGroupsUpdateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    vmGroupId: string,
    privateCloudName: string,
    options?: WorkloadNetworkVmGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkVmGroups(context: AVSContext) {
  return {
    listByWorkloadNetwork: (
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroupUpdate,
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
      subscriptionId: string,
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
): WorkloadNetworkVmGroupsOperations {
  return {
    ...getWorkloadNetworkVmGroups(context),
  };
}
