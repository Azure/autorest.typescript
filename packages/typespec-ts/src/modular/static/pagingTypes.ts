// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface PageSettings {
  /**
   * The token that keeps track of where to continue the iterator
   */
  continuationToken?: string;
}

/**
 * An interface that allows async iterable iteration both to completion and by page.
 */
export interface PagedAsyncIterableIterator<
  TElement,
  TPage = TElement[],
  TPageSettings = PageSettings
> {
  /**
   * The next method, part of the iteration protocol
   */
  next(): Promise<IteratorResult<TElement>>;
  /**
   * The connection to the async iterator, part of the iteration protocol
   */
  [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement>;
  /**
   * Return an AsyncIterableIterator that works a page at a time
   */
  byPage: (
    settings?: TPageSettings
  ) => AsyncIterableIterator<TPage & { continuationToken?: string }>;
}
