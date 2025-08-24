// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface LineageGetByUniqueAttributeOptionalParams
  extends OperationOptions {
  /** The number of hops for lineage. */
  depth?: number;
  /**
   * The qualified name of the entity. (This is only an example. qualifiedName can
   * be changed to other unique attributes)
   */
  attribute?: string;
}

/** Optional parameters. */
export interface LineageGetNextPageOptionalParams extends OperationOptions {
  /** The offset for pagination purpose. */
  offset?: number;
  /** The page size - by default there is no paging. */
  limit?: number;
}

/** Optional parameters. */
export interface LineageGetOptionalParams extends OperationOptions {
  /** The number of hops for lineage. */
  depth?: number;
}
