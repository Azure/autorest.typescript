import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare interface BooleanLiteralGet {
    get(options?: BooleanLiteralGetParameters): StreamableMethod<BooleanLiteralGet200Response>;
    put(options: BooleanLiteralPutParameters): StreamableMethod<BooleanLiteralPut204Response>;
}

export declare interface BooleanLiteralGet200Response extends HttpResponse {
    status: "200";
    body: BooleanLiteralPropertyOutput;
}

export declare type BooleanLiteralGetParameters = RequestParameters;

export declare interface BooleanLiteralProperty {
    property: true;
}

export declare interface BooleanLiteralPropertyOutput {
    property: true;
}

export declare interface BooleanLiteralPut204Response extends HttpResponse {
    status: "204";
}

export declare interface BooleanLiteralPutBodyParam {
    body: BooleanLiteralProperty;
}

export declare type BooleanLiteralPutParameters = BooleanLiteralPutBodyParam & RequestParameters;

export declare interface BooleanModelGet {
    get(options?: BooleanModelGetParameters): StreamableMethod<BooleanModelGet200Response>;
    put(options: BooleanModelPutParameters): StreamableMethod<BooleanModelPut204Response>;
}

export declare interface BooleanModelGet200Response extends HttpResponse {
    status: "200";
    body: BooleanPropertyOutput;
}

export declare type BooleanModelGetParameters = RequestParameters;

export declare interface BooleanModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface BooleanModelPutBodyParam {
    body: BooleanProperty;
}

export declare type BooleanModelPutParameters = BooleanModelPutBodyParam & RequestParameters;

export declare interface BooleanProperty {
    property: boolean;
}

export declare interface BooleanPropertyOutput {
    property: boolean;
}

export declare interface BytesGet {
    get(options?: BytesGetParameters): StreamableMethod<BytesGet200Response>;
    put(options: BytesPutParameters): StreamableMethod<BytesPut204Response>;
}

export declare interface BytesGet200Response extends HttpResponse {
    status: "200";
    body: BytesPropertyOutput;
}

export declare type BytesGetParameters = RequestParameters;

export declare interface BytesProperty {
    property: string;
}

export declare interface BytesPropertyOutput {
    property: string;
}

export declare interface BytesPut204Response extends HttpResponse {
    status: "204";
}

export declare interface BytesPutBodyParam {
    body: BytesProperty;
}

export declare type BytesPutParameters = BytesPutBodyParam & RequestParameters;

export declare interface CollectionsIntGet {
    get(options?: CollectionsIntGetParameters): StreamableMethod<CollectionsIntGet200Response>;
    put(options: CollectionsIntPutParameters): StreamableMethod<CollectionsIntPut204Response>;
}

export declare interface CollectionsIntGet200Response extends HttpResponse {
    status: "200";
    body: CollectionsIntPropertyOutput;
}

export declare type CollectionsIntGetParameters = RequestParameters;

export declare interface CollectionsIntProperty {
    property: number[];
}

export declare interface CollectionsIntPropertyOutput {
    property: number[];
}

export declare interface CollectionsIntPut204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsIntPutBodyParam {
    body: CollectionsIntProperty;
}

export declare type CollectionsIntPutParameters = CollectionsIntPutBodyParam & RequestParameters;

export declare interface CollectionsModelGet {
    get(options?: CollectionsModelGetParameters): StreamableMethod<CollectionsModelGet200Response>;
    put(options: CollectionsModelPutParameters): StreamableMethod<CollectionsModelPut204Response>;
}

export declare interface CollectionsModelGet200Response extends HttpResponse {
    status: "200";
    body: CollectionsModelPropertyOutput;
}

export declare type CollectionsModelGetParameters = RequestParameters;

export declare interface CollectionsModelProperty {
    property: Array<InnerModel>;
}

export declare interface CollectionsModelPropertyOutput {
    property: Array<InnerModelOutput>;
}

export declare interface CollectionsModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsModelPutBodyParam {
    body: CollectionsModelProperty;
}

export declare type CollectionsModelPutParameters = CollectionsModelPutBodyParam & RequestParameters;

export declare interface CollectionsStringGet {
    get(options?: CollectionsStringGetParameters): StreamableMethod<CollectionsStringGet200Response>;
    put(options: CollectionsStringPutParameters): StreamableMethod<CollectionsStringPut204Response>;
}

