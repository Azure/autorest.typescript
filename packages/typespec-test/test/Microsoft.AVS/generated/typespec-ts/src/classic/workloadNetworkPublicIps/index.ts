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

/** Interface representing a WorkloadNetworkPublicIps operations. */
export interface WorkloadNetworkPublicIpsOperations {
  /** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
  listByWorkloadNetwork: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
  /** Get a WorkloadNetworkPublicIP */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    publicIPId: string,
    options?: WorkloadNetworkPublicIpsGetOptionalParams,
  ) => Promise<WorkloadNetworkPublicIP>;
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
}

export function getWorkloadNetworkPublicIps(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByWorkloadNetwork: (
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
  subscriptionId: string,
): WorkloadNetworkPublicIpsOperations {
  return {
    ...getWorkloadNetworkPublicIps(context, subscriptionId),
  };
}
