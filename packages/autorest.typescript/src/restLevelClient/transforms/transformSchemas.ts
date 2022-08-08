import {
  CodeModel,
  ObjectSchema as M4ObjectSchema,
  Property,
  SchemaContext
} from "@autorest/codemodel";
import { Schema, ObjectSchema } from "@azure-tools/rlc-codegen";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { getDocs } from "../getPropertySignature";
import {
  primitiveSchemaToType,
  isPrimitiveSchema,
  getElementType
} from "../schemaHelpers";

export function transformSchemas(model: CodeModel): Schema[] {
  const schemas: Schema[] = [];

  model.schemas.objects?.forEach(obj => {
    if (obj) {
      const item: Schema | ObjectSchema = transformObject(obj);
      schemas.push(item);
    }
  });
  return schemas;
}

export function transformObject(obj: M4ObjectSchema): ObjectSchema {
  const resultSchema: ObjectSchema = transformBasicSchema(obj);
  if (obj.properties) {
    resultSchema.properties = transformObjectProperties(
      obj.properties,
      resultSchema.usage
    );
  }
  if (obj.children) {
    resultSchema.children = {
      all: obj.children.all.map(child =>
        transformBasicSchema(child as M4ObjectSchema)
      ),
      immediate: obj.children.immediate.map(child =>
        transformBasicSchema(child as M4ObjectSchema)
      )
    };
  }
  if (obj.parents) {
    resultSchema.parents = {
      all: obj.parents.all.map(parent =>
        transformBasicSchema(parent as M4ObjectSchema)
      ),
      immediate: obj.parents.immediate.map(parent =>
        transformBasicSchema(parent as M4ObjectSchema)
      )
    };
  }
  return resultSchema;
}

export function transformObjectProperties(
  objectProperties: Property[],
  schemaUsage?: SchemaContext[]
): Record<string, ObjectSchema> {
  const result: Record<string, ObjectSchema> = {};
  objectProperties.forEach(prop => {
    result[`"${prop.serializedName}"`] = transformProperty(prop, schemaUsage);
  });
  return result;
}

export function transformBasicSchema(obj: any) {
  const { type, typeName, outputTypeName } = getSchemaTypeName(obj);
  const result: ObjectSchema = {
    name: obj.serializedName ?? getLanguageMetadata(obj.language).name,
    type,
    typeName,
    outputTypeName,
    description: getLanguageMetadata(obj.language).description,
    default: obj.defaultValue,
    required: obj.required ?? false,
    readOnly: obj.readOnly ?? false,
    usage: obj.usage
  };
  if (obj.discriminator) {
    result.discriminator = transformBasicSchema(obj.discriminator.property);
    result.isPolyParent = obj.children?.immediate?.length ? true : false;
  }
  if (obj.discriminatorValue) {
    result.discriminatorValue = obj.discriminatorValue;
  }
  return result;
}

function getSchemaTypeName(obj: any) {
  let type = undefined;
  let typeName = undefined;
  let outputTypeName = undefined;
  if (obj.schema && isPrimitiveSchema(obj.schema)) {
    type = primitiveSchemaToType(obj.schema, [SchemaContext.Input]);
    typeName = primitiveSchemaToType(obj.schema, [SchemaContext.Input]);
    outputTypeName = primitiveSchemaToType(obj.schema, [
      SchemaContext.Output,
      SchemaContext.Exception
    ]);
  } else if (obj.schema) {
    typeName = getElementType(obj.schema, [SchemaContext.Input]);
    outputTypeName = getElementType(obj.schema, [
      SchemaContext.Output,
      SchemaContext.Exception
    ]);
    type = obj.schema.type;
  } else {
    type = obj.type;
  }
  return { type, typeName, outputTypeName };
}

export function transformProperty(
  obj: Property,
  schemaUsage?: SchemaContext[]
) {
  const usage = schemaUsage ??
    (obj.schema as M4ObjectSchema).usage ?? [SchemaContext.Input];
  const { type, typeName, outputTypeName } = getSchemaTypeName(obj);
  if (obj.serializedName === "error") {
    obj;
  }
  return {
    name: `"${obj.serializedName}"`,
    type,
    typeName,
    outputTypeName,
    description: getDocs(obj),
    default: obj.clientDefaultValue,
    required: obj.required ?? false,
    readOnly: obj.readOnly ?? false,
    usage
  };
}
