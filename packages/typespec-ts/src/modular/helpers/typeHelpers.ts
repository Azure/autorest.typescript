import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  SdkBodyParameter,
  SdkCredentialParameter,
  SdkEndpointParameter,
  SdkMethodParameter,
  SdkModelType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";

export function getDirectSubtypes(type: SdkModelType) {
  if (!type.discriminatedSubtypes) {
    return [];
  }
  // Filter out subtypes that extend from other discriminated subtypes (hierarchical inheritance)
  return Object.values(type.discriminatedSubtypes).filter(
    (subtype) => subtype.baseModel === type
  );
}

export function getAdditionalPropertiesType(
  type: SdkType | undefined
): SdkType | undefined {
  if (
    !type ||
    !(
      "additionalProperties" in type ||
      (type.kind === "model" && getAdditionalPropertiesType(type.baseModel))
    )
  ) {
    return undefined;
  }

  if (type.additionalProperties) {
    return type.additionalProperties;
  }

  if (type.baseModel) {
    return getAdditionalPropertiesType(type.baseModel);
  }

  return undefined;
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
  type: SdkEndpointParameter | SdkCredentialParameter | SdkMethodParameter
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
    mapper.set(
      prop.serializationOptions.json?.name || prop.name,
      normalizeName(prop.name, NameType.Property)
    );
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
