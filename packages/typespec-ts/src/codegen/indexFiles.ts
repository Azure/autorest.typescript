// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { join } from "path/posix";
import { Node, Project, SourceFile } from "ts-morph";
import type { TSClient, TSGenerationSettings } from "../codemodel/index.js";
import { resolveReference } from "../framework/reference.js";
import {
  CloudSettingHelpers,
  MultipartHelpers,
  PagingHelpers,
  PlatformTypeHelpers
} from "../modular/static-helpers-metadata.js";

export interface EmitSubpathIndexOptions {
  exportIndex?: boolean;
  interfaceOnly?: boolean;
  recursive?: boolean;
}

export function emitSubpathIndexFiles(
  project: Project,
  settings: TSGenerationSettings,
  subpath: string,
  client?: TSClient,
  options: EmitSubpathIndexOptions = {}
): SourceFile[] {
  const subfolder = client?.path.join("/") ?? "";
  const srcPath = settings.sourceRoot;
  const skipFiles = ["pagingHelpers.ts", "pollingHelpers.ts"];
  const folders = options.recursive
    ? project
        .getDirectories()
        .filter((dir) => {
          const formattedDir = dir.getPath().replace(/\\/g, "/");
          const targetPath = join(srcPath, subfolder, subpath).replace(
            /\\/g,
            "/"
          );
          return (
            formattedDir.startsWith(targetPath) &&
            !project.getSourceFile(`${formattedDir}/index.ts`)
          );
        })
        .map((dir) => dir.getPath().replace(/\\/g, "/"))
        .sort((left, right) => left.localeCompare(right))
    : [join(srcPath, subfolder, subpath).replace(/\\/g, "/")];
  const indexFiles: SourceFile[] = [];

  for (const folder of folders) {
    const apiFilePattern =
      subpath === "models" ? join(folder, "models.ts") : folder;
    const apiFiles = project
      .getSourceFiles()
      .filter((file) => {
        if (subpath === "api" && options.recursive) {
          return (
            file.getDirectoryPath().replace(/\\/g, "/") ===
            apiFilePattern.replace(/\\/g, "/")
          );
        }
        return file
          .getFilePath()
          .replace(/\\/g, "/")
          .startsWith(
            apiFilePattern.replace(/\\/g, "/") +
              (apiFilePattern.endsWith("models.ts") ? "" : "/")
          );
      })
      .sort((left, right) =>
        left.getFilePath().localeCompare(right.getFilePath())
      );

    if (apiFiles.length === 0) {
      continue;
    }

    const indexFile = project.createSourceFile(`${folder}/index.ts`, "", {
      overwrite: true
    });
    for (const file of apiFiles) {
      const filePath = file.getFilePath();
      const serializerOrDeserializerRegex =
        /.*(Serializer|Deserializer)(_\d+)?$/;
      if (!options.exportIndex && filePath.endsWith("index.ts")) {
        continue;
      }
      if (skipFiles.some((skipFile) => filePath.endsWith(skipFile))) {
        continue;
      }
      if (filePath === indexFile.getFilePath()) {
        continue;
      }

      let filteredDeclarations = [
        ...file.getExportedDeclarations().entries()
      ].filter(([name, declarations]) => {
        if (name.startsWith("_")) {
          return false;
        }
        return declarations.some((declaration) => {
          if (
            options.interfaceOnly &&
            declaration.getKindName() !== "InterfaceDeclaration"
          ) {
            return false;
          }
          if (
            subpath === "models" &&
            declaration.getKindName() === "FunctionDeclaration" &&
            serializerOrDeserializerRegex.test(name)
          ) {
            return false;
          }
          return true;
        });
      });

      if (filePath.endsWith("pagingTypes.ts")) {
        filteredDeclarations = filteredDeclarations.filter(
          ([name]) =>
            !["PagedResult", "BuildPagedAsyncIteratorOptions"].includes(name)
        );
      }

      if (filteredDeclarations.length === 0) {
        continue;
      }

      const moduleSpecifier = `.${filePath
        .replace(indexFile.getDirectoryPath(), "")
        .replace(/\\/g, "/")
        .replace(".ts", "")}.js`;
      partitionAndEmitExports(indexFile, moduleSpecifier, filteredDeclarations);
    }
    indexFile.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
    indexFile.fixUnusedIdentifiers();
    indexFiles.push(indexFile);
  }

  return indexFiles;
}

