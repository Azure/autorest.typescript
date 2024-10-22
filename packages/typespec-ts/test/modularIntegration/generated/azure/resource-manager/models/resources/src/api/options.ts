// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface TopLevelTrackedResourcesGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TopLevelTrackedResourcesCreateOrReplaceOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface TopLevelTrackedResourcesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface TopLevelTrackedResourcesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface TopLevelTrackedResourcesListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TopLevelTrackedResourcesListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TopLevelTrackedResourcesActionSyncOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface NestedProxyResourcesGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface NestedProxyResourcesCreateOrReplaceOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NestedProxyResourcesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NestedProxyResourcesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NestedProxyResourcesListByTopLevelTrackedResourceOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SingletonTrackedResourcesGetByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SingletonTrackedResourcesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SingletonTrackedResourcesUpdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SingletonTrackedResourcesListByResourceGroupOptionalParams
  extends OperationOptions {}
