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
  File
} from "@azure-tools/rlc-codegen";
import { dirname, isAbsolute, join } from "path";
import { Project } from "ts-morph";
import { transformRLCModel } from "./transform/transform.js";

export async function $onEmit(program: Program) {
  const rlcModels = await transformRLCModel(program);
  const project = new Project();
  await emitClientDefinition(rlcModels, program);
  await emitModels(rlcModels, program, project);
  await emitResponseTypes(rlcModels, program);
  await emitParameterTypes(rlcModels, program);
  await emitIsUnexpectedHelper(rlcModels, program);
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
  const clientDefinitionsFile = buildClientDefinitions(rlcModels, {
    clientImports: new Set(),
    importedParameters: new Set(),
    importedResponses: new Set()
  });

  await emitFile(clientDefinitionsFile, program);
}

async function emitResponseTypes(rlcModels: RLCModel, program: Program) {
  const responsesFile = buildResponseTypes(rlcModels);
  if (responsesFile) {
    await emitFile(responsesFile, program);
  }
}

async function emitParameterTypes(rlcModels: RLCModel, program: Program) {
  const parametersFile = buildParameterTypes(rlcModels);
  if (parametersFile) {
    await emitFile(parametersFile, program);
  }
}

async function emitIsUnexpectedHelper(rlcModels: RLCModel, program: Program) {
  const isUnexpectedHelperFile = buildIsUnexpectedHelper(rlcModels);
  if (isUnexpectedHelperFile) {
    await emitFile(isUnexpectedHelperFile, program);
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
  await host.mkdirp(dirname(filePath));
  await host.writeFile(filePath, file.content);
}
