// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SchemaType } from "@azure-tools/codemodel";

/**
 * Details of a typed value union, transformed from ChoiceSchema.
 */
export interface UnionDetails {
  name: string;
  description: string;
  serializedName: string;
  values: string[];
  schemaType: SchemaType;
}
