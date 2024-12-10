import { ModularEmitterOptions } from "./modularCodeModel.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
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
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getOperationName } from "./helpers/namingHelpers.js";
import {
  getModularClientOptions,
  isRLCMultiEndpoint
} from "../utils/clientUtils.js";
import { getTypeExpression } from "./type-expressions/get-type-expression.js";
import {
  SdkClientType,
  SdkHttpOperation,
  SdkMethodParameter,
  SdkServiceMethod,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { resolveReference } from "../framework/reference.js";
import { AzureCoreDependencies } from "./external-dependencies.js";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationFiles(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
) {
  const operationFiles: Set<SourceFile> = new Set();
  const { subfolder, rlcClientName } = getModularClientOptions(
    dpgContext,
    client
  );
  const isMultiEndpoint = isRLCMultiEndpoint(dpgContext);
  const clientType = isMultiEndpoint ? `Client.${rlcClientName}` : "Client";
  const methodMap = getMethodHierarchiesMap(client);
  for (const [prefixKey, operations] of methodMap) {
    const prefixes = prefixKey.split("/");
    const operationFileName =
      prefixes.length > 0
        ? `${prefixes
            .map((hierarchy) => {
              return normalizeName(hierarchy, NameType.File);
            })
            .join("/")}/index`
        : // When the program has no operation groups defined all operations are put
          // into a nameless operation group. We'll call this operations.
          "operations";

    const srcPath = emitterOptions.modularOptions.sourceRoot;
    const filepath = `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }api/${operationFileName}.ts`;

    const operationGroupFile =
      emitterOptions.project.createSourceFile(filepath);
    // Import the deserializeUtils
    importDeserializeUtils(
      srcPath,
      operationGroupFile,
      emitterOptions.project,
      "deserialize",
      subfolder,
      prefixes.length
    );

    // Import the serializeUtils
    importDeserializeUtils(
      srcPath,
      operationGroupFile,
      emitterOptions.project,
      "serialize",
      subfolder,
      prefixes.length
    );

    operations.forEach((op) => {
      const operationDeclaration = getOperationFunction(
        dpgContext,
        [prefixes, op],
        clientType
      );
      const sendOperationDeclaration = getSendPrivateFunction(
        dpgContext,
        [prefixes, op],
        clientType
      );
      const deserializeOperationDeclaration = getDeserializePrivateFunction(
        dpgContext,
        op
      );
      operationGroupFile.addFunctions([
        sendOperationDeclaration,
        deserializeOperationDeclaration,
        operationDeclaration
      ]);
    });

    const indexPathPrefix = "../".repeat(prefixes.length) || "./";
    operationGroupFile.addImportDeclaration({
      namedImports: [`${rlcClientName} as Client`],
      moduleSpecifier: `${indexPathPrefix}index.js`
    });
    addImportBySymbol("serializeRecord", operationGroupFile);
    operationGroupFile.fixUnusedIdentifiers();

    operationFiles.add(operationGroupFile);
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

/**
 * This function generates the interfaces for each operation options
 */
export function buildOperationOptions(
  context: SdkContext,
  method: [string[], SdkServiceMethod<SdkHttpOperation>],
  sourceFile: SourceFile
) {
  const operation = method[1];
  const optionalParameters = operation.parameters
    .filter((p) => p.onClient === false)
    .filter((p) => p.optional || p.clientDefaultValue);
  const options: SdkMethodParameter[] = [...optionalParameters];

  const name = getOperationOptionsName(method, true);
  const lroOptions = {
    name: "updateIntervalInMs",
    type: "number",
    hasQuestionToken: true,
    docs: ["Delay to wait until next poll, in milliseconds."]
  };

  // handle optional body parameter
  // if (operation.operation.bodyParam?.optional === true) {
  //   options.push(operation.operation.bodyParam);
  // }
  const operationOptionsReference = resolveReference(
    AzureCoreDependencies.OperationOptions
  );
  sourceFile.addInterface({
    name,
    isExported: true,
    extends: [operationOptionsReference],
    properties: (isLroOnlyOperation(operation) ? [lroOptions] : []).concat(
      options.map((p) => {
        return {
          docs: getDocsFromDescription(p.doc),
          hasQuestionToken: true,

          type: getTypeExpression(context, p.type),
          name: p.name
        };
      })
    ),
    docs: [`Optional parameters.`]
  });
}

/**
 * This function creates a map of operation file path to operation names.
 */
export function buildLroDeserDetailMap(
  client: SdkClientType<SdkServiceOperation>
) {
  const map = new Map<string, OperationPathAndDeserDetails[]>();
  const existingNames = new Set<string>();
  const methodMap = getMethodHierarchiesMap(client);
  for (const [prefixKey, operations] of methodMap) {
    const prefixes = prefixKey.split("/");
    const lroOperations = operations.filter((o) => isLroOnlyOperation(o));
    // skip this operation group if it has no LRO operations
    if (lroOperations.length === 0) {
      continue;
    }

    const operationFileName =
      prefixes.length > 0
        ? `${prefixes
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
          path: `${o.operation.verb.toUpperCase()} ${o.operation.path}`,
          expectedStatusesExpression: getExpectedStatuses(o),
          deserName,
          renamedDeserName
        };
      })
    );
  }
  return map;
}
