// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkVirtualMachine } from "../../models/models.js";
import {
  listByWorkloadNetwork,
  get,
} from "../../api/workloadNetworkVirtualMachines/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams,
  WorkloadNetworkVirtualMachinesGetOptionalParams,
} from "../../models/options.js";

export interface WorkloadNetworkVirtualMachinesOperations {
  listByWorkloadNetwork: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    virtualMachineId: string,
    options?: WorkloadNetworkVirtualMachinesGetOptionalParams,
  ) => Promise<WorkloadNetworkVirtualMachine>;
}

export function getWorkloadNetworkVirtualMachines(context: AVSContext) {
  return {
    listByWorkloadNetwork: (
      subscriptionId: string,
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams,
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
      virtualMachineId: string,
      options?: WorkloadNetworkVirtualMachinesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        virtualMachineId,
        options,
      ),
  };
}

export function getWorkloadNetworkVirtualMachinesOperations(
  context: AVSContext,
): WorkloadNetworkVirtualMachinesOperations {
  return {
    ...getWorkloadNetworkVirtualMachines(context),
  };
}
