import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ArrayClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ArrayClientOptionalParams);
    readonly int32Value: Int32ValueOperations;
    readonly int64Value: Int64ValueOperations;
    readonly booleanValue: BooleanValueOperations;
    readonly stringValue: StringValueOperations;
    readonly float32Value: Float32ValueOperations;
    readonly datetimeValue: DatetimeValueOperations;
    readonly durationValue: DurationValueOperations;
    readonly unknownValue: UnknownValueOperations;
    readonly modelValue: ModelValueOperations;
    readonly nullableFloatValue: NullableFloatValueOperations;
    readonly nullableInt32Value: NullableInt32ValueOperations;
    readonly nullableBooleanValue: NullableBooleanValueOperations;
    readonly nullableStringValue: NullableStringValueOperations;
    readonly nullableModelValue: NullableModelValueOperations;
}

export declare interface ArrayClientOptionalParams extends ClientOptions {
}

export declare interface BooleanValueGetOptionalParams extends OperationOptions {
}

export declare interface BooleanValueOperations {
    get: (options?: BooleanValueGetOptionalParams) => Promise<boolean[]>;
    put: (body: boolean[], options?: BooleanValuePutOptionalParams) => Promise<void>;
}

export declare interface BooleanValuePutOptionalParams extends OperationOptions {
}

export declare interface DatetimeValueGetOptionalParams extends OperationOptions {
}

export declare interface DatetimeValueOperations {
    get: (options?: DatetimeValueGetOptionalParams) => Promise<Date[]>;
    put: (body: Date[], options?: DatetimeValuePutOptionalParams) => Promise<void>;
}

export declare interface DatetimeValuePutOptionalParams extends OperationOptions {
}

export declare interface DurationValueGetOptionalParams extends OperationOptions {
}

export declare interface DurationValueOperations {
    get: (options?: DurationValueGetOptionalParams) => Promise<string[]>;
    put: (body: string[], options?: DurationValuePutOptionalParams) => Promise<void>;
}

export declare interface DurationValuePutOptionalParams extends OperationOptions {
}

export declare interface Float32ValueGetOptionalParams extends OperationOptions {
}

export declare interface Float32ValueOperations {
    get: (options?: Float32ValueGetOptionalParams) => Promise<number[]>;
    put: (body: number[], options?: Float32ValuePutOptionalParams) => Promise<void>;
}

export declare interface Float32ValuePutOptionalParams extends OperationOptions {
}

export declare interface InnerModel {
    property: string;
    children?: InnerModel[];
}

export declare interface Int32ValueGetOptionalParams extends OperationOptions {
}

export declare interface Int32ValueOperations {
    get: (options?: Int32ValueGetOptionalParams) => Promise<number[]>;
    put: (body: number[], options?: Int32ValuePutOptionalParams) => Promise<void>;
}

export declare interface Int32ValuePutOptionalParams extends OperationOptions {
}

export declare interface Int64ValueGetOptionalParams extends OperationOptions {
}

export declare interface Int64ValueOperations {
    get: (options?: Int64ValueGetOptionalParams) => Promise<number[]>;
    put: (body: number[], options?: Int64ValuePutOptionalParams) => Promise<void>;
}

export declare interface Int64ValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelValueOperations {
    get: (options?: ModelValueGetOptionalParams) => Promise<InnerModel[]>;
    put: (body: InnerModel[], options?: ModelValuePutOptionalParams) => Promise<void>;
}

export declare interface ModelValuePutOptionalParams extends OperationOptions {
}

export declare interface NullableBooleanValueGetOptionalParams extends OperationOptions {
}

export declare interface NullableBooleanValueOperations {
    get: (options?: NullableBooleanValueGetOptionalParams) => Promise<(boolean | null)[]>;
    put: (body: (boolean | null)[], options?: NullableBooleanValuePutOptionalParams) => Promise<void>;
}

export declare interface NullableBooleanValuePutOptionalParams extends OperationOptions {
}

export declare interface NullableFloatValueGetOptionalParams extends OperationOptions {
}

export declare interface NullableFloatValueOperations {
    get: (options?: NullableFloatValueGetOptionalParams) => Promise<(number | null)[]>;
    put: (body: (number | null)[], options?: NullableFloatValuePutOptionalParams) => Promise<void>;
}

export declare interface NullableFloatValuePutOptionalParams extends OperationOptions {
}

export declare interface NullableInt32ValueGetOptionalParams extends OperationOptions {
}

export declare interface NullableInt32ValueOperations {
    get: (options?: NullableInt32ValueGetOptionalParams) => Promise<(number | null)[]>;
    put: (body: (number | null)[], options?: NullableInt32ValuePutOptionalParams) => Promise<void>;
}

export declare interface NullableInt32ValuePutOptionalParams extends OperationOptions {
}

export declare interface NullableModelValueGetOptionalParams extends OperationOptions {
}

export declare interface NullableModelValueOperations {
    get: (options?: NullableModelValueGetOptionalParams) => Promise<(InnerModel | null)[]>;
    put: (body: (InnerModel | null)[], options?: NullableModelValuePutOptionalParams) => Promise<void>;
}

export declare interface NullableModelValuePutOptionalParams extends OperationOptions {
}

export declare interface NullableStringValueGetOptionalParams extends OperationOptions {
}

export declare interface NullableStringValueOperations {
    get: (options?: NullableStringValueGetOptionalParams) => Promise<(string | null)[]>;
    put: (body: (string | null)[], options?: NullableStringValuePutOptionalParams) => Promise<void>;
}

export declare interface NullableStringValuePutOptionalParams extends OperationOptions {
}

export declare interface StringValueGetOptionalParams extends OperationOptions {
}

export declare interface StringValueOperations {
    get: (options?: StringValueGetOptionalParams) => Promise<string[]>;
    put: (body: string[], options?: StringValuePutOptionalParams) => Promise<void>;
}

export declare interface StringValuePutOptionalParams extends OperationOptions {
}

export declare interface UnknownValueGetOptionalParams extends OperationOptions {
}

export declare interface UnknownValueOperations {
    get: (options?: UnknownValueGetOptionalParams) => Promise<any[]>;
    put: (body: any[], options?: UnknownValuePutOptionalParams) => Promise<void>;
}

export declare interface UnknownValuePutOptionalParams extends OperationOptions {
}

export { }
