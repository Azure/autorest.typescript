// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface SiteNetworkServicesCancelOperationOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SiteNetworkServicesListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SiteNetworkServicesListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SiteNetworkServicesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SiteNetworkServicesUpdateTagsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SiteNetworkServicesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SiteNetworkServicesGetOptionalParams extends OperationOptions {}
