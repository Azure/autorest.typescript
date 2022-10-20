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
import { getModelDecorators, getPropertyDecorators } from "../utils/decorators";
import { getDiscriminator, getOwnDiscriminator } from "../utils/discriminator";
import { addCorePageAlias } from "../utils/alias";

const cadlTypes = new Map<SchemaType, string>([
  [SchemaType.Date, "plainDate"],
  [SchemaType.DateTime, "zonedDateTime"],
  [SchemaType.UnixTime, "plainTime"],
  [SchemaType.String, "string"],
  [SchemaType.Time, "plainTime"],
  [SchemaType.Uuid, "string"],
  [SchemaType.Uri, "string"],
  [SchemaType.ByteArray, "bytes"],
  [SchemaType.Binary, "bytes"],
  [SchemaType.Number, "float32"],
  [SchemaType.Integer, "int32"],
  [SchemaType.Boolean, "boolean"],
  [SchemaType.Credential, "@secret string"],
  [SchemaType.Duration, "duration"],
  [SchemaType.AnyObject, "object"],
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
    extendedParents: getExtendedParents(schema),
    spreadParents: getSpreadParents(schema),
    decorators: getModelDecorators(schema),
  };

  addCorePageAlias(updatedVisited);
  addFixmes(updatedVisited);

  cadlTypes.set(schema, updatedVisited);
  return updatedVisited;
}

function addFixmes(cadlObject: CadlObject): void {
  cadlObject.fixMe = cadlObject.fixMe ?? [];

  if ((cadlObject.extendedParents ?? []).length > 1) {
    cadlObject.fixMe
      .push(`// FIXME: (multiple-inheritance) Multiple inheritance is not supported in CADL, so this type will only inherit from one parent.
     // this may happen because of multiple parents having discriminator properties.
     // Parents not included ${cadlObject.extendedParents!.join(", ")}`);
  }
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
      isOptional: propertySchema.required !== true,
      type: visited.name,
      decorators: getPropertyDecorators(propertySchema),
      ...(propertySchema.readOnly === true && { visibility: "read" }),
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
    isOptional: propertySchema.required !== true,
    type: getCadlType(propertySchema.schema, codeModel),
    decorators: getPropertyDecorators(propertySchema),
  };
}

function getParents(schema: ObjectSchema): string[] {
  const immediateParents = schema.parents?.immediate ?? [];

  return immediateParents
    .filter((p) => p.language.default.name !== schema.language.default.name)
    .map((p) => p.language.default.name);
}

function getExtendedParents(schema: ObjectSchema): string[] {
  const immediateParents = schema.parents?.immediate ?? [];
  return immediateParents
    .filter((p) => p.language.default.name !== schema.language.default.name)
    .filter((p) => getOwnDiscriminator(p as ObjectSchema))
    .map((p) => p.language.default.name);
}

function getSpreadParents(schema: ObjectSchema): string[] {
  const immediateParents = schema.parents?.immediate ?? [];
  return immediateParents
    .filter((p) => p.language.default.name !== schema.language.default.name)
    .filter((p) => !getOwnDiscriminator(p as ObjectSchema))
    .map((p) => p.language.default.name);
}

export function getCadlType(schema: Schema, codeModel: CodeModel): string {
  const schemaType = schema.type;
  const visited = getDataTypes(codeModel).get(schema);

  if (visited) {
    return visited.name;
  }

  if (isConstantSchema(schema)) {
    return `${transformValue(schema.value.value as any)}`;
  }

  if (isArraySchema(schema)) {
    const elementType = getCadlType(schema.elementType, codeModel);
    return `${elementType}[]`;
  }

  if (isObjectSchema(schema)) {
    return schema.language.default.name.replace(/-/g, "_");
  }

  if (isChoiceSchema(schema) || isSealedChoiceSchema(schema)) {
    return schema.language.default.name.replace(/-/g, "_");
  }

  if (isDictionarySchema(schema)) {
    return `Record<${getCadlType(schema.elementType, codeModel)}>`;
  }

  const cadlType = cadlTypes.get(schemaType);

  if (!cadlType) {
    throw new Error(`Unknown type ${schema.type}`);
  }

  return cadlType;
}
