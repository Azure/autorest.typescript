import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface DefaultDurationProperty {
    value: string;
}

export declare class DurationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DurationClientOptionalParams);
    readonly header: HeaderOperations;
    readonly property: PropertyOperations;
    readonly query: QueryOperations;
}

export declare interface DurationClientOptionalParams extends ClientOptions {
}

export declare interface Float64MillisecondsDurationProperty {
    value: number;
}

export declare interface Float64SecondsDurationProperty {
    value: number;
}

export declare interface FloatMillisecondsDurationArrayProperty {
    value: number[];
}

export declare interface FloatMillisecondsDurationProperty {
    value: number;
}

export declare interface FloatMillisecondsLargerUnitDurationProperty {
    value: number;
}

export declare interface FloatSecondsDurationArrayProperty {
    value: number[];
}

export declare interface FloatSecondsDurationProperty {
    value: number;
}

export declare interface FloatSecondsLargerUnitDurationProperty {
    value: number;
}

export declare interface HeaderDefaultOptionalParams extends OperationOptions {
}

export declare interface HeaderFloat64MillisecondsOptionalParams extends OperationOptions {
}

export declare interface HeaderFloat64SecondsOptionalParams extends OperationOptions {
}

export declare interface HeaderFloatMillisecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface HeaderFloatMillisecondsOptionalParams extends OperationOptions {
}

export declare interface HeaderFloatSecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface HeaderFloatSecondsOptionalParams extends OperationOptions {
}

export declare interface HeaderInt32MillisecondsArrayOptionalParams extends OperationOptions {
}

export declare interface HeaderInt32MillisecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface HeaderInt32MillisecondsOptionalParams extends OperationOptions {
}

export declare interface HeaderInt32SecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface HeaderInt32SecondsOptionalParams extends OperationOptions {
}

export declare interface HeaderIso8601ArrayOptionalParams extends OperationOptions {
}

export declare interface HeaderIso8601OptionalParams extends OperationOptions {
}

export declare interface HeaderOperations {
    int32MillisecondsArray: (duration: number[], options?: HeaderInt32MillisecondsArrayOptionalParams) => Promise<void>;
    float64Milliseconds: (duration: number, options?: HeaderFloat64MillisecondsOptionalParams) => Promise<void>;
    floatMillisecondsLargerUnit: (duration: number, options?: HeaderFloatMillisecondsLargerUnitOptionalParams) => Promise<void>;
    floatMilliseconds: (duration: number, options?: HeaderFloatMillisecondsOptionalParams) => Promise<void>;
    int32MillisecondsLargerUnit: (duration: number, options?: HeaderInt32MillisecondsLargerUnitOptionalParams) => Promise<void>;
    int32Milliseconds: (duration: number, options?: HeaderInt32MillisecondsOptionalParams) => Promise<void>;
    float64Seconds: (duration: number, options?: HeaderFloat64SecondsOptionalParams) => Promise<void>;
    floatSecondsLargerUnit: (duration: number, options?: HeaderFloatSecondsLargerUnitOptionalParams) => Promise<void>;
    floatSeconds: (duration: number, options?: HeaderFloatSecondsOptionalParams) => Promise<void>;
    int32SecondsLargerUnit: (duration: number, options?: HeaderInt32SecondsLargerUnitOptionalParams) => Promise<void>;
    int32Seconds: (duration: number, options?: HeaderInt32SecondsOptionalParams) => Promise<void>;
    iso8601Array: (duration: string[], options?: HeaderIso8601ArrayOptionalParams) => Promise<void>;
    iso8601: (duration: string, options?: HeaderIso8601OptionalParams) => Promise<void>;
    default: (duration: string, options?: HeaderDefaultOptionalParams) => Promise<void>;
}

export declare interface Int32MillisecondsDurationProperty {
    value: number;
}

export declare interface Int32MillisecondsLargerUnitDurationProperty {
    value: number;
}

export declare interface Int32SecondsDurationProperty {
    value: number;
}

export declare interface Int32SecondsLargerUnitDurationProperty {
    value: number;
}

export declare interface ISO8601DurationProperty {
    value: string;
}

export declare interface PropertyDefaultOptionalParams extends OperationOptions {
}

export declare interface PropertyFloat64MillisecondsOptionalParams extends OperationOptions {
}

export declare interface PropertyFloat64SecondsOptionalParams extends OperationOptions {
}

export declare interface PropertyFloatMillisecondsArrayOptionalParams extends OperationOptions {
}

export declare interface PropertyFloatMillisecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface PropertyFloatMillisecondsOptionalParams extends OperationOptions {
}

export declare interface PropertyFloatSecondsArrayOptionalParams extends OperationOptions {
}

export declare interface PropertyFloatSecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface PropertyFloatSecondsOptionalParams extends OperationOptions {
}

export declare interface PropertyInt32MillisecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface PropertyInt32MillisecondsOptionalParams extends OperationOptions {
}

export declare interface PropertyInt32SecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface PropertyInt32SecondsOptionalParams extends OperationOptions {
}

export declare interface PropertyIso8601OptionalParams extends OperationOptions {
}