export function emitRootIndex(
  project: Project,
  settings: TSGenerationSettings,
  rootIndexFile: SourceFile,
  client?: TSClient
): SourceFile {
  if (!client) {
    exportModels(project, settings, rootIndexFile);
    exportRestErrorTypes(settings, rootIndexFile);
    rootIndexFile.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
    rootIndexFile.fixUnusedIdentifiers();
    return rootIndexFile;
  }

  const subfolder = client.path.join("/");
  const clientName = client.name;
  exportClassicalClient(client, rootIndexFile, subfolder);
  exportSimplePollerLike(
    client,
    settings,
    rootIndexFile,
    project,
    subfolder,
    true
  );
  exportRestoreHelpers(
    rootIndexFile,
    project,
    settings,
    clientName,
    subfolder,
    true
  );
  exportModels(project, settings, rootIndexFile, clientName);
  exportModules(project, rootIndexFile, settings, clientName, "api", {
    subfolder,
    interfaceOnly: true,
    isTopLevel: true,
    recursive: true
  });
  exportModules(project, rootIndexFile, settings, clientName, "classic", {
    subfolder,
    isTopLevel: true
  });
  exportPagingTypes(client, rootIndexFile);
  exportFileContentsType(project, settings, rootIndexFile);
  exportAzureCloudTypes(settings, rootIndexFile);
  exportRestErrorTypes(settings, rootIndexFile);
  rootIndexFile.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
  rootIndexFile.fixUnusedIdentifiers();
  return rootIndexFile;
}

export function emitSubClientIndex(
  project: Project,
  settings: TSGenerationSettings,
  client: TSClient
): SourceFile {
  const subfolder = client.path.join("/");
  const subClientIndexFile = project.createSourceFile(
    `${settings.sourceRoot}/${subfolder && subfolder !== "" ? subfolder + "/" : ""}index.ts`,
    "",
    { overwrite: true }
  );
  exportClassicalClient(client, subClientIndexFile, subfolder, true);
  exportSimplePollerLike(
    client,
    settings,
    subClientIndexFile,
    project,
    subfolder
  );
  exportRestoreHelpers(
    subClientIndexFile,
    project,
    settings,
    client.name,
    subfolder
  );
  exportModules(project, subClientIndexFile, settings, client.name, "api", {
    subfolder,
    interfaceOnly: true,
    recursive: true
  });
  exportModules(project, subClientIndexFile, settings, client.name, "classic", {
    subfolder
  });
  subClientIndexFile.fixMissingImports(
    {},
    { importModuleSpecifierEnding: "js" }
  );
  subClientIndexFile.fixUnusedIdentifiers();
  return subClientIndexFile;
}

function exportModels(
  project: Project,
  settings: TSGenerationSettings,
  rootIndexFile: SourceFile,
  clientName: string = ""
): void {
  const modelsExportsIndex = rootIndexFile
    .getExportDeclarations()
    .find((declaration) =>
      declaration.getModuleSpecifierValue()?.startsWith("./models/")
    );
  if (!modelsExportsIndex) {
    exportModules(project, rootIndexFile, settings, clientName, "models", {
      isTopLevel: true,
      recursive: true
    });
  }
}

function exportAzureCloudTypes(
  settings: TSGenerationSettings,
  rootIndexFile: SourceFile
): void {
  if (!settings.isArm) {
    return;
  }

  addExportsToIndex(rootIndexFile, [
    resolveReference(CloudSettingHelpers.AzureClouds)
  ]);
  addExportsToIndex(
    rootIndexFile,
    [resolveReference(CloudSettingHelpers.AzureSupportedClouds)],
    true
  );
}

function exportRestErrorTypes(
  settings: TSGenerationSettings,
  rootIndexFile: SourceFile
): void {
  if (settings.flavor !== "azure") {
    return;
  }

  const existingExports = getExistingExports(rootIndexFile);
  const namedExports = ["RestError", "isRestError"].filter(
    (name) => !existingExports.has(name)
  );
  if (namedExports.length > 0) {
    rootIndexFile.addExportDeclaration({
      moduleSpecifier: "@azure/core-rest-pipeline",
      namedExports
    });
  }
}

