import { Project, SourceFile } from "ts-morph";
import { join } from "path";

export function buildSubpathIndexFile(
  project: Project,
  srcPath: string,
  subpath: string,
  subfolder: string
) {
  const apiFiles = project.getSourceFiles(`**/src/${subfolder}/${subpath}/**`);
  const indexFile = project.createSourceFile(
    `${srcPath}/src/${subfolder}/${subpath}/index.ts`
  );
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

export function buildSubpathTopLevelIndexFile(
  project: Project,
  srcPath: string,
  subfolder: string,
  topLevelIndexFile: SourceFile,
  clientName: string,
  subpath: string
) {
  const subpathIndexFile = project.getSourceFile(
    join(srcPath, `src/${subfolder}/${subpath}/index.ts`)
  );

  const exportedModels = [
    ...topLevelIndexFile.getExportedDeclarations().keys()
  ];
  if (subpathIndexFile) {
    let exports = [];
    exports = [...subpathIndexFile.getExportedDeclarations().keys()]
      // _ stands for internal use and Client stands for Rest Level Client, and we don't want to export it in the api layer.
      .filter((k) => !k.startsWith("_") && k !== "Client" && !k.endsWith("Context"))
      .map((modelName) => {
        if (exportedModels.indexOf(modelName) > -1) {
          if (modelName.charAt(0) === modelName.charAt(0).toUpperCase()) {
            return `${modelName} as ${clientName}${modelName}`;
          } else {
            return `${modelName} as ${modelName}In${clientName}`;
          }
        } else {
          return modelName;
        }
      });
    topLevelIndexFile.addExportDeclaration({
      moduleSpecifier: `../${subfolder}/${subpath}/index.js`,
      namedExports: exports
    });
  }
}
