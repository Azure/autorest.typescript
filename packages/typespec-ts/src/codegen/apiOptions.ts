// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  InterfaceDeclarationStructure,
  Project,
  SourceFile,
  StructureKind
} from "ts-morph";
import type {
  TSApiOptions,
  TSApiOptionsInterface,
  TSClient,
  TSGenerationSettings
} from "../codemodel/index.js";
import { addDeclaration } from "../framework/declaration.js";
import { resolveReference } from "../framework/reference.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";

export function emitApiOptions(
  project: Project,
  client: TSClient,
  settings: TSGenerationSettings
): SourceFile[] {
  const dependencies = useDependencies();
  const subfolder = client.path.join("/");
  const operationOptionsReference = resolveReference(
    dependencies.OperationOptions
  );

  return [...client.apiOptions]
    .sort((left, right) =>
      left.prefixes.join("/").localeCompare(right.prefixes.join("/"))
    )
    .map((apiOptions) => {
      const file = project.createSourceFile(
        `${settings.sourceRoot}/${
          subfolder && subfolder !== "" ? subfolder + "/" : ""
        }api/${getApiOptionsFileName(apiOptions)}.ts`,
        "",
        { overwrite: true }
      );

      for (const optionsInterface of apiOptions.interfaces) {
        addDeclaration(
          file,
          toInterfaceDeclaration(optionsInterface, operationOptionsReference),
          optionsInterface.refKey
        );
      }

      file.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
      file.fixUnusedIdentifiers();
      return file;
    });
}

function getApiOptionsFileName(apiOptions: TSApiOptions): string {
  if (apiOptions.prefixes.length === 0) {
    return "options";
  }

  return `${apiOptions.prefixes
    .map((prefix) => normalizeName(prefix, NameType.File))
    .join("/")}/options`;
}

function toInterfaceDeclaration(
  optionsInterface: TSApiOptionsInterface,
  operationOptionsReference: string
): InterfaceDeclarationStructure {
  return {
    kind: StructureKind.Interface,
    name: optionsInterface.name,
    isExported: true,
    extends: [operationOptionsReference],
    docs: ["Optional parameters."],
    properties: optionsInterface.properties.map((property) => ({
      name: property.name,
      type: property.type,
      hasQuestionToken: true,
      docs: property.docs
    }))
  };
}
