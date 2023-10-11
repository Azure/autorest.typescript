// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Schema } from "../interfaces.js";

export function isDictionarySchema(
  schema: Schema,
  filterEmpty: boolean = false
) {
  if (schema.type === "dictionary") {
    if (!filterEmpty || (filterEmpty && !schema.typeName)) {
      return true;
    }
  }
  return false;
}

export function isObjectSchema(schema: Schema) {
  if (schema.type === "object") {
    return true;
  }
  return false;
}

export function isConstantSchema(schema: Schema) {
  if (schema.type === "constant") {
    return true;
  }
  return false;
}
