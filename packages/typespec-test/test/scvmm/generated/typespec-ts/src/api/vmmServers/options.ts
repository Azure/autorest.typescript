// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ForceDelete } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface VmmServersListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VmmServersListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VmmServersDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

/** Optional parameters. */
export interface VmmServersUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VmmServersCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VmmServersGetOptionalParams extends OperationOptions {}
