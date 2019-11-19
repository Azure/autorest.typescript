// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  ObjectSchema,
  Languages,
  Language,
  Schema,
  SchemaType,
  Property
} from "@azure-tools/codemodel";

const ReservedNames = ["Error"];

export function getNamingDetails(languages: Languages): Language {
  const metadata = languages.typescript || languages.javascript || languages.default;
  let name = metadata.name;

  if (ReservedNames.indexOf(name) > -1) {
    name = `${name}Model`;
  }

  return {
    name,
    description: metadata.description
  };
}

export interface PropertyDetails {
  name: string;
  description?: string;
  type: string;
  required: boolean;
  readOnly: boolean;
}

export interface ModelDetails {
  name: string;
  description: string;
  properties: PropertyDetails[];
}

export interface ClientDetails {
  models: ModelDetails[]
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
  const naming = getNamingDetails(property.language);
  return {
    name: naming.name,
    description: naming.description && !naming.description.startsWith("MISSING") ? naming.description : undefined,
    required: property.required || true,
    readOnly: property.readOnly || false,
    type: getTypeForSchema(property.schema)
  };
}

export function transformObject(obj: ObjectSchema): ModelDetails {
  const naming = getNamingDetails(obj.language);
  return {
    name: naming.name,
    description: `An interface representing ${naming.name}.`,
    properties: obj.properties ? obj.properties.map(prop => transformProperty(prop)) : []
  };
}

export function transformCodeModel(codeModel: CodeModel): ClientDetails {
  return {
    models: codeModel.schemas.objects ? codeModel.schemas.objects.map(transformObject) : []
  }
}
