import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface BooleanLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralOperations {
    putDefault: (body: BooleanLiteralProperty, options?: BooleanLiteralPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: BooleanLiteralProperty, options?: BooleanLiteralPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: BooleanLiteralGetDefaultOptionalParams) => Promise<BooleanLiteralProperty>;
    getAll: (options?: BooleanLiteralGetAllOptionalParams) => Promise<BooleanLiteralProperty>;
}

export declare interface BooleanLiteralProperty {
    property?: true;
}

export declare interface BooleanLiteralPutAllOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralPutDefaultOptionalParams extends OperationOptions {
}

export declare interface BytesGetAllOptionalParams extends OperationOptions {
}

export declare interface BytesGetDefaultOptionalParams extends OperationOptions {
}

export declare interface BytesOperations {
    putDefault: (body: BytesProperty, options?: BytesPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: BytesProperty, options?: BytesPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: BytesGetDefaultOptionalParams) => Promise<BytesProperty>;
    getAll: (options?: BytesGetAllOptionalParams) => Promise<BytesProperty>;
}

export declare interface BytesProperty {
    property?: Uint8Array;
}

export declare interface BytesPutAllOptionalParams extends OperationOptions {
}

export declare interface BytesPutDefaultOptionalParams extends OperationOptions {
}

export declare interface CollectionsByteGetAllOptionalParams extends OperationOptions {
}

export declare interface CollectionsByteGetDefaultOptionalParams extends OperationOptions {
}

export declare interface CollectionsByteOperations {
    putDefault: (body: CollectionsByteProperty, options?: CollectionsBytePutDefaultOptionalParams) => Promise<void>;
    putAll: (body: CollectionsByteProperty, options?: CollectionsBytePutAllOptionalParams) => Promise<void>;
    getDefault: (options?: CollectionsByteGetDefaultOptionalParams) => Promise<CollectionsByteProperty>;
    getAll: (options?: CollectionsByteGetAllOptionalParams) => Promise<CollectionsByteProperty>;
}

export declare interface CollectionsByteProperty {
    property?: Uint8Array[];
}

export declare interface CollectionsBytePutAllOptionalParams extends OperationOptions {
}

export declare interface CollectionsBytePutDefaultOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelGetAllOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelGetDefaultOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelOperations {
    putDefault: (body: CollectionsModelProperty, options?: CollectionsModelPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: CollectionsModelProperty, options?: CollectionsModelPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: CollectionsModelGetDefaultOptionalParams) => Promise<CollectionsModelProperty>;
    getAll: (options?: CollectionsModelGetAllOptionalParams) => Promise<CollectionsModelProperty>;
}

export declare interface CollectionsModelProperty {
    property?: StringProperty[];
}

export declare interface CollectionsModelPutAllOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelPutDefaultOptionalParams extends OperationOptions {
}

export declare interface DatetimeGetAllOptionalParams extends OperationOptions {
}

export declare interface DatetimeGetDefaultOptionalParams extends OperationOptions {
}

export declare interface DatetimeOperations {
    putDefault: (body: DatetimeProperty, options?: DatetimePutDefaultOptionalParams) => Promise<void>;
    putAll: (body: DatetimeProperty, options?: DatetimePutAllOptionalParams) => Promise<void>;
    getDefault: (options?: DatetimeGetDefaultOptionalParams) => Promise<DatetimeProperty>;
    getAll: (options?: DatetimeGetAllOptionalParams) => Promise<DatetimeProperty>;
}

export declare interface DatetimeProperty {
    property?: Date;
}

export declare interface DatetimePutAllOptionalParams extends OperationOptions {
}

export declare interface DatetimePutDefaultOptionalParams extends OperationOptions {
}

export declare interface DurationGetAllOptionalParams extends OperationOptions {
}

export declare interface DurationGetDefaultOptionalParams extends OperationOptions {
}

export declare interface DurationOperations {
    putDefault: (body: DurationProperty, options?: DurationPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: DurationProperty, options?: DurationPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: DurationGetDefaultOptionalParams) => Promise<DurationProperty>;
    getAll: (options?: DurationGetAllOptionalParams) => Promise<DurationProperty>;
}

export declare interface DurationProperty {
    property?: string;
}

export declare interface DurationPutAllOptionalParams extends OperationOptions {
}

export declare interface DurationPutDefaultOptionalParams extends OperationOptions {
}

