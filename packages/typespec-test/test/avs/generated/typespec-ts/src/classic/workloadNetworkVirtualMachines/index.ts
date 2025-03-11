// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  WorkloadNetworkVirtualMachinesGetOptionalParams,
  WorkloadNetworkVirtualMachinesListOptionalParams,
} from "../../api/options.js";
import {
  workloadNetworkVirtualMachinesGet,
  workloadNetworkVirtualMachinesList,
} from "../../api/workloadNetworkVirtualMachines/index.js";
import { WorkloadNetworkVirtualMachine } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a WorkloadNetworkVirtualMachines operations. */
export interface WorkloadNetworkVirtualMachinesOperations {
  /** Get a WorkloadNetworkVirtualMachine */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    virtualMachineId: string,
    options?: WorkloadNetworkVirtualMachinesGetOptionalParams,
  ) => Promise<WorkloadNetworkVirtualMachine>;
  /** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkVirtualMachinesListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
}

function _getWorkloadNetworkVirtualMachines(
  context: AzureVMwareSolutionAPIContext,
) {
  return {
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      virtualMachineId: string,
      options?: WorkloadNetworkVirtualMachinesGetOptionalParams,
    ) =>
      workloadNetworkVirtualMachinesGet(
        context,
        resourceGroupName,
        privateCloudName,
        virtualMachineId,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkVirtualMachinesListOptionalParams,
    ) =>
      workloadNetworkVirtualMachinesList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getWorkloadNetworkVirtualMachinesOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkVirtualMachinesOperations {
  return {
    ..._getWorkloadNetworkVirtualMachines(context),
  };
}
