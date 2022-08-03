import {
  CodeModel,
  ObjectSchema as M4ObjectSchema,
  Property,
  SchemaContext,
  SchemaUsage
} from "@autorest/codemodel";
import { RLCModel, Schema, ObjectSchema } from "@azure-tools/rlc-codegen";
import { getAutorestOptions } from "../autorestSession";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getTypeForSchema } from "../utils/schemaHelpers";
import {
  primitiveSchemaToType,
  isPrimitiveSchema,
  getElementType
} from "./schemaHelpers";

export function transform(model: CodeModel): RLCModel {
  const { packageDetails, srcPath } = getAutorestOptions();
  const rlcModel = {
    libraryName: packageDetails.name,
    srcPath,
    paths: {},
    schemas: transformSchemas(model)
  };
  return rlcModel;
}

export function transformSchemas(model: CodeModel): Schema[] {
  const schemas: Schema[] = [];

  model.schemas.objects?.forEach(obj => {
    const item: Schema | ObjectSchema = transformObject(obj);
    schemas.push(item);
  });
  return schemas;
}

export function transformObject(obj: M4ObjectSchema): ObjectSchema {
  const resultSchema: ObjectSchema = transformBasicSchema(obj);
  if (obj.discriminatorValue) {
    resultSchema.discriminatorValue = obj.discriminatorValue;
  }
  if (obj.discriminator) {
    resultSchema.discriminator = transformObject(
      obj.discriminator?.immediate[0] as M4ObjectSchema
    );
  }
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
      all: obj.parents.all.map(child =>
        transformBasicSchema(child as M4ObjectSchema)
      ),
      immediate: obj.parents.all.map(child =>
        transformBasicSchema(child as M4ObjectSchema)
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
    result[getLanguageMetadata(prop.language).name] = transformProperty(
      prop,
      schemaUsage
    );
  });
  return result;
}

export function transformBasicSchema(obj: any) {
  return {
    name: getLanguageMetadata(obj.language).name,
    type: obj.type,
    description: getLanguageMetadata(obj.language).description,
    default: obj.defaultValue,
    required: obj.required ?? false,
    readOnly: obj.readOnly ?? false,
    usage: obj.usage
  };
}

export function transformProperty(
  obj: Property,
  schemaUsage?: SchemaContext[]
) {
  const usage = schemaUsage ??
    (obj.schema as M4ObjectSchema).usage ?? [SchemaContext.Input];
  let type = undefined;
  let typeName = undefined;
  if (isPrimitiveSchema(obj.schema)) {
    type = primitiveSchemaToType(obj.schema, usage);
  } else {
    typeName = getElementType(obj.schema, [SchemaContext.Input]),
    type = obj.schema.type;
  }
  return {
    name: getLanguageMetadata(obj.language).name,
    type,
    typeName,
    description: getLanguageMetadata(obj.language).description,
    default: obj.clientDefaultValue,
    required: obj.required ?? false,
    readOnly: obj.readOnly ?? false,
    usage
  };
}
