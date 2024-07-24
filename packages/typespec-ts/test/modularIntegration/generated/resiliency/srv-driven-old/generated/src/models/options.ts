// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface FromNoneOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FromOneRequiredOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FromOneOptionalOptionalParams extends OperationOptions {
  /** I am an optional parameter */
  parameter?: string;
}
