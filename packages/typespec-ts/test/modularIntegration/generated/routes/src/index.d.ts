import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface FixedOptionalParams extends OperationOptions {
}

declare interface InInterfaceFixedOptionalParams extends OperationOptions {
}

export declare interface InInterfaceOperations {
    fixed: (options?: InInterfaceFixedOptionalParams) => Promise<void>;
}

declare interface PathParametersAnnotationOnlyOptionalParams extends OperationOptions {
}

declare interface PathParametersExplicitOptionalParams extends OperationOptions {
}

declare interface PathParametersLabelExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: PathParametersLabelExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersLabelExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersLabelExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

declare interface PathParametersLabelExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

declare interface PathParametersLabelExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionOperations {
    explode: PathParametersLabelExpansionExplodeOperations;
    standard: PathParametersLabelExpansionStandardOperations;
}

declare interface PathParametersLabelExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionStandardOperations {
    record: (param: Record<string, number>, options?: PathParametersLabelExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersLabelExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersLabelExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

declare interface PathParametersLabelExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

declare interface PathParametersLabelExpansionStandardRecordOptionalParams extends OperationOptions {
}

declare interface PathParametersMatrixExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: PathParametersMatrixExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersMatrixExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersMatrixExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

declare interface PathParametersMatrixExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

declare interface PathParametersMatrixExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionOperations {
    explode: PathParametersMatrixExpansionExplodeOperations;
    standard: PathParametersMatrixExpansionStandardOperations;
}

declare interface PathParametersMatrixExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionStandardOperations {
    record: (param: Record<string, number>, options?: PathParametersMatrixExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersMatrixExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersMatrixExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

declare interface PathParametersMatrixExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

declare interface PathParametersMatrixExpansionStandardRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersOperations {
    labelExpansion: PathParametersLabelExpansionOperations;
    matrixExpansion: PathParametersMatrixExpansionOperations;
    pathExpansion: PathParametersPathExpansionOperations;
    reservedExpansion: PathParametersReservedExpansionOperations;
    simpleExpansion: PathParametersSimpleExpansionOperations;
    annotationOnly: (param: string, options?: PathParametersAnnotationOnlyOptionalParams) => Promise<void>;
    explicit: (param: string, options?: PathParametersExplicitOptionalParams) => Promise<void>;
    templateOnly: (param: string, options?: PathParametersTemplateOnlyOptionalParams) => Promise<void>;
}

declare interface PathParametersPathExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: PathParametersPathExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersPathExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersPathExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

declare interface PathParametersPathExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

declare interface PathParametersPathExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionOperations {
    explode: PathParametersPathExpansionExplodeOperations;
    standard: PathParametersPathExpansionStandardOperations;
}

declare interface PathParametersPathExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionStandardOperations {
    record: (param: Record<string, number>, options?: PathParametersPathExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersPathExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersPathExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

declare interface PathParametersPathExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

declare interface PathParametersPathExpansionStandardRecordOptionalParams extends OperationOptions {
}

declare interface PathParametersReservedExpansionAnnotationOptionalParams extends OperationOptions {
}

export declare interface PathParametersReservedExpansionOperations {
    annotation: (param: string, options?: PathParametersReservedExpansionAnnotationOptionalParams) => Promise<void>;
    template: (param: string, options?: PathParametersReservedExpansionTemplateOptionalParams) => Promise<void>;
}

declare interface PathParametersReservedExpansionTemplateOptionalParams extends OperationOptions {
}

declare interface PathParametersSimpleExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: PathParametersSimpleExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersSimpleExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersSimpleExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

declare interface PathParametersSimpleExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

declare interface PathParametersSimpleExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionOperations {
    explode: PathParametersSimpleExpansionExplodeOperations;
    standard: PathParametersSimpleExpansionStandardOperations;
}

declare interface PathParametersSimpleExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionStandardOperations {
    record: (param: Record<string, number>, options?: PathParametersSimpleExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersSimpleExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersSimpleExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

declare interface PathParametersSimpleExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

declare interface PathParametersSimpleExpansionStandardRecordOptionalParams extends OperationOptions {
}

declare interface PathParametersTemplateOnlyOptionalParams extends OperationOptions {
}

declare interface QueryParametersAnnotationOnlyOptionalParams extends OperationOptions {
}

declare interface QueryParametersExplicitOptionalParams extends OperationOptions {
}

export declare interface QueryParametersOperations {
    queryContinuation: QueryParametersQueryContinuationOperations;
    queryExpansion: QueryParametersQueryExpansionOperations;
    annotationOnly: (param: string, options?: QueryParametersAnnotationOnlyOptionalParams) => Promise<void>;
    explicit: (param: string, options?: QueryParametersExplicitOptionalParams) => Promise<void>;
    templateOnly: (param: string, options?: QueryParametersTemplateOnlyOptionalParams) => Promise<void>;
}

declare interface QueryParametersQueryContinuationExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationExplodeOperations {
    record: (param: Record<string, number>, options?: QueryParametersQueryContinuationExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryContinuationExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: QueryParametersQueryContinuationExplodePrimitiveOptionalParams) => Promise<void>;
}

declare interface QueryParametersQueryContinuationExplodePrimitiveOptionalParams extends OperationOptions {
}

declare interface QueryParametersQueryContinuationExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationOperations {
    explode: QueryParametersQueryContinuationExplodeOperations;
    standard: QueryParametersQueryContinuationStandardOperations;
}

declare interface QueryParametersQueryContinuationStandardArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationStandardOperations {
    record: (param: Record<string, number>, options?: QueryParametersQueryContinuationStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryContinuationStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: QueryParametersQueryContinuationStandardPrimitiveOptionalParams) => Promise<void>;
}

declare interface QueryParametersQueryContinuationStandardPrimitiveOptionalParams extends OperationOptions {
}

declare interface QueryParametersQueryContinuationStandardRecordOptionalParams extends OperationOptions {
}

declare interface QueryParametersQueryExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: QueryParametersQueryExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: QueryParametersQueryExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

declare interface QueryParametersQueryExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

declare interface QueryParametersQueryExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionOperations {
    explode: QueryParametersQueryExpansionExplodeOperations;
    standard: QueryParametersQueryExpansionStandardOperations;
}

declare interface QueryParametersQueryExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionStandardOperations {
    record: (param: Record<string, number>, options?: QueryParametersQueryExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: QueryParametersQueryExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

declare interface QueryParametersQueryExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

declare interface QueryParametersQueryExpansionStandardRecordOptionalParams extends OperationOptions {
}

declare interface QueryParametersTemplateOnlyOptionalParams extends OperationOptions {
}

export declare class RoutesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RoutesClientOptionalParams);
    readonly inInterface: InInterfaceOperations;
    readonly queryParameters: QueryParametersOperations;
    readonly pathParameters: PathParametersOperations;
    fixed(options?: FixedOptionalParams): Promise<void>;
}

export declare interface RoutesClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export { }
