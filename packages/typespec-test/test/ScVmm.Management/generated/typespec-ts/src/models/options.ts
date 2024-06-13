// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { ForceDelete, DeleteFromHost } from "./models.js";

export interface OperationsListOptionalParams extends OperationOptions {}

export interface VmmServersGetOptionalParams extends OperationOptions {}

export interface VmmServersCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VmmServersUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VmmServersDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface VmmServersListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface VmmServersListBySubscriptionOptionalParams
  extends OperationOptions {}

export interface CloudsGetOptionalParams extends OperationOptions {}

export interface CloudsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface CloudsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface CloudsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface CloudsListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface CloudsListBySubscriptionOptionalParams
  extends OperationOptions {}

export interface VirtualNetworksGetOptionalParams extends OperationOptions {}

export interface VirtualNetworksCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualNetworksUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualNetworksDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface VirtualNetworksListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface VirtualNetworksListBySubscriptionOptionalParams
  extends OperationOptions {}

export interface VirtualMachineTemplatesGetOptionalParams
  extends OperationOptions {}

export interface VirtualMachineTemplatesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualMachineTemplatesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualMachineTemplatesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface VirtualMachineTemplatesListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface VirtualMachineTemplatesListBySubscriptionOptionalParams
  extends OperationOptions {}

export interface AvailabilitySetsGetOptionalParams extends OperationOptions {}

export interface AvailabilitySetsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface AvailabilitySetsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface AvailabilitySetsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

export interface AvailabilitySetsListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface AvailabilitySetsListBySubscriptionOptionalParams
  extends OperationOptions {}

export interface InventoryItemsGetOptionalParams extends OperationOptions {}

export interface InventoryItemsCreateOptionalParams extends OperationOptions {}

export interface InventoryItemsDeleteOptionalParams extends OperationOptions {}

export interface InventoryItemsListByVmmServerOptionalParams
  extends OperationOptions {}

export interface VirtualMachineInstancesGetOptionalParams
  extends OperationOptions {}

export interface VirtualMachineInstancesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualMachineInstancesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualMachineInstancesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
  /** Whether to disable the VM from azure and also delete it from Vmm. */
  deleteFromHost?: DeleteFromHost;
}

export interface VirtualMachineInstancesListOptionalParams
  extends OperationOptions {}

export interface VirtualMachineInstancesStopOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualMachineInstancesStartOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualMachineInstancesRestartOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualMachineInstancesCreateCheckpointOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualMachineInstancesDeleteCheckpointOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VirtualMachineInstancesRestoreCheckpointOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface VmInstanceHybridIdentityMetadatasGetOptionalParams
  extends OperationOptions {}

export interface VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams
  extends OperationOptions {}

export interface GuestAgentsGetOptionalParams extends OperationOptions {}

export interface GuestAgentsCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface GuestAgentsDeleteOptionalParams extends OperationOptions {}

export interface GuestAgentsListByVirtualMachineInstanceOptionalParams
  extends OperationOptions {}
