// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ListItemInputExtensibleEnum } from "../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface CreateOrUpdateOptionalParams extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

/** Optional parameters. */
export interface CreateOrReplaceOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListOptionalParams extends OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Expressions that specify the order of returned results. */
  orderby?: string[];
  /** Filter the result list using the given expression. */
  filter?: string;
  /** Select the specified fields to be included in the response. */
  select?: string[];
  /** Expand the indicated resources into the response. */
  expand?: string[];
}

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
export interface DeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ExportOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListFirstItemOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListSecondItemOptionalParams extends OperationOptions {}
