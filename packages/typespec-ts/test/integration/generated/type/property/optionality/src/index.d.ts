import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

export declare interface BooleanLiteralGetAll {
    get(options?: BooleanLiteralGetAllParameters): StreamableMethod<BooleanLiteralGetAll200Response>;
    put(options: BooleanLiteralPutAllParameters): StreamableMethod<BooleanLiteralPutAll204Response>;
}

export declare interface BooleanLiteralGetAll200Response extends HttpResponse {
    status: "200";
    body: BooleanLiteralPropertyOutput;
}

export declare type BooleanLiteralGetAllParameters = RequestParameters;

export declare interface BooleanLiteralGetDefault {
    get(options?: BooleanLiteralGetDefaultParameters): StreamableMethod<BooleanLiteralGetDefault200Response>;
    put(options: BooleanLiteralPutDefaultParameters): StreamableMethod<BooleanLiteralPutDefault204Response>;
}

export declare interface BooleanLiteralGetDefault200Response extends HttpResponse {
    status: "200";
    body: BooleanLiteralPropertyOutput;
}

export declare type BooleanLiteralGetDefaultParameters = RequestParameters;

export declare interface BooleanLiteralProperty {
    property?: true;
}

export declare interface BooleanLiteralPropertyOutput {
    property?: true;
}

export declare interface BooleanLiteralPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface BooleanLiteralPutAllBodyParam {
    body: BooleanLiteralProperty;
}

export declare type BooleanLiteralPutAllParameters = BooleanLiteralPutAllBodyParam & RequestParameters;

export declare interface BooleanLiteralPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface BooleanLiteralPutDefaultBodyParam {
    body: BooleanLiteralProperty;
}

export declare type BooleanLiteralPutDefaultParameters = BooleanLiteralPutDefaultBodyParam & RequestParameters;

export declare interface BytesGetAll {
    get(options?: BytesGetAllParameters): StreamableMethod<BytesGetAll200Response>;
    put(options: BytesPutAllParameters): StreamableMethod<BytesPutAll204Response>;
}

export declare interface BytesGetAll200Response extends HttpResponse {
    status: "200";
    body: BytesPropertyOutput;
}

export declare type BytesGetAllParameters = RequestParameters;

export declare interface BytesGetDefault {
    get(options?: BytesGetDefaultParameters): StreamableMethod<BytesGetDefault200Response>;
    put(options: BytesPutDefaultParameters): StreamableMethod<BytesPutDefault204Response>;
}

export declare interface BytesGetDefault200Response extends HttpResponse {
    status: "200";
    body: BytesPropertyOutput;
}

export declare type BytesGetDefaultParameters = RequestParameters;

export declare interface BytesProperty {
    property?: string;
}

export declare interface BytesPropertyOutput {
    property?: string;
}

export declare interface BytesPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface BytesPutAllBodyParam {
    body: BytesProperty;
}

export declare type BytesPutAllParameters = BytesPutAllBodyParam & RequestParameters;

export declare interface BytesPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface BytesPutDefaultBodyParam {
    body: BytesProperty;
}

export declare type BytesPutDefaultParameters = BytesPutDefaultBodyParam & RequestParameters;

export declare interface CollectionsByteGetAll {
    get(options?: CollectionsByteGetAllParameters): StreamableMethod<CollectionsByteGetAll200Response>;
    put(options: CollectionsBytePutAllParameters): StreamableMethod<CollectionsBytePutAll204Response>;
}

export declare interface CollectionsByteGetAll200Response extends HttpResponse {
    status: "200";
    body: CollectionsBytePropertyOutput;
}

export declare type CollectionsByteGetAllParameters = RequestParameters;

export declare interface CollectionsByteGetDefault {
    get(options?: CollectionsByteGetDefaultParameters): StreamableMethod<CollectionsByteGetDefault200Response>;
    put(options: CollectionsBytePutDefaultParameters): StreamableMethod<CollectionsBytePutDefault204Response>;
}

export declare interface CollectionsByteGetDefault200Response extends HttpResponse {
    status: "200";
    body: CollectionsBytePropertyOutput;
}

export declare type CollectionsByteGetDefaultParameters = RequestParameters;

