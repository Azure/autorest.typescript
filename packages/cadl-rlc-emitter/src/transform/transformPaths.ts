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
  HttpOperationResponse,
  OperationDetails
} from "@cadl-lang/rest/http";
import { reportDiagnostic } from "../lib.js";
import { getSchemaForType } from "../modelUtils.js";

export function transformPaths(program: Program): Paths {
  const [routes, _diagnostics] = getAllRoutes(program);
  const paths: Paths = {};
  for (const route of routes) {
    if (!route.operation.interface?.name) {
      reportDiagnostic(program, {
        code: "missing-namespace",
        format: { path: route.path },
        target: route.operation
      });
      continue;
    }
    const respNames = [];
    for (const resp of route.responses) {
      const respName = getResponseTypeName(
        route.operation.interface?.name ?? "",
        route.operation.name,
        resp.statusCode === "*" ? "Default" : resp.statusCode
      );
      respNames.push(respName);
    }
    const method = {
      description: getDoc(program, route.operation) ?? "",
      hasOptionalOptions:
        route.parameters.parameters.length === 0 ||
        (route.parameters.parameters.length > 0 &&
          route.parameters.parameters.some((p) => p.param.optional))
          ? true
          : false,
      optionsName: getParameterTypeName(
        route.operation.interface?.name,
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
        // TODO: Description
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
        operationGroupName: route.operation.interface?.name,
        methods: {
          [route.verb]: [method]
        }
      };
    }
  }

  return paths;
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
            operation.operation.interface?.name ?? "",
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
