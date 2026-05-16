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

export function emitOperations(
  project: Project,
  client: TSClient,
  settings: TSGenerationSettings
): SourceFile[] {
  const subfolder = client.path.join("/");
  const files: SourceFile[] = [];

  for (const group of getOperationGroups(client)) {
    const filePath = `${settings.sourceRoot}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }api/${getOperationFileName(group)}.ts`;
    const file = project.createSourceFile(filePath, undefined, {
      overwrite: true
    });

    for (const method of group.methods) {
      file.addFunctions([
        toFunctionDeclaration(method.sendFunction),
        toFunctionDeclaration(method.deserializeFunction),
        ...[
          method.deserializeHeadersFunction,
          method.deserializeExceptionHeadersFunction
        ]
          .filter(
            (declaration): declaration is TSFunctionDeclaration =>
              declaration !== undefined
          )
          .map(toFunctionDeclaration)
      ]);
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
    file.fixUnusedIdentifiers();
    files.push(file);
  }

  return files;
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
  return groups;
}

function getOperationFileName(group: TSOperationGroup): string {
  if (group.prefixes.length === 0) {
    return "operations";
  }

  return `${group.prefixes
    .map((prefix) => normalizeName(prefix, NameType.File))
    .join("/")}/operations`;
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
