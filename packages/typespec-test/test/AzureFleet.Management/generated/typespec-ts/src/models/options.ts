// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface ListOptionalParams extends OperationOptions {}

export interface GetOptionalParams extends OperationOptions {}

export interface CreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface UpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ListByResourceGroupOptionalParams extends OperationOptions {}

export interface ListBySubscriptionOptionalParams extends OperationOptions {}

export interface ListVirtualMachineScaleSetsOptionalParams
  extends OperationOptions {}
