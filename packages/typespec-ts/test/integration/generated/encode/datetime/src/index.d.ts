import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RawHttpHeaders } from '@typespec/ts-http-runtime';
import type { RawHttpHeadersInput } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

export declare function buildCsvCollection(items: string[] | number[]): string;

declare function createClient(options?: DatetimeClientOptions): DatetimeClient;
export default createClient;

export declare type DatetimeClient = Client & {
    path: Routes;
};

export declare interface DatetimeClientOptions extends ClientOptions {
}

export declare interface DefaultDatetimeProperty {
    value: Date | string;
}

export declare interface DefaultDatetimePropertyOutput {
    value: string;
}

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

export declare interface HeaderRfc3339 {
    get(options: HeaderRfc3339Parameters): StreamableMethod<HeaderRfc3339204Response>;
}

export declare interface HeaderRfc3339204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderRfc3339HeaderParam {
    headers: RawHttpHeadersInput & HeaderRfc3339Headers;
}

export declare interface HeaderRfc3339Headers {
    value: string;
}

export declare type HeaderRfc3339Parameters = HeaderRfc3339HeaderParam & RequestParameters;

export declare interface HeaderRfc7231 {
    get(options: HeaderRfc7231Parameters): StreamableMethod<HeaderRfc7231204Response>;
}

export declare interface HeaderRfc7231204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderRfc7231HeaderParam {
    headers: RawHttpHeadersInput & HeaderRfc7231Headers;
}

export declare interface HeaderRfc7231Headers {
    value: string;
}

export declare type HeaderRfc7231Parameters = HeaderRfc7231HeaderParam & RequestParameters;

export declare interface HeaderUnixTimestamp {
    get(options: HeaderUnixTimestampParameters): StreamableMethod<HeaderUnixTimestamp204Response>;
}

export declare interface HeaderUnixTimestamp204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderUnixTimestampArray {
    get(options: HeaderUnixTimestampArrayParameters): StreamableMethod<HeaderUnixTimestampArray204Response>;
}

export declare interface HeaderUnixTimestampArray204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderUnixTimestampArrayHeaderParam {
    headers: RawHttpHeadersInput & HeaderUnixTimestampArrayHeaders;
}

export declare interface HeaderUnixTimestampArrayHeaders {
    value: string;
}

export declare type HeaderUnixTimestampArrayParameters = HeaderUnixTimestampArrayHeaderParam & RequestParameters;

export declare interface HeaderUnixTimestampHeaderParam {
    headers: RawHttpHeadersInput & HeaderUnixTimestampHeaders;
}

export declare interface HeaderUnixTimestampHeaders {
    value: number;
}

export declare type HeaderUnixTimestampParameters = HeaderUnixTimestampHeaderParam & RequestParameters;

export declare interface PropertyDefault {
    post(options: PropertyDefaultParameters): StreamableMethod<PropertyDefault200Response>;
}

export declare interface PropertyDefault200Response extends HttpResponse {
    status: "200";
    body: DefaultDatetimePropertyOutput;
}

export declare interface PropertyDefaultBodyParam {
    body: DefaultDatetimeProperty;
}

export declare type PropertyDefaultParameters = PropertyDefaultBodyParam & RequestParameters;

export declare interface PropertyRfc3339 {
    post(options: PropertyRfc3339Parameters): StreamableMethod<PropertyRfc3339200Response>;
}

export declare interface PropertyRfc3339200Response extends HttpResponse {
    status: "200";
    body: Rfc3339DatetimePropertyOutput;
}

export declare interface PropertyRfc3339BodyParam {
    body: Rfc3339DatetimeProperty;
}

export declare type PropertyRfc3339Parameters = PropertyRfc3339BodyParam & RequestParameters;

export declare interface PropertyRfc7231 {
    post(options: PropertyRfc7231Parameters): StreamableMethod<PropertyRfc7231200Response>;
}

export declare interface PropertyRfc7231200Response extends HttpResponse {
    status: "200";
    body: Rfc7231DatetimePropertyOutput;
}

export declare interface PropertyRfc7231BodyParam {
    body: Rfc7231DatetimeProperty;
}

