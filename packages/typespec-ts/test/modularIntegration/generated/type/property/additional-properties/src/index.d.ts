import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class AdditionalPropertiesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: AdditionalPropertiesClientOptionalParams);
    readonly spreadRecordNonDiscriminatedUnion3: SpreadRecordNonDiscriminatedUnion3Operations;
    readonly spreadRecordNonDiscriminatedUnion2: SpreadRecordNonDiscriminatedUnion2Operations;
    readonly spreadRecordNonDiscriminatedUnion: SpreadRecordNonDiscriminatedUnionOperations;
    readonly spreadRecordUnion: SpreadRecordUnionOperations;
    readonly multipleSpread: MultipleSpreadOperations;
    readonly extendsDifferentSpreadModelArray: ExtendsDifferentSpreadModelArrayOperations;
    readonly extendsDifferentSpreadModel: ExtendsDifferentSpreadModelOperations;
    readonly extendsDifferentSpreadFloat: ExtendsDifferentSpreadFloatOperations;
    readonly extendsDifferentSpreadString: ExtendsDifferentSpreadStringOperations;
    readonly spreadDifferentModelArray: SpreadDifferentModelArrayOperations;
    readonly spreadDifferentModel: SpreadDifferentModelOperations;
    readonly spreadDifferentFloat: SpreadDifferentFloatOperations;
    readonly spreadDifferentString: SpreadDifferentStringOperations;
    readonly spreadModelArray: SpreadModelArrayOperations;
    readonly isModelArray: IsModelArrayOperations;
    readonly extendsModelArray: ExtendsModelArrayOperations;
    readonly spreadModel: SpreadModelOperations;
    readonly isModel: IsModelOperations;
    readonly extendsModel: ExtendsModelOperations;
    readonly spreadFloat: SpreadFloatOperations;
    readonly isFloat: IsFloatOperations;
    readonly extendsFloat: ExtendsFloatOperations;
    readonly spreadString: SpreadStringOperations;
    readonly isString: IsStringOperations;
    readonly extendsString: ExtendsStringOperations;
    readonly isUnknownDiscriminated: IsUnknownDiscriminatedOperations;
    readonly isUnknownDerived: IsUnknownDerivedOperations;
    readonly isUnknown: IsUnknownOperations;
    readonly extendsUnknownDiscriminated: ExtendsUnknownDiscriminatedOperations;
    readonly extendsUnknownDerived: ExtendsUnknownDerivedOperations;
    readonly extendsUnknown: ExtendsUnknownOperations;
}

export declare interface AdditionalPropertiesClientOptionalParams extends ClientOptions {
}

export declare interface DifferentSpreadFloatDerived extends DifferentSpreadFloatRecord {
    derivedProp: number;
}

export declare interface DifferentSpreadFloatRecord {
    name: string;
    additionalProperties?: Record<string, number>;
}

export declare interface DifferentSpreadModelArrayDerived extends DifferentSpreadModelArrayRecord {
    derivedProp: ModelForRecord[];
}

export declare interface DifferentSpreadModelArrayRecord {
    knownProp: string;
    additionalProperties?: Record<string, ModelForRecord[]>;
}

export declare interface DifferentSpreadModelDerived extends DifferentSpreadModelRecord {
    derivedProp: ModelForRecord;
}

export declare interface DifferentSpreadModelRecord {
    knownProp: string;
    additionalProperties?: Record<string, ModelForRecord>;
}

export declare interface DifferentSpreadStringDerived extends DifferentSpreadStringRecord {
    derivedProp: string;
}

export declare interface DifferentSpreadStringRecord {
    id: number;
    additionalProperties?: Record<string, string>;
}

export declare interface ExtendsDifferentSpreadFloatGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadFloatOperations {
    put: (body: DifferentSpreadFloatDerived, options?: ExtendsDifferentSpreadFloatPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsDifferentSpreadFloatGetOptionalParams) => Promise<DifferentSpreadFloatDerived>;
}

export declare interface ExtendsDifferentSpreadFloatPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadModelArrayOperations {
    put: (body: DifferentSpreadModelArrayDerived, options?: ExtendsDifferentSpreadModelArrayPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsDifferentSpreadModelArrayGetOptionalParams) => Promise<DifferentSpreadModelArrayDerived>;
}

export declare interface ExtendsDifferentSpreadModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadModelGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadModelOperations {
    put: (body: DifferentSpreadModelDerived, options?: ExtendsDifferentSpreadModelPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsDifferentSpreadModelGetOptionalParams) => Promise<DifferentSpreadModelDerived>;
}

export declare interface ExtendsDifferentSpreadModelPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadStringGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadStringOperations {
    put: (body: DifferentSpreadStringDerived, options?: ExtendsDifferentSpreadStringPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsDifferentSpreadStringGetOptionalParams) => Promise<DifferentSpreadStringDerived>;
}

export declare interface ExtendsDifferentSpreadStringPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsFloatAdditionalProperties {
    id: number;
    additionalProperties?: Record<string, number>;
}

export declare interface ExtendsFloatGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsFloatOperations {
    put: (body: ExtendsFloatAdditionalProperties, options?: ExtendsFloatPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsFloatGetOptionalParams) => Promise<ExtendsFloatAdditionalProperties>;
}

export declare interface ExtendsFloatPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsModelAdditionalProperties {
    knownProp: ModelForRecord;
    additionalProperties?: Record<string, ModelForRecord>;
}

export declare interface ExtendsModelArrayAdditionalProperties {
    knownProp: ModelForRecord[];
    additionalProperties?: Record<string, ModelForRecord[]>;
}

export declare interface ExtendsModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsModelArrayOperations {
    put: (body: ExtendsModelArrayAdditionalProperties, options?: ExtendsModelArrayPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsModelArrayGetOptionalParams) => Promise<ExtendsModelArrayAdditionalProperties>;
}

export declare interface ExtendsModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsModelGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsModelOperations {
    put: (body: ExtendsModelAdditionalProperties, options?: ExtendsModelPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsModelGetOptionalParams) => Promise<ExtendsModelAdditionalProperties>;
}

export declare interface ExtendsModelPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsStringAdditionalProperties {
    name: string;
    additionalProperties?: Record<string, string>;
}

export declare interface ExtendsStringGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsStringOperations {
    put: (body: ExtendsStringAdditionalProperties, options?: ExtendsStringPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsStringGetOptionalParams) => Promise<ExtendsStringAdditionalProperties>;
}

export declare interface ExtendsStringPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownAdditionalProperties {
    name: string;
    additionalProperties?: Record<string, any>;
}

export declare interface ExtendsUnknownAdditionalPropertiesDerived extends ExtendsUnknownAdditionalProperties {
    index: number;
    age?: number;
}

export declare interface ExtendsUnknownAdditionalPropertiesDiscriminated {
    name: string;
    kind: string;
    additionalProperties?: Record<string, any>;
}

export declare interface ExtendsUnknownAdditionalPropertiesDiscriminatedDerived extends ExtendsUnknownAdditionalPropertiesDiscriminated {
    kind: "derived";
    index: number;
    age?: number;
}

export declare type ExtendsUnknownAdditionalPropertiesDiscriminatedUnion = ExtendsUnknownAdditionalPropertiesDiscriminatedDerived | ExtendsUnknownAdditionalPropertiesDiscriminated;

export declare interface ExtendsUnknownDerivedGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownDerivedOperations {
    put: (body: ExtendsUnknownAdditionalPropertiesDerived, options?: ExtendsUnknownDerivedPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsUnknownDerivedGetOptionalParams) => Promise<ExtendsUnknownAdditionalPropertiesDerived>;
}

export declare interface ExtendsUnknownDerivedPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownDiscriminatedGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownDiscriminatedOperations {
    put: (body: ExtendsUnknownAdditionalPropertiesDiscriminatedUnion, options?: ExtendsUnknownDiscriminatedPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsUnknownDiscriminatedGetOptionalParams) => Promise<ExtendsUnknownAdditionalPropertiesDiscriminatedUnion>;
}

export declare interface ExtendsUnknownDiscriminatedPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownOperations {
    put: (body: ExtendsUnknownAdditionalProperties, options?: ExtendsUnknownPutOptionalParams) => Promise<void>;
    get: (options?: ExtendsUnknownGetOptionalParams) => Promise<ExtendsUnknownAdditionalProperties>;
}

export declare interface ExtendsUnknownPutOptionalParams extends OperationOptions {
}

export declare interface IsFloatAdditionalProperties {
    id: number;
    additionalProperties?: Record<string, number>;
}

export declare interface IsFloatGetOptionalParams extends OperationOptions {
}

export declare interface IsFloatOperations {
    put: (body: IsFloatAdditionalProperties, options?: IsFloatPutOptionalParams) => Promise<void>;
    get: (options?: IsFloatGetOptionalParams) => Promise<IsFloatAdditionalProperties>;
}

export declare interface IsFloatPutOptionalParams extends OperationOptions {
}

export declare interface IsModelAdditionalProperties {
    knownProp: ModelForRecord;
    additionalProperties?: Record<string, ModelForRecord>;
}

export declare interface IsModelArrayAdditionalProperties {
    knownProp: ModelForRecord[];
    additionalProperties?: Record<string, ModelForRecord[]>;
}

export declare interface IsModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface IsModelArrayOperations {
    put: (body: IsModelArrayAdditionalProperties, options?: IsModelArrayPutOptionalParams) => Promise<void>;
    get: (options?: IsModelArrayGetOptionalParams) => Promise<IsModelArrayAdditionalProperties>;
}

export declare interface IsModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface IsModelGetOptionalParams extends OperationOptions {
}

export declare interface IsModelOperations {
    put: (body: IsModelAdditionalProperties, options?: IsModelPutOptionalParams) => Promise<void>;
    get: (options?: IsModelGetOptionalParams) => Promise<IsModelAdditionalProperties>;
}

export declare interface IsModelPutOptionalParams extends OperationOptions {
}

export declare interface IsStringAdditionalProperties {
    name: string;
    additionalProperties?: Record<string, string>;
}

export declare interface IsStringGetOptionalParams extends OperationOptions {
}

export declare interface IsStringOperations {
    put: (body: IsStringAdditionalProperties, options?: IsStringPutOptionalParams) => Promise<void>;
    get: (options?: IsStringGetOptionalParams) => Promise<IsStringAdditionalProperties>;
}

export declare interface IsStringPutOptionalParams extends OperationOptions {
}

export declare interface IsUnknownAdditionalProperties {
    name: string;
    additionalProperties?: Record<string, any>;
}

export declare interface IsUnknownAdditionalPropertiesDerived extends IsUnknownAdditionalProperties {
    index: number;
    age?: number;
}

export declare interface IsUnknownAdditionalPropertiesDiscriminated {
    name: string;
    kind: string;
    additionalProperties?: Record<string, any>;
}

export declare interface IsUnknownAdditionalPropertiesDiscriminatedDerived extends IsUnknownAdditionalPropertiesDiscriminated {
    kind: "derived";
    index: number;
    age?: number;
}

export declare type IsUnknownAdditionalPropertiesDiscriminatedUnion = IsUnknownAdditionalPropertiesDiscriminatedDerived | IsUnknownAdditionalPropertiesDiscriminated;

export declare interface IsUnknownDerivedGetOptionalParams extends OperationOptions {
}

export declare interface IsUnknownDerivedOperations {
    put: (body: IsUnknownAdditionalPropertiesDerived, options?: IsUnknownDerivedPutOptionalParams) => Promise<void>;
    get: (options?: IsUnknownDerivedGetOptionalParams) => Promise<IsUnknownAdditionalPropertiesDerived>;
}

