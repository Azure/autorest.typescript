// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ForceDelete } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface AvailabilitySetsListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AvailabilitySetsListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AvailabilitySetsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

/** Optional parameters. */
export interface AvailabilitySetsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AvailabilitySetsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AvailabilitySetsGetOptionalParams extends OperationOptions {}
