import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RawHttpHeadersInput } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

export declare function buildCsvCollection(items: string[] | number[]): string;

export declare function buildMultiCollection(items: string[], parameterName: string): string;

export declare type CollectionFormatClient = Client & {
    path: Routes;
};

export declare interface CollectionFormatClientOptions extends ClientOptions {
}

declare function createClient(options?: CollectionFormatClientOptions): CollectionFormatClient;
export default createClient;

export declare interface HeaderCsv {
    get(options: HeaderCsvParameters): StreamableMethod<HeaderCsv204Response>;
}

export declare interface HeaderCsv204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderCsvHeaderParam {
    headers: RawHttpHeadersInput & HeaderCsvHeaders;
}

export declare interface HeaderCsvHeaders {
    colors: string;
}

export declare type HeaderCsvParameters = HeaderCsvHeaderParam & RequestParameters;

export declare interface QueryCsv {
    get(options: QueryCsvParameters): StreamableMethod<QueryCsv204Response>;
}

export declare interface QueryCsv204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryCsvColorsQueryParam {
    value: string[];
    explode: false;
    style: "form";
}

export declare type QueryCsvParameters = QueryCsvQueryParam & RequestParameters;

export declare interface QueryCsvQueryParam {
    queryParameters: QueryCsvQueryParamProperties;
}

export declare interface QueryCsvQueryParamProperties {
    colors: string[] | QueryCsvColorsQueryParam;
}

export declare interface QueryMulti {
    get(options: QueryMultiParameters): StreamableMethod<QueryMulti204Response>;
}

export declare interface QueryMulti204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryMultiColorsQueryParam {
    value: string[];
    explode: true;
    style: "form";
}

export declare type QueryMultiParameters = QueryMultiQueryParam & RequestParameters;

export declare interface QueryMultiQueryParam {
    queryParameters: QueryMultiQueryParamProperties;
}

export declare interface QueryMultiQueryParamProperties {
    colors: QueryMultiColorsQueryParam | string;
}

export declare interface QueryPipes {
    get(options: QueryPipesParameters): StreamableMethod<QueryPipes204Response>;
}

export declare interface QueryPipes204Response extends HttpResponse {
    status: "204";
}

export declare interface QueryPipesColorsQueryParam {
    value: string[];
    explode: false;
    style: "pipeDelimited";
}

export declare type QueryPipesParameters = QueryPipesQueryParam & RequestParameters;

export declare interface QueryPipesQueryParam {
    queryParameters: QueryPipesQueryParamProperties;
}

export declare interface QueryPipesQueryParamProperties {
    colors: QueryPipesColorsQueryParam;
}

export declare interface QuerySsv {
    get(options: QuerySsvParameters): StreamableMethod<QuerySsv204Response>;
}

export declare interface QuerySsv204Response extends HttpResponse {
    status: "204";
}

export declare interface QuerySsvColorsQueryParam {
    value: string[];
    explode: false;
    style: "spaceDelimited";
}

export declare type QuerySsvParameters = QuerySsvQueryParam & RequestParameters;

export declare interface QuerySsvQueryParam {
    queryParameters: QuerySsvQueryParamProperties;
}

export declare interface QuerySsvQueryParamProperties {
    colors: QuerySsvColorsQueryParam;
}

export declare interface Routes {
    (path: "/parameters/collection-format/query/multi"): QueryMulti;
    (path: "/parameters/collection-format/query/ssv"): QuerySsv;
    (path: "/parameters/collection-format/query/pipes"): QueryPipes;
    (path: "/parameters/collection-format/query/csv"): QueryCsv;
    (path: "/parameters/collection-format/header/csv"): HeaderCsv;
}

export { }
