import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare function buildCsvCollection(items: string[] | number[]): string;

declare function createClient(options?: DurationClientOptions): DurationClient;
export default createClient;

export declare interface DefaultDurationProperty {
    value: string;
}

export declare interface DefaultDurationPropertyOutput {
    value: string;
}

export declare type DurationClient = Client & {
    path: Routes;
};

export declare interface DurationClientOptions extends ClientOptions {
}

export declare interface Float64MillisecondsDurationProperty {
    value: number;
}

export declare interface Float64MillisecondsDurationPropertyOutput {
    value: number;
}

export declare interface Float64SecondsDurationProperty {
    value: number;
}

export declare interface Float64SecondsDurationPropertyOutput {
    value: number;
}

export declare interface FloatMillisecondsDurationArrayProperty {
    value: number[];
}

export declare interface FloatMillisecondsDurationArrayPropertyOutput {
    value: number[];
}

export declare interface FloatMillisecondsDurationProperty {
    value: number;
}

export declare interface FloatMillisecondsDurationPropertyOutput {
    value: number;
}

export declare interface FloatSecondsDurationArrayProperty {
    value: number[];
}

export declare interface FloatSecondsDurationArrayPropertyOutput {
    value: number[];
}

export declare interface FloatSecondsDurationProperty {
    value: number;
}

export declare interface FloatSecondsDurationPropertyOutput {
    value: number;
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
    duration: string;
}

export declare type HeaderDefaultParameters = HeaderDefaultHeaderParam & RequestParameters;

export declare interface HeaderFloat64Milliseconds {
    get(options: HeaderFloat64MillisecondsParameters): StreamableMethod<HeaderFloat64Milliseconds204Response>;
}

export declare interface HeaderFloat64Milliseconds204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderFloat64MillisecondsHeaderParam {
    headers: RawHttpHeadersInput & HeaderFloat64MillisecondsHeaders;
}

export declare interface HeaderFloat64MillisecondsHeaders {
    duration: number;
}

export declare type HeaderFloat64MillisecondsParameters = HeaderFloat64MillisecondsHeaderParam & RequestParameters;

export declare interface HeaderFloat64Seconds {
    get(options: HeaderFloat64SecondsParameters): StreamableMethod<HeaderFloat64Seconds204Response>;
}

export declare interface HeaderFloat64Seconds204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderFloat64SecondsHeaderParam {
    headers: RawHttpHeadersInput & HeaderFloat64SecondsHeaders;
}

export declare interface HeaderFloat64SecondsHeaders {
    duration: number;
}

export declare type HeaderFloat64SecondsParameters = HeaderFloat64SecondsHeaderParam & RequestParameters;

export declare interface HeaderFloatMilliseconds {
    get(options: HeaderFloatMillisecondsParameters): StreamableMethod<HeaderFloatMilliseconds204Response>;
}

export declare interface HeaderFloatMilliseconds204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderFloatMillisecondsHeaderParam {
    headers: RawHttpHeadersInput & HeaderFloatMillisecondsHeaders;
}

export declare interface HeaderFloatMillisecondsHeaders {
    duration: number;
}

export declare type HeaderFloatMillisecondsParameters = HeaderFloatMillisecondsHeaderParam & RequestParameters;

export declare interface HeaderFloatSeconds {
    get(options: HeaderFloatSecondsParameters): StreamableMethod<HeaderFloatSeconds204Response>;
}

export declare interface HeaderFloatSeconds204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderFloatSecondsHeaderParam {
    headers: RawHttpHeadersInput & HeaderFloatSecondsHeaders;
}

export declare interface HeaderFloatSecondsHeaders {
    duration: number;
}

export declare type HeaderFloatSecondsParameters = HeaderFloatSecondsHeaderParam & RequestParameters;

export declare interface HeaderInt32Milliseconds {
    get(options: HeaderInt32MillisecondsParameters): StreamableMethod<HeaderInt32Milliseconds204Response>;
}

export declare interface HeaderInt32Milliseconds204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderInt32MillisecondsArray {
    get(options: HeaderInt32MillisecondsArrayParameters): StreamableMethod<HeaderInt32MillisecondsArray204Response>;
}

