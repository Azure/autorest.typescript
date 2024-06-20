// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface OperationsListOptionalParams extends OperationOptions {}

export interface FleetsGetOptionalParams extends OperationOptions {}

export interface FleetsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface FleetsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface FleetsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface FleetsListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface FleetsListBySubscriptionOptionalParams
  extends OperationOptions {}

export interface FleetsListVirtualMachineScaleSetsOptionalParams
  extends OperationOptions {}
