// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ImportKind,
  NameType,
  normalizeName,
  OperationParameter,
  OperationResponse,
  Parameter,
  Paths,
  RLCModel,
  RLCOptions,
  Schema
} from "@azure-tools/rlc-codegen";
import {
  getServiceTitle,
  getServiceVersion,
  Program
} from "@cadl-lang/compiler";
import { join } from "path";
import { transformPageDetails } from "./transformPageDetails.js";
import { transformToParameterTypes } from "./transformParameters.js";
import { transformPaths } from "./transformPaths.js";
import { transformToResponseTypes } from "./transformResponses.js";
import { transformSchemas } from "./transformSchemas.js";
import { transformRLCOptions } from "./transfromRLCOptions.js";

export async function transformRLCModel(program: Program): Promise<RLCModel> {
  const srcPath = join(program.compilerOptions.outputPath ?? "", "src");
  const libraryName = normalizeName(getServiceTitle(program), NameType.Class);
  const options: RLCOptions = transformRLCOptions(program);
  const importSet = new Map<ImportKind, Set<string>>();
  const paths: Paths = transformPaths(program);
  const schemas: Schema[] = transformSchemas(program);
  const apiVersionParam = transformApiVersionParam(program);
  const responses: OperationResponse[] = transformToResponseTypes(
    program,
    importSet
  );
  const parameters: OperationParameter[] = transformToParameterTypes(
    program,
    importSet
  );
  const pageInfo = transformPageDetails(program);
  console.log("pageInfo", pageInfo);
  return {
    srcPath,
    libraryName,
    paths,
    options,
    schemas,
    responses,
    importSet,
    apiVersionParam,
    parameters,
    pageInfo
  };
}

function transformApiVersionParam(program: Program): Parameter | undefined {
  const apiVersion = getServiceVersion(program);
  if (apiVersion) {
    return {
      name: "api-version",
      type: "constant",
      default: apiVersion
    };
  }
  return undefined;
}
