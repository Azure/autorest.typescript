import {
  buildClientDefinitions,
  buildParameterTypes,
  buildResponseTypes,
  buildSchemaTypes,
  ImportKind
} from "@azure-tools/rlc-codegen";
import { transformToParameterTypes } from "../../src/transform/transformParameters.js";
import { transformSchemas } from "../../src/transform/transformSchemas.js";
import { transformPaths } from "../../src/transform/transformPaths.js";
import { transformToResponseTypes } from "../../src/transform/transformResponses.js";
import { rlcEmitterFor } from "./testUtil.js";

export async function emitModelsFromCadl(cadlContent: string) {
  const program = await rlcEmitterFor(cadlContent);
  const rlcSchemas = transformSchemas(program);
  return buildSchemaTypes({
    schemas: rlcSchemas,
    srcPath: "",
    paths: {},
    libraryName: "test"
  });
}

export async function emitParameterFromCadl(cadlContent: string) {
  const program = await rlcEmitterFor(cadlContent);
  const importSet = new Map<ImportKind, Set<string>>();
  const parameters = transformToParameterTypes(program, importSet);
  return buildParameterTypes({
    srcPath: "",
    paths: {},
    libraryName: "test",
    schemas: [],
    parameters,
    importSet
  });
}

export async function emitClientDefinitionFromCadl(cadlContent: string) {
  const program = await rlcEmitterFor(cadlContent);
  const paths = transformPaths(program);
  return buildClientDefinitions({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths
  });
}

export async function emitResponsesFromCadl(cadlContent: string) {
  const program = await rlcEmitterFor(cadlContent);
  const importSet = new Map<ImportKind, Set<string>>();
  const responses = transformToResponseTypes(program, importSet);
  return buildResponseTypes({
    srcPath: "",
    libraryName: "test",
    schemas: [],
    paths: {},
    responses,
    importSet
  });
}
