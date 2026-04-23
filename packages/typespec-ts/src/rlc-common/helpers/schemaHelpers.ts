// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ArraySchema,
  ObjectSchema,
  RLCModel,
  Schema,
  SchemaContext
} from "../interfaces.js";

export interface IsDictionaryOptions {
  filterEmpty?: boolean;
}

export function isArraySchema(schema: Schema): schema is ArraySchema {
  return (
    schema.type === "array" || typeof (schema as any).items !== "undefined"
  );
}

export function isDictionarySchema(
  schema: Schema,
  options: IsDictionaryOptions = {}
) {
  if (schema.type === "dictionary") {
    if (!options.filterEmpty || (options.filterEmpty && !schema.typeName)) {
      return true;
    }
  }
  return false;
}

export function isObjectSchema(schema: Schema): schema is ObjectSchema {
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
