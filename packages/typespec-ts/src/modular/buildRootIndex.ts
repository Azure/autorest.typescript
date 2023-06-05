import { Project, SourceFile } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client } from "./modularCodeModel.js";

export function buildRootIndex(
  client: Client,
  project: Project,
  rootIndexFile: SourceFile,
  srcPath: string,
  isLast: boolean
) {
  const clientName = `${getClientName(client)}Client`;
  const clientFile = project.getSourceFile(`${srcPath}/src/${clientName}.ts`);

  if (!clientFile) {
    throw new Error(
      `Couldn't find client file: ${srcPath}/src/${clientName}.ts`
    );
  }

  exportClassicalClient(client, rootIndexFile);

  if (isLast) {
    exportApiIndex(rootIndexFile, srcPath);
    rootIndexFile.addExportDeclarations([
      {
        moduleSpecifier: `./common/interfaces.js`,
        namedExports: [`RequestOptions`]
      }
    ]);
  }
}

function exportClassicalClient(client: Client, indexFile: SourceFile) {
  const clientName = `${getClientName(client)}Client`;
  indexFile.addExportDeclaration({
    namedExports: [clientName],
    moduleSpecifier: `./${clientName}.js`
  });
}

function exportApiIndex(indexFile: SourceFile, srcPath: string) {
  const project = indexFile.getProject();
  let modelFilePath = `${srcPath}/src/api/index.ts`;
  let moduleSpecifier = "./api/index.js";
  const modelsFile = project.getSourceFile(modelFilePath);
  if (!modelsFile) {
    return;
  }

  const namedExports = [...modelsFile.getExportedDeclarations().keys()];
  indexFile.addExportDeclaration({ moduleSpecifier, namedExports });
}
