// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkDhcp } from "../../models/models.js";
import {
  listByWorkloadNetwork,
  get,
  create,
  update,
  $delete,
} from "../../api/workloadNetworkDhcpConfigurations/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams,
  WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkDhcpConfigurations operations. */
export interface WorkloadNetworkDhcpConfigurationsOperations {
  /** List WorkloadNetworkDhcp resources by WorkloadNetwork */
  listByWorkloadNetwork: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDhcp>;
  /** Get a WorkloadNetworkDhcp */
  get: (
    resourceGroupName: string,
    dhcpId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  ) => Promise<WorkloadNetworkDhcp>;
  /** Create a WorkloadNetworkDhcp */
  create: (
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  /** Update a WorkloadNetworkDhcp */
  update: (
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
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
}

export function getWorkloadNetworkDhcpConfigurations(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByWorkloadNetwork: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams,
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
      dhcpId: string,
      privateCloudName: string,
      options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        dhcpId,
        privateCloudName,
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
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      workloadNetworkDhcp: WorkloadNetworkDhcp,
      options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        workloadNetworkDhcp,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        dhcpId,
        options,
      ),
  };
}

export function getWorkloadNetworkDhcpConfigurationsOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkDhcpConfigurationsOperations {
  return {
    ...getWorkloadNetworkDhcpConfigurations(context, subscriptionId),
  };
}
