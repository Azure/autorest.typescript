import {
  CodeModel,
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
import { getLogger } from "../utils/logger";
import { getDataTypes } from "../dataTypes";

const cadlTypes = new Map<SchemaType, string>([
  [SchemaType.Date, "plainDate"],
  [SchemaType.DateTime, "zonedDateTime"],
  [SchemaType.UnixTime, "plainTime"],
  [SchemaType.String, "string"],
  [SchemaType.Time, "plainTime"],
  [SchemaType.Uuid, "string"],
  [SchemaType.ByteArray, "bytes"],
  [SchemaType.Binary, "bytes"],
  [SchemaType.Number, "float32"],
  [SchemaType.Integer, "int32"],
  [SchemaType.Boolean, "boolean"],
  [SchemaType.Credential, "@secret string"],
  [SchemaType.Duration, "duration"],
]);

export function transformObject(
  schema: ObjectSchema,
  codeModel: CodeModel
): CadlObject {
  const cadlTypes = getDataTypes(codeModel);
  let visited: Partial<CadlObject> = cadlTypes.get(schema) as CadlObject;
  if (visited) {
    return visited as CadlObject;
  }

  const logger = getLogger("transformOperationGroup");

  logger.info(`Transforming object ${schema.language.default.name}`);

  const name = schema.language.default.name.replace(/-/g, "_");
  const doc = schema.language.default.description;

  // Marking as visited before processing properties to avoid infinite recursion
  // when transforming properties that reference this object.
  visited = { name, doc };
  cadlTypes.set(schema, visited as any);

  const properties = (schema.properties ?? [])
    .filter((p) => !p.isDiscriminator)
    .map((p) => transformObjectProperty(p, codeModel));

  let ownDiscriminator = getOwnDiscriminator(schema);
  if (!ownDiscriminator) {
    const discriminatorProperty = getDiscriminator(schema);
    discriminatorProperty && properties.push(discriminatorProperty);
  }
  const updatedVisited: CadlObject = {
    name,
    doc,
    kind: "object",
    properties,
    parents: getParents(schema),
    discriminator: ownDiscriminator?.serializedName,
  };

  cadlTypes.set(schema, updatedVisited);
  return updatedVisited;
}

function getOwnDiscriminator(schema: ObjectSchema): Property | undefined {
  return schema.discriminator?.property;
}

function getDiscriminator(
  schema: ObjectSchema
): CadlObjectProperty | undefined {
  if (!schema.discriminatorValue) {
    return undefined;
  }
  const { serializedName: name, language } = getDiscriminatorProperty(schema);
  const type = `"${schema.discriminatorValue}"`;

  return {
    isOptional: false,
    name,
    type,
    kind: "property",
    doc: language.default.description,
  };
}

function getDiscriminatorProperty(schema: ObjectSchema): Property {
  const logger = getLogger("getDiscriminatorProperty");

  logger.info(
    `Getting discriminator property for ${schema.language.default.name}`
  );

  if (schema.discriminator?.property) {
    return schema.discriminator.property;
  }

  if (!schema.parents?.immediate || schema.parents.immediate.length === 0) {
    throw new Error("No discriminator property found");
  }

  for (const parent of schema.parents.immediate as ObjectSchema[]) {
    const discriminator = getDiscriminatorProperty(parent);

    if (discriminator) {
      return discriminator;
    }
  }

  throw new Error("No discriminator property found");
}

export function transformObjectProperty(
  propertySchema: Property,
  codeModel: CodeModel
): CadlObjectProperty {
  const name = propertySchema.serializedName;
  const doc = propertySchema.language.default.description;
  if (isObjectSchema(propertySchema.schema)) {
    const dataTypes = getDataTypes(codeModel);
    let visited = dataTypes.get(propertySchema.schema) as CadlObject;
    if (!visited) {
      visited = transformObject(propertySchema.schema, codeModel);
      dataTypes.set(propertySchema.schema, visited);
    }

    return {
      kind: "property",
      name: name,
      doc: doc,
      isOptional: !propertySchema.required,
      type: visited.name,
    };
  }

  const logger = getLogger("getDiscriminatorProperty");

  logger.info(
    `Transforming property ${propertySchema.language.default.name} of type ${propertySchema.schema.type}`
  );
  return {
    kind: "property",
    doc,
    name,
    isOptional: propertySchema.required === false,
    type: getCadlType(propertySchema.schema),
  };
}

function getParents(schema: ObjectSchema): string[] {
  const immediateParents = schema.parents?.immediate ?? [];

  return immediateParents
    .filter((p) => p.language.default.name !== schema.language.default.name)
    .map((p) => p.language.default.name);
}

export function getCadlType(schema: Schema): string {
  const schemaType = schema.type;

  if (isConstantSchema(schema)) {
    return `${transformValue(schema.value.value as any)}`;
  }

  if (isArraySchema(schema)) {
    const elementType = getCadlType(schema.elementType);
    return `${elementType}[]`;
  }

  if (isObjectSchema(schema)) {
    return schema.language.default.name.replace(/-/g, "_");
  }

  if (isChoiceSchema(schema) || isSealedChoiceSchema(schema)) {
    return schema.language.default.name;
  }

  if (isDictionarySchema(schema)) {
    return `Record<${getCadlType(schema.elementType)}>`;
  }

  const cadlType = cadlTypes.get(schemaType);

  if (!cadlType) {
    throw new Error(`Unknown type ${schema.type}`);
  }

  return cadlType;
}
