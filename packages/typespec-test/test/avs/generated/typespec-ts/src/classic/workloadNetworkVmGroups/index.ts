// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  WorkloadNetworkVmGroupsDeleteOptionalParams,
  WorkloadNetworkVmGroupsUpdateOptionalParams,
  WorkloadNetworkVmGroupsCreateOptionalParams,
  WorkloadNetworkVmGroupsGetOptionalParams,
  WorkloadNetworkVmGroupsListOptionalParams,
} from "../../api/options.js";
import {
  workloadNetworkVmGroupsDelete,
  workloadNetworkVmGroupsUpdate,
  workloadNetworkVmGroupsCreate,
  workloadNetworkVmGroupsGet,
  workloadNetworkVmGroupsList,
} from "../../api/workloadNetworkVmGroups/index.js";
import { WorkloadNetworkVMGroup } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkVmGroups operations. */
export interface WorkloadNetworkVmGroupsOperations {
  /** Delete a WorkloadNetworkVMGroup */
  delete: (
    resourceGroupName: string,
    vmGroupId: string,
    privateCloudName: string,
    options?: WorkloadNetworkVmGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
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
  /** Create a WorkloadNetworkVMGroup */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    workloadNetworkVMGroup: WorkloadNetworkVMGroup,
    options?: WorkloadNetworkVmGroupsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkVMGroup>,
    WorkloadNetworkVMGroup
  >;
  /** Get a WorkloadNetworkVMGroup */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    vmGroupId: string,
    options?: WorkloadNetworkVmGroupsGetOptionalParams,
  ) => Promise<WorkloadNetworkVMGroup>;
  /** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkVmGroupsListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup>;
}

function _getWorkloadNetworkVmGroups(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      vmGroupId: string,
      privateCloudName: string,
      options?: WorkloadNetworkVmGroupsDeleteOptionalParams,
    ) =>
      workloadNetworkVmGroupsDelete(
        context,
        resourceGroupName,
        vmGroupId,
        privateCloudName,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroup,
      options?: WorkloadNetworkVmGroupsUpdateOptionalParams,
    ) =>
      workloadNetworkVmGroupsUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      vmGroupId: string,
      workloadNetworkVMGroup: WorkloadNetworkVMGroup,
      options?: WorkloadNetworkVmGroupsCreateOptionalParams,
    ) =>
      workloadNetworkVmGroupsCreate(
        context,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        workloadNetworkVMGroup,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      vmGroupId: string,
      options?: WorkloadNetworkVmGroupsGetOptionalParams,
    ) =>
      workloadNetworkVmGroupsGet(
        context,
        resourceGroupName,
        privateCloudName,
        vmGroupId,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkVmGroupsListOptionalParams,
    ) =>
      workloadNetworkVmGroupsList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getWorkloadNetworkVmGroupsOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkVmGroupsOperations {
  return {
    ..._getWorkloadNetworkVmGroups(context),
  };
}
