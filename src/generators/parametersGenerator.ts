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
import { shouldImportParameters } from "./utils/importUtils";
import { logger } from "../utils/logger";

export function generateParameters(
  clientDetails: ClientDetails,
  project: Project
): void {
  if (!shouldImportParameters(clientDetails)) {
    logger.verbose(
      "There are no parameters to generate, skipping parameters file generation"
    );
    return;
  }

  const parametersFile = project.createSourceFile(
    `${clientDetails.srcPath}/models/parameters.ts`,
    undefined,
    { overwrite: true }
  );

  const importedCoreHttp = getCoreHttpImports(clientDetails);
  if (importedCoreHttp.length) {
    parametersFile.addImportDeclaration({
      namedImports: importedCoreHttp,
      moduleSpecifier: "@azure/core-http"
    });
  }

  const importedMappers = getImportedMappers(clientDetails);
  if (importedMappers.length) {
    parametersFile.addImportDeclaration({
      namedImports: importedMappers,
      moduleSpecifier: "../models/mappers"
    });
  }

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
    () => `collectionFormat: QueryCollectionFormat.${collectionFormat},`
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
  writer.write("mapper: ");
  if (isString(mapper)) {
    writer.write(`${mapper}Mapper`);
  } else {
    writeMapper(writer, mapper);
  }

  return writer.write(",");
}

function getParameterType(location: ParameterLocation) {
  switch (location) {
    case ParameterLocation.Path:
    case ParameterLocation.Uri:
      return "OperationURLParameter";
    case ParameterLocation.Query:
      return "OperationQueryParameter";
    default:
      return "OperationParameter";
  }
}

function getCoreHttpImports(clientDetails: ClientDetails) {
  const parameterTypes: string[] = clientDetails.parameters
    .filter(p => !p.isSynthetic)
    .map(p => getParameterType(p.location));

  if (
    clientDetails.parameters
      .filter(p => !p.isSynthetic)
      .some(p => p.collectionFormat)
  ) {
    parameterTypes.push("QueryCollectionFormat");
  }

  return [...new Set<string>(parameterTypes)];
}

function getImportedMappers(clientDetails: ClientDetails) {
  const mappers = clientDetails.parameters
    .filter(p => !p.isSynthetic && isString(p.mapper))
    .map(p => `${p.mapper} as ${p.mapper}Mapper`);

  return [...new Set<string>(mappers)];
}
