// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ImportKind, OperationResponse, Paths, RLCModel, RLCOptions, Schema } from "@azure-tools/rlc-codegen";
import { Program } from "@cadl-lang/compiler";
import { join } from "path";
import { transformPaths } from "./transformPaths.js";
import { transformToResponseTypes } from "./transformResponses.js";
import { transformSchemas } from "./transformSchemas.js";

export async function transformRLCModel(program: Program): Promise<RLCModel> {
  const srcPath = program.compilerOptions.outputPath
    ? join(program.compilerOptions.outputPath, "src")
    : "src";
  const libraryName = "Foo";
  const options: RLCOptions = {
    // TODO: Read configuration from CADL
    includeShortcuts: true
  };
  const importSet = new Map<ImportKind, Set<string>>();
  const paths: Paths = transformPaths(program);
  const schemas: Schema[] = transformSchemas(program);
  const responses: OperationResponse[] = transformToResponseTypes(program, importSet);

  return { srcPath, libraryName, paths, options, schemas, responses, importSet };
}
