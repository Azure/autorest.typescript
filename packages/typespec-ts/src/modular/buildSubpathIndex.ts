import { join } from "path";
import { Project } from "ts-morph";

export function buildSubpathIndexFile(
  project: Project,
  srcPath: string,
  subpath: string,
  subfolder: string
) {
  const apiFilePattern = join(srcPath, subfolder, subpath);
  const apiFiles = project.getSourceFiles().filter((file) => {
    return file
      .getFilePath()
      .replace(/\\/g, "/")
      .startsWith(apiFilePattern.replace(/\\/g, "/"));
  });
  const indexFile = project.createSourceFile(
    `${srcPath}/${subfolder}/${subpath}/index.ts`
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
