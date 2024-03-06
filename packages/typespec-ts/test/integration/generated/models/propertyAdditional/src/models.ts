// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The model extends from Record<unknown> type. */
export interface ExtendsUnknownAdditionalProperties
  extends Record<string, unknown> {
  /** The name property */
  name: string;
}

/** The model extends from Record<unknown> with a discriminator. */
export interface ExtendsUnknownAdditionalPropertiesDiscriminatedParent
  extends Record<string, unknown> {
  /** The name property */
  name: string;
  kind: string;
}

/** The derived discriminated type */
export interface ExtendsUnknownAdditionalPropertiesDiscriminatedDerived
  extends ExtendsUnknownAdditionalPropertiesDiscriminatedParent {
  kind: "derived";
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model extends from a type that extends from Record<unknown>. */
export interface ExtendsUnknownAdditionalPropertiesDerived
  extends ExtendsUnknownAdditionalProperties {
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model is from Record<unknown> type. */
export interface IsUnknownAdditionalProperties extends Record<string, unknown> {
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

/** The model is Record<unknown> with a discriminator. */
export interface IsUnknownAdditionalPropertiesDiscriminatedParent
  extends Record<string, unknown> {
  /** The name property */
  name: string;
  kind: string;
}

/** The derived discriminated type */
export interface IsUnknownAdditionalPropertiesDiscriminatedDerived
  extends IsUnknownAdditionalPropertiesDiscriminatedParent {
  kind: "derived";
  /** The index property */
  index: number;
  /** The age property */
  age?: number;
}

/** The model extends from Record<string> type. */
export interface ExtendsStringAdditionalProperties
  extends Record<string, string> {
  /** The name property */
  name: string;
}

/** The model is from Record<string> type. */
export interface IsStringAdditionalProperties extends Record<string, string> {
  /** The name property */
  name: string;
}

/** The model extends from Record<float32> type. */
export interface ExtendsFloatAdditionalProperties
  extends Record<string, number> {
  /** The id property */
  id: number;
}

/** The model is from Record<float32> type. */
export interface IsFloatAdditionalProperties extends Record<string, number> {
  /** The id property */
  id: number;
}

/** The model extends from Record<ModelForRecord> type. */
export interface ExtendsModelAdditionalProperties
  extends Record<string, ModelForRecord> {}

/** model for record */
export interface ModelForRecord {
  /** The state property */
  state: string;
}

/** The model is from Record<ModelForRecord> type. */
export interface IsModelAdditionalProperties
  extends Record<string, ModelForRecord> {}

/** The model extends from Record<ModelForRecord[]> type. */
export interface ExtendsModelArrayAdditionalProperties
  extends Record<string, Array<ModelForRecord>> {}

/** The model is from Record<ModelForRecord[]> type. */
export interface IsModelArrayAdditionalProperties
  extends Record<string, Array<ModelForRecord>> {}

/** The model extends from Record<unknown> with a discriminator. */
export type ExtendsUnknownAdditionalPropertiesDiscriminated =
  | ExtendsUnknownAdditionalPropertiesDiscriminatedParent
  | ExtendsUnknownAdditionalPropertiesDiscriminatedDerived;
/** The model is Record<unknown> with a discriminator. */
export type IsUnknownAdditionalPropertiesDiscriminated =
  | IsUnknownAdditionalPropertiesDiscriminatedParent
  | IsUnknownAdditionalPropertiesDiscriminatedDerived;
