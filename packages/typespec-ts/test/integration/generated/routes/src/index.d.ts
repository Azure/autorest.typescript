import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare function buildAllowReservedValue<ValueType>(value: ValueType): {
    readonly allowReserved: true;
    readonly value: ValueType;
};

export declare function buildExplodedFormStyleValue<ValueType>(value: ValueType): {
    readonly explode: true;
    readonly style: "form";
    readonly value: ValueType;
};

export declare function buildUnexplodedFormStyleValue<ValueType>(value: ValueType): {
    readonly explode: false;
    readonly style: "form";
    readonly value: ValueType;
};

declare function createClient(options?: RoutesClientOptions): RoutesClient;
export default createClient;

export declare interface Fixed {
    get(options?: FixedParameters): StreamableMethod<Fixed204Response>;
}

export declare interface Fixed204Response extends HttpResponse {
    status: "204";
}

export declare type FixedParameters = RequestParameters;

export declare interface InInterfaceFixed {
    get(options?: InInterfaceFixedParameters): StreamableMethod<InInterfaceFixed204Response>;
}

export declare interface InInterfaceFixed204Response extends HttpResponse {
    status: "204";
}

export declare type InInterfaceFixedParameters = RequestParameters;

export declare interface PathParametersAnnotationOnly {
    get(options?: PathParametersAnnotationOnlyParameters): StreamableMethod<PathParametersAnnotationOnly204Response>;
}

export declare interface PathParametersAnnotationOnly204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersAnnotationOnlyParameters = RequestParameters;

export declare interface PathParametersExplicit {
    get(options?: PathParametersExplicitParameters): StreamableMethod<PathParametersExplicit204Response>;
}

export declare interface PathParametersExplicit204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersExplicitParameters = RequestParameters;

export declare interface PathParametersLabelExpansionExplodeArray {
    get(options?: PathParametersLabelExpansionExplodeArrayParameters): StreamableMethod<PathParametersLabelExpansionExplodeArray204Response>;
}

export declare interface PathParametersLabelExpansionExplodeArray204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersLabelExpansionExplodeArrayParameters = RequestParameters;

export declare interface PathParametersLabelExpansionExplodePrimitive {
    get(options?: PathParametersLabelExpansionExplodePrimitiveParameters): StreamableMethod<PathParametersLabelExpansionExplodePrimitive204Response>;
}

export declare interface PathParametersLabelExpansionExplodePrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersLabelExpansionExplodePrimitiveParameters = RequestParameters;

export declare interface PathParametersLabelExpansionExplodeRecord {
    get(options?: PathParametersLabelExpansionExplodeRecordParameters): StreamableMethod<PathParametersLabelExpansionExplodeRecord204Response>;
}

export declare interface PathParametersLabelExpansionExplodeRecord204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersLabelExpansionExplodeRecordParameters = RequestParameters;

export declare interface PathParametersLabelExpansionStandardArray {
    get(options?: PathParametersLabelExpansionStandardArrayParameters): StreamableMethod<PathParametersLabelExpansionStandardArray204Response>;
}

export declare interface PathParametersLabelExpansionStandardArray204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersLabelExpansionStandardArrayParameters = RequestParameters;

export declare interface PathParametersLabelExpansionStandardPrimitive {
    get(options?: PathParametersLabelExpansionStandardPrimitiveParameters): StreamableMethod<PathParametersLabelExpansionStandardPrimitive204Response>;
}

export declare interface PathParametersLabelExpansionStandardPrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersLabelExpansionStandardPrimitiveParameters = RequestParameters;

export declare interface PathParametersLabelExpansionStandardRecord {
    get(options?: PathParametersLabelExpansionStandardRecordParameters): StreamableMethod<PathParametersLabelExpansionStandardRecord204Response>;
}

export declare interface PathParametersLabelExpansionStandardRecord204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersLabelExpansionStandardRecordParameters = RequestParameters;

export declare interface PathParametersMatrixExpansionExplodeArray {
    get(options?: PathParametersMatrixExpansionExplodeArrayParameters): StreamableMethod<PathParametersMatrixExpansionExplodeArray204Response>;
}

