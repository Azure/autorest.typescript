import { Project, SourceFile } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client } from "./modularCodeModel.js";

let buildIndexFirstTime = true;
export function buildRootIndex(
  client: Client,
  project: Project,
  rootIndexFile: SourceFile,
  srcPath: string,
  subfolder: string
) {
  const clientName = `${getClientName(client)}Client`;
  const clientFile = project.getSourceFile(`${srcPath}/src/${clientName}.ts`);

  if (!clientFile) {
    throw new Error(
      `Couldn't find client file: ${srcPath}/src/${clientName}.ts`
    );
  }

  exportModels(rootIndexFile, srcPath, subfolder, clientName);
  exportOptionsInterfaces(client, rootIndexFile, srcPath, subfolder);
  exportClassicalClient(client, rootIndexFile);

  if (buildIndexFirstTime) {
    rootIndexFile.addExportDeclarations([
      {
        moduleSpecifier: `./common/interfaces.js`,
        namedExports: [`RequestOptions`]
      }
    ]);
    buildIndexFirstTime = false;
  }
}

function exportClassicalClient(client: Client, indexFile: SourceFile) {
  const clientName = `${getClientName(client)}Client`;
  indexFile.addExportDeclaration({
    namedExports: [clientName, `${clientName}Options`],
    moduleSpecifier: `./${clientName}.js`
  });
}

function exportOptionsInterfaces(
  client: Client,
  indexFile: SourceFile,
  srcPath: string,
  subfolder: string
) {
  const clientContextName = `${getClientName(client)}Context`;
  const project = indexFile.getProject();
  let filesPath = `${srcPath}/src/api/**`;
  if (subfolder && subfolder !== "") {
    filesPath = `${srcPath}/src/api/${subfolder}/**`;
  }
  const files = project.getSourceFiles(filesPath);

  for (const file of files) {
    if (file.getBaseNameWithoutExtension() === clientContextName) {
      continue;
    }

    if (file.getBaseNameWithoutExtension() === "models") {
      continue;
    }

    if (file.getBaseNameWithoutExtension() === "index") {
      continue;
    }

    const namedExports: string[] = [];
    for (const [key, delaration] of file.getExportedDeclarations().entries()) {
      if (
        delaration[0]?.getKindName() === "InterfaceDeclaration" ||
        delaration[0]?.getKindName() === "TypeAliasDeclaration"
      ) {
        namedExports.push(key);
      }
    }

    if (namedExports.length > 0) {
      let moduleSpecifier = `./api/${file.getBaseNameWithoutExtension()}.js`;
      if (subfolder && subfolder !== "") {
        moduleSpecifier = `./api/${subfolder}/${file.getBaseNameWithoutExtension()}.js`;
      }

      indexFile.addExportDeclaration({ moduleSpecifier, namedExports });
    }
  }
}

function exportModels(
  indexFile: SourceFile,
  srcPath: string,
  subfolder: string,
  clientName: string
) {
  const project = indexFile.getProject();
  let modelFilePath = `${srcPath}/src/api/models.ts`;
  let moduleSpecifier = "./api/models.js";
  if (subfolder && subfolder !== "") {
    modelFilePath = `${srcPath}/src/api/${subfolder}/models.ts`;
    moduleSpecifier = `./api/${subfolder}/models.js`;
  }
  const modelsFile = project.getSourceFile(modelFilePath);

  if (!modelsFile) {
    return;
  }

  const exportedModels = [...indexFile.getExportedDeclarations().keys()];
  const namedExports = [...modelsFile.getExportedDeclarations().keys()].map(
    (modelName) => {
      if (exportedModels.indexOf(modelName) > -1) {
        return `${modelName} as ${clientName}${modelName}`;
      } else {
        return modelName;
      }
    }
  );

  indexFile.addExportDeclaration({ moduleSpecifier, namedExports });
}
