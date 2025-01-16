import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BooleanGetOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralGetOptionalParams extends OperationOptions {
}

export declare interface BooleanLiteralOperations {
    put: (body: BooleanLiteralProperty, options?: BooleanLiteralPutOptionalParams) => Promise<void>;
    get: (options?: BooleanLiteralGetOptionalParams) => Promise<BooleanLiteralProperty>;
}

declare interface BooleanLiteralProperty {
    property: true;
}

export declare interface BooleanLiteralPutOptionalParams extends OperationOptions {
}

export declare interface BooleanOperations {
    put: (body: BooleanProperty, options?: BooleanPutOptionalParams) => Promise<void>;
    get: (options?: BooleanGetOptionalParams) => Promise<BooleanProperty>;
}

declare interface BooleanProperty {
    property: boolean;
}

export declare interface BooleanPutOptionalParams extends OperationOptions {
}

export declare interface BytesGetOptionalParams extends OperationOptions {
}

export declare interface BytesOperations {
    put: (body: BytesProperty, options?: BytesPutOptionalParams) => Promise<void>;
    get: (options?: BytesGetOptionalParams) => Promise<BytesProperty>;
}

declare interface BytesProperty {
    property: Uint8Array;
}

export declare interface BytesPutOptionalParams extends OperationOptions {
}

export declare interface CollectionsIntGetOptionalParams extends OperationOptions {
}

export declare interface CollectionsIntOperations {
    put: (body: CollectionsIntProperty, options?: CollectionsIntPutOptionalParams) => Promise<void>;
    get: (options?: CollectionsIntGetOptionalParams) => Promise<CollectionsIntProperty>;
}

declare interface CollectionsIntProperty {
    property: number[];
}

export declare interface CollectionsIntPutOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelGetOptionalParams extends OperationOptions {
}

export declare interface CollectionsModelOperations {
    put: (body: CollectionsModelProperty, options?: CollectionsModelPutOptionalParams) => Promise<void>;
    get: (options?: CollectionsModelGetOptionalParams) => Promise<CollectionsModelProperty>;
}

declare interface CollectionsModelProperty {
    property: InnerModel[];
}

export declare interface CollectionsModelPutOptionalParams extends OperationOptions {
}

export declare interface CollectionsStringGetOptionalParams extends OperationOptions {
}

export declare interface CollectionsStringOperations {
    put: (body: CollectionsStringProperty, options?: CollectionsStringPutOptionalParams) => Promise<void>;
    get: (options?: CollectionsStringGetOptionalParams) => Promise<CollectionsStringProperty>;
}

declare interface CollectionsStringProperty {
    property: string[];
}

export declare interface CollectionsStringPutOptionalParams extends OperationOptions {
}

export declare interface DatetimeGetOptionalParams extends OperationOptions {
}

export declare interface DatetimeOperations {
    put: (body: DatetimeProperty, options?: DatetimePutOptionalParams) => Promise<void>;
    get: (options?: DatetimeGetOptionalParams) => Promise<DatetimeProperty>;
}

declare interface DatetimeProperty {
    property: Date;
}

export declare interface DatetimePutOptionalParams extends OperationOptions {
}

export declare interface Decimal128GetOptionalParams extends OperationOptions {
}

export declare interface Decimal128Operations {
    put: (body: Decimal128Property, options?: Decimal128PutOptionalParams) => Promise<void>;
    get: (options?: Decimal128GetOptionalParams) => Promise<Decimal128Property>;
}

declare interface Decimal128Property {
    property: number;
}

export declare interface Decimal128PutOptionalParams extends OperationOptions {
}

export declare interface DecimalGetOptionalParams extends OperationOptions {
}

export declare interface DecimalOperations {
    put: (body: DecimalProperty, options?: DecimalPutOptionalParams) => Promise<void>;
    get: (options?: DecimalGetOptionalParams) => Promise<DecimalProperty>;
}

declare interface DecimalProperty {
    property: number;
}

export declare interface DecimalPutOptionalParams extends OperationOptions {
}

export declare interface DictionaryStringGetOptionalParams extends OperationOptions {
}

export declare interface DictionaryStringOperations {
    put: (body: DictionaryStringProperty, options?: DictionaryStringPutOptionalParams) => Promise<void>;
    get: (options?: DictionaryStringGetOptionalParams) => Promise<DictionaryStringProperty>;
}

declare interface DictionaryStringProperty {
    property: Record<string, string>;
}

export declare interface DictionaryStringPutOptionalParams extends OperationOptions {
}

export declare interface DurationGetOptionalParams extends OperationOptions {
}

export declare interface DurationOperations {
    put: (body: DurationProperty, options?: DurationPutOptionalParams) => Promise<void>;
    get: (options?: DurationGetOptionalParams) => Promise<DurationProperty>;
}

declare interface DurationProperty {
    property: string;
}

export declare interface DurationPutOptionalParams extends OperationOptions {
}

export declare interface EnumGetOptionalParams extends OperationOptions {
}

