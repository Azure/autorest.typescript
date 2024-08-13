// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { ListItemInputExtensibleEnum } from "./models.js";

/** Optional parameters. */
export interface ListWithPageOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListWithParametersOptionalParams extends OperationOptions {
  /** Another query parameter. */
  another?: ListItemInputExtensibleEnum;
}

/** Optional parameters. */
export interface ListWithCustomPageModelOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ListFirstItemOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListSecondItemOptionalParams extends OperationOptions {}
