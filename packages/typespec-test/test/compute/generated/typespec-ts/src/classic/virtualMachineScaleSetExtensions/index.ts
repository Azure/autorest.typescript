// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../../api/computeContext.js";
import { createOrUpdate, get } from "../../api/virtualMachineScaleSetExtensions/operations.js";
import {
  VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetExtensionsGetOptionalParams,
} from "../../api/virtualMachineScaleSetExtensions/options.js";
import { VirtualMachineScaleSetExtension } from "../../models/compute/models.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachineScaleSetExtensions operations. */
export interface VirtualMachineScaleSetExtensionsOperations {
  /** The operation to create or update an extension. */
  createOrUpdate: (
    resourceGroupName: string,
    vmssExtensionName: string,
    resource: VirtualMachineScaleSetExtension,
    options?: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualMachineScaleSetExtension>, VirtualMachineScaleSetExtension>;
  /** The operation to get the extension. */
  get: (
    resourceGroupName: string,
    vmssExtensionName: string,
    options?: VirtualMachineScaleSetExtensionsGetOptionalParams,
  ) => Promise<VirtualMachineScaleSetExtension>;
}

function _getVirtualMachineScaleSetExtensions(context: ComputeContext) {
  return {
    createOrUpdate: (
      resourceGroupName: string,
      vmssExtensionName: string,
      resource: VirtualMachineScaleSetExtension,
      options?: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, vmssExtensionName, resource, options),
    get: (
      resourceGroupName: string,
      vmssExtensionName: string,
      options?: VirtualMachineScaleSetExtensionsGetOptionalParams,
    ) => get(context, resourceGroupName, vmssExtensionName, options),
  };
}

export function _getVirtualMachineScaleSetExtensionsOperations(
  context: ComputeContext,
): VirtualMachineScaleSetExtensionsOperations {
  return {
    ..._getVirtualMachineScaleSetExtensions(context),
  };
}
