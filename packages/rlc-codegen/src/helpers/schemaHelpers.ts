import { Schema } from "../interfaces.js";

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
