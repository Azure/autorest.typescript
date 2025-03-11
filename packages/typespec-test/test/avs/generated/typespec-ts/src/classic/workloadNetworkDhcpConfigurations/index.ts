// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
  WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  WorkloadNetworkDhcpConfigurationsListOptionalParams,
} from "../../api/options.js";
import {
  workloadNetworkDhcpConfigurationsDelete,
  workloadNetworkDhcpConfigurationsUpdate,
  workloadNetworkDhcpConfigurationsCreate,
  workloadNetworkDhcpConfigurationsGet,
  workloadNetworkDhcpConfigurationsList,
} from "../../api/workloadNetworkDhcpConfigurations/index.js";
import { WorkloadNetworkDhcp } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a WorkloadNetworkDhcpConfigurations operations. */
export interface WorkloadNetworkDhcpConfigurationsOperations {
  /** Delete a WorkloadNetworkDhcp */
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
    ) =>
      workloadNetworkDhcpConfigurationsDelete(
        context,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      workloadNetworkDhcp: WorkloadNetworkDhcp,
      options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
    ) =>
      workloadNetworkDhcpConfigurationsUpdate(
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
      workloadNetworkDhcpConfigurationsCreate(
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
    ) =>
      workloadNetworkDhcpConfigurationsGet(
        context,
        resourceGroupName,
        dhcpId,
        privateCloudName,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDhcpConfigurationsListOptionalParams,
    ) =>
      workloadNetworkDhcpConfigurationsList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getWorkloadNetworkDhcpConfigurationsOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkDhcpConfigurationsOperations {
  return {
    ..._getWorkloadNetworkDhcpConfigurations(context),
  };
}
