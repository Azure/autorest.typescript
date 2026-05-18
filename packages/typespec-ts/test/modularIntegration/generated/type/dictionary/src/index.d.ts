import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

declare interface BooleanValueGetOptionalParams extends OperationOptions {
}

export declare interface BooleanValueOperations {
    put: (body: Record<string, boolean>, options?: BooleanValuePutOptionalParams) => Promise<void>;
    get: (options?: BooleanValueGetOptionalParams) => Promise<Record<string, boolean>>;
}

declare interface BooleanValuePutOptionalParams extends OperationOptions {
}

declare interface DatetimeValueGetOptionalParams extends OperationOptions {
}

export declare interface DatetimeValueOperations {
    put: (body: Record<string, Date>, options?: DatetimeValuePutOptionalParams) => Promise<void>;
    get: (options?: DatetimeValueGetOptionalParams) => Promise<Record<string, Date>>;
}

declare interface DatetimeValuePutOptionalParams extends OperationOptions {
}

export declare class DictionaryClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DictionaryClientOptionalParams);
    readonly nullableFloatValue: NullableFloatValueOperations;
    readonly recursiveModelValue: RecursiveModelValueOperations;
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

export declare interface DictionaryClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

declare interface DurationValueGetOptionalParams extends OperationOptions {
}

export declare interface DurationValueOperations {
    put: (body: Record<string, string>, options?: DurationValuePutOptionalParams) => Promise<void>;
    get: (options?: DurationValueGetOptionalParams) => Promise<Record<string, string>>;
}

declare interface DurationValuePutOptionalParams extends OperationOptions {
}

declare interface Float32ValueGetOptionalParams extends OperationOptions {
}

export declare interface Float32ValueOperations {
    put: (body: Record<string, number>, options?: Float32ValuePutOptionalParams) => Promise<void>;
    get: (options?: Float32ValueGetOptionalParams) => Promise<Record<string, number>>;
}

declare interface Float32ValuePutOptionalParams extends OperationOptions {
}

export declare interface InnerModel {
    property: string;
    children?: Record<string, InnerModel>;
}

declare interface Int32ValueGetOptionalParams extends OperationOptions {
}

export declare interface Int32ValueOperations {
    put: (body: Record<string, number>, options?: Int32ValuePutOptionalParams) => Promise<void>;
    get: (options?: Int32ValueGetOptionalParams) => Promise<Record<string, number>>;
}

declare interface Int32ValuePutOptionalParams extends OperationOptions {
}

declare interface Int64ValueGetOptionalParams extends OperationOptions {
}

export declare interface Int64ValueOperations {
    put: (body: Record<string, number>, options?: Int64ValuePutOptionalParams) => Promise<void>;
    get: (options?: Int64ValueGetOptionalParams) => Promise<Record<string, number>>;
}

declare interface Int64ValuePutOptionalParams extends OperationOptions {
}

declare interface ModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelValueOperations {
    put: (body: Record<string, InnerModel>, options?: ModelValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelValueGetOptionalParams) => Promise<Record<string, InnerModel>>;
}

declare interface ModelValuePutOptionalParams extends OperationOptions {
}

declare interface NullableFloatValueGetOptionalParams extends OperationOptions {
}

export declare interface NullableFloatValueOperations {
    put: (body: Record<string, number | null>, options?: NullableFloatValuePutOptionalParams) => Promise<void>;
    get: (options?: NullableFloatValueGetOptionalParams) => Promise<Record<string, number | null>>;
}

declare interface NullableFloatValuePutOptionalParams extends OperationOptions {
}

declare interface RecursiveModelValueGetOptionalParams extends OperationOptions {
}

export declare interface RecursiveModelValueOperations {
    put: (body: Record<string, InnerModel>, options?: RecursiveModelValuePutOptionalParams) => Promise<void>;
    get: (options?: RecursiveModelValueGetOptionalParams) => Promise<Record<string, InnerModel>>;
}

declare interface RecursiveModelValuePutOptionalParams extends OperationOptions {
}

declare interface StringValueGetOptionalParams extends OperationOptions {
}

export declare interface StringValueOperations {
    put: (body: Record<string, string>, options?: StringValuePutOptionalParams) => Promise<void>;
    get: (options?: StringValueGetOptionalParams) => Promise<Record<string, string>>;
}

declare interface StringValuePutOptionalParams extends OperationOptions {
}

declare interface UnknownValueGetOptionalParams extends OperationOptions {
}

export declare interface UnknownValueOperations {
    put: (body: Record<string, any>, options?: UnknownValuePutOptionalParams) => Promise<void>;
    get: (options?: UnknownValueGetOptionalParams) => Promise<Record<string, any>>;
}

declare interface UnknownValuePutOptionalParams extends OperationOptions {
}

export { }
