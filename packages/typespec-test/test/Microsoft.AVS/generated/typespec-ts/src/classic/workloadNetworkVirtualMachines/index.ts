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

/** Interface representing a WorkloadNetworkVirtualMachines operations. */
export interface WorkloadNetworkVirtualMachinesOperations {
  /** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
  listByWorkloadNetwork: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
  /** Get a WorkloadNetworkVirtualMachine */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    virtualMachineId: string,
    options?: WorkloadNetworkVirtualMachinesGetOptionalParams,
  ) => Promise<WorkloadNetworkVirtualMachine>;
}

export function getWorkloadNetworkVirtualMachines(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByWorkloadNetwork: (
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
  subscriptionId: string,
): WorkloadNetworkVirtualMachinesOperations {
  return {
    ...getWorkloadNetworkVirtualMachines(context, subscriptionId),
  };
}