export declare interface HeaderInt32MillisecondsArray204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderInt32MillisecondsArrayHeaderParam {
    headers: RawHttpHeadersInput & HeaderInt32MillisecondsArrayHeaders;
}

export declare interface HeaderInt32MillisecondsArrayHeaders {
    duration: string;
}

export declare type HeaderInt32MillisecondsArrayParameters = HeaderInt32MillisecondsArrayHeaderParam & RequestParameters;

export declare interface HeaderInt32MillisecondsHeaderParam {
    headers: RawHttpHeadersInput & HeaderInt32MillisecondsHeaders;
}

export declare interface HeaderInt32MillisecondsHeaders {
    duration: number;
}

export declare type HeaderInt32MillisecondsParameters = HeaderInt32MillisecondsHeaderParam & RequestParameters;

export declare interface HeaderInt32Seconds {
    get(options: HeaderInt32SecondsParameters): StreamableMethod<HeaderInt32Seconds204Response>;
}

export declare interface HeaderInt32Seconds204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderInt32SecondsHeaderParam {
    headers: RawHttpHeadersInput & HeaderInt32SecondsHeaders;
}

export declare interface HeaderInt32SecondsHeaders {
    duration: number;
}

export declare type HeaderInt32SecondsParameters = HeaderInt32SecondsHeaderParam & RequestParameters;

export declare interface HeaderIso8601 {
    get(options: HeaderIso8601Parameters): StreamableMethod<HeaderIso8601204Response>;
}

export declare interface HeaderIso8601204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderIso8601Array {
    get(options: HeaderIso8601ArrayParameters): StreamableMethod<HeaderIso8601Array204Response>;
}

export declare interface HeaderIso8601Array204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderIso8601ArrayHeaderParam {
    headers: RawHttpHeadersInput & HeaderIso8601ArrayHeaders;
}

export declare interface HeaderIso8601ArrayHeaders {
    duration: string;
}

export declare type HeaderIso8601ArrayParameters = HeaderIso8601ArrayHeaderParam & RequestParameters;

export declare interface HeaderIso8601HeaderParam {
    headers: RawHttpHeadersInput & HeaderIso8601Headers;
}

export declare interface HeaderIso8601Headers {
    duration: string;
}

export declare type HeaderIso8601Parameters = HeaderIso8601HeaderParam & RequestParameters;

export declare interface Int32MillisecondsDurationProperty {
    value: number;
}

export declare interface Int32MillisecondsDurationPropertyOutput {
    value: number;
}

export declare interface Int32SecondsDurationProperty {
    value: number;
}

export declare interface Int32SecondsDurationPropertyOutput {
    value: number;
}

export declare interface ISO8601DurationProperty {
    value: string;
}

export declare interface ISO8601DurationPropertyOutput {
    value: string;
}

export declare interface PropertyDefault {
    post(options: PropertyDefaultParameters): StreamableMethod<PropertyDefault200Response>;
}

export declare interface PropertyDefault200Response extends HttpResponse {
    status: "200";
    body: DefaultDurationPropertyOutput;
}

export declare interface PropertyDefaultBodyParam {
    body: DefaultDurationProperty;
}

export declare type PropertyDefaultParameters = PropertyDefaultBodyParam & RequestParameters;

export declare interface PropertyFloat64Milliseconds {
    post(options: PropertyFloat64MillisecondsParameters): StreamableMethod<PropertyFloat64Milliseconds200Response>;
}

export declare interface PropertyFloat64Milliseconds200Response extends HttpResponse {
    status: "200";
    body: Float64MillisecondsDurationPropertyOutput;
}

export declare interface PropertyFloat64MillisecondsBodyParam {
    body: Float64MillisecondsDurationProperty;
}

export declare type PropertyFloat64MillisecondsParameters = PropertyFloat64MillisecondsBodyParam & RequestParameters;

export declare interface PropertyFloat64Seconds {
    post(options: PropertyFloat64SecondsParameters): StreamableMethod<PropertyFloat64Seconds200Response>;
}

export declare interface PropertyFloat64Seconds200Response extends HttpResponse {
    status: "200";
    body: Float64SecondsDurationPropertyOutput;
}

