import {
  OptionalKind,
  ParameterDeclarationStructure,
  ClassDeclaration,
  Scope
} from "ts-morph";
import { normalizeName, NameType } from "../../utils/nameUtils";
import { OperationDetails } from "../../models/operationDetails";
import { filterOperationParameters, formatJsDocParam } from "./parameterUtils";
import { ParameterDetails } from "../../models/parameterDetails";
import { PropertyKind } from "../../models/modelDetails";
import { wrapString } from "./stringUtils";

export type ParameterWithDescription = OptionalKind<
  ParameterDeclarationStructure & { description: string }
>;

export interface GenerateOperationParameters {
  operationGroupClass: ClassDeclaration;
  operation: OperationDetails;
  parameters: ParameterDetails[];
  options?: GenerateOperationOptions;
}

export interface GenerateOperationOptions {
  isClientOperation?: boolean;
  isPrivate?: boolean;
  namePrefix?: string;
}

export function getAllParameters(
  parameters: ParameterDetails[],
  operation: OperationDetails
) {
  const paramDeclarations = getParameterDeclarations(parameters, operation);
  return [...paramDeclarations, getOptionsParameter(operation, parameters)];
}

export function writeOperation({
  operation,
  parameters,
  operationGroupClass,
  options: { namePrefix, isPrivate, isClientOperation } = {}
}: GenerateOperationParameters) {
  const responseName = getResponseType(operation);
  const paramDeclarations = getParameterDeclarations(parameters, operation);
  const allParams = getAllParameters(parameters, operation);

  const operationMethod = operationGroupClass.addMethod({
    name: normalizeName(
      `${namePrefix ?? ""}${operation.name}`,
      NameType.Property
    ),
    parameters: allParams,
    ...(isPrivate && { scope: Scope.Private }),
    returnType: `Promise<${responseName}>`,
    docs: [generateOperationJSDoc(allParams, operation.description)]
  });

  const sendParams = paramDeclarations.map(p => p.name).join(",");
  operationMethod.addStatements(
    `return this${
      isClientOperation ? "" : ".client"
    }.sendOperationRequest({${sendParams}${!!sendParams ? "," : ""} options}, ${
      operation.name
    }OperationSpec) as Promise<${responseName}>`
  );
}

function getParameterDeclarations(
  parameters: ParameterDetails[],
  operation: OperationDetails
) {
  return filterOperationParameters(parameters, operation).map<
    ParameterWithDescription
  >(param => {
    const { typeName, kind } = param.typeDetails;
    const type =
      kind === PropertyKind.Primitive
        ? typeName
        : `Models.${normalizeName(typeName, NameType.Class)}`;

    return {
      name: param.name,
      description: param.description,
      type,
      hasQuestionToken: !param.required
    };
  });
}

function getResponseType(operation: OperationDetails) {
  const hasSuccessResponse = operation.responses.some(
    ({ isError, mappers }) =>
      !isError && (!!mappers.bodyMapper || !!mappers.headersMapper)
  );

  const responseName = hasSuccessResponse ? operation.typeDetails.typeName : "";

  return !!responseName
    ? `Models.${normalizeName(responseName, NameType.Interface)}Response`
    : "coreHttp.RestResponse";
}

function getOptionsParameter(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  { isOptional = true } = {}
): ParameterWithDescription {
  const type = filterOperationParameters(parameters, operation, {
    includeOptional: true
  }).some(p => !p.required)
    ? `Models.${operation.typeDetails.typeName}OptionalParams`
    : "coreHttp.RequestOptionsBase";

  return {
    name: "options",
    type,
    hasQuestionToken: isOptional,
    description: "The options parameters."
  };
}

export function generateOperationJSDoc(
  params: ParameterWithDescription[] = [],
  description: string = ""
): string {
  const paramJSDoc =
    !params || !params.length ? "" : formatJsDocParam(params).join("\n");

  return `${
    description ? wrapString(description) + "\n" : description
  }${paramJSDoc}`;
}