export declare interface PathParametersMatrixExpansionExplodeArray204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersMatrixExpansionExplodeArrayParameters = RequestParameters;

export declare interface PathParametersMatrixExpansionExplodePrimitive {
    get(options?: PathParametersMatrixExpansionExplodePrimitiveParameters): StreamableMethod<PathParametersMatrixExpansionExplodePrimitive204Response>;
}

export declare interface PathParametersMatrixExpansionExplodePrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersMatrixExpansionExplodePrimitiveParameters = RequestParameters;

export declare interface PathParametersMatrixExpansionExplodeRecord {
    get(options?: PathParametersMatrixExpansionExplodeRecordParameters): StreamableMethod<PathParametersMatrixExpansionExplodeRecord204Response>;
}

export declare interface PathParametersMatrixExpansionExplodeRecord204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersMatrixExpansionExplodeRecordParameters = RequestParameters;

export declare interface PathParametersMatrixExpansionStandardArray {
    get(options?: PathParametersMatrixExpansionStandardArrayParameters): StreamableMethod<PathParametersMatrixExpansionStandardArray204Response>;
}

export declare interface PathParametersMatrixExpansionStandardArray204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersMatrixExpansionStandardArrayParameters = RequestParameters;

export declare interface PathParametersMatrixExpansionStandardPrimitive {
    get(options?: PathParametersMatrixExpansionStandardPrimitiveParameters): StreamableMethod<PathParametersMatrixExpansionStandardPrimitive204Response>;
}

export declare interface PathParametersMatrixExpansionStandardPrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersMatrixExpansionStandardPrimitiveParameters = RequestParameters;

export declare interface PathParametersMatrixExpansionStandardRecord {
    get(options?: PathParametersMatrixExpansionStandardRecordParameters): StreamableMethod<PathParametersMatrixExpansionStandardRecord204Response>;
}

export declare interface PathParametersMatrixExpansionStandardRecord204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersMatrixExpansionStandardRecordParameters = RequestParameters;

export declare interface PathParametersPathExpansionExplodeArray {
    get(options?: PathParametersPathExpansionExplodeArrayParameters): StreamableMethod<PathParametersPathExpansionExplodeArray204Response>;
}

export declare interface PathParametersPathExpansionExplodeArray204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersPathExpansionExplodeArrayParameters = RequestParameters;

export declare interface PathParametersPathExpansionExplodePrimitive {
    get(options?: PathParametersPathExpansionExplodePrimitiveParameters): StreamableMethod<PathParametersPathExpansionExplodePrimitive204Response>;
}

export declare interface PathParametersPathExpansionExplodePrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersPathExpansionExplodePrimitiveParameters = RequestParameters;

export declare interface PathParametersPathExpansionExplodeRecord {
    get(options?: PathParametersPathExpansionExplodeRecordParameters): StreamableMethod<PathParametersPathExpansionExplodeRecord204Response>;
}

export declare interface PathParametersPathExpansionExplodeRecord204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersPathExpansionExplodeRecordParameters = RequestParameters;

export declare interface PathParametersPathExpansionStandardArray {
    get(options?: PathParametersPathExpansionStandardArrayParameters): StreamableMethod<PathParametersPathExpansionStandardArray204Response>;
}

export declare interface PathParametersPathExpansionStandardArray204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersPathExpansionStandardArrayParameters = RequestParameters;

export declare interface PathParametersPathExpansionStandardPrimitive {
    get(options?: PathParametersPathExpansionStandardPrimitiveParameters): StreamableMethod<PathParametersPathExpansionStandardPrimitive204Response>;
}

export declare interface PathParametersPathExpansionStandardPrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersPathExpansionStandardPrimitiveParameters = RequestParameters;

export declare interface PathParametersPathExpansionStandardRecord {
    get(options?: PathParametersPathExpansionStandardRecordParameters): StreamableMethod<PathParametersPathExpansionStandardRecord204Response>;
}

export declare interface PathParametersPathExpansionStandardRecord204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersPathExpansionStandardRecordParameters = RequestParameters;

export declare interface PathParametersReservedExpansionAnnotation {
    get(options?: PathParametersReservedExpansionAnnotationParameters): StreamableMethod<PathParametersReservedExpansionAnnotation204Response>;
}