function exportPagingTypes(client: TSClient, rootIndexFile: SourceFile): void {
  if (!hasPaging(client)) {
    return;
  }

  addExportsToIndex(
    rootIndexFile,
    [
      resolveReference(PagingHelpers.PageSettings),
      resolveReference(PagingHelpers.ContinuablePage),
      resolveReference(PagingHelpers.PagedAsyncIterableIterator)
    ],
    true
  );
}

function hasPaging(client: TSClient): boolean {
  const currentClientHasPaging = [
    ...client.methods,
    ...client.operationGroups.flatMap((group) => group.methods)
  ].some((method) => method.kind === "paging" || method.kind === "lroPaging");
  if (currentClientHasPaging) {
    return true;
  }

  return client.children.some((child) => hasPaging(child));
}

function exportFileContentsType(
  project: Project,
  settings: TSGenerationSettings,
  rootIndexFile: SourceFile
): void {
  const hasMultipartFileParts = project
    .getSourceFiles(`${settings.sourceRoot}/models/**/*.ts`)
    .some((file) => file.getText().includes("FileContents"));

  if (!hasMultipartFileParts) {
    return;
  }

  addExportsToIndex(
    rootIndexFile,
    [
      resolveReference(MultipartHelpers.FileContents),
      resolveReference(PlatformTypeHelpers.NodeReadableStream)
    ],
    true
  );
}

function getExistingExports(rootIndexFile: SourceFile): Set<string> {
  return new Set(
    rootIndexFile
      .getExportDeclarations()
      .flatMap((exportDeclaration) =>
        exportDeclaration
          .getNamedExports()
          .map((namedExport) => namedExport.getName())
      )
  );
}

function addExportsToIndex(
  indexFile: SourceFile,
  namedExports: string[],
  isTypeOnly: boolean = false
): void {
  const existingExports = getExistingExports(indexFile);
  const newNamedExports = namedExports.filter(
    (namedExport) => !existingExports.has(namedExport)
  );
  if (newNamedExports.length > 0) {
    indexFile.addExportDeclaration({
      isTypeOnly,
      namedExports: newNamedExports
    });
  }
}

function exportSimplePollerLike(
  client: TSClient,
  settings: TSGenerationSettings,
  indexFile: SourceFile,
  project: Project,
  subfolder: string = "",
  isTopLevel: boolean = false
): void {
  const hasLro = [
    ...client.methods,
    ...client.operationGroups.flatMap((group) => group.methods)
  ].some((method) => method.kind === "lro");
  if (!hasLro || settings.compatibilityLro !== true) {
    return;
  }
  const helperFile = project.getSourceFile(
    `${settings.sourceRoot}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }static-helpers/simplePollerHelpers.ts`
  );
  if (!helperFile) {
    return;
  }
  indexFile.addExportDeclaration({
    isTypeOnly: true,
    moduleSpecifier: `./${
      isTopLevel && subfolder && subfolder !== "" ? subfolder + "/" : ""
    }static-helpers/simplePollerHelpers.js`,
    namedExports: ["SimplePollerLike"]
  });
}

function exportRestoreHelpers(
  indexFile: SourceFile,
  project: Project,
  settings: TSGenerationSettings,
  clientName: string,
  subfolder: string = "",
  isTopLevel: boolean = false
): void {
  const helperFile = project.getSourceFile(
    `${settings.sourceRoot}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }restorePollerHelpers.ts`
  );
  if (!helperFile) {
    return;
  }
  const exported = new Set(indexFile.getExportedDeclarations().keys());
  const allEntries = [...helperFile.getExportedDeclarations().entries()];
  const moduleSpecifier = `./${
    isTopLevel && subfolder && subfolder !== "" ? subfolder + "/" : ""
  }restorePollerHelpers.js`;
  const renamer = (name: string) =>
    exported.has(name) ? `${name} as ${clientName}${name}` : name;
  partitionAndEmitExports(indexFile, moduleSpecifier, allEntries, renamer);
}

