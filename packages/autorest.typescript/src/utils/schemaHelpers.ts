// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TypeDetails, PropertyKind } from "../models/modelDetails";

import {
  Schema,
  SchemaType,
  ConstantSchema,
  ObjectSchema,
  ArraySchema,
  DictionarySchema,
  SchemaResponse,
  ComplexSchema,
  OAuth2SecurityScheme,
  KeySecurityScheme,
  ParameterLocation,
  Security
} from "@autorest/codemodel";
import { getStringForValue } from "./valueHelpers";
import { getLanguageMetadata } from "./languageHelpers";
import { normalizeName, NameType } from "./nameUtils";
import { logger } from "./logger";
import { getAutorestOptions } from "../autorestSession";

/**
 * Extracts parents from an ObjectSchema
 * by default it extracts all parameters unless
 * immediateOnly = true is passed
 */
export function getSchemaParents(
  { parents }: ObjectSchema,
  immediateOnly = false
) {
  if (!parents) {
    return [];
  }

  const allParents: ComplexSchema[] = immediateOnly
    ? parents.immediate
    : parents.all;

  return allParents.filter(p => p.type === SchemaType.Object);
}

/**
 * Extracts the additional properties for an object schema
 * if immediateOnly is true, it will only extract additionalProperties defined directly
 * in the schema, otherwise it will get it from any of its parents
 */
export function getAdditionalProperties(
  { parents }: ObjectSchema,
  immediateOnly = false
): ComplexSchema | undefined {
  if (!parents) {
    return undefined;
  }

  const allParents: ComplexSchema[] = immediateOnly
    ? parents.immediate
    : parents.all;

  return allParents.find(p => p.type === SchemaType.Dictionary);
}

/**
 * Helper function which given a schema returns type information for useful for generating Typescript code
 * @param schema schema to extract type information from
 */
export function getTypeForSchema(
  schema: Schema,
  isNullable: boolean = false,
  useCoreV2: boolean = false
): TypeDetails {
  let typeName: string = "";
  let usedModels: string[] = [];
  let defaultValue = undefined;
  let kind: PropertyKind = PropertyKind.Primitive;
  switch (schema.type) {
    case SchemaType.Any:
      typeName = "any";
      break;
    case SchemaType.Array:
      const arraySchema = schema as ArraySchema;
      const itemsType = getTypeForSchema(
        arraySchema.elementType,
        arraySchema.nullableItems,
        useCoreV2
      );
      const itemsName = itemsType.typeName;
      kind = itemsType.kind;
      // In the case that this type is SomeType | null, it is necessary to wrap
      // in brackets such that the array type is constructed correctly as
      // (SomeType | null)[]
      const wrappedItemsName = itemsType.nullable
        ? "(" + itemsName + ")"
        : itemsName;
      typeName = `${wrappedItemsName}[]`;
      if (isModelNeeded(itemsType)) {
        usedModels.push(itemsName);
      }
      break;
    case SchemaType.Boolean:
      typeName = "boolean";
      break;
    case SchemaType.Binary:
      typeName = !useCoreV2
        ? "coreHttp.HttpRequestBody"
        : "coreRestPipeline.RequestBodyType";
      break;
    case SchemaType.ByteArray:
      typeName = "Uint8Array";
      break;
    case SchemaType.Choice:
    case SchemaType.SealedChoice:
      const { name: choiceName } = getLanguageMetadata(schema.language);
      typeName = choiceName;
      kind = PropertyKind.Enum;
      usedModels.push(choiceName);
      break;
    case SchemaType.Constant:
      const constantSchema = schema as ConstantSchema;
      const constantType = getTypeForSchema(constantSchema.valueType, false);
      kind = constantType.kind;
      if (isModelNeeded(constantType)) {
        usedModels.push(typeName);
      }
      defaultValue = getStringForValue(
        constantSchema.value.value,
        constantSchema.valueType.type,
        false
      );
      typeName = constantType.typeName;
      break;
    case SchemaType.DateTime:
    case SchemaType.Date:
    case SchemaType.UnixTime:
      typeName = "Date";
      break;
    case SchemaType.Duration:
      typeName = "string";
      break;
    case SchemaType.Dictionary:
      const dictionarySchema = schema as DictionarySchema;
      const elementType = getTypeForSchema(
        dictionarySchema.elementType,
        dictionarySchema.nullableItems
      );
      const elementTypeName = elementType.typeName;
      kind = PropertyKind.Dictionary;
      typeName = `{[propertyName: string]: ${elementTypeName}}`;
      if (isModelNeeded(elementType)) {
        usedModels.push(elementTypeName);
      }
      break;
    case SchemaType.AnyObject:
      kind = PropertyKind.Dictionary
      typeName = `Record<string, unknown>`;
      break;
    case SchemaType.Number:
    case SchemaType.Integer:
      typeName = "number";
      break;

    case SchemaType.Object:
      const objSchema = schema as ObjectSchema;
      const name = normalizeName(
        getLanguageMetadata(schema.language).name,
        NameType.Interface,
        true /** shouldGuard */
      );

      // Polymorphic objects with children will get a union type as type
      // since they can take different shapes
      const isUnionType =
        !!(objSchema.discriminator || objSchema.discriminatorValue) &&
        !!objSchema.children &&
        !!objSchema.children.immediate.length;

      typeName = isUnionType ? `${name}Union` : name;
      kind = PropertyKind.Composite;
      usedModels.push(typeName);
      break;
    case SchemaType.String:
    case SchemaType.Char:
    case SchemaType.Time:
    case SchemaType.Uuid:
    case SchemaType.Uri:
    case SchemaType.Credential:
      typeName = "string";
      break;
    default:
      throw new Error(`Handling of ${schema.type} hasn't been implemented yet`);
  }

  typeName = isNullable ? typeName + " | null" : typeName;
  return {
    typeName,
    kind,
    usedModels,
    isConstant: schema.type === SchemaType.Constant,
    nullable: isNullable,
    defaultValue
  };
}

