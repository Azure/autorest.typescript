import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface Cat {
    name: string;
}

declare interface Dog {
    bark: string;
}

declare interface EnumsOnlyCases {
    lr: "left" | "right" | "up" | "down";
    ud: "up" | "down";
}

export declare interface EnumsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface EnumsOnlyOperations {
    send: (prop: EnumsOnlyCases, options?: EnumsOnlySendOptionalParams) => Promise<void>;
    get: (options?: EnumsOnlyGetOptionalParams) => Promise<{
        prop: EnumsOnlyCases;
    }>;
}

export declare interface EnumsOnlySendOptionalParams extends OperationOptions {
}

export declare interface FloatsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface FloatsOnlyOperations {
    send: (prop: 1.1 | 2.2 | 3.3, options?: FloatsOnlySendOptionalParams) => Promise<void>;
    get: (options?: FloatsOnlyGetOptionalParams) => Promise<{
        prop: 1.1 | 2.2 | 3.3;
    }>;
}

export declare interface FloatsOnlySendOptionalParams extends OperationOptions {
}

export declare interface IntsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface IntsOnlyOperations {
    send: (prop: 1 | 2 | 3, options?: IntsOnlySendOptionalParams) => Promise<void>;
    get: (options?: IntsOnlyGetOptionalParams) => Promise<{
        prop: 1 | 2 | 3;
    }>;
}

export declare interface IntsOnlySendOptionalParams extends OperationOptions {
}

declare interface MixedLiteralsCases {
    stringLiteral: "a" | 2 | 3.3 | true;
    intLiteral: "a" | 2 | 3.3 | true;
    floatLiteral: "a" | 2 | 3.3 | true;
    booleanLiteral: "a" | 2 | 3.3 | true;
}

export declare interface MixedLiteralsGetOptionalParams extends OperationOptions {
}

export declare interface MixedLiteralsOperations {
    send: (prop: MixedLiteralsCases, options?: MixedLiteralsSendOptionalParams) => Promise<void>;
    get: (options?: MixedLiteralsGetOptionalParams) => Promise<{
        prop: MixedLiteralsCases;
    }>;
}

export declare interface MixedLiteralsSendOptionalParams extends OperationOptions {
}

declare interface MixedTypesCases {
    model: Cat | "a" | number | boolean;
    literal: Cat | "a" | number | boolean;
    int: Cat | "a" | number | boolean;
    boolean: Cat | "a" | number | boolean;
    array: (Cat | "a" | number | boolean)[];
}

export declare interface MixedTypesGetOptionalParams extends OperationOptions {
}

export declare interface MixedTypesOperations {
    send: (prop: MixedTypesCases, options?: MixedTypesSendOptionalParams) => Promise<void>;
    get: (options?: MixedTypesGetOptionalParams) => Promise<{
        prop: MixedTypesCases;
    }>;
}

export declare interface MixedTypesSendOptionalParams extends OperationOptions {
}

export declare interface ModelsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface ModelsOnlyOperations {
    send: (prop: Cat | Dog, options?: ModelsOnlySendOptionalParams) => Promise<void>;
    get: (options?: ModelsOnlyGetOptionalParams) => Promise<{
        prop: Cat | Dog;
    }>;
}

export declare interface ModelsOnlySendOptionalParams extends OperationOptions {
}

declare interface StringAndArrayCases {
    string: string | string[];
    array: string | string[];
}

export declare interface StringAndArrayGetOptionalParams extends OperationOptions {
}

export declare interface StringAndArrayOperations {
    send: (prop: StringAndArrayCases, options?: StringAndArraySendOptionalParams) => Promise<void>;
    get: (options?: StringAndArrayGetOptionalParams) => Promise<{
        prop: StringAndArrayCases;
    }>;
}

export declare interface StringAndArraySendOptionalParams extends OperationOptions {
}

export declare interface StringExtensibleGetOptionalParams extends OperationOptions {
}

export declare interface StringExtensibleNamedGetOptionalParams extends OperationOptions {
}

export declare interface StringExtensibleNamedOperations {
    send: (prop: StringExtensibleNamedUnion, options?: StringExtensibleNamedSendOptionalParams) => Promise<void>;
    get: (options?: StringExtensibleNamedGetOptionalParams) => Promise<{
        prop: StringExtensibleNamedUnion;
    }>;
}

export declare interface StringExtensibleNamedSendOptionalParams extends OperationOptions {
}

declare type StringExtensibleNamedUnion = string;

export declare interface StringExtensibleOperations {
    send: (prop: string, options?: StringExtensibleSendOptionalParams) => Promise<void>;
    get: (options?: StringExtensibleGetOptionalParams) => Promise<{
        prop: string;
    }>;
}

export declare interface StringExtensibleSendOptionalParams extends OperationOptions {
}

export declare interface StringsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface StringsOnlyOperations {
    send: (prop: "a" | "b" | "c", options?: StringsOnlySendOptionalParams) => Promise<void>;
    get: (options?: StringsOnlyGetOptionalParams) => Promise<{
        prop: "a" | "b" | "c";
    }>;
}

export declare interface StringsOnlySendOptionalParams extends OperationOptions {
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
}

export { }
