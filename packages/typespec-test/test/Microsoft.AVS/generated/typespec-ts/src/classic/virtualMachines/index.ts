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

export interface VirtualMachinesOperations {
  listByCluster: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: VirtualMachinesListByClusterOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachine>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    virtualMachineId: string,
    options?: VirtualMachinesGetOptionalParams,
  ) => Promise<VirtualMachine>;
  restrictMovement: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    virtualMachineId: string,
    restrictMovementParameter: VirtualMachineRestrictMovement,
    options?: VirtualMachinesRestrictMovementOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getVirtualMachines(context: AVSContext) {
  return {
    listByCluster: (
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
): VirtualMachinesOperations {
  return {
    ...getVirtualMachines(context),
  };
}
