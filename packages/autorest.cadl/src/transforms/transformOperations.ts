import {
  Operation,
  OperationGroup,
  Parameter,
  ParameterLocation,
  Protocols,
  Request,
  SchemaResponse,
} from "@autorest/codemodel";
import {
  CadlObjectProperty,
  CadlOperation,
  CadlOperationGroup,
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
  const pathParameters = (operation.parameters ?? [])
    .filter((p) => p.protocol.http?.in === ParameterLocation.Path)
    .map(transformParameter);

  return {
    name,
    doc,
    summary,
    parameters: { pathParameters },
    verb: transformVerb(requests![0].protocol),
    route: transformRoute(requests![0].protocol),
    responses: [...new Set(transformedResponses)],
  };
}

export function transformParameter(
  propertySchema: Parameter
): CadlObjectProperty {
  const name = propertySchema.language.default.name;
  const doc = propertySchema.language.default.description;

  return {
    doc,
    name,
    isOptional: propertySchema.required === false,
    type: getCadlType(propertySchema.schema),
  };
}
