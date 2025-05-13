// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface WorkloadNetworkPublicIpsDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkPublicIpsCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkPublicIpsGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkPublicIpsListOptionalParams
  extends OperationOptions {}