export declare interface IsUnknownDerivedPutOptionalParams extends OperationOptions {
}

export declare interface IsUnknownDiscriminatedGetOptionalParams extends OperationOptions {
}

export declare interface IsUnknownDiscriminatedOperations {
    put: (body: IsUnknownAdditionalPropertiesDiscriminatedUnion, options?: IsUnknownDiscriminatedPutOptionalParams) => Promise<void>;
    get: (options?: IsUnknownDiscriminatedGetOptionalParams) => Promise<IsUnknownAdditionalPropertiesDiscriminatedUnion>;
}

export declare interface IsUnknownDiscriminatedPutOptionalParams extends OperationOptions {
}

export declare interface IsUnknownGetOptionalParams extends OperationOptions {
}

export declare interface IsUnknownOperations {
    put: (body: IsUnknownAdditionalProperties, options?: IsUnknownPutOptionalParams) => Promise<void>;
    get: (options?: IsUnknownGetOptionalParams) => Promise<IsUnknownAdditionalProperties>;
}

export declare interface IsUnknownPutOptionalParams extends OperationOptions {
}

export declare interface ModelForRecord {
    state: string;
}

export declare interface MultipleSpreadGetOptionalParams extends OperationOptions {
}

export declare interface MultipleSpreadOperations {
    put: (body: MultipleSpreadRecord, options?: MultipleSpreadPutOptionalParams) => Promise<void>;
    get: (options?: MultipleSpreadGetOptionalParams) => Promise<MultipleSpreadRecord>;
}

export declare interface MultipleSpreadPutOptionalParams extends OperationOptions {
}

export declare interface MultipleSpreadRecord {
    flag: boolean;
    additionalProperties?: Record<string, string | number>;
}

export declare interface SpreadDifferentFloatGetOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentFloatOperations {
    put: (body: DifferentSpreadFloatRecord, options?: SpreadDifferentFloatPutOptionalParams) => Promise<void>;
    get: (options?: SpreadDifferentFloatGetOptionalParams) => Promise<DifferentSpreadFloatRecord>;
}

export declare interface SpreadDifferentFloatPutOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentModelArrayOperations {
    put: (body: DifferentSpreadModelArrayRecord, options?: SpreadDifferentModelArrayPutOptionalParams) => Promise<void>;
    get: (options?: SpreadDifferentModelArrayGetOptionalParams) => Promise<DifferentSpreadModelArrayRecord>;
}

export declare interface SpreadDifferentModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentModelGetOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentModelOperations {
    put: (body: DifferentSpreadModelRecord, options?: SpreadDifferentModelPutOptionalParams) => Promise<void>;
    get: (options?: SpreadDifferentModelGetOptionalParams) => Promise<DifferentSpreadModelRecord>;
}

export declare interface SpreadDifferentModelPutOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentStringGetOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentStringOperations {
    put: (body: DifferentSpreadStringRecord, options?: SpreadDifferentStringPutOptionalParams) => Promise<void>;
    get: (options?: SpreadDifferentStringGetOptionalParams) => Promise<DifferentSpreadStringRecord>;
}

export declare interface SpreadDifferentStringPutOptionalParams extends OperationOptions {
}

export declare interface SpreadFloatGetOptionalParams extends OperationOptions {
}

export declare interface SpreadFloatOperations {
    put: (body: SpreadFloatRecord, options?: SpreadFloatPutOptionalParams) => Promise<void>;
    get: (options?: SpreadFloatGetOptionalParams) => Promise<SpreadFloatRecord>;
}

export declare interface SpreadFloatPutOptionalParams extends OperationOptions {
}

export declare interface SpreadFloatRecord {
    id: number;
    additionalProperties?: Record<string, number>;
}

export declare interface SpreadModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface SpreadModelArrayOperations {
    put: (body: SpreadModelArrayRecord, options?: SpreadModelArrayPutOptionalParams) => Promise<void>;
    get: (options?: SpreadModelArrayGetOptionalParams) => Promise<SpreadModelArrayRecord>;
}

