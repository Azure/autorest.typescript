// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Project,
  SourceFile,
  Scope,
  ExportDeclarationStructure,
  InterfaceDeclaration
} from "ts-morph";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ClientDetails } from "../models/clientDetails";
import {
  OperationGroupDetails,
  OperationDetails
} from "../models/operationDetails";
import { getOperationParameterSignatures } from "./utils/parameterUtils";
import {
  getAllModelsNames,
  getOperationResponseType
} from "./utils/responseTypeUtils";
import { generateOperationJSDoc } from "./utils/docsUtils";
import { addTracingOperationImports } from "./utils/tracingUtils";
import {
  addPagingEsNextRef,
  addPagingImports,
  preparePageableOperations,
  writeAsyncIterators
} from "./utils/pagingOperations";

/**
 * Function that writes the code for all the operations.
 * It will generate one file per operation group and each file contains:
 *    - A class definition for the operation group
 *    - Methods and overrides for each operation
 *    - OperationSpecs for each operation
 * @param clientDetails client details
 * @param project project for code generation
 */
export function generateOperationsInterfaces(
  clientDetails: ClientDetails,
  project: Project
): void {
  let fileNames: string[] = [];

  // Toplevel operations are inlined in the client
  const operationGroups = clientDetails.operationGroups.filter(
    og => !og.isTopLevel
  );

  operationGroups.forEach(operationDetails => {
    fileNames.push(normalizeName(operationDetails.name, NameType.File));
    generateOperation(operationDetails, clientDetails, project);
  });

  if (operationGroups.length) {
    const operationIndexFile = project.createSourceFile(
      `${clientDetails.srcPath}/operationsInterfaces/index.ts`,
      undefined,
      { overwrite: true }
    );

    operationIndexFile.addExportDeclarations(
      fileNames.map(fileName => {
        return {
          moduleSpecifier: `./${fileName}`
        } as ExportDeclarationStructure;
      })
    );
  }
}

/**
 * This function creates a file for a given Operation Group
 */
function generateOperation(
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails,
  project: Project
): void {
  const name = normalizeName(operationGroupDetails.name, NameType.File);
  const operationInterfaceGroupFile = project.createSourceFile(
    `${clientDetails.srcPath}/operationsInterfaces/${name}.ts`,
    undefined,
    { overwrite: true }
  );

  addImports(operationGroupDetails, operationInterfaceGroupFile, clientDetails);
  addInterface(
    operationInterfaceGroupFile,
    operationGroupDetails,
    clientDetails
  );
}

function getReturnType(
  operation: OperationDetails,
  importedModels: Set<string>,
  modelNames: Set<string>
) {
  const responseName = getOperationResponseType(
    operation,
    importedModels,
    modelNames
  );

  return operation.isLRO
    ? `Promise<LROPoller<${responseName}>>`
    : `Promise<${responseName}>`;
}

/**
 * Adds an Operation group interface to the generated file
 */
function addInterface(
  operationGroupFile: SourceFile,
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails
) {
  let importedModels = new Set<string>();

  let allModelsNames = getAllModelsNames(clientDetails);

  const interfaceName = normalizeName(
    operationGroupDetails.name,
    NameType.OperationGroup,
    true /** shouldGuard */
  );

  const operationGroupClass = operationGroupFile.addInterface({
    name: interfaceName,
    docs: [`Interface representing a ${interfaceName}.`],
    isExported: true
  });

  writeOperations(
    operationGroupDetails,
    operationGroupClass,
    importedModels,
    allModelsNames,
    clientDetails
  );

  // Use named import from Models
  if (importedModels.size) {
    // Add alias to any model that collides with the class name
    const namedImports = [...importedModels].map(model => {
      if (model === interfaceName) {
        return `${model} as ${model}Model`;
      }
      return model;
    });

    operationGroupFile.addImportDeclaration({
      namedImports,
      moduleSpecifier: "../models"
    });
  }
}

/**
 * Write operations signatures, extracted from OperationGroupDetails, to the generated file
 */
export function writeOperations(
  operationGroupDetails: OperationGroupDetails,
  operationGroupInterface: InterfaceDeclaration,
  importedModels: Set<string>,
  modelNames: Set<string>,
  clientDetails: ClientDetails
) {
  preparePageableOperations(operationGroupDetails, clientDetails);
  writeAsyncIterators(
    operationGroupDetails,
    clientDetails,
    operationGroupInterface,
    importedModels
  );
  operationGroupDetails.operations.forEach(operation => {
    if (operation.scope !== Scope.Private) {
      const { baseMethodParameters } = getOperationParameterSignatures(
        operation,
        clientDetails.parameters,
        importedModels,
        operationGroupInterface
      );
      const returnType = getReturnType(operation, importedModels, modelNames);
      const name = `${operation.namePrefix || ""}${normalizeName(
        operation.name,
        NameType.Property
      )}`;

      operationGroupInterface.addMethod({
        name,
        parameters: baseMethodParameters,
        returnType,
        docs: [
          generateOperationJSDoc(baseMethodParameters, operation.description)
        ]
      });
    }
  });
}

/**
 * Adds required imports at the top of the file
 */
function addImports(
  operationGroupDetails: OperationGroupDetails,
  operationGroupFile: SourceFile,
  clientDetails: ClientDetails
) {
  addPagingEsNextRef(
    operationGroupDetails.operations,
    clientDetails,
    operationGroupFile
  );
  addTracingOperationImports(clientDetails, operationGroupFile);
  addPagingImports(
    operationGroupDetails.operations,
    clientDetails,
    operationGroupFile
  );

  operationGroupFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  if (hasLROOperation(operationGroupDetails)) {
    operationGroupFile.addImportDeclaration({
      namedImports: ["LROPoller"],
      moduleSpecifier: `../lro`
    });
  }
}

function hasLROOperation(operationGroupDetails: OperationGroupDetails) {
  return operationGroupDetails.operations.some(o => o.isLRO);
}
