import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

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

export declare interface EnumsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface EnumsOnlyOperations {
    get: (options?: EnumsOnlyGetOptionalParams) => Promise<{
        prop: EnumsOnlyCases;
    }>;
    send: (prop: EnumsOnlyCases, options?: EnumsOnlySendOptionalParams) => Promise<void>;
}

export declare interface EnumsOnlySendOptionalParams extends OperationOptions {
}

export declare interface FloatsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface FloatsOnlyOperations {
    get: (options?: FloatsOnlyGetOptionalParams) => Promise<{
        prop: 1.1 | 2.2 | 3.3;
    }>;
    send: (prop: 1.1 | 2.2 | 3.3, options?: FloatsOnlySendOptionalParams) => Promise<void>;
}

export declare interface FloatsOnlySendOptionalParams extends OperationOptions {
}

export declare interface IntsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface IntsOnlyOperations {
    get: (options?: IntsOnlyGetOptionalParams) => Promise<{
        prop: 1 | 2 | 3;
    }>;
    send: (prop: 1 | 2 | 3, options?: IntsOnlySendOptionalParams) => Promise<void>;
}

export declare interface IntsOnlySendOptionalParams extends OperationOptions {
}

export declare enum KnownStringExtensibleNamedUnion {
    OptionB = "b",
    c = "c"
}

export declare interface MixedLiteralsCases {
    stringLiteral: "a" | 2 | 3.3 | true;
    intLiteral: "a" | 2 | 3.3 | true;
    floatLiteral: "a" | 2 | 3.3 | true;
    booleanLiteral: "a" | 2 | 3.3 | true;
}

export declare interface MixedLiteralsGetOptionalParams extends OperationOptions {
}

export declare interface MixedLiteralsOperations {
    get: (options?: MixedLiteralsGetOptionalParams) => Promise<{
        prop: MixedLiteralsCases;
    }>;
    send: (prop: MixedLiteralsCases, options?: MixedLiteralsSendOptionalParams) => Promise<void>;
}

export declare interface MixedLiteralsSendOptionalParams extends OperationOptions {
}

export declare interface MixedTypesCases {
    model: Cat | "a" | number | boolean;
    literal: Cat | "a" | number | boolean;
    int: Cat | "a" | number | boolean;
    boolean: Cat | "a" | number | boolean;
    array: (Cat | "a" | number | boolean)[];
}

export declare interface MixedTypesGetOptionalParams extends OperationOptions {
}

export declare interface MixedTypesOperations {
    get: (options?: MixedTypesGetOptionalParams) => Promise<{
        prop: MixedTypesCases;
    }>;
    send: (prop: MixedTypesCases, options?: MixedTypesSendOptionalParams) => Promise<void>;
}

export declare interface MixedTypesSendOptionalParams extends OperationOptions {
}

export declare interface ModelsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface ModelsOnlyOperations {
    get: (options?: ModelsOnlyGetOptionalParams) => Promise<{
        prop: Cat | Dog;
    }>;
    send: (prop: Cat | Dog, options?: ModelsOnlySendOptionalParams) => Promise<void>;
}

export declare interface ModelsOnlySendOptionalParams extends OperationOptions {
}

export declare interface StringAndArrayCases {
    string: string | string[];
    array: string | string[];
}

export declare interface StringAndArrayGetOptionalParams extends OperationOptions {
}

export declare interface StringAndArrayOperations {
    get: (options?: StringAndArrayGetOptionalParams) => Promise<{
        prop: StringAndArrayCases;
    }>;
    send: (prop: StringAndArrayCases, options?: StringAndArraySendOptionalParams) => Promise<void>;
}

export declare interface StringAndArraySendOptionalParams extends OperationOptions {
}

export declare interface StringExtensibleGetOptionalParams extends OperationOptions {
}

export declare interface StringExtensibleNamedGetOptionalParams extends OperationOptions {
}

export declare interface StringExtensibleNamedOperations {
    get: (options?: StringExtensibleNamedGetOptionalParams) => Promise<{
        prop: StringExtensibleNamedUnion;
    }>;
    send: (prop: StringExtensibleNamedUnion, options?: StringExtensibleNamedSendOptionalParams) => Promise<void>;
}

export declare interface StringExtensibleNamedSendOptionalParams extends OperationOptions {
}

export declare type StringExtensibleNamedUnion = string;

export declare interface StringExtensibleOperations {
    get: (options?: StringExtensibleGetOptionalParams) => Promise<{
        prop: string;
    }>;
    send: (prop: string, options?: StringExtensibleSendOptionalParams) => Promise<void>;
}

export declare interface StringExtensibleSendOptionalParams extends OperationOptions {
}

export declare interface StringsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface StringsOnlyOperations {
    get: (options?: StringsOnlyGetOptionalParams) => Promise<{
        prop: "a" | "b" | "c";
    }>;
    send: (prop: "a" | "b" | "c", options?: StringsOnlySendOptionalParams) => Promise<void>;
}

export declare interface StringsOnlySendOptionalParams extends OperationOptions {
}

export declare class UnionClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: UnionClientOptionalParams);
    readonly stringsOnly: StringsOnlyOperations;
    readonly stringExtensible: StringExtensibleOperations;
    readonly stringExtensibleNamed: StringExtensibleNamedOperations;
    readonly intsOnly: IntsOnlyOperations;
    readonly floatsOnly: FloatsOnlyOperations;
    readonly modelsOnly: ModelsOnlyOperations;
    readonly enumsOnly: EnumsOnlyOperations;
    readonly stringAndArray: StringAndArrayOperations;
    readonly mixedLiterals: MixedLiteralsOperations;
    readonly mixedTypes: MixedTypesOperations;
}

export declare interface UnionClientOptionalParams extends ClientOptions {
}

export { }
