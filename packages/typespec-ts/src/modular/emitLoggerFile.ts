import { Project } from "ts-morph";
import { ModularCodeModel } from "./modularCodeModel.js";

export function emitLoggerFile(
  codeModel: ModularCodeModel,
  project: Project,
  srcPath: string = "src"
) {
  if (codeModel.options.flavor !== "azure") {
    return;
  }

  const sourceFile = project.createSourceFile(`${srcPath}/logger.ts`, "", {
    overwrite: true
  });

  sourceFile.addImportDeclaration({
    namedImports: ["createClientLogger"],
    moduleSpecifier: "@azure/logger"
  });

  const name =
    codeModel.options.packageDetails?.nameWithoutScope ??
    codeModel.options.packageDetails?.name;
  sourceFile.addStatements(
    `export const logger = createClientLogger("${name}");`
  );
}
