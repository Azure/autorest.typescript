import {
  AnyObjectSchema,
  ArraySchema,
  ChoiceSchema,
  ConstantSchema,
  DictionarySchema,
  isObjectSchema,
  ObjectSchema,
  PrimitiveSchema,
  Schema,
  SchemaType
} from "@autorest/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { NameType, normalizeName } from "../utils/nameUtils";

/**
 * Get the Typescript type to generate from an Schema
 * @param schema - Schema to find element type for
 * @param importedModels - Set to track models to import
 */
export function getElementType(
  schema: Schema,
  importedModels = new Set<string>()
): string {
  if (isArraySchema(schema)) {
    // Recursively find out the type for the elements in the array.
    return `Array<${getElementType(schema.elementType, importedModels)}>`;
  }

  if (isPrimitiveSchema(schema)) {
    return `${primitiveSchemaToType(schema)}`;
  }

  if (isAnyObjectSchema(schema)) {
    return `Record<string, unknown>`;
  }

  if (isObjectSchema(schema)) {
    const { name } = getObjectInfo(schema);
    importedModels.add(name);
    return `${name}`;
  }

  if (isDictionarySchema(schema)) {
    return `Record<string, ${getElementType(
      schema.elementType,
      importedModels
    )}>`;
  }

  throw new Error(`Don't know how to get type for schema ${schema.type}`);
}

/**
 * Determine whether or not a schema maps to a Typescript primitive type.
 */
function isPrimitiveSchema(schema: Schema): boolean {
  return [
    SchemaType.Binary,
    SchemaType.String,
    SchemaType.Number,
    SchemaType.Integer,
    SchemaType.Date,
    SchemaType.DateTime,
    SchemaType.Any,
    SchemaType.Boolean,
    SchemaType.ByteArray,
    SchemaType.Char,
    SchemaType.Credential,
    SchemaType.Duration,
    SchemaType.Time,
    SchemaType.UnixTime,
    SchemaType.Uri,
    SchemaType.Uuid,
    SchemaType.Unknown,
    SchemaType.Constant,
    SchemaType.Choice,
    SchemaType.SealedChoice
  ].includes(schema.type);
}

/**
 * Given a primitive schema, determines the Typescript type to generate
 * @param schema - Schema to generate a type for
 * @returns a string with the Typescript type to generate for the given schema
 */
function primitiveSchemaToType(schema: PrimitiveSchema): string {
  switch (schema.type) {
    case SchemaType.Any:
      return "any";
    case SchemaType.Integer:
    case SchemaType.Number:
      return "number";
    case SchemaType.Date:
    case SchemaType.Time:
    case SchemaType.DateTime:
      return "Date";
    case SchemaType.Char:
      return "string";
    case SchemaType.Binary:
    case SchemaType.Duration:
    case SchemaType.Credential:
    case SchemaType.UnixTime:
    case SchemaType.Uri:
    case SchemaType.Uuid:
    case SchemaType.String:
      return "string";
    case SchemaType.Boolean:
      return "boolean";
    case SchemaType.ByteArray:
      return "Uint8Array";
    case SchemaType.Choice:
    case SchemaType.SealedChoice:
      return (schema as ChoiceSchema).choices
        .map(choice => `"${choice.value}"`)
        .join(" | ");
    case SchemaType.Constant:
      const value = (schema as ConstantSchema).value.value;
      return typeof value === "string" ? `"${value}"` : value;
  }

  throw new Error(`Unknown primitive schema ${schema.type}`);
}

/**
 * Gets object schema metadata
 * @param schema - Schema definition of an object
 */
function getObjectInfo(schema: ObjectSchema) {
  const name = normalizeName(
    getLanguageMetadata(schema.language).name,
    NameType.Interface,
    true
  );

  return {
    name
  };
}

function isArraySchema(schema: Schema): schema is ArraySchema {
  return schema.type === SchemaType.Array;
}

function isAnyObjectSchema(schema: Schema): schema is AnyObjectSchema {
  return schema.type === SchemaType.AnyObject;
}
export function isDictionarySchema(schema: Schema): schema is DictionarySchema {
  return schema.type === SchemaType.Dictionary;
}

export function isConstantSchema(schema: Schema): schema is ConstantSchema {
  return schema.type === SchemaType.Constant;
}
