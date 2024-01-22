// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NameType,
  Paths,
  ResponseMetadata,
  ResponseTypes,
  getLroLogicalResponseName,
  getResponseTypeName,
  normalizeName
} from "@azure-tools/rlc-common";
import {
  getProjectedName,
  ignoreDiagnostics,
  Model,
  Operation,
  Program,
  Type
} from "@typespec/compiler";
import {
  HttpOperation,
  HttpOperationParameter,
  HttpOperationResponse,
  HttpStatusCodesEntry,
  getHttpOperation
} from "@typespec/http";
import {
  getLroMetadata,
  getPagedResult,
  PagedResultMetadata
} from "@azure-tools/typespec-azure-core";
import {
  SdkClient,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import {
  OperationLroDetail,
  OPERATION_LRO_LOW_PRIORITY,
  OPERATION_LRO_HIGH_PRIORITY
} from "@azure-tools/rlc-common";
import { isByteOrByteUnion } from "./modelUtils.js";
import { SdkContext } from "./interfaces.js";
import { getOperationNamespaceInterfaceName } from "./namespaceUtils.js";

// Sorts the responses by status code
export function sortedOperationResponses(responses: HttpOperationResponse[]) {
  return responses.sort((a, b) => {
    if (a.statusCodes === "*") {
      return 1;
    }
    if (b.statusCodes === "*") {
      return -1;
    }
    const aStatus =
      typeof a.statusCodes === "number" ? a.statusCodes : a.statusCodes.start;
    const bStatus =
      typeof b.statusCodes === "number" ? b.statusCodes : b.statusCodes.start;
    return aStatus - bStatus;
  });
}

/**
 * This function computes all the response types error and success
 * an operation can end up returning.
 */
export function getOperationResponseTypes(
  dpgContext: SdkContext,
  operation: HttpOperation
): ResponseTypes {
  const returnTypes: ResponseTypes = {
    error: [],
    success: []
  };
  function getResponseType(responses: HttpOperationResponse[]) {
    return responses.map((r) => {
      const statusCode = getOperationStatuscode(r);
      const responseName = getResponseTypeName(
        getOperationGroupName(dpgContext, operation),
        getOperationName(dpgContext.program, operation.operation),
        statusCode
      );
      return responseName;
    });
  }
  if (operation.responses && operation.responses.length) {
    returnTypes.error = getResponseType(
      operation.responses.filter((r) => isDefaultStatusCode(r.statusCodes))
    );
    returnTypes.success = getResponseType(
      operation.responses.filter((r) => isDefinedStatusCode(r.statusCodes))
    );
  }
  return returnTypes;
}

/**
 * Extracts all success or defined status codes for a give operation
 */
export function getOperationSuccessStatus(operation: HttpOperation): string[] {
  const responses = operation.responses ?? [];
  const status: string[] = [];

  for (const response of responses) {
    if (isDefinedStatusCode(response.statusCodes)) {
      status.push(getOperationStatuscode(response));
    }
  }

  return status;
}

export function getOperationStatuscode(
  response: HttpOperationResponse
): string {
  const statusCodes = response.statusCodes;
  if (statusCodes === "*") {
    return "default";
  } else if (typeof statusCodes === "number") {
    return String(statusCodes);
  } else {
    // FIXME - this is a hack to get the first status code
    // https://github.com/Azure/autorest.typescript/issues/2063
    return String(statusCodes.start);
  }
}

export function getOperationGroupName(
  dpgContext: SdkContext,
  route?: HttpOperation
): string;
export function getOperationGroupName(
  dpgContext: SdkContext,
  operation?: Operation
): string;
export function getOperationGroupName(
  dpgContext: SdkContext,
  operationOrRoute?: Operation | HttpOperation
) {
  if (!dpgContext.rlcOptions?.enableOperationGroup || !operationOrRoute) {
    return "";
  }
  // If this is a HttpOperation
  if ((operationOrRoute as any).kind !== "Operation") {
    operationOrRoute = (operationOrRoute as HttpOperation).operation;
  }
  const operation = operationOrRoute as Operation;
  const namespaceNames = getOperationNamespaceInterfaceName(
    dpgContext,
    operation
  );

  return namespaceNames
    .map((name) => {
      return normalizeName(name, NameType.Interface, true);
    })
    .join("");
}

export function getOperationName(program: Program, operation: Operation) {
  const projectedOperationName = getProjectedName(program, operation, "json");

  return normalizeName(
    projectedOperationName ?? operation.name,
    NameType.Interface,
    true
  );
}

export function isDefaultStatusCode(statusCodes: HttpStatusCodesEntry) {
  return statusCodes === "*";
}

export function isDefinedStatusCode(statusCodes: HttpStatusCodesEntry) {
  return statusCodes !== "*";
}

export function isBinaryPayload(
  dpgContext: SdkContext,
  body: Type,
  contentType: string | string[]
) {
  const allContentTypes = Array.isArray(contentType)
    ? contentType
    : [contentType];
  for (const type of allContentTypes) {
    const contentType = `"${type}"`;
    if (
      contentType !== `"application/json"` &&
      contentType !== `"text/plain"` &&
      contentType !== `"application/json" | "text/plain"` &&
      contentType !== `"text/plain" | "application/json"` &&
      isByteOrByteUnion(dpgContext, body)
    ) {
      return true;
    }
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
        getLroLogicalResponseName(
          operationGroupName,
          getOperationName(program, operation.operation)
        )
      ]
    };
    const metadata = getLroMetadata(program, operation.operation);
    precedence =
      metadata?.finalStep &&
      metadata.finalStep.kind === "pollingSuccessProperty" &&
      metadata?.finalStep.target &&
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
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    if (isLongRunningOperation(program, route)) {
      return true;
    }
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      // ignore overload base operation
      if (route.overloads && route.overloads?.length > 0) {
        continue;
      }
      if (isLongRunningOperation(program, route)) {
        return true;
      }
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
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    if (isPagingOperation(program, route)) {
      return true;
    }
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      // ignore overload base operation
      if (route.overloads && route.overloads?.length > 0) {
        continue;
      }
      if (isPagingOperation(program, route)) {
        return true;
      }
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

export function getSpecialSerializeInfo(
  paramType: string,
  paramFormat: string
) {
  const hasMultiCollection = getHasMultiCollection(paramType, paramFormat);
  const hasPipeCollection = getHasPipeCollection(paramType, paramFormat);
  const hasSsvCollection = getHasSsvCollection(paramType, paramFormat);
  const hasTsvCollection = getHasTsvCollection(paramType, paramFormat);
  const hasCsvCollection = getHasCsvCollection(paramType, paramFormat);
  const descriptions = [];
  const collectionInfo = [];
  if (hasMultiCollection) {
    descriptions.push("buildMultiCollection");
    collectionInfo.push("multi");
  }
  if (hasSsvCollection) {
    descriptions.push("buildSsvCollection");
    collectionInfo.push("ssv");
  }

  if (hasTsvCollection) {
    descriptions.push("buildTsvCollection");
    collectionInfo.push("tsv");
  }

  if (hasPipeCollection) {
    descriptions.push("buildPipeCollection");
    collectionInfo.push("pipe");
  }

  if (hasCsvCollection) {
    descriptions.push("buildCsvCollection");
    collectionInfo.push("csv");
  }
  return {
    hasMultiCollection,
    hasPipeCollection,
    hasSsvCollection,
    hasTsvCollection,
    hasCsvCollection,
    descriptions,
    collectionInfo
  };
}

function getHasMultiCollection(paramType: string, paramFormat: string) {
  return (
    (paramType === "query" || paramType === "header") && paramFormat === "multi"
  );
}
function getHasSsvCollection(paramType: string, paramFormat: string) {
  return paramType === "query" && paramFormat === "ssv";
}

function getHasTsvCollection(paramType: string, paramFormat: string) {
  return paramType === "query" && paramFormat === "tsv";
}

function getHasCsvCollection(paramType: string, paramFormat: string) {
  return paramType === "header" && paramFormat === "csv";
}

function getHasPipeCollection(paramType: string, paramFormat: string) {
  return paramType === "query" && paramFormat === "pipes";
}

export function hasCollectionFormatInfo(
  paramType: string,
  paramFormat: string
) {
  return (
    getHasMultiCollection(paramType, paramFormat) ||
    getHasSsvCollection(paramType, paramFormat) ||
    getHasTsvCollection(paramType, paramFormat) ||
    getHasCsvCollection(paramType, paramFormat) ||
    getHasPipeCollection(paramType, paramFormat)
  );
}

export function getCollectionFormatHelper(
  paramType: string,
  paramFormat: string
) {
  const detail = getSpecialSerializeInfo(paramType, paramFormat);
  return detail.descriptions.length > 0 ? detail.descriptions[0] : undefined;
}

export function getCustomRequestHeaderNameForOperation(
  route: HttpOperation
): string | undefined {
  const params = route.parameters.parameters.filter(
    isCustomClientRequestIdParam
  );
  if (params.length > 0) {
    return "client-request-id";
  }

  return undefined;
}

export function isCustomClientRequestIdParam(param: HttpOperationParameter) {
  return (
    param.type === "header" && param.name.toLowerCase() === "client-request-id"
  );
}

export function isIgnoredHeaderParam(param: HttpOperationParameter) {
  return (
    isCustomClientRequestIdParam(param) ||
    (param.type === "header" &&
      ["return-client-request-id", "ocp-date"].includes(
        param.name.toLowerCase()
      ))
  );
}

export function parseNextLinkName(
  paged: PagedResultMetadata
): string | undefined {
  return paged.nextLinkProperty?.name;
}

export function parseItemName(paged: PagedResultMetadata): string | undefined {
  // TODO: support the nested item names
  return (paged.itemsSegments ?? [])[0];
}
