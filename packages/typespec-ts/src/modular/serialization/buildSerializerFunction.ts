import { toCamelCase, toPascalCase } from "../../utils/casingUtils.js";
import { Type as ModularType } from "../modularCodeModel.js";
import { getRequestModelMapping } from "../helpers/operationHelpers.js";
import { useContext } from "../../contextManager.js";

import {
  Imports as RuntimeImports,
  SchemaContext,
  addImportToSpecifier
} from "@azure-tools/rlc-common";
import { UsageFlags } from "@typespec/compiler";
import {
  SdkModelType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";

function getTcgcType(type: ModularType): SdkType {
  if (type.tcgcType?.kind === "nullable") {
    return type.tcgcType.type!;
  }
  return type.tcgcType!;
}
export function buildModelSerializer(
  type: ModularType,
  runtimeImports: RuntimeImports
): string | undefined {
  const rlcMetadata = useContext("rlcMetaTree");
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

  let serializerName = `${toCamelCase(type.name)}Serializer`;

  const restModel = rlcMetadata.get(type.__raw!);
  const restModelName = restModel?.rlcType.name;

  const output: string[] = [];

  if (
    !isDiscriminatedUnion(type) &&
    type.type === "combined" &&
    type.discriminator
  ) {
    return buildPolymorphicSerializer(type);
  }

  if (isDiscriminatedUnion(type)) {
    const discriminatedTgcType = getTcgcType(type) as SdkModelType;
    const cases: string[] = [];
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
    export function ${toCamelCase(type.name)}Serializer(item: ${toPascalCase(
      type.name
    )}) {
      switch (item.${type.discriminator}) {
       ${cases.join("\n")}
        default:
          return ${baseSerializerName}(item);
      }
    }
    `);

    serializerName = baseSerializerName;
  }

  let serializerReturnType = "";

  // There are some situations where the type is not present in the REST API,
  // this can happen when client.tsp overrides visibility to public on an orphan model
  // In this case we just let TypeScript infer the return type.
  let restModelNameAlias = "";
  if (restModelName && restModel.rlcType.usage?.includes(SchemaContext.Input)) {
    restModelNameAlias = `${restModelName}Rest`;
    serializerReturnType = `: ${restModelNameAlias}`;
  }

  if (type.type === "model" || type.type === "dict") {
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
      "item",
      runtimeImports
    );
    const propertiesSerialization = propertiesStr.filter((p) => p.trim());

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
        export function ${serializerName}(item: ${toPascalCase(
          type.name
        )})${serializerReturnType} {
          return ${fnBody}
        }
        `);

      if (serializerReturnType) {
        addImportToSpecifier(
          "rlcIndex",
          runtimeImports,
          `${restModelName} as ${restModelNameAlias}`
        );
      }
    } else {
      output.push(`
        export function ${serializerName}(item: ${toPascalCase(type.name)}) {
          return item as any;
        }
        `);
    }
  } else if (type.type === "enum") {
    output.push(`
    export function ${serializerName}(item: ${toPascalCase(
      type.name
    )})${serializerReturnType} {
      return item;
    }
    `);
  }

  return output.join("\n");
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

function buildPolymorphicSerializer(type: ModularType) {
  if (!type.discriminator) {
    return;
  }
  const output: string[] = [];

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

  output.push(`
    export function ${toCamelCase(type.name!)}Serializer(item: ${toPascalCase(
      type.name!
    )}) {
      switch (item.${type.discriminator}) {
       ${cases.join("\n")}
        default:
          return item;
      }
    }
    `);

  return output.join("\n");
}
