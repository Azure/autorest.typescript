import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { SourceFile } from "ts-morph";
import { addDeclaration } from "../framework/declaration.js";
import { refkey } from "../framework/refkey.js";
import { useContext } from "../contextManager.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  getModularClientOptions,
  isRLCMultiEndpoint
} from "../utils/clientUtils.js";
import { ServiceOperation } from "../utils/operationUtil.js";
import {
  buildSubpathIndexFile,
  partitionAndEmitExports
} from "./buildSubpathIndex.js";
import { buildAugmentations } from "./buildAugmentations.js";
import { buildBetaIndex } from "./buildBetaIndex.js";
import { getClassicalOperation } from "./helpers/classicalOperationHelpers.js";
import {
  getDeserializeExceptionHeadersPrivateFunction,
  getDeserializeHeadersPrivateFunction,
  getDeserializePrivateFunction,
  getOperationFunction,
  getSendPrivateFunction
} from "./helpers/operationHelpers.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import {
  getPreviewOnlyTopLevelGroups,
  PreviewClassification
} from "./helpers/previewDetection.js";
import { ModularEmitterOptions } from "./interfaces.js";

export function buildBeta(
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions,
  previewInfo: PreviewClassification,
  previewChildClientNames?: Set<string>
) {
  const hasPreviewGroups =
    previewInfo.hasAnyPreview && previewInfo.previewMethods.size > 0;
  const hasPreviewChildren =
    previewChildClientNames && previewChildClientNames.size > 0;
  if (!hasPreviewGroups && !hasPreviewChildren) {
    return;
  }
  const previewGroups = getPreviewOnlyTopLevelGroups(previewInfo);
  const { subfolder } = getModularClientOptions(clientMap);
  const betaRoot = [emitterOptions.modularOptions.sourceRoot, subfolder, "beta"]
    .filter((segment) => segment && segment !== "")
    .join("/");
  const betaEmitterOptions: ModularEmitterOptions = {
    ...emitterOptions,
    modularOptions: {
      ...emitterOptions.modularOptions,
      sourceRoot: betaRoot
    }
  };
  const betaClientMap: [string[], SdkClientType<SdkServiceOperation>] = [
    [],
    clientMap[1]
  ];
  const previewOperationGroups = previewInfo.previewMethods;
  if (previewOperationGroups.size > 0) {
    buildPreviewOperationFiles(
      dpgContext,
      betaClientMap,
      betaEmitterOptions,
      previewOperationGroups
    );
    buildPreviewClassicFiles(
      dpgContext,
      betaClientMap,
      betaEmitterOptions,
      previewOperationGroups
    );
    const apiIndexOptions = emitterOptions.options.hierarchyClient
      ? { recursive: true, exportIndex: false }
      : { recursive: true, exportIndex: true };
    buildSubpathIndexFile(
      betaEmitterOptions,
      "api",
      betaClientMap,
      apiIndexOptions
    );
    ensureApiBarrelFile(betaRoot);
    buildSubpathIndexFile(betaEmitterOptions, "classic", betaClientMap, {
      exportIndex: true,
      interfaceOnly: true
    });
  } else if (hasPreviewChildren) {
    const project = useContext("outputProject");
    project.createSourceFile(`${betaRoot}/api/index.ts`, "", {
      overwrite: true
    });
  }
  const previewOnlyNestedGroups = getPreviewOnlyNestedGroups(
    previewInfo,
    previewGroups
  );
  buildAugmentations(
    dpgContext,
    clientMap,
    betaEmitterOptions,
    previewInfo,
    previewGroups,
    previewOnlyNestedGroups,
    previewChildClientNames
  );
  buildBetaIndex(
    dpgContext,
    clientMap,
    betaEmitterOptions,
    previewInfo,
    previewGroups,
    previewOnlyNestedGroups,
    previewChildClientNames
  );
}

function getPreviewOnlyNestedGroups(
  previewInfo: PreviewClassification,
  previewTopLevelGroups: Set<string>
): Set<string> {
  const nestedGroups = new Set<string>();
  for (const groupKey of previewInfo.previewOnlyGroups) {
    if (!groupKey) {
      continue;
    }
    const [topLevel] = groupKey.split("/");
    if (!topLevel || previewTopLevelGroups.has(topLevel)) {
      continue;
    }
    if (groupKey.includes("/")) {
      nestedGroups.add(groupKey);
    }
  }
  return nestedGroups;
}

