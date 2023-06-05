import { Project, SourceFile } from "ts-morph";
import { join } from "path";

export function buildApiIndexFile(
  project: Project,
  srcPath: string,
  subfolder: string
) {
  let apiFiles;
  let indexFile;
  if (subfolder && subfolder !== "") {
    apiFiles = project.getSourceFiles(`**/src/api/${subfolder}/**`);
    indexFile = project.createSourceFile(
      `${srcPath}/src/api/${subfolder}/index.ts`
    );
  } else {
    apiFiles = project.getSourceFiles(`**/src/api/**`);
    indexFile = project.createSourceFile(`${srcPath}/src/api/index.ts`);
  }

  for (const file of apiFiles) {
    const exports = [...file.getExportedDeclarations().keys()].filter(
      (k) => !k.startsWith("_")
    );
    indexFile.addExportDeclaration({
      moduleSpecifier: `./${file.getBaseNameWithoutExtension()}.js`,
      namedExports: exports
    });
  }
}

export function buildApiTopLevelIndexFile(
  project: Project,
  srcPath: string,
  subfolder: string,
  apiTopLevelIndexFile: SourceFile,
  clientName: string
) {
  const apiFile = project.getSourceFile(join(srcPath, `src/api/${subfolder}/index.ts`));

  const exportedModels = [
    ...apiTopLevelIndexFile.getExportedDeclarations().keys()
  ];
  if (apiFile) {
    const exports = [...apiFile.getExportedDeclarations().keys()]
      // _ stands for internal use and Client stands for Rest Level Client, and we don't want to export it in the api layer.
      .filter((k) => !k.startsWith("_") && k !== "Client")
      .map((modelName) => {
        if (exportedModels.indexOf(modelName) > -1) {
          return `${modelName} as ${clientName}${modelName}`;
        } else {
          return modelName;
        }
      });
    apiTopLevelIndexFile.addExportDeclaration({
      moduleSpecifier: `./${subfolder}/${apiFile.getBaseNameWithoutExtension()}.js`,
      namedExports: exports
    });
  }
}
