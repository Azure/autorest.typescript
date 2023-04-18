// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NameType,
  Paths,
  ResponseMetadata,
  ResponseTypes,
  getLroLogical200ResponseName,
  normalizeName
} from "@azure-tools/rlc-common";
import { ignoreDiagnostics, Model, Program, Type } from "@typespec/compiler";
import {
  getHttpOperation,
  HttpOperation,
  HttpOperationResponse,
  StatusCode
} from "@typespec/http";
import {
  getLroMetadata,
  getPagedResult,
  PagedResultMetadata
} from "@azure-tools/typespec-azure-core";
import {
  SdkClient,
  SdkContext,
  listOperationGroups,
  listOperationsInOperationGroup,
  SdkOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { LroDetails } from "@azure-tools/rlc-common";

export function getNormalizedOperationName(
  route: HttpOperation,
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

// FIXME: this is the placeholder function to extract the operationGroupName
export function getOperationGroupName(operationGroup?: SdkOperationGroup) {
  return operationGroup?.type.name ?? "";
}

export function isDefaultStatusCode(statusCode: StatusCode) {
  return statusCode === "*";
}

export function isDefinedStatusCode(statusCode: StatusCode) {
  return statusCode !== "*";
}

export function isBinaryPayload(body: Type, contentType: string) {
  contentType = `"${contentType}"`;
  if (
    body.kind === "Scalar" &&
    body.name === "bytes" &&
    contentType !== `"application/json"` &&
    contentType !== `"text/plain"` &&
    contentType !== `"application/json" | "text/plain"` &&
    contentType !== `"text/plain" | "application/json"`
  ) {
    return true;
  }
  return false;
}

export function isLongRunningOperation(
  program: Program,
  operation: HttpOperation
) {
  return Boolean(getLroMetadata(program, operation.operation));
}

export function shouldGenerateLroLogicalResponse(
  program: Program,
  operation: HttpOperation,
  existingResponseTypes?: ResponseTypes,
  existingResponses?: ResponseMetadata[]
) {
  const metadata = getLroMetadata(program, operation.operation);
  if (!metadata) {
    return false;
  }
  const hasSuccessReturn = existingResponses?.filter((r) =>
    r.statusCode.startsWith("20")
  );
  if (existingResponseTypes?.success || hasSuccessReturn) {
    return true;
  }
  return false;
}

export function extractLroDetails(
  program: Program,
  operation: HttpOperation,
  responsesTypes: ResponseTypes,
  operationGroupName: string
): LroDetails {
  let logicalResponseTypes: ResponseTypes | undefined;
  // By default we'll disable the overloading
  let allowedOverloading = shouldGenerateLroLogicalResponse(
    program,
    operation,
    responsesTypes
  );
  if (allowedOverloading) {
    logicalResponseTypes = {
      error: responsesTypes.error,
      success: [
        getLroLogical200ResponseName(
          operationGroupName,
          operation.operation.name
        )
      ]
    };
  }

  return {
    isLongRunning: Boolean(getLroMetadata(program, operation.operation)),
    logicalResponseTypes,
    allowedOverloading
  };
}

export function hasPollingOperations(
  program: Program,
  client: SdkClient,
  dpgContext: SdkContext
) {
  const operationGroups = listOperationGroups(dpgContext, client);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      if (isLongRunningOperation(program, route)) {
        return true;
      }
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    if (isLongRunningOperation(program, route)) {
      return true;
    }
  }

  return false;
}

export function isPagingOperation(program: Program, operation: HttpOperation) {
  for (const response of operation.responses) {
    const paged = extractPagedMetadataNested(program, response.type as Model);
    if (paged) {
      return true;
    }
  }
  return false;
}

export function hasPagingOperations(
  program: Program,
  client: SdkClient,
  dpgContext: SdkContext
) {
  const operationGroups = listOperationGroups(dpgContext, client);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      if (isPagingOperation(program, route)) {
        return true;
      }
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
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

export function shouldGenerateLroOverload(pathDictionary: Paths) {
  let lroCounts = 0,
    allowCounts = 0;
  for (const details of Object.values(pathDictionary)) {
    for (const methodDetails of Object.values(details.methods)) {
      const lroDetail = methodDetails[0].annotations?.lroDetails;
      if (lroDetail?.isLongRunning) {
        lroCounts++;
        if (!lroDetail.allowedOverloading) {
          return false;
        }
        allowCounts++;
      }
    }
  }

  return Boolean(lroCounts > 0 && lroCounts === allowCounts);
}
