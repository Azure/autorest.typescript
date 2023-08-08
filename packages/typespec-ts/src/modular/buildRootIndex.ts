import { Project, SourceFile } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client } from "./modularCodeModel.js";

export function buildRootIndex(
  client: Client,
  project: Project,
  rootIndexFile: SourceFile,
  srcPath: string,
  subfolder: string
) {
  const clientName = `${getClientName(client)}Client`;
  const clientFile = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}${clientName}.ts`
  );

  if (!clientFile) {
    throw new Error(`Couldn't find client file: ${srcPath}/${clientName}.ts`);
  }

  exportClassicalClient(client, rootIndexFile, subfolder);
  exportModels(rootIndexFile, project, srcPath, clientName, subfolder, true);
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
  clientName: string,
  subfolder: string = "",
  isTopLevel: boolean = false
) {
  const modelsFile = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}models/index.ts`
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
  }models/index.js`;
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
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}index.ts`,
    undefined,
    { overwrite: true }
  );
  const clientName = `${getClientName(client)}Client`;
  const clientFilePath = `${srcPath}/${
    subfolder !== "" ? subfolder + "/" : ""
  }${clientName}.ts`;
  const clientFile = project.getSourceFile(clientFilePath);

  if (!clientFile) {
    throw new Error(`Couldn't find client file: ${clientFilePath}`);
  }

  exportClassicalClient(client, subClientIndexFile, subfolder, true);
  exportModels(subClientIndexFile, project, srcPath, clientName, subfolder);
}
