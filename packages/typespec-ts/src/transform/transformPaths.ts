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
import { getDoc, ignoreDiagnostics, Program } from "@typespec/compiler";
import {
  getHttpOperation,
  HttpOperation,
  HttpOperationParameters,
  HttpOperationResponse
} from "@typespec/http";
import {
  SdkClient,
  SdkContext,
  listOperationGroups,
  listOperationsInOperationGroup,
  SdkOperationGroup,
  isApiVersion
} from "@azure-tools/typespec-client-generator-core";
import { getSchemaForType } from "../modelUtils.js";
import {
  extractOperationLroDetail,
  getOperationGroupName,
  getOperationStatuscode,
  isDefaultStatusCode,
  isDefinedStatusCode,
  isPagingOperation
} from "../operationUtil.js";

export function transformPaths(
  program: Program,
  client: SdkClient,
  dpgContext: SdkContext
): Paths {
  const operationGroups = listOperationGroups(dpgContext, client);
  const paths: Paths = {};
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      transformOperation(program, route, paths, dpgContext, operationGroup);
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    transformOperation(program, route, paths, dpgContext);
  }
  return paths;
}

/**
 * This function computes all the response types error and success
 * an operation can end up returning.
 */
function getResponseTypes(
  operation: HttpOperation,
  operationGroup?: SdkOperationGroup
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
  dpgContext: SdkContext,
  operationGroup?: SdkOperationGroup
) {
  const respNames = [];
  const operationGroupName = getOperationGroupName(operationGroup);
  for (const resp of route.responses) {
    const respName = getResponseTypeName(
      operationGroupName,
      route.operation.name,
      getOperationStatuscode(resp)
    );
    respNames.push(respName);
  }
  const responseTypes = getResponseTypes(route, operationGroup);
  const method: OperationMethod = {
    description: getDoc(program, route.operation) ?? "",
    hasOptionalOptions: !hasRequiredOptions(dpgContext, route.parameters),
    optionsName: getParameterTypeName(operationGroupName, route.operation.name),
    responseTypes,
    returnType: respNames.join(" | "),
    successStatus: gerOperationSuccessStatus(route),
    operationName: route.operation.name,
    operationHelperDetail: {
      lroDetails: extractOperationLroDetail(
        program,
        route,
        responseTypes,
        operationGroupName
      ),
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
      name: escapeCoreName(route.operation.name || "Client"),
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

function escapeCoreName(name: string) {
  if (["client", "streamablemethod"].indexOf(name.toLowerCase()) > -1) {
    return "_" + name;
  }
  return name;
}
function hasRequiredOptions(
  dpgContext: SdkContext,
  routeParameters: HttpOperationParameters
) {
  const isRequiredBodyParam = routeParameters.bodyParameter?.optional === false;
  const containsRequiredNonBodyParam = routeParameters.parameters
    .filter((parameter) => ["query", "header"].includes(parameter.type))
    .filter((parameter) => !isApiVersion(dpgContext, parameter))
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
