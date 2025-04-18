// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ForceDelete } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface VirtualMachineTemplatesListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachineTemplatesListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachineTemplatesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

/** Optional parameters. */
export interface VirtualMachineTemplatesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineTemplatesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineTemplatesGetOptionalParams
  extends OperationOptions {}