export declare interface CollectionsStringGet200Response extends HttpResponse {
    status: "200";
    body: CollectionsStringPropertyOutput;
}

export declare type CollectionsStringGetParameters = RequestParameters;

export declare interface CollectionsStringProperty {
    property: string[];
}

export declare interface CollectionsStringPropertyOutput {
    property: string[];
}

export declare interface CollectionsStringPut204Response extends HttpResponse {
    status: "204";
}

export declare interface CollectionsStringPutBodyParam {
    body: CollectionsStringProperty;
}

export declare type CollectionsStringPutParameters = CollectionsStringPutBodyParam & RequestParameters;

declare function createClient(options?: ValueTypesClientOptions): ValueTypesClient;
export default createClient;

export declare interface DatetimeGet {
    get(options?: DatetimeGetParameters): StreamableMethod<DatetimeGet200Response>;
    put(options: DatetimePutParameters): StreamableMethod<DatetimePut204Response>;
}

export declare interface DatetimeGet200Response extends HttpResponse {
    status: "200";
    body: DatetimePropertyOutput;
}

export declare type DatetimeGetParameters = RequestParameters;

export declare interface DatetimeProperty {
    property: Date | string;
}

export declare interface DatetimePropertyOutput {
    property: string;
}

export declare interface DatetimePut204Response extends HttpResponse {
    status: "204";
}

export declare interface DatetimePutBodyParam {
    body: DatetimeProperty;
}

export declare type DatetimePutParameters = DatetimePutBodyParam & RequestParameters;

export declare interface Decimal128Get {
    get(options?: Decimal128GetParameters): StreamableMethod<Decimal128Get200Response>;
    put(options: Decimal128PutParameters): StreamableMethod<Decimal128Put204Response>;
}

export declare interface Decimal128Get200Response extends HttpResponse {
    status: "200";
    body: Decimal128PropertyOutput;
}

export declare type Decimal128GetParameters = RequestParameters;

export declare interface Decimal128Property {
    property: number;
}

export declare interface Decimal128PropertyOutput {
    property: number;
}

export declare interface Decimal128Put204Response extends HttpResponse {
    status: "204";
}

export declare interface Decimal128PutBodyParam {
    body: Decimal128Property;
}

export declare type Decimal128PutParameters = Decimal128PutBodyParam & RequestParameters;

export declare interface DecimalGet {
    get(options?: DecimalGetParameters): StreamableMethod<DecimalGet200Response>;
    put(options: DecimalPutParameters): StreamableMethod<DecimalPut204Response>;
}

export declare interface DecimalGet200Response extends HttpResponse {
    status: "200";
    body: DecimalPropertyOutput;
}

export declare type DecimalGetParameters = RequestParameters;

export declare interface DecimalProperty {
    property: number;
}

export declare interface DecimalPropertyOutput {
    property: number;
}

export declare interface DecimalPut204Response extends HttpResponse {
    status: "204";
}

export declare interface DecimalPutBodyParam {
    body: DecimalProperty;
}

export declare type DecimalPutParameters = DecimalPutBodyParam & RequestParameters;

export declare interface DictionaryStringGet {
    get(options?: DictionaryStringGetParameters): StreamableMethod<DictionaryStringGet200Response>;
    put(options: DictionaryStringPutParameters): StreamableMethod<DictionaryStringPut204Response>;
}

export declare interface DictionaryStringGet200Response extends HttpResponse {
    status: "200";
    body: DictionaryStringPropertyOutput;
}

export declare type DictionaryStringGetParameters = RequestParameters;

export declare interface DictionaryStringProperty {
    property: Record<string, string>;
}

export declare interface DictionaryStringPropertyOutput {
    property: Record<string, string>;
}

export declare interface DictionaryStringPut204Response extends HttpResponse {
    status: "204";
}

export declare interface DictionaryStringPutBodyParam {
    body: DictionaryStringProperty;
}

export declare type DictionaryStringPutParameters = DictionaryStringPutBodyParam & RequestParameters;

export declare interface DurationGet {
    get(options?: DurationGetParameters): StreamableMethod<DurationGet200Response>;
    put(options: DurationPutParameters): StreamableMethod<DurationPut204Response>;
}

export declare interface DurationGet200Response extends HttpResponse {
    status: "200";
    body: DurationPropertyOutput;
}

export declare type DurationGetParameters = RequestParameters;

