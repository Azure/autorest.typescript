import { Schema } from "../interfaces";

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
