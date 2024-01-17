// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface TextOperationsAnalyzeTextOptions extends OperationOptions {}

export interface ImageOperationsAnalyzeImageOptions extends OperationOptions {}

export interface TextBlocklistsGetTextBlocklistOptions
  extends OperationOptions {}

export interface TextBlocklistsCreateOrUpdateTextBlocklistOptions
  extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface TextBlocklistsDeleteTextBlocklistOptions
  extends OperationOptions {}

export interface TextBlocklistsListTextBlocklistsOptions
  extends OperationOptions {}

export interface TextBlocklistsAddOrUpdateBlockItemsOptions
  extends OperationOptions {}

export interface TextBlocklistsRemoveBlockItemsOptions
  extends OperationOptions {}

export interface TextBlocklistsGetTextBlocklistItemOptions
  extends OperationOptions {}

export interface TextBlocklistsListTextBlocklistItemsOptions
  extends OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}