export declare interface EnumOperations {
    put: (body: EnumProperty, options?: EnumPutOptionalParams) => Promise<void>;
    get: (options?: EnumGetOptionalParams) => Promise<EnumProperty>;
}

declare interface EnumProperty {
    property: FixedInnerEnum;
}

export declare interface EnumPutOptionalParams extends OperationOptions {
}

export declare interface ExtensibleEnumGetOptionalParams extends OperationOptions {
}

export declare interface ExtensibleEnumOperations {
    put: (body: ExtensibleEnumProperty, options?: ExtensibleEnumPutOptionalParams) => Promise<void>;
    get: (options?: ExtensibleEnumGetOptionalParams) => Promise<ExtensibleEnumProperty>;
}

declare interface ExtensibleEnumProperty {
    property: InnerEnum;
}

export declare interface ExtensibleEnumPutOptionalParams extends OperationOptions {
}

declare type FixedInnerEnum = "ValueOne" | "ValueTwo";

export declare interface FloatGetOptionalParams extends OperationOptions {
}

export declare interface FloatLiteralGetOptionalParams extends OperationOptions {
}

export declare interface FloatLiteralOperations {
    put: (body: FloatLiteralProperty, options?: FloatLiteralPutOptionalParams) => Promise<void>;
    get: (options?: FloatLiteralGetOptionalParams) => Promise<FloatLiteralProperty>;
}

declare interface FloatLiteralProperty {
    property: 43.125;
}

export declare interface FloatLiteralPutOptionalParams extends OperationOptions {
}

export declare interface FloatOperations {
    put: (body: FloatProperty, options?: FloatPutOptionalParams) => Promise<void>;
    get: (options?: FloatGetOptionalParams) => Promise<FloatProperty>;
}

declare interface FloatProperty {
    property: number;
}

export declare interface FloatPutOptionalParams extends OperationOptions {
}

declare type InnerEnum = "ValueOne" | "ValueTwo";

declare interface InnerModel {
    property: string;
}

export declare interface IntGetOptionalParams extends OperationOptions {
}

export declare interface IntLiteralGetOptionalParams extends OperationOptions {
}

export declare interface IntLiteralOperations {
    put: (body: IntLiteralProperty, options?: IntLiteralPutOptionalParams) => Promise<void>;
    get: (options?: IntLiteralGetOptionalParams) => Promise<IntLiteralProperty>;
}

declare interface IntLiteralProperty {
    property: 42;
}

export declare interface IntLiteralPutOptionalParams extends OperationOptions {
}

export declare interface IntOperations {
    put: (body: IntProperty, options?: IntPutOptionalParams) => Promise<void>;
    get: (options?: IntGetOptionalParams) => Promise<IntProperty>;
}

declare interface IntProperty {
    property: number;
}

export declare interface IntPutOptionalParams extends OperationOptions {
}

export declare interface ModelGetOptionalParams extends OperationOptions {
}

export declare interface ModelOperations {
    put: (body: ModelProperty, options?: ModelPutOptionalParams) => Promise<void>;
    get: (options?: ModelGetOptionalParams) => Promise<ModelProperty>;
}

declare interface ModelProperty {
    property: InnerModel;
}

export declare interface ModelPutOptionalParams extends OperationOptions {
}

export declare interface NeverGetOptionalParams extends OperationOptions {
}

export declare interface NeverOperations {
    put: (body: NeverProperty, options?: NeverPutOptionalParams) => Promise<void>;
    get: (options?: NeverGetOptionalParams) => Promise<NeverProperty>;
}

declare interface NeverProperty {
}

export declare interface NeverPutOptionalParams extends OperationOptions {
}

export declare interface StringGetOptionalParams extends OperationOptions {
}

export declare interface StringLiteralGetOptionalParams extends OperationOptions {
}

export declare interface StringLiteralOperations {
    put: (body: StringLiteralProperty, options?: StringLiteralPutOptionalParams) => Promise<void>;
    get: (options?: StringLiteralGetOptionalParams) => Promise<StringLiteralProperty>;
}

declare interface StringLiteralProperty {
    property: "hello";
}

export declare interface StringLiteralPutOptionalParams extends OperationOptions {
}

export declare interface StringOperations {
    put: (body: StringProperty, options?: StringPutOptionalParams) => Promise<void>;
    get: (options?: StringGetOptionalParams) => Promise<StringProperty>;
}

declare interface StringProperty {
    property: string;
}

export declare interface StringPutOptionalParams extends OperationOptions {
}

export declare interface UnionEnumValueGetOptionalParams extends OperationOptions {
}

export declare interface UnionEnumValueOperations {
    put: (body: UnionEnumValueProperty, options?: UnionEnumValuePutOptionalParams) => Promise<void>;
    get: (options?: UnionEnumValueGetOptionalParams) => Promise<UnionEnumValueProperty>;
}

declare interface UnionEnumValueProperty {
    property: "value2";
}

export declare interface UnionEnumValuePutOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralGetOptionalParams extends OperationOptions {
}

