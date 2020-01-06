// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParameterLocation } from "@azure-tools/codemodel";
import { Project, VariableDeclarationKind } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { ParameterDetails } from "../models/parameterDetails";
import { isString } from "util";
import { Mapper } from "@azure/core-http";

export function generateParameters(
  clientDetails: ClientDetails,
  project: Project
): void {
  const parametersFile = project.createSourceFile(
    "src/models/parameters.ts",
    undefined,
    { overwrite: true }
  );

  parametersFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  parametersFile.addImportDeclaration({
    namespaceImport: "Mappers",
    moduleSpecifier: "../models/mappers"
  });

  clientDetails.parameters.forEach(param => {
    parametersFile.addVariableStatement({
      isExported: true,
      declarations: [buildParameterInitializer(param)],
      declarationKind: VariableDeclarationKind.Const,
      leadingTrivia: writer => writer.blankLine()
    });
  });
}

function buildParameterInitializer({
  parameterPath,
  nameRef,
  mapper,
  location
}: ParameterDetails) {
  const type = getParameterType(location);
  const initializer = getParameterInitializer(parameterPath, mapper);
  return {
    name: nameRef,
    type,
    initializer
  };
}

function getParameterInitializer(
  parameterPath: string | string[],
  mapper: string | Mapper
) {
  if (!isString(mapper)) {
    return JSON.stringify({
      parameterPath,
      mapper: isString(mapper) ? `Mappers.${mapper}` : mapper
    });
  }

  return `{parameterPath: ${JSON.stringify(
    parameterPath
  )}, mapper: Mappers.${mapper}}`;
}

function getParameterType(location: ParameterLocation) {
  switch (location) {
    case ParameterLocation.Path:
      return "coreHttp.OperationURLParameter";
    case ParameterLocation.Query:
      return "coreHttp.OperationQueryParameter";
    default:
      return "coreHttp.OperationParameter";
  }
}
