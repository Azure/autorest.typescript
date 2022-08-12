import {
  ImplementationLocation,
  Operation,
  OperationGroup,
  Parameter,
  ParameterLocation,
  Protocols,
  Request,
  SchemaResponse,
} from "@autorest/codemodel";
import {
  CadlOperation,
  CadlOperationGroup,
  CadlParameter,
  CadlParameterLocation,
} from "../interfaces";
import { getCadlType } from "./transformObject";

export function transformOperationGroup({
  language,
  operations,
}: OperationGroup): CadlOperationGroup {
  const name = language.default.name;
  const doc = language.default.description;
  const ops = operations.reduce<CadlOperation[]>((acc, op) => {
    acc = [...acc, ...transformOperation(op)];
    return acc;
  }, []);
  return {
    name,
    doc,
    operations: ops,
  };
}

function transformRoute(protocol: Protocols) {
  return protocol.http?.path;
}

function transformVerb(protocol: Protocols) {
  return protocol?.http?.method;
}

function transformResponses(responses: SchemaResponse[] = []) {
  return responses.map(({ schema }) => schema?.language.default.name ?? "void");
}

export function transformOperation(operation: Operation): CadlOperation[] {
  return operation.requests!.map((r) => transformRequest(r, operation));
}

function transformRequest(
  _request: Request,
  operation: Operation
): CadlOperation {
  const { language, responses, requests } = operation;
  const name = language.default.name;
  const doc = language.default.description;
  const summary = language.default.summary;
  const transformedResponses = transformResponses(
    responses as SchemaResponse[]
  );
  const visitedParameter: Set<Parameter> = new Set();
  let parameters = (operation.parameters ?? [])
    .filter((p) => filterOperationParameters(p, visitedParameter))
    .map(transformParameter);

  parameters = [
    ...parameters,
    ...getRequestParameters(operation)
      .filter((p) => filterOperationParameters(p, visitedParameter))
      .map(transformParameter),
  ];

  return {
    name,
    doc,
    summary,
    parameters,
    verb: transformVerb(requests![0].protocol),
    route: transformRoute(requests![0].protocol),
    responses: [...new Set(transformedResponses)],
  };
}

function filterOperationParameters(
  parameter: Parameter,
  visitedParameters: Set<Parameter>
): boolean {
  if (visitedParameters.has(parameter)) {
    return false;
  }

  const shouldVisit =
    parameter.implementation === ImplementationLocation.Method &&
    ["path", "body", "header", "query"].includes(parameter.protocol.http?.in);

  if (shouldVisit) {
    visitedParameters.add(parameter);
  }

  return shouldVisit;
}

export function transformParameter(propertySchema: Parameter): CadlParameter {
  const name = propertySchema.language.default.name;
  const doc = propertySchema.language.default.description;

  return {
    doc,
    name,
    isOptional: propertySchema.required === false,
    type: getCadlType(propertySchema.schema),
    location: transformParameterLocation(propertySchema),
  };
}

function getRequestParameters(operation: Operation): Parameter[] {
  if (!operation.requests?.length) {
    return [];
  }

  if (operation.requests.length > 1) {
    throw new Error(
      `Operation ${operation.language.default.name} has more than one request`
    );
  }

  const parameters = operation.requests[0].parameters ?? [];
  const signatureParameters = operation.requests[0].signatureParameters ?? [];

  return [...parameters, ...signatureParameters];
}

function transformParameterLocation(
  parameter: Parameter
): CadlParameterLocation {
  const location: ParameterLocation = parameter.protocol.http?.in;

  if (!location) {
    throw new Error(
      `Parameter ${parameter.language.default.name} has no location defined`
    );
  }

  switch (location) {
    case ParameterLocation.Path:
      return "path";
    case ParameterLocation.Query:
      return "query";
    case ParameterLocation.Header:
      return "header";
    case ParameterLocation.Body:
      return "body";
    default:
      throw new Error(`Unknown location ${location}`);
  }
}
