import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface Cat {
    name: string;
}

export declare function createUnion(options?: UnionClientOptionalParams): UnionContext;

export declare interface Dog {
    bark: string;
}

export declare interface EnumsOnlyCases {
    lr: Lr | Ud;
    ud: Ud;
}

export declare type EnumsOnlyCasesLr = Lr | Ud;

export declare type EnumsOnlyCasesUd = Ud | Ud;

export declare function enumsOnlyGet(context: UnionContext, options?: EnumsOnlyGetOptionalParams): Promise<{
    prop: EnumsOnlyCases;
}>;

export declare interface EnumsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface EnumsOnlyOperations {
    get: (options?: EnumsOnlyGetOptionalParams) => Promise<{
        prop: EnumsOnlyCases;
    }>;
    send: (prop: EnumsOnlyCases, options?: EnumsOnlySendOptionalParams) => Promise<void>;
}

export declare function enumsOnlySend(context: UnionContext, prop: EnumsOnlyCases, options?: EnumsOnlySendOptionalParams): Promise<void>;

export declare interface EnumsOnlySendOptionalParams extends OperationOptions {
}

export declare function floatsOnlyGet(context: UnionContext, options?: FloatsOnlyGetOptionalParams): Promise<{
    prop: 1.1 | 2.2 | 3.3;
}>;

export declare interface FloatsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface FloatsOnlyOperations {
    get: (options?: FloatsOnlyGetOptionalParams) => Promise<{
        prop: 1.1 | 2.2 | 3.3;
    }>;
    send: (prop: 1.1 | 2.2 | 3.3, options?: FloatsOnlySendOptionalParams) => Promise<void>;
}

export declare function floatsOnlySend(context: UnionContext, prop: 1.1 | 2.2 | 3.3, options?: FloatsOnlySendOptionalParams): Promise<void>;

export declare interface FloatsOnlySendOptionalParams extends OperationOptions {
}

export declare interface GetResponse {
    prop: MixedTypesCases;
}

export declare interface GetResponse1 {
    prop: MixedLiteralsCases;
}

export declare interface GetResponse2 {
    prop: StringAndArrayCases;
}

export declare interface GetResponse3 {
    prop: EnumsOnlyCases;
}

export declare interface GetResponse4 {
    prop: Cat | Dog;
}

export declare interface GetResponse5 {
    prop: 1.1 | 2.2 | 3.3;
}

export declare interface GetResponse6 {
    prop: 1 | 2 | 3;
}

export declare interface GetResponse7 {
    prop: StringExtensibleNamedUnion;
}

export declare interface GetResponse8 {
    prop: "b" | "c";
}

export declare interface GetResponse9 {
    prop: "a" | "b" | "c";
}

export declare type GetResponseProp = Cat | Dog;

export declare type GetResponseProp1 = 1.1 | 2.2 | 3.3;

export declare type GetResponseProp2 = 1 | 2 | 3;

export declare type GetResponseProp3 = string;

export declare type GetResponseProp4 = "a" | "b" | "c";

export declare type GetResponseProp_1 = Cat | Dog;

export declare function intsOnlyGet(context: UnionContext, options?: IntsOnlyGetOptionalParams): Promise<{
    prop: 1 | 2 | 3;
}>;

export declare interface IntsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface IntsOnlyOperations {
    get: (options?: IntsOnlyGetOptionalParams) => Promise<{
        prop: 1 | 2 | 3;
    }>;
    send: (prop: 1 | 2 | 3, options?: IntsOnlySendOptionalParams) => Promise<void>;
}

export declare function intsOnlySend(context: UnionContext, prop: 1 | 2 | 3, options?: IntsOnlySendOptionalParams): Promise<void>;

export declare interface IntsOnlySendOptionalParams extends OperationOptions {
}

export declare enum KnownGetResponseProp3 {
    b = "b",
    c = "c"
}

export declare enum KnownStringExtensibleNamedUnion {
    OptionB = "b",
    c = "c"
}

export declare type Lr = "left" | "right";

export declare interface MixedLiteralsCases {
    stringLiteral: "a" | 2 | 3.3 | true;
    intLiteral: "a" | 2 | 3.3 | true;
    floatLiteral: "a" | 2 | 3.3 | true;
    booleanLiteral: "a" | 2 | 3.3 | true;
}

export declare type MixedLiteralsCasesStringLiteral1 = "a" | 2 | 3.3 | true;

export declare type MixedLiteralsCasesStringLiteral1_1 = "a" | 2 | 3.3 | true;

export declare type MixedLiteralsCasesStringLiteral1_2 = "a" | 2 | 3.3 | true;

export declare type MixedLiteralsCasesStringLiteral1_3 = "a" | 2 | 3.3 | true;

export declare function mixedLiteralsGet(context: UnionContext, options?: MixedLiteralsGetOptionalParams): Promise<{
    prop: MixedLiteralsCases;
}>;

export declare interface MixedLiteralsGetOptionalParams extends OperationOptions {
}

export declare interface MixedLiteralsOperations {
    get: (options?: MixedLiteralsGetOptionalParams) => Promise<{
        prop: MixedLiteralsCases;
    }>;
    send: (prop: MixedLiteralsCases, options?: MixedLiteralsSendOptionalParams) => Promise<void>;
}

export declare function mixedLiteralsSend(context: UnionContext, prop: MixedLiteralsCases, options?: MixedLiteralsSendOptionalParams): Promise<void>;

export declare interface MixedLiteralsSendOptionalParams extends OperationOptions {
}

