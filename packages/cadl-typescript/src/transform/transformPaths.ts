// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getResponseTypeName,
  getParameterTypeName,
  PathMetadata,
  Paths,
  ResponseTypes,
  OperationMethod
} from "@azure-tools/rlc-common";
import { getDoc, ignoreDiagnostics, Program } from "@cadl-lang/compiler";
import {
  getHttpOperation,
  HttpOperation,
  HttpOperationParameters,
  HttpOperationResponse
} from "@cadl-lang/rest/http";
import {
  Client,
  listOperationGroups,
  listOperationsInOperationGroup,
  OperationGroup
} from "@azure-tools/cadl-dpg";
import { getSchemaForType } from "../modelUtils.js";
import { isApiVersion } from "../paramUtil.js";
import {
  getOperationGroupName,
  getOperationStatuscode,
  isDefaultStatusCode,
  isDefinedStatusCode,
  isLongRunningOperation,
  isPagingOperation
} from "../operationUtil.js";

export function transformPaths(program: Program, client: Client): Paths {
  const operationGroups = listOperationGroups(program, client);
  const paths: Paths = {};
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(program, operationGroup);
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      transformOperation(program, route, paths, operationGroup);
    }
  }
  const clientOperations = listOperationsInOperationGroup(program, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    transformOperation(program, route, paths);
  }
  return paths;
}

/**
 * This function computes all the response types error and success
 * an operation can end up returning.
 */
function getResponseTypes(
  operation: HttpOperation,
  operationGroup?: OperationGroup
): ResponseTypes {
  const returnTypes: ResponseTypes = {
    error: [],
    success: []
  };
  function getResponseType(responses: HttpOperationResponse[]) {
    return responses
      .filter((r) => r.statusCode && r.statusCode.length)
      .map((r) => {
        const statusCode = getOperationStatuscode(r);
        const responseName = getResponseTypeName(
          getOperationGroupName(operationGroup),
          operation.operation.name,
          statusCode
        );
        return responseName;
      });
  }
  if (operation.responses && operation.responses.length) {
    returnTypes.error = getResponseType(
      operation.responses.filter((r) => isDefaultStatusCode(r.statusCode))
    );
    returnTypes.success = getResponseType(
      operation.responses.filter((r) => isDefinedStatusCode(r.statusCode))
    );
  }
  return returnTypes;
}

function transformOperation(
  program: Program,
  route: HttpOperation,
  paths: Paths,
  operationGroup?: OperationGroup
) {
  const respNames = [];
  for (const resp of route.responses) {
    const respName = getResponseTypeName(
      getOperationGroupName(operationGroup),
      route.operation.name,
      getOperationStatuscode(resp)
    );
    respNames.push(respName);
  }
  const method: OperationMethod = {
    description: getDoc(program, route.operation) ?? "",
    hasOptionalOptions: !hasRequiredOptions(route.parameters),
    optionsName: getParameterTypeName(
      getOperationGroupName(operationGroup),
      route.operation.name
    ),
    responseTypes: getResponseTypes(route, operationGroup),
    returnType: respNames.join(" | "),
    successStatus: gerOperationSuccessStatus(route),
    operationName: route.operation.name,
    annotations: {
      isLongRunning: isLongRunningOperation(program, route),
      isPageable: isPagingOperation(program, route)
    }
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
      operationGroupName: getOperationGroupName(operationGroup),
      methods: {
        [route.verb]: [method]
      }
    };
  }
}

function hasRequiredOptions(routeParameters: HttpOperationParameters) {
  const isRequiredBodyParam = routeParameters.bodyParameter?.optional === false;
  const containsRequiredNonBodyParam = routeParameters.parameters
    .filter((parameter) => ["query", "header"].includes(parameter.type))
    .filter((parameter) => !isApiVersion(parameter))
    .filter((parameter) => !!parameter.param)
    .some((parameter) => parameter.param.optional === false);
  return isRequiredBodyParam || containsRequiredNonBodyParam;
}

/**
 * Extracts all success or defined status codes for a give operation
 */
export function gerOperationSuccessStatus(operation: HttpOperation): string[] {
  const responses = operation.responses ?? [];
  const status: string[] = [];

  for (const response of responses) {
    if (isDefinedStatusCode(response.statusCode)) {
      status.push(response.statusCode);
    }
  }

  return status;
}