export declare interface FloatLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface FloatLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface FloatLiteralOperations {
    putDefault: (body: FloatLiteralProperty, options?: FloatLiteralPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: FloatLiteralProperty, options?: FloatLiteralPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: FloatLiteralGetDefaultOptionalParams) => Promise<FloatLiteralProperty>;
    getAll: (options?: FloatLiteralGetAllOptionalParams) => Promise<FloatLiteralProperty>;
}

export declare interface FloatLiteralProperty {
    property?: 1.25;
}

export declare interface FloatLiteralPutAllOptionalParams extends OperationOptions {
}

export declare interface FloatLiteralPutDefaultOptionalParams extends OperationOptions {
}

export declare interface IntLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface IntLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface IntLiteralOperations {
    putDefault: (body: IntLiteralProperty, options?: IntLiteralPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: IntLiteralProperty, options?: IntLiteralPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: IntLiteralGetDefaultOptionalParams) => Promise<IntLiteralProperty>;
    getAll: (options?: IntLiteralGetAllOptionalParams) => Promise<IntLiteralProperty>;
}

export declare interface IntLiteralProperty {
    property?: 1;
}

export declare interface IntLiteralPutAllOptionalParams extends OperationOptions {
}

export declare interface IntLiteralPutDefaultOptionalParams extends OperationOptions {
}

export declare class OptionalClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: OptionalClientOptionalParams);
    readonly requiredAndOptional: RequiredAndOptionalOperations;
    readonly unionFloatLiteral: UnionFloatLiteralOperations;
    readonly unionIntLiteral: UnionIntLiteralOperations;
    readonly unionStringLiteral: UnionStringLiteralOperations;
    readonly booleanLiteral: BooleanLiteralOperations;
    readonly floatLiteral: FloatLiteralOperations;
    readonly intLiteral: IntLiteralOperations;
    readonly stringLiteral: StringLiteralOperations;
    readonly collectionsModel: CollectionsModelOperations;
    readonly collectionsByte: CollectionsByteOperations;
    readonly plainTime: PlainTimeOperations;
    readonly plainDate: PlainDateOperations;
    readonly duration: DurationOperations;
    readonly datetime: DatetimeOperations;
    readonly bytes: BytesOperations;
    readonly string: StringOperations;
}

export declare interface OptionalClientOptionalParams extends ClientOptions {
}

export declare interface PlainDateGetAllOptionalParams extends OperationOptions {
}

export declare interface PlainDateGetDefaultOptionalParams extends OperationOptions {
}

export declare interface PlainDateOperations {
    putDefault: (body: PlainDateProperty, options?: PlainDatePutDefaultOptionalParams) => Promise<void>;
    putAll: (body: PlainDateProperty, options?: PlainDatePutAllOptionalParams) => Promise<void>;
    getDefault: (options?: PlainDateGetDefaultOptionalParams) => Promise<PlainDateProperty>;
    getAll: (options?: PlainDateGetAllOptionalParams) => Promise<PlainDateProperty>;
}

export declare interface PlainDateProperty {
    property?: Date;
}

export declare interface PlainDatePutAllOptionalParams extends OperationOptions {
}

export declare interface PlainDatePutDefaultOptionalParams extends OperationOptions {
}

export declare interface PlainTimeGetAllOptionalParams extends OperationOptions {
}

export declare interface PlainTimeGetDefaultOptionalParams extends OperationOptions {
}

export declare interface PlainTimeOperations {
    putDefault: (body: PlainTimeProperty, options?: PlainTimePutDefaultOptionalParams) => Promise<void>;
    putAll: (body: PlainTimeProperty, options?: PlainTimePutAllOptionalParams) => Promise<void>;
    getDefault: (options?: PlainTimeGetDefaultOptionalParams) => Promise<PlainTimeProperty>;
    getAll: (options?: PlainTimeGetAllOptionalParams) => Promise<PlainTimeProperty>;
}

export declare interface PlainTimeProperty {
    property?: string;
}

export declare interface PlainTimePutAllOptionalParams extends OperationOptions {
}

export declare interface PlainTimePutDefaultOptionalParams extends OperationOptions {
}

export declare interface RequiredAndOptionalGetAllOptionalParams extends OperationOptions {
}

export declare interface RequiredAndOptionalGetRequiredOnlyOptionalParams extends OperationOptions {
}

