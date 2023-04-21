import { Type } from "../modularCodeModel.js";

export interface TypeMetadata {
  name: string;
  originModule?: string;
  isRelative?: boolean;
  modifier?: "Array";
}

export function getType(type: Type): TypeMetadata {
  switch (type.type) {
    case "Key":
      return {
        name: "AzureKeyCredential",
        originModule: "@azure/core-auth",
        isRelative: false
      };
    case "boolean":
      return { name: "boolean" };
    case "constant": {
      let typeName: string = type.value ?? "undefined";
      if (type.valueType?.type === "string") {
        typeName = type.value ? `"${type.value}"` : "undefined";
      }
      return { name: typeName };
    }
    case "datetime":
      return { name: "Date" };
    case "enum":
      if (!type.name) {
        throw new Error("Unable to process enum without name");
      }
      return { name: type.name, originModule: "models.js" };
    case "float":
    case "integer":
      return { name: "number" };
    case "byte-array":
      return { name: "string" };
    case "list":
      if (!type.elementType) {
        throw new Error("Unable to process Array with no elementType");
      }
      return {
        name: getType(type.elementType).name,
        modifier: "Array",
        originModule:
          type.elementType?.type === "model" ? "models.js" : undefined
      };
    case "model":
      if (!type.name) {
        throw new Error("Unable to process model without name");
      }
      return { name: type.name, originModule: "models.js" };
    case "string":
    case "duration":
      return { name: "string" };
    case "combined": {
      if (!type.types) {
        throw new Error("Unable to process combined without combinedTypes");
      }
      const name = type.types
        .map((t) => {
          const sdkType = getTypeName(getType(t));
          return `${sdkType}`;
        })
        .join(" | ");
      return { name };
    }
    case "dict":
      if (!type.elementType) {
        throw new Error("Unable to process dict without elemetType info");
      }
      return {
        name: `Record<string, ${getTypeName(getType(type.elementType))}>`
      };
    default:
      throw new Error(`Unsupported type ${type.type}`);
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
  type: Type | undefined
) {
  if (!type) {
    throw new Error("Type should be defined");
  }

  const typeMetadata = getType(type);
  let typeName = typeMetadata.name;
  if (typeMetadata.modifier === "Array") {
    typeName = `${typeName}[]`;
  }
  return { name: clientName ?? "", type: typeName };
}
