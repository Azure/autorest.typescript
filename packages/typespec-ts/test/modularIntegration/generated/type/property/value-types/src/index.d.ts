import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BooleanGetOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralGetOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralOperations {
    get: (options?: BooleanLiteralGetOptionalParams) => Promise<BooleanLiteralProperty>;
    put: (body: BooleanLiteralProperty, options?: BooleanLiteralPutOptionalParams) => Promise<void>;
}

export declare interface BooleanLiteralProperty {
    property: true;
}

export declare interface BooleanLiteralPutOptionalParams extends OperationOptions {
}

export declare interface BooleanOperations {
    get: (options?: BooleanGetOptionalParams) => Promise<BooleanProperty>;
    put: (body: BooleanProperty, options?: BooleanPutOptionalParams) => Promise<void>;
}

export declare interface BooleanProperty {
    property: boolean;
}

export declare interface BooleanPutOptionalParams extends OperationOptions {
}

export declare interface BytesGetOptionalParams extends OperationOptions {
}

export declare interface BytesOperations {
    get: (options?: BytesGetOptionalParams) => Promise<BytesProperty>;
    put: (body: BytesProperty, options?: BytesPutOptionalParams) => Promise<void>;
}

export declare interface BytesProperty {
    property: Uint8Array;
}

export declare interface BytesPutOptionalParams extends OperationOptions {
}

export declare interface CollectionsIntGetOptionalParams extends OperationOptions {
}

export declare interface CollectionsIntOperations {
    get: (options?: CollectionsIntGetOptionalParams) => Promise<CollectionsIntProperty>;
    put: (body: CollectionsIntProperty, options?: CollectionsIntPutOptionalParams) => Promise<void>;
}

export declare interface CollectionsIntProperty {
    property: number[];
}

export declare interface CollectionsIntPutOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelGetOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelOperations {
    get: (options?: CollectionsModelGetOptionalParams) => Promise<CollectionsModelProperty>;
    put: (body: CollectionsModelProperty, options?: CollectionsModelPutOptionalParams) => Promise<void>;
}

export declare interface CollectionsModelProperty {
    property: InnerModel[];
}

export declare interface CollectionsModelPutOptionalParams extends OperationOptions {
}

export declare interface CollectionsStringGetOptionalParams extends OperationOptions {
}

export declare interface CollectionsStringOperations {
    get: (options?: CollectionsStringGetOptionalParams) => Promise<CollectionsStringProperty>;
    put: (body: CollectionsStringProperty, options?: CollectionsStringPutOptionalParams) => Promise<void>;
}

export declare interface CollectionsStringProperty {
    property: string[];
}

export declare interface CollectionsStringPutOptionalParams extends OperationOptions {
}

export declare interface DatetimeGetOptionalParams extends OperationOptions {
}

export declare interface DatetimeOperations {
    get: (options?: DatetimeGetOptionalParams) => Promise<DatetimeProperty>;
    put: (body: DatetimeProperty, options?: DatetimePutOptionalParams) => Promise<void>;
}

export declare interface DatetimeProperty {
    property: Date;
}

export declare interface DatetimePutOptionalParams extends OperationOptions {
}

export declare interface Decimal128GetOptionalParams extends OperationOptions {
}

export declare interface Decimal128Operations {
    get: (options?: Decimal128GetOptionalParams) => Promise<Decimal128Property>;
    put: (body: Decimal128Property, options?: Decimal128PutOptionalParams) => Promise<void>;
}

export declare interface Decimal128Property {
    property: number;
}

export declare interface Decimal128PutOptionalParams extends OperationOptions {
}

export declare interface DecimalGetOptionalParams extends OperationOptions {
}

export declare interface DecimalOperations {
    get: (options?: DecimalGetOptionalParams) => Promise<DecimalProperty>;
    put: (body: DecimalProperty, options?: DecimalPutOptionalParams) => Promise<void>;
}

export declare interface DecimalProperty {
    property: number;
}

export declare interface DecimalPutOptionalParams extends OperationOptions {
}

export declare interface DictionaryStringGetOptionalParams extends OperationOptions {
}

export declare interface DictionaryStringOperations {
    get: (options?: DictionaryStringGetOptionalParams) => Promise<DictionaryStringProperty>;
    put: (body: DictionaryStringProperty, options?: DictionaryStringPutOptionalParams) => Promise<void>;
}

export declare interface DictionaryStringProperty {
    property: Record<string, string>;
}

