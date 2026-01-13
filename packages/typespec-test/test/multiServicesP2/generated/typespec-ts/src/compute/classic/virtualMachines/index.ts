// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { createOrUpdate, get } from "../../api/virtualMachines/operations.js";
import {
  VirtualMachinesCreateOrUpdateOptionalParams,
  VirtualMachinesGetOptionalParams,
} from "../../api/virtualMachines/options.js";
import { ComputeVirtualMachine } from "../../../models/compute/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachines operations. */
export interface VirtualMachinesOperations {
  /** The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. */
  createOrUpdate: (
    resourceGroupName: string,
    vmName: string,
    resource: ComputeVirtualMachine,
    options?: VirtualMachinesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ComputeVirtualMachine>, ComputeVirtualMachine>;
  /** Retrieves information about the model view or the instance view of a virtual machine. */
  get: (
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesGetOptionalParams,
  ) => Promise<ComputeVirtualMachine>;
}

function _getVirtualMachines(context: ComputeContext) {
  return {
    createOrUpdate: (
      resourceGroupName: string,
      vmName: string,
      resource: ComputeVirtualMachine,
      options?: VirtualMachinesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, vmName, resource, options),
    get: (resourceGroupName: string, vmName: string, options?: VirtualMachinesGetOptionalParams) =>
      get(context, resourceGroupName, vmName, options),
  };
}

export function _getVirtualMachinesOperations(
  context: ComputeContext,
): VirtualMachinesOperations {
  return {
    ..._getVirtualMachines(context),
  };
}