export declare interface MixedTypesCases {
    model: Cat | "a" | number | boolean;
    literal: Cat | "a" | number | boolean;
    int: Cat | "a" | number | boolean;
    boolean: Cat | "a" | number | boolean;
    array: (Cat | "a" | number | boolean)[];
}

export declare type MixedTypesCasesModel = Cat | "a" | number | boolean;

export declare type MixedTypesCasesModel_1 = Cat | "a" | number | boolean;

export declare type MixedTypesCasesModel_2 = Cat | "a" | number | boolean;

export declare type MixedTypesCasesModel_3 = Cat | "a" | number | boolean;

export declare type MixedTypesCasesModel_4 = Cat | "a" | number | boolean;

export declare function mixedTypesGet(context: UnionContext, options?: MixedTypesGetOptionalParams): Promise<{
    prop: MixedTypesCases;
}>;

export declare interface MixedTypesGetOptionalParams extends OperationOptions {
}

export declare interface MixedTypesOperations {
    get: (options?: MixedTypesGetOptionalParams) => Promise<{
        prop: MixedTypesCases;
    }>;
    send: (prop: MixedTypesCases, options?: MixedTypesSendOptionalParams) => Promise<void>;
}

export declare function mixedTypesSend(context: UnionContext, prop: MixedTypesCases, options?: MixedTypesSendOptionalParams): Promise<void>;

export declare interface MixedTypesSendOptionalParams extends OperationOptions {
}

export declare function modelsOnlyGet(context: UnionContext, options?: ModelsOnlyGetOptionalParams): Promise<{
    prop: Cat | Dog;
}>;

export declare interface ModelsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface ModelsOnlyOperations {
    get: (options?: ModelsOnlyGetOptionalParams) => Promise<{
        prop: Cat | Dog;
    }>;
    send: (prop: Cat | Dog, options?: ModelsOnlySendOptionalParams) => Promise<void>;
}

export declare function modelsOnlySend(context: UnionContext, prop: Cat | Dog, options?: ModelsOnlySendOptionalParams): Promise<void>;

export declare interface ModelsOnlySendOptionalParams extends OperationOptions {
}

export declare interface StringAndArrayCases {
    string: string | string[];
    array: string | string[];
}

export declare type StringAndArrayCasesArray = string | string[];

export declare type StringAndArrayCasesString = string | string[];

export declare function stringAndArrayGet(context: UnionContext, options?: StringAndArrayGetOptionalParams): Promise<{
    prop: StringAndArrayCases;
}>;

export declare interface StringAndArrayGetOptionalParams extends OperationOptions {
}

export declare interface StringAndArrayOperations {
    get: (options?: StringAndArrayGetOptionalParams) => Promise<{
        prop: StringAndArrayCases;
    }>;
    send: (prop: StringAndArrayCases, options?: StringAndArraySendOptionalParams) => Promise<void>;
}

export declare function stringAndArraySend(context: UnionContext, prop: StringAndArrayCases, options?: StringAndArraySendOptionalParams): Promise<void>;

export declare interface StringAndArraySendOptionalParams extends OperationOptions {
}

export declare function stringExtensibleGet(context: UnionContext, options?: StringExtensibleGetOptionalParams): Promise<{
    prop: string | "b" | "c";
}>;

export declare interface StringExtensibleGetOptionalParams extends OperationOptions {
}

export declare function stringExtensibleNamedGet(context: UnionContext, options?: StringExtensibleNamedGetOptionalParams): Promise<{
    prop: StringExtensibleNamedUnion;
}>;

export declare interface StringExtensibleNamedGetOptionalParams extends OperationOptions {
}

export declare interface StringExtensibleNamedOperations {
    get: (options?: StringExtensibleNamedGetOptionalParams) => Promise<{
        prop: StringExtensibleNamedUnion;
    }>;
    send: (prop: StringExtensibleNamedUnion, options?: StringExtensibleNamedSendOptionalParams) => Promise<void>;
}

export declare function stringExtensibleNamedSend(context: UnionContext, prop: StringExtensibleNamedUnion, options?: StringExtensibleNamedSendOptionalParams): Promise<void>;

export declare interface StringExtensibleNamedSendOptionalParams extends OperationOptions {
}

export declare type StringExtensibleNamedUnion = string;

export declare interface StringExtensibleOperations {
    get: (options?: StringExtensibleGetOptionalParams) => Promise<{
        prop: string | "b" | "c";
    }>;
    send: (prop: string | "b" | "c", options?: StringExtensibleSendOptionalParams) => Promise<void>;
}

export declare function stringExtensibleSend(context: UnionContext, prop: string | "b" | "c", options?: StringExtensibleSendOptionalParams): Promise<void>;

export declare interface StringExtensibleSendOptionalParams extends OperationOptions {
}

export declare function stringsOnlyGet(context: UnionContext, options?: StringsOnlyGetOptionalParams): Promise<{
    prop: "a" | "b" | "c";
}>;

export declare interface StringsOnlyGetOptionalParams extends OperationOptions {
}

export declare interface StringsOnlyOperations {
    get: (options?: StringsOnlyGetOptionalParams) => Promise<{
        prop: "a" | "b" | "c";
    }>;
    send: (prop: "a" | "b" | "c", options?: StringsOnlySendOptionalParams) => Promise<void>;
}

export declare function stringsOnlySend(context: UnionContext, prop: "a" | "b" | "c", options?: StringsOnlySendOptionalParams): Promise<void>;

export declare interface StringsOnlySendOptionalParams extends OperationOptions {
}

export declare type Ud = "up" | "down";

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

export declare interface UnionContext extends Client {
}

export { }
