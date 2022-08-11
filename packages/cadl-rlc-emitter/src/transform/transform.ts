// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ImportKind,
  NameType,
  normalizeName,
  OperationResponse,
  Paths,
  RLCModel,
  RLCOptions,
  Schema
} from "@azure-tools/rlc-codegen";
import { getServiceTitle, Program } from "@cadl-lang/compiler";
import { join } from "path";
import { transformPaths } from "./transformPaths.js";
import { transformToResponseTypes } from "./transformResponses.js";
import { transformSchemas } from "./transformSchemas.js";
import { transformRLCOptions } from "./transfromRLCOptions.js";

export async function transformRLCModel(program: Program): Promise<RLCModel> {
  const srcPath = join(program.compilerOptions.outputPath ?? "", "src")
  const libraryName = normalizeName(getServiceTitle(program), NameType.Class);
  const options: RLCOptions = transformRLCOptions(program);
  const importSet = new Map<ImportKind, Set<string>>();
  const paths: Paths = transformPaths(program);
  const schemas: Schema[] = transformSchemas(program);
  const responses: OperationResponse[] = transformToResponseTypes(
    program,
    importSet
  );

  return {
    srcPath,
    libraryName,
    paths,
    options,
    schemas,
    responses,
    importSet
  };
}
