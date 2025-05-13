// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkPublicIP } from "../../models/models.js";
import {
  WorkloadNetworkPublicIpsDeleteOptionalParams,
  WorkloadNetworkPublicIpsCreateOptionalParams,
  WorkloadNetworkPublicIpsGetOptionalParams,
  WorkloadNetworkPublicIpsListOptionalParams,
} from "../../api/workloadNetworkPublicIps/options.js";
import {
  $delete,
  create,
  get,
  list,
} from "../../api/workloadNetworkPublicIps/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkPublicIps operations. */
export interface WorkloadNetworkPublicIpsOperations {
  /** Delete a WorkloadNetworkPublicIP */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
      $delete(
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
      create(
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
    ) => get(context, resourceGroupName, privateCloudName, publicIPId, options),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkPublicIpsListOptionalParams,
    ) => list(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getWorkloadNetworkPublicIpsOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkPublicIpsOperations {
  return {
    ..._getWorkloadNetworkPublicIps(context),
  };
}
