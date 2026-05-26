import type {
  SdkArrayType,
  SdkDictionaryType,
  SdkHttpOperation,
  SdkNullableType,
  SdkServiceMethod,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { getTypeExpression } from "../modular/type-expressions/get-type-expression.js";
import {
  buildHelperTypeId,
  type TSHelperType,
  type TSTypeReference
} from "../codemodel/index.js";
import { getAllOperationsFromClient } from "../framework/hooks/sdkTypes.js";
import { getModelNamespaces } from "../modular/emitModels.js";
import type { SdkContext } from "../utils/interfaces.js";

type RawHelperType = SdkArrayType | SdkDictionaryType | SdkNullableType;

interface HelperTypeEntry {
  helper: TSHelperType;
  rawType: RawHelperType;
}

export function adaptHelperTypes(sdkContext: SdkContext): TSHelperType[] {
  return [...collectHelperTypeEntries(sdkContext).values()]
    .map((entry) => entry.helper)
    .sort(compareHelperTypes);
}

export function buildHelperTypeLookup(
  sdkContext: SdkContext
): Map<string, RawHelperType> {
  return new Map(
    [...collectHelperTypeEntries(sdkContext).values()].map((entry) => [
      entry.helper.id,
      entry.rawType
    ])
  );
}

function collectHelperTypeEntries(
  sdkContext: SdkContext
): Map<string, HelperTypeEntry> {
  const entries = new Map<string, HelperTypeEntry>();
  const visited = new Set<SdkType>();

  for (const model of sdkContext.sdkPackage.models) {
    visitTypeForHelpers(sdkContext, model, visited, entries);
  }

  for (const unionType of sdkContext.sdkPackage.unions) {
    if (unionType.kind === "union") {
      visitTypeForHelpers(sdkContext, unionType, visited, entries);
    }
  }

  for (const client of sdkContext.sdkPackage.clients) {
    for (const method of getAllOperationsFromClient(client)) {
      visitMethodForHelpers(sdkContext, method, visited, entries);
    }
  }

  return entries;
}

function visitMethodForHelpers(
  sdkContext: SdkContext,
  method: SdkServiceMethod<SdkHttpOperation>,
  visited: Set<SdkType>,
  entries: Map<string, HelperTypeEntry>
): void {
  for (const parameter of method.parameters) {
    visitTypeForHelpers(sdkContext, parameter.type, visited, entries);
  }

  visitTypeForHelpers(sdkContext, method.response.type, visited, entries);
  visitTypeForHelpers(
    sdkContext,
    method.operation.bodyParam?.type,
    visited,
    entries
  );

  for (const exception of method.operation.exceptions) {
    visitTypeForHelpers(sdkContext, exception.type, visited, entries);
  }

  for (const parameter of method.operation.parameters) {
    visitTypeForHelpers(sdkContext, parameter.type, visited, entries);
  }

  for (const response of method.operation.responses) {
    visitTypeForHelpers(sdkContext, response.type, visited, entries);
  }
}

function visitTypeForHelpers(
  sdkContext: SdkContext,
  type: SdkType | undefined,
  visited: Set<SdkType>,
  entries: Map<string, HelperTypeEntry>
): void {
  if (!type || visited.has(type)) {
    return;
  }

  visited.add(type);

  switch (type.kind) {
    case "model":
      visitTypeForHelpers(
        sdkContext,
        type.additionalProperties,
        visited,
        entries
      );
      for (const property of type.properties) {
        visitTypeForHelpers(sdkContext, property.type, visited, entries);
      }
      for (const subtype of Object.values(type.discriminatedSubtypes ?? {})) {
        visitTypeForHelpers(sdkContext, subtype, visited, entries);
      }
      return;
    case "union":
      for (const variant of type.variantTypes) {
        visitTypeForHelpers(sdkContext, variant, visited, entries);
      }
      return;
    case "array":
    case "dict":
    case "nullable": {
      if (shouldAdaptHelperType(type)) {
        const helper = buildHelperType(sdkContext, type);
        entries.set(helper.id, { helper, rawType: type });
      }

      const nestedType = type.kind === "nullable" ? type.type : type.valueType;
      visitTypeForHelpers(sdkContext, nestedType, visited, entries);
      return;
    }
    default:
      return;
  }
}

function shouldAdaptHelperType(type: RawHelperType): boolean {
  return (
    type.kind !== "nullable" ||
    (Boolean(type.name) && type.isGeneratedName !== true)
  );
}

function buildHelperType(
  sdkContext: SdkContext,
  type: RawHelperType
): TSHelperType {
  const namespace = getModelNamespaces(sdkContext, type);
  const elementType =
    type.kind === "nullable"
      ? adaptHelperTypeReference(sdkContext, type.type)
      : adaptHelperTypeReference(sdkContext, type.valueType);
  const name = getHelperTypeName(sdkContext, type);
  const isNamedAlias = type.kind === "nullable";

  return {
    id: buildHelperTypeId({
      kind: type.kind,
      name,
      namespace,
      elementType,
      isNamedAlias
    }),
    kind: type.kind,
    name,
    namespace,
    elementType,
    isNamedAlias
  };
}

function getHelperTypeName(
  sdkContext: SdkContext,
  type: RawHelperType
): string {
  if (type.kind === "nullable") {
    return type.name;
  }

  const elementType = adaptHelperTypeReference(sdkContext, type.valueType);
  return type.kind === "array" ? `${elementType}Array` : `${elementType}Record`;
}

function adaptHelperTypeReference(
  sdkContext: SdkContext,
  type: SdkType
): TSTypeReference {
  switch (type.kind) {
    case "model":
    case "enum":
    case "union":
      return type.name;
    case "array":
      return `Array<${adaptHelperTypeReference(sdkContext, type.valueType)}>`;
    case "dict":
      return `Record<string, ${adaptHelperTypeReference(sdkContext, type.valueType)}>`;
    case "nullable":
      return `${adaptHelperTypeReference(sdkContext, type.type)} | null`;
    case "constant":
    case "enumvalue":
      return JSON.stringify(type.value);
    default:
      if ("name" in type && typeof type.name === "string") {
        return type.name;
      }
      return getTypeExpression(sdkContext, type);
  }
}

function compareHelperTypes(left: TSHelperType, right: TSHelperType): number {
  return [left.namespace.join("/"), left.kind, left.name, left.elementType]
    .join(":")
    .localeCompare(
      [
        right.namespace.join("/"),
        right.kind,
        right.name,
        right.elementType
      ].join(":")
    );
}
