import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

export declare type ArrayItemTypesClient = Client & {
    path: Routes;
};

export declare interface ArrayItemTypesClientOptions extends ClientOptions {
}

export declare interface BooleanValueGet {
    get(options?: BooleanValueGetParameters): StreamableMethod<BooleanValueGet200Response>;
    put(options: BooleanValuePutParameters): StreamableMethod<BooleanValuePut204Response>;
}

export declare interface BooleanValueGet200Response extends HttpResponse {
    status: "200";
    body: boolean[];
}

export declare type BooleanValueGetParameters = RequestParameters;

export declare interface BooleanValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface BooleanValuePutBodyParam {
    body: boolean[];
}

export declare type BooleanValuePutParameters = BooleanValuePutBodyParam & RequestParameters;

declare function createClient(options?: ArrayItemTypesClientOptions): ArrayItemTypesClient;
export default createClient;

export declare interface DatetimeValueGet {
    get(options?: DatetimeValueGetParameters): StreamableMethod<DatetimeValueGet200Response>;
    put(options: DatetimeValuePutParameters): StreamableMethod<DatetimeValuePut204Response>;
}

export declare interface DatetimeValueGet200Response extends HttpResponse {
    status: "200";
    body: string[];
}

export declare type DatetimeValueGetParameters = RequestParameters;

export declare interface DatetimeValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface DatetimeValuePutBodyParam {
    body: Date[] | string[];
}

export declare type DatetimeValuePutParameters = DatetimeValuePutBodyParam & RequestParameters;

export declare interface DurationValueGet {
    get(options?: DurationValueGetParameters): StreamableMethod<DurationValueGet200Response>;
    put(options: DurationValuePutParameters): StreamableMethod<DurationValuePut204Response>;
}

export declare interface DurationValueGet200Response extends HttpResponse {
    status: "200";
    body: string[];
}

export declare type DurationValueGetParameters = RequestParameters;

export declare interface DurationValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationValuePutBodyParam {
    body: string[];
}

export declare type DurationValuePutParameters = DurationValuePutBodyParam & RequestParameters;

export declare interface Float32ValueGet {
    get(options?: Float32ValueGetParameters): StreamableMethod<Float32ValueGet200Response>;
    put(options: Float32ValuePutParameters): StreamableMethod<Float32ValuePut204Response>;
}

export declare interface Float32ValueGet200Response extends HttpResponse {
    status: "200";
    body: number[];
}

export declare type Float32ValueGetParameters = RequestParameters;

export declare interface Float32ValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface Float32ValuePutBodyParam {
    body: number[];
}

export declare type Float32ValuePutParameters = Float32ValuePutBodyParam & RequestParameters;

export declare interface InnerModel {
    property: string;
    children?: Array<InnerModel>;
}

export declare interface InnerModelOutput {
    property: string;
    children?: Array<InnerModelOutput>;
}

export declare interface Int32ValueGet {
    get(options?: Int32ValueGetParameters): StreamableMethod<Int32ValueGet200Response>;
    put(options: Int32ValuePutParameters): StreamableMethod<Int32ValuePut204Response>;
}

export declare interface Int32ValueGet200Response extends HttpResponse {
    status: "200";
    body: number[];
}

export declare type Int32ValueGetParameters = RequestParameters;

export declare interface Int32ValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface Int32ValuePutBodyParam {
    body: number[];
}

export declare type Int32ValuePutParameters = Int32ValuePutBodyParam & RequestParameters;

export declare interface Int64ValueGet {
    get(options?: Int64ValueGetParameters): StreamableMethod<Int64ValueGet200Response>;
    put(options: Int64ValuePutParameters): StreamableMethod<Int64ValuePut204Response>;
}

export declare interface Int64ValueGet200Response extends HttpResponse {
    status: "200";
    body: number[];
}

export declare type Int64ValueGetParameters = RequestParameters;

export declare interface Int64ValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface Int64ValuePutBodyParam {
    body: number[];
}

export declare type Int64ValuePutParameters = Int64ValuePutBodyParam & RequestParameters;

export declare interface ModelValueGet {
    get(options?: ModelValueGetParameters): StreamableMethod<ModelValueGet200Response>;
    put(options: ModelValuePutParameters): StreamableMethod<ModelValuePut204Response>;
}

export declare interface ModelValueGet200Response extends HttpResponse {
    status: "200";
    body: Array<InnerModelOutput>;
}

export declare type ModelValueGetParameters = RequestParameters;

export declare interface ModelValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelValuePutBodyParam {
    body: Array<InnerModel>;
}

export declare type ModelValuePutParameters = ModelValuePutBodyParam & RequestParameters;

export declare interface NullableBooleanValueGet {
    get(options?: NullableBooleanValueGetParameters): StreamableMethod<NullableBooleanValueGet200Response>;
    put(options: NullableBooleanValuePutParameters): StreamableMethod<NullableBooleanValuePut204Response>;
}

export declare interface NullableBooleanValueGet200Response extends HttpResponse {
    status: "200";
    body: (boolean | null)[];
}

