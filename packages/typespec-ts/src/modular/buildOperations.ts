import { Project, SourceFile } from "ts-morph";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { buildType } from "./helpers/typeHelpers.js";
import {
  getOperationFunction,
  getSendPrivateFunction,
  getDeserializePrivateFunction,
  getOperationOptionsName,
  isLROOperation,
  isLROOnlyOperation
} from "./helpers/operationHelpers.js";
import { Client, ModularCodeModel, Operation } from "./modularCodeModel.js";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  getImportSpecifier,
  addImportsToFiles,
  clearImportSets
} from "@azure-tools/rlc-common";
import { importLroCoreDependencies } from "./buildLroFiles.js";
import { OperationPathAndDeserDetails } from "./interfaces.js";
import { getOperationName } from "./helpers/namingHelpers.js";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationFiles(
  dpgContext: SdkContext,
  codeModel: ModularCodeModel,
  client: Client,
  needUnexpectedHelper: boolean = true
) {
  const operationFiles = [];
  for (const operationGroup of client.operationGroups) {
    clearImportSets(codeModel.runtimeImports);
    const operationFileName =
      operationGroup.className && operationGroup.namespaceHierarchies.length > 0
        ? `${operationGroup.namespaceHierarchies
            .map((hierarchy) => {
              return normalizeName(hierarchy, NameType.File);
            })
            .join("/")}/index`
        : // When the program has no operation groups defined all operations are put
          // into a nameless operation group. We'll call this operations.
          "operations";

    const subfolder = client.subfolder;
    const srcPath = codeModel.modularOptions.sourceRoot;
    const operationGroupFile = codeModel.project.createSourceFile(
      `${srcPath}/${
        subfolder && subfolder !== "" ? subfolder + "/" : ""
      }api/${operationFileName}.ts`
    );
    // We need to import the lro helpers and types explicitly because ts-morph may not be able to find correct ones.
    importLroDependencies(
      operationGroupFile,
      operationGroup.namespaceHierarchies.length
    );

    // Import models used from ./models.ts
    // We SHOULD keep this because otherwise ts-morph will "helpfully" try to import models from the rest layer when we call fixMissingImports().
    const hasLro = operationGroup.operations.some((o) => isLROOperation(o));
    importModels(
      srcPath,
      operationGroupFile,
      codeModel.project,
      subfolder,
      operationGroup.namespaceHierarchies.length,
      hasLro ? new Set<string>().add("OperationState") : undefined
    );

    // Import the deserializeUtils
    importDeserializeUtils(
      srcPath,
      operationGroupFile,
      codeModel.project,
      "deserialize",
      subfolder,
      operationGroup.namespaceHierarchies.length
    );

    // Import the serializeUtils
    importDeserializeUtils(
      srcPath,
      operationGroupFile,
      codeModel.project,
      "serialize",
      subfolder,
      operationGroup.namespaceHierarchies.length
    );

    // We need to import the paging helpers and types explicitly because ts-morph may not be able to find them.
    importPagingDependencies(
      srcPath,
      operationGroupFile,
      codeModel.project,
      subfolder,
      operationGroup.namespaceHierarchies.length
    );

    const namedImports: string[] = [];
    let clientType = "Client";
    if (isRLCMultiEndpoint(dpgContext)) {
      namedImports.push(`Client`);
      clientType = `Client.${client.rlcClientName}`;
      if (needUnexpectedHelper) {
        namedImports.push("UnexpectedHelper");
      }
      operationGroupFile.addImportDeclarations([
        {
          moduleSpecifier: `../${"../".repeat(
            operationGroup.namespaceHierarchies.length
          )}rest/${subfolder}/index.js`,
          namedImports
        }
      ]);
    } else {
      if (needUnexpectedHelper) {
        namedImports.push("isUnexpected");
      }
      const rlcClientName = client.rlcClientName;
      namedImports.push(`${rlcClientName} as Client`);
      operationGroupFile.addImportDeclarations([
        {
          moduleSpecifier: `${
            subfolder && subfolder !== "" ? "../" : ""
          }${"../".repeat(
            operationGroup.namespaceHierarchies.length + 1
          )}rest/index.js`,
          namedImports
        }
      ]);
    }
    operationGroup.operations.forEach((o) => {
      const operationDeclaration = getOperationFunction(o, clientType);
      const sendOperationDeclaration = getSendPrivateFunction(
        dpgContext,
        o,
        clientType,
        codeModel.runtimeImports
      );
      const deserializeOperationDeclaration = getDeserializePrivateFunction(
        o,
        isRLCMultiEndpoint(dpgContext),
        needUnexpectedHelper,
        codeModel.runtimeImports
      );
      operationGroupFile.addFunctions([
        sendOperationDeclaration,
        deserializeOperationDeclaration,
        operationDeclaration
      ]);
    });

    operationGroupFile.addImportDeclarations([
      {
        moduleSpecifier: getImportSpecifier(
          "restClient",
          codeModel?.runtimeImports
        ),
        namedImports: [
          "StreamableMethod",
          "operationOptionsToRequestParameters"
        ]
      }
    ]);
    addImportsToFiles(codeModel.runtimeImports, operationGroupFile);
    operationGroupFile.fixMissingImports();
    // have to fixUnusedIdentifiers after everything get generated.
    operationGroupFile.fixUnusedIdentifiers();
    operationFiles.push(operationGroupFile);
  }
  return operationFiles;
}

