// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ForceDelete } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface VirtualNetworksListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualNetworksListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualNetworksDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

/** Optional parameters. */
export interface VirtualNetworksUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualNetworksCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualNetworksGetOptionalParams extends OperationOptions {}
