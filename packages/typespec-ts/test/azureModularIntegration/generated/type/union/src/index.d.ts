import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare interface Cat {
    name: string;
}

export declare interface Dog {
    bark: string;
}

export declare interface EnumsOnlyCases {
    lr: "left" | "right" | "up" | "down";
    ud: "up" | "down";
}

declare interface EnumsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface EnumsOnlyOperations {
    send: (prop: EnumsOnlyCases, options?: EnumsOnlySendOptionalParams) => Promise<void>;
    get: (options?: EnumsOnlyGetOptionalParams) => Promise<{
        prop: EnumsOnlyCases;
    }>;
}

declare interface EnumsOnlySendOptionalParams extends OperationOptions {
}

declare interface FloatsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface FloatsOnlyOperations {
    send: (prop: 1.1 | 2.2 | 3.3, options?: FloatsOnlySendOptionalParams) => Promise<void>;
    get: (options?: FloatsOnlyGetOptionalParams) => Promise<{
        prop: 1.1 | 2.2 | 3.3;
    }>;
}

declare interface FloatsOnlySendOptionalParams extends OperationOptions {
}

declare interface IntsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface IntsOnlyOperations {
    send: (prop: 1 | 2 | 3, options?: IntsOnlySendOptionalParams) => Promise<void>;
    get: (options?: IntsOnlyGetOptionalParams) => Promise<{
        prop: 1 | 2 | 3;
    }>;
}

declare interface IntsOnlySendOptionalParams extends OperationOptions {
}

export { isRestError }

export declare enum KnownStringExtensibleNamedUnion {
    OptionB = "b",
    C = "c"
}

export declare interface MixedLiteralsCases {
    stringLiteral: "a" | 2 | 3.3 | true;
    intLiteral: "a" | 2 | 3.3 | true;
    floatLiteral: "a" | 2 | 3.3 | true;
    booleanLiteral: "a" | 2 | 3.3 | true;
}

declare interface MixedLiteralsGetOptionalParams extends OperationOptions {
}

export declare interface MixedLiteralsOperations {
    send: (prop: MixedLiteralsCases, options?: MixedLiteralsSendOptionalParams) => Promise<void>;
    get: (options?: MixedLiteralsGetOptionalParams) => Promise<{
        prop: MixedLiteralsCases;
    }>;
}

declare interface MixedLiteralsSendOptionalParams extends OperationOptions {
}

export declare interface MixedTypesCases {
    model: Cat | "a" | number | boolean;
    literal: Cat | "a" | number | boolean;
    int: Cat | "a" | number | boolean;
    boolean: Cat | "a" | number | boolean;
    array: (Cat | "a" | number | boolean)[];
}

declare interface MixedTypesGetOptionalParams extends OperationOptions {
}

export declare interface MixedTypesOperations {
    send: (prop: MixedTypesCases, options?: MixedTypesSendOptionalParams) => Promise<void>;
    get: (options?: MixedTypesGetOptionalParams) => Promise<{
        prop: MixedTypesCases;
    }>;
}

declare interface MixedTypesSendOptionalParams extends OperationOptions {
}

declare interface ModelsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface ModelsOnlyOperations {
    send: (prop: Cat | Dog, options?: ModelsOnlySendOptionalParams) => Promise<void>;
    get: (options?: ModelsOnlyGetOptionalParams) => Promise<{
        prop: Cat | Dog;
    }>;
}

declare interface ModelsOnlySendOptionalParams extends OperationOptions {
}

export { RestError }

export declare interface StringAndArrayCases {
    string: string | string[];
    array: string | string[];
}

declare interface StringAndArrayGetOptionalParams extends OperationOptions {
}

export declare interface StringAndArrayOperations {
    send: (prop: StringAndArrayCases, options?: StringAndArraySendOptionalParams) => Promise<void>;
    get: (options?: StringAndArrayGetOptionalParams) => Promise<{
        prop: StringAndArrayCases;
    }>;
}

declare interface StringAndArraySendOptionalParams extends OperationOptions {
}

declare interface StringExtensibleGetOptionalParams extends OperationOptions {
}

declare interface StringExtensibleNamedGetOptionalParams extends OperationOptions {
}

export declare interface StringExtensibleNamedOperations {
    send: (prop: StringExtensibleNamedUnion, options?: StringExtensibleNamedSendOptionalParams) => Promise<void>;
    get: (options?: StringExtensibleNamedGetOptionalParams) => Promise<{
        prop: StringExtensibleNamedUnion;
    }>;
}

declare interface StringExtensibleNamedSendOptionalParams extends OperationOptions {
}

export declare type StringExtensibleNamedUnion = string;

export declare interface StringExtensibleOperations {
    send: (prop: string, options?: StringExtensibleSendOptionalParams) => Promise<void>;
    get: (options?: StringExtensibleGetOptionalParams) => Promise<{
        prop: string;
    }>;
}

declare interface StringExtensibleSendOptionalParams extends OperationOptions {
}

declare interface StringsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface StringsOnlyOperations {
    send: (prop: "a" | "b" | "c", options?: StringsOnlySendOptionalParams) => Promise<void>;
    get: (options?: StringsOnlyGetOptionalParams) => Promise<{
        prop: "a" | "b" | "c";
    }>;
}

declare interface StringsOnlySendOptionalParams extends OperationOptions {
}

export declare class UnionClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: UnionClientOptionalParams);
    readonly mixedTypes: MixedTypesOperations;
    readonly mixedLiterals: MixedLiteralsOperations;
    readonly stringAndArray: StringAndArrayOperations;
    readonly enumsOnly: EnumsOnlyOperations;
    readonly modelsOnly: ModelsOnlyOperations;
    readonly floatsOnly: FloatsOnlyOperations;
    readonly intsOnly: IntsOnlyOperations;
    readonly stringExtensibleNamed: StringExtensibleNamedOperations;
    readonly stringExtensible: StringExtensibleOperations;
    readonly stringsOnly: StringsOnlyOperations;
}

export declare interface UnionClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export { }
