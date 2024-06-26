// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkPublicIP } from "../../models/models.js";
import {
  listByWorkloadNetwork,
  get,
  create,
  $delete,
} from "../../api/workloadNetworkPublicIps/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams,
  WorkloadNetworkPublicIpsGetOptionalParams,
  WorkloadNetworkPublicIpsCreateOptionalParams,
  WorkloadNetworkPublicIpsDeleteOptionalParams,
} from "../../models/options.js";

export interface WorkloadNetworkPublicIpsOperations {
  listByWorkloadNetwork: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    publicIPId: string,
    options?: WorkloadNetworkPublicIpsGetOptionalParams,
  ) => Promise<WorkloadNetworkPublicIP>;
  create: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    publicIPId: string,
    workloadNetworkPublicIP: WorkloadNetworkPublicIP,
    options?: WorkloadNetworkPublicIpsCreateOptionalParams,
  ) => PollerLike<
    OperationState<WorkloadNetworkPublicIP>,
    WorkloadNetworkPublicIP
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    publicIPId: string,
    privateCloudName: string,
    options?: WorkloadNetworkPublicIpsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getWorkloadNetworkPublicIps(context: AVSContext) {
  return {
    listByWorkloadNetwork: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams,
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
      publicIPId: string,
      options?: WorkloadNetworkPublicIpsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        publicIPId,
        options,
      ),
    create: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      publicIPId: string,
      workloadNetworkPublicIP: WorkloadNetworkPublicIP,
      options?: WorkloadNetworkPublicIpsCreateOptionalParams,
    ) =>
      create(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        publicIPId,
        workloadNetworkPublicIP,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      publicIPId: string,
      privateCloudName: string,
      options?: WorkloadNetworkPublicIpsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        publicIPId,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworkPublicIpsOperations(
  context: AVSContext,
): WorkloadNetworkPublicIpsOperations {
  return {
    ...getWorkloadNetworkPublicIps(context),
  };
}
