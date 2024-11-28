import {
  buildSchemaTypes,
  ContentBuilder,
  File,
  isAzurePackage,
  RLCModel
} from "@azure-tools/rlc-common";
import { CompilerHost, Program } from "@typespec/compiler";
import { dirname, join } from "path";
import { format } from "prettier";
import { prettierJSONOptions, prettierTypeScriptOptions } from "../lib.js";

export async function emitModels(rlcModels: RLCModel, program: Program) {
  const schemaOutput = buildSchemaTypes(rlcModels);
  const isAzureFlavor = isAzurePackage(rlcModels);
  if (schemaOutput) {
    const { inputModelFile, outputModelFile } = schemaOutput;
    if (inputModelFile) {
      await emitFile(inputModelFile, program, isAzureFlavor);
    }
    if (outputModelFile) {
      await emitFile(outputModelFile, program, isAzureFlavor);
    }
  }
}

export async function emitContentByBuilder(
  program: Program,
  builderFnOrList: ContentBuilder | ContentBuilder[],
  rlcModels: RLCModel,
  emitterOutputDir?: string
) {
  if (!Array.isArray(builderFnOrList)) {
    builderFnOrList = [builderFnOrList];
  }
  const isAzureFlavor = isAzurePackage(rlcModels);
  for (const builderFn of builderFnOrList) {
    let contentFiles: File[] | File | undefined = builderFn(rlcModels);
    if (!contentFiles) {
      continue;
    }
    if (!Array.isArray(contentFiles)) {
      contentFiles = [contentFiles];
    }
    for (const file of contentFiles) {
      await emitFile(file, program, isAzureFlavor, emitterOutputDir);
    }
  }
}

async function emitFile(
  file: File,
  program: Program,
  isAzureFlavor: boolean,
  emitterOutputDir?: string
) {
  if (program.compilerOptions.noEmit || program.hasError()) {
    return;
  }
  const host: CompilerHost = program.host;
  const filePath = join(emitterOutputDir ?? "", file.path);
  const isJson = /\.json$/gi.test(filePath);
  const isSourceCode = /\.(ts|js)$/gi.test(filePath);
  const microsoftHeader = isAzureFlavor
    ? `// Copyright (c) Microsoft Corporation.\n`
    : "";
  const licenseHeader = `${microsoftHeader}// Licensed under the MIT License.\n`;
  let prettierFileContent = file.content;

  if (isSourceCode) {
    prettierFileContent = `${licenseHeader.trimStart()}\n${prettierFileContent}`;
  }
  // Format the contents if necessary
  if (isJson || isSourceCode) {
    try {
      prettierFileContent = await format(
        prettierFileContent,
        isJson ? prettierJSONOptions : prettierTypeScriptOptions
      );
    } catch (e) {
      console.error(`Failed to format file: ${filePath}`);
      throw e;
    }
  }
  await host.mkdirp(dirname(filePath));
  await host.writeFile(filePath, prettierFileContent);
}
