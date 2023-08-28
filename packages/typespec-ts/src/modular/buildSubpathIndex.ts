import { join } from "path";
import { Client, ModularCodeModel } from "./modularCodeModel.js";

export function buildSubpathIndexFile(
  codeModel: ModularCodeModel,
  client: Client,
  subpath: string
) {
  const { subfolder } = client;
  const srcPath = codeModel.modularOptions.sourceRoot;

  const apiFilePattern = join(srcPath, client.subfolder ?? "", subpath);
  const apiFiles = codeModel.project.getSourceFiles().filter((file) => {
    return file
      .getFilePath()
      .replace(/\\/g, "/")
      .startsWith(apiFilePattern.replace(/\\/g, "/"));
  });
  const indexFile = codeModel.project.createSourceFile(
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
