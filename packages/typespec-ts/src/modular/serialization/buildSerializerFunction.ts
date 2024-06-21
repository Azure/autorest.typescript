import { toCamelCase, toPascalCase } from "../../utils/casingUtils.js";
import { Type as ModularType } from "../modularCodeModel.js";
import {
  getPropertySerializationPrefix,
  getRequestModelMapping
} from "../helpers/operationHelpers.js";
import { useContext } from "../../contextManager.js";

import {
  Imports as RuntimeImports,
  SchemaContext,
  addImportToSpecifier
} from "@azure-tools/rlc-common";
import { UsageFlags } from "@typespec/compiler";

export function buildModelSerializer(
  type: ModularType,
  runtimeImports: RuntimeImports
): string | undefined {
  if (type.usage && (type.usage & UsageFlags.Input) !== UsageFlags.Input) {
    return undefined;
  }

  if (!type.name) {
    throw new Error(`NYI Serialization of anonymous types`);
  }

  const rlcMetadata = useContext("rlcMetaTree");

  let serializerName = `${toCamelCase(type.name)}Serializer`;

  const restModel = rlcMetadata.get(type.__raw!);
  const restModelName = restModel?.rlcType.name;

  const output: string[] = [];

  const tcgcType = type.tcgcType!;
  if (
    tcgcType.kind === "model" &&
    tcgcType.discriminatorProperty &&
    tcgcType.discriminatedSubtypes
  ) {
    const cases: string[] = [];
    const baseSerializerName = `${toCamelCase(tcgcType.name)}Serializer`;
    for (const key in tcgcType.discriminatedSubtypes) {
      const subType = tcgcType.discriminatedSubtypes[key]!;
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
    const nullabilityPrefix = getPropertySerializationPrefix({
      clientName: "item",
      type: { nullable: type.nullable }
    });

    // This is only handling the compatibility mode, will need to update when we handle additionalProperties property.
    const additionalPropertiesSpread =
      "additionalProperties" in type.tcgcType! &&
      type.tcgcType.additionalProperties
        ? "...item,"
        : "";

    const propertiesSerialization = getRequestModelMapping(
      type,
      "item",
      runtimeImports
    ).filter((p) => p.trim());

    // don't emit a serializer if there is nothing to serialize
    if (propertiesSerialization.length || additionalPropertiesSpread) {
      output.push(`
        export function ${serializerName}(item: ${toPascalCase(
          type.name
        )})${serializerReturnType} {
          return {
             ${additionalPropertiesSpread}
             ${nullabilityPrefix}${propertiesSerialization.join(",\n")}
          }
        }
        `);

      if (serializerReturnType) {
        addImportToSpecifier(
          "rlcIndex",
          runtimeImports,
          `${restModelName} as ${restModelNameAlias}`
        );
      }
    }
  }

  if (type.type === "enum") {
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
