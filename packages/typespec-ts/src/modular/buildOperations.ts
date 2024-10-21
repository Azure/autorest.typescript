import { BodyParameter, Client, ModularCodeModel, Operation, Parameter } from "./modularCodeModel.js";
import {
  NameType,
  clearImportSets,
  normalizeName
} from "@azure-tools/rlc-common";
import { Project, SourceFile } from "ts-morph";
import {
  getDeserializePrivateFunction,
  getExpectedStatuses,
  getOperationFunction,
  getOperationOptionsName,
  getSendPrivateFunction,
  isLroOnlyOperation
} from "./helpers/operationHelpers.js";

import { OperationPathAndDeserDetails } from "./interfaces.js";
import { SdkContext } from "../utils/interfaces.js";
import { addImportBySymbol } from "../utils/importHelper.js";
import { buildType } from "./helpers/typeHelpers.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getOperationName } from "./helpers/namingHelpers.js";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationFiles(
  client: Client,
  dpgContext: SdkContext,
  codeModel: ModularCodeModel
) {
  const operationFiles = [];
  const isMultiEndpoint = isRLCMultiEndpoint(dpgContext);
  const clientType = isMultiEndpoint
    ? `Client.${client.rlcClientName}`
    : "Client";
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
      `${srcPath}/${subfolder && subfolder !== "" ? subfolder + "/" : ""
      }api/${operationFileName}.ts`
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

    const indexPathPrefix =
      "../".repeat(operationGroup.namespaceHierarchies.length) || "./";
    operationGroupFile.addImportDeclaration({
      namedImports: [`${client.rlcClientName} as Client`],
      moduleSpecifier: `${indexPathPrefix}index.js`
    });

    operationGroup.operations.forEach((o) => {
      const operationDeclaration = getOperationFunction(o, clientType);
      const sendOperationDeclaration = getSendPrivateFunction(
        dpgContext,
        o,
        clientType
      );
      const deserializeOperationDeclaration = getDeserializePrivateFunction(
        dpgContext,
        o
      );
      operationGroupFile.addFunctions([
        sendOperationDeclaration,
        deserializeOperationDeclaration,
        operationDeclaration
      ]);
    });

    // addImportsToFiles(codeModel.runtimeImports, operationGroupFile);
    operationGroupFile.fixUnusedIdentifiers();
    addImportBySymbol("serializeRecord", operationGroupFile);

    operationFiles.push(operationGroupFile);
  }
  return operationFiles;
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
    `${srcPath}/${subfolder && subfolder !== "" ? subfolder + "/" : ""
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
  const options: (BodyParameter | Parameter)[] = [...optionalParameters];

  const name = getOperationOptionsName(operation, true);
  const lroOptions = {
    name: "updateIntervalInMs",
    type: "number",
    hasQuestionToken: true,
    docs: ["Delay to wait until next poll, in milliseconds."]
  };

  // handle optional body parameter
  if (operation.bodyParameter?.optional === true) {
    options.push(operation.bodyParameter);
  }

  sourceFile.addInterface({
    name,
    isExported: true,
    extends: ["OperationOptions"],
    properties: (isLroOnlyOperation(operation) ? [lroOptions] : []).concat(
      options.map((p) => {
        return {
          docs: getDocsFromDescription(p.description),
          hasQuestionToken: true,
          ...buildType(p.clientName, p.type, p.format)
        };
      })
    ),
    docs: [`Optional parameters.`]
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
      isLroOnlyOperation(o)
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
          expectedStatusesExpression: getExpectedStatuses(o),
          deserName,
          renamedDeserName
        };
      })
    );
  }
  return map;
}
