// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  WorkloadNetworkDhcp,
  WorkloadNetworkDhcpUpdate,
} from "../../models/models.js";
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

export interface WorkloadNetworkDhcpConfigurationsOperations {
  listByWorkloadNetwork: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkDhcp>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    dhcpId: string,
    privateCloudName: string,
    options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  ) => Promise<WorkloadNetworkDhcp>;
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcp,
    options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    workloadNetworkDhcp: WorkloadNetworkDhcpUpdate,
    options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  ) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    dhcpId: string,
    options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkDhcpConfigurations(context: AVSContext) {
  return {
    listByWorkloadNetwork: (
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      dhcpId: string,
      workloadNetworkDhcp: WorkloadNetworkDhcpUpdate,
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
      subscriptionId: string,
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
): WorkloadNetworkDhcpConfigurationsOperations {
  return {
    ...getWorkloadNetworkDhcpConfigurations(context),
  };
}
