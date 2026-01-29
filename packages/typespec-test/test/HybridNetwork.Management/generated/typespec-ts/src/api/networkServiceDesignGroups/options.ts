// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface NetworkServiceDesignGroupsListByPublisherOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkServiceDesignGroupsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkServiceDesignGroupsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkServiceDesignGroupsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkServiceDesignGroupsGetOptionalParams extends OperationOptions {}
