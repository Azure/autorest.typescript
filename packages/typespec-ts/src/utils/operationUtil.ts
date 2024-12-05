// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getLroLogicalResponseName,
  getResponseTypeName,
  NameType,
  normalizeName,
  OperationLroDetail,
  OPERATION_LRO_HIGH_PRIORITY,
  OPERATION_LRO_LOW_PRIORITY,
  Paths,
  ResponseMetadata,
  ResponseTypes
} from "@azure-tools/rlc-common";
import {
  getLroMetadata,
  getPagedResult,
  PagedResultMetadata
} from "@azure-tools/typespec-azure-core";
import {
  getHttpOperationWithCache,
  getWireName,
  listOperationGroups,
  listOperationsInOperationGroup,
  SdkClient,
  SdkClientType,
  SdkHttpOperation,
  SdkMethod,
  SdkServiceMethod,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { Model, Operation, Program, Type } from "@typespec/compiler";
import {
  HttpOperation,
  HttpOperationParameter,
  HttpOperationResponse,
  HttpStatusCodesEntry
} from "@typespec/http";
import { SdkContext } from "./interfaces.js";
import { KnownMediaType, knownMediaType } from "./mediaTypes.js";
import { isByteOrByteUnion } from "./modelUtils.js";
import { getOperationNamespaceInterfaceName } from "./namespaceUtils.js";
import { resolveReference } from "../framework/reference.js";
import { SerializationHelpers } from "../modular/static-helpers-metadata.js";

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
        getOperationName(dpgContext, operation.operation),
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

export function getOperationName(dpgContext: SdkContext, operation: Operation) {
  const projectedOperationName = getWireName(dpgContext, operation);

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
  const knownMediaTypes: KnownMediaType[] = (
    Array.isArray(contentType) ? contentType : [contentType]
  ).map((ct) => knownMediaType(ct));
  for (const type of knownMediaTypes) {
    if (type === KnownMediaType.Binary && isByteOrByteUnion(dpgContext, body)) {
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
      for (const detail of methodDetails) {
        const lroDetail = detail.operationHelperDetail?.lroDetails;
        if (lroDetail?.isLongRunning) {
          lroCounts++;
          if (!lroDetail.operationLroOverload) {
            return false;
          }
          allowCounts++;
        }
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
  dpgContext: SdkContext,
  operation: HttpOperation,
  responsesTypes: ResponseTypes,
  operationGroupName: string
): OperationLroDetail {
  let logicalResponseTypes: ResponseTypes | undefined;

  let precedence = OPERATION_LRO_LOW_PRIORITY;
  const operationLroOverload = getOperationLroOverload(
    dpgContext.program,
    operation,
    responsesTypes
  );
  if (operationLroOverload) {
    logicalResponseTypes = {
      error: responsesTypes.error,
      success: [
        getLroLogicalResponseName(
          operationGroupName,
          getOperationName(dpgContext, operation.operation)
        )
      ]
    };
    const metadata = getLroMetadata(dpgContext.program, operation.operation);
    precedence =
      metadata?.finalStep &&
      metadata.finalStep.kind === "pollingSuccessProperty" &&
      metadata?.finalStep.target &&
      metadata?.finalStep?.target?.name === "result"
        ? OPERATION_LRO_HIGH_PRIORITY
        : OPERATION_LRO_LOW_PRIORITY;
  }

  return {
    isLongRunning: Boolean(
      getLroMetadata(dpgContext.program, operation.operation)
    ),
    logicalResponseTypes,
    operationLroOverload,
    precedence
  };
}

export function hasPollingOperations(
  client: SdkClient,
  dpgContext: SdkContext
) {
  const program = dpgContext.program;
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = getHttpOperationWithCache(dpgContext, clientOp);
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
      const route = getHttpOperationWithCache(dpgContext, op);
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

export function hasPagingOperations(client: SdkClient, dpgContext: SdkContext) {
  const program = dpgContext.program;
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = getHttpOperationWithCache(dpgContext, clientOp);
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
      const route = getHttpOperationWithCache(dpgContext, op);
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
  dpgContext: SdkContext,
  paramType: string,
  paramFormat: string
) {
  const hasMultiCollection = getHasMultiCollection(
    paramType,
    paramFormat,
    // Include query multi support in compatibility mode
    dpgContext.rlcOptions?.compatibilityQueryMultiFormat ?? false
  );
  const hasCsvCollection = getHasCsvCollection(paramType, paramFormat);
  const descriptions = [];
  const collectionInfo = [];
  if (hasMultiCollection) {
    descriptions.push("buildMultiCollection");
    collectionInfo.push("multi");
  }

  if (hasCsvCollection) {
    descriptions.push("buildCsvCollection");
    collectionInfo.push("csv");
  }
  return {
    hasMultiCollection,
    hasCsvCollection,
    descriptions,
    collectionInfo
  };
}

function getHasMultiCollection(
  paramType: string,
  paramFormat: string,
  includeQuery = true
) {
  return (
    ((includeQuery && paramType === "query") || paramType === "header") &&
    paramFormat === "multi"
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
  // const detail = getSpecialSerializeInfo(paramType, paramFormat);
  // return detail.descriptions.length > 0 ? detail.descriptions[0] : undefined;
  if (getHasMultiCollection(paramType, paramFormat)) {
    return resolveReference(SerializationHelpers.buildMultiCollection);
  }

  if (getHasPipeCollection(paramType, paramFormat)) {
    return resolveReference(SerializationHelpers.buildPipeCollection);
  }

  if (getHasSsvCollection(paramType, paramFormat)) {
    return resolveReference(SerializationHelpers.buildSsvCollection);
  }

  if (getHasTsvCollection(paramType, paramFormat)) {
    return resolveReference(SerializationHelpers.buildTsvCollection);
  }

  if (getHasCsvCollection(paramType, paramFormat)) {
    return resolveReference(SerializationHelpers.buildCsvCollection);
  }

  return undefined;
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

export function getMethodHierarchiesMap(
  client: SdkClientType<SdkServiceOperation>
) {
  const methodQueue: [string[], SdkMethod<SdkHttpOperation>][] =
    client.methods.map((m) => {
      return [[], m];
    });
  const operationHierarchiesMap: Map<
    string,
    SdkServiceMethod<SdkHttpOperation>[]
  > = new Map<string, SdkServiceMethod<SdkHttpOperation>[]>();
  while (methodQueue.length > 0) {
    const method = methodQueue.pop();
    if (!method) {
      continue;
    }
    const prefixes = method[0];
    const operationOrGroup = method[1];

    if (operationOrGroup.kind === "clientaccessor") {
      operationOrGroup.response.methods.forEach((m) =>
        methodQueue.push([[...prefixes, m.name], m])
      );
    } else {
      const prefixKey = prefixes.join("/");
      const operations = operationHierarchiesMap.get(prefixKey);
      operationHierarchiesMap.set(prefixKey, [
        ...(operations ?? []),
        operationOrGroup
      ]);
    }
  }
  return operationHierarchiesMap;
}
