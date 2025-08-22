// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Product,
  PagingGetPagesPartialUrlOptionalParams,
  PagingGetPagesPartialUrlOperationNextOptionalParams,
  PagingGetPagesPartialUrlOperationOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Paging. */
export interface Paging {
  /**
   * A paging operation that combines custom url, paging and partial URL and expect to concat after host
   * @param accountName Account Name
   * @param options The options parameters.
   */
  listPagesPartialUrl(
    accountName: string,
    options?: PagingGetPagesPartialUrlOptionalParams,
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that combines custom url, paging and partial URL with next operation
   * @param accountName Account Name
   * @param options The options parameters.
   */
  listPagesPartialUrlOperation(
    accountName: string,
    options?: PagingGetPagesPartialUrlOperationOptionalParams,
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that combines custom url, paging and partial URL
   * @param accountName Account Name
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listPagesPartialUrlOperationNext(
    accountName: string,
    nextLink: string,
    options?: PagingGetPagesPartialUrlOperationNextOptionalParams,
  ): PagedAsyncIterableIterator<Product>;
}