export declare interface DurationProperty {
    property: string;
}

export declare interface DurationPropertyOutput {
    property: string;
}

export declare interface DurationPut204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationPutBodyParam {
    body: DurationProperty;
}

export declare type DurationPutParameters = DurationPutBodyParam & RequestParameters;

export declare interface EnumGet {
    get(options?: EnumGetParameters): StreamableMethod<EnumGet200Response>;
    put(options: EnumPutParameters): StreamableMethod<EnumPut204Response>;
}

export declare interface EnumGet200Response extends HttpResponse {
    status: "200";
    body: EnumPropertyOutput;
}

export declare type EnumGetParameters = RequestParameters;

export declare interface EnumProperty {
    property: FixedInnerEnum;
}

export declare interface EnumPropertyOutput {
    property: FixedInnerEnumOutput;
}

export declare interface EnumPut204Response extends HttpResponse {
    status: "204";
}

export declare interface EnumPutBodyParam {
    body: EnumProperty;
}

export declare type EnumPutParameters = EnumPutBodyParam & RequestParameters;

export declare interface ExtensibleEnumGet {
    get(options?: ExtensibleEnumGetParameters): StreamableMethod<ExtensibleEnumGet200Response>;
    put(options: ExtensibleEnumPutParameters): StreamableMethod<ExtensibleEnumPut204Response>;
}

export declare interface ExtensibleEnumGet200Response extends HttpResponse {
    status: "200";
    body: ExtensibleEnumPropertyOutput;
}

export declare type ExtensibleEnumGetParameters = RequestParameters;

export declare interface ExtensibleEnumProperty {
    property: InnerEnum;
}

export declare interface ExtensibleEnumPropertyOutput {
    property: InnerEnumOutput;
}

export declare interface ExtensibleEnumPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ExtensibleEnumPutBodyParam {
    body: ExtensibleEnumProperty;
}

export declare type ExtensibleEnumPutParameters = ExtensibleEnumPutBodyParam & RequestParameters;

export declare type FixedInnerEnum = "ValueOne" | "ValueTwo";

export declare type FixedInnerEnumOutput = "ValueOne" | "ValueTwo";

export declare interface FloatGet {
    get(options?: FloatGetParameters): StreamableMethod<FloatGet200Response>;
    put(options: FloatPutParameters): StreamableMethod<FloatPut204Response>;
}

export declare interface FloatGet200Response extends HttpResponse {
    status: "200";
    body: FloatPropertyOutput;
}

export declare type FloatGetParameters = RequestParameters;

export declare interface FloatLiteralGet {
    get(options?: FloatLiteralGetParameters): StreamableMethod<FloatLiteralGet200Response>;
    put(options: FloatLiteralPutParameters): StreamableMethod<FloatLiteralPut204Response>;
}

export declare interface FloatLiteralGet200Response extends HttpResponse {
    status: "200";
    body: FloatLiteralPropertyOutput;
}

export declare type FloatLiteralGetParameters = RequestParameters;

export declare interface FloatLiteralProperty {
    property: 43.125;
}

export declare interface FloatLiteralPropertyOutput {
    property: 43.125;
}

export declare interface FloatLiteralPut204Response extends HttpResponse {
    status: "204";
}

export declare interface FloatLiteralPutBodyParam {
    body: FloatLiteralProperty;
}

export declare type FloatLiteralPutParameters = FloatLiteralPutBodyParam & RequestParameters;

export declare interface FloatProperty {
    property: number;
}

export declare interface FloatPropertyOutput {
    property: number;
}

export declare interface FloatPut204Response extends HttpResponse {
    status: "204";
}

export declare interface FloatPutBodyParam {
    body: FloatProperty;
}

export declare type FloatPutParameters = FloatPutBodyParam & RequestParameters;

export declare type InnerEnum = string;

export declare type InnerEnumOutput = string;

export declare interface InnerModel {
    property: string;
}

export declare interface InnerModelOutput {
    property: string;
}

export declare interface IntGet {
    get(options?: IntGetParameters): StreamableMethod<IntGet200Response>;
    put(options: IntPutParameters): StreamableMethod<IntPut204Response>;
}

export declare interface IntGet200Response extends HttpResponse {
    status: "200";
    body: IntPropertyOutput;
}

export declare type IntGetParameters = RequestParameters;

