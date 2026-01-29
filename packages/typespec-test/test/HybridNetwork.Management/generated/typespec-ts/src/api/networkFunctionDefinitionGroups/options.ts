// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface NetworkFunctionDefinitionGroupsListByPublisherOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkFunctionDefinitionGroupsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkFunctionDefinitionGroupsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkFunctionDefinitionGroupsGetOptionalParams extends OperationOptions {}
