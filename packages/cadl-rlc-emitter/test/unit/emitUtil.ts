import { buildSchemaTypes } from "@azure-tools/rlc-codegen";
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