export declare interface RequiredAndOptionalOperations {
    putRequiredOnly: (body: RequiredAndOptionalProperty, options?: RequiredAndOptionalPutRequiredOnlyOptionalParams) => Promise<void>;
    putAll: (body: RequiredAndOptionalProperty, options?: RequiredAndOptionalPutAllOptionalParams) => Promise<void>;
    getRequiredOnly: (options?: RequiredAndOptionalGetRequiredOnlyOptionalParams) => Promise<RequiredAndOptionalProperty>;
    getAll: (options?: RequiredAndOptionalGetAllOptionalParams) => Promise<RequiredAndOptionalProperty>;
}

export declare interface RequiredAndOptionalProperty {
    optionalProperty?: string;
    requiredProperty: number;
}

export declare interface RequiredAndOptionalPutAllOptionalParams extends OperationOptions {
}

export declare interface RequiredAndOptionalPutRequiredOnlyOptionalParams extends OperationOptions {
}

export declare interface StringGetAllOptionalParams extends OperationOptions {
}

export declare interface StringGetDefaultOptionalParams extends OperationOptions {
}

export declare interface StringLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface StringLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface StringLiteralOperations {
    putDefault: (body: StringLiteralProperty, options?: StringLiteralPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: StringLiteralProperty, options?: StringLiteralPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: StringLiteralGetDefaultOptionalParams) => Promise<StringLiteralProperty>;
    getAll: (options?: StringLiteralGetAllOptionalParams) => Promise<StringLiteralProperty>;
}

export declare interface StringLiteralProperty {
    property?: "hello";
}

export declare interface StringLiteralPutAllOptionalParams extends OperationOptions {
}

export declare interface StringLiteralPutDefaultOptionalParams extends OperationOptions {
}

export declare interface StringOperations {
    putDefault: (body: StringProperty, options?: StringPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: StringProperty, options?: StringPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: StringGetDefaultOptionalParams) => Promise<StringProperty>;
    getAll: (options?: StringGetAllOptionalParams) => Promise<StringProperty>;
}

export declare interface StringProperty {
    property?: string;
}

export declare interface StringPutAllOptionalParams extends OperationOptions {
}

export declare interface StringPutDefaultOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralOperations {
    putDefault: (body: UnionFloatLiteralProperty, options?: UnionFloatLiteralPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: UnionFloatLiteralProperty, options?: UnionFloatLiteralPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: UnionFloatLiteralGetDefaultOptionalParams) => Promise<UnionFloatLiteralProperty>;
    getAll: (options?: UnionFloatLiteralGetAllOptionalParams) => Promise<UnionFloatLiteralProperty>;
}

export declare interface UnionFloatLiteralProperty {
    property?: 1.25 | 2.375;
}

export declare interface UnionFloatLiteralPutAllOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralPutDefaultOptionalParams extends OperationOptions {
}

export declare interface UnionIntLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface UnionIntLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface UnionIntLiteralOperations {
    putDefault: (body: UnionIntLiteralProperty, options?: UnionIntLiteralPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: UnionIntLiteralProperty, options?: UnionIntLiteralPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: UnionIntLiteralGetDefaultOptionalParams) => Promise<UnionIntLiteralProperty>;
    getAll: (options?: UnionIntLiteralGetAllOptionalParams) => Promise<UnionIntLiteralProperty>;
}

export declare interface UnionIntLiteralProperty {
    property?: 1 | 2;
}

export declare interface UnionIntLiteralPutAllOptionalParams extends OperationOptions {
}

export declare interface UnionIntLiteralPutDefaultOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralOperations {
    putDefault: (body: UnionStringLiteralProperty, options?: UnionStringLiteralPutDefaultOptionalParams) => Promise<void>;
    putAll: (body: UnionStringLiteralProperty, options?: UnionStringLiteralPutAllOptionalParams) => Promise<void>;
    getDefault: (options?: UnionStringLiteralGetDefaultOptionalParams) => Promise<UnionStringLiteralProperty>;
    getAll: (options?: UnionStringLiteralGetAllOptionalParams) => Promise<UnionStringLiteralProperty>;
}

export declare interface UnionStringLiteralProperty {
    property?: "hello" | "world";
}

export declare interface UnionStringLiteralPutAllOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralPutDefaultOptionalParams extends OperationOptions {
}

export { }
