// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkPortMirroring } from "../../models/models.js";
import {
  WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
  WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
  WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  WorkloadNetworkPortMirroringProfilesListOptionalParams,
} from "../../api/workloadNetworkPortMirroringProfiles/options.js";
import {
  $delete,
  update,
  create,
  get,
  list,
} from "../../api/workloadNetworkPortMirroringProfiles/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkPortMirroringProfiles operations. */
export interface WorkloadNetworkPortMirroringProfilesOperations {
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
      $delete(
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
      update(
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
      create(
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
      get(
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
    ) => list(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getWorkloadNetworkPortMirroringProfilesOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkPortMirroringProfilesOperations {
  return {
    ..._getWorkloadNetworkPortMirroringProfiles(context),
  };
}
