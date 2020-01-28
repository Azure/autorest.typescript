// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParameterLocation } from "@azure-tools/codemodel";
import { Project, VariableDeclarationKind } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { ParameterDetails } from "../models/parameterDetails";
import { isString } from "util";
import { Mapper, MapperType } from "@azure/core-http";
import { keys, isNil } from "lodash";

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

function buildParameterInitializer(parameter: ParameterDetails) {
  const { nameRef, location } = parameter;
  const type = getParameterType(location);
  const initializer = getParameterInitializer(parameter);
  return {
    name: nameRef,
    type,
    initializer
  };
}

// We may want to move this to a common place to potentially be reused by mappersGenerator
function getMapperSourceCode(mapper: string | Mapper) {
  if (isString(mapper)) {
    return `mapper: Mappers.${mapper},`;
  }

  const { defaultValue, ...mapperRest } = mapper;
  const defaultValueString = isNil(defaultValue)
    ? ""
    : `defaultValue: ${getMapperDefaultValue(mapper)}`;

  return `mapper: {
      ${keys(mapperRest)
        .map(key => `${key}: ${JSON.stringify((mapper as any)[key])}`)
        .join()},${defaultValueString}
    },`;
}

function getMapperDefaultValue(mapper: Mapper) {
  switch (mapper.type.name) {
    case MapperType.Boolean:
      return mapper.defaultValue as boolean;
    case MapperType.Number:
      return mapper.defaultValue as number;
    case MapperType.ByteArray:
      // TODO: Encode defaultValue for non-empty array in a platform agnostic way
      // previous autorest version doesn't seem to support non-empty here
      return `new Uint8Array(0)`;
    default:
      return `"${mapper.defaultValue.toString()}"`;
  }
}

function getCollectionFormatSourceCode(collectionFormat?: string) {
  return !collectionFormat
    ? ""
    : `collectionFormat: coreHttp.QueryCollectionFormat.${collectionFormat},`;
}

function getSkipEncoding(skipEncoding?: boolean) {
  return skipEncoding ? `skipEncoding: true,` : "";
}

function getParameterInitializer({
  parameterPath,
  mapper,
  collectionFormat,
  skipEncoding
}: ParameterDetails) {
  const mapperSourceCode = getMapperSourceCode(mapper);
  const collectionFormatSourceCode = getCollectionFormatSourceCode(
    collectionFormat
  );
  const skipEncodingCode = getSkipEncoding(skipEncoding);
  return `{parameterPath: ${JSON.stringify(
    parameterPath
  )}, ${mapperSourceCode}${collectionFormatSourceCode}${skipEncodingCode}}`;
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
