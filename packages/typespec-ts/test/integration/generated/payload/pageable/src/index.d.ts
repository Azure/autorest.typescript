import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { Paged } from '@azure/core-paging';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: PageableClientOptions): PageableClient;
export default createClient;

export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

export declare type GetPage<TPage> = (pageLink: string, maxPageSize?: number) => Promise<{
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

export declare type PagedUserOutput = Paged<UserOutput>;

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
