// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getResponseTypeName,
  getParameterTypeName,
  PathMetadata,
  Paths,
  ResponseTypes
} from "@azure-tools/rlc-codegen";
import { getDoc, Program } from "@cadl-lang/compiler";
import {
  getAllRoutes,
  HttpOperationParameters,
  HttpOperationResponse,
  OperationDetails
} from "@cadl-lang/rest/http";
import { getSchemaForType } from "../modelUtils.js";

export function transformPaths(program: Program): Paths {
  const [routes, _diagnostics] = getAllRoutes(program);
  const paths: Paths = {};
  for (const route of routes) {
    const respNames = [];
    for (const resp of route.responses) {
      const respName = getResponseTypeName(
        route.container.name,
        route.operation.name,
        resp.statusCode === "*" ? "Default" : resp.statusCode
      );
      respNames.push(respName);
    }
    const method = {
      description: getDoc(program, route.operation) ?? "",
      hasOptionalOptions: !hasRequiredOptions(route.parameters),
      optionsName: getParameterTypeName(
        route.container.name,
        route.operation.name
      ),
      responseTypes: getResponseTypes(route),
      returnType: respNames.join(" | "),
      successStatus: gerOperationSuccessStatus(route),
      operationName: route.operation.name
    };
    if (
      paths[route.path] !== undefined &&
      !paths[route.path]?.methods[route.verb]
    ) {
      (paths[route.path] as PathMetadata).methods[route.verb] = [method];
    } else if (paths[route.path]?.methods[route.verb]) {
      paths[route.path]?.methods[route.verb]?.push(method);
    } else {
      paths[route.path] = {
        description: getDoc(program, route.operation) ?? "",
        name: route.operation.name || "Client",
        pathParameters: route.parameters.parameters
          .filter((p) => p.type === "path")
          .map((p) => {
            return {
              name: p.name,
              type: p.param.sourceProperty
                ? getSchemaForType(program, p.param.sourceProperty?.type).type
                : getSchemaForType(program, p.param.type).type,
              description: getDoc(program, p.param)
            };
          }),
        operationGroupName: route.container.name,
        methods: {
          [route.verb]: [method]
        }
      };
    }
  }

  return paths;
}

function hasRequiredOptions(routeParameters: HttpOperationParameters) {
  const isRequiredBodyParam = Boolean(routeParameters.bodyParameter?.optional);
  const containsRequiredNonBodyParam = routeParameters.parameters
    .filter((parameter) => ["query", "header"].includes(parameter.type))
    .some((parameter) => !Boolean(parameter.param.optional));
  return isRequiredBodyParam || containsRequiredNonBodyParam;
}

/**
 * Extracts all success status codes for a give operation
 */
export function gerOperationSuccessStatus(
  operation: OperationDetails
): string[] {
  const responses = operation.responses ?? [];
  const status: string[] = [];

  for (const response of responses) {
    let statusCode = response.statusCode;
    if (statusCode !== "*") {
      status.push(statusCode);
    }
  }

  return status;
}

/**
 * This function computes all the response types error and success
 * an operation can end up returning.
 */
function getResponseTypes(operation: OperationDetails): ResponseTypes {
  let returnTypes: ResponseTypes = {
    error: [],
    success: []
  };
  if (operation.responses && operation.responses.length) {
    function getResponseType(responses: HttpOperationResponse[]) {
      return responses
        .filter((r) => r.statusCode && r.statusCode.length)
        .map((r) => {
          const statusCode =
            r.statusCode == "*" ? `"default"` : `"${r.statusCode}"`;
          const responseName = getResponseTypeName(
            operation.container.name,
            operation.operation.name,
            statusCode
          );
          return responseName;
        });
    }

    returnTypes.error = getResponseType(
      operation.responses.filter((r) => r.statusCode === "*")
    );
    returnTypes.success = getResponseType(
      operation.responses.filter((r) => r.statusCode !== "*")
    );
  }
  return returnTypes;
}
