// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WidgetData2 as WidgetData2Rest,
  WidgetData1 as WidgetData1Rest,
  SpreadRecordForNonDiscriminatedUnion3 as SpreadRecordForNonDiscriminatedUnion3Rest,
  SpreadRecordForNonDiscriminatedUnion2 as SpreadRecordForNonDiscriminatedUnion2Rest,
  WidgetData0 as WidgetData0Rest,
  SpreadRecordForNonDiscriminatedUnion as SpreadRecordForNonDiscriminatedUnionRest,
  SpreadRecordForDiscriminatedUnion as SpreadRecordForDiscriminatedUnionRest,
  SpreadRecordForUnion as SpreadRecordForUnionRest,
  MultipleSpreadRecord as MultipleSpreadRecordRest,
  ModelForRecord as ModelForRecordRest,
  DifferentSpreadModelArrayRecord as DifferentSpreadModelArrayRecordRest,
  DifferentSpreadModelArrayDerived as DifferentSpreadModelArrayDerivedRest,
  DifferentSpreadModelRecord as DifferentSpreadModelRecordRest,
  DifferentSpreadModelDerived as DifferentSpreadModelDerivedRest,
  DifferentSpreadFloatRecord as DifferentSpreadFloatRecordRest,
  DifferentSpreadFloatDerived as DifferentSpreadFloatDerivedRest,
  DifferentSpreadStringRecord as DifferentSpreadStringRecordRest,
  DifferentSpreadStringDerived as DifferentSpreadStringDerivedRest,
  SpreadModelArrayRecord as SpreadModelArrayRecordRest,
  IsModelArrayAdditionalProperties as IsModelArrayAdditionalPropertiesRest,
  ExtendsModelArrayAdditionalProperties as ExtendsModelArrayAdditionalPropertiesRest,
  SpreadModelRecord as SpreadModelRecordRest,
  IsModelAdditionalProperties as IsModelAdditionalPropertiesRest,
  ExtendsModelAdditionalProperties as ExtendsModelAdditionalPropertiesRest,
  SpreadFloatRecord as SpreadFloatRecordRest,
  IsFloatAdditionalProperties as IsFloatAdditionalPropertiesRest,
  ExtendsFloatAdditionalProperties as ExtendsFloatAdditionalPropertiesRest,
  SpreadStringRecord as SpreadStringRecordRest,
  IsStringAdditionalProperties as IsStringAdditionalPropertiesRest,
  ExtendsStringAdditionalProperties as ExtendsStringAdditionalPropertiesRest,
  IsUnknownAdditionalPropertiesDiscriminated as IsUnknownAdditionalPropertiesDiscriminatedRest,
  IsUnknownAdditionalPropertiesDiscriminatedDerived as IsUnknownAdditionalPropertiesDiscriminatedDerivedRest,
  IsUnknownAdditionalProperties as IsUnknownAdditionalPropertiesRest,
  IsUnknownAdditionalPropertiesDerived as IsUnknownAdditionalPropertiesDerivedRest,
  ExtendsUnknownAdditionalPropertiesDiscriminated as ExtendsUnknownAdditionalPropertiesDiscriminatedRest,
  ExtendsUnknownAdditionalPropertiesDiscriminatedDerived as ExtendsUnknownAdditionalPropertiesDiscriminatedDerivedRest,
  ExtendsUnknownAdditionalProperties as ExtendsUnknownAdditionalPropertiesRest,
  ExtendsUnknownAdditionalPropertiesDerived as ExtendsUnknownAdditionalPropertiesDerivedRest,
} from "../rest/index.js";

export interface WidgetData2 {
  kind: "kind1";
  start: string;
}

export function widgetData2Serializer(item: WidgetData2): WidgetData2Rest {
  return {
    kind: item["kind"],
    start: item["start"],
  };
}

export interface WidgetData1 {
  kind: "kind1";
  start: Date;
  end?: Date;
}

export function widgetData1Serializer(item: WidgetData1): WidgetData1Rest {
  return {
    kind: item["kind"],
    start: item["start"].toISOString(),
    end: item["end"]?.toISOString(),
  };
}