export declare interface PathParametersReservedExpansionAnnotation204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersReservedExpansionAnnotationParameters = RequestParameters;

export declare interface PathParametersReservedExpansionAnnotationParamPathParam {
    value: string;
    allowReserved: true;
}

export declare interface PathParametersReservedExpansionTemplate {
    get(options?: PathParametersReservedExpansionTemplateParameters): StreamableMethod<PathParametersReservedExpansionTemplate204Response>;
}

export declare interface PathParametersReservedExpansionTemplate204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersReservedExpansionTemplateParameters = RequestParameters;

export declare interface PathParametersReservedExpansionTemplateParamPathParam {
    value: string;
    allowReserved: true;
}

export declare interface PathParametersSimpleExpansionExplodeArray {
    get(options?: PathParametersSimpleExpansionExplodeArrayParameters): StreamableMethod<PathParametersSimpleExpansionExplodeArray204Response>;
}

export declare interface PathParametersSimpleExpansionExplodeArray204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersSimpleExpansionExplodeArrayParameters = RequestParameters;

export declare interface PathParametersSimpleExpansionExplodePrimitive {
    get(options?: PathParametersSimpleExpansionExplodePrimitiveParameters): StreamableMethod<PathParametersSimpleExpansionExplodePrimitive204Response>;
}

export declare interface PathParametersSimpleExpansionExplodePrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersSimpleExpansionExplodePrimitiveParameters = RequestParameters;

export declare interface PathParametersSimpleExpansionExplodeRecord {
    get(options?: PathParametersSimpleExpansionExplodeRecordParameters): StreamableMethod<PathParametersSimpleExpansionExplodeRecord204Response>;
}

export declare interface PathParametersSimpleExpansionExplodeRecord204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersSimpleExpansionExplodeRecordParameters = RequestParameters;

export declare interface PathParametersSimpleExpansionStandardArray {
    get(options?: PathParametersSimpleExpansionStandardArrayParameters): StreamableMethod<PathParametersSimpleExpansionStandardArray204Response>;
}

export declare interface PathParametersSimpleExpansionStandardArray204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersSimpleExpansionStandardArrayParameters = RequestParameters;

export declare interface PathParametersSimpleExpansionStandardPrimitive {
    get(options?: PathParametersSimpleExpansionStandardPrimitiveParameters): StreamableMethod<PathParametersSimpleExpansionStandardPrimitive204Response>;
}

export declare interface PathParametersSimpleExpansionStandardPrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersSimpleExpansionStandardPrimitiveParameters = RequestParameters;

export declare interface PathParametersSimpleExpansionStandardRecord {
    get(options?: PathParametersSimpleExpansionStandardRecordParameters): StreamableMethod<PathParametersSimpleExpansionStandardRecord204Response>;
}

export declare interface PathParametersSimpleExpansionStandardRecord204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersSimpleExpansionStandardRecordParameters = RequestParameters;

export declare interface PathParametersTemplateOnly {
    get(options?: PathParametersTemplateOnlyParameters): StreamableMethod<PathParametersTemplateOnly204Response>;
}

export declare interface PathParametersTemplateOnly204Response extends HttpResponse {
    status: "204";
}

export declare type PathParametersTemplateOnlyParameters = RequestParameters;

export declare interface QueryParametersAnnotationOnly {
    get(options: QueryParametersAnnotationOnlyParameters): StreamableMethod<QueryParametersAnnotationOnly204Response>;
}

export declare interface QueryParametersAnnotationOnly204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersAnnotationOnlyParameters = QueryParametersAnnotationOnlyQueryParam & RequestParameters;

export declare interface QueryParametersAnnotationOnlyQueryParam {
    queryParameters: QueryParametersAnnotationOnlyQueryParamProperties;
}

export declare interface QueryParametersAnnotationOnlyQueryParamProperties {
    param: string;
}

export declare interface QueryParametersExplicit {
    get(options: QueryParametersExplicitParameters): StreamableMethod<QueryParametersExplicit204Response>;
}

export declare interface QueryParametersExplicit204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersExplicitParameters = QueryParametersExplicitQueryParam & RequestParameters;

