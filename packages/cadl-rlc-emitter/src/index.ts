// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CompilerHost, Program } from "@cadl-lang/compiler";
import {
  buildClientDefinitions,
  RLCModel,
  generateSchemaTypes,
  buildResponseTypes,
  buildParameterTypes,
  buildIsUnexpectedHelper,
  File,
  generateClient,
  buildIndexFile,
  buildTopLevelIndex
} from "@azure-tools/rlc-codegen";
import { dirname, isAbsolute, join } from "path";
import { Project } from "ts-morph";
import { transformRLCModel } from "./transform/transform.js";
import { prettierJSONOptions, prettierTypeScriptOptions } from "./lib.js";
import { format } from "prettier";
import { buildPackageFile } from "@azure-tools/rlc-codegen";

export async function $onEmit(program: Program) {
  const rlcModels = await transformRLCModel(program);
  const project = new Project();
  await emitClientDefinition(rlcModels, program);
  await emitModels(rlcModels, program, project);
  await emitResponseTypes(rlcModels, program);
  await emitClientFactory(rlcModels, program, project);
  await emitParameterTypes(rlcModels, program);
  await emitIsUnexpectedHelper(rlcModels, program);
  await emitIndexFile(rlcModels, program);
  await emitTopLevelIndexFile(rlcModels, program);
  await emitPackageFile(rlcModels, program);
}

async function emitModels(
  rlcModels: RLCModel,
  program: Program,
  project: Project
) {
  const schemaOutput = generateSchemaTypes(rlcModels, project);
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

async function emitClientDefinition(rlcModels: RLCModel, program: Program) {
  const clientDefinitionsFile = buildClientDefinitions(rlcModels);

  await emitFile(clientDefinitionsFile, program);
}

async function emitResponseTypes(rlcModels: RLCModel, program: Program) {
  const responsesFile = buildResponseTypes(rlcModels);
  if (responsesFile) {
    await emitFile(responsesFile, program);
  }
}

async function emitIsUnexpectedHelper(rlcModels: RLCModel, program: Program) {
  const isUnexpectedHelperFile = buildIsUnexpectedHelper(rlcModels);
  if (isUnexpectedHelperFile) {
    await emitFile(isUnexpectedHelperFile, program);
  }
}

async function emitClientFactory(
  rlcModels: RLCModel,
  program: Program,
  project: Project
) {
  const clientFactoryFile = generateClient(rlcModels, project);
  if (clientFactoryFile) {
    await emitFile(clientFactoryFile, program);
  }
}

async function emitParameterTypes(rlcModels: RLCModel, program: Program) {
  const parametersFile = buildParameterTypes(rlcModels);
  if (parametersFile) {
    await emitFile(parametersFile, program);
  }
}

async function emitFile(file: File, program: Program) {
  const host: CompilerHost = program.host;
  const filePath =
    isAbsolute(file.path) || !program.compilerOptions.outputPath
      ? file.path
      : join(program.compilerOptions.outputPath, file.path);
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

async function emitIndexFile(rlcModels: RLCModel, program: Program) {
  const moduleIndexFile = buildIndexFile(rlcModels);
  if (moduleIndexFile) {
    await emitFile(moduleIndexFile, program);
  }
}

async function emitPackageFile(rlcModels: RLCModel, program: Program) {
  const packageFile = buildPackageFile(rlcModels);
  if (packageFile) {
    await emitFile(packageFile, program);
  }
}

async function emitTopLevelIndexFile(rlcModels: RLCModel, program: Program) {
  const topLevelIndexFile = buildTopLevelIndex(rlcModels);
  if (topLevelIndexFile) {
    await emitFile(topLevelIndexFile, program);
  }
}
