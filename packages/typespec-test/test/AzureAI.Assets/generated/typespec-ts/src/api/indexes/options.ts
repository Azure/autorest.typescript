// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface IndexesListLatestOptionalParams extends OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

/** Optional parameters. */
export interface IndexesGetNextVersionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface IndexesGetLatestOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface IndexesListOptionalParams extends OperationOptions {
  /** Ordering of list: Please choose orderby value from ['createdAt', 'lastModifiedAt']. */
  orderby?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2. */
  tags?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

/** Optional parameters. */
export interface IndexesCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface IndexesGetOptionalParams extends OperationOptions {}