export function importModels(
  srcPath: string,
  sourceFile: SourceFile,
  project: Project,
  subfolder: string = "",
  importLayer: number = 0,
  filters: Set<string> = new Set<string>()
) {
  const hasModelsImport = sourceFile.getImportDeclarations().some((i) => {
    return i.getModuleSpecifierValue().endsWith(`models/models.js`);
  });
  const modelsFile = project.getSourceFile(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }models/models.ts`
  );
  const models: string[] = [];

  for (const [name] of modelsFile?.getExportedDeclarations().entries() ?? []) {
    if (filters.has(name)) {
      continue;
    }
    models.push(name);
  }

  if (models.length > 0 && !hasModelsImport) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: `${"../".repeat(importLayer + 1)}models/models.js`,
      namedImports: models
    });
  }

  // Import all models and then let ts-morph clean up the unused ones
  // we can't fixUnusedIdentifiers here because the operaiton files are still being generated.
  // sourceFile.fixUnusedIdentifiers();
}

export function importDeserializeUtils(
  srcPath: string,
  sourceFile: SourceFile,
  project: Project,
  serializeType: string,
  subfolder: string = "",
  importLayer: number = 0
) {
  const hasModelsImport = sourceFile.getImportDeclarations().some((i) => {
    return i.getModuleSpecifierValue().endsWith(`utils/${serializeType}.js`);
  });
  const modelsFile = project.getSourceFile(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }utils/${serializeType}Util.ts`
  );
  const deserializeUtil: string[] = [];

  for (const entry of modelsFile?.getExportedDeclarations().entries() ?? []) {
    deserializeUtil.push(entry[0]);
  }

  if (deserializeUtil.length > 0 && !hasModelsImport) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: `${"../".repeat(
        importLayer + 1
      )}utils/${serializeType}Util.js`,
      namedImports: deserializeUtil
    });
  }
}
// Import all deserializeUtil and then let ts-morph clean up the unused ones
// we can't fixUnusedIdentifiers here because the operaiton files are still being generated.
// sourceFile.fixUnusedIdentifiers();
export function importPagingDependencies(
  srcPath: string,
  sourceFile: SourceFile,
  project: Project,
  subfolder: string = "",
  importLayer: number = 0
) {
  const pagingTypes = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}models/pagingTypes.ts`
  );

  if (!pagingTypes) {
    return;
  }

  const exportedPaingTypes = [...pagingTypes.getExportedDeclarations().keys()];

  sourceFile.addImportDeclaration({
    moduleSpecifier: `${"../".repeat(importLayer + 1)}models/pagingTypes.js`,
    namedImports: exportedPaingTypes
  });

  const pagingHelper = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}api/pagingHelpers.ts`
  );

  if (!pagingHelper) {
    return;
  }

  const exportedPaingHelpers = [
    ...pagingHelper.getExportedDeclarations().keys()
  ];

  sourceFile.addImportDeclaration({
    moduleSpecifier: `${
      importLayer === 0 ? "./" : "../".repeat(importLayer)
    }pagingHelpers.js`,
    namedImports: exportedPaingHelpers
  });
}

export function importLroDependencies(
  sourceFile: SourceFile,
  importLayer: number = 0
) {
  sourceFile.addImportDeclaration({
    moduleSpecifier: `${
      importLayer === 0 ? "./" : "../".repeat(importLayer)
    }pollingHelpers.js`,
    namedImports: ["getLongRunningPoller"]
  });

  importLroCoreDependencies(sourceFile);
}

/**
 * This function generates the interfaces for each operation options
 */
export function buildOperationOptions(
  operation: Operation,
  sourceFile: SourceFile
) {
  const optionalParameters = operation.parameters
    .filter((p) => p.implementation === "Method")
    .filter((p) => p.optional || p.clientDefaultValue);
  const options = [...optionalParameters];

  const name = getOperationOptionsName(operation, true);
  const lroOptions = {
    name: "updateIntervalInMs",
    type: "number",
    hasQuestionToken: true,
    docs: ["Delay to wait until next poll, in milliseconds."]
  };

  sourceFile.addInterface({
    name,
    isExported: true,
    extends: ["OperationOptions"],
    properties: (isLROOperation(operation) ? [lroOptions] : []).concat(
      options.map((p) => {
        return {
          docs: getDocsFromDescription(p.description),
          hasQuestionToken: true,
          ...buildType(p.clientName, p.type, p.format)
        };
      })
    )
  });
}

/**
 * This function creates a map of operation file path to operation names.
 */
export function buildLroDeserDetailMap(client: Client) {
  const map = new Map<string, OperationPathAndDeserDetails[]>();
  const existingNames = new Set<string>();
  for (const operationGroup of client.operationGroups) {
    const operations = operationGroup.operations.filter((o) =>
      isLROOnlyOperation(o)
    );
    // skip this operation group if it has no LRO operations
    if (operations.length === 0) {
      continue;
    }

    const operationFileName =
      operationGroup.className && operationGroup.namespaceHierarchies.length > 0
        ? `${operationGroup.namespaceHierarchies
            .map((hierarchy) => {
              return normalizeName(hierarchy, NameType.File);
            })
            .join("/")}/index`
        : // When the program has no operation groups defined all operations are put
          // into a nameless operation group. We'll call this operations.
          "operations";
    map.set(
      `./api/${operationFileName}.js`,
      operations.map((o) => {
        const { name } = getOperationName(o);
        const deserName = `_${name}Deserialize`;
        let renamedDeserName = undefined;
        if (existingNames.has(deserName)) {
          const newName = `${name}Deserialize_${operationFileName
            .split("/")
            .slice(0, -1)
            .join("_")}`;
          renamedDeserName = `_${normalizeName(newName, NameType.Method)}`;
        }
        existingNames.add(deserName);
        return {
          path: `${o.method.toUpperCase()} ${o.url}`,
          deserName,
          renamedDeserName
        };
      })
    );
  }
  return map;
}
