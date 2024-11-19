import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BooleanLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralOperations {
    getAll: (options?: BooleanLiteralGetAllOptionalParams) => Promise<BooleanLiteralProperty>;
    getDefault: (options?: BooleanLiteralGetDefaultOptionalParams) => Promise<BooleanLiteralProperty>;
    putAll: (body: BooleanLiteralProperty, options?: BooleanLiteralPutAllOptionalParams) => Promise<void>;
    putDefault: (body: BooleanLiteralProperty, options?: BooleanLiteralPutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: BytesGetAllOptionalParams) => Promise<BytesProperty>;
    getDefault: (options?: BytesGetDefaultOptionalParams) => Promise<BytesProperty>;
    putAll: (body: BytesProperty, options?: BytesPutAllOptionalParams) => Promise<void>;
    putDefault: (body: BytesProperty, options?: BytesPutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: CollectionsByteGetAllOptionalParams) => Promise<CollectionsByteProperty>;
    getDefault: (options?: CollectionsByteGetDefaultOptionalParams) => Promise<CollectionsByteProperty>;
    putAll: (body: CollectionsByteProperty, options?: CollectionsBytePutAllOptionalParams) => Promise<void>;
    putDefault: (body: CollectionsByteProperty, options?: CollectionsBytePutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: CollectionsModelGetAllOptionalParams) => Promise<CollectionsModelProperty>;
    getDefault: (options?: CollectionsModelGetDefaultOptionalParams) => Promise<CollectionsModelProperty>;
    putAll: (body: CollectionsModelProperty, options?: CollectionsModelPutAllOptionalParams) => Promise<void>;
    putDefault: (body: CollectionsModelProperty, options?: CollectionsModelPutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: DatetimeGetAllOptionalParams) => Promise<DatetimeProperty>;
    getDefault: (options?: DatetimeGetDefaultOptionalParams) => Promise<DatetimeProperty>;
    putAll: (body: DatetimeProperty, options?: DatetimePutAllOptionalParams) => Promise<void>;
    putDefault: (body: DatetimeProperty, options?: DatetimePutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: DurationGetAllOptionalParams) => Promise<DurationProperty>;
    getDefault: (options?: DurationGetDefaultOptionalParams) => Promise<DurationProperty>;
    putAll: (body: DurationProperty, options?: DurationPutAllOptionalParams) => Promise<void>;
    putDefault: (body: DurationProperty, options?: DurationPutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: FloatLiteralGetAllOptionalParams) => Promise<FloatLiteralProperty>;
    getDefault: (options?: FloatLiteralGetDefaultOptionalParams) => Promise<FloatLiteralProperty>;
    putAll: (body: FloatLiteralProperty, options?: FloatLiteralPutAllOptionalParams) => Promise<void>;
    putDefault: (body: FloatLiteralProperty, options?: FloatLiteralPutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: IntLiteralGetAllOptionalParams) => Promise<IntLiteralProperty>;
    getDefault: (options?: IntLiteralGetDefaultOptionalParams) => Promise<IntLiteralProperty>;
    putAll: (body: IntLiteralProperty, options?: IntLiteralPutAllOptionalParams) => Promise<void>;
    putDefault: (body: IntLiteralProperty, options?: IntLiteralPutDefaultOptionalParams) => Promise<void>;
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
    readonly string: StringModelOperations;
    readonly bytes: BytesOperations;
    readonly datetime: DatetimeOperations;
    readonly duration: DurationOperations;
    readonly plainDate: PlainDateOperations;
    readonly plainTime: PlainTimeOperations;
    readonly collectionsByte: CollectionsByteOperations;
    readonly collectionsModel: CollectionsModelOperations;
    readonly stringLiteral: StringLiteralOperations;
    readonly intLiteral: IntLiteralOperations;
    readonly floatLiteral: FloatLiteralOperations;
    readonly booleanLiteral: BooleanLiteralOperations;
    readonly unionStringLiteral: UnionStringLiteralOperations;
    readonly unionIntLiteral: UnionIntLiteralOperations;
    readonly unionFloatLiteral: UnionFloatLiteralOperations;
    readonly requiredAndOptional: RequiredAndOptionalOperations;
}

export declare interface OptionalClientOptionalParams extends ClientOptions {
}

export declare interface PlainDateGetAllOptionalParams extends OperationOptions {
}

export declare interface PlainDateGetDefaultOptionalParams extends OperationOptions {
}

export declare interface PlainDateOperations {
    getAll: (options?: PlainDateGetAllOptionalParams) => Promise<PlainDateProperty>;
    getDefault: (options?: PlainDateGetDefaultOptionalParams) => Promise<PlainDateProperty>;
    putAll: (body: PlainDateProperty, options?: PlainDatePutAllOptionalParams) => Promise<void>;
    putDefault: (body: PlainDateProperty, options?: PlainDatePutDefaultOptionalParams) => Promise<void>;
}

