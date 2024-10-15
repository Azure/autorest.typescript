import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class AdditionalPropertiesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: AdditionalPropertiesClientOptionalParams);
    readonly extendsUnknown: ExtendsUnknownOperations;
    readonly extendsUnknownDerived: ExtendsUnknownDerivedOperations;
    readonly extendsUnknownDiscriminated: ExtendsUnknownDiscriminatedOperations;
    readonly isUnknown: IsUnknownOperations;
    readonly isUnknownDerived: IsUnknownDerivedOperations;
    readonly isUnknownDiscriminated: IsUnknownDiscriminatedOperations;
    readonly extendsString: ExtendsStringOperations;
    readonly isString: IsStringOperations;
    readonly spreadString: SpreadStringOperations;
    readonly extendsFloat: ExtendsFloatOperations;
    readonly isFloat: IsFloatOperations;
    readonly spreadFloat: SpreadFloatOperations;
    readonly extendsModel: ExtendsModelOperations;
    readonly isModel: IsModelOperations;
    readonly spreadModel: SpreadModelOperations;
    readonly extendsModelArray: ExtendsModelArrayOperations;
    readonly isModelArray: IsModelArrayOperations;
    readonly spreadModelArray: SpreadModelArrayOperations;
    readonly spreadDifferentString: SpreadDifferentStringOperations;
    readonly spreadDifferentFloat: SpreadDifferentFloatOperations;
    readonly spreadDifferentModel: SpreadDifferentModelOperations;
    readonly spreadDifferentModelArray: SpreadDifferentModelArrayOperations;
    readonly extendsDifferentSpreadString: ExtendsDifferentSpreadStringOperations;
    readonly extendsDifferentSpreadFloat: ExtendsDifferentSpreadFloatOperations;
    readonly extendsDifferentSpreadModel: ExtendsDifferentSpreadModelOperations;
    readonly extendsDifferentSpreadModelArray: ExtendsDifferentSpreadModelArrayOperations;
    readonly multipleSpread: MultipleSpreadOperations;
    readonly spreadRecordUnion: SpreadRecordUnionOperations;
    readonly spreadRecordDiscriminatedUnion: SpreadRecordDiscriminatedUnionOperations;
    readonly spreadRecordNonDiscriminatedUnion: SpreadRecordNonDiscriminatedUnionOperations;
    readonly spreadRecordNonDiscriminatedUnion2: SpreadRecordNonDiscriminatedUnion2Operations;
    readonly spreadRecordNonDiscriminatedUnion3: SpreadRecordNonDiscriminatedUnion3Operations;
}

export declare interface AdditionalPropertiesClientOptionalParams extends ClientOptions {
}

export declare interface DifferentSpreadFloatDerived extends DifferentSpreadFloatRecord {
    derivedProp: number;
}

export declare interface DifferentSpreadFloatRecord extends Record<string, any> {
    name: string;
}

export declare interface DifferentSpreadModelArrayDerived extends DifferentSpreadModelArrayRecord {
    derivedProp: ModelForRecord[];
}

export declare interface DifferentSpreadModelArrayRecord extends Record<string, any> {
    knownProp: string;
}

export declare interface DifferentSpreadModelDerived extends DifferentSpreadModelRecord {
    derivedProp: ModelForRecord;
}

export declare interface DifferentSpreadModelRecord extends Record<string, any> {
    knownProp: string;
}

export declare interface DifferentSpreadStringDerived extends DifferentSpreadStringRecord {
    derivedProp: string;
}

export declare interface DifferentSpreadStringRecord extends Record<string, any> {
    id: number;
}

export declare interface ExtendsDifferentSpreadFloatGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadFloatOperations {
    get: (options?: ExtendsDifferentSpreadFloatGetOptionalParams) => Promise<DifferentSpreadFloatDerived>;
    put: (body: DifferentSpreadFloatDerived, options?: ExtendsDifferentSpreadFloatPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsDifferentSpreadFloatPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadModelArrayOperations {
    get: (options?: ExtendsDifferentSpreadModelArrayGetOptionalParams) => Promise<DifferentSpreadModelArrayDerived>;
    put: (body: DifferentSpreadModelArrayDerived, options?: ExtendsDifferentSpreadModelArrayPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsDifferentSpreadModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadModelGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadModelOperations {
    get: (options?: ExtendsDifferentSpreadModelGetOptionalParams) => Promise<DifferentSpreadModelDerived>;
    put: (body: DifferentSpreadModelDerived, options?: ExtendsDifferentSpreadModelPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsDifferentSpreadModelPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadStringGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsDifferentSpreadStringOperations {
    get: (options?: ExtendsDifferentSpreadStringGetOptionalParams) => Promise<DifferentSpreadStringDerived>;
    put: (body: DifferentSpreadStringDerived, options?: ExtendsDifferentSpreadStringPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsDifferentSpreadStringPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsFloatAdditionalProperties extends Record<string, number> {
    id: number;
}

export declare interface ExtendsFloatGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsFloatOperations {
    get: (options?: ExtendsFloatGetOptionalParams) => Promise<ExtendsFloatAdditionalProperties>;
    put: (body: ExtendsFloatAdditionalProperties, options?: ExtendsFloatPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsFloatPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsModelAdditionalProperties extends Record<string, ModelForRecord> {
    knownProp: ModelForRecord;
}

export declare interface ExtendsModelArrayAdditionalProperties extends Record<string, ModelForRecord[]> {
    knownProp: ModelForRecord[];
}

export declare interface ExtendsModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsModelArrayOperations {
    get: (options?: ExtendsModelArrayGetOptionalParams) => Promise<ExtendsModelArrayAdditionalProperties>;
    put: (body: ExtendsModelArrayAdditionalProperties, options?: ExtendsModelArrayPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsModelGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsModelOperations {
    get: (options?: ExtendsModelGetOptionalParams) => Promise<ExtendsModelAdditionalProperties>;
    put: (body: ExtendsModelAdditionalProperties, options?: ExtendsModelPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsModelPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsStringAdditionalProperties extends Record<string, string> {
    name: string;
}

export declare interface ExtendsStringGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsStringOperations {
    get: (options?: ExtendsStringGetOptionalParams) => Promise<ExtendsStringAdditionalProperties>;
    put: (body: ExtendsStringAdditionalProperties, options?: ExtendsStringPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsStringPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownAdditionalProperties extends Record<string, any> {
    name: string;
}

export declare interface ExtendsUnknownAdditionalPropertiesDerived extends ExtendsUnknownAdditionalProperties {
    index: number;
    age?: number;
}

export declare interface ExtendsUnknownAdditionalPropertiesDiscriminated extends Record<string, any> {
    name: string;
    kind: string;
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
    get: (options?: ExtendsUnknownDerivedGetOptionalParams) => Promise<ExtendsUnknownAdditionalPropertiesDerived>;
    put: (body: ExtendsUnknownAdditionalPropertiesDerived, options?: ExtendsUnknownDerivedPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsUnknownDerivedPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownDiscriminatedGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownDiscriminatedOperations {
    get: (options?: ExtendsUnknownDiscriminatedGetOptionalParams) => Promise<ExtendsUnknownAdditionalPropertiesDiscriminatedUnion>;
    put: (body: ExtendsUnknownAdditionalPropertiesDiscriminatedUnion, options?: ExtendsUnknownDiscriminatedPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsUnknownDiscriminatedPutOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownGetOptionalParams extends OperationOptions {
}

export declare interface ExtendsUnknownOperations {
    get: (options?: ExtendsUnknownGetOptionalParams) => Promise<ExtendsUnknownAdditionalProperties>;
    put: (body: ExtendsUnknownAdditionalProperties, options?: ExtendsUnknownPutOptionalParams) => Promise<void>;
}

export declare interface ExtendsUnknownPutOptionalParams extends OperationOptions {
}

export declare interface IsFloatAdditionalProperties extends Record<string, number> {
    id: number;
}

export declare interface IsFloatGetOptionalParams extends OperationOptions {
}

export declare interface IsFloatOperations {
    get: (options?: IsFloatGetOptionalParams) => Promise<IsFloatAdditionalProperties>;
    put: (body: IsFloatAdditionalProperties, options?: IsFloatPutOptionalParams) => Promise<void>;
}

export declare interface IsFloatPutOptionalParams extends OperationOptions {
}

export declare interface IsModelAdditionalProperties extends Record<string, ModelForRecord> {
    knownProp: ModelForRecord;
}

export declare interface IsModelArrayAdditionalProperties extends Record<string, ModelForRecord[]> {
    knownProp: ModelForRecord[];
}

export declare interface IsModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface IsModelArrayOperations {
    get: (options?: IsModelArrayGetOptionalParams) => Promise<IsModelArrayAdditionalProperties>;
    put: (body: IsModelArrayAdditionalProperties, options?: IsModelArrayPutOptionalParams) => Promise<void>;
}

export declare interface IsModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface IsModelGetOptionalParams extends OperationOptions {
}

export declare interface IsModelOperations {
    get: (options?: IsModelGetOptionalParams) => Promise<IsModelAdditionalProperties>;
    put: (body: IsModelAdditionalProperties, options?: IsModelPutOptionalParams) => Promise<void>;
}

export declare interface IsModelPutOptionalParams extends OperationOptions {
}

export declare interface IsStringAdditionalProperties extends Record<string, string> {
    name: string;
}

export declare interface IsStringGetOptionalParams extends OperationOptions {
}

export declare interface IsStringOperations {
    get: (options?: IsStringGetOptionalParams) => Promise<IsStringAdditionalProperties>;
    put: (body: IsStringAdditionalProperties, options?: IsStringPutOptionalParams) => Promise<void>;
}

export declare interface IsStringPutOptionalParams extends OperationOptions {
}

export declare interface IsUnknownAdditionalProperties extends Record<string, any> {
    name: string;
}

export declare interface IsUnknownAdditionalPropertiesDerived extends IsUnknownAdditionalProperties {
    index: number;
    age?: number;
}

export declare interface IsUnknownAdditionalPropertiesDiscriminated extends Record<string, any> {
    name: string;
    kind: string;
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
    get: (options?: IsUnknownDerivedGetOptionalParams) => Promise<IsUnknownAdditionalPropertiesDerived>;
    put: (body: IsUnknownAdditionalPropertiesDerived, options?: IsUnknownDerivedPutOptionalParams) => Promise<void>;
}

export declare interface IsUnknownDerivedPutOptionalParams extends OperationOptions {
}

export declare interface IsUnknownDiscriminatedGetOptionalParams extends OperationOptions {
}

export declare interface IsUnknownDiscriminatedOperations {
    get: (options?: IsUnknownDiscriminatedGetOptionalParams) => Promise<IsUnknownAdditionalPropertiesDiscriminatedUnion>;
    put: (body: IsUnknownAdditionalPropertiesDiscriminatedUnion, options?: IsUnknownDiscriminatedPutOptionalParams) => Promise<void>;
}

export declare interface IsUnknownDiscriminatedPutOptionalParams extends OperationOptions {
}

export declare interface IsUnknownGetOptionalParams extends OperationOptions {
}

export declare interface IsUnknownOperations {
    get: (options?: IsUnknownGetOptionalParams) => Promise<IsUnknownAdditionalProperties>;
    put: (body: IsUnknownAdditionalProperties, options?: IsUnknownPutOptionalParams) => Promise<void>;
}

export declare interface IsUnknownPutOptionalParams extends OperationOptions {
}

export declare interface ModelForRecord {
    state: string;
}

export declare interface MultipleSpreadGetOptionalParams extends OperationOptions {
}

export declare interface MultipleSpreadOperations {
    get: (options?: MultipleSpreadGetOptionalParams) => Promise<MultipleSpreadRecord>;
    put: (body: MultipleSpreadRecord, options?: MultipleSpreadPutOptionalParams) => Promise<void>;
}

export declare interface MultipleSpreadPutOptionalParams extends OperationOptions {
}

export declare interface MultipleSpreadRecord extends Record<string, any> {
    flag: boolean;
}

export declare interface SpreadDifferentFloatGetOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentFloatOperations {
    get: (options?: SpreadDifferentFloatGetOptionalParams) => Promise<DifferentSpreadFloatRecord>;
    put: (body: DifferentSpreadFloatRecord, options?: SpreadDifferentFloatPutOptionalParams) => Promise<void>;
}

export declare interface SpreadDifferentFloatPutOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentModelArrayOperations {
    get: (options?: SpreadDifferentModelArrayGetOptionalParams) => Promise<DifferentSpreadModelArrayRecord>;
    put: (body: DifferentSpreadModelArrayRecord, options?: SpreadDifferentModelArrayPutOptionalParams) => Promise<void>;
}

export declare interface SpreadDifferentModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentModelGetOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentModelOperations {
    get: (options?: SpreadDifferentModelGetOptionalParams) => Promise<DifferentSpreadModelRecord>;
    put: (body: DifferentSpreadModelRecord, options?: SpreadDifferentModelPutOptionalParams) => Promise<void>;
}

export declare interface SpreadDifferentModelPutOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentStringGetOptionalParams extends OperationOptions {
}

export declare interface SpreadDifferentStringOperations {
    get: (options?: SpreadDifferentStringGetOptionalParams) => Promise<DifferentSpreadStringRecord>;
    put: (body: DifferentSpreadStringRecord, options?: SpreadDifferentStringPutOptionalParams) => Promise<void>;
}

export declare interface SpreadDifferentStringPutOptionalParams extends OperationOptions {
}

export declare interface SpreadFloatGetOptionalParams extends OperationOptions {
}

export declare interface SpreadFloatOperations {
    get: (options?: SpreadFloatGetOptionalParams) => Promise<SpreadFloatRecord>;
    put: (body: SpreadFloatRecord, options?: SpreadFloatPutOptionalParams) => Promise<void>;
}

export declare interface SpreadFloatPutOptionalParams extends OperationOptions {
}

export declare interface SpreadFloatRecord extends Record<string, number> {
    id: number;
}

export declare interface SpreadModelArrayGetOptionalParams extends OperationOptions {
}

export declare interface SpreadModelArrayOperations {
    get: (options?: SpreadModelArrayGetOptionalParams) => Promise<SpreadModelArrayRecord>;
    put: (body: SpreadModelArrayRecord, options?: SpreadModelArrayPutOptionalParams) => Promise<void>;
}

export declare interface SpreadModelArrayPutOptionalParams extends OperationOptions {
}

export declare interface SpreadModelArrayRecord extends Record<string, ModelForRecord[]> {
    knownProp: ModelForRecord[];
}

export declare interface SpreadModelGetOptionalParams extends OperationOptions {
}

export declare interface SpreadModelOperations {
    get: (options?: SpreadModelGetOptionalParams) => Promise<SpreadModelRecord>;
    put: (body: SpreadModelRecord, options?: SpreadModelPutOptionalParams) => Promise<void>;
}

export declare interface SpreadModelPutOptionalParams extends OperationOptions {
}

export declare interface SpreadModelRecord extends Record<string, ModelForRecord> {
    knownProp: ModelForRecord;
}

export declare interface SpreadRecordDiscriminatedUnionGetOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordDiscriminatedUnionOperations {
    get: (options?: SpreadRecordDiscriminatedUnionGetOptionalParams) => Promise<SpreadRecordForDiscriminatedUnion>;
    put: (body: SpreadRecordForDiscriminatedUnion, options?: SpreadRecordDiscriminatedUnionPutOptionalParams) => Promise<void>;
}

export declare interface SpreadRecordDiscriminatedUnionPutOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordForDiscriminatedUnion extends Record<string, any> {
    name: string;
}

export declare interface SpreadRecordForNonDiscriminatedUnion extends Record<string, any> {
    name: string;
}

export declare interface SpreadRecordForNonDiscriminatedUnion2 extends Record<string, any> {
    name: string;
}

export declare interface SpreadRecordForNonDiscriminatedUnion3 extends Record<string, any> {
    name: string;
}

export declare interface SpreadRecordForUnion extends Record<string, any> {
    flag: boolean;
}

export declare interface SpreadRecordNonDiscriminatedUnion2GetOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnion2Operations {
    get: (options?: SpreadRecordNonDiscriminatedUnion2GetOptionalParams) => Promise<SpreadRecordForNonDiscriminatedUnion2>;
    put: (body: SpreadRecordForNonDiscriminatedUnion2, options?: SpreadRecordNonDiscriminatedUnion2PutOptionalParams) => Promise<void>;
}

export declare interface SpreadRecordNonDiscriminatedUnion2PutOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnion3GetOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnion3Operations {
    get: (options?: SpreadRecordNonDiscriminatedUnion3GetOptionalParams) => Promise<SpreadRecordForNonDiscriminatedUnion3>;
    put: (body: SpreadRecordForNonDiscriminatedUnion3, options?: SpreadRecordNonDiscriminatedUnion3PutOptionalParams) => Promise<void>;
}

export declare interface SpreadRecordNonDiscriminatedUnion3PutOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnionGetOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordNonDiscriminatedUnionOperations {
    get: (options?: SpreadRecordNonDiscriminatedUnionGetOptionalParams) => Promise<SpreadRecordForNonDiscriminatedUnion>;
    put: (body: SpreadRecordForNonDiscriminatedUnion, options?: SpreadRecordNonDiscriminatedUnionPutOptionalParams) => Promise<void>;
}

export declare interface SpreadRecordNonDiscriminatedUnionPutOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordUnionGetOptionalParams extends OperationOptions {
}

export declare interface SpreadRecordUnionOperations {
    get: (options?: SpreadRecordUnionGetOptionalParams) => Promise<SpreadRecordForUnion>;
    put: (body: SpreadRecordForUnion, options?: SpreadRecordUnionPutOptionalParams) => Promise<void>;
}

export declare interface SpreadRecordUnionPutOptionalParams extends OperationOptions {
}

export declare interface SpreadStringGetOptionalParams extends OperationOptions {
}

export declare interface SpreadStringOperations {
    get: (options?: SpreadStringGetOptionalParams) => Promise<SpreadStringRecord>;
    put: (body: SpreadStringRecord, options?: SpreadStringPutOptionalParams) => Promise<void>;
}

export declare interface SpreadStringPutOptionalParams extends OperationOptions {
}

export declare interface SpreadStringRecord extends Record<string, string> {
    name: string;
}

export declare type WidgetData = WidgetData0 | WidgetData1;

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
