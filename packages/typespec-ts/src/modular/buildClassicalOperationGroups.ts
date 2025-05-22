import { NameType } from "@azure-tools/rlc-common";
import { SourceFile } from "ts-morph";
import { getClassicalOperation } from "./helpers/classicalOperationHelpers.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import { ModularEmitterOptions } from "./interfaces.js";
import { SdkContext } from "../utils/interfaces.js";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { useContext } from "../contextManager.js";

export function buildClassicOperationFiles(
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions
) {
  // const sdkPackage = dpgContext.sdkPackage;
  const project = useContext("outputProject");
  const [_hierarchy, client] = clientMap;
  const { subfolder } = getModularClientOptions(clientMap);
  const classicOperationFiles: Map<string, SourceFile> = new Map<
    string,
    SourceFile
  >();
  const methodMap = getMethodHierarchiesMap(dpgContext, client);
  for (const [prefixKey, operations] of methodMap) {
    const prefixes = prefixKey.split("/");
    if (prefixes.length > 0 && prefixKey !== "") {
      const classicOperationFileName =
        prefixes.length > 0
          ? `${getClassicalLayerPrefix(
              prefixes,
              NameType.File,
              "/",
              prefixes.length - 1
            )}/index`
          : // When the program has no operation groups defined all operations are put
            // into a nameless operation group. We'll call this operations.
            "index";

      const srcPath = emitterOptions.modularOptions.sourceRoot;
      const classicFile =
        classicOperationFiles.get(classicOperationFileName) ??
        project.createSourceFile(
          `${srcPath}/${
            subfolder && subfolder !== "" ? subfolder + "/" : ""
          }classic/${classicOperationFileName}.ts`
        );
      getClassicalOperation(dpgContext, clientMap, classicFile, [
        prefixes,
        operations
      ]);
      classicOperationFiles.set(classicOperationFileName, classicFile);
    }
  }
  for (const [prefixKey, operations] of methodMap) {
    const prefixes = prefixKey.split("/");
    if (prefixes.length > 0 && prefixKey !== "") {
      for (let layer = 0; layer < prefixes.length - 1; layer++) {
        const classicOperationFileName =
          prefixes.length > 0
            ? `${getClassicalLayerPrefix(
                prefixes,
                NameType.File,
                "/",
                layer
              )}/index`
            : // When the program has no operation groups defined all operations are put
              // into a nameless operation group. We'll call this operations.
              "index";
        const srcPath = emitterOptions.modularOptions.sourceRoot;
        const classicFile =
          classicOperationFiles.get(classicOperationFileName) ??
          project.createSourceFile(
            `${srcPath}/${
              subfolder && subfolder !== "" ? subfolder + "/" : ""
            }classic/${classicOperationFileName}.ts`
          );
        getClassicalOperation(
          dpgContext,
          clientMap,
          classicFile,
          [prefixes, operations],
          layer
        );
        classicOperationFiles.set(classicOperationFileName, classicFile);
      }
    }
  }
  return classicOperationFiles;
}
