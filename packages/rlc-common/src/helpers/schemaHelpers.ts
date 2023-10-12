// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ObjectSchema,
  RLCModel,
  Schema,
  SchemaContext
} from "../interfaces.js";

export function isDictionarySchema(schema: Schema) {
  if (schema.type === "dictionary") {
    return true;
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

export function buildSchemaObjectMap(model: RLCModel) {
  // include interfaces
  const map = new Map<string, Schema>();
  const allSchemas = (model.schemas ?? []).filter(
    (o) =>
      isObjectSchema(o) &&
      (o as ObjectSchema).usage?.some((u) => [SchemaContext.Input].includes(u))
  );
  allSchemas.forEach((o) => {
    map.set(o.name, o);
  });

  return map;
}
