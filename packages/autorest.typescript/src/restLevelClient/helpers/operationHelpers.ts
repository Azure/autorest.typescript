import {
  ImplementationLocation,
  Operation,
  Parameter
} from "@autorest/codemodel";
import { OptionalKind, ParameterDeclarationStructure } from "ts-morph";
import { PathParameter } from "@azure-tools/rlc-common";

/**
 * Given an operation, extract all its parameters
 */
export function getOperationParameters(
  operation: Operation,
  requestIndex = 0
): Parameter[] {
  const operationParams = [
    ...(operation.parameters ?? []),
    ...(operation.signatureParameters ?? [])
  ];

  const distinctParams = new Set(operationParams);

  if (operation.requests) {
    [
      ...(operation.requests[requestIndex].parameters ?? []),
      ...(operation.requests[requestIndex].signatureParameters ?? [])
    ].forEach(p => distinctParams.add(p));
  }

  return [...distinctParams].filter(filterMethodNotSynthetic);
}

function filterMethodNotSynthetic(parameter: Parameter) {
  const isApiVersion =
    parameter.origin &&
    parameter.language.default.serializedName === "api-version" &&
    parameter.implementation === ImplementationLocation.Method;
  // Origin is added by M4 on synthetic parameters
  return (
    (!parameter.origin || isApiVersion) &&
    parameter.implementation === ImplementationLocation.Method
  );
}

export function getPathParamDefinitions(
  pathParams: PathParameter[]
): OptionalKind<ParameterDeclarationStructure>[] {
  return pathParams.map(p => {
    return {
      name: p.name,
      type: p.type,
      description: p.description
    };
  });
}
