// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ConfigurationGroupValuesListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConfigurationGroupValuesListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConfigurationGroupValuesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConfigurationGroupValuesUpdateTagsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ConfigurationGroupValuesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ConfigurationGroupValuesGetOptionalParams extends OperationOptions {}