export declare interface CollectionsByteProperty {
    property?: string[];
}

export declare interface CollectionsBytePropertyOutput {
    property?: string[];
}

export declare interface CollectionsBytePutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsBytePutAllBodyParam {
    body: CollectionsByteProperty;
}

export declare type CollectionsBytePutAllParameters = CollectionsBytePutAllBodyParam & RequestParameters;

export declare interface CollectionsBytePutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsBytePutDefaultBodyParam {
    body: CollectionsByteProperty;
}

export declare type CollectionsBytePutDefaultParameters = CollectionsBytePutDefaultBodyParam & RequestParameters;

export declare interface CollectionsModelGetAll {
    get(options?: CollectionsModelGetAllParameters): StreamableMethod<CollectionsModelGetAll200Response>;
    put(options: CollectionsModelPutAllParameters): StreamableMethod<CollectionsModelPutAll204Response>;
}

export declare interface CollectionsModelGetAll200Response extends HttpResponse {
    status: "200";
    body: CollectionsModelPropertyOutput;
}

export declare type CollectionsModelGetAllParameters = RequestParameters;

export declare interface CollectionsModelGetDefault {
    get(options?: CollectionsModelGetDefaultParameters): StreamableMethod<CollectionsModelGetDefault200Response>;
    put(options: CollectionsModelPutDefaultParameters): StreamableMethod<CollectionsModelPutDefault204Response>;
}

export declare interface CollectionsModelGetDefault200Response extends HttpResponse {
    status: "200";
    body: CollectionsModelPropertyOutput;
}

export declare type CollectionsModelGetDefaultParameters = RequestParameters;

export declare interface CollectionsModelProperty {
    property?: Array<StringProperty>;
}

export declare interface CollectionsModelPropertyOutput {
    property?: Array<StringPropertyOutput>;
}

export declare interface CollectionsModelPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsModelPutAllBodyParam {
    body: CollectionsModelProperty;
}

export declare type CollectionsModelPutAllParameters = CollectionsModelPutAllBodyParam & RequestParameters;

export declare interface CollectionsModelPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsModelPutDefaultBodyParam {
    body: CollectionsModelProperty;
}

export declare type CollectionsModelPutDefaultParameters = CollectionsModelPutDefaultBodyParam & RequestParameters;

declare function createClient(options?: OptionalClientOptions): OptionalClient;
export default createClient;

export declare interface DatetimeGetAll {
    get(options?: DatetimeGetAllParameters): StreamableMethod<DatetimeGetAll200Response>;
    put(options: DatetimePutAllParameters): StreamableMethod<DatetimePutAll204Response>;
}

export declare interface DatetimeGetAll200Response extends HttpResponse {
    status: "200";
    body: DatetimePropertyOutput;
}

export declare type DatetimeGetAllParameters = RequestParameters;

export declare interface DatetimeGetDefault {
    get(options?: DatetimeGetDefaultParameters): StreamableMethod<DatetimeGetDefault200Response>;
    put(options: DatetimePutDefaultParameters): StreamableMethod<DatetimePutDefault204Response>;
}

export declare interface DatetimeGetDefault200Response extends HttpResponse {
    status: "200";
    body: DatetimePropertyOutput;
}

export declare type DatetimeGetDefaultParameters = RequestParameters;

export declare interface DatetimeProperty {
    property?: Date | string;
}

export declare interface DatetimePropertyOutput {
    property?: string;
}

export declare interface DatetimePutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface DatetimePutAllBodyParam {
    body: DatetimeProperty;
}

export declare type DatetimePutAllParameters = DatetimePutAllBodyParam & RequestParameters;

export declare interface DatetimePutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface DatetimePutDefaultBodyParam {
    body: DatetimeProperty;
}

export declare type DatetimePutDefaultParameters = DatetimePutDefaultBodyParam & RequestParameters;

export declare interface DurationGetAll {
    get(options?: DurationGetAllParameters): StreamableMethod<DurationGetAll200Response>;
    put(options: DurationPutAllParameters): StreamableMethod<DurationPutAll204Response>;
}

export declare interface DurationGetAll200Response extends HttpResponse {
    status: "200";
    body: DurationPropertyOutput;
}

