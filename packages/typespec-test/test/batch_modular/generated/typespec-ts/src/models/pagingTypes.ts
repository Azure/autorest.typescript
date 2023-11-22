// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * An interface that tracks the settings for paged iteration
 */
export interface PageSettings {
  /**
   * The token that keeps track of where to continue the iterator
   */
  continuationToken?: string;
}

/**
 * An interface that describes a page of results.
 */
export type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
  /**
   * The token that keeps track of where to continue the iterator
   */
  continuationToken?: string;
};

/**
 * An interface that allows async iterable iteration both to completion and by page.
 */
export interface PagedAsyncIterableIterator<
  TElement,
  TPage = TElement[],
  TPageSettings extends PageSettings = PageSettings
> {
  /**
   * The next method, part of the iteration protocol
   */
  next(): Promise<IteratorResult<TElement>>;
  /**
   * The connection to the async iterator, part of the iteration protocol
   */
  [Symbol.asyncIterator](): PagedAsyncIterableIterator<
    TElement,
    TPage,
    TPageSettings
  >;
  /**
   * Return an AsyncIterableIterator that works a page at a time
   */
  byPage: (
    settings?: TPageSettings
  ) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
}
