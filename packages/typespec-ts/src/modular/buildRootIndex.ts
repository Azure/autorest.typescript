import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { Project, SourceFile } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client, ModularCodeModel } from "./modularCodeModel.js";
import { resolveReference } from "../framework/reference.js";
import { PagingHelpers } from "./static-helpers-metadata.js";

export function buildRootIndex(
  client: Client,
  codeModel: ModularCodeModel,
  rootIndexFile: SourceFile
) {
  const { project } = codeModel;
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subfolder = client.subfolder ?? "";
  const clientName = `${getClientName(client)}Client`;
  const clientFile = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}${normalizeName(
      clientName,
      NameType.File
    )}.ts`
  );

  if (!clientFile) {
    throw new Error(
      `Couldn't find client file: ${srcPath}/${normalizeName(
        clientName,
        NameType.File
      )}.ts`
    );
  }

  exportClassicalClient(client, rootIndexFile, subfolder);
  exportRestoreHelpers(
    rootIndexFile,
    project,
    srcPath,
    clientName,
    subfolder,
    true
  );
  exportModules(
    rootIndexFile,
    project,
    srcPath,
    clientName,
    "models",
    subfolder,
    true
  );
  exportModules(
    rootIndexFile,
    project,
    srcPath,
    clientName,
    "classic",
    subfolder,
    true
  );

  exportPagingTypes(codeModel, rootIndexFile);
}

/**
 * This is a temporary solution for adding paging exports. Eventually we will have the binder generate the exports automatically.
 */
function exportPagingTypes(
  codeModel: ModularCodeModel,
  rootIndexFile: SourceFile
) {
  if (!hasPaging(codeModel)) {
    return;
  }

  const existingExports = getExistingExports(rootIndexFile);
  const namedExports = [
    resolveReference(PagingHelpers.PageSettings),
    resolveReference(PagingHelpers.ContinuablePage),
    resolveReference(PagingHelpers.PagedAsyncIterableIterator)
  ];

  const newNamedExports = getNewNamedExports(namedExports, existingExports);

  if (newNamedExports.length > 0) {
    addExportsToRootIndexFile(rootIndexFile, newNamedExports);
  }
}

function hasPaging(codeModel: ModularCodeModel): boolean {
  return codeModel.clients.some((c) =>
    c.operationGroups.some((og) =>
      og.operations.some(
        (op) =>
          op.discriminator === "paging" || op.discriminator === "lropaging"
      )
    )
  );
}

function getExistingExports(rootIndexFile: SourceFile): Set<string> {
  return new Set(
    rootIndexFile
      .getExportDeclarations()
      .flatMap((exportDecl) =>
        exportDecl.getNamedExports().map((namedExport) => namedExport.getName())
      )
  );
}

function getNewNamedExports(
  namedExports: string[],
  existingExports: Set<string>
): string[] {
  return namedExports.filter(
    (namedExport) => !existingExports.has(namedExport)
  );
}

function addExportsToRootIndexFile(
  rootIndexFile: SourceFile,
  newNamedExports: string[]
) {
  rootIndexFile.addExportDeclaration({
    namedExports: newNamedExports
  });
}

function exportRestoreHelpers(
  indexFile: SourceFile,
  project: Project,
  srcPath: string,
  clientName: string,
  subfolder: string = "",
  isTopLevel: boolean = false
) {
  const helperFile = project.getSourceFile(
    `${srcPath}/${
      subfolder !== "" ? subfolder + "/" : ""
    }restorePollerHelpers.ts`
  );
  if (!helperFile) {
    return;
  }
  const exported = [...indexFile.getExportedDeclarations().keys()];
  const namedExports = [...helperFile.getExportedDeclarations().keys()].map(
    (helper) => {
      if (exported.indexOf(helper) > -1) {
        return `${helper} as ${clientName}${helper}`;
      }
      return helper;
    }
  );
  const moduleSpecifier = `./${
    isTopLevel && subfolder !== "" ? subfolder + "/" : ""
  }restorePollerHelpers.js`;
  indexFile.addExportDeclaration({
    moduleSpecifier,
    namedExports
  });
}

function exportClassicalClient(
  client: Client,
  indexFile: SourceFile,
  subfolder: string,
  isSubClient: boolean = false
) {
  const clientName = `${getClientName(client)}Client`;
  indexFile.addExportDeclaration({
    namedExports: [clientName, `${clientName}OptionalParams`],
    moduleSpecifier: `./${
      subfolder !== "" && !isSubClient ? subfolder + "/" : ""
    }${normalizeName(clientName, NameType.File)}.js`
  });
}

function exportModules(
  indexFile: SourceFile,
  project: Project,
  srcPath: string,
  clientName: string,
  moduleName: string,
  subfolder: string = "",
  isTopLevel: boolean = false
) {
  const modelsFile = project.getSourceFile(
    `${srcPath}/${
      subfolder !== "" ? subfolder + "/" : ""
    }${moduleName}/index.ts`
  );
  if (!modelsFile) {
    return;
  }

  const exported = [...indexFile.getExportedDeclarations().keys()];
  const namedExports = [...modelsFile.getExportedDeclarations().keys()].map(
    (modelName) => {
      if (exported.indexOf(modelName) > -1) {
        return `${modelName} as ${clientName}${modelName}`;
      }
      return modelName;
    }
  );
  const moduleSpecifier = `./${
    isTopLevel && subfolder !== "" ? subfolder + "/" : ""
  }${moduleName}/index.js`;
  indexFile.addExportDeclaration({
    moduleSpecifier,
    namedExports
  });
}

export function buildSubClientIndexFile(
  client: Client,
  codeModel: ModularCodeModel
) {
  const subfolder = client.subfolder ?? "";
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subClientIndexFile = codeModel.project.createSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}index.ts`,
    undefined,
    { overwrite: true }
  );
  const clientName = `${getClientName(client)}Client`;
  const clientFilePath = `${srcPath}/${
    subfolder !== "" ? subfolder + "/" : ""
  }${normalizeName(clientName, NameType.File)}.ts`;
  const clientFile = codeModel.project.getSourceFile(clientFilePath);

  if (!clientFile) {
    throw new Error(`Couldn't find client file: ${clientFilePath}`);
  }

  exportClassicalClient(client, subClientIndexFile, subfolder, true);
  exportRestoreHelpers(
    subClientIndexFile,
    codeModel.project,
    srcPath,
    clientName,
    subfolder
  );
  exportModules(
    subClientIndexFile,
    codeModel.project,
    srcPath,
    clientName,
    "models",
    subfolder
  );
  exportModules(
    subClientIndexFile,
    codeModel.project,
    srcPath,
    clientName,
    "classic",
    subfolder
  );
}
