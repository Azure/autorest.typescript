// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParameterLocation } from "@azure-tools/codemodel";
import {
  Project,
  VariableDeclarationKind,
  VariableDeclarationStructure,
  StructureKind,
  CodeBlockWriter
} from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { ParameterDetails } from "../models/parameterDetails";
import { isString } from "util";
import { writeMapper } from "./mappersGenerator";

export function generateParameters(
  clientDetails: ClientDetails,
  project: Project
): void {
  const parametersFile = project.createSourceFile(
    `${clientDetails.srcPath}/models/parameters.ts`,
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

  clientDetails.parameters
    .filter(p => !p.isSynthetic)
    .forEach(param => {
      parametersFile.addVariableStatement({
        isExported: true,
        declarations: [buildParameterInitializer(param)],
        declarationKind: VariableDeclarationKind.Const,
        leadingTrivia: writer => writer.blankLine()
      });
    });
}

function buildParameterInitializer(
  parameter: ParameterDetails
): VariableDeclarationStructure {
  const { nameRef, location } = parameter;
  const type = getParameterType(location);
  return {
    name: nameRef,
    type,
    initializer: writer => {
      writer.block(() => {
        writeParameterPath(writer, parameter);
        writeParameterMapper(writer, parameter);
        writeParameterCollectionFormat(writer, parameter);
        writeParameterSkipEncoding(writer, parameter);
      });
    },
    kind: StructureKind.VariableDeclaration
  };
}

function writeParameterCollectionFormat(
  writer: CodeBlockWriter,
  { collectionFormat }: ParameterDetails
) {
  return writer.conditionalWrite(
    !!collectionFormat,
    () =>
      `collectionFormat: coreHttp.QueryCollectionFormat.${collectionFormat},`
  );
}

function writeParameterSkipEncoding(
  writer: CodeBlockWriter,
  { skipEncoding }: ParameterDetails
) {
  return writer.conditionalWrite(!!skipEncoding, () => `skipEncoding: true,`);
}

function writeParameterPath(
  writer: CodeBlockWriter,
  { parameterPath }: ParameterDetails
) {
  return writer.write(`parameterPath: ${JSON.stringify(parameterPath)},`);
}

// We may want to move this to a common place to potentially be reused by mappersGenerator
function writeParameterMapper(
  writer: CodeBlockWriter,
  { mapper }: ParameterDetails
) {
  if (isString(mapper)) {
    return writer.write(`mapper: Mappers.${mapper},`);
  }

  writer.write("mapper: ");
  writeMapper(writer, mapper);
  return writer.write(",");
}

function getParameterType(location: ParameterLocation) {
  switch (location) {
    case ParameterLocation.Path:
    case ParameterLocation.Uri:
      return "coreHttp.OperationURLParameter";
    case ParameterLocation.Query:
      return "coreHttp.OperationQueryParameter";
    default:
      return "coreHttp.OperationParameter";
  }
}
