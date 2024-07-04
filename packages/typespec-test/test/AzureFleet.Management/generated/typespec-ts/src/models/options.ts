// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface UpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListVirtualMachineScaleSetsOptionalParams
  extends OperationOptions {}
