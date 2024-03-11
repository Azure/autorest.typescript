// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface AnalyzeTextRequestOptions extends OperationOptions {}

export interface AnalyzeImageRequestOptions extends OperationOptions {}

export interface GetTextBlocklistOptions extends OperationOptions {}

export interface CreateOrUpdateTextBlocklistOptions extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface DeleteTextBlocklistOptions extends OperationOptions {}

export interface ListTextBlocklistsOptions extends OperationOptions {}

export interface AddOrUpdateBlockItemsRequestOptions extends OperationOptions {}

export interface RemoveBlockItemsRequestOptions extends OperationOptions {}

export interface GetTextBlocklistItemOptions extends OperationOptions {}

export interface ListTextBlocklistItemsOptions extends OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}
