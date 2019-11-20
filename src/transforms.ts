// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientDetails } from "./models/clientDetails";
import { UnionDetails } from "./models/unionDetails";
import { ModelDetails, PropertyDetails } from "./models/modelDetails";

import {
  CodeModel,
  ObjectSchema,
  Languages,
  Language,
  Schema,
  SchemaType,
  Property,
  ChoiceSchema,
  ChoiceValue,
  ValueSchema,
  ConstantSchema
} from "@azure-tools/codemodel";
import { normalizeName, NameType } from "./utils/nameUtils";

// An array of model names that are "reserved", or shouldn't be used
// verbatim.  Currently any reserved model name will have "Model"
// appended to it in the generated code.
const ReservedModelNames = ["Error"];

export function getLanguageMetadata(languages: Languages): Language {
  return languages.typescript || languages.javascript || languages.default;
}

export interface PropertyTypeDetails {
  typeName: string;
  isConstant: boolean;
  defaultValue?: string;
}

export function getStringForValue(value: any, valueType: ValueSchema): string {
  switch (valueType.type) {
    case SchemaType.String:
      return value;
    case SchemaType.Number:
    case SchemaType.Integer:
      return value.toString();
    case SchemaType.Boolean:
      return value.toString();
    default:
      throw new Error(`Unexpected value type: ${valueType.type}`);
  }
}

export function getTypeForSchema(schema: Schema): PropertyTypeDetails {
  let typeName: string = "";
  let defaultValue: string | undefined = undefined;

  switch (schema.type) {
    case SchemaType.String:
      typeName = "string";
      break;
    case SchemaType.Number:
    case SchemaType.Integer:
      typeName = "number";
      break;
    case SchemaType.Constant:
      const constantSchema = schema as ConstantSchema;
      const constantType = getTypeForSchema(constantSchema.valueType);
      typeName = constantType.typeName;
      defaultValue = getStringForValue(
        constantSchema.value.value,
        constantSchema.valueType
      );
      break;
    default:
      throw new Error(`Unsupported schema type: ${schema.type}`);
  }

  return {
    typeName,
    isConstant: schema.type === SchemaType.Constant,
    defaultValue
  };
}

export function transformProperty(property: Property): PropertyDetails {
  const metadata = getLanguageMetadata(property.language);
  const propertyType = getTypeForSchema(property.schema);

  return {
    name: normalizeName(metadata.name, NameType.Property),
    description: !metadata.description.startsWith("MISSING")
      ? metadata.description
      : undefined,
    serializedName: property.serializedName,
    type: propertyType.typeName,
    required: property.required || true,
    readOnly: property.readOnly || false,
    isConstant: propertyType.isConstant,
    defaultValue: propertyType.defaultValue
  };
}

export function transformChoice(choice: ChoiceSchema): UnionDetails {
  const metadata = getLanguageMetadata(choice.language);
  let name =
    ReservedModelNames.indexOf(metadata.name) > -1
      ? `${metadata.name}Model`
      : metadata.name;

  return {
    name,
    description: `Defines values for ${metadata.name}.`,
    serializedName: metadata.name,
    values: choice.choices.map(c =>
      getStringForValue(c.value, choice.choiceType)
    )
  };
}

export function transformObject(obj: ObjectSchema): ModelDetails {
  const metadata = getLanguageMetadata(obj.language);
  let name = normalizeName(
    ReservedModelNames.indexOf(metadata.name) > -1
      ? `${metadata.name}Model`
      : metadata.name,
    NameType.Class
  );

  return {
    name,
    description: `An interface representing ${metadata.name}.`,
    serializedName: metadata.name,
    properties: obj.properties
      ? obj.properties.map(prop => transformProperty(prop))
      : []
  };
}

export function transformCodeModel(codeModel: CodeModel): ClientDetails {
  return {
    models: codeModel.schemas.objects
      ? codeModel.schemas.objects.map(transformObject)
      : [],
    unions: codeModel.schemas.choices
      ? codeModel.schemas.choices.map(transformChoice)
      : []
  };
}
