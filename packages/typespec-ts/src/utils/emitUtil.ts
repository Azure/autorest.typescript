import { ContentBuilder } from "@azure-tools/rlc-common";
import { buildSchemaTypes } from "@azure-tools/rlc-common";
import { File, RLCModel } from "@azure-tools/rlc-common";
import { CompilerHost, Program } from "@typespec/compiler";
import { dirname, join } from "path";
import { format } from "prettier";
import { prettierJSONOptions, prettierTypeScriptOptions } from "../lib.js";

export async function emitModels(rlcModels: RLCModel, program: Program) {
  const schemaOutput = buildSchemaTypes(rlcModels);
  const isBranded = rlcModels?.options?.branded ?? true;
  if (schemaOutput) {
    const { inputModelFile, outputModelFile } = schemaOutput;
    if (inputModelFile) {
      await emitFile(inputModelFile, program, isBranded);
    }
    if (outputModelFile) {
      await emitFile(outputModelFile, program, isBranded);
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
  const isBranded = rlcModels?.options?.branded ?? true;
  for (const builderFn of builderFnOrList) {
    let contentFiles: File[] | File | undefined = builderFn(rlcModels);
    if (!contentFiles) {
      continue;
    }
    if (!Array.isArray(contentFiles)) {
      contentFiles = [contentFiles];
    }
    for (const file of contentFiles) {
      await emitFile(file, program, isBranded, emitterOutputDir);
    }
  }
}

async function emitFile(
  file: File,
  program: Program,
  isBranded: boolean,
  emitterOutputDir?: string
) {
  const host: CompilerHost = program.host;
  const filePath = join(emitterOutputDir ?? "", file.path);
  const isJson = /\.json$/gi.test(filePath);
  const isSourceCode = /\.(ts|js)$/gi.test(filePath);
  const microsoftHeader = isBranded
    ? `// Copyright (c) Microsoft Corporation.\n`
    : "";
  const licenseHeader = `${microsoftHeader}// Licensed under the MIT license.\n`;
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
