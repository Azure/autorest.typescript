import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { PathUncheckedResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: PageableClientOptions): PageableClient;
export default createClient;

export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

export declare type GetPage<TPage> = (pageLink: string) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

export declare interface List {
    get(options?: ListParameters): StreamableMethod<List200Response>;
}

export declare interface List200Response extends HttpResponse {
    status: "200";
    body: PagedUserOutput;
}

export declare type ListParameters = ListQueryParam & RequestParameters;

export declare interface ListQueryParam {
    queryParameters?: ListQueryParamProperties;
}

export declare interface ListQueryParamProperties {
    maxpagesize?: number;
}

export declare type PageableClient = Client & {
    path: Routes;
};

export declare interface PageableClientOptions extends ClientOptions {
}

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<TPage>;
}

export declare interface PagedUserOutput {
    value: Array<UserOutput>;
    nextLink?: string;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

export declare type PaginateReturn<TResult> = TResult extends {
    body: {
        value?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

export declare interface PagingOptions<TResponse> {
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

export declare interface Routes {
    (path: "/payload/pageable"): List;
}

export declare interface UserOutput {
    name: string;
}

export { }