export declare interface IntLiteralGet {
    get(options?: IntLiteralGetParameters): StreamableMethod<IntLiteralGet200Response>;
    put(options: IntLiteralPutParameters): StreamableMethod<IntLiteralPut204Response>;
}

export declare interface IntLiteralGet200Response extends HttpResponse {
    status: "200";
    body: IntLiteralPropertyOutput;
}

export declare type IntLiteralGetParameters = RequestParameters;

export declare interface IntLiteralProperty {
    property: 42;
}

export declare interface IntLiteralPropertyOutput {
    property: 42;
}

export declare interface IntLiteralPut204Response extends HttpResponse {
    status: "204";
}

export declare interface IntLiteralPutBodyParam {
    body: IntLiteralProperty;
}

export declare type IntLiteralPutParameters = IntLiteralPutBodyParam & RequestParameters;

export declare interface IntProperty {
    property: number;
}

export declare interface IntPropertyOutput {
    property: number;
}

export declare interface IntPut204Response extends HttpResponse {
    status: "204";
}

export declare interface IntPutBodyParam {
    body: IntProperty;
}

export declare type IntPutParameters = IntPutBodyParam & RequestParameters;

export declare interface ModelGet {
    get(options?: ModelGetParameters): StreamableMethod<ModelGet200Response>;
    put(options: ModelPutParameters): StreamableMethod<ModelPut204Response>;
}

export declare interface ModelGet200Response extends HttpResponse {
    status: "200";
    body: ModelPropertyOutput;
}

export declare type ModelGetParameters = RequestParameters;

export declare interface ModelProperty {
    property: InnerModel;
}

export declare interface ModelPropertyOutput {
    property: InnerModelOutput;
}

export declare interface ModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelPutBodyParam {
    body: ModelProperty;
}

export declare type ModelPutParameters = ModelPutBodyParam & RequestParameters;

export declare interface NeverGet {
    get(options?: NeverGetParameters): StreamableMethod<NeverGet200Response>;
    put(options: NeverPutParameters): StreamableMethod<NeverPut204Response>;
}

export declare interface NeverGet200Response extends HttpResponse {
    status: "200";
    body: NeverPropertyOutput;
}

export declare type NeverGetParameters = RequestParameters;

export declare interface NeverProperty {
}

export declare interface NeverPropertyOutput {
}

export declare interface NeverPut204Response extends HttpResponse {
    status: "204";
}

export declare interface NeverPutBodyParam {
    body: NeverProperty;
}

export declare type NeverPutParameters = NeverPutBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/property/value-types/boolean"): BooleanModelGet;
    (path: "/type/property/value-types/string"): StringModelGet;
    (path: "/type/property/value-types/bytes"): BytesGet;
    (path: "/type/property/value-types/int"): IntGet;
    (path: "/type/property/value-types/float"): FloatGet;
    (path: "/type/property/value-types/decimal"): DecimalGet;
    (path: "/type/property/value-types/decimal128"): Decimal128Get;
    (path: "/type/property/value-types/datetime"): DatetimeGet;
    (path: "/type/property/value-types/duration"): DurationGet;
    (path: "/type/property/value-types/enum"): EnumGet;
    (path: "/type/property/value-types/extensible-enum"): ExtensibleEnumGet;
    (path: "/type/property/value-types/model"): ModelGet;
    (path: "/type/property/value-types/collections/string"): CollectionsStringGet;
    (path: "/type/property/value-types/collections/int"): CollectionsIntGet;
    (path: "/type/property/value-types/collections/model"): CollectionsModelGet;
    (path: "/type/property/value-types/dictionary/string"): DictionaryStringGet;
    (path: "/type/property/value-types/never"): NeverGet;
    (path: "/type/property/value-types/unknown/string"): UnknownStringGet;
    (path: "/type/property/value-types/unknown/int"): UnknownIntGet;
    (path: "/type/property/value-types/unknown/dict"): UnknownDictGet;
    (path: "/type/property/value-types/unknown/array"): UnknownArrayGet;
    (path: "/type/property/value-types/string/literal"): StringLiteralGet;
    (path: "/type/property/value-types/int/literal"): IntLiteralGet;
    (path: "/type/property/value-types/float/literal"): FloatLiteralGet;
    (path: "/type/property/value-types/boolean/literal"): BooleanLiteralGet;
    (path: "/type/property/value-types/union/string/literal"): UnionStringLiteralGet;
    (path: "/type/property/value-types/union/int/literal"): UnionIntLiteralGet;
    (path: "/type/property/value-types/union/float/literal"): UnionFloatLiteralGet;
    (path: "/type/property/value-types/union-enum-value"): UnionEnumValueGet;
}

