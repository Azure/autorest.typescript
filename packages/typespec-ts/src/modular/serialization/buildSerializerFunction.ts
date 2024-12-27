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
import { getRequestModelMapping } from "../helpers/operationHelpers.js";
import { normalizeModelName } from "../emitModels.js";
import { NameType } from "@azure-tools/rlc-common";
import { isAzureCoreErrorType } from "../../utils/modelUtils.js";
import {
  isDiscriminatedUnion,
  isSupportedSerializeType,
  ModelSerializeOptions
} from "./serializeUtils.js";

export function buildModelSerializer(
  context: SdkContext,
  type: SdkType,
  skipDiscriminatedUnion = false,
  nameOnly: boolean = false
): FunctionDeclarationStructure | undefined | string {
  // const modelTcgcType = getTcgcType(type) as SdkModelType;
  if (!isSupportedSerializeType(type)) {
    return undefined;
  }
  if (type.kind === "model" || type.kind === "union" || type.kind === "enum") {
    if (
      !type.usage ||
      (type.usage !== undefined &&
        (type.usage & UsageFlags.Input) !== UsageFlags.Input)
    ) {
      return undefined;
    }
    if (!type.name) {
      // TODO: https://github.com/Azure/typespec-azure/issues/1713 and https://github.com/microsoft/typespec/issues/4815
      // throw new Error(`NYI Serialization of anonymous types`);
      return undefined;
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
    return buildPolymorphicSerializer(context, type, nameOnly);
  }

  if (isDiscriminatedUnion(type) && !skipDiscriminatedUnion) {
    return buildDiscriminatedUnionSerializer(context, type, nameOnly);
  }

  switch (type.kind) {
    case "model":
      return buildModelTypeSerializer(context, type, {
        nameOnly,
        skipDiscriminatedUnionSuffix: skipDiscriminatedUnion
      });
    case "union": // for non-discriminated union, we just return whatever we get
      return buildUnionSerializer(context, type, nameOnly);
    case "dict":
      return buildDictTypeSerializer(context, type, nameOnly);
    case "array":
      return buildArrayTypeSerializer(context, type, nameOnly);
    default:
      return undefined;
  }
}

function hasAdditionalProperties(type: SdkType | undefined) {
  if (!type || !("additionalProperties" in type)) {
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

function buildPolymorphicSerializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly: boolean
): string;
function buildPolymorphicSerializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure | undefined;
function buildPolymorphicSerializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const serializeFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Serializer`;
  if (nameOnly) {
    return serializeFunctionName;
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializeFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: normalizeModelName(context, type)
      }
    ],
    returnType: "any",
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
        (subType.usage & UsageFlags.Input) !== UsageFlags.Input)
    ) {
      return;
    }
    const union = subType?.discriminatedSubtypes ? "Union" : "";
    if (!subType || subType?.name) {
      throw new Error(`NYI Serialization of anonymous types`);
    }
    const subTypeName = `${toPascalCase(subType.name)}${union}`;
    const subtypeSerializerName = toCamelCase(`${subTypeName}Serializer`);

    cases.push(`
        case "${discriminatedValue}":
          return ${subtypeSerializerName}(item as ${subTypeName});
      `);
  });

  statements.push(`
      switch (item.${type.discriminatorProperty.name}) {
       ${cases.join("\n")}
        default:
          return item;
      }
    `);
  serializerFunction.statements = statements.join("\n");
  return serializerFunction;
}

function buildDiscriminatedUnionSerializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly: boolean
): string;
function buildDiscriminatedUnionSerializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure | undefined;
function buildDiscriminatedUnionSerializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const cases: string[] = [];
  const output: string[] = [];
  const serializeFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Serializer`;
  if (nameOnly) {
    return serializeFunctionName;
  }
  const baseSerializerName = `${normalizeModelName(
    context,
    type,
    NameType.Operation,
    true
  )}Serializer`;
  for (const key in type.discriminatedSubtypes) {
    const subType = type.discriminatedSubtypes[key]!;
    if (
      !subType.usage ||
      (subType.usage !== undefined &&
        (subType.usage & UsageFlags.Input) !== UsageFlags.Input)
    ) {
      continue;
    }
    const discriminatedValue = subType.discriminatorValue!;
    const union = subType.discriminatedSubtypes ? "Union" : "";
    const subTypeName = `${toPascalCase(subType.name)}${union}`;
    const subtypeSerializerName = toCamelCase(`${subTypeName}Serializer`);

    cases.push(`
      case "${discriminatedValue}":
        return ${subtypeSerializerName}(item as ${subTypeName});
    `);
  }
  output.push(`
    switch (item.${type.discriminatorProperty?.name}) {
     ${cases.join("\n")}
      default:
        return ${baseSerializerName}(item);
    }
  `);

  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializeFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: normalizeModelName(context, type)
      }
    ],
    returnType: "any",
    statements: output.join("\n")
  };
  return serializerFunction;
}

