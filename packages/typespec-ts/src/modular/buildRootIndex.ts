import { Project, SourceFile } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client } from "./modularCodeModel.js";

export function buildRootIndex(
  client: Client,
  project: Project,
  rootIndexFile: SourceFile,
  srcPath: string,
  subfolder: string,
  isLast: boolean
) {
  const clientName = `${getClientName(client)}Client`;
  const clientFile = project.getSourceFile(
    `${srcPath}/src/${subfolder !== "" ? subfolder + "/" : ""}${clientName}.ts`
  );

  if (!clientFile) {
    throw new Error(
      `Couldn't find client file: ${srcPath}/src/${clientName}.ts`
    );
  }

  exportClassicalClient(client, rootIndexFile, subfolder);

  if (isLast) {
    // exportApiIndex(rootIndexFile, srcPath);
    exportModels(rootIndexFile, project, srcPath);
  }
}

function exportClassicalClient(
  client: Client,
  indexFile: SourceFile,
  subfolder: string,
  isSubClient: boolean = false
) {
  const clientName = `${getClientName(client)}Client`;
  indexFile.addExportDeclaration({
    namedExports: [clientName, `${clientName}Options`],
    moduleSpecifier: `./${
      subfolder !== "" && !isSubClient ? subfolder + "/" : ""
    }${clientName}.js`
  });
}

function exportModels(
  indexFile: SourceFile,
  project: Project,
  srcPath: string,
  subfolder: string = "",
  isSubClient: boolean = false
) {
  const modelsFile = project.getSourceFile(
    `${srcPath}/src/${
      subfolder !== "" && isSubClient ? subfolder + "/" : ""
    }models/index.ts`
  );
  if (!modelsFile) {
    return;
  }

  const namedExports = [...modelsFile.getExportedDeclarations().keys()];
  const moduleSpecifier = "./models/index.js";
  indexFile.addExportDeclaration({
    moduleSpecifier,
    namedExports
  });
}

export function buildSubClientIndexFile(
  client: Client,
  project: Project,
  srcPath: string,
  subfolder: string
) {
  const subClientIndexFile = project.createSourceFile(
    `${srcPath}/src/${subfolder !== "" ? subfolder + "/" : ""}index.ts`,
    undefined,
    { overwrite: true }
  );
  const clientName = `${getClientName(client)}Client`;
  const clientFilePath = `${srcPath}/src/${
    subfolder !== "" ? subfolder + "/" : ""
  }${clientName}.ts`;
  const clientFile = project.getSourceFile(clientFilePath);

  if (!clientFile) {
    throw new Error(`Couldn't find client file: ${clientFilePath}`);
  }

  exportClassicalClient(client, subClientIndexFile, subfolder, true);
  exportModels(subClientIndexFile, project, srcPath, subfolder, true);
}