export declare interface QueryParametersExplicitQueryParam {
    queryParameters: QueryParametersExplicitQueryParamProperties;
}

export declare interface QueryParametersExplicitQueryParamProperties {
    param: string;
}

export declare interface QueryParametersQueryContinuationExplodeArray {
    get(options: QueryParametersQueryContinuationExplodeArrayParameters): StreamableMethod<QueryParametersQueryContinuationExplodeArray204Response>;
}

export declare interface QueryParametersQueryContinuationExplodeArray204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryContinuationExplodeArrayParameters = QueryParametersQueryContinuationExplodeArrayQueryParam & RequestParameters;

export declare interface QueryParametersQueryContinuationExplodeArrayParamQueryParam {
    value: string[];
    explode: true;
    style: "form";
}

export declare interface QueryParametersQueryContinuationExplodeArrayQueryParam {
    queryParameters: QueryParametersQueryContinuationExplodeArrayQueryParamProperties;
}

export declare interface QueryParametersQueryContinuationExplodeArrayQueryParamProperties {
    param: QueryParametersQueryContinuationExplodeArrayParamQueryParam;
}

export declare interface QueryParametersQueryContinuationExplodePrimitive {
    get(options: QueryParametersQueryContinuationExplodePrimitiveParameters): StreamableMethod<QueryParametersQueryContinuationExplodePrimitive204Response>;
}

export declare interface QueryParametersQueryContinuationExplodePrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryContinuationExplodePrimitiveParameters = QueryParametersQueryContinuationExplodePrimitiveQueryParam & RequestParameters;

export declare interface QueryParametersQueryContinuationExplodePrimitiveQueryParam {
    queryParameters: QueryParametersQueryContinuationExplodePrimitiveQueryParamProperties;
}

export declare interface QueryParametersQueryContinuationExplodePrimitiveQueryParamProperties {
    param: string;
}

export declare interface QueryParametersQueryContinuationExplodeRecord {
    get(options: QueryParametersQueryContinuationExplodeRecordParameters): StreamableMethod<QueryParametersQueryContinuationExplodeRecord204Response>;
}

export declare interface QueryParametersQueryContinuationExplodeRecord204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryContinuationExplodeRecordParameters = QueryParametersQueryContinuationExplodeRecordQueryParam & RequestParameters;

export declare interface QueryParametersQueryContinuationExplodeRecordParamQueryParam {
    value: Record<string, number>;
    explode: true;
    style: "form";
}

export declare interface QueryParametersQueryContinuationExplodeRecordQueryParam {
    queryParameters: QueryParametersQueryContinuationExplodeRecordQueryParamProperties;
}

export declare interface QueryParametersQueryContinuationExplodeRecordQueryParamProperties {
    param: QueryParametersQueryContinuationExplodeRecordParamQueryParam;
}

export declare interface QueryParametersQueryContinuationStandardArray {
    get(options: QueryParametersQueryContinuationStandardArrayParameters): StreamableMethod<QueryParametersQueryContinuationStandardArray204Response>;
}

export declare interface QueryParametersQueryContinuationStandardArray204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryContinuationStandardArrayParameters = QueryParametersQueryContinuationStandardArrayQueryParam & RequestParameters;

export declare interface QueryParametersQueryContinuationStandardArrayParamQueryParam {
    value: string[];
    explode: false;
    style: "form";
}

export declare interface QueryParametersQueryContinuationStandardArrayQueryParam {
    queryParameters: QueryParametersQueryContinuationStandardArrayQueryParamProperties;
}

export declare interface QueryParametersQueryContinuationStandardArrayQueryParamProperties {
    param: string[] | QueryParametersQueryContinuationStandardArrayParamQueryParam;
}

export declare interface QueryParametersQueryContinuationStandardPrimitive {
    get(options: QueryParametersQueryContinuationStandardPrimitiveParameters): StreamableMethod<QueryParametersQueryContinuationStandardPrimitive204Response>;
}

export declare interface QueryParametersQueryContinuationStandardPrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryContinuationStandardPrimitiveParameters = QueryParametersQueryContinuationStandardPrimitiveQueryParam & RequestParameters;

