import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function booleanGet(context: ValueTypesContext, options?: BooleanGetOptionalParams): Promise<BooleanProperty>;

export declare interface BooleanGetOptionalParams extends OperationOptions {
}

export declare function booleanLiteralGet(context: ValueTypesContext, options?: BooleanLiteralGetOptionalParams): Promise<BooleanLiteralProperty>;

export declare interface BooleanLiteralGetOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralOperations {
    get: (options?: BooleanLiteralGetOptionalParams) => Promise<BooleanLiteralProperty>;
    put: (body: BooleanLiteralProperty, options?: BooleanLiteralPutOptionalParams) => Promise<void>;
}

export declare interface BooleanLiteralProperty {
    property: true;
}

export declare function booleanLiteralPut(context: ValueTypesContext, body: BooleanLiteralProperty, options?: BooleanLiteralPutOptionalParams): Promise<void>;

export declare interface BooleanLiteralPutOptionalParams extends OperationOptions {
}

export declare interface BooleanOperations {
    get: (options?: BooleanGetOptionalParams) => Promise<BooleanProperty>;
    put: (body: BooleanProperty, options?: BooleanPutOptionalParams) => Promise<void>;
}

export declare interface BooleanProperty {
    property: boolean;
}

export declare function booleanPut(context: ValueTypesContext, body: BooleanProperty, options?: BooleanPutOptionalParams): Promise<void>;

export declare interface BooleanPutOptionalParams extends OperationOptions {
}

export declare function bytesGet(context: ValueTypesContext, options?: BytesGetOptionalParams): Promise<BytesProperty>;

export declare interface BytesGetOptionalParams extends OperationOptions {
}

export declare interface BytesOperations {
    get: (options?: BytesGetOptionalParams) => Promise<BytesProperty>;
    put: (body: BytesProperty, options?: BytesPutOptionalParams) => Promise<void>;
}

export declare interface BytesProperty {
    property: Uint8Array;
}

export declare function bytesPut(context: ValueTypesContext, body: BytesProperty, options?: BytesPutOptionalParams): Promise<void>;

export declare interface BytesPutOptionalParams extends OperationOptions {
}

export declare function collectionsIntGet(context: ValueTypesContext, options?: CollectionsIntGetOptionalParams): Promise<CollectionsIntProperty>;

export declare interface CollectionsIntGetOptionalParams extends OperationOptions {
}

export declare interface CollectionsIntOperations {
    get: (options?: CollectionsIntGetOptionalParams) => Promise<CollectionsIntProperty>;
    put: (body: CollectionsIntProperty, options?: CollectionsIntPutOptionalParams) => Promise<void>;
}

export declare interface CollectionsIntProperty {
    property: number[];
}

export declare function collectionsIntPut(context: ValueTypesContext, body: CollectionsIntProperty, options?: CollectionsIntPutOptionalParams): Promise<void>;

export declare interface CollectionsIntPutOptionalParams extends OperationOptions {
}

export declare function collectionsModelGet(context: ValueTypesContext, options?: CollectionsModelGetOptionalParams): Promise<CollectionsModelProperty>;

export declare interface CollectionsModelGetOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelOperations {
    get: (options?: CollectionsModelGetOptionalParams) => Promise<CollectionsModelProperty>;
    put: (body: CollectionsModelProperty, options?: CollectionsModelPutOptionalParams) => Promise<void>;
}

export declare interface CollectionsModelProperty {
    property: InnerModel[];
}

export declare function collectionsModelPut(context: ValueTypesContext, body: CollectionsModelProperty, options?: CollectionsModelPutOptionalParams): Promise<void>;

export declare interface CollectionsModelPutOptionalParams extends OperationOptions {
}

export declare function collectionsStringGet(context: ValueTypesContext, options?: CollectionsStringGetOptionalParams): Promise<CollectionsStringProperty>;

export declare interface CollectionsStringGetOptionalParams extends OperationOptions {
}