export declare type DurationGetAllParameters = RequestParameters;

export declare interface DurationGetDefault {
    get(options?: DurationGetDefaultParameters): StreamableMethod<DurationGetDefault200Response>;
    put(options: DurationPutDefaultParameters): StreamableMethod<DurationPutDefault204Response>;
}

export declare interface DurationGetDefault200Response extends HttpResponse {
    status: "200";
    body: DurationPropertyOutput;
}

export declare type DurationGetDefaultParameters = RequestParameters;

export declare interface DurationProperty {
    property?: string;
}

export declare interface DurationPropertyOutput {
    property?: string;
}

export declare interface DurationPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationPutAllBodyParam {
    body: DurationProperty;
}

export declare type DurationPutAllParameters = DurationPutAllBodyParam & RequestParameters;

export declare interface DurationPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationPutDefaultBodyParam {
    body: DurationProperty;
}

export declare type DurationPutDefaultParameters = DurationPutDefaultBodyParam & RequestParameters;

export declare interface FloatLiteralGetAll {
    get(options?: FloatLiteralGetAllParameters): StreamableMethod<FloatLiteralGetAll200Response>;
    put(options: FloatLiteralPutAllParameters): StreamableMethod<FloatLiteralPutAll204Response>;
}

export declare interface FloatLiteralGetAll200Response extends HttpResponse {
    status: "200";
    body: FloatLiteralPropertyOutput;
}

export declare type FloatLiteralGetAllParameters = RequestParameters;

export declare interface FloatLiteralGetDefault {
    get(options?: FloatLiteralGetDefaultParameters): StreamableMethod<FloatLiteralGetDefault200Response>;
    put(options: FloatLiteralPutDefaultParameters): StreamableMethod<FloatLiteralPutDefault204Response>;
}

export declare interface FloatLiteralGetDefault200Response extends HttpResponse {
    status: "200";
    body: FloatLiteralPropertyOutput;
}

export declare type FloatLiteralGetDefaultParameters = RequestParameters;

export declare interface FloatLiteralProperty {
    property?: 1.25;
}

export declare interface FloatLiteralPropertyOutput {
    property?: 1.25;
}

export declare interface FloatLiteralPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface FloatLiteralPutAllBodyParam {
    body: FloatLiteralProperty;
}

export declare type FloatLiteralPutAllParameters = FloatLiteralPutAllBodyParam & RequestParameters;

export declare interface FloatLiteralPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface FloatLiteralPutDefaultBodyParam {
    body: FloatLiteralProperty;
}

export declare type FloatLiteralPutDefaultParameters = FloatLiteralPutDefaultBodyParam & RequestParameters;

export declare interface IntLiteralGetAll {
    get(options?: IntLiteralGetAllParameters): StreamableMethod<IntLiteralGetAll200Response>;
    put(options: IntLiteralPutAllParameters): StreamableMethod<IntLiteralPutAll204Response>;
}

export declare interface IntLiteralGetAll200Response extends HttpResponse {
    status: "200";
    body: IntLiteralPropertyOutput;
}

export declare type IntLiteralGetAllParameters = RequestParameters;

export declare interface IntLiteralGetDefault {
    get(options?: IntLiteralGetDefaultParameters): StreamableMethod<IntLiteralGetDefault200Response>;
    put(options: IntLiteralPutDefaultParameters): StreamableMethod<IntLiteralPutDefault204Response>;
}

export declare interface IntLiteralGetDefault200Response extends HttpResponse {
    status: "200";
    body: IntLiteralPropertyOutput;
}

export declare type IntLiteralGetDefaultParameters = RequestParameters;

export declare interface IntLiteralProperty {
    property?: 1;
}

export declare interface IntLiteralPropertyOutput {
    property?: 1;
}

export declare interface IntLiteralPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface IntLiteralPutAllBodyParam {
    body: IntLiteralProperty;
}

export declare type IntLiteralPutAllParameters = IntLiteralPutAllBodyParam & RequestParameters;

export declare interface IntLiteralPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface IntLiteralPutDefaultBodyParam {
    body: IntLiteralProperty;
}

