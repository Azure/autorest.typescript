import {
  ImplementationLocation,
  Operation,
  Parameter
} from "@autorest/codemodel";

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
  // Origin is added by M4 on synthetic parameters
  return (
    !parameter.origin &&
    parameter.implementation === ImplementationLocation.Method
  );
}
