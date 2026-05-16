// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  FunctionDeclarationStructure,
  Project,
  SourceFile,
  StructureKind
} from "ts-morph";
import type {
  TSClient,
  TSFunctionDeclaration,
  TSGenerationSettings,
  TSOperationGroup
} from "../codemodel/index.js";
import { addDeclaration } from "../framework/declaration.js";

/**
 * Emit modular operation source files from the TypeScript code model.
 *
 * Each operation group produces an operation file under `api/` containing the
 * public operation function plus its private send/deserialize helpers.
 */
export function emitOperations(
  project: Project,
  client: TSClient,
  settings: TSGenerationSettings
): SourceFile[] {
  const subfolder = client.path.join("/");

  return getOperationGroups(client).map((group) => {
    const filePath = `${settings.sourceRoot}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }api/${getOperationFileName(group)}.ts`;
    const file = project.createSourceFile(filePath, "", {
      overwrite: true
    });

    for (const method of group.methods) {
      file.addFunctions(getHelperFunctions(method));
      addDeclaration(
        file,
        toFunctionDeclaration(method.apiFunction),
        method.apiRefKey
      );
    }

    const indexPathPrefix = "../".repeat(group.prefixes.length) || "./";
    file.addImportDeclaration({
      namedImports: [`${client.contextTypeName} as Client`],
      moduleSpecifier: `${indexPathPrefix}index.js`
    });
    file.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
    file.fixUnusedIdentifiers();

    return file;
  });
}

function getOperationGroups(client: TSClient): TSOperationGroup[] {
  const groups: TSOperationGroup[] = [];

  if (client.methods.length > 0) {
    groups.push({
      name: "",
      prefixes: [],
      methods: client.methods
    });
  }

  groups.push(...client.operationGroups);
  return groups.sort((left, right) => {
    const leftFileName = getOperationFileName(left);
    const rightFileName = getOperationFileName(right);
    return leftFileName.localeCompare(rightFileName);
  });
}

function getOperationFileName(group: TSOperationGroup): string {
  if (group.prefixes.length === 0) {
    return "operations";
  }

  return `${group.prefixes
    .map((prefix) => normalizeName(prefix, NameType.File))
    .join("/")}/operations`;
}

function getHelperFunctions(method: {
  sendFunction: TSFunctionDeclaration;
  deserializeFunction: TSFunctionDeclaration;
  deserializeHeadersFunction?: TSFunctionDeclaration;
  deserializeExceptionHeadersFunction?: TSFunctionDeclaration;
}): FunctionDeclarationStructure[] {
  return [
    method.sendFunction,
    method.deserializeFunction,
    method.deserializeHeadersFunction,
    method.deserializeExceptionHeadersFunction
  ]
    .filter(
      (declaration): declaration is TSFunctionDeclaration =>
        declaration !== undefined
    )
    .map(toFunctionDeclaration);
}

function toFunctionDeclaration(
  declaration: TSFunctionDeclaration
): FunctionDeclarationStructure {
  return {
    kind: StructureKind.Function as const,
    docs: declaration.docs,
    isAsync: declaration.isAsync,
    isExported: declaration.isExported,
    name: declaration.name,
    returnType: declaration.returnType,
    parameters: declaration.parameters.map((parameter) => ({
      name: parameter.name,
      type: parameter.type,
      initializer: parameter.initializer,
      hasQuestionToken: parameter.hasQuestionToken,
      docs: parameter.docs
    })),
    statements: declaration.statements,
    ...(declaration.propertyName
      ? { propertyName: declaration.propertyName }
      : {})
  };
}
