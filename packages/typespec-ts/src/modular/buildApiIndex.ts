import { Project } from "ts-morph";

export function buildApiIndexFile(project: Project, srcPath: string) {
  const apiFiles = project.getSourceFiles("**/src/api/**");
  const indexFile = project.createSourceFile(`${srcPath}/api/index.ts`);
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
