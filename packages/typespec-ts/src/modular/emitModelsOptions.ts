import * as path from "path";

import { ModularEmitterOptions } from "./interfaces.js";

import { buildOperationOptions } from "./buildOperations.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { useContext } from "../contextManager.js";

// ====== UTILITIES ======

export function buildApiOptions(
  context: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions
) {
  const project = useContext("outputProject");
  const [_, client] = clientMap;
  const modelOptionsFiles = [];
  const { subfolder } = getModularClientOptions(clientMap);
  const methodMap = getMethodHierarchiesMap(context, client);
  for (const [prefixKey, operations] of methodMap) {
    const prefixes = prefixKey.split("/");
    const modelOptionsFile = project.createSourceFile(
      path.join(
        emitterOptions.modularOptions.sourceRoot,
        subfolder ?? "",
        `api`,
        ...prefixes.map((p) => normalizeName(p, NameType.File)),
        "options.ts"
      ),
      undefined,
      {
        overwrite: true
      }
    );
    operations.forEach((o) => {
      buildOperationOptions(context, [prefixes, o], modelOptionsFile);
    });
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
    modelOptionsFiles.push(modelOptionsFile);
  }

  return modelOptionsFiles;
}
