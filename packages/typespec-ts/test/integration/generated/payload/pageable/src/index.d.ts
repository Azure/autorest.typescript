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
}

export declare type ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyParameters = ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyHeaderParam & RequestParameters;

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
}

export declare type ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderParameters = ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderHeaderParam & RequestParameters;

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

export declare type ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyParameters = ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyQueryParam & RequestParameters;

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyQueryParam {
    queryParameters?: ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyQueryParamProperties;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyQueryParamProperties {
    token?: string;
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

export declare type ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderParameters = ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderQueryParam & RequestParameters;

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderQueryParam {
    queryParameters?: ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderQueryParamProperties;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderQueryParamProperties {
    token?: string;
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
