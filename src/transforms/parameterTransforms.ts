// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  Parameter,
  ParameterLocation,
  SchemaType,
  Schema
} from "@azure-tools/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ParameterDetails } from "../models/parameterDetails";
import {
  isSchemaType,
  getMapperClassName,
  transformMapper
} from "./mapperTransforms";
import { isEqual, isNil } from "lodash";

interface OperationParameterDetails {
  parameter: Parameter;
  operationName: string;
}

export function transformParameters(codeModel: CodeModel): ParameterDetails[] {
  let parameters: ParameterDetails[] = [];
  extractOperationParameters(codeModel).forEach(p =>
    populateOperationParameters(p.parameter, parameters, p.operationName)
  );

  return parameters;
}

const extractOperationParameters = (codeModel: CodeModel) =>
  codeModel.operationGroups.reduce<OperationParameterDetails[]>(
    (acc, og) => [
      ...acc,
      ...og.operations.reduce<OperationParameterDetails[]>(
        (operations, operation) => {
          const operationName = getLanguageMetadata(operation.language).name;
          const operationParams: OperationParameterDetails[] = (
            operation.request.parameters || []
          ).map(p => ({ parameter: p, operationName }));
          return [...operations, ...operationParams];
        },
        []
      )
    ],
    []
  );

export function populateOperationParameters(
  parameter: Parameter,
  operationParameters: ParameterDetails[],
  operationName: string
): void {
  const parameterSerializedName = getParameterName(parameter);

  if (!parameterSerializedName) {
    throw new Error(
      `Couldn't get parameter serializedName for operation: ${operationName}`
    );
  }
  const sameNameParams = operationParameters.filter(
    p => p.serializedName === parameterSerializedName
  );

  if (!sameNameParams.length) {
    const paramDetails: ParameterDetails = {
      nameRef: normalizeName(parameterSerializedName, NameType.Property),
      serializedName: parameterSerializedName,
      operationsIn: [operationName],
      location: getParameterLocation(parameter),
      required: parameter.required,
      parameterPath: getParameterPath(parameter),
      mapper: getMapperOrRef(
        parameter.schema,
        parameterSerializedName,
        parameter.required
      ),
      isGlobal: getIsGlobal(parameter),
      parameter
    };
    operationParameters.push(paramDetails);
    return;
  }

  //Disambiguate parameter
  disambiguateParameter(
    parameter,
    operationParameters,
    parameterSerializedName,
    sameNameParams,
    operationName
  );
}

function getIsGlobal(parameter: Parameter) {
  return parameter.extensions
    ? !isNil(parameter.extensions["x-ms-priority"])
    : false;
}

function getParameterPath(parameter: Parameter) {
  const metadata = getLanguageMetadata(parameter.language);
  const serializedName =
    metadata.serializedName || normalizeName(metadata.name, NameType.Property);
  return parameter.required ? serializedName : ["options", serializedName];
}

function getParameterLocation(parameter: Parameter): ParameterLocation {
  if (!parameter.protocol.http) {
    throw new Error("Expected parameter to contain HTTP Protocol information");
  }

  return parameter.protocol.http.in;
}

function getParameterName(parameter: Parameter) {
  const fromExtension =
    parameter.extensions && parameter.extensions["x-ms-requestBody-name"];
  const parameterSerializedName = getLanguageMetadata(parameter.language)
    .serializedName;

  return fromExtension || parameterSerializedName;
}

export function disambiguateParameter(
  parameter: Parameter,
  operationParameters: ParameterDetails[],
  serializedName: string,
  sameNameParams: ParameterDetails[],
  operationName: string
) {
  const existingParam = sameNameParams.find(p =>
    isEqual(p.parameter, parameter)
  );

  if (existingParam) {
    if (existingParam.operationsIn) {
      existingParam.operationsIn.push(operationName);
    } else {
      existingParam.operationsIn = [operationName];
    }
    return;
  } else {
    // Since there is already a parameter with the same name, we need to ad a sufix
    const nameRef = `${normalizeName(serializedName, NameType.Property)}${
      sameNameParams.length
    }`;

    operationParameters.push({
      nameRef,
      serializedName,
      operationsIn: [operationName],
      required: parameter.required,
      parameterPath: getParameterPath(parameter),
      location: getParameterLocation(parameter),
      mapper: getMapperOrRef(
        parameter.schema,
        serializedName,
        parameter.required
      ),
      isGlobal: getIsGlobal(parameter),
      parameter
    });
  }
}

function getMapperOrRef(
  schema: Schema,
  serializedName: string,
  required?: boolean
) {
  if (isSchemaType([SchemaType.Object], schema)) {
    const className = getMapperClassName(schema);
    return className;
  }

  return transformMapper({ schema, options: { serializedName, required } });
}
