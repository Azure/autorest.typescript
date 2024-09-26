import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function createDuration(options?: DurationClientOptionalParams): DurationContext;

export declare interface DefaultDurationProperty {
    value: string;
}

export declare class DurationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DurationClientOptionalParams);
    readonly query: QueryOperations;
    readonly property: PropertyOperations;
    readonly header: HeaderOperations;
}

export declare interface DurationClientOptionalParams extends ClientOptions {
}

export declare interface DurationContext extends Client {
}

export declare interface Float64SecondsDurationProperty {
    value: number;
}

export declare interface FloatSecondsDurationArrayProperty {
    value: number[];
}

export declare interface FloatSecondsDurationProperty {
    value: number;
}

export declare function headerDefault(context: DurationContext, duration: string, options?: HeaderDefaultOptionalParams): Promise<void>;

export declare interface HeaderDefaultOptionalParams extends OperationOptions {
}

export declare function headerFloat64Seconds(context: DurationContext, duration: number, options?: HeaderFloat64SecondsOptionalParams): Promise<void>;

export declare interface HeaderFloat64SecondsOptionalParams extends OperationOptions {
}

export declare function headerFloatSeconds(context: DurationContext, duration: number, options?: HeaderFloatSecondsOptionalParams): Promise<void>;

export declare interface HeaderFloatSecondsOptionalParams extends OperationOptions {
}

export declare function headerInt32Seconds(context: DurationContext, duration: number, options?: HeaderInt32SecondsOptionalParams): Promise<void>;

export declare interface HeaderInt32SecondsOptionalParams extends OperationOptions {
}

export declare function headerIso8601(context: DurationContext, duration: string, options?: HeaderIso8601OptionalParams): Promise<void>;

export declare function headerIso8601Array(context: DurationContext, duration: string[], options?: HeaderIso8601ArrayOptionalParams): Promise<void>;

export declare interface HeaderIso8601ArrayOptionalParams extends OperationOptions {
}

export declare interface HeaderIso8601OptionalParams extends OperationOptions {
}

export declare interface HeaderOperations {
    default: (duration: string, options?: HeaderDefaultOptionalParams) => Promise<void>;
    iso8601: (duration: string, options?: HeaderIso8601OptionalParams) => Promise<void>;
    iso8601Array: (duration: string[], options?: HeaderIso8601ArrayOptionalParams) => Promise<void>;
    int32Seconds: (duration: number, options?: HeaderInt32SecondsOptionalParams) => Promise<void>;
    floatSeconds: (duration: number, options?: HeaderFloatSecondsOptionalParams) => Promise<void>;
    float64Seconds: (duration: number, options?: HeaderFloat64SecondsOptionalParams) => Promise<void>;
}

export declare interface Int32SecondsDurationProperty {
    value: number;
}

export declare interface ISO8601DurationProperty {
    value: string;
}

export declare function propertyDefault(context: DurationContext, body: DefaultDurationProperty, options?: PropertyDefaultOptionalParams): Promise<DefaultDurationProperty>;

export declare interface PropertyDefaultOptionalParams extends OperationOptions {
}

export declare function propertyFloat64Seconds(context: DurationContext, body: Float64SecondsDurationProperty, options?: PropertyFloat64SecondsOptionalParams): Promise<Float64SecondsDurationProperty>;

export declare interface PropertyFloat64SecondsOptionalParams extends OperationOptions {
}

export declare function propertyFloatSeconds(context: DurationContext, body: FloatSecondsDurationProperty, options?: PropertyFloatSecondsOptionalParams): Promise<FloatSecondsDurationProperty>;

export declare function propertyFloatSecondsArray(context: DurationContext, body: FloatSecondsDurationArrayProperty, options?: PropertyFloatSecondsArrayOptionalParams): Promise<FloatSecondsDurationArrayProperty>;

export declare interface PropertyFloatSecondsArrayOptionalParams extends OperationOptions {
}

export declare interface PropertyFloatSecondsOptionalParams extends OperationOptions {
}

export declare function propertyInt32Seconds(context: DurationContext, body: Int32SecondsDurationProperty, options?: PropertyInt32SecondsOptionalParams): Promise<Int32SecondsDurationProperty>;

export declare interface PropertyInt32SecondsOptionalParams extends OperationOptions {
}

export declare function propertyIso8601(context: DurationContext, body: ISO8601DurationProperty, options?: PropertyIso8601OptionalParams): Promise<ISO8601DurationProperty>;

export declare interface PropertyIso8601OptionalParams extends OperationOptions {
}

export declare interface PropertyOperations {
    default: (body: DefaultDurationProperty, options?: PropertyDefaultOptionalParams) => Promise<DefaultDurationProperty>;
    iso8601: (body: ISO8601DurationProperty, options?: PropertyIso8601OptionalParams) => Promise<ISO8601DurationProperty>;
    int32Seconds: (body: Int32SecondsDurationProperty, options?: PropertyInt32SecondsOptionalParams) => Promise<Int32SecondsDurationProperty>;
    floatSeconds: (body: FloatSecondsDurationProperty, options?: PropertyFloatSecondsOptionalParams) => Promise<FloatSecondsDurationProperty>;
    float64Seconds: (body: Float64SecondsDurationProperty, options?: PropertyFloat64SecondsOptionalParams) => Promise<Float64SecondsDurationProperty>;
    floatSecondsArray: (body: FloatSecondsDurationArrayProperty, options?: PropertyFloatSecondsArrayOptionalParams) => Promise<FloatSecondsDurationArrayProperty>;
}

export declare function queryDefault(context: DurationContext, input: string, options?: QueryDefaultOptionalParams): Promise<void>;

export declare interface QueryDefaultOptionalParams extends OperationOptions {
}

export declare function queryFloat64Seconds(context: DurationContext, input: number, options?: QueryFloat64SecondsOptionalParams): Promise<void>;

export declare interface QueryFloat64SecondsOptionalParams extends OperationOptions {
}

export declare function queryFloatSeconds(context: DurationContext, input: number, options?: QueryFloatSecondsOptionalParams): Promise<void>;

export declare interface QueryFloatSecondsOptionalParams extends OperationOptions {
}

export declare function queryInt32Seconds(context: DurationContext, input: number, options?: QueryInt32SecondsOptionalParams): Promise<void>;

export declare function queryInt32SecondsArray(context: DurationContext, input: number[], options?: QueryInt32SecondsArrayOptionalParams): Promise<void>;

export declare interface QueryInt32SecondsArrayOptionalParams extends OperationOptions {
}

export declare interface QueryInt32SecondsOptionalParams extends OperationOptions {
}

export declare function queryIso8601(context: DurationContext, input: string, options?: QueryIso8601OptionalParams): Promise<void>;

export declare interface QueryIso8601OptionalParams extends OperationOptions {
}

export declare interface QueryOperations {
    default: (input: string, options?: QueryDefaultOptionalParams) => Promise<void>;
    iso8601: (input: string, options?: QueryIso8601OptionalParams) => Promise<void>;
    int32Seconds: (input: number, options?: QueryInt32SecondsOptionalParams) => Promise<void>;
    floatSeconds: (input: number, options?: QueryFloatSecondsOptionalParams) => Promise<void>;
    float64Seconds: (input: number, options?: QueryFloat64SecondsOptionalParams) => Promise<void>;
    int32SecondsArray: (input: number[], options?: QueryInt32SecondsArrayOptionalParams) => Promise<void>;
}

export { }
