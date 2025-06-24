import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { PathUncheckedResponse } from '@azure-rest/core-client';
import type { RawHttpHeaders } from '@azure/core-rest-pipeline';
import type { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: PageableClientOptions): PageableClient;
export default createClient;

export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

export declare type GetPage<TPage> = (pageLink: string) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

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

export declare interface PageSettings {
    continuationToken?: string;
}

export declare function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

export declare type PaginateReturn<TResult> = TResult extends {
    body: {
        pets?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

export declare interface PagingOptions<TResponse> {
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

export declare interface PetOutput {
    id: string;
    name: string;
}

export declare interface Routes {
    (path: "/payload/pageable/server-driven-pagination/link"): ServerDrivenPaginationLink;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-query-response-body"): ServerDrivenPaginationContinuationTokenRequestQueryResponseBody;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-header-response-body"): ServerDrivenPaginationContinuationTokenRequestHeaderResponseBody;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-query-response-header"): ServerDrivenPaginationContinuationTokenRequestQueryResponseHeader;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-header-response-header"): ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeader;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseBody {
    get(options?: ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyParameters): StreamableMethod<ServerDrivenPaginationContinuationTokenRequestHeaderResponseBody200Response>;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseBody200Response extends HttpResponse {
    status: "200";
    body: {
        pets: Array<PetOutput>;
        nextToken?: string;
    };
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyHeaderParam {
    headers?: RawHttpHeadersInput & ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyHeaders;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyHeaders {
    token?: string;
    foo?: string;
}

export declare type ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyParameters = ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyQueryParam & ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyHeaderParam & RequestParameters;

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyQueryParam {
    queryParameters?: ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyQueryParamProperties;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyQueryParamProperties {
    bar?: string;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeader {
    get(options?: ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderParameters): StreamableMethod<ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeader200Response>;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeader200Headers {
    "next-token"?: string;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeader200Response extends HttpResponse {
    status: "200";
    body: {
        pets: Array<PetOutput>;
    };
    headers: RawHttpHeaders & ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeader200Headers;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderHeaderParam {
    headers?: RawHttpHeadersInput & ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderHeaders;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderHeaders {
    token?: string;
    foo?: string;
}

export declare type ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderParameters = ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderQueryParam & ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderHeaderParam & RequestParameters;

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderQueryParam {
    queryParameters?: ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderQueryParamProperties;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderQueryParamProperties {
    bar?: string;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseBody {
    get(options?: ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyParameters): StreamableMethod<ServerDrivenPaginationContinuationTokenRequestQueryResponseBody200Response>;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseBody200Response extends HttpResponse {
    status: "200";
    body: {
        pets: Array<PetOutput>;
        nextToken?: string;
    };
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyHeaderParam {
    headers?: RawHttpHeadersInput & ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyHeaders;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyHeaders {
    foo?: string;
}

export declare type ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyParameters = ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyQueryParam & ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyHeaderParam & RequestParameters;

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyQueryParam {
    queryParameters?: ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyQueryParamProperties;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyQueryParamProperties {
    token?: string;
    bar?: string;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeader {
    get(options?: ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderParameters): StreamableMethod<ServerDrivenPaginationContinuationTokenRequestQueryResponseHeader200Response>;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeader200Headers {
    "next-token"?: string;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeader200Response extends HttpResponse {
    status: "200";
    body: {
        pets: Array<PetOutput>;
    };
    headers: RawHttpHeaders & ServerDrivenPaginationContinuationTokenRequestQueryResponseHeader200Headers;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderHeaderParam {
    headers?: RawHttpHeadersInput & ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderHeaders;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderHeaders {
    foo?: string;
}

export declare type ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderParameters = ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderQueryParam & ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderHeaderParam & RequestParameters;

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderQueryParam {
    queryParameters?: ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderQueryParamProperties;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderQueryParamProperties {
    token?: string;
    bar?: string;
}

export declare interface ServerDrivenPaginationLink {
    get(options?: ServerDrivenPaginationLinkParameters): StreamableMethod<ServerDrivenPaginationLink200Response>;
}

export declare interface ServerDrivenPaginationLink200Response extends HttpResponse {
    status: "200";
    body: {
        pets: Array<PetOutput>;
        next?: string;
    };
}

export declare type ServerDrivenPaginationLinkParameters = RequestParameters;

export { }
