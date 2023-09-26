import { EnumValue, Type } from "../modularCodeModel.js";

export interface TypeMetadata {
  name: string;
  originModule?: string;
  isRelative?: boolean;
  modifier?: "Array";
}

function getNullableType(name: string, type: Type): string {
  if (type.nullable) {
    return `(${name} | null)`;
  }

  return name;
}

function getAnonymousEnumName(values: EnumValue[]): string {
  return values
    .map((v) => (typeof v.value === "string" ? `"${v.value}"` : `${v.value}`))
    .join(" | ");
}

export function getType(type: Type, format?: string): TypeMetadata {
  switch (type.type) {
    case "Key":
      return {
        name: "KeyCredential",
        originModule: "@azure/core-auth",
        isRelative: false
      };
    case "OAuth2":
      return {
        name: "TokenCredential",
        originModule: "@azure/core-auth",
        isRelative: false
      };
    case "boolean":
      return { name: getNullableType(type.type, type) };
    case "constant": {
      let typeName: string = type.value ?? "undefined";
      if (type.valueType?.type === "string") {
        typeName = type.value ? `"${type.value}"` : "undefined";
      }
      return { name: getNullableType(typeName, type) };
    }
    case "datetime":
      return { name: getNullableType("Date", type) };
    case "enum":
      if (
        !type.name &&
        (!type?.valueType?.type ||
          !["string", "number"].includes(type?.valueType?.type))
      ) {
        throw new Error("Unable to process enum without name");
      }
      return {
        name: getNullableType(
          type.name ?? getAnonymousEnumName(type.values ?? []),
          type
        ),
        originModule: "models.js"
      };
    case "float":
    case "integer":
      return { name: getNullableType("number", type) };
    case "byte-array":
      return { name: getNullableType("Uint8Array", type) };
    case "list":
      if (!type.elementType) {
        throw new Error("Unable to process Array with no elementType");
      }
      return {
        name: getNullableType(
          getType(type.elementType, type.elementType.format).name,
          type
        ),
        modifier: "Array",
        originModule:
          type.elementType?.type === "model" ? "models.js" : undefined
      };
    case "model":
      return {
        name: getNullableType(type.name!, type),
        originModule: "models.js"
      };
    case "string":
    case "duration":
      switch (format) {
        case "seconds":
          return { name: getNullableType("number", type) };
        case "ISO8601":
        default:
          return { name: getNullableType("string", type) };
      }
    case "combined": {
      if (!type.types) {
        throw new Error("Unable to process combined without combinedTypes");
      }
      const name = type.types
        .map((t) => {
          const sdkType = getTypeName(getType(t, t.format));
          return `${sdkType}`;
        })
        .join(" | ");
      return { name: getNullableType(name, type) };
    }
    case "dict":
      if (!type.elementType) {
        throw new Error("Unable to process dict without elemetType info");
      }
      return {
        name: `Record<string, ${getTypeName(
          getType(type.elementType, type.elementType.format)
        )}>`
      };
    case "any":
      return {
        name: `Record<string, any>`
      };
    default:
      // throw new Error(`Unsupported type ${type.type}`);
      return {
        name: `any`
      };
  }
}

function getTypeName(typeMetadata: TypeMetadata) {
  let typeName = typeMetadata.name;
  if (typeMetadata.modifier === "Array") {
    typeName = `${typeName}[]`;
  }
  return typeName;
}

/**
 * Gets the Typescript representation of a TypeSpec type
 */
export function buildType(
  clientName: string | undefined,
  type: Type | undefined,
  format: string | undefined
) {
  if (!type) {
    throw new Error("Type should be defined");
  }

  const typeMetadata = getType(type, format);
  let typeName = typeMetadata.name;
  if (typeMetadata.modifier === "Array") {
    typeName = `${typeName}[]`;
  }
  return { name: clientName ?? "", type: typeName };
}