export declare interface CollectionsStringOperations {
    get: (options?: CollectionsStringGetOptionalParams) => Promise<CollectionsStringProperty>;
    put: (body: CollectionsStringProperty, options?: CollectionsStringPutOptionalParams) => Promise<void>;
}

export declare interface CollectionsStringProperty {
    property: string[];
}

export declare function collectionsStringPut(context: ValueTypesContext, body: CollectionsStringProperty, options?: CollectionsStringPutOptionalParams): Promise<void>;

export declare interface CollectionsStringPutOptionalParams extends OperationOptions {
}

export declare function createValueTypes(options?: ValueTypesClientOptionalParams): ValueTypesContext;

export declare function datetimeGet(context: ValueTypesContext, options?: DatetimeGetOptionalParams): Promise<DatetimeProperty>;

export declare interface DatetimeGetOptionalParams extends OperationOptions {
}

export declare interface DatetimeOperations {
    get: (options?: DatetimeGetOptionalParams) => Promise<DatetimeProperty>;
    put: (body: DatetimeProperty, options?: DatetimePutOptionalParams) => Promise<void>;
}

export declare interface DatetimeProperty {
    property: Date;
}

export declare function datetimePut(context: ValueTypesContext, body: DatetimeProperty, options?: DatetimePutOptionalParams): Promise<void>;

export declare interface DatetimePutOptionalParams extends OperationOptions {
}

export declare function decimal128Get(context: ValueTypesContext, options?: Decimal128GetOptionalParams): Promise<Decimal128Property>;

export declare interface Decimal128GetOptionalParams extends OperationOptions {
}

export declare interface Decimal128Operations {
    get: (options?: Decimal128GetOptionalParams) => Promise<Decimal128Property>;
    put: (body: Decimal128Property, options?: Decimal128PutOptionalParams) => Promise<void>;
}

export declare interface Decimal128Property {
    property: number;
}

export declare function decimal128Put(context: ValueTypesContext, body: Decimal128Property, options?: Decimal128PutOptionalParams): Promise<void>;

export declare interface Decimal128PutOptionalParams extends OperationOptions {
}

export declare function decimalGet(context: ValueTypesContext, options?: DecimalGetOptionalParams): Promise<DecimalProperty>;

export declare interface DecimalGetOptionalParams extends OperationOptions {
}

export declare interface DecimalOperations {
    get: (options?: DecimalGetOptionalParams) => Promise<DecimalProperty>;
    put: (body: DecimalProperty, options?: DecimalPutOptionalParams) => Promise<void>;
}

export declare interface DecimalProperty {
    property: number;
}

export declare function decimalPut(context: ValueTypesContext, body: DecimalProperty, options?: DecimalPutOptionalParams): Promise<void>;

export declare interface DecimalPutOptionalParams extends OperationOptions {
}

export declare function dictionaryStringGet(context: ValueTypesContext, options?: DictionaryStringGetOptionalParams): Promise<DictionaryStringProperty>;

export declare interface DictionaryStringGetOptionalParams extends OperationOptions {
}

export declare interface DictionaryStringOperations {
    get: (options?: DictionaryStringGetOptionalParams) => Promise<DictionaryStringProperty>;
    put: (body: DictionaryStringProperty, options?: DictionaryStringPutOptionalParams) => Promise<void>;
}

export declare interface DictionaryStringProperty {
    property: Record<string, string>;
}

export declare function dictionaryStringPut(context: ValueTypesContext, body: DictionaryStringProperty, options?: DictionaryStringPutOptionalParams): Promise<void>;

export declare interface DictionaryStringPutOptionalParams extends OperationOptions {
}

export declare function durationGet(context: ValueTypesContext, options?: DurationGetOptionalParams): Promise<DurationProperty>;

export declare interface DurationGetOptionalParams extends OperationOptions {
}

export declare interface DurationOperations {
    get: (options?: DurationGetOptionalParams) => Promise<DurationProperty>;
    put: (body: DurationProperty, options?: DurationPutOptionalParams) => Promise<void>;
}

export declare interface DurationProperty {
    property: string;
}