export declare type PropertyRfc7231Parameters = PropertyRfc7231BodyParam & RequestParameters;

export declare interface PropertyUnixTimestamp {
    post(options: PropertyUnixTimestampParameters): StreamableMethod<PropertyUnixTimestamp200Response>;
}

export declare interface PropertyUnixTimestamp200Response extends HttpResponse {
    status: "200";
    body: UnixTimestampDatetimePropertyOutput;
}

export declare interface PropertyUnixTimestampArray {
    post(options: PropertyUnixTimestampArrayParameters): StreamableMethod<PropertyUnixTimestampArray200Response>;
}

export declare interface PropertyUnixTimestampArray200Response extends HttpResponse {
    status: "200";
    body: UnixTimestampArrayDatetimePropertyOutput;
}

export declare interface PropertyUnixTimestampArrayBodyParam {
    body: UnixTimestampArrayDatetimeProperty;
}

export declare type PropertyUnixTimestampArrayParameters = PropertyUnixTimestampArrayBodyParam & RequestParameters;

export declare interface PropertyUnixTimestampBodyParam {
    body: UnixTimestampDatetimeProperty;
}

export declare type PropertyUnixTimestampParameters = PropertyUnixTimestampBodyParam & RequestParameters;

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
    value: Date | string;
}

export declare interface QueryRfc3339 {
    get(options: QueryRfc3339Parameters): StreamableMethod<QueryRfc3339204Response>;
}

export declare interface QueryRfc3339204Response extends HttpResponse {
    status: "204";
}

export declare type QueryRfc3339Parameters = QueryRfc3339QueryParam & RequestParameters;

export declare interface QueryRfc3339QueryParam {
    queryParameters: QueryRfc3339QueryParamProperties;
}

export declare interface QueryRfc3339QueryParamProperties {
    value: Date | string;
}

export declare interface QueryRfc7231 {
    get(options: QueryRfc7231Parameters): StreamableMethod<QueryRfc7231204Response>;
}

export declare interface QueryRfc7231204Response extends HttpResponse {
    status: "204";
}

export declare type QueryRfc7231Parameters = QueryRfc7231QueryParam & RequestParameters;

export declare interface QueryRfc7231QueryParam {
    queryParameters: QueryRfc7231QueryParamProperties;
}

export declare interface QueryRfc7231QueryParamProperties {
    value: Date | string;
}

export declare interface QueryUnixTimestamp {
    get(options: QueryUnixTimestampParameters): StreamableMethod<QueryUnixTimestamp204Response>;
}

export declare interface QueryUnixTimestamp204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryUnixTimestampArray {
    get(options: QueryUnixTimestampArrayParameters): StreamableMethod<QueryUnixTimestampArray204Response>;
}

export declare interface QueryUnixTimestampArray204Response extends HttpResponse {
    status: "204";
}

export declare type QueryUnixTimestampArrayParameters = QueryUnixTimestampArrayQueryParam & RequestParameters;

export declare interface QueryUnixTimestampArrayQueryParam {
    queryParameters: QueryUnixTimestampArrayQueryParamProperties;
}

export declare interface QueryUnixTimestampArrayQueryParamProperties {
    value: number[] | QueryUnixTimestampArrayValueQueryParam;
}

export declare interface QueryUnixTimestampArrayValueQueryParam {
    value: number[];
    explode: false;
    style: "form";
}

export declare type QueryUnixTimestampParameters = QueryUnixTimestampQueryParam & RequestParameters;

export declare interface QueryUnixTimestampQueryParam {
    queryParameters: QueryUnixTimestampQueryParamProperties;
}

export declare interface QueryUnixTimestampQueryParamProperties {
    value: number;
}

export declare interface ResponseHeaderDefault {
    get(options?: ResponseHeaderDefaultParameters): StreamableMethod<ResponseHeaderDefault204Response>;
}

export declare interface ResponseHeaderDefault204Headers {
    value: string;
}

export declare interface ResponseHeaderDefault204Response extends HttpResponse {
    status: "204";
    headers: RawHttpHeaders & ResponseHeaderDefault204Headers;
}