export declare type IntLiteralPutDefaultParameters = IntLiteralPutDefaultBodyParam & RequestParameters;

export declare type OptionalClient = Client & {
    path: Routes;
};

export declare interface OptionalClientOptions extends ClientOptions {
}

export declare interface PlainDateGetAll {
    get(options?: PlainDateGetAllParameters): StreamableMethod<PlainDateGetAll200Response>;
    put(options: PlainDatePutAllParameters): StreamableMethod<PlainDatePutAll204Response>;
}

export declare interface PlainDateGetAll200Response extends HttpResponse {
    status: "200";
    body: PlainDatePropertyOutput;
}

export declare type PlainDateGetAllParameters = RequestParameters;

export declare interface PlainDateGetDefault {
    get(options?: PlainDateGetDefaultParameters): StreamableMethod<PlainDateGetDefault200Response>;
    put(options: PlainDatePutDefaultParameters): StreamableMethod<PlainDatePutDefault204Response>;
}

export declare interface PlainDateGetDefault200Response extends HttpResponse {
    status: "200";
    body: PlainDatePropertyOutput;
}

export declare type PlainDateGetDefaultParameters = RequestParameters;

export declare interface PlainDateProperty {
    property?: string;
}

export declare interface PlainDatePropertyOutput {
    property?: string;
}

export declare interface PlainDatePutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface PlainDatePutAllBodyParam {
    body: PlainDateProperty;
}

export declare type PlainDatePutAllParameters = PlainDatePutAllBodyParam & RequestParameters;

export declare interface PlainDatePutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface PlainDatePutDefaultBodyParam {
    body: PlainDateProperty;
}

export declare type PlainDatePutDefaultParameters = PlainDatePutDefaultBodyParam & RequestParameters;

export declare interface PlainTimeGetAll {
    get(options?: PlainTimeGetAllParameters): StreamableMethod<PlainTimeGetAll200Response>;
    put(options: PlainTimePutAllParameters): StreamableMethod<PlainTimePutAll204Response>;
}

export declare interface PlainTimeGetAll200Response extends HttpResponse {
    status: "200";
    body: PlainTimePropertyOutput;
}

export declare type PlainTimeGetAllParameters = RequestParameters;

export declare interface PlainTimeGetDefault {
    get(options?: PlainTimeGetDefaultParameters): StreamableMethod<PlainTimeGetDefault200Response>;
    put(options: PlainTimePutDefaultParameters): StreamableMethod<PlainTimePutDefault204Response>;
}

export declare interface PlainTimeGetDefault200Response extends HttpResponse {
    status: "200";
    body: PlainTimePropertyOutput;
}

export declare type PlainTimeGetDefaultParameters = RequestParameters;

export declare interface PlainTimeProperty {
    property?: string;
}

export declare interface PlainTimePropertyOutput {
    property?: string;
}

export declare interface PlainTimePutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface PlainTimePutAllBodyParam {
    body: PlainTimeProperty;
}

export declare type PlainTimePutAllParameters = PlainTimePutAllBodyParam & RequestParameters;

export declare interface PlainTimePutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface PlainTimePutDefaultBodyParam {
    body: PlainTimeProperty;
}

export declare type PlainTimePutDefaultParameters = PlainTimePutDefaultBodyParam & RequestParameters;

export declare interface RequiredAndOptionalGetAll {
    get(options?: RequiredAndOptionalGetAllParameters): StreamableMethod<RequiredAndOptionalGetAll200Response>;
    put(options: RequiredAndOptionalPutAllParameters): StreamableMethod<RequiredAndOptionalPutAll204Response>;
}

export declare interface RequiredAndOptionalGetAll200Response extends HttpResponse {
    status: "200";
    body: RequiredAndOptionalPropertyOutput;
}

export declare type RequiredAndOptionalGetAllParameters = RequestParameters;

export declare interface RequiredAndOptionalGetRequiredOnly {
    get(options?: RequiredAndOptionalGetRequiredOnlyParameters): StreamableMethod<RequiredAndOptionalGetRequiredOnly200Response>;
    put(options: RequiredAndOptionalPutRequiredOnlyParameters): StreamableMethod<RequiredAndOptionalPutRequiredOnly204Response>;
}

