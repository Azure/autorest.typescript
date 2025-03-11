// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
  WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
  WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  WorkloadNetworkPortMirroringProfilesListOptionalParams,
} from "../../api/options.js";
import {
  workloadNetworkPortMirroringProfilesDelete,
  workloadNetworkPortMirroringProfilesUpdate,
  workloadNetworkPortMirroringProfilesCreate,
  workloadNetworkPortMirroringProfilesGet,
  workloadNetworkPortMirroringProfilesList,
} from "../../api/workloadNetworkPortMirroringProfiles/index.js";
import { WorkloadNetworkPortMirroring } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkPortMirroringProfiles operations. */
export interface WorkloadNetworkPortMirroringProfilesOperations {
  /** Delete a WorkloadNetworkPortMirroring */
  delete: (
    resourceGroupName: string,
    portMirroringId: string,
    privateCloudName: string,
    options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
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
  /** Get a WorkloadNetworkPortMirroring */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    portMirroringId: string,
    options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  ) => Promise<WorkloadNetworkPortMirroring>;
  /** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkPortMirroringProfilesListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring>;
}

function _getWorkloadNetworkPortMirroringProfiles(
  context: AzureVMwareSolutionAPIContext,
) {
  return {
    delete: (
      resourceGroupName: string,
      portMirroringId: string,
      privateCloudName: string,
      options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesDelete(
        context,
        resourceGroupName,
        portMirroringId,
        privateCloudName,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
      options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesUpdate(
        context,
        resourceGroupName,
        privateCloudName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      portMirroringId: string,
      workloadNetworkPortMirroring: WorkloadNetworkPortMirroring,
      options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesCreate(
        context,
        resourceGroupName,
        privateCloudName,
        portMirroringId,
        workloadNetworkPortMirroring,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      portMirroringId: string,
      options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesGet(
        context,
        resourceGroupName,
        privateCloudName,
        portMirroringId,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkPortMirroringProfilesListOptionalParams,
    ) =>
      workloadNetworkPortMirroringProfilesList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getWorkloadNetworkPortMirroringProfilesOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkPortMirroringProfilesOperations {
  return {
    ..._getWorkloadNetworkPortMirroringProfiles(context),
  };
}