export declare interface DictionaryStringPutOptionalParams extends OperationOptions {
}

export declare interface DurationGetOptionalParams extends OperationOptions {
}

export declare interface DurationOperations {
    get: (options?: DurationGetOptionalParams) => Promise<DurationProperty>;
    put: (body: DurationProperty, options?: DurationPutOptionalParams) => Promise<void>;
}

export declare interface DurationProperty {
    property: string;
}

export declare interface DurationPutOptionalParams extends OperationOptions {
}

export declare interface EnumGetOptionalParams extends OperationOptions {
}

export declare interface EnumOperations {
    get: (options?: EnumGetOptionalParams) => Promise<EnumProperty>;
    put: (body: EnumProperty, options?: EnumPutOptionalParams) => Promise<void>;
}

export declare interface EnumProperty {
    property: FixedInnerEnum;
}

export declare interface EnumPutOptionalParams extends OperationOptions {
}

export declare type ExtendedEnum = "value2";

export declare interface ExtensibleEnumGetOptionalParams extends OperationOptions {
}

export declare interface ExtensibleEnumOperations {
    get: (options?: ExtensibleEnumGetOptionalParams) => Promise<ExtensibleEnumProperty>;
    put: (body: ExtensibleEnumProperty, options?: ExtensibleEnumPutOptionalParams) => Promise<void>;
}

export declare interface ExtensibleEnumProperty {
    property: InnerEnum;
}

export declare interface ExtensibleEnumPutOptionalParams extends OperationOptions {
}

export declare type FixedInnerEnum = "ValueOne" | "ValueTwo";

export declare interface FloatGetOptionalParams extends OperationOptions {
}

export declare interface FloatLiteralGetOptionalParams extends OperationOptions {
}

export declare interface FloatLiteralOperations {
    get: (options?: FloatLiteralGetOptionalParams) => Promise<FloatLiteralProperty>;
    put: (body: FloatLiteralProperty, options?: FloatLiteralPutOptionalParams) => Promise<void>;
}

export declare interface FloatLiteralProperty {
    property: 43.125;
}

export declare interface FloatLiteralPutOptionalParams extends OperationOptions {
}

export declare interface FloatOperations {
    get: (options?: FloatGetOptionalParams) => Promise<FloatProperty>;
    put: (body: FloatProperty, options?: FloatPutOptionalParams) => Promise<void>;
}

export declare interface FloatProperty {
    property: number;
}

export declare interface FloatPutOptionalParams extends OperationOptions {
}

export declare type InnerEnum = "ValueOne" | "ValueTwo";

export declare interface InnerModel {
    property: string;
}

export declare interface IntGetOptionalParams extends OperationOptions {
}

export declare interface IntLiteralGetOptionalParams extends OperationOptions {
}

export declare interface IntLiteralOperations {
    get: (options?: IntLiteralGetOptionalParams) => Promise<IntLiteralProperty>;
    put: (body: IntLiteralProperty, options?: IntLiteralPutOptionalParams) => Promise<void>;
}

export declare interface IntLiteralProperty {
    property: 42;
}

export declare interface IntLiteralPutOptionalParams extends OperationOptions {
}

export declare interface IntOperations {
    get: (options?: IntGetOptionalParams) => Promise<IntProperty>;
    put: (body: IntProperty, options?: IntPutOptionalParams) => Promise<void>;
}

export declare interface IntProperty {
    property: number;
}

export declare interface IntPutOptionalParams extends OperationOptions {
}

export declare interface ModelGetOptionalParams extends OperationOptions {
}

export declare interface ModelOperations {
    get: (options?: ModelGetOptionalParams) => Promise<ModelProperty>;
    put: (body: ModelProperty, options?: ModelPutOptionalParams) => Promise<void>;
}

export declare interface ModelProperty {
    property: InnerModel;
}

export declare interface ModelPutOptionalParams extends OperationOptions {
}

export declare interface NeverGetOptionalParams extends OperationOptions {
}

export declare interface NeverOperations {
    get: (options?: NeverGetOptionalParams) => Promise<NeverProperty>;
    put: (body: NeverProperty, options?: NeverPutOptionalParams) => Promise<void>;
}

export declare interface NeverProperty {
}

export declare interface NeverPutOptionalParams extends OperationOptions {
}

export declare interface StringGetOptionalParams extends OperationOptions {
}

export declare interface StringLiteralGetOptionalParams extends OperationOptions {
}