export declare interface RequiredAndOptionalGetRequiredOnly200Response extends HttpResponse {
    status: "200";
    body: RequiredAndOptionalPropertyOutput;
}

export declare type RequiredAndOptionalGetRequiredOnlyParameters = RequestParameters;

export declare interface RequiredAndOptionalProperty {
    optionalProperty?: string;
    requiredProperty: number;
}

export declare interface RequiredAndOptionalPropertyOutput {
    optionalProperty?: string;
    requiredProperty: number;
}

export declare interface RequiredAndOptionalPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface RequiredAndOptionalPutAllBodyParam {
    body: RequiredAndOptionalProperty;
}

export declare type RequiredAndOptionalPutAllParameters = RequiredAndOptionalPutAllBodyParam & RequestParameters;

export declare interface RequiredAndOptionalPutRequiredOnly204Response extends HttpResponse {
    status: "204";
}

export declare interface RequiredAndOptionalPutRequiredOnlyBodyParam {
    body: RequiredAndOptionalProperty;
}

export declare type RequiredAndOptionalPutRequiredOnlyParameters = RequiredAndOptionalPutRequiredOnlyBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/property/optional/string/all"): StringModelGetAll;
    (path: "/type/property/optional/string/default"): StringModelGetDefault;
    (path: "/type/property/optional/bytes/all"): BytesGetAll;
    (path: "/type/property/optional/bytes/default"): BytesGetDefault;
    (path: "/type/property/optional/datetime/all"): DatetimeGetAll;
    (path: "/type/property/optional/datetime/default"): DatetimeGetDefault;
    (path: "/type/property/optional/duration/all"): DurationGetAll;
    (path: "/type/property/optional/duration/default"): DurationGetDefault;
    (path: "/type/property/optional/plainDate/all"): PlainDateGetAll;
    (path: "/type/property/optional/plainDate/default"): PlainDateGetDefault;
    (path: "/type/property/optional/plainTime/all"): PlainTimeGetAll;
    (path: "/type/property/optional/plainTime/default"): PlainTimeGetDefault;
    (path: "/type/property/optional/collections/bytes/all"): CollectionsByteGetAll;
    (path: "/type/property/optional/collections/bytes/default"): CollectionsByteGetDefault;
    (path: "/type/property/optional/collections/model/all"): CollectionsModelGetAll;
    (path: "/type/property/optional/collections/model/default"): CollectionsModelGetDefault;
    (path: "/type/property/optional/string/literal/all"): StringLiteralGetAll;
    (path: "/type/property/optional/string/literal/default"): StringLiteralGetDefault;
    (path: "/type/property/optional/int/literal/all"): IntLiteralGetAll;
    (path: "/type/property/optional/int/literal/default"): IntLiteralGetDefault;
    (path: "/type/property/optional/float/literal/all"): FloatLiteralGetAll;
    (path: "/type/property/optional/float/literal/default"): FloatLiteralGetDefault;
    (path: "/type/property/optional/boolean/literal/all"): BooleanLiteralGetAll;
    (path: "/type/property/optional/boolean/literal/default"): BooleanLiteralGetDefault;
    (path: "/type/property/optional/union/string/literal/all"): UnionStringLiteralGetAll;
    (path: "/type/property/optional/union/string/literal/default"): UnionStringLiteralGetDefault;
    (path: "/type/property/optional/union/int/literal/all"): UnionIntLiteralGetAll;
    (path: "/type/property/optional/union/int/literal/default"): UnionIntLiteralGetDefault;
    (path: "/type/property/optional/union/float/literal/all"): UnionFloatLiteralGetAll;
    (path: "/type/property/optional/union/float/literal/default"): UnionFloatLiteralGetDefault;
    (path: "/type/property/optional/requiredAndOptional/all"): RequiredAndOptionalGetAll;
    (path: "/type/property/optional/requiredAndOptional/requiredOnly"): RequiredAndOptionalGetRequiredOnly;
}

export declare interface StringLiteralGetAll {
    get(options?: StringLiteralGetAllParameters): StreamableMethod<StringLiteralGetAll200Response>;
    put(options: StringLiteralPutAllParameters): StreamableMethod<StringLiteralPutAll204Response>;
}

