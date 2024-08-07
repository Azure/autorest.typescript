// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { createRestError, } from "@azure-rest/core-client";
import { RestError } from "@azure/core-rest-pipeline";
import { isUnexpected } from "../rest/index.js";
/**
 * Helper to paginate results in a generic way and return a PagedAsyncIterableIterator
 */
export function buildPagedAsyncIterator(client, getInitialResponse, processResponseBody, options = {}) {
    const itemName = options.itemName ?? "value";
    const nextLinkName = options.nextLinkName ?? "nextLink";
    const pagedResult = {
        getPage: async (pageLink) => {
            const result = pageLink === undefined
                ? await getInitialResponse()
                : await client.pathUnchecked(pageLink).get();
            checkPagingRequest(result);
            const results = await processResponseBody(result);
            const nextLink = getNextLink(results, nextLinkName);
            const values = getElements(results, itemName);
            return {
                page: values,
                nextPageLink: nextLink,
            };
        },
        byPage: (settings) => {
            const { continuationToken } = settings ?? {};
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
function getPagedAsyncIterator(pagedResult) {
    const iter = getItemAsyncIterator(pagedResult);
    return {
        next() {
            return iter.next();
        },
        [Symbol.asyncIterator]() {
            return this;
        },
        byPage: pagedResult?.byPage ??
            ((settings) => {
                const { continuationToken } = settings ?? {};
                return getPageAsyncIterator(pagedResult, {
                    pageLink: continuationToken,
                });
            }),
    };
}
async function* getItemAsyncIterator(pagedResult) {
    const pages = getPageAsyncIterator(pagedResult);
    for await (const page of pages) {
        yield* page;
    }
}
async function* getPageAsyncIterator(pagedResult, options = {}) {
    const { pageLink } = options;
    let response = await pagedResult.getPage(pageLink ?? pagedResult.firstPageLink);
    if (!response) {
        return;
    }
    let result = response.page;
    result.continuationToken = response.nextPageLink;
    yield result;
    while (response.nextPageLink) {
        response = await pagedResult.getPage(response.nextPageLink);
        if (!response) {
            return;
        }
        result = response.page;
        result.continuationToken = response.nextPageLink;
        yield result;
    }
}
/**
 * Gets for the value of nextLink in the body
 */
function getNextLink(body, nextLinkName) {
    if (!nextLinkName) {
        return undefined;
    }
    const nextLink = body[nextLinkName];
    if (typeof nextLink !== "string" &&
        typeof nextLink !== "undefined" &&
        nextLink !== null) {
        throw new RestError(`Body Property ${nextLinkName} should be a string or undefined or null but got ${typeof nextLink}`);
    }
    if (nextLink === null) {
        return undefined;
    }
    return nextLink;
}
/**
 * Gets the elements of the current request in the body.
 */
function getElements(body, itemName) {
    const value = body[itemName];
    if (!Array.isArray(value)) {
        throw new RestError(`Couldn't paginate response\n Body doesn't contain an array property with name: ${itemName}`);
    }
    return value ?? [];
}
/**
 * Checks if a request failed
 */
function checkPagingRequest(response) {
    if (isUnexpected(response)) {
        throw createRestError(`Pagination failed with unexpected statusCode ${response.status}`, response);
    }
}
//# sourceMappingURL=pagingHelpers.js.map