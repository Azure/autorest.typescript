import { Project } from "ts-morph";

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
