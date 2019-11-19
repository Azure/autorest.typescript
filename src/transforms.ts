// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientDetails } from "./models/clientDetails";
import { ModelDetails, PropertyDetails } from "./models/modelDetails";

import {
  CodeModel,
  ObjectSchema,
  Languages,
  Language,
  Schema,
  SchemaType,
  Property
} from "@azure-tools/codemodel";


// An array of model names that are "reserved", or shouldn't be used
// verbatim.  Currently any reserved model name will have "Model"
// appended to it in the generated code.
const ReservedModelNames = ["Error"];

export function getLanguageMetadata(languages: Languages): Language {
  return languages.typescript || languages.javascript || languages.default;
}

export function getTypeForSchema(schema: Schema): string {
  switch (schema.type) {
    case SchemaType.String:
      return "string";
    case SchemaType.Number:
    case SchemaType.Integer:
      return "number";
    case SchemaType.Constant:
      // TODO: Get it from the const schema
      return "string";
    default:
      throw new Error(`Unsupported schema type: ${schema.type}`)
  }
}

export function transformProperty(property: Property): PropertyDetails {
  const metadata = getLanguageMetadata(property.language);
  return {
    name: metadata.name,
    description: !metadata.description.startsWith("MISSING") ? metadata.description : undefined,
    required: property.required || true,
    readOnly: property.readOnly || false,
    type: getTypeForSchema(property.schema)
  };
}

export function transformObject(obj: ObjectSchema): ModelDetails {
  const metadata = getLanguageMetadata(obj.language);
  let name = ReservedModelNames.indexOf(metadata.name) > -1
    ? `${metadata.name}Model`
    : metadata.name;

  return {
    name,
    description: `An interface representing ${metadata.name}.`,
    properties: obj.properties ? obj.properties.map(prop => transformProperty(prop)) : []
  };
}

export function transformCodeModel(codeModel: CodeModel): ClientDetails {
  return {
    models: codeModel.schemas.objects ? codeModel.schemas.objects.map(transformObject) : []
  }
}
