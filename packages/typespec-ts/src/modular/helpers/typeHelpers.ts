import { EnumValue, Type } from "../modularCodeModel.js";

/**
 * Represents metadata for a given Type to generate the TypeScript equivalent.
 */
export interface TypeMetadata {
  name: string;
  originModule?: string;
  isRelative?: boolean;
  nullable?: boolean;
  modifier?: "Array" | "NullableArray";
}

/**
 * Returns a string representation for an anonymous enum using its values.
 */
function getAnonymousEnumName(values: EnumValue[]): string {
  return values
    .map((v) => (typeof v.value === "string" ? `"${v.value}"` : `${v.value}`))
    .join(" | ");
}

// Mapping of simple types to their TypeScript equivalents.
const simpleTypeMap: Record<string, TypeMetadata> = {
  Key: {
    name: "KeyCredential",
    originModule: "@azure/core-auth",
    isRelative: false
  },
  OAuth2: {
    name: "TokenCredential",
    originModule: "@azure/core-auth",
    isRelative: false
  },
  boolean: { name: "boolean" },
  datetime: { name: "Date" },
  float: { name: "number" },
  integer: { name: "number" },
  "byte-array": { name: "Uint8Array" },
  string: { name: "string" },
  any: { name: "Record<string, any>" },
  unknown: { name: "unknown" }
};

/**
 * Maps a given Type to its TypeScript representation metadata.
 */
export function getType(type: Type, format?: string): TypeMetadata {
  // Handle simple type conversions
  const simpleType = simpleTypeMap[type.type];
  if (simpleType) {
    const typeMetadata: TypeMetadata = { ...simpleType };
    if (type.nullable) {
      typeMetadata.nullable = true;
    }
    return typeMetadata;
  }

  switch (type.type) {
    case "constant":
      return handleConstantType(type);

    case "enum":
      return handleEnumType(type);

    case "list":
      return handleListType(type);

    case "model":
      return handleModelType(type);

    case "duration":
      return handleDurationType(type, format);

    case "combined":
      return handleCombinedType(type);

    case "dict":
      return handleDictType(type);

    default:
      throw new Error(`Unsupported type ${type.type}`);
  }
}

/**
 * Handles the conversion of constant types to TypeScript representation metadata.
 */
function handleConstantType(type: Type): TypeMetadata {
  let typeName: string = type.value?.toString() ?? "undefined";
  if (type.valueType?.type === "string") {
    typeName = type.value ? `"${type.value}"` : "undefined";
  }
  return { name: typeName, nullable: type.nullable };
}

/**
 * Handles the conversion of enum types to TypeScript representation metadata.
 */
function handleEnumType(type: Type): TypeMetadata {
  if (
    !type.name &&
    (!type?.valueType?.type ||
      !["string", "number"].includes(type?.valueType?.type))
  ) {
    throw new Error("Unable to process enum without name");
  }
  return {
    name: type.name ?? getAnonymousEnumName(type.values ?? []),
    nullable: type.nullable,
    originModule: "models.js"
  };
}

/**
 * Handles the conversion of list types to TypeScript representation metadata.
 */
function handleListType(type: Type): TypeMetadata {
  if (!type.elementType) {
    throw new Error("Unable to process Array with no elementType");
  }

  const typeMetadata = getType(type.elementType, type.elementType.format);
  const nestedName = getTypeName(typeMetadata);

  return {
    name: nestedName,
    nullable: type.nullable,
    modifier: type.nullable ? "NullableArray" : "Array",
    originModule: type.elementType?.type === "model" ? "models.js" : undefined
  };
}

/**
 * Handles the conversion of model types to TypeScript representation metadata.
 */
function handleModelType(type: Type): TypeMetadata {
  return {
    name: type.name!,
    nullable: type.nullable,
    originModule: "models.js"
  };
}

/**
 * Handles the conversion of duration types to TypeScript representation metadata.
 */
function handleDurationType(type: Type, format?: string): TypeMetadata {
  const isFormatSeconds = format === "seconds";
  return {
    name: isFormatSeconds ? "number" : "string",
    nullable: type.nullable
  };
}

/**
 * Handles the conversion of combined types to TypeScript representation metadata.
 */
function handleCombinedType(type: Type): TypeMetadata {
  if (!type.types) {
    throw new Error("Unable to process combined without combinedTypes");
  }
  const name = type.types
    .map((t) => {
      const sdkType = getTypeName(getType(t, t.format));
      return `${sdkType}`;
    })
    .join(" | ");
  return { name: name, nullable: type.nullable };
}

/**
 * Handles the conversion of dict types to TypeScript representation metadata.
 */
function handleDictType(type: Type): TypeMetadata {
  if (!type.elementType) {
    throw new Error("Unable to process dict without elemetType info");
  }
  return {
    name: `Record<string, ${getTypeName(
      getType(type.elementType, type.elementType.format)
    )}>`
  };
}

/**
 * Gets the Typescript representation of a TypeSpec type
 */
function getTypeName(typeMetadata: TypeMetadata): string {
  let typeName = typeMetadata.name;

  if (
    typeMetadata.nullable &&
    typeMetadata.modifier !== "Array" &&
    typeMetadata.modifier !== "NullableArray"
  ) {
    typeName = `(${typeName} | null)`;
  }

  if (typeMetadata.modifier === "Array") {
    typeName = `(${typeName}[])`;
  }

  if (typeMetadata.modifier === "NullableArray") {
    typeName = `(${typeName}[] | null)`;
  }

  return typeName;
}

/**
 * Generates a TypeScript type representation for a given client name, type, and format.
 */
export function buildType(clientName?: string, type?: Type, format?: string) {
  if (!type) {
    throw new Error("Type should be defined");
  }

  const typeMetadata = getType(type, format);
  const typeName = getTypeName(typeMetadata);

  return { name: clientName ?? "", type: typeName };
}