export declare interface SpreadModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface SpreadModelArrayRecord {
    knownProp: ModelForRecord[];
    additionalProperties?: Record<string, ModelForRecord[]>;
}

export declare interface SpreadModelGetOptionalParams extends OperationOptions {
}

export declare interface SpreadModelOperations {
    put: (body: SpreadModelRecord, options?: SpreadModelPutOptionalParams) => Promise<void>;
    get: (options?: SpreadModelGetOptionalParams) => Promise<SpreadModelRecord>;
}

export declare interface SpreadModelPutOptionalParams extends OperationOptions {
}

export declare interface SpreadModelRecord {
    knownProp: ModelForRecord;
    additionalProperties?: Record<string, ModelForRecord>;
}

export declare interface SpreadRecordForNonDiscriminatedUnion {
    name: string;
    additionalProperties?: Record<string, WidgetData0 | WidgetData1>;
}

export declare interface SpreadRecordForNonDiscriminatedUnion2 {
    name: string;
    additionalProperties?: Record<string, WidgetData2 | WidgetData1>;
}

export declare interface SpreadRecordForNonDiscriminatedUnion3 {
    name: string;
    additionalProperties?: Record<string, WidgetData2[] | WidgetData1>;
}

export declare interface SpreadRecordForUnion {
    flag: boolean;
    additionalProperties?: Record<string, string | number>;
}

export declare interface SpreadRecordNonDiscriminatedUnion2GetOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnion2Operations {
    put: (body: SpreadRecordForNonDiscriminatedUnion2, options?: SpreadRecordNonDiscriminatedUnion2PutOptionalParams) => Promise<void>;
    get: (options?: SpreadRecordNonDiscriminatedUnion2GetOptionalParams) => Promise<SpreadRecordForNonDiscriminatedUnion2>;
}

export declare interface SpreadRecordNonDiscriminatedUnion2PutOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnion3GetOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnion3Operations {
    put: (body: SpreadRecordForNonDiscriminatedUnion3, options?: SpreadRecordNonDiscriminatedUnion3PutOptionalParams) => Promise<void>;
    get: (options?: SpreadRecordNonDiscriminatedUnion3GetOptionalParams) => Promise<SpreadRecordForNonDiscriminatedUnion3>;
}

export declare interface SpreadRecordNonDiscriminatedUnion3PutOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnionGetOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnionOperations {
    put: (body: SpreadRecordForNonDiscriminatedUnion, options?: SpreadRecordNonDiscriminatedUnionPutOptionalParams) => Promise<void>;
    get: (options?: SpreadRecordNonDiscriminatedUnionGetOptionalParams) => Promise<SpreadRecordForNonDiscriminatedUnion>;
}

export declare interface SpreadRecordNonDiscriminatedUnionPutOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordUnionGetOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordUnionOperations {
    put: (body: SpreadRecordForUnion, options?: SpreadRecordUnionPutOptionalParams) => Promise<void>;
    get: (options?: SpreadRecordUnionGetOptionalParams) => Promise<SpreadRecordForUnion>;
}

export declare interface SpreadRecordUnionPutOptionalParams extends OperationOptions {
}

export declare interface SpreadStringGetOptionalParams extends OperationOptions {
}

export declare interface SpreadStringOperations {
    put: (body: SpreadStringRecord, options?: SpreadStringPutOptionalParams) => Promise<void>;
    get: (options?: SpreadStringGetOptionalParams) => Promise<SpreadStringRecord>;
}

export declare interface SpreadStringPutOptionalParams extends OperationOptions {
}

export declare interface SpreadStringRecord {
    name: string;
    additionalProperties?: Record<string, string>;
}

export declare interface WidgetData0 {
    kind: "kind0";
    fooProp: string;
}

export declare interface WidgetData1 {
    kind: "kind1";
    start: Date;
    end?: Date;
}

export declare interface WidgetData2 {
    kind: "kind1";
    start: string;
}

export { }
