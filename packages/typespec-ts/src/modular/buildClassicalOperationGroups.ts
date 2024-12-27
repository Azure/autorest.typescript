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

export function buildClassicOperationFiles(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
) {
  // const sdkPackage = dpgContext.sdkPackage;
  const { subfolder } = getModularClientOptions(dpgContext, client);
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
        emitterOptions.project.createSourceFile(
          `${srcPath}/${
            subfolder && subfolder !== "" ? subfolder + "/" : ""
          }classic/${classicOperationFileName}.ts`
        );
      getClassicalOperation(dpgContext, client, classicFile, [
        prefixes,
        operations
      ]);

      importApis(dpgContext, classicFile, client, emitterOptions, prefixes);
      // We need to import the paging helpers and types explicitly because ts-morph may not be able to find them.
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
          emitterOptions.project.createSourceFile(
            `${srcPath}/${
              subfolder && subfolder !== "" ? subfolder + "/" : ""
            }classic/${classicOperationFileName}.ts`
          );
        getClassicalOperation(
          dpgContext,
          client,
          classicFile,
          [prefixes, operations],
          layer
        );
        importApis(
          dpgContext,
          classicFile,
          client,
          emitterOptions,
          prefixes,
          layer
        );
        classicOperationFiles.set(classicOperationFileName, classicFile);
      }
    }
  }
  return classicOperationFiles;
}

function importApis(
  context: SdkContext,
  classicFile: SourceFile,
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions,
  prefixes: string[],
  layer: number = prefixes.length - 1
) {
  const { subfolder } = getModularClientOptions(context, client);
  const classicOperationFileName =
    prefixes.length > 0 && prefixes[0] !== ""
      ? `${getClassicalLayerPrefix(prefixes, NameType.File, "/", layer)}/index`
      : // When the program has no operation groups defined all operations are put
        // into a nameless operation group. We'll call this operations.
        "index";

  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const apiFile = emitterOptions.project.getSourceFile(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }api/${classicOperationFileName}.ts`
  );

  if (!apiFile) {
    return;
  }

  const exported = [...apiFile.getExportedDeclarations().keys()].filter((e) => {
    return !e.startsWith("_");
  });

  const existApiImport = classicFile.getImportDeclarations().filter((i) => {
    return i
      .getModuleSpecifierValue()
      .includes(`../api/${classicOperationFileName}`);
  })[0];
  if (exported.length > 0 && !existApiImport) {
    classicFile.addImportDeclaration({
      moduleSpecifier: `${"../".repeat(
        prefixes.length + 1
      )}api/${classicOperationFileName}.js`,
      namedImports: exported
    });
  }
}
