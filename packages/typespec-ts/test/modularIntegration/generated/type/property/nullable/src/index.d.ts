import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BytesGetNonNullOptionalParams extends OperationOptions {
}

export declare interface BytesGetNullOptionalParams extends OperationOptions {
}

export declare interface BytesOperations {
    getNonNull: (options?: BytesGetNonNullOptionalParams) => Promise<BytesProperty>;
    getNull: (options?: BytesGetNullOptionalParams) => Promise<BytesProperty>;
    patchNonNull: (body: BytesProperty, options?: BytesPatchNonNullOptionalParams) => Promise<void>;
    patchNull: (body: BytesProperty, options?: BytesPatchNullOptionalParams) => Promise<void>;
}

export declare interface BytesPatchNonNullOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface BytesPatchNullOptionalParams extends OperationOptions {
    contentType?: string;
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
    getNonNull: (options?: CollectionsByteGetNonNullOptionalParams) => Promise<CollectionsByteProperty>;
    getNull: (options?: CollectionsByteGetNullOptionalParams) => Promise<CollectionsByteProperty>;
    patchNonNull: (body: CollectionsByteProperty, options?: CollectionsBytePatchNonNullOptionalParams) => Promise<void>;
    patchNull: (body: CollectionsByteProperty, options?: CollectionsBytePatchNullOptionalParams) => Promise<void>;
}

export declare interface CollectionsBytePatchNonNullOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface CollectionsBytePatchNullOptionalParams extends OperationOptions {
    contentType?: string;
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
    getNonNull: (options?: CollectionsModelGetNonNullOptionalParams) => Promise<CollectionsModelProperty>;
    getNull: (options?: CollectionsModelGetNullOptionalParams) => Promise<CollectionsModelProperty>;
    patchNonNull: (body: CollectionsModelProperty, options?: CollectionsModelPatchNonNullOptionalParams) => Promise<void>;
    patchNull: (body: CollectionsModelProperty, options?: CollectionsModelPatchNullOptionalParams) => Promise<void>;
}

export declare interface CollectionsModelPatchNonNullOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface CollectionsModelPatchNullOptionalParams extends OperationOptions {
    contentType?: string;
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
    getNonNull: (options?: CollectionsStringGetNonNullOptionalParams) => Promise<CollectionsStringProperty>;
    getNull: (options?: CollectionsStringGetNullOptionalParams) => Promise<CollectionsStringProperty>;
    patchNonNull: (body: CollectionsStringProperty, options?: CollectionsStringPatchNonNullOptionalParams) => Promise<void>;
    patchNull: (body: CollectionsStringProperty, options?: CollectionsStringPatchNullOptionalParams) => Promise<void>;
}

export declare interface CollectionsStringPatchNonNullOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface CollectionsStringPatchNullOptionalParams extends OperationOptions {
    contentType?: string;
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
    getNonNull: (options?: DatetimeGetNonNullOptionalParams) => Promise<DatetimeProperty>;
    getNull: (options?: DatetimeGetNullOptionalParams) => Promise<DatetimeProperty>;
    patchNonNull: (body: DatetimeProperty, options?: DatetimePatchNonNullOptionalParams) => Promise<void>;
    patchNull: (body: DatetimeProperty, options?: DatetimePatchNullOptionalParams) => Promise<void>;
}

export declare interface DatetimePatchNonNullOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface DatetimePatchNullOptionalParams extends OperationOptions {
    contentType?: string;
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
    getNonNull: (options?: DurationGetNonNullOptionalParams) => Promise<DurationProperty>;
    getNull: (options?: DurationGetNullOptionalParams) => Promise<DurationProperty>;
    patchNonNull: (body: DurationProperty, options?: DurationPatchNonNullOptionalParams) => Promise<void>;
    patchNull: (body: DurationProperty, options?: DurationPatchNullOptionalParams) => Promise<void>;
}

export declare interface DurationPatchNonNullOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface DurationPatchNullOptionalParams extends OperationOptions {
    contentType?: string;
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
    readonly string: StringModelOperations;
    readonly bytes: BytesOperations;
    readonly datetime: DatetimeOperations;
    readonly duration: DurationOperations;
    readonly collectionsByte: CollectionsByteOperations;
    readonly collectionsModel: CollectionsModelOperations;
    readonly collectionsString: CollectionsStringOperations;
}

export declare interface NullableClientOptionalParams extends ClientOptions {
}

export declare interface StringModelGetNonNullOptionalParams extends OperationOptions {
}

export declare interface StringModelGetNullOptionalParams extends OperationOptions {
}

export declare interface StringModelOperations {
    getNonNull: (options?: StringModelGetNonNullOptionalParams) => Promise<StringProperty>;
    getNull: (options?: StringModelGetNullOptionalParams) => Promise<StringProperty>;
    patchNonNull: (body: StringProperty, options?: StringModelPatchNonNullOptionalParams) => Promise<void>;
    patchNull: (body: StringProperty, options?: StringModelPatchNullOptionalParams) => Promise<void>;
}

export declare interface StringModelPatchNonNullOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface StringModelPatchNullOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface StringProperty {
    requiredProperty: string;
    nullableProperty: string | null;
}

export { }
