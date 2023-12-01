// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The model extends from Record<unknown> type. */
export interface ExtendsUnknownAdditionalPropertiesOutput
  extends Record<string, any> {
  /** The name property */
  name: string;
}

/** The model is from Record<unknown> type. */
export interface IsUnknownAdditionalPropertiesOutput
  extends Record<string, any> {
  /** The name property */
  name: string;
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