function buildPreviewOperationFiles(
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions,
  previewOperationGroups: Map<string, ServiceOperation[]>
) {
  const project = useContext("outputProject");
  const { rlcClientName } = getModularClientOptions(clientMap);
  const isMultiEndpoint = isRLCMultiEndpoint(dpgContext);
  const clientType = isMultiEndpoint ? `Client.${rlcClientName}` : "Client";
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  for (const [prefixKey, operations] of previewOperationGroups) {
    const prefixes = prefixKey.split("/");
    const operationFileName =
      prefixes.length > 0 && prefixKey !== ""
        ? `${prefixes
            .map((hierarchy) => normalizeName(hierarchy, NameType.File))
            .join("/")}/operations`
        : "operations";
    const filepath = `${srcPath}/api/${operationFileName}.ts`;
    const operationGroupFile = project.createSourceFile(filepath);
    operations.forEach((op) => {
      const operationDeclaration = getOperationFunction(
        dpgContext,
        [prefixes, op],
        clientType
      );
      const sendOperationDeclaration = getSendPrivateFunction(
        dpgContext,
        [prefixes, op],
        clientType,
        clientMap[1]
      );
      const deserializeOperationDeclaration = getDeserializePrivateFunction(
        dpgContext,
        op
      );
      const deserializeHeadersDeclaration =
        getDeserializeHeadersPrivateFunction(dpgContext, op);
      const deserializeExceptionHeadersDeclaration =
        getDeserializeExceptionHeadersPrivateFunction(dpgContext, op);
      const functionsToAdd = [
        sendOperationDeclaration,
        deserializeOperationDeclaration
      ];
      if (deserializeHeadersDeclaration) {
        functionsToAdd.push(deserializeHeadersDeclaration);
      }
      if (deserializeExceptionHeadersDeclaration) {
        functionsToAdd.push(deserializeExceptionHeadersDeclaration);
      }
      operationGroupFile.addFunctions(functionsToAdd);
      addDeclaration(
        operationGroupFile,
        operationDeclaration,
        refkey(op, "api")
      );
    });
    const prefixDepth = prefixKey === "" ? 0 : prefixes.length;
    const indexPathPrefix = "../".repeat(prefixDepth + 2);
    operationGroupFile.addImportDeclaration({
      namedImports: [`${rlcClientName} as Client`],
      moduleSpecifier: `${indexPathPrefix}api/index.js`
    });
    operationGroupFile.fixUnusedIdentifiers();
  }
}

function buildPreviewClassicFiles(
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions,
  previewOperationGroups: Map<string, ServiceOperation[]>
) {
  const project = useContext("outputProject");
  const { subfolder } = getModularClientOptions(clientMap);
  const classicOperationFiles: Map<string, SourceFile> = new Map<
    string,
    SourceFile
  >();
  for (const [prefixKey, operations] of previewOperationGroups) {
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
          : "index";
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
        undefined,
        1
      );
      classicOperationFiles.set(classicOperationFileName, classicFile);
    }
  }
  for (const [prefixKey, operations] of previewOperationGroups) {
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
            : "index";
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
          layer,
          1
        );
        classicOperationFiles.set(classicOperationFileName, classicFile);
      }
    }
  }
  return classicOperationFiles;
}

/**
 * Ensure the root beta/api/index.ts barrel file exists.
 * buildSubpathIndexFile only creates index files for directories that
 * contain source files directly, but the root api/ folder may only
 * have subdirectories (e.g. api/insights/). In that case we create a
 * barrel that re-exports from each child index file.
 */
function ensureApiBarrelFile(betaRoot: string): void {
  const project = useContext("outputProject");
  const barrelPath = `${betaRoot}/api/index.ts`;
  if (project.getSourceFile(barrelPath)) {
    return;
  }
  // Create the barrel file first so we get a resolved absolute path
  // from ts-morph for consistent path comparisons.
  const barrelFile = project.createSourceFile(barrelPath);
  const barrelDir = barrelFile.getDirectoryPath().replace(/\\/g, "/");
  const barrelFilePath = barrelFile.getFilePath().replace(/\\/g, "/");
  const childIndexFiles = project.getSourceFiles().filter((file) => {
    const filePath = file.getFilePath().replace(/\\/g, "/");
    return (
      filePath.startsWith(barrelDir + "/") &&
      filePath.endsWith("/index.ts") &&
      filePath !== barrelFilePath
    );
  });
  if (childIndexFiles.length === 0) {
    project.removeSourceFile(barrelFile);
    return;
  }
  for (const childIndex of childIndexFiles) {
    const entries = [...childIndex.getExportedDeclarations().entries()].filter(
      ([name]) => !name.startsWith("_")
    );
    if (entries.length > 0) {
      const relativePath = `.${childIndex
        .getFilePath()
        .replace(barrelFile.getDirectoryPath(), "")
        .replace(/\\/g, "/")
        .replace(".ts", "")}.js`;
      partitionAndEmitExports(barrelFile, relativePath, entries);
    }
  }
}
