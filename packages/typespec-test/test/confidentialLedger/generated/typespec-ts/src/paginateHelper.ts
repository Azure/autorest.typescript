// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Client,
  createRestError,
  PathUncheckedResponse,
} from "@azure-rest/core-client";

/**
 * An interface that describes how to communicate with the service.
 */
export interface PagedResult<
  TPage,
  TPageSettings = PageSettings,
  TLink = string,
> {
  /**
   * Link to the first page of results.
   */
  firstPageLink: TLink;
  /**
   * A method that returns a page of results.
   */
  getPage: (
    pageLink: TLink,
    maxPageSize?: number,
  ) => Promise<
    | {
        page: TPage;
        nextPageLink?: TLink;
      }
    | undefined
  >;
  /**
   * a function to implement the `byPage` method on the paged async iterator. The default is
   * one that sets the `maxPageSizeParam` from `settings.maxPageSize`.
   */
  byPage?: (settings?: TPageSettings) => AsyncIterableIterator<TPage>;
  /**
   * A function to extract elements from a page.
   */
  toElements?: (page: TPage) => unknown[];
}

/**
 * An interface that allows async iterable iteration both to completion and by page.
 */
export interface PagedAsyncIterableIterator<
  TElement,
  TPage = TElement[],
  TPageSettings = PageSettings,
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
  byPage: (settings?: TPageSettings) => AsyncIterableIterator<TPage>;
}

/**
 * An interface that tracks the settings for paged iteration
 */
export interface PageSettings {
  /**
   * The token that keeps track of where to continue the iterator
   */
  continuationToken?: string;
  /**
   * The size of the page during paged iteration
   */
  maxPageSize?: number;
}

/**
 * returns an async iterator that iterates over results. It also has a `byPage`
 * method that returns pages of items at once.
 *
 * @param pagedResult - an object that specifies how to get pages.
 * @returns a paged async iterator that iterates over results.
 */
export declare function getPagedAsyncIterator<
  TElement,
  TPage = TElement[],
  TPageSettings = PageSettings,
  TLink = string,
>(
  pagedResult: PagedResult<TPage, TPageSettings, TLink>,
): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;

/**
 * Helper type to extract the type of an array
 */
export type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

/**
 * The type of a custom function that defines how to get a page and a link to the next one if any.
 */
export type GetPage<TPage> = (pageLink: string) => Promise<{
  page: TPage;
  nextPageLink?: string;
}>;

/**
 * Options for the paging helper
 */
export interface PagingOptions<TResponse> {
  /**
   * Custom function to extract pagination details for crating the PagedAsyncIterableIterator
   */
  customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

/**
 * Helper type to infer the Type of the paged elements from the response type
 * This type is generated based on the swagger information for x-ms-pageable
 * specifically on the itemName property which indicates the property of the response
 * where the page items are found. The default value is `value`.
 * This type will allow us to provide strongly typed Iterator based on the response we get as second parameter
 */
export type PaginateReturn<TResult> = TResult extends
  | {
      body: { value?: infer TPage };
    }
  | {
      body: { entries?: infer TPage };
    }
  ? GetArrayType<TPage>
  : Array<unknown>;

/**
 * Helper to paginate results from an initial response that follows the specification of Autorest `x-ms-pageable` extension
 * @param client - Client to use for sending the next page requests
 * @param initialResponse - Initial response containing the nextLink and current page of elements
 * @param customGetPage - Optional - Function to define how to extract the page and next link to be used to paginate the results
 * @returns - PagedAsyncIterableIterator to iterate the elements
 */
export function paginate<TResponse extends PathUncheckedResponse>(
  client: Client,
  initialResponse: TResponse,
  options: PagingOptions<TResponse> = {},
): PagedAsyncIterableIterator<PaginateReturn<TResponse>> {
  // Extract element type from initial response
  type TElement = PaginateReturn<TResponse>;
  let firstRun = true;
  // We need to check the response for success before trying to inspect it looking for
  // the properties to use for nextLink and itemName
  checkPagingRequest(initialResponse);
  const { itemName, nextLinkName } = getPaginationProperties(initialResponse);
  const { customGetPage } = options;
  const pagedResult: PagedResult<TElement[]> = {
    firstPageLink: "",
    getPage:
      typeof customGetPage === "function"
        ? customGetPage
        : async (pageLink: string) => {
            const result = firstRun
              ? initialResponse
              : await client.pathUnchecked(pageLink).get();
            firstRun = false;
            checkPagingRequest(result);
            const nextLink = getNextLink(result.body, nextLinkName);
            const values = getElements<TElement>(result.body, itemName);
            return {
              page: values,
              nextPageLink: nextLink,
            };
          },
  };

  return getPagedAsyncIterator(pagedResult);
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
    throw new Error(
      `Body Property ${nextLinkName} should be a string or undefined`,
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
    throw new Error(
      `Couldn't paginate response\n Body doesn't contain an array property with name: ${itemName}`,
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
      response,
    );
  }
}

/**
 * Extracts the itemName and nextLinkName from the initial response to use them for pagination
 */
function getPaginationProperties(initialResponse: PathUncheckedResponse) {
  // Build a set with the passed custom nextLinkNames
  const nextLinkNames = new Set(["nextLink"]);

  // Build a set with the passed custom set of itemNames
  const itemNames = new Set(["value", "entries"]);

  let nextLinkName: string | undefined;
  let itemName: string | undefined;

  for (const name of nextLinkNames) {
    const nextLink = (initialResponse.body as Record<string, unknown>)[
      name
    ] as string;
    if (nextLink) {
      nextLinkName = name;
      break;
    }
  }

  for (const name of itemNames) {
    const item = (initialResponse.body as Record<string, unknown>)[
      name
    ] as string;
    if (item) {
      itemName = name;
      break;
    }
  }

  if (!itemName) {
    throw new Error(
      `Couldn't paginate response\n Body doesn't contain an array property with name: ${[
        ...itemNames,
      ].join(" OR ")}`,
    );
  }

  return { itemName, nextLinkName };
}