export declare interface QueryParametersQueryContinuationStandardPrimitiveQueryParam {
    queryParameters: QueryParametersQueryContinuationStandardPrimitiveQueryParamProperties;
}

export declare interface QueryParametersQueryContinuationStandardPrimitiveQueryParamProperties {
    param: string;
}

export declare interface QueryParametersQueryContinuationStandardRecord {
    get(options: QueryParametersQueryContinuationStandardRecordParameters): StreamableMethod<QueryParametersQueryContinuationStandardRecord204Response>;
}

export declare interface QueryParametersQueryContinuationStandardRecord204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryContinuationStandardRecordParameters = QueryParametersQueryContinuationStandardRecordQueryParam & RequestParameters;

export declare interface QueryParametersQueryContinuationStandardRecordParamQueryParam {
    value: Record<string, number>;
    explode: false;
    style: "form";
}

export declare interface QueryParametersQueryContinuationStandardRecordQueryParam {
    queryParameters: QueryParametersQueryContinuationStandardRecordQueryParamProperties;
}

export declare interface QueryParametersQueryContinuationStandardRecordQueryParamProperties {
    param: QueryParametersQueryContinuationStandardRecordParamQueryParam;
}

export declare interface QueryParametersQueryExpansionExplodeArray {
    get(options: QueryParametersQueryExpansionExplodeArrayParameters): StreamableMethod<QueryParametersQueryExpansionExplodeArray204Response>;
}

export declare interface QueryParametersQueryExpansionExplodeArray204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryExpansionExplodeArrayParameters = QueryParametersQueryExpansionExplodeArrayQueryParam & RequestParameters;

export declare interface QueryParametersQueryExpansionExplodeArrayParamQueryParam {
    value: string[];
    explode: true;
    style: "form";
}

export declare interface QueryParametersQueryExpansionExplodeArrayQueryParam {
    queryParameters: QueryParametersQueryExpansionExplodeArrayQueryParamProperties;
}

export declare interface QueryParametersQueryExpansionExplodeArrayQueryParamProperties {
    param: QueryParametersQueryExpansionExplodeArrayParamQueryParam;
}

export declare interface QueryParametersQueryExpansionExplodePrimitive {
    get(options: QueryParametersQueryExpansionExplodePrimitiveParameters): StreamableMethod<QueryParametersQueryExpansionExplodePrimitive204Response>;
}

export declare interface QueryParametersQueryExpansionExplodePrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryExpansionExplodePrimitiveParameters = QueryParametersQueryExpansionExplodePrimitiveQueryParam & RequestParameters;

export declare interface QueryParametersQueryExpansionExplodePrimitiveQueryParam {
    queryParameters: QueryParametersQueryExpansionExplodePrimitiveQueryParamProperties;
}

export declare interface QueryParametersQueryExpansionExplodePrimitiveQueryParamProperties {
    param: string;
}

export declare interface QueryParametersQueryExpansionExplodeRecord {
    get(options: QueryParametersQueryExpansionExplodeRecordParameters): StreamableMethod<QueryParametersQueryExpansionExplodeRecord204Response>;
}

export declare interface QueryParametersQueryExpansionExplodeRecord204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryExpansionExplodeRecordParameters = QueryParametersQueryExpansionExplodeRecordQueryParam & RequestParameters;

export declare interface QueryParametersQueryExpansionExplodeRecordParamQueryParam {
    value: Record<string, number>;
    explode: true;
    style: "form";
}

export declare interface QueryParametersQueryExpansionExplodeRecordQueryParam {
    queryParameters: QueryParametersQueryExpansionExplodeRecordQueryParamProperties;
}

export declare interface QueryParametersQueryExpansionExplodeRecordQueryParamProperties {
    param: QueryParametersQueryExpansionExplodeRecordParamQueryParam;
}

export declare interface QueryParametersQueryExpansionStandardArray {
    get(options: QueryParametersQueryExpansionStandardArrayParameters): StreamableMethod<QueryParametersQueryExpansionStandardArray204Response>;
}

export declare interface QueryParametersQueryExpansionStandardArray204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryExpansionStandardArrayParameters = QueryParametersQueryExpansionStandardArrayQueryParam & RequestParameters;