/** The model spread Record<WidgetData2[] | WidgetData1> */
export interface SpreadRecordForNonDiscriminatedUnion3
  extends Record<string, any> {
  /** The name property */
  name: string;
}

export function spreadRecordForNonDiscriminatedUnion3Serializer(
  item: SpreadRecordForNonDiscriminatedUnion3,
): SpreadRecordForNonDiscriminatedUnion3Rest {
  return {
    ...item,
    name: item["name"],
  };
}

/** The model spread Record<WidgetData2 | WidgetData1> */
export interface SpreadRecordForNonDiscriminatedUnion2
  extends Record<string, any> {
  /** The name property */
  name: string;
}

export function spreadRecordForNonDiscriminatedUnion2Serializer(
  item: SpreadRecordForNonDiscriminatedUnion2,
): SpreadRecordForNonDiscriminatedUnion2Rest {
  return {
    ...item,
    name: item["name"],
  };
}

export interface WidgetData0 {
  kind: "kind0";
  fooProp: string;
}

export function widgetData0Serializer(item: WidgetData0): WidgetData0Rest {
  return {
    kind: item["kind"],
    fooProp: item["fooProp"],
  };
}

/** The model spread Record<WidgetData0 | WidgetData1> */
export interface SpreadRecordForNonDiscriminatedUnion
  extends Record<string, any> {
  /** The name property */
  name: string;
}

export function spreadRecordForNonDiscriminatedUnionSerializer(
  item: SpreadRecordForNonDiscriminatedUnion,
): SpreadRecordForNonDiscriminatedUnionRest {
  return {
    ...item,
    name: item["name"],
  };
}

/** The model spread Record<WidgetData> */
export interface SpreadRecordForDiscriminatedUnion extends Record<string, any> {
  /** The name property */
  name: string;
}

export function spreadRecordForDiscriminatedUnionSerializer(
  item: SpreadRecordForDiscriminatedUnion,
): SpreadRecordForDiscriminatedUnionRest {
  return {
    ...item,
    name: item["name"],
  };
}

/** The model spread Record<string | float32> */
export interface SpreadRecordForUnion extends Record<string, any> {
  /** The name property */
  flag: boolean;
}

export function spreadRecordForUnionSerializer(
  item: SpreadRecordForUnion,
): SpreadRecordForUnionRest {
  return {
    ...item,
    flag: item["flag"],
  };
}

/** The model spread Record<string> and Record<float32> */
export interface MultipleSpreadRecord extends Record<string, any> {
  /** The name property */
  flag: boolean;
}

export function multipleSpreadRecordSerializer(
  item: MultipleSpreadRecord,
): MultipleSpreadRecordRest {
  return {
    ...item,
    flag: item["flag"],
  };
}

/** model for record */
export interface ModelForRecord {
  /** The state property */
  state: string;
}

export function modelForRecordSerializer(
  item: ModelForRecord,
): ModelForRecordRest {
  return {
    state: item["state"],
  };
}

/** The model spread Record<ModelForRecord[]> with the different known property type */
export interface DifferentSpreadModelArrayRecord extends Record<string, any> {
  knownProp: string;
}

export function differentSpreadModelArrayRecordSerializer(
  item: DifferentSpreadModelArrayRecord,
): DifferentSpreadModelArrayRecordRest {
  return {
    ...item,
    knownProp: item["knownProp"],
  };
}

/** The model extends from a model that spread Record<ModelForRecord[]> with the different known property type */
export interface DifferentSpreadModelArrayDerived
  extends DifferentSpreadModelArrayRecord {
  /** The index property */
  derivedProp: ModelForRecord[];
}

export function differentSpreadModelArrayDerivedSerializer(
  item: DifferentSpreadModelArrayDerived,
): DifferentSpreadModelArrayDerivedRest {
  return {
    ...item,
    knownProp: item["knownProp"],
    derivedProp: item["derivedProp"].map(modelForRecordSerializer),
  };
}

/** The model spread Record<ModelForRecord> with the different known property type */
export interface DifferentSpreadModelRecord extends Record<string, any> {
  knownProp: string;
}

export function differentSpreadModelRecordSerializer(
  item: DifferentSpreadModelRecord,
): DifferentSpreadModelRecordRest {
  return {
    ...item,
    knownProp: item["knownProp"],
  };
}

