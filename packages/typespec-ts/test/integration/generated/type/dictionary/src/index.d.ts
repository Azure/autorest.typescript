import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

export declare interface BooleanValueGet {
    get(options?: BooleanValueGetParameters): StreamableMethod<BooleanValueGet200Response>;
    put(options: BooleanValuePutParameters): StreamableMethod<BooleanValuePut204Response>;
}

export declare interface BooleanValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, boolean>;
}

export declare type BooleanValueGetParameters = RequestParameters;

export declare interface BooleanValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface BooleanValuePutBodyParam {
    body: Record<string, boolean>;
}

export declare type BooleanValuePutParameters = BooleanValuePutBodyParam & RequestParameters;

declare function createClient(options?: DictClientOptions): DictClient;
export default createClient;

export declare interface DatetimeValueGet {
    get(options?: DatetimeValueGetParameters): StreamableMethod<DatetimeValueGet200Response>;
    put(options: DatetimeValuePutParameters): StreamableMethod<DatetimeValuePut204Response>;
}

export declare interface DatetimeValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, string>;
}

export declare type DatetimeValueGetParameters = RequestParameters;

export declare interface DatetimeValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface DatetimeValuePutBodyParam {
    body: Record<string, Date | string>;
}

export declare type DatetimeValuePutParameters = DatetimeValuePutBodyParam & RequestParameters;

export declare type DictClient = Client & {
    path: Routes;
};

export declare interface DictClientOptions extends ClientOptions {
}

export declare interface DurationValueGet {
    get(options?: DurationValueGetParameters): StreamableMethod<DurationValueGet200Response>;
    put(options: DurationValuePutParameters): StreamableMethod<DurationValuePut204Response>;
}

export declare interface DurationValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, string>;
}

export declare type DurationValueGetParameters = RequestParameters;

export declare interface DurationValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationValuePutBodyParam {
    body: Record<string, string>;
}

export declare type DurationValuePutParameters = DurationValuePutBodyParam & RequestParameters;

export declare interface Float32ValueGet {
    get(options?: Float32ValueGetParameters): StreamableMethod<Float32ValueGet200Response>;
    put(options: Float32ValuePutParameters): StreamableMethod<Float32ValuePut204Response>;
}

export declare interface Float32ValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, number>;
}

export declare type Float32ValueGetParameters = RequestParameters;

export declare interface Float32ValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface Float32ValuePutBodyParam {
    body: Record<string, number>;
}

export declare type Float32ValuePutParameters = Float32ValuePutBodyParam & RequestParameters;

export declare interface InnerModel {
    property: string;
    children?: Record<string, InnerModel>;
}

export declare interface InnerModelOutput {
    property: string;
    children?: Record<string, InnerModelOutput>;
}

export declare interface Int32ValueGet {
    get(options?: Int32ValueGetParameters): StreamableMethod<Int32ValueGet200Response>;
    put(options: Int32ValuePutParameters): StreamableMethod<Int32ValuePut204Response>;
}

export declare interface Int32ValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, number>;
}

export declare type Int32ValueGetParameters = RequestParameters;

export declare interface Int32ValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface Int32ValuePutBodyParam {
    body: Record<string, number>;
}

export declare type Int32ValuePutParameters = Int32ValuePutBodyParam & RequestParameters;

export declare interface Int64ValueGet {
    get(options?: Int64ValueGetParameters): StreamableMethod<Int64ValueGet200Response>;
    put(options: Int64ValuePutParameters): StreamableMethod<Int64ValuePut204Response>;
}

export declare interface Int64ValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, number>;
}

export declare type Int64ValueGetParameters = RequestParameters;

export declare interface Int64ValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface Int64ValuePutBodyParam {
    body: Record<string, number>;
}

export declare type Int64ValuePutParameters = Int64ValuePutBodyParam & RequestParameters;

export declare interface ModelValueGet {
    get(options?: ModelValueGetParameters): StreamableMethod<ModelValueGet200Response>;
    put(options: ModelValuePutParameters): StreamableMethod<ModelValuePut204Response>;
}

export declare interface ModelValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, InnerModelOutput>;
}

export declare type ModelValueGetParameters = RequestParameters;

export declare interface ModelValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelValuePutBodyParam {
    body: Record<string, InnerModel>;
}

export declare type ModelValuePutParameters = ModelValuePutBodyParam & RequestParameters;

export declare interface NullableFloatValueGet {
    get(options?: NullableFloatValueGetParameters): StreamableMethod<NullableFloatValueGet200Response>;
    put(options: NullableFloatValuePutParameters): StreamableMethod<NullableFloatValuePut204Response>;
}

export declare interface NullableFloatValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, number | null>;
}

export declare type NullableFloatValueGetParameters = RequestParameters;

export declare interface NullableFloatValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface NullableFloatValuePutBodyParam {
    body: Record<string, number | null>;
}

export declare type NullableFloatValuePutParameters = NullableFloatValuePutBodyParam & RequestParameters;

export declare interface RecursiveModelValueGet {
    get(options?: RecursiveModelValueGetParameters): StreamableMethod<RecursiveModelValueGet200Response>;
    put(options: RecursiveModelValuePutParameters): StreamableMethod<RecursiveModelValuePut204Response>;
}

export declare interface RecursiveModelValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, InnerModelOutput>;
}

export declare type RecursiveModelValueGetParameters = RequestParameters;

export declare interface RecursiveModelValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface RecursiveModelValuePutBodyParam {
    body: Record<string, InnerModel>;
}

export declare type RecursiveModelValuePutParameters = RecursiveModelValuePutBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/dictionary/int32"): Int32ValueGet;
    (path: "/type/dictionary/int64"): Int64ValueGet;
    (path: "/type/dictionary/boolean"): BooleanValueGet;
    (path: "/type/dictionary/string"): StringValueGet;
    (path: "/type/dictionary/float32"): Float32ValueGet;
    (path: "/type/dictionary/datetime"): DatetimeValueGet;
    (path: "/type/dictionary/duration"): DurationValueGet;
    (path: "/type/dictionary/unknown"): UnknownValueGet;
    (path: "/type/dictionary/model"): ModelValueGet;
    (path: "/type/dictionary/model/recursive"): RecursiveModelValueGet;
    (path: "/type/dictionary/nullable-float"): NullableFloatValueGet;
}

export declare interface StringValueGet {
    get(options?: StringValueGetParameters): StreamableMethod<StringValueGet200Response>;
    put(options: StringValuePutParameters): StreamableMethod<StringValuePut204Response>;
}

export declare interface StringValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, string>;
}

export declare type StringValueGetParameters = RequestParameters;

export declare interface StringValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface StringValuePutBodyParam {
    body: Record<string, string>;
}

export declare type StringValuePutParameters = StringValuePutBodyParam & RequestParameters;

export declare interface UnknownValueGet {
    get(options?: UnknownValueGetParameters): StreamableMethod<UnknownValueGet200Response>;
    put(options: UnknownValuePutParameters): StreamableMethod<UnknownValuePut204Response>;
}

export declare interface UnknownValueGet200Response extends HttpResponse {
    status: "200";
    body: Record<string, any>;
}

export declare type UnknownValueGetParameters = RequestParameters;

export declare interface UnknownValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnknownValuePutBodyParam {
    body: Record<string, unknown>;
}

export declare type UnknownValuePutParameters = UnknownValuePutBodyParam & RequestParameters;

export { }
