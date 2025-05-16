import { ModularEmitterOptions } from "./interfaces.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  SourceFile,
  InterfaceDeclarationStructure,
  StructureKind
} from "ts-morph";
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
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getOperationName } from "./helpers/namingHelpers.js";
import {
  getModularClientOptions,
  isRLCMultiEndpoint
} from "../utils/clientUtils.js";
import { getTypeExpression } from "./type-expressions/get-type-expression.js";
import {
  SdkClientType,
  SdkMethodParameter,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import {
  getMethodHierarchiesMap,
  ServiceOperation
} from "../utils/operationUtil.js";
import { resolveReference } from "../framework/reference.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";
import { addDeclaration } from "../framework/declaration.js";
import { refkey } from "../framework/refkey.js";
import { useContext } from "../contextManager.js";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationFiles(
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions
) {
  const project = useContext("outputProject");
  const [_, client] = clientMap;
  const operationFiles: Set<SourceFile> = new Set();
  const { subfolder, rlcClientName } = getModularClientOptions(clientMap);
  const isMultiEndpoint = isRLCMultiEndpoint(dpgContext);
  const clientType = isMultiEndpoint ? `Client.${rlcClientName}` : "Client";
  const methodMap = getMethodHierarchiesMap(dpgContext, client);
  for (const [prefixKey, operations] of methodMap) {
    const prefixes = prefixKey.split("/");
    const operationFileName =
      prefixes.length > 0 && prefixKey !== ""
        ? `${prefixes
            .map((hierarchy) => {
              return normalizeName(hierarchy, NameType.File);
            })
            .join("/")}/operations`
        : // When the program has no operation groups defined all operations are put
          // into a nameless operation group. We'll call this operations.
          "operations";

    const srcPath = emitterOptions.modularOptions.sourceRoot;
    const filepath = `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }api/${operationFileName}.ts`;

    const operationGroupFile = project.createSourceFile(filepath);
    operations.forEach((op) => {
      const operationDeclaration = getOperationFunction(
        dpgContext,
        [prefixes, op],
        clientType
      );
      const sendOperationDeclaration = getSendPrivateFunction(
        dpgContext,
        client,
        [prefixes, op],
        clientType
      );
      const deserializeOperationDeclaration = getDeserializePrivateFunction(
        dpgContext,
        op
      );
      operationGroupFile.addFunctions([
        sendOperationDeclaration,
        deserializeOperationDeclaration
      ]);
      addDeclaration(
        operationGroupFile,
        operationDeclaration,
        refkey(op, "api")
      );
    });

    const indexPathPrefix =
      "../".repeat(prefixKey === "" ? 0 : prefixes.length) || "./";
    operationGroupFile.addImportDeclaration({
      namedImports: [`${rlcClientName} as Client`],
      moduleSpecifier: `${indexPathPrefix}index.js`
    });
    operationGroupFile.fixUnusedIdentifiers();

    operationFiles.add(operationGroupFile);
  }
  return Array.from(operationFiles);
}

/**
 * This function generates the interfaces for each operation options
 */
export function buildOperationOptions(
  context: SdkContext,
  method: [string[], ServiceOperation],
  sourceFile: SourceFile
) {
  const dependencies = useDependencies();
  const operation = method[1];
  const optionalParameters = operation.parameters
    .filter(
      (p) =>
        p.onClient === false &&
        !(
          p.isGeneratedName &&
          (p.name === "contentType" || p.name !== "accept")
        )
    )
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
    dependencies.OperationOptions
  );
  const operationOptionsInterface: InterfaceDeclarationStructure = {
    kind: StructureKind.Interface,
    name,
    isExported: true,
    extends: [operationOptionsReference],
    properties: (isLroOnlyOperation(operation) ? [lroOptions] : []).concat(
      options.map((p) => {
        return {
          docs: getDocsFromDescription(p.doc),
          hasQuestionToken: true,

          type: getTypeExpression(context, p.type),
          name: normalizeName(p.name, NameType.Parameter)
        };
      })
    ),
    docs: [`Optional parameters.`]
  };
  addDeclaration(
    sourceFile,
    operationOptionsInterface,
    refkey(method[1], "operationOptions")
  );
}

/**
 * This function creates a map of operation file path to operation names.
 */
export function buildLroDeserDetailMap(
  context: SdkContext,
  client: SdkClientType<SdkServiceOperation>
) {
  const map = new Map<string, OperationPathAndDeserDetails[]>();
  const existingNames = new Set<string>();
  const methodMap = getMethodHierarchiesMap(context, client);
  for (const [prefixKey, operations] of methodMap) {
    const prefixes = prefixKey.split("/");
    const lroOperations = operations.filter((o) => isLroOnlyOperation(o));
    // skip this operation group if it has no LRO operations
    if (lroOperations.length === 0) {
      continue;
    }

    const operationFileName =
      prefixes.length > 0 && prefixKey !== ""
        ? `${prefixes
            .map((hierarchy) => {
              return normalizeName(hierarchy, NameType.File);
            })
            .join("/")}/operations`
        : // When the program has no operation groups defined all operations are put
          // into a nameless operation group. We'll call this operations.
          "operations";
    map.set(
      `./api/${operationFileName}.js`,
      lroOperations.map((o) => {
        const { name } = getOperationName(o);
        const deserName = `_${name}Deserialize`;
        let renamedDeserName = undefined;
        if (existingNames.has(deserName)) {
          const newName = `${name}Deserialize${normalizeName(
            operationFileName.split("/").slice(0, -1).join("_"),
            NameType.Interface
          )}`;
          renamedDeserName = `_${newName}`;
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