/** The model extends from a model that spread Record<ModelForRecord> with the different known property type */
export interface DifferentSpreadModelDerived
  extends DifferentSpreadModelRecord {
  /** The index property */
  derivedProp: ModelForRecord;
}

export function differentSpreadModelDerivedSerializer(
  item: DifferentSpreadModelDerived,
): DifferentSpreadModelDerivedRest {
  return {
    ...item,
    knownProp: item["knownProp"],
    derivedProp: modelForRecordSerializer(item.derivedProp),
  };
}

/** The model spread Record<float32> with the different known property type */
export interface DifferentSpreadFloatRecord extends Record<string, any> {
  /** The id property */
  name: string;
}

export function differentSpreadFloatRecordSerializer(
  item: DifferentSpreadFloatRecord,
): DifferentSpreadFloatRecordRest {
  return {
    ...item,
    name: item["name"],
  };
}

/** The model extends from a model that spread Record<float32> with the different known property type */
export interface DifferentSpreadFloatDerived
  extends DifferentSpreadFloatRecord {
  /** The index property */
  derivedProp: number;
}

export function differentSpreadFloatDerivedSerializer(
  item: DifferentSpreadFloatDerived,
): DifferentSpreadFloatDerivedRest {
  return {
    ...item,
    name: item["name"],
    derivedProp: item["derivedProp"],
  };
}

/** The model spread Record<string> with the different known property type */
export interface DifferentSpreadStringRecord extends Record<string, any> {
  /** The name property */
  id: number;
}

export function differentSpreadStringRecordSerializer(
  item: DifferentSpreadStringRecord,
): DifferentSpreadStringRecordRest {
  return {
    ...item,
    id: item["id"],
  };
}

/** The model extends from a model that spread Record<string> with the different known property type */
export interface DifferentSpreadStringDerived
  extends DifferentSpreadStringRecord {
  /** The index property */
  derivedProp: string;
}

export function differentSpreadStringDerivedSerializer(
  item: DifferentSpreadStringDerived,
): DifferentSpreadStringDerivedRest {
  return {
    ...item,
    id: item["id"],
    derivedProp: item["derivedProp"],
  };
}

export interface SpreadModelArrayRecord
  extends Record<string, ModelForRecord[]> {
  knownProp: ModelForRecord[];
}

export function spreadModelArrayRecordSerializer(
  item: SpreadModelArrayRecord,
): SpreadModelArrayRecordRest {
  return {
    ...item,
    knownProp: item["knownProp"].map(modelForRecordSerializer),
  };
}

/** The model is from Record<ModelForRecord[]> type. */
export interface IsModelArrayAdditionalProperties
  extends Record<string, ModelForRecord[]> {
  knownProp: ModelForRecord[];
}

export function isModelArrayAdditionalPropertiesSerializer(
  item: IsModelArrayAdditionalProperties,
): IsModelArrayAdditionalPropertiesRest {
  return {
    ...item,
    knownProp: item["knownProp"].map(modelForRecordSerializer),
  };
}

/** The model extends from Record<ModelForRecord[]> type. */
export interface ExtendsModelArrayAdditionalProperties
  extends Record<string, ModelForRecord[]> {
  knownProp: ModelForRecord[];
}

export function extendsModelArrayAdditionalPropertiesSerializer(
  item: ExtendsModelArrayAdditionalProperties,
): ExtendsModelArrayAdditionalPropertiesRest {
  return {
    ...item,
    knownProp: item["knownProp"].map(modelForRecordSerializer),
  };
}

/** The model spread Record<ModelForRecord> with the same known property type */
export interface SpreadModelRecord extends Record<string, ModelForRecord> {
  knownProp: ModelForRecord;
}

export function spreadModelRecordSerializer(
  item: SpreadModelRecord,
): SpreadModelRecordRest {
  return {
    ...item,
    knownProp: modelForRecordSerializer(item.knownProp),
  };
}

/** The model is from Record<ModelForRecord> type. */
export interface IsModelAdditionalProperties
  extends Record<string, ModelForRecord> {
  knownProp: ModelForRecord;
}

