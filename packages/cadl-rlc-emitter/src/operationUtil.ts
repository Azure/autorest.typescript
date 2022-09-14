// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-codegen";
import { ModelType, Program } from "@cadl-lang/compiler";
import { getAllRoutes, OperationDetails } from "@cadl-lang/rest/http";
import {
  getPagedResult,
  PagedResultMetadata
} from "@azure-tools/cadl-azure-core";

export function getNormalizedOperationName(
  route: OperationDetails,
  includeGroupName = true
) {
  return includeGroupName
    ? normalizeName(
        `${route.container?.name}_${route.operation.name}`,
        NameType.Interface
      )
    : normalizeName(`${route.operation.name}`, NameType.Interface);
}

export function isLongRunningOperation(
  program: Program,
  operation: OperationDetails
) {
  // TODO: add logic here
  program;
  operation;
  return false;
}

export function hasPollingOperations(program: Program) {
  // TODO: add logic here
  program;
  return false;
}

export function isPagingOperation(
  program: Program,
  operation: OperationDetails
) {
  for (const response of operation.responses) {
    const paged = extractPagedMetadataNested(
      program,
      response.type as ModelType
    );
    if (paged) {
      return true;
    }
export function getOperationStatuscode(
  response: HttpOperationResponse
): string {
  switch (response.statusCode) {
    case "*":
      return "default";
    default:
      return `${response.statusCode}`;
  }
}

export function isDefaultStatusCode(statusCode: StatusCode) {
  return statusCode === "*";
}

export function isDefinedStatusCode(statusCode: StatusCode) {
  return statusCode !== "*";
}

export function isBinaryPayload(body: Type, contentType: string) {
  return (
    body.kind === "Model" &&
    body.name === "bytes" &&
    contentType !== "application/json" &&
    contentType !== "text/plain" &&
    contentType !== `"application/json" | "text/plain"` &&
    contentType !== `"text/plain" | "application/json"`
  );
  }
  return false;
}

export function hasPagingOperations(program: Program) {
  const [routes, _diagnostics] = getAllRoutes(program);
  for (const route of routes) {
    if (isPagingOperation(program, route)) {
      return true;
    }
  }

  return false;
}

export function extractPagedMetadataNested(
  program: Program,
  responseType: ModelType
): PagedResultMetadata | undefined {
  // This only works for `is Page<T>` not `extends Page<T>`.
  let paged = getPagedResult(program, responseType);
  if (paged) {
    return paged;
  }
  if (responseType.baseModel) {
    paged = getPagedResult(program, responseType.baseModel);
  }
  if (paged) {
    return paged;
  }
  const templateArguments = responseType.templateArguments;
  if (templateArguments) {
    for (const argument of templateArguments) {
      const modelArgument = argument as ModelType;
      if (modelArgument) {
        paged = extractPagedMetadataNested(program, modelArgument);
        if (paged) {
          return paged;
        }
      }
    }
  }
  return paged;
}
