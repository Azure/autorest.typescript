import { FunctionDeclarationStructure, StructureKind } from "ts-morph";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  SdkModelType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { toCamelCase, toPascalCase } from "../../utils/casingUtils.js";

import { Type as ModularType } from "../modularCodeModel.js";
import { UsageFlags } from "@typespec/compiler";
import { getRequestModelMapping } from "../helpers/operationHelpers.js";

function getTcgcType(type: ModularType): SdkType {
  if (type.tcgcType?.kind === "nullable") {
    return type.tcgcType.type!;
  }
  return type.tcgcType!;
}
export function buildModelSerializer(
  type: ModularType
): FunctionDeclarationStructure | undefined {
  const modelTcgcType = getTcgcType(type) as SdkModelType;
  if (
    modelTcgcType.usage !== undefined &&
    (modelTcgcType.usage & UsageFlags.Input) !== UsageFlags.Input
  ) {
    return undefined;
  }
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }

  if (
    !isDiscriminatedUnion(type) &&
    type.type === "combined" &&
    type.discriminator
  ) {
    return buildPolymorphicSerializer(type);
  }

  if (isDiscriminatedUnion(type)) {
    buildDiscriminatedUnionSerializer(type);
  }

  if (type.type === "model" || type.type === "dict") {
    return buildModelTypeSerializer(type);
  } else if (type.type === "enum") {
    return buildEnumSerializer(type);
  }
  return undefined;
}

function isDiscriminatedUnion(
  type: ModularType
): type is ModularType & { tcgcType: SdkModelType } {
  const { tcgcType } = type;

  return Boolean(
    tcgcType?.kind === "model" &&
      tcgcType.discriminatorProperty &&
      tcgcType.discriminatedSubtypes
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
  type: ModularType
): FunctionDeclarationStructure | undefined {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${normalizeName(type.name, NameType.Method)}Serializer`,
    isExported: true,
    parameters: [],
    returnType: "unknown",
    statements: []
  };
  if (!type.discriminator) {
    return;
  }
  const statements: string[] = [];

  const subTypes = type.types ?? [];

  const cases: string[] = [];
  for (const subType of subTypes) {
    const discriminatedValue = subType.discriminatorValue!;
    const union = subType.types ? "Union" : "";
    const subTypeName = `${toPascalCase(subType.name!)}${union}`;
    const subtypeSerializerName = toCamelCase(`${subTypeName}Serializer`);

    cases.push(`
        case "${discriminatedValue}":
          return ${subtypeSerializerName}(item as ${subTypeName});
      `);
  }

  const params = [
    {
      name: "item",
      type: `${toPascalCase(type.name!)}`
    }
  ];
  statements.push(`
      switch (item.${type.discriminator}) {
       ${cases.join("\n")}
        default:
          return item;
      }
    `);
  serializerFunction.parameters = params;
  serializerFunction.statements = statements;
  return serializerFunction;
}

function buildDiscriminatedUnionSerializer(
  type: ModularType
): FunctionDeclarationStructure | undefined {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const discriminatedTgcType = getTcgcType(type) as SdkModelType;
  const cases: string[] = [];
  const output: string[] = [];
  const baseSerializerName = `${toCamelCase(
    discriminatedTgcType.name
  )}Serializer`;
  for (const key in discriminatedTgcType.discriminatedSubtypes) {
    const subType = discriminatedTgcType.discriminatedSubtypes[key]!;
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
    switch (item.${type.discriminator}) {
     ${cases.join("\n")}
      default:
        return ${baseSerializerName}(item);
    }
  `);

  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${toCamelCase(type.name)}Serializer`,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: toPascalCase(type.name)
      }
    ],
    returnType: "Record<string, unknown>",
    statements: output
  };
  return serializerFunction;
}

function buildEnumSerializer(type: ModularType) {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${toCamelCase(type.name)}Serializer`,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: toPascalCase(type.name)
      }
    ],
    returnType: "Record<string, unknown>",
    statements: ["return item;"]
  };
  return serializerFunction;
}

function buildModelTypeSerializer(type: ModularType) {
  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: `${toCamelCase(type.name)}Serializer`,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: toPascalCase(type.name)
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
  const additionalPropertiesSpread = hasAdditionalProperties(type.tcgcType)
    ? "...item,"
    : "";

  const { propertiesStr, directAssignment } = getRequestModelMapping(
    type,
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
