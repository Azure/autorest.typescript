import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RawHttpHeaders } from '@typespec/ts-http-runtime';
import type { RawHttpHeadersInput } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(options?: PageableClientOptions): PageableClient;
export default createClient;

export declare type PageableClient = Client & {
    path: Routes;
};

export declare interface PageableClientOptions extends ClientOptions {
}

export declare interface PetOutput {
    id: string;
    name: string;
}

export declare interface Routes {
    (path: "/payload/pageable/server-driven-pagination/link"): ServerDrivenPaginationLink;
    (path: "/payload/pageable/server-driven-pagination/nested-link"): ServerDrivenPaginationNestedLink;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-query-response-body"): ServerDrivenPaginationContinuationTokenRequestQueryResponseBody;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-header-response-body"): ServerDrivenPaginationContinuationTokenRequestHeaderResponseBody;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-query-response-header"): ServerDrivenPaginationContinuationTokenRequestQueryResponseHeader;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-header-response-header"): ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeader;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-query-nested-response-body"): ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBody;
    (path: "/payload/pageable/server-driven-pagination/continuationtoken/request-header-nested-response-body"): ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBody;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBody {
    get(options?: ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyParameters): StreamableMethod<ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBody200Response>;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBody200Response extends HttpResponse {
    status: "200";
    body: {
        nestedItems: {
            pets: Array<PetOutput>;
        };
        nestedNext?: {
            nextToken?: string;
        };
    };
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyHeaderParam {
    headers?: RawHttpHeadersInput & ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyHeaders;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyHeaders {
    token?: string;
    foo?: string;
}

export declare type ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyParameters = ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyQueryParam & ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyHeaderParam & RequestParameters;

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyQueryParam {
    queryParameters?: ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyQueryParamProperties;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyQueryParamProperties {
    bar?: string;
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

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBody {
    get(options?: ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyParameters): StreamableMethod<ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBody200Response>;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBody200Response extends HttpResponse {
    status: "200";
    body: {
        nestedItems: {
            pets: Array<PetOutput>;
        };
        nestedNext?: {
            nextToken?: string;
        };
    };
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyHeaderParam {
    headers?: RawHttpHeadersInput & ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyHeaders;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyHeaders {
    foo?: string;
}

export declare type ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyParameters = ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyQueryParam & ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyHeaderParam & RequestParameters;

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyQueryParam {
    queryParameters?: ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyQueryParamProperties;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyQueryParamProperties {
    token?: string;
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

export declare interface ServerDrivenPaginationNestedLink {
    get(options?: ServerDrivenPaginationNestedLinkParameters): StreamableMethod<ServerDrivenPaginationNestedLink200Response>;
}

export declare interface ServerDrivenPaginationNestedLink200Response extends HttpResponse {
    status: "200";
    body: {
        nestedItems: {
            pets: Array<PetOutput>;
        };
        nestedNext: {
            next?: string;
        };
    };
}

export declare type ServerDrivenPaginationNestedLinkParameters = RequestParameters;

export { }