export declare function durationPut(context: ValueTypesContext, body: DurationProperty, options?: DurationPutOptionalParams): Promise<void>;

export declare interface DurationPutOptionalParams extends OperationOptions {
}

export declare function enumGet(context: ValueTypesContext, options?: EnumGetOptionalParams): Promise<EnumProperty>;

export declare interface EnumGetOptionalParams extends OperationOptions {
}

export declare interface EnumOperations {
    get: (options?: EnumGetOptionalParams) => Promise<EnumProperty>;
    put: (body: EnumProperty, options?: EnumPutOptionalParams) => Promise<void>;
}

export declare interface EnumProperty {
    property: FixedInnerEnum;
}

export declare function enumPut(context: ValueTypesContext, body: EnumProperty, options?: EnumPutOptionalParams): Promise<void>;

export declare interface EnumPutOptionalParams extends OperationOptions {
}

export declare type ExtendedEnum = "value2";

export declare function extensibleEnumGet(context: ValueTypesContext, options?: ExtensibleEnumGetOptionalParams): Promise<ExtensibleEnumProperty>;

export declare interface ExtensibleEnumGetOptionalParams extends OperationOptions {
}

export declare interface ExtensibleEnumOperations {
    get: (options?: ExtensibleEnumGetOptionalParams) => Promise<ExtensibleEnumProperty>;
    put: (body: ExtensibleEnumProperty, options?: ExtensibleEnumPutOptionalParams) => Promise<void>;
}

export declare interface ExtensibleEnumProperty {
    property: InnerEnum;
}

export declare function extensibleEnumPut(context: ValueTypesContext, body: ExtensibleEnumProperty, options?: ExtensibleEnumPutOptionalParams): Promise<void>;

export declare interface ExtensibleEnumPutOptionalParams extends OperationOptions {
}

export declare type FixedInnerEnum = "ValueOne" | "ValueTwo";

export declare function floatGet(context: ValueTypesContext, options?: FloatGetOptionalParams): Promise<FloatProperty>;

export declare interface FloatGetOptionalParams extends OperationOptions {
}

export declare function floatLiteralGet(context: ValueTypesContext, options?: FloatLiteralGetOptionalParams): Promise<FloatLiteralProperty>;

export declare interface FloatLiteralGetOptionalParams extends OperationOptions {
}

export declare interface FloatLiteralOperations {
    get: (options?: FloatLiteralGetOptionalParams) => Promise<FloatLiteralProperty>;
    put: (body: FloatLiteralProperty, options?: FloatLiteralPutOptionalParams) => Promise<void>;
}

export declare interface FloatLiteralProperty {
    property: 43.125;
}

export declare function floatLiteralPut(context: ValueTypesContext, body: FloatLiteralProperty, options?: FloatLiteralPutOptionalParams): Promise<void>;

export declare interface FloatLiteralPutOptionalParams extends OperationOptions {
}

export declare interface FloatOperations {
    get: (options?: FloatGetOptionalParams) => Promise<FloatProperty>;
    put: (body: FloatProperty, options?: FloatPutOptionalParams) => Promise<void>;
}

export declare interface FloatProperty {
    property: number;
}

export declare function floatPut(context: ValueTypesContext, body: FloatProperty, options?: FloatPutOptionalParams): Promise<void>;

export declare interface FloatPutOptionalParams extends OperationOptions {
}

export declare type InnerEnum = "ValueOne" | "ValueTwo";

export declare interface InnerModel {
    property: string;
}

export declare function intGet(context: ValueTypesContext, options?: IntGetOptionalParams): Promise<IntProperty>;

export declare interface IntGetOptionalParams extends OperationOptions {
}

export declare function intLiteralGet(context: ValueTypesContext, options?: IntLiteralGetOptionalParams): Promise<IntLiteralProperty>;

export declare interface IntLiteralGetOptionalParams extends OperationOptions {
}

