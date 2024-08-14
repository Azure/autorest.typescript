import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BooleanValueGetOptionalParams extends OperationOptions {
}

export declare interface BooleanValueOperations {
    get: (options?: BooleanValueGetOptionalParams) => Promise<Record<string, boolean>>;
    put: (body: Record<string, boolean>, options?: BooleanValuePutOptionalParams) => Promise<void>;
}

export declare interface BooleanValuePutOptionalParams extends OperationOptions {
}

export declare interface DatetimeValueGetOptionalParams extends OperationOptions {
}

export declare interface DatetimeValueOperations {
    get: (options?: DatetimeValueGetOptionalParams) => Promise<Record<string, Date>>;
    put: (body: Record<string, Date>, options?: DatetimeValuePutOptionalParams) => Promise<void>;
}

export declare interface DatetimeValuePutOptionalParams extends OperationOptions {
}

export declare class DictionaryClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DictionaryClientOptionalParams);
    readonly int32Value: Int32ValueOperations;
    readonly int64Value: Int64ValueOperations;
    readonly booleanValue: BooleanValueOperations;
    readonly stringValue: StringValueOperations;
    readonly float32Value: Float32ValueOperations;
    readonly datetimeValue: DatetimeValueOperations;
    readonly durationValue: DurationValueOperations;
    readonly unknownValue: UnknownValueOperations;
    readonly modelValue: ModelValueOperations;
    readonly recursiveModelValue: RecursiveModelValueOperations;
    readonly nullableFloatValue: NullableFloatValueOperations;
}

export declare interface DictionaryClientOptionalParams extends ClientOptions {
}

export declare interface DurationValueGetOptionalParams extends OperationOptions {
}

export declare interface DurationValueOperations {
    get: (options?: DurationValueGetOptionalParams) => Promise<Record<string, string>>;
    put: (body: Record<string, string>, options?: DurationValuePutOptionalParams) => Promise<void>;
}

export declare interface DurationValuePutOptionalParams extends OperationOptions {
}

export declare interface Float32ValueGetOptionalParams extends OperationOptions {
}

export declare interface Float32ValueOperations {
    get: (options?: Float32ValueGetOptionalParams) => Promise<Record<string, number>>;
    put: (body: Record<string, number>, options?: Float32ValuePutOptionalParams) => Promise<void>;
}

export declare interface Float32ValuePutOptionalParams extends OperationOptions {
}

export declare interface InnerModel {
    property: string;
    children?: Record<string, InnerModel>;
}

export declare interface Int32ValueGetOptionalParams extends OperationOptions {
}

export declare interface Int32ValueOperations {
    get: (options?: Int32ValueGetOptionalParams) => Promise<Record<string, number>>;
    put: (body: Record<string, number>, options?: Int32ValuePutOptionalParams) => Promise<void>;
}

export declare interface Int32ValuePutOptionalParams extends OperationOptions {
}

export declare interface Int64ValueGetOptionalParams extends OperationOptions {
}

export declare interface Int64ValueOperations {
    get: (options?: Int64ValueGetOptionalParams) => Promise<Record<string, number>>;
    put: (body: Record<string, number>, options?: Int64ValuePutOptionalParams) => Promise<void>;
}

export declare interface Int64ValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelValueOperations {
    get: (options?: ModelValueGetOptionalParams) => Promise<Record<string, InnerModel>>;
    put: (body: Record<string, InnerModel>, options?: ModelValuePutOptionalParams) => Promise<void>;
}

export declare interface ModelValuePutOptionalParams extends OperationOptions {
}

export declare interface NullableFloatValueGetOptionalParams extends OperationOptions {
}

export declare interface NullableFloatValueOperations {
    get: (options?: NullableFloatValueGetOptionalParams) => Promise<Record<string, number | null>>;
    put: (body: Record<string, number | null>, options?: NullableFloatValuePutOptionalParams) => Promise<void>;
}

export declare interface NullableFloatValuePutOptionalParams extends OperationOptions {
}

export declare interface RecursiveModelValueGetOptionalParams extends OperationOptions {
}

export declare interface RecursiveModelValueOperations {
    get: (options?: RecursiveModelValueGetOptionalParams) => Promise<Record<string, InnerModel>>;
    put: (body: Record<string, InnerModel>, options?: RecursiveModelValuePutOptionalParams) => Promise<void>;
}

export declare interface RecursiveModelValuePutOptionalParams extends OperationOptions {
}

export declare interface StringValueGetOptionalParams extends OperationOptions {
}

export declare interface StringValueOperations {
    get: (options?: StringValueGetOptionalParams) => Promise<Record<string, string>>;
    put: (body: Record<string, string>, options?: StringValuePutOptionalParams) => Promise<void>;
}

export declare interface StringValuePutOptionalParams extends OperationOptions {
}

export declare interface UnknownValueGetOptionalParams extends OperationOptions {
}

export declare interface UnknownValueOperations {
    get: (options?: UnknownValueGetOptionalParams) => Promise<Record<string, any>>;
    put: (body: Record<string, any>, options?: UnknownValuePutOptionalParams) => Promise<void>;
}

export declare interface UnknownValuePutOptionalParams extends OperationOptions {
}

export { }
