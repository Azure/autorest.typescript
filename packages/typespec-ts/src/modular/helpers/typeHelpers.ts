import {
  SdkBodyParameter,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { Type } from "../modularCodeModel.js";

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

// Mapping of simple types to their TypeScript equivalents.
const simpleTypeMap: Record<string, TypeMetadata> = {
  Key: {
    name: "KeyCredential"
  },
  OAuth2: {
    name: "TokenCredential"
  },
  boolean: { name: "boolean" },
  datetime: { name: "Date" },
  float: { name: "number" },
  integer: { name: "number" },
  "byte-array": { name: "Uint8Array" },
  string: { name: "string" },
  any: { name: "Record<string, any>" },
  unknown: { name: "any" }
};

function handleSimpleType(
  type: Type,
  format?: string
): TypeMetadata | undefined {
  if (type.type === "integer") {
    // Treat integer as number if format is specified as string
    return format === "string" ? { name: "string" } : { name: "number" };
  }
  return simpleTypeMap[type.type];
}

function handleAnomymousModelName(type: Type) {
  let retVal = `{`;
  for (const prop of type.properties ?? []) {
    const propName = prop.clientName ?? prop.restApiName ?? "";
    const propTypeName = getType(prop.type, prop.type.format).name;
    if (!propName || !propTypeName) {
      continue;
    }
    retVal += `"${propName}"${prop.optional ? "?" : ""}: ${propTypeName};`;
  }

  retVal += `}`;
  return retVal;
}

function handleNullableTypeName(type: {
  name?: string;
  nullable?: boolean;
}): string {
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
  const simpleType = handleSimpleType(type, format);
  if (simpleType) {
    const typeMetadata: TypeMetadata = { ...simpleType };
    if (isTypeNullable(type)) {
      typeMetadata.nullable = true;
      typeMetadata.name = handleNullableTypeName(typeMetadata);
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

    case "never":
      return { name: "never", nullable: isTypeNullable(type) };
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
  const name = handleNullableTypeName({
    name: typeName,
    nullable: isTypeNullable(type)
  });
  return { name, nullable: isTypeNullable(type) };
}

/**
 * Handles the conversion of enum types to TypeScript representation metadata.
 */
function handleEnumType(type: Type): TypeMetadata {
  if (!type.name) {
    const valueType = !type.isFixed
      ? ((type.values?.[0] as Type).valueType?.type ?? "string") + " | "
      : "";
    return {
      name: `${valueType}${type.values
        ?.map((e) => {
          return getType(e as Type).name;
        })
        .join(" | ")}`,
      nullable: isTypeNullable(type)
    };
  }
  const name = handleNullableTypeName({
    name: type.name,
    nullable: isTypeNullable(type)
  });
  return {
    name,
    nullable: isTypeNullable(type),
    originModule: "models.js"
  };
}

export function isTypeNullable(type: Type) {
  return Boolean(type.tcgcType?.kind === "nullable");
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

  let name = `${elementTypeMetadata.name}[]`;

  const isTypeNullable = type.tcgcType?.kind === "nullable";

  if (isTypeNullable) {
    name = `(${name} | null)`;
  }

  const listTypeMetadata: TypeMetadata = {
    name: name,
    nullable: isTypeNullable,
    originModule: type.elementType?.type === "model" ? "models.js" : undefined
  };

  return listTypeMetadata;
}

/**
 * Handles the conversion of model types to TypeScript representation metadata.
 */
function handleModelType(type: Type): TypeMetadata {
  let name = !type.name ? handleAnomymousModelName(type) : type.name;
  name = handleNullableTypeName({
    name,
    nullable: isTypeNullable(type)
  });
  return {
    name,
    nullable: isTypeNullable(type),
    originModule: "models.js"
  };
}

/**
 * Handles the conversion of duration types to TypeScript representation metadata.
 */
function handleDurationType(type: Type, format?: string): TypeMetadata {
  const isFormatSeconds = format === "seconds";
  let name = isFormatSeconds ? "number" : "string";
  name = handleNullableTypeName({ name, nullable: isTypeNullable(type) });
  return {
    name,
    nullable: isTypeNullable(type)
  };
}

/**
 * Handles the conversion of combined types to TypeScript representation metadata.
 */
function handleCombinedType(type: Type): TypeMetadata {
  if (!type.types) {
    throw new Error("Unable to process combined without combinedTypes");
  }
  const name =
    type.name ??
    type.types
      .map((t) => {
        const sdkType = getType(t, t.format).name;
        return `${sdkType}`;
      })
      .join(" | ");
  return { name: `(${name})`, nullable: isTypeNullable(type) };
}

/**
 * Handles the conversion of dict types to TypeScript representation metadata.
 */
function handleDictType(type: Type): TypeMetadata {
  if (!type.elementType) {
    throw new Error("Unable to process dict without elemetType info");
  }
  if (type.name && type.name !== "Record") {
    return {
      name: type.name
    };
  }
  const elementType = getType(type.elementType, type.elementType.format);
  const elementName = elementType.name;
  const name = handleNullableTypeName({
    name: `Record<string, ${elementName}>`,
    nullable: isTypeNullable(type)
  });
  return {
    name,
    nullable: isTypeNullable(type)
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

const NumericTypeKinds = [
  "numeric",
  "integer",
  "safeint",
  "int8",
  "int16",
  "int32",
  "int64",
  "uint8",
  "uint16",
  "uint32",
  "uint64",
  "float",
  "float32",
  "float64",
  "decimal",
  "decimal128"
];

const DateTimeTypeKinds = ["plainDate", "plainTime"];

// This may be a good candidate to move to TCGC
export function isNumericTypeKind(kind: string): boolean {
  return NumericTypeKinds.includes(kind);
}

export function isDateTimeTypeKind(kind: string): boolean {
  return DateTimeTypeKinds.includes(kind);
}

export function isCredentialType(type: Type): boolean {
  const credentialTypes = ["OAuth2", "Key"];
  return (
    credentialTypes.includes(type.type) ||
    (type.type === "combined" && (type.types?.every(isCredentialType) ?? false))
  );
}

/**
 * Builds a property name mapper between the serializedName and the name of the property.
 * Return empty map if the type is not a model.
 */
export function buildPropertyNameMapper(model: SdkType) {
  const mapper = new Map<string, string>();
  if (model.kind !== "model") {
    return mapper;
  }
  for (const prop of model.properties) {
    if (prop.kind !== "property") {
      continue;
    }

    mapper.set(prop.serializedName, prop.name);
  }
  return mapper;
}

/**
 * Checks if the body parameter is a spread parameter.
 * @param body
 * @returns
 */
export function isSpreadBodyParameter(body: SdkBodyParameter) {
  const methodParams = body.correspondingMethodParams;
  return (
    methodParams.length > 1 ||
    (methodParams.length === 1 && methodParams[0]?.type !== body.type)
  );
}