export declare interface UnionFloatLiteralOperations {
    put: (body: UnionFloatLiteralProperty, options?: UnionFloatLiteralPutOptionalParams) => Promise<void>;
    get: (options?: UnionFloatLiteralGetOptionalParams) => Promise<UnionFloatLiteralProperty>;
}

declare interface UnionFloatLiteralProperty {
    property: 43.125 | 46.875;
}

export declare interface UnionFloatLiteralPutOptionalParams extends OperationOptions {
}

export declare interface UnionIntLiteralGetOptionalParams extends OperationOptions {
}

export declare interface UnionIntLiteralOperations {
    put: (body: UnionIntLiteralProperty, options?: UnionIntLiteralPutOptionalParams) => Promise<void>;
    get: (options?: UnionIntLiteralGetOptionalParams) => Promise<UnionIntLiteralProperty>;
}

declare interface UnionIntLiteralProperty {
    property: 42 | 43;
}

export declare interface UnionIntLiteralPutOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralGetOptionalParams extends OperationOptions {
}

export declare interface UnionStringLiteralOperations {
    put: (body: UnionStringLiteralProperty, options?: UnionStringLiteralPutOptionalParams) => Promise<void>;
    get: (options?: UnionStringLiteralGetOptionalParams) => Promise<UnionStringLiteralProperty>;
}

declare interface UnionStringLiteralProperty {
    property: "hello" | "world";
}

export declare interface UnionStringLiteralPutOptionalParams extends OperationOptions {
}

export declare interface UnknownArrayGetOptionalParams extends OperationOptions {
}

export declare interface UnknownArrayOperations {
    put: (body: UnknownArrayProperty, options?: UnknownArrayPutOptionalParams) => Promise<void>;
    get: (options?: UnknownArrayGetOptionalParams) => Promise<UnknownArrayProperty>;
}

declare interface UnknownArrayProperty {
    property: any;
}

export declare interface UnknownArrayPutOptionalParams extends OperationOptions {
}

export declare interface UnknownDictGetOptionalParams extends OperationOptions {
}

export declare interface UnknownDictOperations {
    put: (body: UnknownDictProperty, options?: UnknownDictPutOptionalParams) => Promise<void>;
    get: (options?: UnknownDictGetOptionalParams) => Promise<UnknownDictProperty>;
}

declare interface UnknownDictProperty {
    property: any;
}

export declare interface UnknownDictPutOptionalParams extends OperationOptions {
}

export declare interface UnknownIntGetOptionalParams extends OperationOptions {
}

export declare interface UnknownIntOperations {
    put: (body: UnknownIntProperty, options?: UnknownIntPutOptionalParams) => Promise<void>;
    get: (options?: UnknownIntGetOptionalParams) => Promise<UnknownIntProperty>;
}

declare interface UnknownIntProperty {
    property: any;
}

export declare interface UnknownIntPutOptionalParams extends OperationOptions {
}

export declare interface UnknownStringGetOptionalParams extends OperationOptions {
}

export declare interface UnknownStringOperations {
    put: (body: UnknownStringProperty, options?: UnknownStringPutOptionalParams) => Promise<void>;
    get: (options?: UnknownStringGetOptionalParams) => Promise<UnknownStringProperty>;
}

declare interface UnknownStringProperty {
    property: any;
}

export declare interface UnknownStringPutOptionalParams extends OperationOptions {
}

export declare class ValueTypesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ValueTypesClientOptionalParams);
    readonly unionEnumValue: UnionEnumValueOperations;
    readonly unionFloatLiteral: UnionFloatLiteralOperations;
    readonly unionIntLiteral: UnionIntLiteralOperations;
    readonly unionStringLiteral: UnionStringLiteralOperations;
    readonly booleanLiteral: BooleanLiteralOperations;
    readonly floatLiteral: FloatLiteralOperations;
    readonly intLiteral: IntLiteralOperations;
    readonly stringLiteral: StringLiteralOperations;
    readonly unknownArray: UnknownArrayOperations;
    readonly unknownDict: UnknownDictOperations;
    readonly unknownInt: UnknownIntOperations;
    readonly unknownString: UnknownStringOperations;
    readonly never: NeverOperations;
    readonly dictionaryString: DictionaryStringOperations;
    readonly collectionsModel: CollectionsModelOperations;
    readonly collectionsInt: CollectionsIntOperations;
    readonly collectionsString: CollectionsStringOperations;
    readonly model: ModelOperations;
    readonly extensibleEnum: ExtensibleEnumOperations;
    readonly enum: EnumOperations;
    readonly duration: DurationOperations;
    readonly datetime: DatetimeOperations;
    readonly decimal128: Decimal128Operations;
    readonly decimal: DecimalOperations;
    readonly float: FloatOperations;
    readonly int: IntOperations;
    readonly bytes: BytesOperations;
    readonly string: StringOperations;
    readonly boolean: BooleanOperations;
}

export declare interface ValueTypesClientOptionalParams extends ClientOptions {
}

export { }
