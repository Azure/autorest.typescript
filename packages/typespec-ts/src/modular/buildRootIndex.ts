import { Project, SourceFile } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client } from "./modularCodeModel.js";

export function buildRootIndex(
  client: Client,
  project: Project,
  srcPath: string
) {
  const clientName = `${getClientName(client)}Client`;
  const clientFile = project.getSourceFile(`${srcPath}/src/${clientName}.ts`);

  if (!clientFile) {
    throw new Error(
      `Couldn't find client file: ${srcPath}/src/${clientName}.ts`
    );
  }

  const file = project.createSourceFile(`${srcPath}/src/index.ts`, "", {
    overwrite: true
  });

  exportModels(file, srcPath);
  exportOptionsInterfaces(client, file, srcPath);
  exportClassicalClient(client, file);

  file.addExportDeclarations([
    {
      moduleSpecifier: `./common/interfaces.js`,
      namedExports: [`ClientOptions`, `RequestOptions`]
    }
  ]);
}

function exportClassicalClient(client: Client, indexFile: SourceFile) {
  const clientName = `${getClientName(client)}Client`;
  indexFile.addExportDeclaration({
    namedExports: [clientName],
    moduleSpecifier: `./${clientName}.js`
  });
}

function exportOptionsInterfaces(
  client: Client,
  indexFile: SourceFile,
  srcPath: string
) {
  const clientContextName = `${getClientName(client)}Context`;
  const project = indexFile.getProject();
  const files = project.getSourceFiles(`${srcPath}/src/api/**`);

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

    const namedExports = [...file.getExportedDeclarations().keys()];
    const moduleSpecifier = `./api/${file.getBaseNameWithoutExtension()}.js`;

    indexFile.addExportDeclaration({ moduleSpecifier, namedExports });
  }
}

function exportModels(indexFile: SourceFile, srcPath: string) {
  const project = indexFile.getProject();
  const modelsFile = project.getSourceFile(`${srcPath}/src/api/models.ts`);

  if (!modelsFile) {
    return;
  }

  const namedExports = [...modelsFile.getExportedDeclarations().keys()];
  const moduleSpecifier = "./api/models.js";

  indexFile.addExportDeclaration({ moduleSpecifier, namedExports });
}
