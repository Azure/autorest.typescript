// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { ListItemInputExtensibleEnum } from "./models.js";

export interface CreateOrUpdateOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface CreateOrReplaceOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
}

export interface GetOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
}

export interface ListOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
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

export interface ListWithPageOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
}

export interface ListWithParametersOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
  /** Another query parameter. */
  another?: ListItemInputExtensibleEnum;
}

export interface ListWithCustomPageModelOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
}

export interface DeleteOperationOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
}

export interface ExportOperationOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
}

export interface ListFirstItemOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
}

export interface ListSecondItemOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2022-12-01-preview";
}
