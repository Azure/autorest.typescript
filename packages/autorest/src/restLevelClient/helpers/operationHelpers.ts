import {
  ImplementationLocation,
  Operation,
  Parameter,
  SchemaContext
} from "@autorest/codemodel";
import {
  OptionalKind,
  MethodSignatureStructure,
  ParameterDeclarationStructure
} from "ts-morph";
import { Methods, PathParameter } from "../interfaces";
import { getElementType } from "../schemaHelpers";

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

export function buildMethodDefinitions(
  methods: Methods,
  pathParams: PathParameter[] = []
): OptionalKind<MethodSignatureStructure>[] {
  const methodDefinitions: OptionalKind<MethodSignatureStructure>[] = [];
  for (const key of Object.keys(methods)) {
    const method = methods[key];
    const description = methods[key][0].description;

    let areAllOptional = methods[key][0].hasOptionalOptions;

    methodDefinitions.push({
      name: key,
      ...(description && { docs: [{ description }] }),
      parameters: [
        ...getPathParamDefinitions(pathParams),
        {
          name: "options",
          hasQuestionToken: areAllOptional,
          type: method.map(m => m.optionsName).join(" | ")
        }
      ],
      returnType: method.map(m => m.returnType).join(" | ")
    });
  }

  return methodDefinitions;
}

export function getPathParamDefinitions(
  pathParams: PathParameter[]
): OptionalKind<ParameterDeclarationStructure>[] {
  return pathParams.map(p => {
    return {
      name: p.name,
      type: getElementType(p.schema, [
        SchemaContext.Input,
        SchemaContext.Exception
      ]),
      description: p.description
    };
  });
}
