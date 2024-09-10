import { FunctionDeclarationStructure, StructureKind } from "ts-morph";
import {
  SdkDictionaryType,
  SdkEnumType,
  SdkModelType,
  SdkType,
  SdkUnionType
} from "@azure-tools/typespec-client-generator-core";
import { toCamelCase, toPascalCase } from "../../utils/casingUtils.js";

import { SdkContext } from "../../utils/interfaces.js";
import { UsageFlags } from "@typespec/compiler";
import { getRequestModelMapping } from "../helpers/operationHelpers.js";
import { getType } from "../buildCodeModel.js";
import { normalizeModelName } from "../emitModels.js";

function isSupportedSerializerType(type: SdkType): boolean {
  return (
    type.kind === "model" ||
    type.kind === "enum" ||
    type.kind === "dict" ||
    type.kind === "array" ||
    type.kind === "union"
  );
}

export function buildModelSerializer(
  context: SdkContext,
  type: SdkType,
  skipDiscriminatedUnion = false
): FunctionDeclarationStructure | undefined {
  // const modelTcgcType = getTcgcType(type) as SdkModelType;
  if (!isSupportedSerializerType(type)) {
    return undefined;
  }
  if (type.kind === "model") {
    if (
      type.usage !== undefined &&
      (type.usage & UsageFlags.Input) !== UsageFlags.Input
    ) {
      return undefined;
    }
    if (!type.name) {
      throw new Error(`NYI Serialization of anonymous types`);
    }
  }

  if (
    !isDiscriminatedUnion(type) &&
    type.kind === "model" &&
    type.discriminatorProperty
  ) {
    return buildPolymorphicSerializer(context, type);
  }

  if (isDiscriminatedUnion(type) && !skipDiscriminatedUnion) {
    return buildDiscriminatedUnionSerializer(context, type);
  }

  switch (type.kind) {
    case "model":
      return buildModelTypeSerializer(context, type);
    case "enum":
    case "union":
      return buildEnumSerializer(context, type);
    case "dict":
      return buildDictTypeSerializer(context, type);
    default:
      return undefined;
  }
}

function isDiscriminatedUnion(
  type: SdkType
): type is SdkModelType & { discriminatorProperty: SdkType } {
  return Boolean(
    type?.kind === "model" &&
      type.discriminatorProperty &&
      type.discriminatedSubtypes
  );
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
  type: SdkModelType
): FunctionDeclarationStructure | undefined {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${toCamelCase(normalizeModelName(context, type))}UnionSerializer`,
    isExported: true,
    parameters: [],
    returnType: "Record<string, unknown>",
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
    const union = subType?.discriminatedSubtypes ? "Union" : "";
    if (!subType || subType?.name) {
      throw new Error(`NYI Serialization of anonymous types`);
    }
    if (union !== "") {
      subType;
    }
    const subTypeName = `${toPascalCase(subType.name)}${union}`;
    const subtypeSerializerName = toCamelCase(`${subTypeName}Serializer`);

    cases.push(`
        case "${discriminatedValue}":
          return ${subtypeSerializerName}(item as ${subTypeName});
      `);
  });

  const params = [
    {
      name: "item",
      type: `${toPascalCase(normalizeModelName(context, type)!)}`
    }
  ];
  statements.push(`
      switch (item.${type.discriminatorProperty.name}) {
       ${cases.join("\n")}
        default:
          return item;
      }
    `);
  serializerFunction.parameters = params;
  serializerFunction.statements = statements.join("\n");
  return serializerFunction;
}

function buildDiscriminatedUnionSerializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure | undefined {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const cases: string[] = [];
  const output: string[] = [];
  const baseSerializerName = `${toCamelCase(
    normalizeModelName(context, type)
  )}Serializer`;
  for (const key in type.discriminatedSubtypes) {
    const subType = type.discriminatedSubtypes[key]!;
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
    name: `${toCamelCase(normalizeModelName(context, type))}UnionSerializer`,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: toPascalCase(normalizeModelName(context, type))
      }
    ],
    returnType: "Record<string, unknown>",
    statements: output.join("\n")
  };
  return serializerFunction;
}

function buildEnumSerializer(
  context: SdkContext,
  type: SdkEnumType | SdkUnionType
): FunctionDeclarationStructure {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${toCamelCase(normalizeModelName(context, type))}Serializer`,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: toPascalCase(normalizeModelName(context, type))
      }
    ],
    returnType: "any",
    statements: ["return item;"]
  };
  return serializerFunction;
}

function buildModelTypeSerializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${toCamelCase(normalizeModelName(context, type))}Serializer`,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: toPascalCase(normalizeModelName(context, type))
      }
    ],
    returnType: "Record<string, unknown>",
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

  const { propertiesStr, directAssignment } = getRequestModelMapping(
    getType(context, type.__raw!),
    "item"
  );
  const propertiesSerialization = propertiesStr.filter((p) => p.trim());

  const output = [];

  // don't emit a serializer if there is nothing to serialize
  if (propertiesSerialization.length || additionalPropertiesSpread) {
    const spreadSerialized = directAssignment ? "..." : "";
    const fnBody = `{
           ${additionalPropertiesSpread}
           ${nullabilityPrefix} ${spreadSerialized} ${propertiesSerialization.join(
             ",\n"
           )}
        }`;
    output.push(`
        return ${fnBody}
      `);
  } else {
    output.push(`
        return item as any;
      `);
  }
  serializerFunction.statements = output;
  return serializerFunction;
}

function buildDictTypeSerializer(
  context: SdkContext,
  type: SdkDictionaryType
): FunctionDeclarationStructure | undefined {
  const valueSerializer = buildModelSerializer(context, type.valueType);
  if (!valueSerializer) {
    return undefined;
  }
  if (!isSupportedSerializerType(type.valueType)) {
    return undefined;
  }
  const valueTypeName = toCamelCase(
    valueSerializer.name ? valueSerializer.name.replace("Serializer", "") : ""
  );
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${valueTypeName}RecordSerializer`,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: `Record<string, ${normalizeModelName(context, type.valueType as any) ?? "any"}>`
      }
    ],
    returnType: "Record<string, unknown>",
    statements: [
      `
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = ${valueSerializer.name}(item[key])
  })
  return result;
      `
    ]
  };
  return serializerFunction;
}
