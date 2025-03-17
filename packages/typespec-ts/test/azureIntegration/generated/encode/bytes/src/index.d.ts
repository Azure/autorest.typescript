import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RawHttpHeaders } from '@azure/core-rest-pipeline';
import type { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare interface Base64BytesProperty {
    value: string;
}

export declare interface Base64BytesPropertyOutput {
    value: string;
}

export declare interface Base64UrlArrayBytesProperty {
    value: string[];
}

export declare interface Base64UrlArrayBytesPropertyOutput {
    value: string[];
}

export declare interface Base64UrlBytesProperty {
    value: string;
}

export declare interface Base64UrlBytesPropertyOutput {
    value: string;
}

export declare function buildCsvCollection(items: string[] | number[]): string;

export declare type BytesClient = Client & {
    path: Routes;
};

export declare interface BytesClientOptions extends ClientOptions {
}

declare function createClient(options?: BytesClientOptions): BytesClient;
export default createClient;

export declare interface DefaultBytesProperty {
    value: string;
}

export declare interface DefaultBytesPropertyOutput {
    value: string;
}

export declare interface HeaderBase64 {
    get(options: HeaderBase64Parameters): StreamableMethod<HeaderBase64204Response>;
}

export declare interface HeaderBase64204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderBase64HeaderParam {
    headers: RawHttpHeadersInput & HeaderBase64Headers;
}

export declare interface HeaderBase64Headers {
    value: string;
}

export declare type HeaderBase64Parameters = HeaderBase64HeaderParam & RequestParameters;

export declare interface HeaderBase64Url {
    get(options: HeaderBase64UrlParameters): StreamableMethod<HeaderBase64Url204Response>;
}

export declare interface HeaderBase64Url204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderBase64UrlArray {
    get(options: HeaderBase64UrlArrayParameters): StreamableMethod<HeaderBase64UrlArray204Response>;
}

export declare interface HeaderBase64UrlArray204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderBase64UrlArrayHeaderParam {
    headers: RawHttpHeadersInput & HeaderBase64UrlArrayHeaders;
}

export declare interface HeaderBase64UrlArrayHeaders {
    value: string;
}

export declare type HeaderBase64UrlArrayParameters = HeaderBase64UrlArrayHeaderParam & RequestParameters;

export declare interface HeaderBase64UrlHeaderParam {
    headers: RawHttpHeadersInput & HeaderBase64UrlHeaders;
}

export declare interface HeaderBase64UrlHeaders {
    value: string;
}

export declare type HeaderBase64UrlParameters = HeaderBase64UrlHeaderParam & RequestParameters;

export declare interface HeaderDefault {
    get(options: HeaderDefaultParameters): StreamableMethod<HeaderDefault204Response>;
}

export declare interface HeaderDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderDefaultHeaderParam {
    headers: RawHttpHeadersInput & HeaderDefaultHeaders;
}

export declare interface HeaderDefaultHeaders {
    value: string;
}

export declare type HeaderDefaultParameters = HeaderDefaultHeaderParam & RequestParameters;

export declare interface PropertyBase64 {
    post(options: PropertyBase64Parameters): StreamableMethod<PropertyBase64200Response>;
}

export declare interface PropertyBase64200Response extends HttpResponse {
    status: "200";
    body: Base64BytesPropertyOutput;
}

export declare interface PropertyBase64BodyParam {
    body: Base64BytesProperty;
}

export declare type PropertyBase64Parameters = PropertyBase64BodyParam & RequestParameters;

export declare interface PropertyBase64Url {
    post(options: PropertyBase64UrlParameters): StreamableMethod<PropertyBase64Url200Response>;
}

export declare interface PropertyBase64Url200Response extends HttpResponse {
    status: "200";
    body: Base64UrlBytesPropertyOutput;
}

export declare interface PropertyBase64UrlArray {
    post(options: PropertyBase64UrlArrayParameters): StreamableMethod<PropertyBase64UrlArray200Response>;
}

export declare interface PropertyBase64UrlArray200Response extends HttpResponse {
    status: "200";
    body: Base64UrlArrayBytesPropertyOutput;
}

export declare interface PropertyBase64UrlArrayBodyParam {
    body: Base64UrlArrayBytesProperty;
}

export declare type PropertyBase64UrlArrayParameters = PropertyBase64UrlArrayBodyParam & RequestParameters;

export declare interface PropertyBase64UrlBodyParam {
    body: Base64UrlBytesProperty;
}

export declare type PropertyBase64UrlParameters = PropertyBase64UrlBodyParam & RequestParameters;

export declare interface PropertyDefault {
    post(options: PropertyDefaultParameters): StreamableMethod<PropertyDefault200Response>;
}

export declare interface PropertyDefault200Response extends HttpResponse {
    status: "200";
    body: DefaultBytesPropertyOutput;
}

export declare interface PropertyDefaultBodyParam {
    body: DefaultBytesProperty;
}

export declare type PropertyDefaultParameters = PropertyDefaultBodyParam & RequestParameters;

export declare interface QueryBase64 {
    get(options: QueryBase64Parameters): StreamableMethod<QueryBase64204Response>;
}

export declare interface QueryBase64204Response extends HttpResponse {
    status: "204";
}

export declare type QueryBase64Parameters = QueryBase64QueryParam & RequestParameters;

export declare interface QueryBase64QueryParam {
    queryParameters: QueryBase64QueryParamProperties;
}

export declare interface QueryBase64QueryParamProperties {
    value: string;
}

export declare interface QueryBase64Url {
    get(options: QueryBase64UrlParameters): StreamableMethod<QueryBase64Url204Response>;
}

export declare interface QueryBase64Url204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryBase64UrlArray {
    get(options: QueryBase64UrlArrayParameters): StreamableMethod<QueryBase64UrlArray204Response>;
}

export declare interface QueryBase64UrlArray204Response extends HttpResponse {
    status: "204";
}

export declare type QueryBase64UrlArrayParameters = QueryBase64UrlArrayQueryParam & RequestParameters;

export declare interface QueryBase64UrlArrayQueryParam {
    queryParameters: QueryBase64UrlArrayQueryParamProperties;
}

export declare interface QueryBase64UrlArrayQueryParamProperties {
    value: string[] | QueryBase64UrlArrayValueQueryParam;
}

export declare interface QueryBase64UrlArrayValueQueryParam {
    value: string[];
    explode: false;
    style: "form";
}

export declare type QueryBase64UrlParameters = QueryBase64UrlQueryParam & RequestParameters;

export declare interface QueryBase64UrlQueryParam {
    queryParameters: QueryBase64UrlQueryParamProperties;
}

export declare interface QueryBase64UrlQueryParamProperties {
    value: string;
}

export declare interface QueryDefault {
    get(options: QueryDefaultParameters): StreamableMethod<QueryDefault204Response>;
}

export declare interface QueryDefault204Response extends HttpResponse {
    status: "204";
}

export declare type QueryDefaultParameters = QueryDefaultQueryParam & RequestParameters;

export declare interface QueryDefaultQueryParam {
    queryParameters: QueryDefaultQueryParamProperties;
}

export declare interface QueryDefaultQueryParamProperties {
    value: string;
}

export declare interface RequestBodyBase64 {
    post(options: RequestBodyBase64Parameters): StreamableMethod<RequestBodyBase64204Response>;
}

export declare interface RequestBodyBase64204Response extends HttpResponse {
    status: "204";
}

export declare interface RequestBodyBase64BodyParam {
    body: string;
}

export declare type RequestBodyBase64Parameters = RequestBodyBase64BodyParam & RequestParameters;

export declare interface RequestBodyBase64Url {
    post(options: RequestBodyBase64UrlParameters): StreamableMethod<RequestBodyBase64Url204Response>;
}

export declare interface RequestBodyBase64Url204Response extends HttpResponse {
    status: "204";
}

export declare interface RequestBodyBase64UrlBodyParam {
    body: string;
}

export declare type RequestBodyBase64UrlParameters = RequestBodyBase64UrlBodyParam & RequestParameters;

export declare interface RequestBodyCustomContentType {
    post(options: RequestBodyCustomContentTypeParameters): StreamableMethod<RequestBodyCustomContentType204Response>;
}

export declare interface RequestBodyCustomContentType204Response extends HttpResponse {
    status: "204";
}

export declare interface RequestBodyCustomContentTypeBodyParam {
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export declare interface RequestBodyCustomContentTypeMediaTypesParam {
    contentType: "image/png";
}

export declare type RequestBodyCustomContentTypeParameters = RequestBodyCustomContentTypeMediaTypesParam & RequestBodyCustomContentTypeBodyParam & RequestParameters;

export declare interface RequestBodyDefault {
    post(options: RequestBodyDefaultParameters): StreamableMethod<RequestBodyDefault204Response>;
}

export declare interface RequestBodyDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface RequestBodyDefaultBodyParam {
    body: string;
}

export declare type RequestBodyDefaultParameters = RequestBodyDefaultBodyParam & RequestParameters;

export declare interface RequestBodyOctetStream {
    post(options: RequestBodyOctetStreamParameters): StreamableMethod<RequestBodyOctetStream204Response>;
}

export declare interface RequestBodyOctetStream204Response extends HttpResponse {
    status: "204";
}

export declare interface RequestBodyOctetStreamBodyParam {
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export declare interface RequestBodyOctetStreamMediaTypesParam {
    contentType: "application/octet-stream";
}

export declare type RequestBodyOctetStreamParameters = RequestBodyOctetStreamMediaTypesParam & RequestBodyOctetStreamBodyParam & RequestParameters;

export declare interface ResponseBodyBase64 {
    get(options?: ResponseBodyBase64Parameters): StreamableMethod<ResponseBodyBase64200Response>;
}

export declare interface ResponseBodyBase64200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare type ResponseBodyBase64Parameters = RequestParameters;

export declare interface ResponseBodyBase64Url {
    get(options?: ResponseBodyBase64UrlParameters): StreamableMethod<ResponseBodyBase64Url200Response>;
}

export declare interface ResponseBodyBase64Url200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare type ResponseBodyBase64UrlParameters = RequestParameters;

export declare interface ResponseBodyCustomContentType {
    get(options?: ResponseBodyCustomContentTypeParameters): StreamableMethod<ResponseBodyCustomContentType200Response>;
}

export declare interface ResponseBodyCustomContentType200Headers {
    "content-type": "image/png";
}

export declare interface ResponseBodyCustomContentType200Response extends HttpResponse {
    status: "200";
    body: Uint8Array;
    headers: RawHttpHeaders & ResponseBodyCustomContentType200Headers;
}

export declare type ResponseBodyCustomContentTypeParameters = RequestParameters;

export declare interface ResponseBodyDefault {
    get(options?: ResponseBodyDefaultParameters): StreamableMethod<ResponseBodyDefault200Response>;
}

export declare interface ResponseBodyDefault200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare type ResponseBodyDefaultParameters = RequestParameters;

export declare interface ResponseBodyOctetStream {
    get(options?: ResponseBodyOctetStreamParameters): StreamableMethod<ResponseBodyOctetStream200Response>;
}

export declare interface ResponseBodyOctetStream200Headers {
    "content-type": "application/octet-stream";
}

export declare interface ResponseBodyOctetStream200Response extends HttpResponse {
    status: "200";
    body: Uint8Array;
    headers: RawHttpHeaders & ResponseBodyOctetStream200Headers;
}

export declare type ResponseBodyOctetStreamParameters = RequestParameters;

export declare interface Routes {
    (path: "/encode/bytes/query/default"): QueryDefault;
    (path: "/encode/bytes/query/base64"): QueryBase64;
    (path: "/encode/bytes/query/base64url"): QueryBase64Url;
    (path: "/encode/bytes/query/base64url-array"): QueryBase64UrlArray;
    (path: "/encode/bytes/property/default"): PropertyDefault;
    (path: "/encode/bytes/property/base64"): PropertyBase64;
    (path: "/encode/bytes/property/base64url"): PropertyBase64Url;
    (path: "/encode/bytes/property/base64url-array"): PropertyBase64UrlArray;
    (path: "/encode/bytes/header/default"): HeaderDefault;
    (path: "/encode/bytes/header/base64"): HeaderBase64;
    (path: "/encode/bytes/header/base64url"): HeaderBase64Url;
    (path: "/encode/bytes/header/base64url-array"): HeaderBase64UrlArray;
    (path: "/encode/bytes/body/request/default"): RequestBodyDefault;
    (path: "/encode/bytes/body/request/octet-stream"): RequestBodyOctetStream;
    (path: "/encode/bytes/body/request/custom-content-type"): RequestBodyCustomContentType;
    (path: "/encode/bytes/body/request/base64"): RequestBodyBase64;
    (path: "/encode/bytes/body/request/base64url"): RequestBodyBase64Url;
    (path: "/encode/bytes/body/response/default"): ResponseBodyDefault;
    (path: "/encode/bytes/body/response/octet-stream"): ResponseBodyOctetStream;
    (path: "/encode/bytes/body/response/custom-content-type"): ResponseBodyCustomContentType;
    (path: "/encode/bytes/body/response/base64"): ResponseBodyBase64;
    (path: "/encode/bytes/body/response/base64url"): ResponseBodyBase64Url;
}

export { }
