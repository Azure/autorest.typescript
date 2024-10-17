import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface ExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface ExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface ExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface ExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface ExplodeArrayOptionalParams extends OperationOptions {
}

export declare interface ExplodeOperations {
    primitive: (param: string, options?: ExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: ExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: ExplodeRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: ExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: ExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: ExplodeRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: ExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: ExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: ExplodeRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: ExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: ExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: ExplodeRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: ExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: ExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: ExplodeRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: ExplodePrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: ExplodeArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: ExplodeRecordOptionalParams) => Promise<void>;
}

export declare interface ExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface ExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface ExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface ExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface ExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface ExplodePrimitiveOptionalParams extends OperationOptions {
}

export declare interface ExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface ExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface ExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface ExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface ExplodeRecordOptionalParams extends OperationOptions {
}

export declare interface ExplodeRecordOptionalParams extends OperationOptions {
}

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

export declare interface PathParametersOperations {
    templateOnly: (param: string, options?: PathParametersTemplateOnlyOptionalParams) => Promise<void>;
    explicit: (param: string, options?: PathParametersExplicitOptionalParams) => Promise<void>;
    annotationOnly: (param: string, options?: PathParametersAnnotationOnlyOptionalParams) => Promise<void>;
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
}

export declare interface QueryParametersTemplateOnlyOptionalParams extends OperationOptions {
}

export declare interface ReservedExpansionAnnotationOptionalParams extends OperationOptions {
}

export declare interface ReservedExpansionOperations {
    template: (param: string, options?: ReservedExpansionTemplateOptionalParams) => Promise<void>;
    annotation: (param: string, options?: ReservedExpansionAnnotationOptionalParams) => Promise<void>;
}

export declare interface ReservedExpansionTemplateOptionalParams extends OperationOptions {
}

export declare class RoutesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RoutesClientOptionalParams);
    _fixed(options?: FixedOptionalParams): Promise<void>;
    readonly pathParameters: PathParametersOperations;
    readonly reservedExpansion: ReservedExpansionOperations;
    readonly standard: StandardOperations;
    readonly explode: ExplodeOperations;
    readonly queryParameters: QueryParametersOperations;
    readonly inInterface: InInterfaceOperations;
}

export declare interface RoutesClientOptionalParams extends ClientOptions {
}

export declare interface StandardArrayOptionalParams extends OperationOptions {
}

export declare interface StandardArrayOptionalParams extends OperationOptions {
}

export declare interface StandardArrayOptionalParams extends OperationOptions {
}

export declare interface StandardArrayOptionalParams extends OperationOptions {
}

export declare interface StandardArrayOptionalParams extends OperationOptions {
}

export declare interface StandardArrayOptionalParams extends OperationOptions {
}

export declare interface StandardOperations {
    primitive: (param: string, options?: StandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: StandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: StandardRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: StandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: StandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: StandardRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: StandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: StandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: StandardRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: StandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: StandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: StandardRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: StandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: StandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: StandardRecordOptionalParams) => Promise<void>;
    primitive: (param: string, options?: StandardPrimitiveOptionalParams) => Promise<void>;
    array: (param: string[], options?: StandardArrayOptionalParams) => Promise<void>;
    record: (param: Record<string, number>, options?: StandardRecordOptionalParams) => Promise<void>;
}

export declare interface StandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface StandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface StandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface StandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface StandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface StandardPrimitiveOptionalParams extends OperationOptions {
}

export declare interface StandardRecordOptionalParams extends OperationOptions {
}

export declare interface StandardRecordOptionalParams extends OperationOptions {
}

export declare interface StandardRecordOptionalParams extends OperationOptions {
}

export declare interface StandardRecordOptionalParams extends OperationOptions {
}

export declare interface StandardRecordOptionalParams extends OperationOptions {
}

export declare interface StandardRecordOptionalParams extends OperationOptions {
}

export { }
