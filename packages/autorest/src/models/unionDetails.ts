// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SchemaType } from "@autorest/codemodel";

/**
 * Details of a typed value union, transformed from ChoiceSchema.
 */
export interface UnionDetails {
  name: string;
  description: string;
  serializedName: string;
  properties: UnionElement[];
  schemaType: SchemaType;
  itemType?: SchemaType;
}

export interface UnionElement {
  name: string;
  value: string;
  description?: string;
}