export function isModelAdditionalPropertiesSerializer(
  item: IsModelAdditionalProperties,
): IsModelAdditionalPropertiesRest {
  return {
    ...item,
    knownProp: modelForRecordSerializer(item.knownProp),
  };
}

/** The model extends from Record<ModelForRecord> type. */
export interface ExtendsModelAdditionalProperties
  extends Record<string, ModelForRecord> {
  knownProp: ModelForRecord;
}

export function extendsModelAdditionalPropertiesSerializer(
  item: ExtendsModelAdditionalProperties,
): ExtendsModelAdditionalPropertiesRest {
  return {
    ...item,
    knownProp: modelForRecordSerializer(item.knownProp),
  };
}

/** The model spread Record<float32> with the same known property type */
export interface SpreadFloatRecord extends Record<string, number> {
  /** The id property */
  id: number;
}

export function spreadFloatRecordSerializer(
  item: SpreadFloatRecord,
): SpreadFloatRecordRest {
  return {
    ...item,
    id: item["id"],
  };
}

/** The model is from Record<float32> type. */
export interface IsFloatAdditionalProperties extends Record<string, number> {
  /** The id property */
  id: number;
}

export function isFloatAdditionalPropertiesSerializer(
  item: IsFloatAdditionalProperties,
): IsFloatAdditionalPropertiesRest {
  return {
    ...item,
    id: item["id"],
  };
}

/** The model extends from Record<float32> type. */
export interface ExtendsFloatAdditionalProperties
  extends Record<string, number> {
  /** The id property */
  id: number;
}

export function extendsFloatAdditionalPropertiesSerializer(
  item: ExtendsFloatAdditionalProperties,
): ExtendsFloatAdditionalPropertiesRest {
  return {
    ...item,
    id: item["id"],
  };
}

/** The model spread Record<string> with the same known property type */
export interface SpreadStringRecord extends Record<string, string> {
  /** The name property */
  name: string;
}

export function spreadStringRecordSerializer(
  item: SpreadStringRecord,
): SpreadStringRecordRest {
  return {
    ...item,
    name: item["name"],
  };
}

/** The model is from Record<string> type. */
export interface IsStringAdditionalProperties extends Record<string, string> {
  /** The name property */
  name: string;
}

export function isStringAdditionalPropertiesSerializer(
  item: IsStringAdditionalProperties,
): IsStringAdditionalPropertiesRest {
  return {
    ...item,
    name: item["name"],
  };
}

/** The model extends from Record<string> type. */
export interface ExtendsStringAdditionalProperties
  extends Record<string, string> {
  /** The name property */
  name: string;
}

export function extendsStringAdditionalPropertiesSerializer(
  item: ExtendsStringAdditionalProperties,
): ExtendsStringAdditionalPropertiesRest {
  return {
    ...item,
    name: item["name"],
  };
}

/** The model is Record<unknown> with a discriminator. */
export interface IsUnknownAdditionalPropertiesDiscriminated
  extends Record<string, any> {
  /** The name property */
  name: string;
  /** the discriminator possible values: derived */
  kind: string;
}

export function isUnknownAdditionalPropertiesDiscriminatedUnionSerializer(
  item: IsUnknownAdditionalPropertiesDiscriminatedUnion,
) {
  switch (item.kind) {
    case "derived":
      return isUnknownAdditionalPropertiesDiscriminatedDerivedSerializer(
        item as IsUnknownAdditionalPropertiesDiscriminatedDerived,
      );

    default:
      return isUnknownAdditionalPropertiesDiscriminatedSerializer(item);
  }
}

