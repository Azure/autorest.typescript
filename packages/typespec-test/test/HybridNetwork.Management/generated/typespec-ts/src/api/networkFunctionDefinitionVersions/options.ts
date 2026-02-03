// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface NetworkFunctionDefinitionVersionsUpdateStateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkFunctionDefinitionVersionsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkFunctionDefinitionVersionsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkFunctionDefinitionVersionsGetOptionalParams extends OperationOptions {}