export declare interface QueryParametersQueryExpansionStandardArrayParamQueryParam {
    value: string[];
    explode: false;
    style: "form";
}

export declare interface QueryParametersQueryExpansionStandardArrayQueryParam {
    queryParameters: QueryParametersQueryExpansionStandardArrayQueryParamProperties;
}

export declare interface QueryParametersQueryExpansionStandardArrayQueryParamProperties {
    param: string[] | QueryParametersQueryExpansionStandardArrayParamQueryParam;
}

export declare interface QueryParametersQueryExpansionStandardPrimitive {
    get(options: QueryParametersQueryExpansionStandardPrimitiveParameters): StreamableMethod<QueryParametersQueryExpansionStandardPrimitive204Response>;
}

export declare interface QueryParametersQueryExpansionStandardPrimitive204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryExpansionStandardPrimitiveParameters = QueryParametersQueryExpansionStandardPrimitiveQueryParam & RequestParameters;

export declare interface QueryParametersQueryExpansionStandardPrimitiveQueryParam {
    queryParameters: QueryParametersQueryExpansionStandardPrimitiveQueryParamProperties;
}

export declare interface QueryParametersQueryExpansionStandardPrimitiveQueryParamProperties {
    param: string;
}

export declare interface QueryParametersQueryExpansionStandardRecord {
    get(options: QueryParametersQueryExpansionStandardRecordParameters): StreamableMethod<QueryParametersQueryExpansionStandardRecord204Response>;
}

export declare interface QueryParametersQueryExpansionStandardRecord204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersQueryExpansionStandardRecordParameters = QueryParametersQueryExpansionStandardRecordQueryParam & RequestParameters;

export declare interface QueryParametersQueryExpansionStandardRecordParamQueryParam {
    value: Record<string, number>;
    explode: false;
    style: "form";
}

export declare interface QueryParametersQueryExpansionStandardRecordQueryParam {
    queryParameters: QueryParametersQueryExpansionStandardRecordQueryParamProperties;
}

export declare interface QueryParametersQueryExpansionStandardRecordQueryParamProperties {
    param: QueryParametersQueryExpansionStandardRecordParamQueryParam;
}

export declare interface QueryParametersTemplateOnly {
    get(options: QueryParametersTemplateOnlyParameters): StreamableMethod<QueryParametersTemplateOnly204Response>;
}

export declare interface QueryParametersTemplateOnly204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParametersTemplateOnlyParameters = QueryParametersTemplateOnlyQueryParam & RequestParameters;

export declare interface QueryParametersTemplateOnlyQueryParam {
    queryParameters: QueryParametersTemplateOnlyQueryParamProperties;
}

export declare interface QueryParametersTemplateOnlyQueryParamProperties {
    param: string;
}

