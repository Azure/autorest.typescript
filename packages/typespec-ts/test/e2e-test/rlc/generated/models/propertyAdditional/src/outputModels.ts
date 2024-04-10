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

/** The model extends from Record<ModelForRecord> type. */
export interface ExtendsModelAdditionalPropertiesOutput
  extends Record<string, ModelForRecordOutput> {}

/** model for record */
export interface ModelForRecordOutput {
  /** The state property */
  state: string;
}

/** The model is from Record<ModelForRecord> type. */
export interface IsModelAdditionalPropertiesOutput
  extends Record<string, ModelForRecordOutput> {}

/** The model extends from Record<ModelForRecord[]> type. */
export interface ExtendsModelArrayAdditionalPropertiesOutput
  extends Record<string, Array<ModelForRecordOutput>> {}

/** The model is from Record<ModelForRecord[]> type. */
export interface IsModelArrayAdditionalPropertiesOutput
  extends Record<string, Array<ModelForRecordOutput>> {}

/** The model extends from Record<unknown> with a discriminator. */
export type ExtendsUnknownAdditionalPropertiesDiscriminatedOutput =
  | ExtendsUnknownAdditionalPropertiesDiscriminatedOutputParent
  | ExtendsUnknownAdditionalPropertiesDiscriminatedDerivedOutput;
/** The model is Record<unknown> with a discriminator. */
export type IsUnknownAdditionalPropertiesDiscriminatedOutput =
  | IsUnknownAdditionalPropertiesDiscriminatedOutputParent
  | IsUnknownAdditionalPropertiesDiscriminatedDerivedOutput;
