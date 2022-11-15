// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ImportKind,
  NameType,
  normalizeName,
  OperationParameter,
  OperationResponse,
  Parameter,
  PathParameter,
  Paths,
  RLCModel,
  RLCOptions,
  Schema,
  UrlInfo
} from "@azure-tools/rlc-common";
import {
  getDoc,
  getServiceNamespace,
  getServiceTitle,
  getServiceVersion,
  Program,
  Type,
  BooleanLiteral,
  StringLiteral,
  NumericLiteral
} from "@cadl-lang/compiler";
import { getServers } from "@cadl-lang/rest/http";
import { join } from "path";
import { getSchemaForType } from "../modelUtils.js";
import { transformAnnotationDetails } from "./transformAnnotationDetails.js";
import { transformToParameterTypes } from "./transformParameters.js";
import { transformPaths } from "./transformPaths.js";
import { transformToResponseTypes } from "./transformResponses.js";
import { transformSchemas } from "./transformSchemas.js";
import { transformRLCOptions } from "./transfromRLCOptions.js";

export async function transformRLCModel(
  program: Program,
  emitterOptions: RLCOptions
): Promise<RLCModel> {
  const options: RLCOptions = transformRLCOptions(program, emitterOptions);
  const srcPath = join(program.compilerOptions.outputDir ?? "", "src");
  const libraryName = normalizeName(
    options?.title ?? getServiceTitle(program),
    NameType.Class
  );
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
  const annotations = transformAnnotationDetails(program);
  const urlInfo = transformUrlInfo(program);
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
    annotations,
    urlInfo
  };
}

function transformApiVersionParam(program: Program): Parameter | undefined {
  const apiVersion = getServiceVersion(program);
  if (apiVersion && apiVersion !== "0000-00-00") {
    return {
      name: "api-version",
      type: "constant",
      default: apiVersion
    };
  }
  return undefined;
}

export function transformUrlInfo(program: Program): UrlInfo | undefined {
  const serviceNs = getServiceNamespace(program);
  let endpoint = undefined;
  const urlParameters: PathParameter[] = [];
  if (serviceNs) {
    const host = getServers(program, serviceNs);
    if (host?.[0]?.url) {
      endpoint = host[0].url;
    }
    if (host && host?.[0] && host?.[0]?.parameters) {
      // Currently we only support one parameter in the servers definition
      for (const key of host[0].parameters.keys()) {
        const type = host?.[0]?.parameters.get(key)?.type;
        const defaultValue = host?.[0]?.parameters.get(key)?.default;

        if (type) {
          urlParameters.push({
            name: key,
            type: getSchemaForType(program, type).type,
            description: getDoc(program, type),
            value: isLiteralValue(defaultValue) ? defaultValue.value : undefined
          });
        }
      }
    }
  }
  return { endpoint, urlParameters };
}

function isLiteralValue(
  type?: Type
): type is StringLiteral | NumericLiteral | BooleanLiteral {
  if (!type) {
    return false;
  }

  if (
    type.kind === "Boolean" ||
    type.kind === "String" ||
    type.kind === "Number"
  ) {
    return type.value !== undefined;
  }

  return false;
}
