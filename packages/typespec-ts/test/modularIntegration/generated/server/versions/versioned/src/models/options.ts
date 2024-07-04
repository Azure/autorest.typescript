// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface WithoutApiVersionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WithQueryApiVersionOptionalParams extends OperationOptions {
  apiVersion?: string;
}

/** Optional parameters. */
export interface WithPathApiVersionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WithQueryOldApiVersionOptionalParams extends OperationOptions {
  apiVersion?: string;
}
