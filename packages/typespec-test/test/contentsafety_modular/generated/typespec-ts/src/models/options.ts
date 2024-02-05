// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface AnalyzeTextRequestOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
}

export interface AnalyzeImageRequestOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
}

export interface GetTextBlocklistOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
}

export interface CreateOrUpdateTextBlocklistOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface DeleteTextBlocklistOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
}

export interface ListTextBlocklistsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
}

export interface AddOrUpdateBlockItemsRequestOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
}

export interface RemoveBlockItemsRequestOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
}

export interface GetTextBlocklistItemOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
}

export interface ListTextBlocklistItemsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-10-01";
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}