export declare interface Routes {
    (path: "/routes/fixed"): Fixed;
    (path: "/routes/path/template-only/{param}", param: string): PathParametersTemplateOnly;
    (path: "/routes/path/explicit/{param}", param: string): PathParametersExplicit;
    (path: "/routes/path/annotation-only/{param}", param: string): PathParametersAnnotationOnly;
    (path: "/routes/path/reserved-expansion/template/{param}", param: PathParametersReservedExpansionTemplateParamPathParam): PathParametersReservedExpansionTemplate;
    (path: "/routes/path/reserved-expansion/annotation/{param}", param: PathParametersReservedExpansionAnnotationParamPathParam): PathParametersReservedExpansionAnnotation;
    (path: "/routes/path/simple/standard/primitive{param}", param: string): PathParametersSimpleExpansionStandardPrimitive;
    (path: "/routes/path/simple/standard/array{param}", param: string[]): PathParametersSimpleExpansionStandardArray;
    (path: "/routes/path/simple/standard/record{param}", param: Record<string, number>): PathParametersSimpleExpansionStandardRecord;
    (path: "/routes/path/simple/explode/primitive{param}", param: string): PathParametersSimpleExpansionExplodePrimitive;
    (path: "/routes/path/simple/explode/array{param}", param: string[]): PathParametersSimpleExpansionExplodeArray;
    (path: "/routes/path/simple/explode/record{param}", param: Record<string, number>): PathParametersSimpleExpansionExplodeRecord;
    (path: "/routes/path/path/standard/primitive{param}", param: string): PathParametersPathExpansionStandardPrimitive;
    (path: "/routes/path/path/standard/array{param}", param: string[]): PathParametersPathExpansionStandardArray;
    (path: "/routes/path/path/standard/record{param}", param: Record<string, number>): PathParametersPathExpansionStandardRecord;
    (path: "/routes/path/path/explode/primitive{param}", param: string): PathParametersPathExpansionExplodePrimitive;
    (path: "/routes/path/path/explode/array{param}", param: string[]): PathParametersPathExpansionExplodeArray;
    (path: "/routes/path/path/explode/record{param}", param: Record<string, number>): PathParametersPathExpansionExplodeRecord;
    (path: "/routes/path/label/standard/primitive{param}", param: string): PathParametersLabelExpansionStandardPrimitive;
    (path: "/routes/path/label/standard/array{param}", param: string[]): PathParametersLabelExpansionStandardArray;
    (path: "/routes/path/label/standard/record{param}", param: Record<string, number>): PathParametersLabelExpansionStandardRecord;
    (path: "/routes/path/label/explode/primitive{param}", param: string): PathParametersLabelExpansionExplodePrimitive;
    (path: "/routes/path/label/explode/array{param}", param: string[]): PathParametersLabelExpansionExplodeArray;
    (path: "/routes/path/label/explode/record{param}", param: Record<string, number>): PathParametersLabelExpansionExplodeRecord;
    (path: "/routes/path/matrix/standard/primitive{param}", param: string): PathParametersMatrixExpansionStandardPrimitive;
    (path: "/routes/path/matrix/standard/array{param}", param: string[]): PathParametersMatrixExpansionStandardArray;
    (path: "/routes/path/matrix/standard/record{param}", param: Record<string, number>): PathParametersMatrixExpansionStandardRecord;
    (path: "/routes/path/matrix/explode/primitive{param}", param: string): PathParametersMatrixExpansionExplodePrimitive;
    (path: "/routes/path/matrix/explode/array{param}", param: string[]): PathParametersMatrixExpansionExplodeArray;
    (path: "/routes/path/matrix/explode/record{param}", param: Record<string, number>): PathParametersMatrixExpansionExplodeRecord;
    (path: "/routes/query/template-only"): QueryParametersTemplateOnly;
    (path: "/routes/query/explicit"): QueryParametersExplicit;
    (path: "/routes/query/annotation-only"): QueryParametersAnnotationOnly;
    (path: "/routes/query/query-expansion/standard/primitive"): QueryParametersQueryExpansionStandardPrimitive;
    (path: "/routes/query/query-expansion/standard/array"): QueryParametersQueryExpansionStandardArray;
    (path: "/routes/query/query-expansion/standard/record"): QueryParametersQueryExpansionStandardRecord;
    (path: "/routes/query/query-expansion/explode/primitive"): QueryParametersQueryExpansionExplodePrimitive;
    (path: "/routes/query/query-expansion/explode/array"): QueryParametersQueryExpansionExplodeArray;
    (path: "/routes/query/query-expansion/explode/record"): QueryParametersQueryExpansionExplodeRecord;
    (path: "/routes/query/query-continuation/standard/primitive?fixed=true"): QueryParametersQueryContinuationStandardPrimitive;
    (path: "/routes/query/query-continuation/standard/array?fixed=true"): QueryParametersQueryContinuationStandardArray;
    (path: "/routes/query/query-continuation/standard/record?fixed=true"): QueryParametersQueryContinuationStandardRecord;
    (path: "/routes/query/query-continuation/explode/primitive?fixed=true"): QueryParametersQueryContinuationExplodePrimitive;
    (path: "/routes/query/query-continuation/explode/array?fixed=true"): QueryParametersQueryContinuationExplodeArray;
    (path: "/routes/query/query-continuation/explode/record?fixed=true"): QueryParametersQueryContinuationExplodeRecord;
    (path: "/routes/in-interface/fixed"): InInterfaceFixed;
}

export declare type RoutesClient = Client & {
    path: Routes;
};

export declare interface RoutesClientOptions extends ClientOptions {
}

export { }
