// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Client,
  createRestError,
  PathUncheckedResponse,
} from "@azure-rest/core-client";
import { RestError } from "@azure/core-rest-pipeline";
import {
  ContinuablePage,
  PageSettings,
  PagedAsyncIterableIterator,
} from "../models/pagingTypes.js";

/**
 * An interface that describes how to communicate with the service.
 */
interface PagedResult<
  TElement,
  TPage = TElement[],
  TPageSettings = PageSettings
> {
  /**
   * Link to the first page of results.
   */
  firstPageLink?: string;
  /**
   * A method that returns a page of results.
   */
  getPage: (
    pageLink?: string
  ) => Promise<{ page: TPage; nextPageLink?: string } | undefined>;
  /**
   * a function to implement the `byPage` method on the paged async iterator.
   */
  byPage?: (
    settings?: TPageSettings
  ) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;

  /**
   * A function to extract elements from a page.
   */
  toElements?: (page: TPage) => unknown[];
}

/**
 * Options for the paging helper
 */
export interface BuildPagedAsyncIteratorOptions {
  itemName?: string;
  nextLinkName?: string;
}

/**
 * Helper to paginate results in a generic way and return a PagedAsyncIterableIterator
 */
export function buildPagedAsyncIterator<
  TElement,
  TPage = TElement[],
  TPageSettings = PageSettings,
  TResponse extends PathUncheckedResponse = PathUncheckedResponse
>(
  client: Client,
  getInitialResponse: () => PromiseLike<TResponse>,
  processResponseBody: (result: TResponse) => Promise<unknown>,
  options: BuildPagedAsyncIteratorOptions = {}
): PagedAsyncIterableIterator<TElement, TPage, TPageSettings> {
  const itemName = options.itemName ?? "value";
  const nextLinkName = options.nextLinkName ?? "nextLink";
  const pagedResult: PagedResult<TElement, TPage, TPageSettings> = {
    getPage: async (pageLink?: string) => {
      const result =
        pageLink === undefined
          ? await getInitialResponse()
          : await client.pathUnchecked(pageLink).get();
      checkPagingRequest(result);
      const results = await processResponseBody(result as TResponse);
      const nextLink = getNextLink(results, nextLinkName);
      const values = getElements<TElement>(results, itemName) as TPage;
      return {
        page: values,
        nextPageLink: nextLink,
      };
    },
    byPage: (settings?: TPageSettings) => {
      const { continuationToken } = (settings as PageSettings) ?? {};
      return getPageAsyncIterator(pagedResult, {
        pageLink: continuationToken,
      });
    },
  };
  return getPagedAsyncIterator(pagedResult);
}

/**
 * returns an async iterator that iterates over results. It also has a `byPage`
 * method that returns pages of items at once.
 *
 * @param pagedResult - an object that specifies how to get pages.
 * @returns a paged async iterator that iterates over results.
 */

export function getPagedAsyncIterator<TElement, TPage, TPageSettings>(
  pagedResult: PagedResult<TElement, TPage, TPageSettings>
): PagedAsyncIterableIterator<TElement, TPage, TPageSettings> {
  const iter = getItemAsyncIterator<TElement, TPage, TPageSettings>(
    pagedResult
  );
  return {
    next() {
      return iter.next();
    },
    [Symbol.asyncIterator]() {
      return this;
    },
    byPage:
      pagedResult?.byPage ??
      ((settings?: TPageSettings) => {
        const { continuationToken } = (settings as PageSettings) ?? {};
        return getPageAsyncIterator(pagedResult, {
          pageLink: continuationToken,
        });
      }),
  };
}

async function* getItemAsyncIterator<TElement, TPage, TPageSettings>(
  pagedResult: PagedResult<TElement, TPage, TPageSettings>
): AsyncIterableIterator<TElement> {
  const pages = getPageAsyncIterator(pagedResult);
  const firstVal = await pages.next();
  // if the result does not have an array shape, i.e. TPage = TElement, then we return it as is
  if (!Array.isArray(firstVal.value)) {
    // can extract elements from this page
    const { toElements } = pagedResult;
    if (toElements) {
      yield* toElements(firstVal.value) as TElement[];
      for await (const page of pages) {
        yield* toElements(page) as TElement[];
      }
    } else {
      yield firstVal.value;
      // `pages` is of type `AsyncIterableIterator<TPage>` but TPage = TElement in this case
      yield* pages as unknown as AsyncIterableIterator<TElement>;
    }
  } else {
    yield* firstVal.value;
    for await (const page of pages) {
      // pages is of type `AsyncIterableIterator<TPage>` so `page` is of type `TPage`. In this branch,
      // it must be the case that `TPage = TElement[]`
      yield* page as unknown as TElement[];
    }
  }
}

async function* getPageAsyncIterator<TElement, TPage, TPageSettings>(
  pagedResult: PagedResult<TElement, TPage, TPageSettings>,
  options: {
    pageLink?: string;
  } = {}
): AsyncIterableIterator<ContinuablePage<TElement, TPage>> {
  const { pageLink } = options;
  let response = await pagedResult.getPage(
    pageLink ?? pagedResult.firstPageLink
  );
  if (!response) {
    return;
  }
  let result = response.page as ContinuablePage<TElement, TPage>;
  result.continuationToken = response.nextPageLink;
  yield result;
  while (response.nextPageLink) {
    response = await pagedResult.getPage(response.nextPageLink);
    if (!response) {
      return;
    }
    result = response.page as ContinuablePage<TElement, TPage>;
    result.continuationToken = response.nextPageLink;
    yield result;
  }
}

/**
 * Gets for the value of nextLink in the body
 */
function getNextLink(body: unknown, nextLinkName?: string): string | undefined {
  if (!nextLinkName) {
    return undefined;
  }

  const nextLink = (body as Record<string, unknown>)[nextLinkName];

  if (typeof nextLink !== "string" && typeof nextLink !== "undefined") {
    throw new RestError(
      `Body Property ${nextLinkName} should be a string or undefined`
    );
  }

  return nextLink;
}

/**
 * Gets the elements of the current request in the body.
 */
function getElements<T = unknown>(body: unknown, itemName: string): T[] {
  const value = (body as Record<string, unknown>)[itemName] as T[];

  // value has to be an array according to the x-ms-pageable extension.
  // The fact that this must be an array is used above to calculate the
  // type of elements in the page in PaginateReturn
  if (!Array.isArray(value)) {
    throw new RestError(
      `Couldn't paginate response
      Body doesn't contain an array property with name: ${itemName}`
    );
  }

  return value ?? [];
}

/**
 * Checks if a request failed
 */
function checkPagingRequest(response: PathUncheckedResponse): void {
  const Http2xxStatusCodes = [
    "200",
    "201",
    "202",
    "203",
    "204",
    "205",
    "206",
    "207",
    "208",
    "226",
  ];
  if (!Http2xxStatusCodes.includes(response.status)) {
    throw createRestError(
      `Pagination failed with unexpected statusCode ${response.status}`,
      response
    );
  }
}
