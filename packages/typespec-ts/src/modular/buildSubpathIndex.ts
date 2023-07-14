import { Project } from "ts-morph";

export function buildSubpathIndexFile(
  project: Project,
  srcPath: string,
  subpath: string
) {
  const apiFiles = project.getSourceFiles(`**/src/${subpath}/**`);
  const indexFile = project.createSourceFile(
    `${srcPath}/src/${subpath}/index.ts`
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
