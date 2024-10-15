import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare interface Base64BytesProperty {
    value: string;
}

export declare interface Base64BytesPropertyOutput {
    value: string;
}

export declare interface Base64urlArrayBytesProperty {
    value: string[];
}

export declare interface Base64urlArrayBytesPropertyOutput {
    value: string[];
}

export declare interface Base64urlBytesProperty {
    value: string;
}

export declare interface Base64urlBytesPropertyOutput {
    value: string;
}

export declare function buildCsvCollection(items: string[] | number[]): string;

export declare function buildUnexplodedFormStyleValue<ValueType>(value: ValueType): {
    readonly explode: false;
    readonly style: "form";
    readonly value: ValueType;
};

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

export declare interface HeaderBase64url {
    get(options: HeaderBase64urlParameters): StreamableMethod<HeaderBase64url204Response>;
}

export declare interface HeaderBase64url204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderBase64urlArray {
    get(options: HeaderBase64urlArrayParameters): StreamableMethod<HeaderBase64urlArray204Response>;
}

export declare interface HeaderBase64urlArray204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderBase64urlArrayHeaderParam {
    headers: RawHttpHeadersInput & HeaderBase64urlArrayHeaders;
}

export declare interface HeaderBase64urlArrayHeaders {
    value: string;
}

export declare type HeaderBase64urlArrayParameters = HeaderBase64urlArrayHeaderParam & RequestParameters;

export declare interface HeaderBase64urlHeaderParam {
    headers: RawHttpHeadersInput & HeaderBase64urlHeaders;
}

export declare interface HeaderBase64urlHeaders {
    value: string;
}

export declare type HeaderBase64urlParameters = HeaderBase64urlHeaderParam & RequestParameters;

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

export declare interface PropertyBase64url {
    post(options: PropertyBase64urlParameters): StreamableMethod<PropertyBase64url200Response>;
}

export declare interface PropertyBase64url200Response extends HttpResponse {
    status: "200";
    body: Base64urlBytesPropertyOutput;
}

export declare interface PropertyBase64urlArray {
    post(options: PropertyBase64urlArrayParameters): StreamableMethod<PropertyBase64urlArray200Response>;
}

export declare interface PropertyBase64urlArray200Response extends HttpResponse {
    status: "200";
    body: Base64urlArrayBytesPropertyOutput;
}

export declare interface PropertyBase64urlArrayBodyParam {
    body: Base64urlArrayBytesProperty;
}

export declare type PropertyBase64urlArrayParameters = PropertyBase64urlArrayBodyParam & RequestParameters;

export declare interface PropertyBase64urlBodyParam {
    body: Base64urlBytesProperty;
}

export declare type PropertyBase64urlParameters = PropertyBase64urlBodyParam & RequestParameters;

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

export declare interface QueryBase64url {
    get(options: QueryBase64urlParameters): StreamableMethod<QueryBase64url204Response>;
}

export declare interface QueryBase64url204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryBase64urlArray {
    get(options: QueryBase64urlArrayParameters): StreamableMethod<QueryBase64urlArray204Response>;
}

export declare interface QueryBase64urlArray204Response extends HttpResponse {
    status: "204";
}

export declare type QueryBase64urlArrayParameters = QueryBase64urlArrayQueryParam & RequestParameters;

export declare interface QueryBase64urlArrayQueryParam {
    queryParameters: QueryBase64urlArrayQueryParamProperties;
}

export declare interface QueryBase64urlArrayQueryParamProperties {
    value: string[] | QueryBase64urlArrayValueQueryParam;
}

export declare interface QueryBase64urlArrayValueQueryParam {
    value: string[];
    explode: false;
    style: "form";
}

export declare type QueryBase64urlParameters = QueryBase64urlQueryParam & RequestParameters;

export declare interface QueryBase64urlQueryParam {
    queryParameters: QueryBase64urlQueryParamProperties;
}

export declare interface QueryBase64urlQueryParamProperties {
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

export declare interface RequestBodyBase64url {
    post(options: RequestBodyBase64urlParameters): StreamableMethod<RequestBodyBase64url204Response>;
}

export declare interface RequestBodyBase64url204Response extends HttpResponse {
    status: "204";
}

export declare interface RequestBodyBase64urlBodyParam {
    body: string;
}

export declare type RequestBodyBase64urlParameters = RequestBodyBase64urlBodyParam & RequestParameters;

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

export declare interface ResponseBodyBase64url {
    get(options?: ResponseBodyBase64urlParameters): StreamableMethod<ResponseBodyBase64url200Response>;
}

export declare interface ResponseBodyBase64url200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare type ResponseBodyBase64urlParameters = RequestParameters;

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
    (path: "/encode/bytes/query/base64url"): QueryBase64url;
    (path: "/encode/bytes/query/base64url-array"): QueryBase64urlArray;
    (path: "/encode/bytes/property/default"): PropertyDefault;
    (path: "/encode/bytes/property/base64"): PropertyBase64;
    (path: "/encode/bytes/property/base64url"): PropertyBase64url;
    (path: "/encode/bytes/property/base64url-array"): PropertyBase64urlArray;
    (path: "/encode/bytes/header/default"): HeaderDefault;
    (path: "/encode/bytes/header/base64"): HeaderBase64;
    (path: "/encode/bytes/header/base64url"): HeaderBase64url;
    (path: "/encode/bytes/header/base64url-array"): HeaderBase64urlArray;
    (path: "/encode/bytes/body/request/default"): RequestBodyDefault;
    (path: "/encode/bytes/body/request/octet-stream"): RequestBodyOctetStream;
    (path: "/encode/bytes/body/request/custom-content-type"): RequestBodyCustomContentType;
    (path: "/encode/bytes/body/request/base64"): RequestBodyBase64;
    (path: "/encode/bytes/body/request/base64url"): RequestBodyBase64url;
    (path: "/encode/bytes/body/response/default"): ResponseBodyDefault;
    (path: "/encode/bytes/body/response/octet-stream"): ResponseBodyOctetStream;
    (path: "/encode/bytes/body/response/custom-content-type"): ResponseBodyCustomContentType;
    (path: "/encode/bytes/body/response/base64"): ResponseBodyBase64;
    (path: "/encode/bytes/body/response/base64url"): ResponseBodyBase64url;
}

export { }
