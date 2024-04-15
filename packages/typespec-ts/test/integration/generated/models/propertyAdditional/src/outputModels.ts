// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The model extends from Record<unknown> type. */
export interface ExtendsUnknownAdditionalPropertiesOutput
  extends Record<string, any> {
  /** The name property */
  name: string;
}

/** The model extends from Record<unknown> with a discriminator. */
export interface ExtendsUnknownAdditionalPropertiesDiscriminatedOutputParent
  extends Record<string, any> {
  /** The name property */
  name: string;
  kind: string;
}

/** The derived discriminated type */
export interface ExtendsUnknownAdditionalPropertiesDiscriminatedDerivedOutput
  extends ExtendsUnknownAdditionalPropertiesDiscriminatedOutputParent {
  kind: "derived";
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model extends from a type that extends from Record<unknown>. */
export interface ExtendsUnknownAdditionalPropertiesDerivedOutput
  extends ExtendsUnknownAdditionalPropertiesOutput {
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model is from Record<unknown> type. */
export interface IsUnknownAdditionalPropertiesOutput
  extends Record<string, any> {
  /** The name property */
  name: string;
}

/** The model extends from a type that is Record<unknown> type */
export interface IsUnknownAdditionalPropertiesDerivedOutput
  extends IsUnknownAdditionalPropertiesOutput {
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model is Record<unknown> with a discriminator. */
export interface IsUnknownAdditionalPropertiesDiscriminatedOutputParent
  extends Record<string, any> {
  /** The name property */
  name: string;
  kind: string;
}

/** The derived discriminated type */
export interface IsUnknownAdditionalPropertiesDiscriminatedDerivedOutput
  extends IsUnknownAdditionalPropertiesDiscriminatedOutputParent {
  kind: "derived";
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model extends from Record<string> type. */
export interface ExtendsStringAdditionalPropertiesOutput
  extends Record<string, string> {
  /** The name property */
  name: string;
}

/** The model is from Record<string> type. */
export interface IsStringAdditionalPropertiesOutput
  extends Record<string, string> {
  /** The name property */
  name: string;
}

/** The model spread Record<string> with the same known property type */
export interface SpreadStringRecordOutput extends Record<string, string> {
  /** The name property */
  name: string;
}

/** The model extends from Record<float32> type. */
export interface ExtendsFloatAdditionalPropertiesOutput
  extends Record<string, number> {
  /** The id property */
  id: number;
}

/** The model is from Record<float32> type. */
export interface IsFloatAdditionalPropertiesOutput
  extends Record<string, number> {
  /** The id property */
  id: number;
}

/** The model spread Record<float32> with the same known property type */
export interface SpreadFloatRecordOutput extends Record<string, number> {
  /** The id property */
  id: number;
}

/** The model extends from Record<ModelForRecord> type. */
export interface ExtendsModelAdditionalPropertiesOutput
  extends Record<string, ModelForRecordOutput> {
  knownProp: ModelForRecordOutput;
}

/** model for record */
export interface ModelForRecordOutput {
  /** The state property */
  state: string;
}

/** The model is from Record<ModelForRecord> type. */
export interface IsModelAdditionalPropertiesOutput
  extends Record<string, ModelForRecordOutput> {
  knownProp: ModelForRecordOutput;
}

/** The model spread Record<ModelForRecord> with the same known property type */
export interface SpreadModelRecordOutput
  extends Record<string, ModelForRecordOutput> {
  knownProp: ModelForRecordOutput;
}

/** The model extends from Record<ModelForRecord[]> type. */
export interface ExtendsModelArrayAdditionalPropertiesOutput
  extends Record<string, Array<ModelForRecordOutput>> {
  knownProp: Array<ModelForRecordOutput>;
}

/** The model is from Record<ModelForRecord[]> type. */
export interface IsModelArrayAdditionalPropertiesOutput
  extends Record<string, Array<ModelForRecordOutput>> {
  knownProp: Array<ModelForRecordOutput>;
}

export interface SpreadModelArrayRecordOutput
  extends Record<string, Array<ModelForRecordOutput>> {
  knownProp: Array<ModelForRecordOutput>;
}

/** The model spread Record<string> with the different known property type */
export interface DifferentSpreadStringRecordOutput
  extends Record<string, string> {
  /** The name property */
  id: number;
}

/** The model extends from a model that spread Record<string> with the different known property type */
export interface DifferentSpreadStringDerivedOutput
  extends DifferentSpreadStringRecordOutput {
  /** The index property */
  derivedProp: string;
}

/** The model spread Record<float32> with the different known property type */
export interface DifferentSpreadFloatRecordOutput
  extends Record<string, number> {
  /** The id property */
  name: string;
}

/** The model extends from a model that spread Record<float32> with the different known property type */
export interface DifferentSpreadFloatDerivedOutput
  extends DifferentSpreadFloatRecordOutput {
  /** The index property */
  derivedProp: number;
}

/** The model spread Record<ModelForRecord> with the different known property type */
export interface DifferentSpreadModelRecordOutput
  extends Record<string, ModelForRecordOutput> {
  knownProp: string;
}

/** The model extends from a model that spread Record<ModelForRecord> with the different known property type */
export interface DifferentSpreadModelDerivedOutput
  extends DifferentSpreadModelRecordOutput {
  /** The index property */
  derivedProp: ModelForRecordOutput;
}

/** The model spread Record<ModelForRecord[]> with the different known property type */
export interface DifferentSpreadModelArrayRecordOutput
  extends Record<string, Array<ModelForRecordOutput>> {
  knownProp: string;
}

/** The model extends from a model that spread Record<ModelForRecord[]> with the different known property type */
export interface DifferentSpreadModelArrayDerivedOutput
  extends DifferentSpreadModelArrayRecordOutput {
  /** The index property */
  derivedProp: Array<ModelForRecordOutput>;
}

/** The model spread Record<string> and Record<float32> */
export interface MultipleSpreadRecordOutput
  extends Record<string, string | number> {
  /** The name property */
  flag: boolean;
}

/** The model spread Record<string | float32> */
export interface SpreadRecordForUnionOutput
  extends Record<string, string | number> {
  /** The name property */
  flag: boolean;
}

/** The model spread Record<WidgetData> */
export interface SpreadRecordForDiscriminatedUnionOutput
  extends Record<string, WidgetDataOutput> {
  /** The name property */
  name: string;
}

export interface WidgetData0Output {
  kind: "kind0";
  fooProp: string;
}

export interface WidgetData1Output {
  kind: "kind1";
  start: string;
  end?: string;
}

/** The model spread Record<WidgetData0 | WidgetData1> */
export interface SpreadRecordForNonDiscriminatedUnionOutput
  extends Record<string, WidgetData0Output | WidgetData1Output> {
  /** The name property */
  name: string;
}

/** The model spread Record<WidgetData2 | WidgetData1> */
export interface SpreadRecordForNonDiscriminatedUnion2Output
  extends Record<string, WidgetData2Output | WidgetData1Output> {
  /** The name property */
  name: string;
}

export interface WidgetData2Output {
  kind: "kind1";
  start: string;
}

/** The model spread Record<WidgetData2[] | WidgetData1> */
export interface SpreadRecordForNonDiscriminatedUnion3Output
  extends Record<string, Array<WidgetData2Output> | WidgetData1Output> {
  /** The name property */
  name: string;
}

/** The model extends from Record<unknown> with a discriminator. */
export type ExtendsUnknownAdditionalPropertiesDiscriminatedOutput =
  | ExtendsUnknownAdditionalPropertiesDiscriminatedOutputParent
  | ExtendsUnknownAdditionalPropertiesDiscriminatedDerivedOutput;
/** The model is Record<unknown> with a discriminator. */
export type IsUnknownAdditionalPropertiesDiscriminatedOutput =
  | IsUnknownAdditionalPropertiesDiscriminatedOutputParent
  | IsUnknownAdditionalPropertiesDiscriminatedDerivedOutput;
/** Alias for WidgetDataOutput */
export type WidgetDataOutput = WidgetData0Output | WidgetData1Output;
