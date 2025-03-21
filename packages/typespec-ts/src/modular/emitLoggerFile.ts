import { useContext } from "../contextManager.js";
import { ModularEmitterOptions } from "./interfaces.js";

export function emitLoggerFile(
  emitterOptions: ModularEmitterOptions,
  srcPath: string = "src"
) {
  const project = useContext("outputProject");
  if (emitterOptions.options.flavor !== "azure") {
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
    emitterOptions.options.packageDetails?.nameWithoutScope ??
    emitterOptions.options.packageDetails?.name;
  sourceFile.addStatements(
    `export const logger = createClientLogger("${name}");`
  );
}