export declare interface PropertyFloat64SecondsBodyParam {
    body: Float64SecondsDurationProperty;
}

export declare type PropertyFloat64SecondsParameters = PropertyFloat64SecondsBodyParam & RequestParameters;

export declare interface PropertyFloatMilliseconds {
    post(options: PropertyFloatMillisecondsParameters): StreamableMethod<PropertyFloatMilliseconds200Response>;
}

export declare interface PropertyFloatMilliseconds200Response extends HttpResponse {
    status: "200";
    body: FloatMillisecondsDurationPropertyOutput;
}

export declare interface PropertyFloatMillisecondsArray {
    post(options: PropertyFloatMillisecondsArrayParameters): StreamableMethod<PropertyFloatMillisecondsArray200Response>;
}

export declare interface PropertyFloatMillisecondsArray200Response extends HttpResponse {
    status: "200";
    body: FloatMillisecondsDurationArrayPropertyOutput;
}

export declare interface PropertyFloatMillisecondsArrayBodyParam {
    body: FloatMillisecondsDurationArrayProperty;
}

export declare type PropertyFloatMillisecondsArrayParameters = PropertyFloatMillisecondsArrayBodyParam & RequestParameters;

export declare interface PropertyFloatMillisecondsBodyParam {
    body: FloatMillisecondsDurationProperty;
}

export declare type PropertyFloatMillisecondsParameters = PropertyFloatMillisecondsBodyParam & RequestParameters;

export declare interface PropertyFloatSeconds {
    post(options: PropertyFloatSecondsParameters): StreamableMethod<PropertyFloatSeconds200Response>;
}

export declare interface PropertyFloatSeconds200Response extends HttpResponse {
    status: "200";
    body: FloatSecondsDurationPropertyOutput;
}

export declare interface PropertyFloatSecondsArray {
    post(options: PropertyFloatSecondsArrayParameters): StreamableMethod<PropertyFloatSecondsArray200Response>;
}

export declare interface PropertyFloatSecondsArray200Response extends HttpResponse {
    status: "200";
    body: FloatSecondsDurationArrayPropertyOutput;
}

export declare interface PropertyFloatSecondsArrayBodyParam {
    body: FloatSecondsDurationArrayProperty;
}

export declare type PropertyFloatSecondsArrayParameters = PropertyFloatSecondsArrayBodyParam & RequestParameters;

export declare interface PropertyFloatSecondsBodyParam {
    body: FloatSecondsDurationProperty;
}

export declare type PropertyFloatSecondsParameters = PropertyFloatSecondsBodyParam & RequestParameters;

export declare interface PropertyInt32Milliseconds {
    post(options: PropertyInt32MillisecondsParameters): StreamableMethod<PropertyInt32Milliseconds200Response>;
}

export declare interface PropertyInt32Milliseconds200Response extends HttpResponse {
    status: "200";
    body: Int32MillisecondsDurationPropertyOutput;
}

export declare interface PropertyInt32MillisecondsBodyParam {
    body: Int32MillisecondsDurationProperty;
}

export declare type PropertyInt32MillisecondsParameters = PropertyInt32MillisecondsBodyParam & RequestParameters;

export declare interface PropertyInt32Seconds {
    post(options: PropertyInt32SecondsParameters): StreamableMethod<PropertyInt32Seconds200Response>;
}

export declare interface PropertyInt32Seconds200Response extends HttpResponse {
    status: "200";
    body: Int32SecondsDurationPropertyOutput;
}

export declare interface PropertyInt32SecondsBodyParam {
    body: Int32SecondsDurationProperty;
}

export declare type PropertyInt32SecondsParameters = PropertyInt32SecondsBodyParam & RequestParameters;

export declare interface PropertyIso8601 {
    post(options: PropertyIso8601Parameters): StreamableMethod<PropertyIso8601200Response>;
}

export declare interface PropertyIso8601200Response extends HttpResponse {
    status: "200";
    body: ISO8601DurationPropertyOutput;
}

export declare interface PropertyIso8601BodyParam {
    body: ISO8601DurationProperty;
}

