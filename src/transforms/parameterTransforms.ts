import {
  CodeModel,
  Parameter,
  ParameterLocation
} from "@azure-tools/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ParameterDetails } from "../models/parameterDetails";
import { getMapperOrRef } from "./mapperTransforms";
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

const extractGlobalParameters = (codeModel: CodeModel) =>
  (codeModel.globalParameters || []).map(p => {
    const serializedName = getLanguageMetadata(p.language).serializedName;
    const nameRef = normalizeName(serializedName, NameType.Property);
    return {
      nameRef,
      serializedName,
      parameter: p
    } as ParameterDetails;
  });

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
  const parameterSerializedName = getLanguageMetadata(parameter.language)
    .serializedName;
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
      mapper: getMapperOrRef(parameter.schema, parameterSerializedName, {
        required: parameter.required,
        serializedName: parameterSerializedName
      }),
      isGlobal: getIsGlobal(parameter),
      parameter
    };
    operationParameters.push(paramDetails);
    return;
  }

  //Desambiguate parameter
  desambiguateParameter(
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
  const serializedName = getLanguageMetadata(parameter.language).serializedName;
  return parameter.required ? serializedName : ["options", serializedName];
}

function getParameterLocation(parameter: Parameter): ParameterLocation {
  if (!parameter.protocol.http) {
    throw new Error("Expected parameter to contain HTTP Protocol information");
  }

  return parameter.protocol.http.in;
}

export function desambiguateParameter(
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
      mapper: getMapperOrRef(parameter.schema, serializedName, {
        required: parameter.required,
        serializedName
      }),
      isGlobal: getIsGlobal(parameter),
      parameter
    });
  }
}
