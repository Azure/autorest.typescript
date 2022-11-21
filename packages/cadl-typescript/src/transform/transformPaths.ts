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
import { getDoc, Program } from "@cadl-lang/compiler";
import {
  getAllHttpServices,
  HttpOperation,
  HttpOperationParameters,
  HttpOperationResponse
} from "@cadl-lang/rest/http";
import { listClients, listOperationGroups, listOperationsInOperationGroup } from "@azure-tools/cadl-dpg";
import { getSchemaForType } from "../modelUtils.js";
import { isApiVersion } from "../paramUtil.js";
import {
  getOperationStatuscode,
  isDefaultStatusCode,
  isDefinedStatusCode,
  isLongRunningOperation,
  isPagingOperation
} from "../operationUtil.js";

export function transformPaths(program: Program): Paths {
  const clients = listClients(program);
  for(const client of clients) {
    const operationGroups = listOperationGroups(program, client);
    for(const operationGroup of operationGroups) {
      const operations = listOperationsInOperationGroup(program, operationGroup);
      console.log(operations);
    }
    const clientOperations = listOperationsInOperationGroup(program, client);
    console.log(clientOperations);
  }
  const [services, _diagnostics] = getAllHttpServices(program);
  const routes = services.flatMap((service) => service.operations);
  const paths: Paths = {};
  for (const route of routes) {
    const respNames = [];
    for (const resp of route.responses) {
      const respName = getResponseTypeName(
        route.container.name,
        route.operation.name,
        getOperationStatuscode(resp)
      );
      respNames.push(respName);
    }
    const method: OperationMethod = {
      description: getDoc(program, route.operation) ?? "",
      hasOptionalOptions: !hasRequiredOptions(route.parameters),
      optionsName: getParameterTypeName(
        route.container.name,
        route.operation.name
      ),
      responseTypes: getResponseTypes(route),
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

/**
 * This function computes all the response types error and success
 * an operation can end up returning.
 */
function getResponseTypes(operation: HttpOperation): ResponseTypes {
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
          operation.container.name,
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