export declare type PropertyIso8601Parameters = PropertyIso8601BodyParam & RequestParameters;

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
    input: string;
}

export declare interface QueryFloat64Milliseconds {
    get(options: QueryFloat64MillisecondsParameters): StreamableMethod<QueryFloat64Milliseconds204Response>;
}

export declare interface QueryFloat64Milliseconds204Response extends HttpResponse {
    status: "204";
}

export declare type QueryFloat64MillisecondsParameters = QueryFloat64MillisecondsQueryParam & RequestParameters;

export declare interface QueryFloat64MillisecondsQueryParam {
    queryParameters: QueryFloat64MillisecondsQueryParamProperties;
}

export declare interface QueryFloat64MillisecondsQueryParamProperties {
    input: number;
}

export declare interface QueryFloat64Seconds {
    get(options: QueryFloat64SecondsParameters): StreamableMethod<QueryFloat64Seconds204Response>;
}

export declare interface QueryFloat64Seconds204Response extends HttpResponse {
    status: "204";
}

export declare type QueryFloat64SecondsParameters = QueryFloat64SecondsQueryParam & RequestParameters;

export declare interface QueryFloat64SecondsQueryParam {
    queryParameters: QueryFloat64SecondsQueryParamProperties;
}

export declare interface QueryFloat64SecondsQueryParamProperties {
    input: number;
}

export declare interface QueryFloatMilliseconds {
    get(options: QueryFloatMillisecondsParameters): StreamableMethod<QueryFloatMilliseconds204Response>;
}

export declare interface QueryFloatMilliseconds204Response extends HttpResponse {
    status: "204";
}

export declare type QueryFloatMillisecondsParameters = QueryFloatMillisecondsQueryParam & RequestParameters;

export declare interface QueryFloatMillisecondsQueryParam {
    queryParameters: QueryFloatMillisecondsQueryParamProperties;
}

export declare interface QueryFloatMillisecondsQueryParamProperties {
    input: number;
}

export declare interface QueryFloatSeconds {
    get(options: QueryFloatSecondsParameters): StreamableMethod<QueryFloatSeconds204Response>;
}

export declare interface QueryFloatSeconds204Response extends HttpResponse {
    status: "204";
}

export declare type QueryFloatSecondsParameters = QueryFloatSecondsQueryParam & RequestParameters;

export declare interface QueryFloatSecondsQueryParam {
    queryParameters: QueryFloatSecondsQueryParamProperties;
}

export declare interface QueryFloatSecondsQueryParamProperties {
    input: number;
}

export declare interface QueryInt32Milliseconds {
    get(options: QueryInt32MillisecondsParameters): StreamableMethod<QueryInt32Milliseconds204Response>;
}

export declare interface QueryInt32Milliseconds204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryInt32MillisecondsArray {
    get(options: QueryInt32MillisecondsArrayParameters): StreamableMethod<QueryInt32MillisecondsArray204Response>;
}

export declare interface QueryInt32MillisecondsArray204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryInt32MillisecondsArrayInputQueryParam {
    value: number[];
    explode: false;
    style: "form";
}

export declare type QueryInt32MillisecondsArrayParameters = QueryInt32MillisecondsArrayQueryParam & RequestParameters;

export declare interface QueryInt32MillisecondsArrayQueryParam {
    queryParameters: QueryInt32MillisecondsArrayQueryParamProperties;
}

export declare interface QueryInt32MillisecondsArrayQueryParamProperties {
    input: number[] | QueryInt32MillisecondsArrayInputQueryParam;
}

export declare type QueryInt32MillisecondsParameters = QueryInt32MillisecondsQueryParam & RequestParameters;

export declare interface QueryInt32MillisecondsQueryParam {
    queryParameters: QueryInt32MillisecondsQueryParamProperties;
}

export declare interface QueryInt32MillisecondsQueryParamProperties {
    input: number;
}

export declare interface QueryInt32Seconds {
    get(options: QueryInt32SecondsParameters): StreamableMethod<QueryInt32Seconds204Response>;
}

export declare interface QueryInt32Seconds204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryInt32SecondsArray {
    get(options: QueryInt32SecondsArrayParameters): StreamableMethod<QueryInt32SecondsArray204Response>;
}

