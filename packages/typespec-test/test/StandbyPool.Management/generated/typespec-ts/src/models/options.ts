// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface OperationsListOptionalParams extends OperationOptions {}

export interface StandbyVirtualMachinePoolsGetOptionalParams
  extends OperationOptions {}

export interface StandbyVirtualMachinePoolsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface StandbyVirtualMachinePoolsDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface StandbyVirtualMachinePoolsUpdateOptionalParams
  extends OperationOptions {}

export interface StandbyVirtualMachinePoolsListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface StandbyVirtualMachinePoolsListBySubscriptionOptionalParams
  extends OperationOptions {}

export interface StandbyVirtualMachinesGetOptionalParams
  extends OperationOptions {}

export interface StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams
  extends OperationOptions {}

export interface StandbyContainerGroupPoolsGetOptionalParams
  extends OperationOptions {}

export interface StandbyContainerGroupPoolsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface StandbyContainerGroupPoolsDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface StandbyContainerGroupPoolsUpdateOptionalParams
  extends OperationOptions {}

export interface StandbyContainerGroupPoolsListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface StandbyContainerGroupPoolsListBySubscriptionOptionalParams
  extends OperationOptions {}
