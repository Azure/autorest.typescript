// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface WidgetData2 {
  kind: "kind1";
  start: string;
}

export interface WidgetData1 {
  kind: "kind1";
  start: Date;
  end?: Date;
}

/** The model spread Record<WidgetData2[] | WidgetData1> */
export interface SpreadRecordForNonDiscriminatedUnion3
  extends Record<string, any> {
  /** The name property */
  name: string;
}

/** The model spread Record<WidgetData2 | WidgetData1> */
export interface SpreadRecordForNonDiscriminatedUnion2
  extends Record<string, any> {
  /** The name property */
  name: string;
}

export interface WidgetData0 {
  kind: "kind0";
  fooProp: string;
}

/** The model spread Record<WidgetData0 | WidgetData1> */
export interface SpreadRecordForNonDiscriminatedUnion
  extends Record<string, any> {
  /** The name property */
  name: string;
}

/** The model spread Record<WidgetData> */
export interface SpreadRecordForDiscriminatedUnion extends Record<string, any> {
  /** The name property */
  name: string;
}

/** The model spread Record<string | float32> */
export interface SpreadRecordForUnion extends Record<string, any> {
  /** The name property */
  flag: boolean;
}

/** The model spread Record<string> and Record<float32> */
export interface MultipleSpreadRecord extends Record<string, any> {
  /** The name property */
  flag: boolean;
}

/** model for record */
export interface ModelForRecord {
  /** The state property */
  state: string;
}

/** The model spread Record<ModelForRecord[]> with the different known property type */
export interface DifferentSpreadModelArrayRecord extends Record<string, any> {
  knownProp: string;
}

/** The model extends from a model that spread Record<ModelForRecord[]> with the different known property type */
export interface DifferentSpreadModelArrayDerived
  extends DifferentSpreadModelArrayRecord {
  /** The index property */
  derivedProp: ModelForRecord[];
}

/** The model spread Record<ModelForRecord> with the different known property type */
export interface DifferentSpreadModelRecord extends Record<string, any> {
  knownProp: string;
}

/** The model extends from a model that spread Record<ModelForRecord> with the different known property type */
export interface DifferentSpreadModelDerived
  extends DifferentSpreadModelRecord {
  /** The index property */
  derivedProp: ModelForRecord;
}

/** The model spread Record<float32> with the different known property type */
export interface DifferentSpreadFloatRecord extends Record<string, any> {
  /** The id property */
  name: string;
}

/** The model extends from a model that spread Record<float32> with the different known property type */
export interface DifferentSpreadFloatDerived
  extends DifferentSpreadFloatRecord {
  /** The index property */
  derivedProp: number;
}

/** The model spread Record<string> with the different known property type */
export interface DifferentSpreadStringRecord extends Record<string, any> {
  /** The name property */
  id: number;
}

/** The model extends from a model that spread Record<string> with the different known property type */
export interface DifferentSpreadStringDerived
  extends DifferentSpreadStringRecord {
  /** The index property */
  derivedProp: string;
}

export interface SpreadModelArrayRecord extends Record<string, any> {
  knownProp: ModelForRecord[];
}

/** The model is from Record<ModelForRecord[]> type. */
export interface IsModelArrayAdditionalProperties extends Record<string, any> {
  knownProp: ModelForRecord[];
}

/** The model extends from Record<ModelForRecord[]> type. */
export interface ExtendsModelArrayAdditionalProperties
  extends Record<string, ModelForRecord[]> {
  knownProp: ModelForRecord[];
}

/** The model spread Record<ModelForRecord> with the same known property type */
export interface SpreadModelRecord extends Record<string, any> {
  knownProp: ModelForRecord;
}

/** The model is from Record<ModelForRecord> type. */
export interface IsModelAdditionalProperties extends Record<string, any> {
  knownProp: ModelForRecord;
}

/** The model extends from Record<ModelForRecord> type. */
export interface ExtendsModelAdditionalProperties
  extends Record<string, ModelForRecord> {
  knownProp: ModelForRecord;
}

/** The model spread Record<float32> with the same known property type */
export interface SpreadFloatRecord extends Record<string, any> {
  /** The id property */
  id: number;
}

/** The model is from Record<float32> type. */
export interface IsFloatAdditionalProperties extends Record<string, any> {
  /** The id property */
  id: number;
}

/** The model extends from Record<float32> type. */
export interface ExtendsFloatAdditionalProperties
  extends Record<string, number> {
  /** The id property */
  id: number;
}

/** The model spread Record<string> with the same known property type */
export interface SpreadStringRecord extends Record<string, any> {
  /** The name property */
  name: string;
}

/** The model is from Record<string> type. */
export interface IsStringAdditionalProperties extends Record<string, any> {
  /** The name property */
  name: string;
}

/** The model extends from Record<string> type. */
export interface ExtendsStringAdditionalProperties
  extends Record<string, string> {
  /** The name property */
  name: string;
}

/** The model is Record<unknown> with a discriminator. */
export interface IsUnknownAdditionalPropertiesDiscriminated
  extends Record<string, any> {
  /** The name property */
  name: string;
  /** the discriminator possible values: derived */
  kind: string;
}

/** The derived discriminated type */
export interface IsUnknownAdditionalPropertiesDiscriminatedDerived
  extends IsUnknownAdditionalPropertiesDiscriminated {
  kind: "derived";
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model is from Record<unknown> type. */
export interface IsUnknownAdditionalProperties extends Record<string, any> {
  /** The name property */
  name: string;
}

/** The model extends from a type that is Record<unknown> type */
export interface IsUnknownAdditionalPropertiesDerived
  extends IsUnknownAdditionalProperties {
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model extends from Record<unknown> with a discriminator. */
export interface ExtendsUnknownAdditionalPropertiesDiscriminated
  extends Record<string, unknown> {
  /** The name property */
  name: string;
  /** the discriminator possible values: derived */
  kind: string;
}

/** The derived discriminated type */
export interface ExtendsUnknownAdditionalPropertiesDiscriminatedDerived
  extends ExtendsUnknownAdditionalPropertiesDiscriminated {
  kind: "derived";
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model extends from Record<unknown> type. */
export interface ExtendsUnknownAdditionalProperties
  extends Record<string, unknown> {
  /** The name property */
  name: string;
}

/** The model extends from a type that extends from Record<unknown>. */
export interface ExtendsUnknownAdditionalPropertiesDerived
  extends ExtendsUnknownAdditionalProperties {
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** Alias for WidgetData */
export type WidgetData = WidgetData0 | WidgetData1;
/** Alias for IsUnknownAdditionalPropertiesDiscriminatedUnion */
export type IsUnknownAdditionalPropertiesDiscriminatedUnion =
  | IsUnknownAdditionalPropertiesDiscriminatedDerived
  | IsUnknownAdditionalPropertiesDiscriminated;
/** Alias for ExtendsUnknownAdditionalPropertiesDiscriminatedUnion */
export type ExtendsUnknownAdditionalPropertiesDiscriminatedUnion =
  | ExtendsUnknownAdditionalPropertiesDiscriminatedDerived
  | ExtendsUnknownAdditionalPropertiesDiscriminated;
