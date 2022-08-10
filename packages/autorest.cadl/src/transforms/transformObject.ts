import {
  isObjectSchema,
  ObjectSchema,
  Property,
  Schema,
  SchemaType,
} from "@autorest/codemodel";
import { CadlObject, CadlObjectProperty } from "../interfaces";
import {
  isArraySchema,
  isChoiceSchema,
  isConstantSchema,
  isDictionarySchema,
  isSealedChoiceSchema,
} from "../utils/schemas";
import { transformValue } from "../utils/values";

const cadlTypes = new Map<SchemaType, string>([
  [SchemaType.Date, "plainDate"],
  [SchemaType.DateTime, "zonedDateTime"],
  [SchemaType.String, "string"],
  [SchemaType.Time, "plainTime"],
  [SchemaType.Uuid, "string"],
  [SchemaType.ByteArray, "bytes"],
  [SchemaType.Binary, "bytes"],
  [SchemaType.Number, "numeric"],
  [SchemaType.Integer, "int32"],
  [SchemaType.Boolean, "boolean"],
]);

export function transformObject(schema: ObjectSchema): CadlObject {
  const name = schema.language.default.name;
  const docs = schema.language.default.description;

  return {
    doc: docs,
    name,
    properties: (schema.properties ?? []).map(transformObjectProperty),
  };
}

export function transformObjectProperty(
  propertySchema: Property
): CadlObjectProperty {
  const name = propertySchema.language.default.name;
  const doc = propertySchema.language.default.description;

  return {
    doc,
    name,
    isOptional: propertySchema.required === false,
    type: getCadlType(propertySchema.schema),
  };
}

function getCadlType(schema: Schema): string {
  const schemaType = schema.type;

  if (isConstantSchema(schema)) {
    return `${transformValue(schema.value.value as any)}`;
  }

  if (isArraySchema(schema)) {
    const elementType = getCadlType(schema.elementType);
    return `${elementType}[]`;
  }

  if (isObjectSchema(schema)) {
    return schema.language.default.name;
  }

  if (isChoiceSchema(schema) || isSealedChoiceSchema(schema)) {
    return schema.language.default.name;
  }

  if (isDictionarySchema(schema)) {
    return `map<${getCadlType(schema.elementType)}>`;
  }

  const cadlType = cadlTypes.get(schemaType);

  if (!cadlType) {
    throw new Error(`Unknown type ${schema.type}`);
  }

  return cadlType;
}
