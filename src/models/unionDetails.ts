// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Details of a typed value union, transformed from ChoiceSchema.
 */
export interface UnionDetails {
  name: string;
  description: string;
  serializedName: string;
  values: string[];
}
