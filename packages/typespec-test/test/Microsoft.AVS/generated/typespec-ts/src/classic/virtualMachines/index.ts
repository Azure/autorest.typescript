// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import {
  VirtualMachine,
  VirtualMachineRestrictMovement,
} from "../../models/models.js";
import {
  listByCluster,
  get,
  restrictMovement,
} from "../../api/virtualMachines/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualMachinesListByClusterOptionalParams,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesRestrictMovementOptionalParams,
} from "../../models/options.js";

/** Interface representing a VirtualMachines operations. */
export interface VirtualMachinesOperations {
  /** List VirtualMachine resources by Cluster */
  listByCluster: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: VirtualMachinesListByClusterOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachine>;
  /** Get a VirtualMachine */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    virtualMachineId: string,
    options?: VirtualMachinesGetOptionalParams,
  ) => Promise<VirtualMachine>;
  /** Enable or disable DRS-driven VM movement restriction */
  restrictMovement: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    virtualMachineId: string,
    restrictMovementParameter: VirtualMachineRestrictMovement,
    options?: VirtualMachinesRestrictMovementOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getVirtualMachines(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByCluster: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: VirtualMachinesListByClusterOptionalParams,
    ) =>
      listByCluster(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      virtualMachineId: string,
      options?: VirtualMachinesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        virtualMachineId,
        options,
      ),
    restrictMovement: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      virtualMachineId: string,
      restrictMovementParameter: VirtualMachineRestrictMovement,
      options?: VirtualMachinesRestrictMovementOptionalParams,
    ) =>
      restrictMovement(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        virtualMachineId,
        restrictMovementParameter,
        options,
      ),
  };
}

export function getVirtualMachinesOperations(
  context: AVSContext,
  subscriptionId: string,
): VirtualMachinesOperations {
  return {
    ...getVirtualMachines(context, subscriptionId),
  };
}
