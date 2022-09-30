// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { DecoratedType, Model, Program, Type } from "@cadl-lang/compiler";
import {
  getAllRoutes,
  HttpOperationResponse,
  OperationDetails,
  StatusCode
} from "@cadl-lang/rest/http";
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
  if (
    body.kind === "Model" &&
    body.name === "bytes" &&
    contentType !== "application/json" &&
    contentType !== "text/plain" &&
    contentType !== `"application/json" | "text/plain"` &&
    contentType !== `"text/plain" | "application/json"`
  ) {
    return true;
  }
  return false;
}

export function isLongRunningOperation(
  program: Program,
  operation: OperationDetails
) {
  program;
  for (const resp of operation.responses) {
    if (!resp.responses || !resp.responses.length) {
      continue;
    }
    for (const unit of resp.responses) {
      for (const [_, header] of Object.entries(unit.headers!)) {
        if (hasDecorator(header, "$pollingLocation")) {
          return true;
        }
      }
    }
  }
  return false;
}

function hasDecorator(type: DecoratedType, name: string): boolean {
  return type.decorators.find((it) => it.decorator.name === name) !== undefined;
}

export function hasPollingOperations(program: Program) {
  const [routes, _diagnostics] = getAllRoutes(program);
  for (const route of routes) {
    if (isLongRunningOperation(program, route)) {
      return true;
    }
  }

  return false;
}

export function isPagingOperation(
  program: Program,
  operation: OperationDetails
) {
  for (const response of operation.responses) {
    const paged = extractPagedMetadataNested(program, response.type as Model);
    if (paged) {
      return true;
    }
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
  type: Model
): PagedResultMetadata | undefined {
  // This only works for `is Page<T>` not `extends Page<T>`.
  let paged = getPagedResult(program, type);
  if (paged) {
    return paged;
  }
  if (type.baseModel) {
    paged = getPagedResult(program, type.baseModel);
  }
  if (paged) {
    return paged;
  }
  const templateArguments = type.templateArguments;
  if (templateArguments) {
    for (const argument of templateArguments) {
      const modelArgument = argument as Model;
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
