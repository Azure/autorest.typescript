// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  WorkloadNetworkPublicIpsDeleteOptionalParams,
  WorkloadNetworkPublicIpsCreateOptionalParams,
  WorkloadNetworkPublicIpsGetOptionalParams,
  WorkloadNetworkPublicIpsListOptionalParams,
} from "../../api/options.js";
import {
  workloadNetworkPublicIpsDelete,
  workloadNetworkPublicIpsCreate,
  workloadNetworkPublicIpsGet,
  workloadNetworkPublicIpsList,
} from "../../api/workloadNetworkPublicIps/index.js";
import { WorkloadNetworkPublicIP } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkPublicIps operations. */
export interface WorkloadNetworkPublicIpsOperations {
  /** Delete a WorkloadNetworkPublicIP */
  delete: (
    resourceGroupName: string,
    publicIPId: string,
    privateCloudName: string,
    options?: WorkloadNetworkPublicIpsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a WorkloadNetworkPublicIP */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    publicIPId: string,
    workloadNetworkPublicIP: WorkloadNetworkPublicIP,
    options?: WorkloadNetworkPublicIpsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPublicIP>,
    WorkloadNetworkPublicIP
  >;
  /** Get a WorkloadNetworkPublicIP */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    publicIPId: string,
    options?: WorkloadNetworkPublicIpsGetOptionalParams,
  ) => Promise<WorkloadNetworkPublicIP>;
  /** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkPublicIpsListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
}

function _getWorkloadNetworkPublicIps(context: AzureVMwareSolutionAPIContext) {
  return {
    delete: (
      resourceGroupName: string,
      publicIPId: string,
      privateCloudName: string,
      options?: WorkloadNetworkPublicIpsDeleteOptionalParams,
    ) =>
      workloadNetworkPublicIpsDelete(
        context,
        resourceGroupName,
        publicIPId,
        privateCloudName,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      publicIPId: string,
      workloadNetworkPublicIP: WorkloadNetworkPublicIP,
      options?: WorkloadNetworkPublicIpsCreateOptionalParams,
    ) =>
      workloadNetworkPublicIpsCreate(
        context,
        resourceGroupName,
        privateCloudName,
        publicIPId,
        workloadNetworkPublicIP,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      publicIPId: string,
      options?: WorkloadNetworkPublicIpsGetOptionalParams,
    ) =>
      workloadNetworkPublicIpsGet(
        context,
        resourceGroupName,
        privateCloudName,
        publicIPId,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkPublicIpsListOptionalParams,
    ) =>
      workloadNetworkPublicIpsList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getWorkloadNetworkPublicIpsOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkPublicIpsOperations {
  return {
    ..._getWorkloadNetworkPublicIps(context),
  };
}
