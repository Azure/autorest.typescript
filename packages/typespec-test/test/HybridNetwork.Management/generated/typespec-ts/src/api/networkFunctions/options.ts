// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface NetworkFunctionsExecuteRequestOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkFunctionsListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkFunctionsListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkFunctionsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkFunctionsUpdateTagsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkFunctionsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkFunctionsGetOptionalParams extends OperationOptions {}