function exportClassicalClient(
  client: TSClient,
  indexFile: SourceFile,
  subfolder: string,
  isSubClient: boolean = false
): void {
  indexFile.addExportDeclaration({
    namedExports: [client.name],
    moduleSpecifier: `./${
      subfolder && subfolder !== "" && !isSubClient ? subfolder + "/" : ""
    }${normalizeName(client.name, NameType.File)}.js`
  });
}

interface ExportModulesOptions {
  interfaceOnly?: boolean;
  isTopLevel?: boolean;
  subfolder?: string;
  recursive?: boolean;
}

function exportModules(
  project: Project,
  indexFile: SourceFile,
  settings: TSGenerationSettings,
  clientName: string,
  moduleName: string,
  options: ExportModulesOptions = {
    interfaceOnly: false,
    isTopLevel: false,
    subfolder: "",
    recursive: false
  }
): void {
  const subfolder = options.subfolder ?? "";
  const folders = options.recursive
    ? project
        .getDirectories()
        .filter((dir) => {
          const formattedDir = dir.getPath().replace(/\\/g, "/");
          const targetPath = join(
            settings.sourceRoot,
            subfolder,
            moduleName
          ).replace(/\\/g, "/");
          return formattedDir.startsWith(targetPath);
        })
        .map((dir) => dir.getPath().replace(/\\/g, "/"))
        .sort((left, right) => left.localeCompare(right))
    : [join(settings.sourceRoot, subfolder, moduleName).replace(/\\/g, "/")];

  for (const folder of folders) {
    const moduleFile = project.getSourceFile(
      join(folder, "index.ts").replace(/\\/g, "/")
    );
    if (!moduleFile) {
      continue;
    }

    const exported = new Set(indexFile.getExportedDeclarations().keys());
    const serializerOrDeserializerRegex = /.*(Serializer|Deserializer)(_\d+)?$/;
    const filteredEntries = [
      ...moduleFile.getExportedDeclarations().entries()
    ].filter(([name, declarations]) => {
      if (name.startsWith("_")) {
        return false;
      }
      return declarations.some((declaration) => {
        if (
          options.interfaceOnly &&
          declaration.getKindName() !== "InterfaceDeclaration"
        ) {
          return false;
        }
        if (
          moduleName === "models" &&
          declaration.getKindName() === "FunctionDeclaration" &&
          serializerOrDeserializerRegex.test(name)
        ) {
          return false;
        }
        if (
          options.interfaceOnly &&
          options.isTopLevel &&
          name.endsWith("Context")
        ) {
          return false;
        }
        return true;
      });
    });

    const moduleSpecifier = `.${moduleFile
      .getFilePath()
      .replace(indexFile.getDirectoryPath(), "")
      .replace(/\\/g, "/")
      .replace(".ts", "")}.js`;
    const renamer = (name: string) =>
      exported.has(name) ? `${name} as ${clientName}${name}` : name;
    partitionAndEmitExports(
      indexFile,
      moduleSpecifier,
      filteredEntries,
      renamer
    );
  }
}

function isTypeOnlyNode(node: Node): boolean {
  const kind = node.getKindName();
  return kind === "InterfaceDeclaration" || kind === "TypeAliasDeclaration";
}

function partitionAndEmitExports(
  indexFile: SourceFile,
  moduleSpecifier: string,
  entries: [string, Node[]][],
  mapName: (name: string) => string = (name) => name
): void {
  const typeOnlyExports: string[] = [];
  const valueExports: string[] = [];
  for (const [name, declarations] of entries) {
    const mappedName = mapName(name);
    if (declarations.every(isTypeOnlyNode)) {
      typeOnlyExports.push(mappedName);
    } else {
      valueExports.push(mappedName);
    }
  }
  if (typeOnlyExports.length > 0) {
    indexFile.addExportDeclaration({
      isTypeOnly: true,
      moduleSpecifier,
      namedExports: typeOnlyExports
    });
  }
  if (valueExports.length > 0) {
    indexFile.addExportDeclaration({
      moduleSpecifier,
      namedExports: valueExports
    });
  }
}