export declare interface StringLiteralGet {
    get(options?: StringLiteralGetParameters): StreamableMethod<StringLiteralGet200Response>;
    put(options: StringLiteralPutParameters): StreamableMethod<StringLiteralPut204Response>;
}

export declare interface StringLiteralGet200Response extends HttpResponse {
    status: "200";
    body: StringLiteralPropertyOutput;
}

export declare type StringLiteralGetParameters = RequestParameters;

export declare interface StringLiteralProperty {
    property: "hello";
}

export declare interface StringLiteralPropertyOutput {
    property: "hello";
}

export declare interface StringLiteralPut204Response extends HttpResponse {
    status: "204";
}

export declare interface StringLiteralPutBodyParam {
    body: StringLiteralProperty;
}

export declare type StringLiteralPutParameters = StringLiteralPutBodyParam & RequestParameters;

export declare interface StringModelGet {
    get(options?: StringModelGetParameters): StreamableMethod<StringModelGet200Response>;
    put(options: StringModelPutParameters): StreamableMethod<StringModelPut204Response>;
}

export declare interface StringModelGet200Response extends HttpResponse {
    status: "200";
    body: StringPropertyOutput;
}

export declare type StringModelGetParameters = RequestParameters;

export declare interface StringModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface StringModelPutBodyParam {
    body: StringProperty;
}

export declare type StringModelPutParameters = StringModelPutBodyParam & RequestParameters;

export declare interface StringProperty {
    property: string;
}

export declare interface StringPropertyOutput {
    property: string;
}

export declare interface UnionEnumValueGet {
    get(options?: UnionEnumValueGetParameters): StreamableMethod<UnionEnumValueGet200Response>;
    put(options: UnionEnumValuePutParameters): StreamableMethod<UnionEnumValuePut204Response>;
}

export declare interface UnionEnumValueGet200Response extends HttpResponse {
    status: "200";
    body: UnionEnumValuePropertyOutput;
}

export declare type UnionEnumValueGetParameters = RequestParameters;

export declare interface UnionEnumValueProperty {
    property: "value2";
}

export declare interface UnionEnumValuePropertyOutput {
    property: "value2";
}

export declare interface UnionEnumValuePut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionEnumValuePutBodyParam {
    body: UnionEnumValueProperty;
}

export declare type UnionEnumValuePutParameters = UnionEnumValuePutBodyParam & RequestParameters;

export declare interface UnionFloatLiteralGet {
    get(options?: UnionFloatLiteralGetParameters): StreamableMethod<UnionFloatLiteralGet200Response>;
    put(options: UnionFloatLiteralPutParameters): StreamableMethod<UnionFloatLiteralPut204Response>;
}

export declare interface UnionFloatLiteralGet200Response extends HttpResponse {
    status: "200";
    body: UnionFloatLiteralPropertyOutput;
}

export declare type UnionFloatLiteralGetParameters = RequestParameters;

export declare interface UnionFloatLiteralProperty {
    property: 43.125 | 46.875;
}

export declare interface UnionFloatLiteralPropertyOutput {
    property: 43.125 | 46.875;
}

export declare interface UnionFloatLiteralPut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionFloatLiteralPutBodyParam {
    body: UnionFloatLiteralProperty;
}

export declare type UnionFloatLiteralPutParameters = UnionFloatLiteralPutBodyParam & RequestParameters;

export declare interface UnionIntLiteralGet {
    get(options?: UnionIntLiteralGetParameters): StreamableMethod<UnionIntLiteralGet200Response>;
    put(options: UnionIntLiteralPutParameters): StreamableMethod<UnionIntLiteralPut204Response>;
}

export declare interface UnionIntLiteralGet200Response extends HttpResponse {
    status: "200";
    body: UnionIntLiteralPropertyOutput;
}

export declare type UnionIntLiteralGetParameters = RequestParameters;

export declare interface UnionIntLiteralProperty {
    property: 42 | 43;
}

export declare interface UnionIntLiteralPropertyOutput {
    property: 42 | 43;
}

export declare interface UnionIntLiteralPut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionIntLiteralPutBodyParam {
    body: UnionIntLiteralProperty;
}

