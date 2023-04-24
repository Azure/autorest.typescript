// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NameType,
  Paths,
  ResponseMetadata,
  ResponseTypes,
  getLroLogicalResponseName,
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
import {
  OperationLroDetail,
  OPERATION_LRO_LOW_PRIORITY,
  OPERATION_LRO_HIGH_PRIORITY
} from "@azure-tools/rlc-common";

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
  return normalizeName(
    operationGroup?.type.name ?? "",
    NameType.Interface,
    true
  );
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

/**
 * Return if we have a client-level LRO overloading
 * @param pathDictionary
 * @returns
 */
export function getClientLroOverload(pathDictionary: Paths) {
  let lroCounts = 0,
    allowCounts = 0;
  for (const details of Object.values(pathDictionary)) {
    for (const methodDetails of Object.values(details.methods)) {
      const lroDetail = methodDetails[0].operationHelperDetail?.lroDetails;
      if (lroDetail?.isLongRunning) {
        lroCounts++;
        if (!lroDetail.operationLroOverload) {
          return false;
        }
        allowCounts++;
      }
    }
  }

  return Boolean(lroCounts > 0 && lroCounts === allowCounts);
}

/**
 * Check if we have an operation-level overloading
 * @param program
 * @param operation The operation detail
 * @param existingResponseTypes auxilary param for current response types
 * @param existingResponses auxilary param for raw response data
 * @returns
 */
export function getOperationLroOverload(
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

/**
 * Extract the operation LRO details
 * @param program
 * @param operation Operation detail
 * @param responsesTypes Calculated response types
 * @param operationGroupName Operation group name
 * @returns
 */
export function extractOperationLroDetail(
  program: Program,
  operation: HttpOperation,
  responsesTypes: ResponseTypes,
  operationGroupName: string
): OperationLroDetail {
  let logicalResponseTypes: ResponseTypes | undefined;

  let precedence = OPERATION_LRO_LOW_PRIORITY;
  const operationLroOverload = getOperationLroOverload(
    program,
    operation,
    responsesTypes
  );
  if (operationLroOverload) {
    logicalResponseTypes = {
      error: responsesTypes.error,
      success: [
        getLroLogicalResponseName(operationGroupName, operation.operation.name)
      ]
    };
    const metadata = getLroMetadata(program, operation.operation);
    precedence = metadata?.finalStep &&
      metadata?.finalStep.target &&
      metadata.finalStep.kind === "pollingSuccessProperty" &&
      metadata?.finalStep?.target?.name === "result"
      ? OPERATION_LRO_HIGH_PRIORITY
      : OPERATION_LRO_LOW_PRIORITY;
  }

  return {
    isLongRunning: Boolean(getLroMetadata(program, operation.operation)),
    logicalResponseTypes,
    operationLroOverload,
    precedence
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
  const templateArguments = type.templateMapper?.args;
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
