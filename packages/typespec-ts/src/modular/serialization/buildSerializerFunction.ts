import { toCamelCase, toPascalCase } from "../../utils/casingUtils.js";
import { Type as ModularType } from "../modularCodeModel.js";
import { getRequestModelMapping } from "../helpers/operationHelpers.js";
import { useContext } from "../../contextManager.js";

import {
  Imports as RuntimeImports,
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

  const restModelName = rlcMetadata.get(type.__raw!)?.rlcType.name;

  if (!restModelName) {
    throw new Error(`Could not find rest model name for type ${type.name}`);
  }

  const restModelNameAlias = `${restModelName}Rest`;
  addImportToSpecifier(
    "rlcIndex",
    runtimeImports,
    `${restModelName} as ${restModelNameAlias}`
  );

  if (type.type === "model") {
    return `
  export function ${serializerName}(item: ${toPascalCase(
    type.name
  )}): ${restModelNameAlias} {
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
    )}): ${restModelNameAlias} {
      return item;
    }
    `;
  }

  throw new Error(`NYI Serialization of type ${type.type}`);
}
