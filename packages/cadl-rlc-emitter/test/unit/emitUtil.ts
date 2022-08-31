import {
  buildParameterTypes,
  buildSchemaTypes,
  ImportKind
} from "@azure-tools/rlc-codegen";
import { transformToParameterTypes } from "../../src/transform/transformParameters.js";
import { transformSchemas } from "../../src/transform/transformSchemas.js";
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
    parameters
  });
}
