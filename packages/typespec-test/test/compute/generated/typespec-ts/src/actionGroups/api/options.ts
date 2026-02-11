// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetOptionalParams extends OperationOptions {
  expand?: string;
}
