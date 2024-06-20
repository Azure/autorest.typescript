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

  const serializerName = `${toCamelCase(type.name)}Serializer`;

  const restModel = rlcMetadata.get(type.__raw!);
  const restModelName = restModel?.rlcType.name;

  let serializerReturnType = "";

  // There are some situations where the type is not present in the REST API,
  // this can happen when client.tsp overrides visibility to public on an orphan model
  // In this case we just let TypeScript infer the return type.
  if (restModelName && restModel.rlcType.usage?.includes(SchemaContext.Input)) {
    console.log(restModel.rlcType.usage);
    const restModelNameAlias = `${restModelName}Rest`;
    addImportToSpecifier(
      "rlcIndex",
      runtimeImports,
      `${restModelName} as ${restModelNameAlias}`
    );

    serializerReturnType = `: ${restModelNameAlias}`;
  }

  if (type.type === "model") {
    return `
  export function ${serializerName}(item: ${toPascalCase(
    type.name
  )})${serializerReturnType} {
    return {
        ${getRequestModelMapping(type, "item", runtimeImports).join(",\n")}
    }
  }
  `;
  }

  if (type.type === "enum") {
    return `
    export function ${serializerName}(item: ${toPascalCase(
      type.name
    )})${serializerReturnType} {
      return item;
    }
    `;
  }

  throw new Error(`NYI Serialization of type ${type.type}`);
}