export declare interface PlainDateProperty {
    property?: string;
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
    getAll: (options?: PlainTimeGetAllOptionalParams) => Promise<PlainTimeProperty>;
    getDefault: (options?: PlainTimeGetDefaultOptionalParams) => Promise<PlainTimeProperty>;
    putAll: (body: PlainTimeProperty, options?: PlainTimePutAllOptionalParams) => Promise<void>;
    putDefault: (body: PlainTimeProperty, options?: PlainTimePutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: RequiredAndOptionalGetAllOptionalParams) => Promise<RequiredAndOptionalProperty>;
    getRequiredOnly: (options?: RequiredAndOptionalGetRequiredOnlyOptionalParams) => Promise<RequiredAndOptionalProperty>;
    putAll: (body: RequiredAndOptionalProperty, options?: RequiredAndOptionalPutAllOptionalParams) => Promise<void>;
    putRequiredOnly: (body: RequiredAndOptionalProperty, options?: RequiredAndOptionalPutRequiredOnlyOptionalParams) => Promise<void>;
}

export declare interface RequiredAndOptionalProperty {
    optionalProperty?: string;
    requiredProperty: number;
}

export declare interface RequiredAndOptionalPutAllOptionalParams extends OperationOptions {
}

export declare interface RequiredAndOptionalPutRequiredOnlyOptionalParams extends OperationOptions {
}

export declare interface StringLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface StringLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface StringLiteralOperations {
    getAll: (options?: StringLiteralGetAllOptionalParams) => Promise<StringLiteralProperty>;
    getDefault: (options?: StringLiteralGetDefaultOptionalParams) => Promise<StringLiteralProperty>;
    putAll: (body: StringLiteralProperty, options?: StringLiteralPutAllOptionalParams) => Promise<void>;
    putDefault: (body: StringLiteralProperty, options?: StringLiteralPutDefaultOptionalParams) => Promise<void>;
}

export declare interface StringLiteralProperty {
    property?: "hello";
}

export declare interface StringLiteralPutAllOptionalParams extends OperationOptions {
}

export declare interface StringLiteralPutDefaultOptionalParams extends OperationOptions {
}

export declare interface StringModelGetAllOptionalParams extends OperationOptions {
}

export declare interface StringModelGetDefaultOptionalParams extends OperationOptions {
}

export declare interface StringModelOperations {
    getAll: (options?: StringModelGetAllOptionalParams) => Promise<StringProperty>;
    getDefault: (options?: StringModelGetDefaultOptionalParams) => Promise<StringProperty>;
    putAll: (body: StringProperty, options?: StringModelPutAllOptionalParams) => Promise<void>;
    putDefault: (body: StringProperty, options?: StringModelPutDefaultOptionalParams) => Promise<void>;
}

export declare interface StringModelPutAllOptionalParams extends OperationOptions {
}

export declare interface StringModelPutDefaultOptionalParams extends OperationOptions {
}

export declare interface StringProperty {
    property?: string;
}

export declare interface UnionFloatLiteralGetAllOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralGetDefaultOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralOperations {
    getAll: (options?: UnionFloatLiteralGetAllOptionalParams) => Promise<UnionFloatLiteralProperty>;
    getDefault: (options?: UnionFloatLiteralGetDefaultOptionalParams) => Promise<UnionFloatLiteralProperty>;
    putAll: (body: UnionFloatLiteralProperty, options?: UnionFloatLiteralPutAllOptionalParams) => Promise<void>;
    putDefault: (body: UnionFloatLiteralProperty, options?: UnionFloatLiteralPutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: UnionIntLiteralGetAllOptionalParams) => Promise<UnionIntLiteralProperty>;
    getDefault: (options?: UnionIntLiteralGetDefaultOptionalParams) => Promise<UnionIntLiteralProperty>;
    putAll: (body: UnionIntLiteralProperty, options?: UnionIntLiteralPutAllOptionalParams) => Promise<void>;
    putDefault: (body: UnionIntLiteralProperty, options?: UnionIntLiteralPutDefaultOptionalParams) => Promise<void>;
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
    getAll: (options?: UnionStringLiteralGetAllOptionalParams) => Promise<UnionStringLiteralProperty>;
    getDefault: (options?: UnionStringLiteralGetDefaultOptionalParams) => Promise<UnionStringLiteralProperty>;
    putAll: (body: UnionStringLiteralProperty, options?: UnionStringLiteralPutAllOptionalParams) => Promise<void>;
    putDefault: (body: UnionStringLiteralProperty, options?: UnionStringLiteralPutDefaultOptionalParams) => Promise<void>;
}

export declare interface UnionStringLiteralProperty {
    property?: "hello" | "world";
}

export declare interface UnionStringLiteralPutAllOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralPutDefaultOptionalParams extends OperationOptions {
}

export { }
