import {
  CodeModel,
  ObjectSchema as M4ObjectSchema,
  Property
} from "@autorest/codemodel";
import { RLCModel, Schema, ObjectSchema } from "@azure-tools/rlc-codegen";
import { getAutorestOptions } from "../autorestSession";
import { getLanguageMetadata } from "../utils/languageHelpers";

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
  let resultSchema: ObjectSchema = transformBasicSchema(obj);
  if (obj.discriminatorValue) {
    resultSchema.discriminatorValue = obj.discriminatorValue;
  }
  if (obj.discriminator) {
    resultSchema.discriminator = transformObject(
      obj.discriminator?.immediate[0] as M4ObjectSchema
    );
  }
  if (obj.properties) {
    resultSchema.properties = transformObjectProperties(obj.properties);
  }
  if (obj.children) {
    resultSchema.children = {
      all: obj.children.all.map(child =>
        transformObject(child as M4ObjectSchema)
      ),
      immediate: obj.children.immediate.map(child =>
        transformObject(child as M4ObjectSchema)
      )
    };
  }
  if (obj.parents) {
    resultSchema.parents = {
      all: obj.parents.all.map(child =>
        transformObject(child as M4ObjectSchema)
      ),
      immediate: obj.parents.all.map(child =>
        transformObject(child as M4ObjectSchema)
      )
    };
  }
  return resultSchema;
}

export function transformObjectProperties(
  objectProperties: Property[]
): Record<string, ObjectSchema> {
  const result: Record<string, ObjectSchema> = {};
  objectProperties.forEach(prop => {
    result[getLanguageMetadata(prop.language).name] = transformObject(
      prop.schema as M4ObjectSchema
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
