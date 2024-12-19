import {
  SdkBodyParameter,
  SdkModelPropertyType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";

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

export function isTypeNullable(type: SdkType) {
  return Boolean(type.kind === "nullable");
}

export function getNullableValidType(type: SdkType): SdkType {
  if (type.kind === "nullable") {
    return type.type;
  }
  return type;
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

export function isCredentialType(
  type: SdkType | SdkModelPropertyType
): boolean {
  return type.kind === "credential";
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
