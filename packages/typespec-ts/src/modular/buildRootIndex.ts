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
  const clientFile = project.getSourceFile(`${srcPath}/src/${subfolder !== "" ? subfolder + "/": ""}${clientName}.ts`);

  if (!clientFile) {
    throw new Error(
      `Couldn't find client file: ${srcPath}/src/${clientName}.ts`
    );
  }

  exportClassicalClient(client, rootIndexFile, subfolder);

  if (isLast) {
    // exportApiIndex(rootIndexFile, srcPath);
    exportModels(rootIndexFile, srcPath);
  }
}

function exportClassicalClient(client: Client, indexFile: SourceFile, subfolder: string) {
  const clientName = `${getClientName(client)}Client`;
  indexFile.addExportDeclaration({
    namedExports: [clientName],
    moduleSpecifier: `./${subfolder !== "" ? subfolder + "/": ""}${clientName}.js`
  });
}

function exportModels(indexFile: SourceFile, srcPath: string) {
  const project = indexFile.getProject();
  const modelsFile = project.getSourceFile(`${srcPath}/src/models/index.ts`);
  if (!modelsFile) {
    return;
  }

  const moduleSpecifier = "./models/index.js";
  indexFile.addExportDeclaration({
    moduleSpecifier,
    namedExports: [...modelsFile.getExportedDeclarations().keys()]
  });
}