export declare interface StringLiteralGetAll200Response extends HttpResponse {
    status: "200";
    body: StringLiteralPropertyOutput;
}

export declare type StringLiteralGetAllParameters = RequestParameters;

export declare interface StringLiteralGetDefault {
    get(options?: StringLiteralGetDefaultParameters): StreamableMethod<StringLiteralGetDefault200Response>;
    put(options: StringLiteralPutDefaultParameters): StreamableMethod<StringLiteralPutDefault204Response>;
}

export declare interface StringLiteralGetDefault200Response extends HttpResponse {
    status: "200";
    body: StringLiteralPropertyOutput;
}

export declare type StringLiteralGetDefaultParameters = RequestParameters;

export declare interface StringLiteralProperty {
    property?: "hello";
}

export declare interface StringLiteralPropertyOutput {
    property?: "hello";
}

export declare interface StringLiteralPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface StringLiteralPutAllBodyParam {
    body: StringLiteralProperty;
}

export declare type StringLiteralPutAllParameters = StringLiteralPutAllBodyParam & RequestParameters;

export declare interface StringLiteralPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface StringLiteralPutDefaultBodyParam {
    body: StringLiteralProperty;
}

export declare type StringLiteralPutDefaultParameters = StringLiteralPutDefaultBodyParam & RequestParameters;

export declare interface StringModelGetAll {
    get(options?: StringModelGetAllParameters): StreamableMethod<StringModelGetAll200Response>;
    put(options: StringModelPutAllParameters): StreamableMethod<StringModelPutAll204Response>;
}

export declare interface StringModelGetAll200Response extends HttpResponse {
    status: "200";
    body: StringPropertyOutput;
}

export declare type StringModelGetAllParameters = RequestParameters;

export declare interface StringModelGetDefault {
    get(options?: StringModelGetDefaultParameters): StreamableMethod<StringModelGetDefault200Response>;
    put(options: StringModelPutDefaultParameters): StreamableMethod<StringModelPutDefault204Response>;
}

export declare interface StringModelGetDefault200Response extends HttpResponse {
    status: "200";
    body: StringPropertyOutput;
}

export declare type StringModelGetDefaultParameters = RequestParameters;

export declare interface StringModelPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface StringModelPutAllBodyParam {
    body: StringProperty;
}

export declare type StringModelPutAllParameters = StringModelPutAllBodyParam & RequestParameters;

export declare interface StringModelPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface StringModelPutDefaultBodyParam {
    body: StringProperty;
}

export declare type StringModelPutDefaultParameters = StringModelPutDefaultBodyParam & RequestParameters;

export declare interface StringProperty {
    property?: string;
}

export declare interface StringPropertyOutput {
    property?: string;
}

export declare interface UnionFloatLiteralGetAll {
    get(options?: UnionFloatLiteralGetAllParameters): StreamableMethod<UnionFloatLiteralGetAll200Response>;
    put(options: UnionFloatLiteralPutAllParameters): StreamableMethod<UnionFloatLiteralPutAll204Response>;
}

export declare interface UnionFloatLiteralGetAll200Response extends HttpResponse {
    status: "200";
    body: UnionFloatLiteralPropertyOutput;
}

export declare type UnionFloatLiteralGetAllParameters = RequestParameters;

export declare interface UnionFloatLiteralGetDefault {
    get(options?: UnionFloatLiteralGetDefaultParameters): StreamableMethod<UnionFloatLiteralGetDefault200Response>;
    put(options: UnionFloatLiteralPutDefaultParameters): StreamableMethod<UnionFloatLiteralPutDefault204Response>;
}

export declare interface UnionFloatLiteralGetDefault200Response extends HttpResponse {
    status: "200";
    body: UnionFloatLiteralPropertyOutput;
}

export declare type UnionFloatLiteralGetDefaultParameters = RequestParameters;

export declare interface UnionFloatLiteralProperty {
    property?: 1.25 | 2.375;
}

export declare interface UnionFloatLiteralPropertyOutput {
    property?: 1.25 | 2.375;
}

