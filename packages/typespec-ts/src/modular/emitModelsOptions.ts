import * as path from "path";

import {
  ModularEmitterOptions,
  Type as ModularType
} from "./modularCodeModel.js";

import { buildOperationOptions } from "./buildOperations.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { getModularClientOptions } from "../utils/clientUtils.js";
// import { SdkClient, SdkClientType, SdkHttpOperation } from "@azure-tools/typespec-client-generator-core";

// ====== UTILITIES ======

export function isModelWithAdditionalProperties(t: ModularType) {
  return t.type === "dict" && t.name !== "Record";
}

export function buildModelTypeAlias(model: ModularType) {
  return {
    name: model.name!,
    isExported: true,
    docs: ["Alias for " + model.name],
    type: model.aliasType!
  };
}

export function buildApiOptions(
  context: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
) {
  const { subfolder } = getModularClientOptions(context, client);
  const modelOptionsFile = emitterOptions.project.createSourceFile(
    path.join(
      emitterOptions.modularOptions.sourceRoot,
      subfolder ?? "",
      `api/options.ts`
    ),
    undefined,
    {
      overwrite: true
    }
  );
  const methodMap = getMethodHierarchiesMap(context, client);
  for (const [prefixKey, operations] of methodMap) {
    const prefixes = prefixKey.split("/");
    operations.forEach((o) => {
      buildOperationOptions(context, [prefixes, o], modelOptionsFile);
    });
  }

  modelOptionsFile
    .getImportDeclarations()
    .filter((id) => {
      return (
        id.isModuleSpecifierRelative() &&
        !id.getModuleSpecifierValue().endsWith(".js")
      );
    })
    .map((id) => {
      id.setModuleSpecifier(id.getModuleSpecifierValue() + ".js");
      return id;
    });
  return modelOptionsFile;
}
