import { ModularEmitterOptions } from "./modularCodeModel.js";

export function emitLoggerFile(
  emitterOptions: ModularEmitterOptions,
  srcPath: string = "src"
) {
  if (emitterOptions.options.flavor !== "azure") {
    return;
  }

  const sourceFile = emitterOptions.project.createSourceFile(
    `${srcPath}/logger.ts`,
    "",
    {
      overwrite: true
    }
  );

  sourceFile.addImportDeclaration({
    namedImports: ["createClientLogger"],
    moduleSpecifier: "@azure/logger"
  });

  const name =
    emitterOptions.options.packageDetails?.nameWithoutScope ??
    emitterOptions.options.packageDetails?.name;
  sourceFile.addStatements(
    `export const logger = createClientLogger("${name}");`
  );
}