export declare type ResponseHeaderDefaultParameters = RequestParameters;

export declare interface ResponseHeaderRfc3339 {
    get(options?: ResponseHeaderRfc3339Parameters): StreamableMethod<ResponseHeaderRfc3339204Response>;
}

export declare interface ResponseHeaderRfc3339204Headers {
    value: string;
}

export declare interface ResponseHeaderRfc3339204Response extends HttpResponse {
    status: "204";
    headers: RawHttpHeaders & ResponseHeaderRfc3339204Headers;
}

export declare type ResponseHeaderRfc3339Parameters = RequestParameters;

export declare interface ResponseHeaderRfc7231 {
    get(options?: ResponseHeaderRfc7231Parameters): StreamableMethod<ResponseHeaderRfc7231204Response>;
}

export declare interface ResponseHeaderRfc7231204Headers {
    value: string;
}

export declare interface ResponseHeaderRfc7231204Response extends HttpResponse {
    status: "204";
    headers: RawHttpHeaders & ResponseHeaderRfc7231204Headers;
}

export declare type ResponseHeaderRfc7231Parameters = RequestParameters;

export declare interface ResponseHeaderUnixTimestamp {
    get(options?: ResponseHeaderUnixTimestampParameters): StreamableMethod<ResponseHeaderUnixTimestamp204Response>;
}

export declare interface ResponseHeaderUnixTimestamp204Headers {
    value: number;
}

export declare interface ResponseHeaderUnixTimestamp204Response extends HttpResponse {
    status: "204";
    headers: RawHttpHeaders & ResponseHeaderUnixTimestamp204Headers;
}

export declare type ResponseHeaderUnixTimestampParameters = RequestParameters;

export declare interface Rfc3339DatetimeProperty {
    value: Date | string;
}

export declare interface Rfc3339DatetimePropertyOutput {
    value: string;
}

export declare interface Rfc7231DatetimeProperty {
    value: Date | string;
}

export declare interface Rfc7231DatetimePropertyOutput {
    value: string;
}

export declare interface Routes {
    (path: "/encode/datetime/query/default"): QueryDefault;
    (path: "/encode/datetime/query/rfc3339"): QueryRfc3339;
    (path: "/encode/datetime/query/rfc7231"): QueryRfc7231;
    (path: "/encode/datetime/query/unix-timestamp"): QueryUnixTimestamp;
    (path: "/encode/datetime/query/unix-timestamp-array"): QueryUnixTimestampArray;
    (path: "/encode/datetime/property/default"): PropertyDefault;
    (path: "/encode/datetime/property/rfc3339"): PropertyRfc3339;
    (path: "/encode/datetime/property/rfc7231"): PropertyRfc7231;
    (path: "/encode/datetime/property/unix-timestamp"): PropertyUnixTimestamp;
    (path: "/encode/datetime/property/unix-timestamp-array"): PropertyUnixTimestampArray;
    (path: "/encode/datetime/header/default"): HeaderDefault;
    (path: "/encode/datetime/header/rfc3339"): HeaderRfc3339;
    (path: "/encode/datetime/header/rfc7231"): HeaderRfc7231;
    (path: "/encode/datetime/header/unix-timestamp"): HeaderUnixTimestamp;
    (path: "/encode/datetime/header/unix-timestamp-array"): HeaderUnixTimestampArray;
    (path: "/encode/datetime/responseheader/default"): ResponseHeaderDefault;
    (path: "/encode/datetime/responseheader/rfc3339"): ResponseHeaderRfc3339;
    (path: "/encode/datetime/responseheader/rfc7231"): ResponseHeaderRfc7231;
    (path: "/encode/datetime/responseheader/unix-timestamp"): ResponseHeaderUnixTimestamp;
}

export declare interface UnixTimestampArrayDatetimeProperty {
    value: number[];
}

export declare interface UnixTimestampArrayDatetimePropertyOutput {
    value: number[];
}

export declare interface UnixTimestampDatetimeProperty {
    value: number;
}

export declare interface UnixTimestampDatetimePropertyOutput {
    value: number;
}

export { }
