// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface AddOperationOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FromNoneOptionalParams extends OperationOptions {
  /** I'm a new input optional parameter */
  newParameter?: string;
}

/** Optional parameters. */
export interface FromOneRequiredOptionalParams extends OperationOptions {
  /** I'm a new input optional parameter */
  newParameter?: string;
}

/** Optional parameters. */
export interface FromOneOptionalOptionalParams extends OperationOptions {
  /** I am an optional parameter */
  parameter?: string;
  /** I'm a new input optional parameter */
  newParameter?: string;
}