function isModelNeeded({ kind }: TypeDetails) {
  return [PropertyKind.Composite, PropertyKind.Enum].includes(kind);
}

export function isSchemaResponse(response: any): response is SchemaResponse {
  // check fields that should exist to determine if this is a SchemaResponse
  return typeof response.schema !== "undefined";
}

/**
 * Gets special information to include as documentation when generating certain
 * schema types.
 */
export function getSchemaTypeDocumentation(schema: Schema) {
  switch (schema.type) {
    case SchemaType.Time:
      return `\nThis value should be an ISO-8601 formatted string representing time. E.g. "HH:MM:SS" or "HH:MM:SS.mm".`;
    case SchemaType.Credential:
      return `\nThis value contains a credential. Consider obscuring before showing to users`;
    default:
      return "";
  }
}

export function getSecurityInfoFromModel(security: Security) {
  const { addCredentials } = getAutorestOptions();
  const credentialScopes: Set<string> = new Set<string>();
  let credentialKeyHeaderName: string = "";
  for (const securitySchema of security.schemes) {
    if (securitySchema.type === "OAuth2") {
      (securitySchema as OAuth2SecurityScheme).scopes.forEach(scope => {
        const scopes = scope.split(',');
        for(const scope of scopes) {
          credentialScopes.add(scope);
        }
      });
    } else if (
      credentialKeyHeaderName === "" &&
      securitySchema.type === "Key" &&
      (securitySchema as KeySecurityScheme).in === ParameterLocation.Header
    ) {
      credentialKeyHeaderName = (securitySchema as KeySecurityScheme).name;
    } else if (
      credentialKeyHeaderName !== "" &&
      credentialKeyHeaderName !== (securitySchema as KeySecurityScheme).name &&
      securitySchema.type === "Key" &&
      (securitySchema as KeySecurityScheme).in === ParameterLocation.Header
    ) {
      logger.warning(
        `Set multiple headers for key credential has not been supported yet`
      );
    }
  }
  const scopes: string[] = [];
  credentialScopes.forEach(item => {
    scopes.push(item);
  });
  return {
    addCredentials:
      addCredentials === false ? false : security.authenticationRequired,
    credentialScopes: scopes,
    credentialKeyHeaderName: credentialKeyHeaderName
  };
}
