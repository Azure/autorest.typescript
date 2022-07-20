// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParameterLocation } from "@autorest/codemodel";
import {
  Project,
  VariableDeclarationKind,
  VariableDeclarationStructure,
  StructureKind,
  CodeBlockWriter
} from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { ParameterDetails } from "../models/parameterDetails";
import { writeMapper } from "./mappersGenerator";
import { shouldImportParameters } from "./utils/importUtils";
import { logger } from "../utils/logger";
import { getAutorestOptions } from "../autorestSession";

export function generateParameters(
  clientDetails: ClientDetails,
  project: Project
): void {
  const { useCoreV2, srcPath } = getAutorestOptions();
  if (!shouldImportParameters(clientDetails)) {
    logger.verbose(
      "There are no parameters to generate, skipping parameters file generation"
    );
    return;
  }

  const parametersFile = project.createSourceFile(
    `${srcPath}/models/parameters.ts`,
    undefined,
    { overwrite: true }
  );

  const importedCoreHttp = getCoreHttpImports(clientDetails);
  if (importedCoreHttp.length) {
    parametersFile.addImportDeclaration({
      namedImports: importedCoreHttp,
      moduleSpecifier: !useCoreV2 ? "@azure/core-http" : "@azure/core-client"
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
    // No need to generate parameters for flattened ones, as the will never get used
    .filter(p => !p.isFlattened)
    .forEach(param => {
      parametersFile.addVariableStatement({
        isExported: true,
        declarations: [buildParameterInitializer(param)],
        declarationKind: VariableDeclarationKind.Const,
        leadingTrivia: writer => writer.blankLine()
      });
    });

  parametersFile.fixUnusedIdentifiers();
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
  const { useCoreV2 } = getAutorestOptions();
  if (useCoreV2) {
    switch (collectionFormat) {
      case "Csv":
        collectionFormat = '"CSV"';
        break;
      case "Ssv":
        collectionFormat = '"SSV"';
        break;
      case "Tsv":
        collectionFormat = '"TSV"';
        break;
      case "Pipes":
        collectionFormat = '"Pipes"';
        break;
      case "Multi":
        collectionFormat = '"Multi"';
        break;
    }

    return writer.conditionalWrite(
      !!collectionFormat,
      () => `collectionFormat: ${collectionFormat},`
    );
  }

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
  if (typeof mapper === "string") {
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
  const { useCoreV2 } = getAutorestOptions();
  const parameterTypes: string[] = clientDetails.parameters
    .filter(p => !p.isSynthetic)
    .map(p => getParameterType(p.location));

  if (
    clientDetails.parameters
      .filter(p => !p.isSynthetic)
      .some(p => p.collectionFormat) &&
    !useCoreV2
  ) {
    parameterTypes.push("QueryCollectionFormat");
  }

  return [...new Set<string>(parameterTypes)];
}

function getImportedMappers(clientDetails: ClientDetails) {
  const mappers = clientDetails.parameters
    .filter(p => !p.isSynthetic && typeof p.mapper === "string")
    .map(p => `${p.mapper} as ${p.mapper}Mapper`);

  return [...new Set<string>(mappers)];
}
