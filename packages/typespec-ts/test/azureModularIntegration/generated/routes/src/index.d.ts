import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface FixedOptionalParams extends OperationOptions {
}

export declare interface InInterfaceFixedOptionalParams extends OperationOptions {
}

export declare interface InInterfaceOperations {
    fixed: (options?: InInterfaceFixedOptionalParams) => Promise<void>;
}

export declare interface PathParametersAnnotationOnlyOptionalParams extends OperationOptions {
}

export declare interface PathParametersExplicitOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: PathParametersLabelExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersLabelExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersLabelExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

export declare interface PathParametersLabelExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionOperations {
    explode: PathParametersLabelExpansionExplodeOperations;
    standard: PathParametersLabelExpansionStandardOperations;
}

export declare interface PathParametersLabelExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionStandardOperations {
    record: (param: Record<string, number>, options?: PathParametersLabelExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersLabelExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersLabelExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

export declare interface PathParametersLabelExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionStandardRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: PathParametersMatrixExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersMatrixExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersMatrixExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

export declare interface PathParametersMatrixExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionOperations {
    explode: PathParametersMatrixExpansionExplodeOperations;
    standard: PathParametersMatrixExpansionStandardOperations;
}

export declare interface PathParametersMatrixExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionStandardOperations {
    record: (param: Record<string, number>, options?: PathParametersMatrixExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersMatrixExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersMatrixExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

export declare interface PathParametersMatrixExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionStandardRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersOperations {
    annotationOnly: (param: string, options?: PathParametersAnnotationOnlyOptionalParams) => Promise<void>;
    explicit: (param: string, options?: PathParametersExplicitOptionalParams) => Promise<void>;
    templateOnly: (param: string, options?: PathParametersTemplateOnlyOptionalParams) => Promise<void>;
    matrixExpansion: PathParametersMatrixExpansionOperations;
    labelExpansion: PathParametersLabelExpansionOperations;
    pathExpansion: PathParametersPathExpansionOperations;
    simpleExpansion: PathParametersSimpleExpansionOperations;
    reservedExpansion: PathParametersReservedExpansionOperations;
}

export declare interface PathParametersPathExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: PathParametersPathExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersPathExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersPathExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

export declare interface PathParametersPathExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionOperations {
    explode: PathParametersPathExpansionExplodeOperations;
    standard: PathParametersPathExpansionStandardOperations;
}

export declare interface PathParametersPathExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionStandardOperations {
    record: (param: Record<string, number>, options?: PathParametersPathExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersPathExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersPathExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

export declare interface PathParametersPathExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionStandardRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersReservedExpansionAnnotationOptionalParams extends OperationOptions {
}

export declare interface PathParametersReservedExpansionOperations {
    annotation: (param: string, options?: PathParametersReservedExpansionAnnotationOptionalParams) => Promise<void>;
    template: (param: string, options?: PathParametersReservedExpansionTemplateOptionalParams) => Promise<void>;
}

export declare interface PathParametersReservedExpansionTemplateOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: PathParametersSimpleExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersSimpleExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersSimpleExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

export declare interface PathParametersSimpleExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionOperations {
    explode: PathParametersSimpleExpansionExplodeOperations;
    standard: PathParametersSimpleExpansionStandardOperations;
}

export declare interface PathParametersSimpleExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionStandardOperations {
    record: (param: Record<string, number>, options?: PathParametersSimpleExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersSimpleExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: PathParametersSimpleExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

export declare interface PathParametersSimpleExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionStandardRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersTemplateOnlyOptionalParams extends OperationOptions {
}

export declare interface QueryParametersAnnotationOnlyOptionalParams extends OperationOptions {
}

export declare interface QueryParametersExplicitOptionalParams extends OperationOptions {
}

export declare interface QueryParametersOperations {
    annotationOnly: (param: string, options?: QueryParametersAnnotationOnlyOptionalParams) => Promise<void>;
    explicit: (param: string, options?: QueryParametersExplicitOptionalParams) => Promise<void>;
    templateOnly: (param: string, options?: QueryParametersTemplateOnlyOptionalParams) => Promise<void>;
    queryContinuation: QueryParametersQueryContinuationOperations;
    queryExpansion: QueryParametersQueryExpansionOperations;
}

export declare interface QueryParametersQueryContinuationExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationExplodeOperations {
    record: (param: Record<string, number>, options?: QueryParametersQueryContinuationExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryContinuationExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: QueryParametersQueryContinuationExplodePrimitiveOptionalParams) => Promise<void>;
}

export declare interface QueryParametersQueryContinuationExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationOperations {
    explode: QueryParametersQueryContinuationExplodeOperations;
    standard: QueryParametersQueryContinuationStandardOperations;
}

export declare interface QueryParametersQueryContinuationStandardArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationStandardOperations {
    record: (param: Record<string, number>, options?: QueryParametersQueryContinuationStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryContinuationStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: QueryParametersQueryContinuationStandardPrimitiveOptionalParams) => Promise<void>;
}

export declare interface QueryParametersQueryContinuationStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationStandardRecordOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionExplodeOperations {
    record: (param: Record<string, number>, options?: QueryParametersQueryExpansionExplodeRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryExpansionExplodeArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: QueryParametersQueryExpansionExplodePrimitiveOptionalParams) => Promise<void>;
}

export declare interface QueryParametersQueryExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionOperations {
    explode: QueryParametersQueryExpansionExplodeOperations;
    standard: QueryParametersQueryExpansionStandardOperations;
}

export declare interface QueryParametersQueryExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionStandardOperations {
    record: (param: Record<string, number>, options?: QueryParametersQueryExpansionStandardRecordOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryExpansionStandardArrayOptionalParams) => Promise<void>;
    primitive: (param: string, options?: QueryParametersQueryExpansionStandardPrimitiveOptionalParams) => Promise<void>;
}

export declare interface QueryParametersQueryExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionStandardRecordOptionalParams extends OperationOptions {
}

export declare interface QueryParametersTemplateOnlyOptionalParams extends OperationOptions {
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
}

export { }
