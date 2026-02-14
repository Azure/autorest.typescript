// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface NetworkServiceDesignVersionsUpdateStateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkServiceDesignVersionsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkServiceDesignVersionsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface NetworkServiceDesignVersionsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface NetworkServiceDesignVersionsGetOptionalParams extends OperationOptions {}
