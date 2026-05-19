import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface BytesGetNonNullOptionalParams extends OperationOptions {
}

export declare interface BytesGetNullOptionalParams extends OperationOptions {
}

export declare interface BytesOperations {
    patchNull: (body: BytesProperty, options?: BytesPatchNullOptionalParams) => Promise<void>;
    patchNonNull: (body: BytesProperty, options?: BytesPatchNonNullOptionalParams) => Promise<void>;
    getNull: (options?: BytesGetNullOptionalParams) => Promise<BytesProperty>;
    getNonNull: (options?: BytesGetNonNullOptionalParams) => Promise<BytesProperty>;
}

export declare interface BytesPatchNonNullOptionalParams extends OperationOptions {
}

export declare interface BytesPatchNullOptionalParams extends OperationOptions {
}

export declare interface BytesProperty {
    requiredProperty: string;
    nullableProperty: Uint8Array | null;
}

export declare interface CollectionsByteGetNonNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsByteGetNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsByteOperations {
    patchNull: (body: CollectionsByteProperty, options?: CollectionsBytePatchNullOptionalParams) => Promise<void>;
    patchNonNull: (body: CollectionsByteProperty, options?: CollectionsBytePatchNonNullOptionalParams) => Promise<void>;
    getNull: (options?: CollectionsByteGetNullOptionalParams) => Promise<CollectionsByteProperty>;
    getNonNull: (options?: CollectionsByteGetNonNullOptionalParams) => Promise<CollectionsByteProperty>;
}

export declare interface CollectionsBytePatchNonNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsBytePatchNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsByteProperty {
    requiredProperty: string;
    nullableProperty: Uint8Array[] | null;
}

export declare interface CollectionsModelGetNonNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelGetNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelOperations {
    patchNull: (body: CollectionsModelProperty, options?: CollectionsModelPatchNullOptionalParams) => Promise<void>;
    patchNonNull: (body: CollectionsModelProperty, options?: CollectionsModelPatchNonNullOptionalParams) => Promise<void>;
    getNull: (options?: CollectionsModelGetNullOptionalParams) => Promise<CollectionsModelProperty>;
    getNonNull: (options?: CollectionsModelGetNonNullOptionalParams) => Promise<CollectionsModelProperty>;
}

export declare interface CollectionsModelPatchNonNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelPatchNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelProperty {
    requiredProperty: string;
    nullableProperty: InnerModel[] | null;
}

export declare interface CollectionsStringGetNonNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsStringGetNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsStringOperations {
    patchNull: (body: CollectionsStringProperty, options?: CollectionsStringPatchNullOptionalParams) => Promise<void>;
    patchNonNull: (body: CollectionsStringProperty, options?: CollectionsStringPatchNonNullOptionalParams) => Promise<void>;
    getNull: (options?: CollectionsStringGetNullOptionalParams) => Promise<CollectionsStringProperty>;
    getNonNull: (options?: CollectionsStringGetNonNullOptionalParams) => Promise<CollectionsStringProperty>;
}

export declare interface CollectionsStringPatchNonNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsStringPatchNullOptionalParams extends OperationOptions {
}

export declare interface CollectionsStringProperty {
    requiredProperty: string;
    nullableProperty: string[] | null;
}

export declare interface DatetimeGetNonNullOptionalParams extends OperationOptions {
}

export declare interface DatetimeGetNullOptionalParams extends OperationOptions {
}

export declare interface DatetimeOperations {
    patchNull: (body: DatetimeProperty, options?: DatetimePatchNullOptionalParams) => Promise<void>;
    patchNonNull: (body: DatetimeProperty, options?: DatetimePatchNonNullOptionalParams) => Promise<void>;
    getNull: (options?: DatetimeGetNullOptionalParams) => Promise<DatetimeProperty>;
    getNonNull: (options?: DatetimeGetNonNullOptionalParams) => Promise<DatetimeProperty>;
}

export declare interface DatetimePatchNonNullOptionalParams extends OperationOptions {
}

export declare interface DatetimePatchNullOptionalParams extends OperationOptions {
}

export declare interface DatetimeProperty {
    requiredProperty: string;
    nullableProperty: Date | null;
}

export declare interface DurationGetNonNullOptionalParams extends OperationOptions {
}

export declare interface DurationGetNullOptionalParams extends OperationOptions {
}

export declare interface DurationOperations {
    patchNull: (body: DurationProperty, options?: DurationPatchNullOptionalParams) => Promise<void>;
    patchNonNull: (body: DurationProperty, options?: DurationPatchNonNullOptionalParams) => Promise<void>;
    getNull: (options?: DurationGetNullOptionalParams) => Promise<DurationProperty>;
    getNonNull: (options?: DurationGetNonNullOptionalParams) => Promise<DurationProperty>;
}

export declare interface DurationPatchNonNullOptionalParams extends OperationOptions {
}

export declare interface DurationPatchNullOptionalParams extends OperationOptions {
}

export declare interface DurationProperty {
    requiredProperty: string;
    nullableProperty: string | null;
}

export declare interface InnerModel {
    property: string;
}

export declare class NullableClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: NullableClientOptionalParams);
    readonly collectionsString: CollectionsStringOperations;
    readonly collectionsModel: CollectionsModelOperations;
    readonly collectionsByte: CollectionsByteOperations;
    readonly duration: DurationOperations;
    readonly datetime: DatetimeOperations;
    readonly bytes: BytesOperations;
    readonly string: StringOperations;
}

export declare interface NullableClientOptionalParams extends ClientOptions {
}

export declare interface StringGetNonNullOptionalParams extends OperationOptions {
}

export declare interface StringGetNullOptionalParams extends OperationOptions {
}

export declare interface StringOperations {
    patchNull: (body: StringProperty, options?: StringPatchNullOptionalParams) => Promise<void>;
    patchNonNull: (body: StringProperty, options?: StringPatchNonNullOptionalParams) => Promise<void>;
    getNull: (options?: StringGetNullOptionalParams) => Promise<StringProperty>;
    getNonNull: (options?: StringGetNonNullOptionalParams) => Promise<StringProperty>;
}

export declare interface StringPatchNonNullOptionalParams extends OperationOptions {
}

export declare interface StringPatchNullOptionalParams extends OperationOptions {
}

export declare interface StringProperty {
    requiredProperty: string;
    nullableProperty: string | null;
}

export { }
