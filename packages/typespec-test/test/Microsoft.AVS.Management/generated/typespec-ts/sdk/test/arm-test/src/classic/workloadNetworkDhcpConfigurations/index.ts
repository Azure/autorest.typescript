// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetworkDhcp } from "../../models/models.js";
import {
  WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
  WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  WorkloadNetworkDhcpConfigurationsListOptionalParams,
} from "../../api/workloadNetworkDhcpConfigurations/options.js";
import {
  $delete,
  update,
  create,
  get,
  list,
} from "../../api/workloadNetworkDhcpConfigurations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkDhcpConfigurations operations. */
export interface WorkloadNetworkDhcpConfigurationsOperations {
  /** Delete a WorkloadNetworkDhcp */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a WorkloadNetworkDhcp */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Create a WorkloadNetworkDhcp */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Get a WorkloadNetworkDhcp */
  get: (
    resourceGroupName: string,
    dhcpId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  ) => Promise<WorkloadNetworkDhcp>;
  /** List WorkloadNetworkDhcp resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDhcpConfigurationsListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDhcp>;
}

function _getWorkloadNetworkDhcpConfigurations(
  context: AzureVMwareSolutionAPIContext,
) {
  return {
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, privateCloudName, dhcpId, options),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      workloadNetworkDhcp: WorkloadNetworkDhcp,
      options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    create: (
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      workloadNetworkDhcp: WorkloadNetworkDhcp,
      options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    get: (
      resourceGroupName: string,
      dhcpId: string,
      privateCloudName: string,
      options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams,
    ) => get(context, resourceGroupName, dhcpId, privateCloudName, options),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDhcpConfigurationsListOptionalParams,
    ) => list(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getWorkloadNetworkDhcpConfigurationsOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkDhcpConfigurationsOperations {
  return {
    ..._getWorkloadNetworkDhcpConfigurations(context),
  };
}
