// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface CreateOrUpdateOptions extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface CreateOrReplaceOptions extends OperationOptions {}

export interface GetOptions extends OperationOptions {}

export interface ListOptions extends OperationOptions {
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

export interface ListWithPageOptions extends OperationOptions {}

export interface ListWithCustomPageModelOptions extends OperationOptions {}

export interface DeleteOptions extends OperationOptions {}

export interface ExportOptions extends OperationOptions {}
