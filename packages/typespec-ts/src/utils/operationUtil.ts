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
import { getLroMetadata } from "@azure-tools/typespec-azure-core";
import {
  getHttpOperationWithCache,
  getWireName,
  InitializedByFlags,
  SdkBodyParameter,
  SdkClient,
  SdkClientType,
  SdkHttpOperation,
  SdkHttpParameter,
  SdkMethod,
  SdkMethodParameter,
  SdkServiceMethod,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import {
  isList,
  ModelProperty,
  NoTarget,
  Operation,
  Program,
  Type
} from "@typespec/compiler";
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
import { listOperationsUnderRLCClient } from "./clientUtils.js";
import { $ } from "@typespec/compiler/typekit";
import { reportDiagnostic } from "../lib.js";

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
  for (const op of listOperationsUnderRLCClient(client)) {
    const route = getHttpOperationWithCache(dpgContext, op);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    if (isLongRunningOperation(program, route)) {
      return true;
    }
  }
  return false;
}

export interface PageDetails {
  nextLinkNames: string[];
  itemNames: string[];
}

export function extractPageDetails(
  program: Program,
  operation: HttpOperation
): PageDetails | undefined {
  if (isList(program, operation.operation)) {
    // If the operation is a list, we don't need to extract paging details.
    const metadata = $(program).operation.getPagingMetadata(
      operation.operation
    );
    if (metadata === undefined) {
      // would fallback to default paging metadata
      reportDiagnostic(program, {
        code: "no-paging-items-defined",
        format: {
          operationName: operation.operation.name
        },
        target: NoTarget
      });
    }

    const nextLinkPath = mapFirstSegmentForResultSegments(
      metadata?.output.nextLink?.path,
      operation.responses
    );
    const itemNamePath = mapFirstSegmentForResultSegments(
      metadata?.output.pageItems?.path,
      operation.responses
    );
    if (
      (nextLinkPath && nextLinkPath?.length > 1) ||
      (itemNamePath && itemNamePath?.length > 1)
    ) {
      // Any cases with nested nextLink or itemName are not supported
      reportDiagnostic(program, {
        code: "un-supported-paging-cases",
        format: {
          operationName: operation.operation.name
        },
        target: NoTarget
      });
      // these paging information will be ignored
      // and the operation will be treated as a non-paging operation.
      return undefined;
    }
    const nextLinkNames =
      nextLinkPath?.map((prop) => prop.name).join(".") ?? "nextLink";
    const itemNames =
      itemNamePath?.map((prop) => prop.name).join(".") ?? "value";
    return {
      nextLinkNames: [nextLinkNames],
      itemNames: [itemNames]
    };
  }
  return undefined;
}

export function isPagingOperation(program: Program, operation: HttpOperation) {
  return extractPageDetails(program, operation) !== undefined;
}

function mapFirstSegmentForResultSegments(
  resultSegments: ModelProperty[] | undefined,
  responses: HttpOperationResponse[]
): ModelProperty[] | undefined {
  const pagingBodyType = responses.find((r) => r.statusCodes === 200)
    ?.responses[0]?.body;
  if (!pagingBodyType || pagingBodyType.bodyKind !== "single") return undefined;
  const bodyType = pagingBodyType.type;

  if (resultSegments === undefined || bodyType === undefined) return undefined;
  // TCGC use Http response type as the return type
  // For implicit body response, we need to locate the first segment in the response type
  // Several cases:
  // 1. `op test(): {items, nextLink}`
  // 2. `op test(): {items, nextLink} & {a, b, c}`
  // 3. `op test(): {@bodyRoot body: {items, nextLink}}`

  if (resultSegments.length > 0 && bodyType && bodyType.kind === "Model") {
    for (let i = 0; i < resultSegments.length; i++) {
      const segment = resultSegments[i];
      for (const property of bodyType.properties ?? []) {
        if (
          property &&
          segment &&
          findRootSourceProperty(property[1]) ===
            findRootSourceProperty(segment)
        ) {
          return [property[1], ...resultSegments.slice(i + 1)];
        }
      }
    }
  }
  return resultSegments;
}

function findRootSourceProperty(property: ModelProperty): ModelProperty {
  while (property.sourceProperty) {
    property = property.sourceProperty;
  }
  return property;
}

export function hasPagingOperations(client: SdkClient, dpgContext: SdkContext) {
  const program = dpgContext.program;
  for (const op of listOperationsUnderRLCClient(client)) {
    const route = getHttpOperationWithCache(dpgContext, op);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    if (isPagingOperation(program, route)) {
      return true;
    }
  }
  return false;
}