export declare interface QueryInt32SecondsArray204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryInt32SecondsArrayInputQueryParam {
    value: number[];
    explode: false;
    style: "form";
}

export declare type QueryInt32SecondsArrayParameters = QueryInt32SecondsArrayQueryParam & RequestParameters;

export declare interface QueryInt32SecondsArrayQueryParam {
    queryParameters: QueryInt32SecondsArrayQueryParamProperties;
}

export declare interface QueryInt32SecondsArrayQueryParamProperties {
    input: number[] | QueryInt32SecondsArrayInputQueryParam;
}

export declare type QueryInt32SecondsParameters = QueryInt32SecondsQueryParam & RequestParameters;

export declare interface QueryInt32SecondsQueryParam {
    queryParameters: QueryInt32SecondsQueryParamProperties;
}

export declare interface QueryInt32SecondsQueryParamProperties {
    input: number;
}

export declare interface QueryIso8601 {
    get(options: QueryIso8601Parameters): StreamableMethod<QueryIso8601204Response>;
}

export declare interface QueryIso8601204Response extends HttpResponse {
    status: "204";
}

export declare type QueryIso8601Parameters = QueryIso8601QueryParam & RequestParameters;

export declare interface QueryIso8601QueryParam {
    queryParameters: QueryIso8601QueryParamProperties;
}

export declare interface QueryIso8601QueryParamProperties {
    input: string;
}

export declare interface Routes {
    (path: "/encode/duration/query/default"): QueryDefault;
    (path: "/encode/duration/query/iso8601"): QueryIso8601;
    (path: "/encode/duration/query/int32-seconds"): QueryInt32Seconds;
    (path: "/encode/duration/query/float-seconds"): QueryFloatSeconds;
    (path: "/encode/duration/query/float64-seconds"): QueryFloat64Seconds;
    (path: "/encode/duration/query/int32-milliseconds"): QueryInt32Milliseconds;
    (path: "/encode/duration/query/float-milliseconds"): QueryFloatMilliseconds;
    (path: "/encode/duration/query/float64-milliseconds"): QueryFloat64Milliseconds;
    (path: "/encode/duration/query/int32-seconds-array"): QueryInt32SecondsArray;
    (path: "/encode/duration/query/int32-milliseconds-array"): QueryInt32MillisecondsArray;
    (path: "/encode/duration/property/default"): PropertyDefault;
    (path: "/encode/duration/property/iso8601"): PropertyIso8601;
    (path: "/encode/duration/property/int32-seconds"): PropertyInt32Seconds;
    (path: "/encode/duration/property/float-seconds"): PropertyFloatSeconds;
    (path: "/encode/duration/property/float64-seconds"): PropertyFloat64Seconds;
    (path: "/encode/duration/property/int32-milliseconds"): PropertyInt32Milliseconds;
    (path: "/encode/duration/property/float-milliseconds"): PropertyFloatMilliseconds;
    (path: "/encode/duration/property/float64-milliseconds"): PropertyFloat64Milliseconds;
    (path: "/encode/duration/property/float-seconds-array"): PropertyFloatSecondsArray;
    (path: "/encode/duration/property/float-milliseconds-array"): PropertyFloatMillisecondsArray;
    (path: "/encode/duration/header/default"): HeaderDefault;
    (path: "/encode/duration/header/iso8601"): HeaderIso8601;
    (path: "/encode/duration/header/iso8601-array"): HeaderIso8601Array;
    (path: "/encode/duration/header/int32-seconds"): HeaderInt32Seconds;
    (path: "/encode/duration/header/float-seconds"): HeaderFloatSeconds;
    (path: "/encode/duration/header/float64-seconds"): HeaderFloat64Seconds;
    (path: "/encode/duration/header/int32-milliseconds"): HeaderInt32Milliseconds;
    (path: "/encode/duration/header/float-milliseconds"): HeaderFloatMilliseconds;
    (path: "/encode/duration/header/float64-milliseconds"): HeaderFloat64Milliseconds;
    (path: "/encode/duration/header/int32-milliseconds-array"): HeaderInt32MillisecondsArray;
}

export { }
