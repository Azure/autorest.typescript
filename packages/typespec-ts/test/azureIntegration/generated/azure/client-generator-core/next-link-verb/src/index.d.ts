import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { PathUncheckedResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: NextLinkVerbClientOptions): NextLinkVerbClient;
export default createClient;

export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

export declare type GetPage<TPage> = (pageLink: string) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

export declare interface ListItems {
    post(options?: ListItemsParameters): StreamableMethod<ListItems200Response>;
}

export declare interface ListItems200Response extends HttpResponse {
    status: "200";
    body: ListTestResultOutput;
}

export declare type ListItemsParameters = RequestParameters;

export declare interface ListTestResultOutput {
    items: Array<TestOutput>;
    nextLink?: string;
}

export declare type NextLinkVerbClient = Client & {
    path: Routes;
};

export declare interface NextLinkVerbClientOptions extends ClientOptions {
}

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<TPage>;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

export declare type PaginateReturn<TResult> = TResult extends {
    body: {
        value?: infer TPage;
    };
} | {
    body: {
        items?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

export declare interface PagingOptions<TResponse> {
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

export declare interface Routes {
    (path: "/azure/client-generator-core/next-link-verb/items"): ListItems;
}

export declare interface TestOutput {
    id: string;
}

export { }