export function hasCollectionFormatInfo(
  paramType: string,
  paramFormat: string
) {
  return (
    getHasMultiCollection(paramType, paramFormat, false) ||
    getHasSsvCollection(paramType, paramFormat) ||
    getHasTsvCollection(paramType, paramFormat) ||
    getHasCsvCollection(paramType, paramFormat) ||
    getHasPipeCollection(paramType, paramFormat)
  );
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

export function getCollectionFormatHelper(
  paramType: string,
  paramFormat: string
) {
  if (getHasMultiCollection(paramType, paramFormat, false)) {
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

export type ServiceOperation = SdkServiceMethod<SdkHttpOperation> & {
  oriName?: string;
};

export function getMethodHierarchiesMap(
  context: SdkContext,
  client: SdkClientType<SdkServiceOperation>
): Map<string, ServiceOperation[]> {
  const methodQueue: [
    string[],
    SdkMethod<SdkHttpOperation> | SdkClientType<SdkServiceOperation>
  ][] =
    client.children
      ?.filter((p) => {
        return !(
          p.clientInitialization.initializedBy & InitializedByFlags.Individually
        );
      })
      .map((m) => {
        return [[], m];
      }) ?? [];
  client.methods.forEach((m) => {
    methodQueue.push([[], m]);
  });
  const operationHierarchiesMap: Map<string, ServiceOperation[]> = new Map<
    string,
    ServiceOperation[]
  >();
  while (methodQueue.length > 0) {
    const method = methodQueue.pop();
    if (!method) {
      continue;
    }
    const prefixes =
      context.rlcOptions?.hierarchyClient === false &&
      context.rlcOptions?.enableOperationGroup &&
      method[0].length > 0
        ? [method[0][method[0].length - 1] as string]
        : method[0];
    const operationOrGroup = method[1];

    if (operationOrGroup.kind === "client") {
      operationOrGroup.methods.forEach((m) =>
        methodQueue.push([[...prefixes, operationOrGroup.name], m])
      );
      const nonIndependentChildren = operationOrGroup.children?.filter(
        (child) => {
          return !(
            child.clientInitialization.initializedBy &
            InitializedByFlags.Individually
          );
        }
      );
      if (nonIndependentChildren && nonIndependentChildren.length > 0) {
        nonIndependentChildren.forEach((child) =>
          methodQueue.push([[...prefixes, operationOrGroup.name], child])
        );
      }
    } else {
      const prefixKey =
        context.rlcOptions?.hierarchyClient ||
        context.rlcOptions?.enableOperationGroup
          ? prefixes.join("/")
          : "";
      const groupName = prefixes
        .map((p) => normalizeName(p, NameType.OperationGroup))
        .join("");
      if (
        context.rlcOptions?.hierarchyClient === false &&
        context.rlcOptions?.enableOperationGroup &&
        groupName !== "" &&
        !operationOrGroup.name.startsWith(groupName + "_")
      ) {
        (operationOrGroup as ServiceOperation).oriName = operationOrGroup.name;
        operationOrGroup.name = `${groupName}_${operationOrGroup.name}`;
      }

      operationOrGroup.parameters.map((p) => {
        return resolveParameterNameConflict(operationOrGroup, p);
      });
      operationOrGroup.operation.parameters.map((p) => {
        return resolveParameterNameConflict(operationOrGroup, p);
      });
      if (
        operationOrGroup.operation.bodyParam?.name === operationOrGroup.name
      ) {
        operationOrGroup.operation.bodyParam = resolveParameterNameConflict(
          operationOrGroup,
          operationOrGroup.operation.bodyParam
        ) as SdkBodyParameter;
      }
      const operations = operationHierarchiesMap.get(prefixKey);
      operationHierarchiesMap.set(prefixKey, [
        ...(operations ?? []),
        operationOrGroup
      ]);
    }
  }
  return operationHierarchiesMap;
}

export function isTenantLevelOperation(
  operation: ServiceOperation,
  client: SdkClientType<SdkServiceOperation>
): boolean {
  // Check if this operation has a subscriptionId path parameter
  const subscriptionIdParam = operation.operation.parameters?.find(
    (param) =>
      param.name.toLowerCase() === "subscriptionid" && param.kind === "path"
  );

  if (subscriptionIdParam) {
    // The operation has a client-level subscriptionId parameter, then it's not tenant-level
    if (subscriptionIdParam.onClient) {
      return false;
    }
  } else {
    // Skip tenant-level internal ARM APIs
    // Ref: https://armwiki.azurewebsites.net/rpaas/operations_auto_gen.html#special-cases
    const pathLC = operation.operation.path.toLowerCase();
    // Get the provider namespace from the client
    const clientNamespaceLC = client.namespace.toLowerCase();
    if (
      operation.crossLanguageDefinitionId?.toLowerCase() ===
        "azure.resourcemanager.operations.list" ||
      pathLC.includes(`${clientNamespaceLC}/checknameavailability`)
    ) {
      return false;
    }
  }

  // The operation has no subscriptionId parameter or has method-level subscriptionId parameter
  // Considered as tenant-level
  return true;
}

function resolveParameterNameConflict(
  operationOrGroup: SdkServiceMethod<SdkHttpOperation>,
  p: SdkMethodParameter | SdkHttpParameter | SdkBodyParameter
): SdkMethodParameter | SdkHttpParameter | SdkBodyParameter {
  const paramName = normalizeName(p.name, NameType.Parameter, true);
  if (paramName === operationOrGroup.name) {
    p.name = `${paramName}Parameter`;
  } else {
    p.name = paramName;
  }
  return p;
}
