import { FunctionDeclarationStructure, StructureKind } from "ts-morph";
import {
  SdkArrayType,
  SdkDictionaryType,
  SdkModelType,
  SdkType,
  SdkUnionType,
  UsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { toCamelCase, toPascalCase } from "../../utils/casingUtils.js";

import { SdkContext } from "../../utils/interfaces.js";
import { getResponseMapping } from "../helpers/operationHelpers.js";
import { getType } from "../buildCodeModel.js";
import { normalizeModelName } from "../emitModels.js";
import { NameType } from "@azure-tools/rlc-common";
import { isAzureCoreErrorType } from "../../utils/modelUtils.js";
import {
  isDiscriminatedUnion,
  isSupportedSerializeType,
  ModelSerializeOptions
} from "./serializeUtils.js";

export function buildModelDeserializer(
  context: SdkContext,
  type: SdkType,
  skipDiscriminatedUnion = false,
  nameOnly: boolean = false
): FunctionDeclarationStructure | undefined | string {
  // const modelTcgcType = getTcgcType(type) as SdkModelType;
  if (!isSupportedSerializeType(type)) {
    return undefined;
  }
  if (type.kind === "model") {
    if (
      !type.usage ||
      (type.usage !== undefined &&
        (type.usage & UsageFlags.Output) !== UsageFlags.Output)
    ) {
      return undefined;
    }
    if (!type.name) {
      throw new Error(`NYI Serialization of anonymous types`);
    }
    if (isAzureCoreErrorType(context.program, type.__raw!)) {
      return undefined;
    }
  }

  if (
    !isDiscriminatedUnion(type) &&
    type.kind === "model" &&
    type.discriminatorProperty
  ) {
    return buildPolymorphicDeserializer(context, type, nameOnly);
  }

  if (isDiscriminatedUnion(type) && !skipDiscriminatedUnion) {
    return buildDiscriminatedUnionDeserializer(context, type, nameOnly);
  }

  switch (type.kind) {
    case "model":
      return buildModelTypeDeserializer(context, type, {
        nameOnly,
        skipDiscriminatedUnionSuffix: skipDiscriminatedUnion
      });
    case "union": // for non-discriminated union, we just return whatever we get
      return buildUnionDeserializer(context, type, nameOnly);
    case "dict":
      return buildDictTypeDeserializer(context, type, nameOnly);
    case "array":
      return buildArrayTypeDeserializer(context, type, nameOnly);
    default:
      return undefined;
  }
}

function hasAdditionalProperties(type: SdkType | undefined) {
  if (
    !type ||
    !(
      "additionalProperties" in type ||
      (type.kind === "model" && hasAdditionalProperties(type.baseModel))
    )
  ) {
    return false;
  }

  if (type.additionalProperties) {
    return true;
  }

  if (type.baseModel) {
    return hasAdditionalProperties(type.baseModel);
  }

  return false;
}

function buildPolymorphicDeserializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly: boolean
): string;
function buildPolymorphicDeserializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure | undefined;
function buildPolymorphicDeserializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const deserializeFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Deserializer`;
  if (nameOnly) {
    return deserializeFunctionName;
  }
  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializeFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "any"
      }
    ],
    returnType: normalizeModelName(context, type),
    statements: []
  };
  if (!type.discriminatorProperty) {
    return;
  }
  const statements: string[] = [];

  const subTypes = type.discriminatedSubtypes;
  if (!subTypes) {
    return;
  }

  const cases: string[] = [];
  Object.keys(subTypes).forEach((discriminatedValue) => {
    const subType = subTypes[discriminatedValue];
    if (
      !subType?.usage ||
      (subType?.usage !== undefined &&
        (subType.usage & UsageFlags.Output) !== UsageFlags.Output)
    ) {
      return;
    }
    const union = subType?.discriminatedSubtypes ? "Union" : "";
    if (!subType || subType?.name) {
      throw new Error(`NYI Serialization of anonymous types`);
    }
    const subTypeName = `${toPascalCase(subType.name)}${union}`;
    const subtypeDeserializerName = toCamelCase(`${subTypeName}Deserializer`);

    cases.push(`
        case "${discriminatedValue}":
          return ${subtypeDeserializerName}(item as ${subTypeName});
      `);
  });

  statements.push(`
      switch (item.${type.discriminatorProperty.name}) {
       ${cases.join("\n")}
        default:
          return item;
      }
    `);
  deserializerFunction.statements = statements.join("\n");
  return deserializerFunction;
}

function buildDiscriminatedUnionDeserializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly: boolean
): string;
function buildDiscriminatedUnionDeserializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure | undefined;
function buildDiscriminatedUnionDeserializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const cases: string[] = [];
  const output: string[] = [];
  const deserializeFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Deserializer`;
  if (nameOnly) {
    return deserializeFunctionName;
  }
  const baseDeserializerName = `${normalizeModelName(
    context,
    type,
    NameType.Operation,
    true
  )}Deserializer`;
  for (const key in type.discriminatedSubtypes) {
    const subType = type.discriminatedSubtypes[key]!;
    if (
      !subType.usage ||
      (subType.usage !== undefined &&
        (subType.usage & UsageFlags.Output) !== UsageFlags.Output)
    ) {
      continue;
    }
    const discriminatedValue = subType.discriminatorValue!;
    const union = subType.discriminatedSubtypes ? "Union" : "";
    const subTypeName = `${toPascalCase(subType.name)}${union}`;
    const subtypeDeserializerName = toCamelCase(`${subTypeName}Deserializer`);

    cases.push(`
      case "${discriminatedValue}":
        return ${subtypeDeserializerName}(item as ${subTypeName});
    `);
  }
  output.push(`
    switch (item.${type.discriminatorProperty?.name}) {
     ${cases.join("\n")}
      default:
        return ${baseDeserializerName}(item);
    }
  `);

  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializeFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "any"
      }
    ],
    returnType: normalizeModelName(context, type),
    statements: output.join("\n")
  };
  return deserializerFunction;
}