export function isUnknownAdditionalPropertiesDiscriminatedSerializer(
  item: IsUnknownAdditionalPropertiesDiscriminatedUnion,
): IsUnknownAdditionalPropertiesDiscriminatedRest {
  return {
    ...item,
    name: item["name"],
    kind: item["kind"],
  };
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

export function isUnknownAdditionalPropertiesDiscriminatedDerivedSerializer(
  item: IsUnknownAdditionalPropertiesDiscriminatedDerived,
): IsUnknownAdditionalPropertiesDiscriminatedDerivedRest {
  return {
    ...item,
    name: item["name"],
    kind: item["kind"],
    index: item["index"],
    age: item["age"],
  };
}

/** The model is from Record<unknown> type. */
export interface IsUnknownAdditionalProperties extends Record<string, any> {
  /** The name property */
  name: string;
}

export function isUnknownAdditionalPropertiesSerializer(
  item: IsUnknownAdditionalProperties,
): IsUnknownAdditionalPropertiesRest {
  return {
    ...item,
    name: item["name"],
  };
}

/** The model extends from a type that is Record<unknown> type */
export interface IsUnknownAdditionalPropertiesDerived
  extends IsUnknownAdditionalProperties {
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

export function isUnknownAdditionalPropertiesDerivedSerializer(
  item: IsUnknownAdditionalPropertiesDerived,
): IsUnknownAdditionalPropertiesDerivedRest {
  return {
    ...item,
    name: item["name"],
    index: item["index"],
    age: item["age"],
  };
}

/** The model extends from Record<unknown> with a discriminator. */
export interface ExtendsUnknownAdditionalPropertiesDiscriminated
  extends Record<string, any> {
  /** The name property */
  name: string;
  /** the discriminator possible values: derived */
  kind: string;
}

export function extendsUnknownAdditionalPropertiesDiscriminatedUnionSerializer(
  item: ExtendsUnknownAdditionalPropertiesDiscriminatedUnion,
) {
  switch (item.kind) {
    case "derived":
      return extendsUnknownAdditionalPropertiesDiscriminatedDerivedSerializer(
        item as ExtendsUnknownAdditionalPropertiesDiscriminatedDerived,
      );

    default:
      return extendsUnknownAdditionalPropertiesDiscriminatedSerializer(item);
  }
}

export function extendsUnknownAdditionalPropertiesDiscriminatedSerializer(
  item: ExtendsUnknownAdditionalPropertiesDiscriminatedUnion,
): ExtendsUnknownAdditionalPropertiesDiscriminatedRest {
  return {
    ...item,
    name: item["name"],
    kind: item["kind"],
  };
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

export function extendsUnknownAdditionalPropertiesDiscriminatedDerivedSerializer(
  item: ExtendsUnknownAdditionalPropertiesDiscriminatedDerived,
): ExtendsUnknownAdditionalPropertiesDiscriminatedDerivedRest {
  return {
    ...item,
    name: item["name"],
    kind: item["kind"],
    index: item["index"],
    age: item["age"],
  };
}

/** The model extends from Record<unknown> type. */
export interface ExtendsUnknownAdditionalProperties
  extends Record<string, any> {
  /** The name property */
  name: string;
}

export function extendsUnknownAdditionalPropertiesSerializer(
  item: ExtendsUnknownAdditionalProperties,
): ExtendsUnknownAdditionalPropertiesRest {
  return {
    ...item,
    name: item["name"],
  };
}

/** The model extends from a type that extends from Record<unknown>. */
export interface ExtendsUnknownAdditionalPropertiesDerived
  extends ExtendsUnknownAdditionalProperties {
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

export function extendsUnknownAdditionalPropertiesDerivedSerializer(
  item: ExtendsUnknownAdditionalPropertiesDerived,
): ExtendsUnknownAdditionalPropertiesDerivedRest {
  return {
    ...item,
    name: item["name"],
    index: item["index"],
    age: item["age"],
  };
}

/** Alias for WidgetData */
export type WidgetData = WidgetData0 | WidgetData1;

export function widgetDataSerializer(item: WidgetData) {
  switch (item.kind) {
    case "kind0":
      return widgetData0Serializer(item as WidgetData0);

    case "kind1":
      return widgetData1Serializer(item as WidgetData1);

    default:
      return item;
  }
}

/** Alias for IsUnknownAdditionalPropertiesDiscriminatedUnion */
export type IsUnknownAdditionalPropertiesDiscriminatedUnion =
  | IsUnknownAdditionalPropertiesDiscriminatedDerived
  | IsUnknownAdditionalPropertiesDiscriminated;
/** Alias for ExtendsUnknownAdditionalPropertiesDiscriminatedUnion */
export type ExtendsUnknownAdditionalPropertiesDiscriminatedUnion =
  | ExtendsUnknownAdditionalPropertiesDiscriminatedDerived
  | ExtendsUnknownAdditionalPropertiesDiscriminated;