export declare interface IntLiteralOperations {
    get: (options?: IntLiteralGetOptionalParams) => Promise<IntLiteralProperty>;
    put: (body: IntLiteralProperty, options?: IntLiteralPutOptionalParams) => Promise<void>;
}

export declare interface IntLiteralProperty {
    property: 42;
}

export declare function intLiteralPut(context: ValueTypesContext, body: IntLiteralProperty, options?: IntLiteralPutOptionalParams): Promise<void>;

export declare interface IntLiteralPutOptionalParams extends OperationOptions {
}

export declare interface IntOperations {
    get: (options?: IntGetOptionalParams) => Promise<IntProperty>;
    put: (body: IntProperty, options?: IntPutOptionalParams) => Promise<void>;
}

export declare interface IntProperty {
    property: number;
}

export declare function intPut(context: ValueTypesContext, body: IntProperty, options?: IntPutOptionalParams): Promise<void>;

export declare interface IntPutOptionalParams extends OperationOptions {
}

export declare function modelGet(context: ValueTypesContext, options?: ModelGetOptionalParams): Promise<ModelProperty>;

export declare interface ModelGetOptionalParams extends OperationOptions {
}

export declare interface ModelOperations {
    get: (options?: ModelGetOptionalParams) => Promise<ModelProperty>;
    put: (body: ModelProperty, options?: ModelPutOptionalParams) => Promise<void>;
}

export declare interface ModelProperty {
    property: InnerModel;
}

export declare function modelPut(context: ValueTypesContext, body: ModelProperty, options?: ModelPutOptionalParams): Promise<void>;

export declare interface ModelPutOptionalParams extends OperationOptions {
}

export declare function neverGet(context: ValueTypesContext, options?: NeverGetOptionalParams): Promise<NeverProperty>;

export declare interface NeverGetOptionalParams extends OperationOptions {
}

export declare interface NeverOperations {
    get: (options?: NeverGetOptionalParams) => Promise<NeverProperty>;
    put: (body: NeverProperty, options?: NeverPutOptionalParams) => Promise<void>;
}

export declare interface NeverProperty {
}

export declare function neverPut(context: ValueTypesContext, body: NeverProperty, options?: NeverPutOptionalParams): Promise<void>;

export declare interface NeverPutOptionalParams extends OperationOptions {
}

export declare function stringGet(context: ValueTypesContext, options?: StringGetOptionalParams): Promise<StringProperty>;

export declare interface StringGetOptionalParams extends OperationOptions {
}

export declare function stringLiteralGet(context: ValueTypesContext, options?: StringLiteralGetOptionalParams): Promise<StringLiteralProperty>;

export declare interface StringLiteralGetOptionalParams extends OperationOptions {
}

export declare interface StringLiteralOperations {
    get: (options?: StringLiteralGetOptionalParams) => Promise<StringLiteralProperty>;
    put: (body: StringLiteralProperty, options?: StringLiteralPutOptionalParams) => Promise<void>;
}

export declare interface StringLiteralProperty {
    property: "hello";
}

export declare function stringLiteralPut(context: ValueTypesContext, body: StringLiteralProperty, options?: StringLiteralPutOptionalParams): Promise<void>;

export declare interface StringLiteralPutOptionalParams extends OperationOptions {
}

export declare interface StringOperations {
    get: (options?: StringGetOptionalParams) => Promise<StringProperty>;
    put: (body: StringProperty, options?: StringPutOptionalParams) => Promise<void>;
}

export declare interface StringProperty {
    property: string;
}

export declare function stringPut(context: ValueTypesContext, body: StringProperty, options?: StringPutOptionalParams): Promise<void>;

export declare interface StringPutOptionalParams extends OperationOptions {
}

export declare function unionEnumValueGet(context: ValueTypesContext, options?: UnionEnumValueGetOptionalParams): Promise<UnionEnumValueProperty>;

export declare interface UnionEnumValueGetOptionalParams extends OperationOptions {
}

export declare interface UnionEnumValueOperations {
    get: (options?: UnionEnumValueGetOptionalParams) => Promise<UnionEnumValueProperty>;
    put: (body: UnionEnumValueProperty, options?: UnionEnumValuePutOptionalParams) => Promise<void>;
}

