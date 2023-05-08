import { Project } from "ts-morph";

export function buildApiIndexFile(
  project: Project,
  srcPath: string,
  subfolder: string
) {
  const apiFiles = project.getSourceFiles(`**/src/api/${subfolder}**`);
  const indexFile = project.createSourceFile(
    `${srcPath}/src/api/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }index.ts`
  );
  for (const file of apiFiles) {
    const exports = [...file.getExportedDeclarations().keys()];
    indexFile.addExportDeclaration({
      moduleSpecifier: `./${
        subfolder && subfolder !== "" ? subfolder + "/" : ""
      }${file.getBaseNameWithoutExtension()}.js`,
      namedExports: exports
    });
  }
}
