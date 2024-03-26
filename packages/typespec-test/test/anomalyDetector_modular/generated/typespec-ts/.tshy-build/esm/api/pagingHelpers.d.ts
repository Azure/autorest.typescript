import { Client, PathUncheckedResponse } from "@azure-rest/core-client";
import { BuildPagedAsyncIteratorOptions, PageSettings, PagedAsyncIterableIterator } from "../models/pagingTypes.js";
/**
 * Helper to paginate results in a generic way and return a PagedAsyncIterableIterator
 */
export declare function buildPagedAsyncIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings, TResponse extends PathUncheckedResponse = PathUncheckedResponse>(client: Client, getInitialResponse: () => PromiseLike<TResponse>, processResponseBody: (result: TResponse) => PromiseLike<unknown>, options?: BuildPagedAsyncIteratorOptions): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
//# sourceMappingURL=pagingHelpers.d.ts.map