export declare type UnionIntLiteralPutParameters = UnionIntLiteralPutBodyParam & RequestParameters;

export declare interface UnionStringLiteralGet {
    get(options?: UnionStringLiteralGetParameters): StreamableMethod<UnionStringLiteralGet200Response>;
    put(options: UnionStringLiteralPutParameters): StreamableMethod<UnionStringLiteralPut204Response>;
}

export declare interface UnionStringLiteralGet200Response extends HttpResponse {
    status: "200";
    body: UnionStringLiteralPropertyOutput;
}

export declare type UnionStringLiteralGetParameters = RequestParameters;

export declare interface UnionStringLiteralProperty {
    property: "hello" | "world";
}

export declare interface UnionStringLiteralPropertyOutput {
    property: "hello" | "world";
}

export declare interface UnionStringLiteralPut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionStringLiteralPutBodyParam {
    body: UnionStringLiteralProperty;
}

export declare type UnionStringLiteralPutParameters = UnionStringLiteralPutBodyParam & RequestParameters;

export declare interface UnknownArrayGet {
    get(options?: UnknownArrayGetParameters): StreamableMethod<UnknownArrayGet200Response>;
    put(options: UnknownArrayPutParameters): StreamableMethod<UnknownArrayPut204Response>;
}

export declare interface UnknownArrayGet200Response extends HttpResponse {
    status: "200";
    body: UnknownArrayPropertyOutput;
}

export declare type UnknownArrayGetParameters = RequestParameters;

export declare interface UnknownArrayProperty {
    property: unknown;
}

export declare interface UnknownArrayPropertyOutput {
    property: any;
}

export declare interface UnknownArrayPut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnknownArrayPutBodyParam {
    body: UnknownArrayProperty;
}

export declare type UnknownArrayPutParameters = UnknownArrayPutBodyParam & RequestParameters;

export declare interface UnknownDictGet {
    get(options?: UnknownDictGetParameters): StreamableMethod<UnknownDictGet200Response>;
    put(options: UnknownDictPutParameters): StreamableMethod<UnknownDictPut204Response>;
}

export declare interface UnknownDictGet200Response extends HttpResponse {
    status: "200";
    body: UnknownDictPropertyOutput;
}

export declare type UnknownDictGetParameters = RequestParameters;

export declare interface UnknownDictProperty {
    property: unknown;
}

export declare interface UnknownDictPropertyOutput {
    property: any;
}

export declare interface UnknownDictPut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnknownDictPutBodyParam {
    body: UnknownDictProperty;
}

export declare type UnknownDictPutParameters = UnknownDictPutBodyParam & RequestParameters;

export declare interface UnknownIntGet {
    get(options?: UnknownIntGetParameters): StreamableMethod<UnknownIntGet200Response>;
    put(options: UnknownIntPutParameters): StreamableMethod<UnknownIntPut204Response>;
}

export declare interface UnknownIntGet200Response extends HttpResponse {
    status: "200";
    body: UnknownIntPropertyOutput;
}

export declare type UnknownIntGetParameters = RequestParameters;

export declare interface UnknownIntProperty {
    property: unknown;
}

export declare interface UnknownIntPropertyOutput {
    property: any;
}

export declare interface UnknownIntPut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnknownIntPutBodyParam {
    body: UnknownIntProperty;
}

export declare type UnknownIntPutParameters = UnknownIntPutBodyParam & RequestParameters;

export declare interface UnknownStringGet {
    get(options?: UnknownStringGetParameters): StreamableMethod<UnknownStringGet200Response>;
    put(options: UnknownStringPutParameters): StreamableMethod<UnknownStringPut204Response>;
}

export declare interface UnknownStringGet200Response extends HttpResponse {
    status: "200";
    body: UnknownStringPropertyOutput;
}

export declare type UnknownStringGetParameters = RequestParameters;

export declare interface UnknownStringProperty {
    property: unknown;
}

export declare interface UnknownStringPropertyOutput {
    property: any;
}

export declare interface UnknownStringPut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnknownStringPutBodyParam {
    body: UnknownStringProperty;
}

export declare type UnknownStringPutParameters = UnknownStringPutBodyParam & RequestParameters;

export declare type ValueTypesClient = Client & {
    path: Routes;
};

export declare interface ValueTypesClientOptions extends ClientOptions {
}

export { }