export declare interface UnionFloatLiteralPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionFloatLiteralPutAllBodyParam {
    body: UnionFloatLiteralProperty;
}

export declare type UnionFloatLiteralPutAllParameters = UnionFloatLiteralPutAllBodyParam & RequestParameters;

export declare interface UnionFloatLiteralPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionFloatLiteralPutDefaultBodyParam {
    body: UnionFloatLiteralProperty;
}

export declare type UnionFloatLiteralPutDefaultParameters = UnionFloatLiteralPutDefaultBodyParam & RequestParameters;

export declare interface UnionIntLiteralGetAll {
    get(options?: UnionIntLiteralGetAllParameters): StreamableMethod<UnionIntLiteralGetAll200Response>;
    put(options: UnionIntLiteralPutAllParameters): StreamableMethod<UnionIntLiteralPutAll204Response>;
}

export declare interface UnionIntLiteralGetAll200Response extends HttpResponse {
    status: "200";
    body: UnionIntLiteralPropertyOutput;
}

export declare type UnionIntLiteralGetAllParameters = RequestParameters;

export declare interface UnionIntLiteralGetDefault {
    get(options?: UnionIntLiteralGetDefaultParameters): StreamableMethod<UnionIntLiteralGetDefault200Response>;
    put(options: UnionIntLiteralPutDefaultParameters): StreamableMethod<UnionIntLiteralPutDefault204Response>;
}

export declare interface UnionIntLiteralGetDefault200Response extends HttpResponse {
    status: "200";
    body: UnionIntLiteralPropertyOutput;
}

export declare type UnionIntLiteralGetDefaultParameters = RequestParameters;

export declare interface UnionIntLiteralProperty {
    property?: 1 | 2;
}

export declare interface UnionIntLiteralPropertyOutput {
    property?: 1 | 2;
}

export declare interface UnionIntLiteralPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionIntLiteralPutAllBodyParam {
    body: UnionIntLiteralProperty;
}

export declare type UnionIntLiteralPutAllParameters = UnionIntLiteralPutAllBodyParam & RequestParameters;

export declare interface UnionIntLiteralPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionIntLiteralPutDefaultBodyParam {
    body: UnionIntLiteralProperty;
}

export declare type UnionIntLiteralPutDefaultParameters = UnionIntLiteralPutDefaultBodyParam & RequestParameters;

export declare interface UnionStringLiteralGetAll {
    get(options?: UnionStringLiteralGetAllParameters): StreamableMethod<UnionStringLiteralGetAll200Response>;
    put(options: UnionStringLiteralPutAllParameters): StreamableMethod<UnionStringLiteralPutAll204Response>;
}

export declare interface UnionStringLiteralGetAll200Response extends HttpResponse {
    status: "200";
    body: UnionStringLiteralPropertyOutput;
}

export declare type UnionStringLiteralGetAllParameters = RequestParameters;

export declare interface UnionStringLiteralGetDefault {
    get(options?: UnionStringLiteralGetDefaultParameters): StreamableMethod<UnionStringLiteralGetDefault200Response>;
    put(options: UnionStringLiteralPutDefaultParameters): StreamableMethod<UnionStringLiteralPutDefault204Response>;
}

export declare interface UnionStringLiteralGetDefault200Response extends HttpResponse {
    status: "200";
    body: UnionStringLiteralPropertyOutput;
}

export declare type UnionStringLiteralGetDefaultParameters = RequestParameters;

export declare interface UnionStringLiteralProperty {
    property?: "hello" | "world";
}

export declare interface UnionStringLiteralPropertyOutput {
    property?: "hello" | "world";
}

export declare interface UnionStringLiteralPutAll204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionStringLiteralPutAllBodyParam {
    body: UnionStringLiteralProperty;
}

export declare type UnionStringLiteralPutAllParameters = UnionStringLiteralPutAllBodyParam & RequestParameters;

export declare interface UnionStringLiteralPutDefault204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionStringLiteralPutDefaultBodyParam {
    body: UnionStringLiteralProperty;
}

export declare type UnionStringLiteralPutDefaultParameters = UnionStringLiteralPutDefaultBodyParam & RequestParameters;

export { }
