import { CodeModel, Parameter, codeModelSchema } from "@azure-tools/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ModelParameters, ParameterDetails } from "../models/parameterDetails";

interface OperationParameterDetails {
  parameter: Parameter;
  operationName: string;
}

export function transformParameters(codeModel: CodeModel): ModelParameters {
  let modelParameters: ModelParameters = {
    globalParameters: extractGlobalParameters(codeModel),
    operationParameters: []
  };
  extractOperationParameters(codeModel).forEach(p =>
    populateOperationParameters(
      p.parameter,
      modelParameters.operationParameters,
      p.operationName
    )
  );

  return modelParameters;
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

export function desambiguateParameter(
  parameter: Parameter,
  operationParameters: ParameterDetails[],
  serializedName: string,
  sameNameParams: ParameterDetails[],
  operationName: string
) {
  const existingParam = sameNameParams.find(p => p.parameter === parameter); // May need to do a deep comparison

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
      parameter
    });
  }
}