export declare interface StringLiteralOperations {
    get: (options?: StringLiteralGetOptionalParams) => Promise<StringLiteralProperty>;
    put: (body: StringLiteralProperty, options?: StringLiteralPutOptionalParams) => Promise<void>;
}

export declare interface StringLiteralProperty {
    property: "hello";
}

export declare interface StringLiteralPutOptionalParams extends OperationOptions {
}

export declare interface StringOperations {
    get: (options?: StringGetOptionalParams) => Promise<StringProperty>;
    put: (body: StringProperty, options?: StringPutOptionalParams) => Promise<void>;
}

export declare interface StringProperty {
    property: string;
}

export declare interface StringPutOptionalParams extends OperationOptions {
}

export declare interface UnionEnumValueGetOptionalParams extends OperationOptions {
}

export declare interface UnionEnumValueOperations {
    get: (options?: UnionEnumValueGetOptionalParams) => Promise<UnionEnumValueProperty>;
    put: (body: UnionEnumValueProperty, options?: UnionEnumValuePutOptionalParams) => Promise<void>;
}

export declare interface UnionEnumValueProperty {
    property: "value2";
}

export declare interface UnionEnumValuePutOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralGetOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralOperations {
    get: (options?: UnionFloatLiteralGetOptionalParams) => Promise<UnionFloatLiteralProperty>;
    put: (body: UnionFloatLiteralProperty, options?: UnionFloatLiteralPutOptionalParams) => Promise<void>;
}

export declare interface UnionFloatLiteralProperty {
    property: 43.125 | 46.875;
}

export declare interface UnionFloatLiteralPutOptionalParams extends OperationOptions {
}

export declare interface UnionIntLiteralGetOptionalParams extends OperationOptions {
}

export declare interface UnionIntLiteralOperations {
    get: (options?: UnionIntLiteralGetOptionalParams) => Promise<UnionIntLiteralProperty>;
    put: (body: UnionIntLiteralProperty, options?: UnionIntLiteralPutOptionalParams) => Promise<void>;
}

export declare interface UnionIntLiteralProperty {
    property: 42 | 43;
}

export declare interface UnionIntLiteralPutOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralGetOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralOperations {
    get: (options?: UnionStringLiteralGetOptionalParams) => Promise<UnionStringLiteralProperty>;
    put: (body: UnionStringLiteralProperty, options?: UnionStringLiteralPutOptionalParams) => Promise<void>;
}

export declare interface UnionStringLiteralProperty {
    property: "hello" | "world";
}

export declare interface UnionStringLiteralPutOptionalParams extends OperationOptions {
}

export declare interface UnknownArrayGetOptionalParams extends OperationOptions {
}

export declare interface UnknownArrayOperations {
    get: (options?: UnknownArrayGetOptionalParams) => Promise<UnknownArrayProperty>;
    put: (body: UnknownArrayProperty, options?: UnknownArrayPutOptionalParams) => Promise<void>;
}

export declare interface UnknownArrayProperty {
    property: any;
}

export declare interface UnknownArrayPutOptionalParams extends OperationOptions {
}

export declare interface UnknownDictGetOptionalParams extends OperationOptions {
}

export declare interface UnknownDictOperations {
    get: (options?: UnknownDictGetOptionalParams) => Promise<UnknownDictProperty>;
    put: (body: UnknownDictProperty, options?: UnknownDictPutOptionalParams) => Promise<void>;
}

export declare interface UnknownDictProperty {
    property: any;
}

export declare interface UnknownDictPutOptionalParams extends OperationOptions {
}

export declare interface UnknownIntGetOptionalParams extends OperationOptions {
}

export declare interface UnknownIntOperations {
    get: (options?: UnknownIntGetOptionalParams) => Promise<UnknownIntProperty>;
    put: (body: UnknownIntProperty, options?: UnknownIntPutOptionalParams) => Promise<void>;
}

export declare interface UnknownIntProperty {
    property: any;
}

export declare interface UnknownIntPutOptionalParams extends OperationOptions {
}

export declare interface UnknownStringGetOptionalParams extends OperationOptions {
}

export declare interface UnknownStringOperations {
    get: (options?: UnknownStringGetOptionalParams) => Promise<UnknownStringProperty>;
    put: (body: UnknownStringProperty, options?: UnknownStringPutOptionalParams) => Promise<void>;
}

export declare interface UnknownStringProperty {
    property: any;
}

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

export { }