export declare interface PropertyOperations {
    floatMillisecondsLargerUnit: (body: FloatMillisecondsLargerUnitDurationProperty, options?: PropertyFloatMillisecondsLargerUnitOptionalParams) => Promise<FloatMillisecondsLargerUnitDurationProperty>;
    int32MillisecondsLargerUnit: (body: Int32MillisecondsLargerUnitDurationProperty, options?: PropertyInt32MillisecondsLargerUnitOptionalParams) => Promise<Int32MillisecondsLargerUnitDurationProperty>;
    floatSecondsLargerUnit: (body: FloatSecondsLargerUnitDurationProperty, options?: PropertyFloatSecondsLargerUnitOptionalParams) => Promise<FloatSecondsLargerUnitDurationProperty>;
    int32SecondsLargerUnit: (body: Int32SecondsLargerUnitDurationProperty, options?: PropertyInt32SecondsLargerUnitOptionalParams) => Promise<Int32SecondsLargerUnitDurationProperty>;
    floatMillisecondsArray: (body: FloatMillisecondsDurationArrayProperty, options?: PropertyFloatMillisecondsArrayOptionalParams) => Promise<FloatMillisecondsDurationArrayProperty>;
    floatSecondsArray: (body: FloatSecondsDurationArrayProperty, options?: PropertyFloatSecondsArrayOptionalParams) => Promise<FloatSecondsDurationArrayProperty>;
    float64Milliseconds: (body: Float64MillisecondsDurationProperty, options?: PropertyFloat64MillisecondsOptionalParams) => Promise<Float64MillisecondsDurationProperty>;
    floatMilliseconds: (body: FloatMillisecondsDurationProperty, options?: PropertyFloatMillisecondsOptionalParams) => Promise<FloatMillisecondsDurationProperty>;
    int32Milliseconds: (body: Int32MillisecondsDurationProperty, options?: PropertyInt32MillisecondsOptionalParams) => Promise<Int32MillisecondsDurationProperty>;
    float64Seconds: (body: Float64SecondsDurationProperty, options?: PropertyFloat64SecondsOptionalParams) => Promise<Float64SecondsDurationProperty>;
    floatSeconds: (body: FloatSecondsDurationProperty, options?: PropertyFloatSecondsOptionalParams) => Promise<FloatSecondsDurationProperty>;
    int32Seconds: (body: Int32SecondsDurationProperty, options?: PropertyInt32SecondsOptionalParams) => Promise<Int32SecondsDurationProperty>;
    iso8601: (body: ISO8601DurationProperty, options?: PropertyIso8601OptionalParams) => Promise<ISO8601DurationProperty>;
    default: (body: DefaultDurationProperty, options?: PropertyDefaultOptionalParams) => Promise<DefaultDurationProperty>;
}

export declare interface QueryDefaultOptionalParams extends OperationOptions {
}

export declare interface QueryFloat64MillisecondsOptionalParams extends OperationOptions {
}

export declare interface QueryFloat64SecondsOptionalParams extends OperationOptions {
}

export declare interface QueryFloatMillisecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface QueryFloatMillisecondsOptionalParams extends OperationOptions {
}

export declare interface QueryFloatSecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface QueryFloatSecondsOptionalParams extends OperationOptions {
}

export declare interface QueryInt32MillisecondsArrayOptionalParams extends OperationOptions {
}

export declare interface QueryInt32MillisecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface QueryInt32MillisecondsOptionalParams extends OperationOptions {
}

export declare interface QueryInt32SecondsArrayOptionalParams extends OperationOptions {
}

export declare interface QueryInt32SecondsLargerUnitOptionalParams extends OperationOptions {
}

export declare interface QueryInt32SecondsOptionalParams extends OperationOptions {
}

export declare interface QueryIso8601OptionalParams extends OperationOptions {
}

export declare interface QueryOperations {
    int32MillisecondsArray: (input: number[], options?: QueryInt32MillisecondsArrayOptionalParams) => Promise<void>;
    int32SecondsArray: (input: number[], options?: QueryInt32SecondsArrayOptionalParams) => Promise<void>;
    float64Milliseconds: (input: number, options?: QueryFloat64MillisecondsOptionalParams) => Promise<void>;
    floatMillisecondsLargerUnit: (input: number, options?: QueryFloatMillisecondsLargerUnitOptionalParams) => Promise<void>;
    floatMilliseconds: (input: number, options?: QueryFloatMillisecondsOptionalParams) => Promise<void>;
    int32MillisecondsLargerUnit: (input: number, options?: QueryInt32MillisecondsLargerUnitOptionalParams) => Promise<void>;
    int32Milliseconds: (input: number, options?: QueryInt32MillisecondsOptionalParams) => Promise<void>;
    float64Seconds: (input: number, options?: QueryFloat64SecondsOptionalParams) => Promise<void>;
    floatSecondsLargerUnit: (input: number, options?: QueryFloatSecondsLargerUnitOptionalParams) => Promise<void>;
    floatSeconds: (input: number, options?: QueryFloatSecondsOptionalParams) => Promise<void>;
    int32SecondsLargerUnit: (input: number, options?: QueryInt32SecondsLargerUnitOptionalParams) => Promise<void>;
    int32Seconds: (input: number, options?: QueryInt32SecondsOptionalParams) => Promise<void>;
    iso8601: (input: string, options?: QueryIso8601OptionalParams) => Promise<void>;
    default: (input: string, options?: QueryDefaultOptionalParams) => Promise<void>;
}

export { }
