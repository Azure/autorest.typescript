import { EnumValue, Type } from "../modularCodeModel.js";

/**
 * Represents metadata for a given Type to generate the TypeScript equivalent.
 */
export interface TypeMetadata {
  name: string;
  originModule?: string;
  isRelative?: boolean;
  nullable?: boolean;
  modifier?: "Array";
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

function getTypeName(type: { name?: string; nullable?: boolean }): string {
  if (!type.name) {
    throw new Error("Unable to process type without name");
  }
  let name = type.name;

  if (type.nullable) {
    name = `(${name} | null)`;
  }

  return name;
}

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
      typeMetadata.name = getTypeName(typeMetadata);
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
  let name = type.name ?? getAnonymousEnumName(type.values ?? []);
  name = getTypeName({ name, nullable: type.nullable });
  return {
    name,
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

  const elementTypeMetadata = getType(
    type.elementType,
    type.elementType.format
  );

  const name = getTypeName({
    name: `${elementTypeMetadata.name}[]`,
    nullable: type.nullable
  });

  const listTypeMetadata: TypeMetadata = {
    name: name,
    nullable: type.elementType.nullable,
    originModule: type.elementType?.type === "model" ? "models.js" : undefined
  };

  return listTypeMetadata;
}

/**
 * Handles the conversion of model types to TypeScript representation metadata.
 */
function handleModelType(type: Type): TypeMetadata {
  // Temporarily handling the case of anonymous models
  if (!type.name) {
    return {
      name: "any"
    };
  }
  let name = getTypeName(type);
  return {
    name,
    nullable: type.nullable,
    originModule: "models.js"
  };
}

/**
 * Handles the conversion of duration types to TypeScript representation metadata.
 */
function handleDurationType(type: Type, format?: string): TypeMetadata {
  const isFormatSeconds = format === "seconds";
  let name = isFormatSeconds ? "number" : "string";
  name = getTypeName({ name, nullable: type.nullable });
  return {
    name,
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
      const sdkType = getType(t, t.format).name;
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

  const elementType = getType(type.elementType, type.elementType.format);
  let elementName = elementType.name;
  return {
    name: `Record<string, ${elementName}>`
  };
}

/**
 * Generates a TypeScript type representation for a given client name, type, and format.
 */
export function buildType(clientName?: string, type?: Type, format?: string) {
  if (!type) {
    throw new Error("Type should be defined");
  }

  const typeMetadata = getType(type, format);

  return { name: clientName ?? "", type: typeMetadata.name };
}