export declare interface UnionEnumValueProperty {
    property: "value2";
}

export declare function unionEnumValuePut(context: ValueTypesContext, body: UnionEnumValueProperty, options?: UnionEnumValuePutOptionalParams): Promise<void>;

export declare interface UnionEnumValuePutOptionalParams extends OperationOptions {
}

export declare function unionFloatLiteralGet(context: ValueTypesContext, options?: UnionFloatLiteralGetOptionalParams): Promise<UnionFloatLiteralProperty>;

export declare interface UnionFloatLiteralGetOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralOperations {
    get: (options?: UnionFloatLiteralGetOptionalParams) => Promise<UnionFloatLiteralProperty>;
    put: (body: UnionFloatLiteralProperty, options?: UnionFloatLiteralPutOptionalParams) => Promise<void>;
}

export declare interface UnionFloatLiteralProperty {
    property: 43.125 | 46.875;
}

export declare type UnionFloatLiteralPropertyProperty = 43.125 | 46.875;

export declare function unionFloatLiteralPut(context: ValueTypesContext, body: UnionFloatLiteralProperty, options?: UnionFloatLiteralPutOptionalParams): Promise<void>;

export declare interface UnionFloatLiteralPutOptionalParams extends OperationOptions {
}

export declare function unionIntLiteralGet(context: ValueTypesContext, options?: UnionIntLiteralGetOptionalParams): Promise<UnionIntLiteralProperty>;

export declare interface UnionIntLiteralGetOptionalParams extends OperationOptions {
}

export declare interface UnionIntLiteralOperations {
    get: (options?: UnionIntLiteralGetOptionalParams) => Promise<UnionIntLiteralProperty>;
    put: (body: UnionIntLiteralProperty, options?: UnionIntLiteralPutOptionalParams) => Promise<void>;
}

export declare interface UnionIntLiteralProperty {
    property: 42 | 43;
}

export declare type UnionIntLiteralPropertyProperty = 42 | 43;

export declare function unionIntLiteralPut(context: ValueTypesContext, body: UnionIntLiteralProperty, options?: UnionIntLiteralPutOptionalParams): Promise<void>;

export declare interface UnionIntLiteralPutOptionalParams extends OperationOptions {
}

export declare function unionStringLiteralGet(context: ValueTypesContext, options?: UnionStringLiteralGetOptionalParams): Promise<UnionStringLiteralProperty>;

export declare interface UnionStringLiteralGetOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralOperations {
    get: (options?: UnionStringLiteralGetOptionalParams) => Promise<UnionStringLiteralProperty>;
    put: (body: UnionStringLiteralProperty, options?: UnionStringLiteralPutOptionalParams) => Promise<void>;
}

export declare interface UnionStringLiteralProperty {
    property: "hello" | "world";
}

export declare type UnionStringLiteralPropertyProperty = "hello" | "world";

export declare function unionStringLiteralPut(context: ValueTypesContext, body: UnionStringLiteralProperty, options?: UnionStringLiteralPutOptionalParams): Promise<void>;

export declare interface UnionStringLiteralPutOptionalParams extends OperationOptions {
}

export declare function unknownArrayGet(context: ValueTypesContext, options?: UnknownArrayGetOptionalParams): Promise<UnknownArrayProperty>;

export declare interface UnknownArrayGetOptionalParams extends OperationOptions {
}

export declare interface UnknownArrayOperations {
    get: (options?: UnknownArrayGetOptionalParams) => Promise<UnknownArrayProperty>;
    put: (body: UnknownArrayProperty, options?: UnknownArrayPutOptionalParams) => Promise<void>;
}

export declare interface UnknownArrayProperty {
    property: any;
}

export declare function unknownArrayPut(context: ValueTypesContext, body: UnknownArrayProperty, options?: UnknownArrayPutOptionalParams): Promise<void>;

export declare interface UnknownArrayPutOptionalParams extends OperationOptions {
}