function buildUnionDeserializer(
  context: SdkContext,
  type: SdkUnionType,
  nameOnly: boolean
): string;
function buildUnionDeserializer(
  context: SdkContext,
  type: SdkUnionType
): FunctionDeclarationStructure;
function buildUnionDeserializer(
  context: SdkContext,
  type: SdkUnionType,
  nameOnly = false
): FunctionDeclarationStructure | string | undefined {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const deserializerFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Deserializer`;
  if (nameOnly) {
    return deserializerFunctionName;
  }
  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "any"
      }
    ],
    returnType: normalizeModelName(context, type),
    statements: ["return item;"]
  };
  return deserializerFunction;
}

function buildModelTypeDeserializer(
  context: SdkContext,
  type: SdkModelType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
): FunctionDeclarationStructure | string | undefined {
  if (!type.name) {
    throw new Error(`NYI Deserialization of anonymous types`);
  }
  const deserializerFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation,
    options.skipDiscriminatedUnionSuffix
  )}Deserializer`;
  if (options.nameOnly) {
    return deserializerFunctionName;
  }
  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "any"
      }
    ],
    returnType: normalizeModelName(
      context,
      type,
      NameType.Interface,
      options.skipDiscriminatedUnionSuffix
    ),
    statements: ["return item;"]
  };
  const nullabilityPrefix = "";
  // getPropertySerializationPrefix({
  //   clientName: "item",
  //   type
  // });

  // This is only handling the compatibility mode, will need to update when we handle additionalProperties property.
  const additionalPropertiesSpread = hasAdditionalProperties(type)
    ? "...item,"
    : "";

  const propertiesStr = getResponseMapping(
    context,
    getType(context, type.__raw!),
    "item"
  );
  const propertiesDeserialization = propertiesStr.filter((p) => p.trim());

  const output = [];

  // don't emit a serializer if there is nothing to serialize
  if (propertiesDeserialization.length || additionalPropertiesSpread) {
    const fnBody = `{
           ${additionalPropertiesSpread}
           ${nullabilityPrefix} ${propertiesDeserialization.join(",\n")}
        }`;
    output.push(`
        return ${fnBody}
      `);
  } else {
    output.push(`
        return item as any;
      `);
  }
  deserializerFunction.statements = output;
  return deserializerFunction;
}

function buildDictTypeDeserializer(
  context: SdkContext,
  type: SdkDictionaryType,
  nameOnly: boolean
): string;
function buildDictTypeDeserializer(
  context: SdkContext,
  type: SdkDictionaryType
): FunctionDeclarationStructure | undefined;
function buildDictTypeDeserializer(
  context: SdkContext,
  type: SdkDictionaryType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  const valueDeserializer = buildModelDeserializer(
    context,
    type.valueType,
    false,
    true
  );
  if (!valueDeserializer) {
    return undefined;
  }
  if (!isSupportedSerializeType(type.valueType)) {
    return undefined;
  }

  if (typeof valueDeserializer !== "string") {
    return undefined;
  }
  const valueTypeName = toCamelCase(
    valueDeserializer ? valueDeserializer.replace("Deserializer", "") : ""
  );
  const deserializerFunctionName = `${valueTypeName}RecordDeserializer`;
  if (nameOnly) {
    return deserializerFunctionName;
  }
  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${valueTypeName}RecordDeserializer`,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "Record<string, any>"
      }
    ],
    returnType: `Record<string, ${normalizeModelName(context, type.valueType as any) ?? "any"}>`,
    statements: [
      `
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]? item[key]: ${valueDeserializer}(item[key])
  });
  return result;
      `
    ]
  };
  return deserializerFunction;
}

function buildArrayTypeDeserializer(
  context: SdkContext,
  type: SdkArrayType,
  nameOnly: boolean
): string;
function buildArrayTypeDeserializer(
  context: SdkContext,
  type: SdkArrayType
): FunctionDeclarationStructure | undefined;
function buildArrayTypeDeserializer(
  context: SdkContext,
  type: SdkArrayType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  const valueDeserializer = buildModelDeserializer(
    context,
    type.valueType,
    false,
    true
  );
  if (!valueDeserializer) {
    return undefined;
  }
  if (!isSupportedSerializeType(type.valueType)) {
    return undefined;
  }

  if (typeof valueDeserializer !== "string") {
    return undefined;
  }
  const valueTypeName = toCamelCase(
    valueDeserializer ? valueDeserializer.replace("Deserializer", "") : ""
  );
  const deserializerFunctionName = `${valueTypeName}ArrayDeserializer`;
  if (nameOnly) {
    return deserializerFunctionName;
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "result",
        type: `Array<${normalizeModelName(context, type.valueType as any) ?? "any"}>`
      }
    ],
    returnType: "any[]",
    statements: [
      `
  return result.map((item) => {
    return ${valueDeserializer}(item)
  });
      `
    ]
  };
  return serializerFunction;
}