function buildUnionSerializer(
  context: SdkContext,
  type: SdkUnionType,
  nameOnly: boolean
): string;
function buildUnionSerializer(
  context: SdkContext,
  type: SdkUnionType
): FunctionDeclarationStructure;
function buildUnionSerializer(
  context: SdkContext,
  type: SdkUnionType,
  nameOnly = false
): FunctionDeclarationStructure | string {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const serializerFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Serializer`;
  if (nameOnly) {
    return serializerFunctionName;
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${normalizeModelName(context, type, NameType.Operation)}Serializer`,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: normalizeModelName(context, type)
      }
    ],
    returnType: "any",
    statements: ["return item;"]
  };
  return serializerFunction;
}

function buildModelTypeSerializer(
  context: SdkContext,
  type: SdkModelType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
): FunctionDeclarationStructure | string {
  if (!type.name) {
    throw new Error(`NYI Deserialization of anonymous types`);
  }
  const serializerFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation,
    options.skipDiscriminatedUnionSuffix
  )}Serializer`;
  if (options.nameOnly) {
    return serializerFunctionName;
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: normalizeModelName(
          context,
          type,
          NameType.Interface,
          options.skipDiscriminatedUnionSuffix
        )
      }
    ],
    returnType: "any",
    statements: ["return item;"]
  };

  // This is only handling the compatibility mode, will need to update when we handle additionalProperties property.
  const additionalPropertiesSpread = hasAdditionalProperties(type)
    ? "...item"
    : "";

  const { directAssignment, propertiesStr } = getRequestModelMapping(
    context,
    type,
    "item"
  );
  if (additionalPropertiesSpread) {
    propertiesStr.unshift(additionalPropertiesSpread);
  }
  const serializeContent =
    directAssignment === true
      ? propertiesStr.join(",")
      : `{${propertiesStr.join(",")}}`;

  const output = [];

  // don't emit a serializer if there is nothing to serialize
  if (propertiesStr.length) {
    output.push(`
        return ${serializeContent}
      `);
  } else {
    output.push(`
        return item;
      `);
  }
  serializerFunction.statements = output;
  return serializerFunction;
}

function buildDictTypeSerializer(
  context: SdkContext,
  type: SdkDictionaryType,
  nameOnly: boolean
): string;
function buildDictTypeSerializer(
  context: SdkContext,
  type: SdkDictionaryType
): FunctionDeclarationStructure | undefined;
function buildDictTypeSerializer(
  context: SdkContext,
  type: SdkDictionaryType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  const valueSerializer = buildModelSerializer(
    context,
    type.valueType,
    false,
    true
  );
  if (!valueSerializer) {
    return undefined;
  }
  if (!isSupportedSerializeType(type.valueType)) {
    return undefined;
  }

  if (typeof valueSerializer !== "string") {
    return undefined;
  }
  const valueTypeName = toCamelCase(
    valueSerializer ? valueSerializer.replace("Serializer", "") : ""
  );
  const serializerFunctionName = `${valueTypeName}RecordSerializer`;
  if (nameOnly) {
    return serializerFunctionName;
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: `Record<string, ${normalizeModelName(context, type.valueType as any) ?? "any"}>`
      }
    ],
    returnType: "Record<string, any>",
    statements: [
      `
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]? item[key]: ${valueSerializer}(item[key])
  });
  return result;
      `
    ]
  };
  return serializerFunction;
}

function buildArrayTypeSerializer(
  context: SdkContext,
  type: SdkArrayType,
  nameOnly: boolean
): string;
function buildArrayTypeSerializer(
  context: SdkContext,
  type: SdkArrayType
): FunctionDeclarationStructure | undefined;
function buildArrayTypeSerializer(
  context: SdkContext,
  type: SdkArrayType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  const valueSerializer = buildModelSerializer(
    context,
    type.valueType,
    false,
    true
  );
  if (!valueSerializer) {
    return undefined;
  }
  if (!isSupportedSerializeType(type.valueType)) {
    return undefined;
  }

  if (typeof valueSerializer !== "string") {
    return undefined;
  }
  const valueTypeName = toCamelCase(
    valueSerializer ? valueSerializer.replace("Serializer", "") : ""
  );
  const serializerFunctionName = `${valueTypeName}ArraySerializer`;
  if (nameOnly) {
    return serializerFunctionName;
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializerFunctionName,
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
    return ${valueSerializer}(item)
  });
      `
    ]
  };
  return serializerFunction;
}
