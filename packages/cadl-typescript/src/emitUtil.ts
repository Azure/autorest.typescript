import { ContentBuilder } from "@azure-tools/rlc-common";
import { buildSchemaTypes } from "@azure-tools/rlc-common";
import { File, RLCModel } from "@azure-tools/rlc-common";
import { CompilerHost, Program } from "@cadl-lang/compiler";
import { dirname, isAbsolute, join } from "path";
import { format } from "prettier";
import { prettierJSONOptions, prettierTypeScriptOptions } from "./lib.js";

export async function emitModels(rlcModels: RLCModel, program: Program) {
  const schemaOutput = buildSchemaTypes(rlcModels);
  if (schemaOutput) {
    const { inputModelFile, outputModelFile } = schemaOutput;
    if (inputModelFile) {
      await emitFile(inputModelFile, program);
    }
    if (outputModelFile) {
      await emitFile(outputModelFile, program);
    }
  }
}

export async function emitContentByBuilder(
  program: Program,
  builderFnOrList: ContentBuilder | ContentBuilder[],
  rlcModels: RLCModel
) {
  if (!Array.isArray(builderFnOrList)) {
    builderFnOrList = [builderFnOrList];
  }
  for (const builderFn of builderFnOrList) {
    const contentFile = builderFn(rlcModels);
    if (contentFile) {
      await emitFile(contentFile, program);
    }
  }
}

async function emitFile(file: File, program: Program) {
  const host: CompilerHost = program.host;
  const filePath =
    isAbsolute(file.path) || !program.compilerOptions.outputDir
      ? file.path
      : join(program.compilerOptions.outputDir, file.path);
  const isJson = /\.json$/gi.test(filePath);
  const isSourceCode = /\.(ts|js)$/gi.test(filePath);
  let prettierFileContent = file.content;
  // Format the contents if necessary
  if (isJson || isSourceCode) {
    prettierFileContent = format(
      prettierFileContent,
      isJson ? prettierJSONOptions : prettierTypeScriptOptions
    );
  }
  await host.mkdirp(dirname(filePath));
  await host.writeFile(filePath, prettierFileContent);
}
