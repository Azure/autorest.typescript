// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface AnalyzeTextOptionalParams extends OperationOptions {}

export interface AnalyzeImageOptionalParams extends OperationOptions {}

export interface GetTextBlocklistOptionalParams extends OperationOptions {}

export interface CreateOrUpdateTextBlocklistOptionalParams
  extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface DeleteTextBlocklistOptionalParams extends OperationOptions {}

export interface ListTextBlocklistsOptionalParams extends OperationOptions {}

export interface AddOrUpdateBlockItemsOptionalParams extends OperationOptions {}

export interface RemoveBlockItemsOptionalParams extends OperationOptions {}

export interface GetTextBlocklistItemOptionalParams extends OperationOptions {}

export interface ListTextBlocklistItemsOptionalParams extends OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}
