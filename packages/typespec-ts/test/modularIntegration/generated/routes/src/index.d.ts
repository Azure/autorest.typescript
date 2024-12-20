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
    primitive: (param: string, options?: PathParametersLabelExpansionExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersLabelExpansionExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: PathParametersLabelExpansionExplodeRecordOptionalParams) => Promise<void>;
}

export declare interface PathParametersLabelExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionOperations {
    standard: PathParametersLabelExpansionStandardOperations;
    explode: PathParametersLabelExpansionExplodeOperations;
}

export declare interface PathParametersLabelExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionStandardOperations {
    primitive: (param: string, options?: PathParametersLabelExpansionStandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersLabelExpansionStandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: PathParametersLabelExpansionStandardRecordOptionalParams) => Promise<void>;
}

export declare interface PathParametersLabelExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersLabelExpansionStandardRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionExplodeOperations {
    primitive: (param: string, options?: PathParametersMatrixExpansionExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersMatrixExpansionExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: PathParametersMatrixExpansionExplodeRecordOptionalParams) => Promise<void>;
}

export declare interface PathParametersMatrixExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionOperations {
    standard: PathParametersMatrixExpansionStandardOperations;
    explode: PathParametersMatrixExpansionExplodeOperations;
}

export declare interface PathParametersMatrixExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionStandardOperations {
    primitive: (param: string, options?: PathParametersMatrixExpansionStandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersMatrixExpansionStandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: PathParametersMatrixExpansionStandardRecordOptionalParams) => Promise<void>;
}

export declare interface PathParametersMatrixExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersMatrixExpansionStandardRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersOperations {
    templateOnly: (param: string, options?: PathParametersTemplateOnlyOptionalParams) => Promise<void>;
    explicit: (param: string, options?: PathParametersExplicitOptionalParams) => Promise<void>;
    annotationOnly: (param: string, options?: PathParametersAnnotationOnlyOptionalParams) => Promise<void>;
    reservedExpansion: PathParametersReservedExpansionOperations;
    simpleExpansion: PathParametersSimpleExpansionOperations;
    pathExpansion: PathParametersPathExpansionOperations;
    labelExpansion: PathParametersLabelExpansionOperations;
    matrixExpansion: PathParametersMatrixExpansionOperations;
}

export declare interface PathParametersPathExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionExplodeOperations {
    primitive: (param: string, options?: PathParametersPathExpansionExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersPathExpansionExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: PathParametersPathExpansionExplodeRecordOptionalParams) => Promise<void>;
}

export declare interface PathParametersPathExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionOperations {
    standard: PathParametersPathExpansionStandardOperations;
    explode: PathParametersPathExpansionExplodeOperations;
}

export declare interface PathParametersPathExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionStandardOperations {
    primitive: (param: string, options?: PathParametersPathExpansionStandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersPathExpansionStandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: PathParametersPathExpansionStandardRecordOptionalParams) => Promise<void>;
}

export declare interface PathParametersPathExpansionStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersPathExpansionStandardRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersReservedExpansionAnnotationOptionalParams extends OperationOptions {
}

export declare interface PathParametersReservedExpansionOperations {
    template: (param: string, options?: PathParametersReservedExpansionTemplateOptionalParams) => Promise<void>;
    annotation: (param: string, options?: PathParametersReservedExpansionAnnotationOptionalParams) => Promise<void>;
}

export declare interface PathParametersReservedExpansionTemplateOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionExplodeOperations {
    primitive: (param: string, options?: PathParametersSimpleExpansionExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersSimpleExpansionExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: PathParametersSimpleExpansionExplodeRecordOptionalParams) => Promise<void>;
}

export declare interface PathParametersSimpleExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionOperations {
    standard: PathParametersSimpleExpansionStandardOperations;
    explode: PathParametersSimpleExpansionExplodeOperations;
}

export declare interface PathParametersSimpleExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface PathParametersSimpleExpansionStandardOperations {
    primitive: (param: string, options?: PathParametersSimpleExpansionStandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: PathParametersSimpleExpansionStandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: PathParametersSimpleExpansionStandardRecordOptionalParams) => Promise<void>;
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
    templateOnly: (param: string, options?: QueryParametersTemplateOnlyOptionalParams) => Promise<void>;
    explicit: (param: string, options?: QueryParametersExplicitOptionalParams) => Promise<void>;
    annotationOnly: (param: string, options?: QueryParametersAnnotationOnlyOptionalParams) => Promise<void>;
    queryExpansion: QueryParametersQueryExpansionOperations;
    queryContinuation: QueryParametersQueryContinuationOperations;
}

export declare interface QueryParametersQueryContinuationExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationExplodeOperations {
    primitive: (param: string, options?: QueryParametersQueryContinuationExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryContinuationExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: QueryParametersQueryContinuationExplodeRecordOptionalParams) => Promise<void>;
}

export declare interface QueryParametersQueryContinuationExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationOperations {
    standard: QueryParametersQueryContinuationStandardOperations;
    explode: QueryParametersQueryContinuationExplodeOperations;
}

export declare interface QueryParametersQueryContinuationStandardArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationStandardOperations {
    primitive: (param: string, options?: QueryParametersQueryContinuationStandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryContinuationStandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: QueryParametersQueryContinuationStandardRecordOptionalParams) => Promise<void>;
}

export declare interface QueryParametersQueryContinuationStandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryContinuationStandardRecordOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionExplodeOperations {
    primitive: (param: string, options?: QueryParametersQueryExpansionExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryExpansionExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: QueryParametersQueryExpansionExplodeRecordOptionalParams) => Promise<void>;
}

export declare interface QueryParametersQueryExpansionExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionOperations {
    standard: QueryParametersQueryExpansionStandardOperations;
    explode: QueryParametersQueryExpansionExplodeOperations;
}

export declare interface QueryParametersQueryExpansionStandardArrayOptionalParams extends OperationOptions {
}

export declare interface QueryParametersQueryExpansionStandardOperations {
    primitive: (param: string, options?: QueryParametersQueryExpansionStandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: QueryParametersQueryExpansionStandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: QueryParametersQueryExpansionStandardRecordOptionalParams) => Promise<void>;
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
    fixed(options?: FixedOptionalParams): Promise<void>;
    readonly pathParameters: PathParametersOperations;
    readonly queryParameters: QueryParametersOperations;
    readonly inInterface: InInterfaceOperations;
}

export declare interface RoutesClientOptionalParams extends ClientOptions {
}

export { }
