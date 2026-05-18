import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare class ArrayClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ArrayClientOptionalParams);
    readonly nullableModelValue: NullableModelValueOperations;
    readonly nullableStringValue: NullableStringValueOperations;
    readonly nullableBooleanValue: NullableBooleanValueOperations;
    readonly nullableInt32Value: NullableInt32ValueOperations;
    readonly nullableFloatValue: NullableFloatValueOperations;
    readonly modelValue: ModelValueOperations;
    readonly unknownValue: UnknownValueOperations;
    readonly durationValue: DurationValueOperations;
    readonly datetimeValue: DatetimeValueOperations;
    readonly float32Value: Float32ValueOperations;
    readonly stringValue: StringValueOperations;
    readonly booleanValue: BooleanValueOperations;
    readonly int64Value: Int64ValueOperations;
    readonly int32Value: Int32ValueOperations;
}

export declare interface ArrayClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

declare interface BooleanValueGetOptionalParams extends OperationOptions {
}

export declare type BooleanValueGetResponse = {
    body: boolean[];
};

export declare interface BooleanValueOperations {
    put: (body: boolean[], options?: BooleanValuePutOptionalParams) => Promise<void>;
    get: (options?: BooleanValueGetOptionalParams) => Promise<BooleanValueGetResponse>;
}

declare interface BooleanValuePutOptionalParams extends OperationOptions {
}

declare interface DatetimeValueGetOptionalParams extends OperationOptions {
}

export declare type DatetimeValueGetResponse = {
    body: Date[];
};

export declare interface DatetimeValueOperations {
    put: (body: Date[], options?: DatetimeValuePutOptionalParams) => Promise<void>;
    get: (options?: DatetimeValueGetOptionalParams) => Promise<DatetimeValueGetResponse>;
}

declare interface DatetimeValuePutOptionalParams extends OperationOptions {
}

declare interface DurationValueGetOptionalParams extends OperationOptions {
}

export declare type DurationValueGetResponse = {
    body: string[];
};

export declare interface DurationValueOperations {
    put: (body: string[], options?: DurationValuePutOptionalParams) => Promise<void>;
    get: (options?: DurationValueGetOptionalParams) => Promise<DurationValueGetResponse>;
}

declare interface DurationValuePutOptionalParams extends OperationOptions {
}

declare interface Float32ValueGetOptionalParams extends OperationOptions {
}

export declare type Float32ValueGetResponse = {
    body: number[];
};

export declare interface Float32ValueOperations {
    put: (body: number[], options?: Float32ValuePutOptionalParams) => Promise<void>;
    get: (options?: Float32ValueGetOptionalParams) => Promise<Float32ValueGetResponse>;
}

declare interface Float32ValuePutOptionalParams extends OperationOptions {
}

export declare interface InnerModel {
    property: string;
    children?: InnerModel[];
}

declare interface Int32ValueGetOptionalParams extends OperationOptions {
}

export declare type Int32ValueGetResponse = {
    body: number[];
};

export declare interface Int32ValueOperations {
    put: (body: number[], options?: Int32ValuePutOptionalParams) => Promise<void>;
    get: (options?: Int32ValueGetOptionalParams) => Promise<Int32ValueGetResponse>;
}

declare interface Int32ValuePutOptionalParams extends OperationOptions {
}

declare interface Int64ValueGetOptionalParams extends OperationOptions {
}

export declare type Int64ValueGetResponse = {
    body: number[];
};

export declare interface Int64ValueOperations {
    put: (body: number[], options?: Int64ValuePutOptionalParams) => Promise<void>;
    get: (options?: Int64ValueGetOptionalParams) => Promise<Int64ValueGetResponse>;
}

declare interface Int64ValuePutOptionalParams extends OperationOptions {
}

export { isRestError }

declare interface ModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelValueOperations {
    put: (body: InnerModel[], options?: ModelValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelValueGetOptionalParams) => Promise<InnerModel[]>;
}

declare interface ModelValuePutOptionalParams extends OperationOptions {
}

declare interface NullableBooleanValueGetOptionalParams extends OperationOptions {
}

export declare type NullableBooleanValueGetResponse = {
    body: (boolean | null)[];
};

export declare interface NullableBooleanValueOperations {
    put: (body: (boolean | null)[], options?: NullableBooleanValuePutOptionalParams) => Promise<void>;
    get: (options?: NullableBooleanValueGetOptionalParams) => Promise<NullableBooleanValueGetResponse>;
}

declare interface NullableBooleanValuePutOptionalParams extends OperationOptions {
}

declare interface NullableFloatValueGetOptionalParams extends OperationOptions {
}

export declare type NullableFloatValueGetResponse = {
    body: (number | null)[];
};

export declare interface NullableFloatValueOperations {
    put: (body: (number | null)[], options?: NullableFloatValuePutOptionalParams) => Promise<void>;
    get: (options?: NullableFloatValueGetOptionalParams) => Promise<NullableFloatValueGetResponse>;
}

declare interface NullableFloatValuePutOptionalParams extends OperationOptions {
}

declare interface NullableInt32ValueGetOptionalParams extends OperationOptions {
}

export declare type NullableInt32ValueGetResponse = {
    body: (number | null)[];
};

export declare interface NullableInt32ValueOperations {
    put: (body: (number | null)[], options?: NullableInt32ValuePutOptionalParams) => Promise<void>;
    get: (options?: NullableInt32ValueGetOptionalParams) => Promise<NullableInt32ValueGetResponse>;
}

declare interface NullableInt32ValuePutOptionalParams extends OperationOptions {
}

declare interface NullableModelValueGetOptionalParams extends OperationOptions {
}

export declare type NullableModelValueGetResponse = {
    body: (InnerModel | null)[];
};

export declare interface NullableModelValueOperations {
    put: (body: (InnerModel | null)[], options?: NullableModelValuePutOptionalParams) => Promise<void>;
    get: (options?: NullableModelValueGetOptionalParams) => Promise<NullableModelValueGetResponse>;
}

declare interface NullableModelValuePutOptionalParams extends OperationOptions {
}

declare interface NullableStringValueGetOptionalParams extends OperationOptions {
}

export declare type NullableStringValueGetResponse = {
    body: (string | null)[];
};

export declare interface NullableStringValueOperations {
    put: (body: (string | null)[], options?: NullableStringValuePutOptionalParams) => Promise<void>;
    get: (options?: NullableStringValueGetOptionalParams) => Promise<NullableStringValueGetResponse>;
}

declare interface NullableStringValuePutOptionalParams extends OperationOptions {
}

export { RestError }

declare interface StringValueGetOptionalParams extends OperationOptions {
}

export declare type StringValueGetResponse = {
    body: string[];
};

export declare interface StringValueOperations {
    put: (body: string[], options?: StringValuePutOptionalParams) => Promise<void>;
    get: (options?: StringValueGetOptionalParams) => Promise<StringValueGetResponse>;
}

declare interface StringValuePutOptionalParams extends OperationOptions {
}

declare interface UnknownValueGetOptionalParams extends OperationOptions {
}

export declare type UnknownValueGetResponse = {
    body: any[];
};

export declare interface UnknownValueOperations {
    put: (body: any[], options?: UnknownValuePutOptionalParams) => Promise<void>;
    get: (options?: UnknownValueGetOptionalParams) => Promise<UnknownValueGetResponse>;
}

declare interface UnknownValuePutOptionalParams extends OperationOptions {
}

export { }