export declare type NullableBooleanValueGetParameters = RequestParameters;

export declare interface NullableBooleanValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface NullableBooleanValuePutBodyParam {
    body: (boolean | null)[];
}

export declare type NullableBooleanValuePutParameters = NullableBooleanValuePutBodyParam & RequestParameters;

export declare interface NullableFloatValueGet {
    get(options?: NullableFloatValueGetParameters): StreamableMethod<NullableFloatValueGet200Response>;
    put(options: NullableFloatValuePutParameters): StreamableMethod<NullableFloatValuePut204Response>;
}

export declare interface NullableFloatValueGet200Response extends HttpResponse {
    status: "200";
    body: (number | null)[];
}

export declare type NullableFloatValueGetParameters = RequestParameters;

export declare interface NullableFloatValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface NullableFloatValuePutBodyParam {
    body: (number | null)[];
}

export declare type NullableFloatValuePutParameters = NullableFloatValuePutBodyParam & RequestParameters;

export declare interface NullableInt32ValueGet {
    get(options?: NullableInt32ValueGetParameters): StreamableMethod<NullableInt32ValueGet200Response>;
    put(options: NullableInt32ValuePutParameters): StreamableMethod<NullableInt32ValuePut204Response>;
}

export declare interface NullableInt32ValueGet200Response extends HttpResponse {
    status: "200";
    body: (number | null)[];
}

export declare type NullableInt32ValueGetParameters = RequestParameters;

export declare interface NullableInt32ValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface NullableInt32ValuePutBodyParam {
    body: (number | null)[];
}

export declare type NullableInt32ValuePutParameters = NullableInt32ValuePutBodyParam & RequestParameters;

export declare interface NullableModelValueGet {
    get(options?: NullableModelValueGetParameters): StreamableMethod<NullableModelValueGet200Response>;
    put(options: NullableModelValuePutParameters): StreamableMethod<NullableModelValuePut204Response>;
}

export declare interface NullableModelValueGet200Response extends HttpResponse {
    status: "200";
    body: (InnerModelOutput | null)[];
}

export declare type NullableModelValueGetParameters = RequestParameters;

export declare interface NullableModelValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface NullableModelValuePutBodyParam {
    body: (InnerModel | null)[];
}

export declare type NullableModelValuePutParameters = NullableModelValuePutBodyParam & RequestParameters;

export declare interface NullableStringValueGet {
    get(options?: NullableStringValueGetParameters): StreamableMethod<NullableStringValueGet200Response>;
    put(options: NullableStringValuePutParameters): StreamableMethod<NullableStringValuePut204Response>;
}

export declare interface NullableStringValueGet200Response extends HttpResponse {
    status: "200";
    body: (string | null)[];
}

export declare type NullableStringValueGetParameters = RequestParameters;

export declare interface NullableStringValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface NullableStringValuePutBodyParam {
    body: (string | null)[];
}

export declare type NullableStringValuePutParameters = NullableStringValuePutBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/array/int32"): Int32ValueGet;
    (path: "/type/array/int64"): Int64ValueGet;
    (path: "/type/array/boolean"): BooleanValueGet;
    (path: "/type/array/string"): StringValueGet;
    (path: "/type/array/float32"): Float32ValueGet;
    (path: "/type/array/datetime"): DatetimeValueGet;
    (path: "/type/array/duration"): DurationValueGet;
    (path: "/type/array/unknown"): UnknownValueGet;
    (path: "/type/array/model"): ModelValueGet;
    (path: "/type/array/nullable-float"): NullableFloatValueGet;
    (path: "/type/array/nullable-int32"): NullableInt32ValueGet;
    (path: "/type/array/nullable-boolean"): NullableBooleanValueGet;
    (path: "/type/array/nullable-string"): NullableStringValueGet;
    (path: "/type/array/nullable-model"): NullableModelValueGet;
}

export declare interface StringValueGet {
    get(options?: StringValueGetParameters): StreamableMethod<StringValueGet200Response>;
    put(options: StringValuePutParameters): StreamableMethod<StringValuePut204Response>;
}

export declare interface StringValueGet200Response extends HttpResponse {
    status: "200";
    body: string[];
}

export declare type StringValueGetParameters = RequestParameters;

export declare interface StringValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface StringValuePutBodyParam {
    body: string[];
}

export declare type StringValuePutParameters = StringValuePutBodyParam & RequestParameters;

export declare interface UnknownValueGet {
    get(options?: UnknownValueGetParameters): StreamableMethod<UnknownValueGet200Response>;
    put(options: UnknownValuePutParameters): StreamableMethod<UnknownValuePut204Response>;
}

export declare interface UnknownValueGet200Response extends HttpResponse {
    status: "200";
    body: any[];
}

export declare type UnknownValueGetParameters = RequestParameters;

export declare interface UnknownValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnknownValuePutBodyParam {
    body: unknown[];
}

export declare type UnknownValuePutParameters = UnknownValuePutBodyParam & RequestParameters;

export { }
