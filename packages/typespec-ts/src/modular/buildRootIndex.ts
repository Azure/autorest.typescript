import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { Project, SourceFile } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client, ModularCodeModel } from "./modularCodeModel.js";

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
  const modelsExportsIndex = rootIndexFile
    .getExportDeclarations()
    ?.find((i) => {
      return i.getModuleSpecifierValue() === `./models/index.js`;
    });
  if (!modelsExportsIndex) {
    exportModules(rootIndexFile, project, srcPath, clientName, "models", {
      isTopLevel: true
    });
  }
  exportModules(rootIndexFile, project, srcPath, clientName, "api", {
    subfolder,
    isTopLevel: true,
    interfaceOnly: true
  });
  exportModules(rootIndexFile, project, srcPath, clientName, "classic", {
    subfolder,
    isTopLevel: true
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
    namedExports: [clientName],
    moduleSpecifier: `./${
      subfolder !== "" && !isSubClient ? subfolder + "/" : ""
    }${normalizeName(clientName, NameType.File)}.js`
  });
}

export interface ExportModulesOptions {
  interfaceOnly?: boolean;
  isTopLevel?: boolean;
  subfolder?: string;
}

function exportModules(
  indexFile: SourceFile,
  project: Project,
  srcPath: string,
  clientName: string,
  moduleName: string,
  options: ExportModulesOptions = {
    interfaceOnly: false,
    isTopLevel: false,
    subfolder: ""
  }
) {
  const modelsFile = project.getSourceFile(
    `${srcPath}/${
      options.subfolder !== "" ? options.subfolder + "/" : ""
    }${moduleName}/index.ts`
  );
  if (!modelsFile) {
    return;
  }

  const exported = [...indexFile.getExportedDeclarations().keys()];
  const namedExports = [...modelsFile.getExportedDeclarations().entries()]
    .filter((exDeclaration) => {
      if (
        exDeclaration[0].startsWith("_") ||
        exDeclaration[0].endsWith("Context")
      ) {
        return false;
      }
      return exDeclaration[1].some((ex) => {
        if (
          options.interfaceOnly &&
          ex.getKindName() !== "InterfaceDeclaration"
        ) {
          return false;
        }
        return true;
      });
    })
    .map((exDeclaration) => {
      if (exported.indexOf(exDeclaration[0]) > -1) {
        return `${exDeclaration[0]} as ${clientName}${exDeclaration[0]}`;
      }
      return exDeclaration[0];
    });
  const moduleSpecifier = `./${
    options.isTopLevel && options.subfolder !== ""
      ? options.subfolder + "/"
      : ""
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
    `${subfolder !== "" ? "../" : ""}models`
  );
  exportModules(
    subClientIndexFile,
    codeModel.project,
    srcPath,
    clientName,
    "api",
    { subfolder, interfaceOnly: true }
  );
  exportModules(
    subClientIndexFile,
    codeModel.project,
    srcPath,
    clientName,
    "classic",
    { subfolder }
  );
}