export declare function unknownDictGet(context: ValueTypesContext, options?: UnknownDictGetOptionalParams): Promise<UnknownDictProperty>;

export declare interface UnknownDictGetOptionalParams extends OperationOptions {
}

export declare interface UnknownDictOperations {
    get: (options?: UnknownDictGetOptionalParams) => Promise<UnknownDictProperty>;
    put: (body: UnknownDictProperty, options?: UnknownDictPutOptionalParams) => Promise<void>;
}

export declare interface UnknownDictProperty {
    property: any;
}

export declare function unknownDictPut(context: ValueTypesContext, body: UnknownDictProperty, options?: UnknownDictPutOptionalParams): Promise<void>;

export declare interface UnknownDictPutOptionalParams extends OperationOptions {
}

export declare function unknownIntGet(context: ValueTypesContext, options?: UnknownIntGetOptionalParams): Promise<UnknownIntProperty>;

export declare interface UnknownIntGetOptionalParams extends OperationOptions {
}

export declare interface UnknownIntOperations {
    get: (options?: UnknownIntGetOptionalParams) => Promise<UnknownIntProperty>;
    put: (body: UnknownIntProperty, options?: UnknownIntPutOptionalParams) => Promise<void>;
}

export declare interface UnknownIntProperty {
    property: any;
}

export declare function unknownIntPut(context: ValueTypesContext, body: UnknownIntProperty, options?: UnknownIntPutOptionalParams): Promise<void>;

export declare interface UnknownIntPutOptionalParams extends OperationOptions {
}

export declare function unknownStringGet(context: ValueTypesContext, options?: UnknownStringGetOptionalParams): Promise<UnknownStringProperty>;

export declare interface UnknownStringGetOptionalParams extends OperationOptions {
}

export declare interface UnknownStringOperations {
    get: (options?: UnknownStringGetOptionalParams) => Promise<UnknownStringProperty>;
    put: (body: UnknownStringProperty, options?: UnknownStringPutOptionalParams) => Promise<void>;
}

export declare interface UnknownStringProperty {
    property: any;
}

export declare function unknownStringPut(context: ValueTypesContext, body: UnknownStringProperty, options?: UnknownStringPutOptionalParams): Promise<void>;

export declare interface UnknownStringPutOptionalParams extends OperationOptions {
}

export declare class ValueTypesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ValueTypesClientOptionalParams);
    readonly boolean: BooleanOperations;
    readonly string: StringOperations;
    readonly bytes: BytesOperations;
    readonly int: IntOperations;
    readonly float: FloatOperations;
    readonly decimal: DecimalOperations;
    readonly decimal128: Decimal128Operations;
    readonly datetime: DatetimeOperations;
    readonly duration: DurationOperations;
    readonly enum: EnumOperations;
    readonly extensibleEnum: ExtensibleEnumOperations;
    readonly model: ModelOperations;
    readonly collectionsString: CollectionsStringOperations;
    readonly collectionsInt: CollectionsIntOperations;
    readonly collectionsModel: CollectionsModelOperations;
    readonly dictionaryString: DictionaryStringOperations;
    readonly never: NeverOperations;
    readonly unknownString: UnknownStringOperations;
    readonly unknownInt: UnknownIntOperations;
    readonly unknownDict: UnknownDictOperations;
    readonly unknownArray: UnknownArrayOperations;
    readonly stringLiteral: StringLiteralOperations;
    readonly intLiteral: IntLiteralOperations;
    readonly floatLiteral: FloatLiteralOperations;
    readonly booleanLiteral: BooleanLiteralOperations;
    readonly unionStringLiteral: UnionStringLiteralOperations;
    readonly unionIntLiteral: UnionIntLiteralOperations;
    readonly unionFloatLiteral: UnionFloatLiteralOperations;
    readonly unionEnumValue: UnionEnumValueOperations;
}

export declare interface ValueTypesClientOptionalParams extends ClientOptions {
}

export declare interface ValueTypesContext extends Client {
}

export { }
