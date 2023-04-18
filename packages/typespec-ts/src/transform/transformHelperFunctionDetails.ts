import { PagedResultMetadata } from "@azure-tools/typespec-azure-core";
import {
  SdkClient,
  SdkContext,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { HelperFunctionDetails } from "@azure-tools/rlc-common";
import { ignoreDiagnostics, Model, Program, Type } from "@typespec/compiler";
import { getHttpOperation, HttpOperation } from "@typespec/http";
import {
  hasPagingOperations,
  extractPagedMetadataNested,
  hasPollingOperations
} from "../operationUtil.js";
import { getSpecialSerializeInfo } from "./transformParameters.js";

export function transformHelperFunctionDetails(
  program: Program,
  client: SdkClient,
  dpgContext: SdkContext
): HelperFunctionDetails {
  // Extract paged metadata from Azure.Core.Page
  const annotationDetails = {
    hasLongRunning: hasPollingOperations(program, client, dpgContext)
  };
  const details = extractPageDetailFromCore(program, client, dpgContext);
  const serializeInfo = extractSpecialSerializeInfo(
    program,
    client,
    dpgContext
  );
  if (details) {
    return {
      ...details,
      ...annotationDetails,
      ...serializeInfo
    };
  }
  // TODO: Remove this when @pageable is finally removed.
  const nextLinks = new Set<string>();
  const operationGroups = listOperationGroups(dpgContext, client);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      if (getPageable(program, route.operation)) {
        const nextLinkName =
          getPageable(program, route.operation) || "nextLink";
        if (nextLinkName) {
          nextLinks.add(nextLinkName);
        }
      }
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    if (getPageable(program, route.operation)) {
      const nextLinkName = getPageable(program, route.operation) || "nextLink";
      if (nextLinkName) {
        nextLinks.add(nextLinkName);
      }
    }
  }
  if (nextLinks.size === 0) {
    return {
      ...annotationDetails,
      ...serializeInfo
    };
  }
  return {
    ...annotationDetails,
    hasPaging: true,
    pageDetails: {
      itemNames: ["value"],
      nextLinkNames: [...nextLinks],
      isComplexPaging: nextLinks.size > 1
    },
    ...serializeInfo
  };
}
const pageableOperationsKey = Symbol("pageable");
export function getPageable(
  program: Program,
  entity: Type
): string | undefined {
  return program.stateMap(pageableOperationsKey).get(entity);
}

function extractPageDetailFromCore(
  program: Program,
  client: SdkClient,
  dpgContext: SdkContext
) {
  if (!hasPagingOperations(program, client, dpgContext)) {
    return;
  }
  const nextLinks = new Set<string>();
  const itemNames = new Set<string>();
  // Add default values
  nextLinks.add("nextLink");
  itemNames.add("value");
  const operationGroups = listOperationGroups(dpgContext, client);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      extractPageDetailFromCoreForRoute(route);
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    extractPageDetailFromCoreForRoute(route);
  }

  function extractPageDetailFromCoreForRoute(route: HttpOperation) {
    for (const response of route.responses) {
      const paged = extractPagedMetadataNested(program, response.type as Model);
      if (paged) {
        const nextLinkName = parseNextLinkName(paged);
        if (nextLinkName) {
          nextLinks.add(nextLinkName);
        }
        const itemName = parseItemName(paged);
        if (itemName) {
          itemNames.add(itemName);
        }
        // Once we find paged metadata, we don't need to processs any further.
        continue;
      }
    }
  }
  // If there are more than one options for nextLink and item names we need to generate a
  // more complex pagination helper.
  const isComplexPaging = nextLinks.size > 1 || itemNames.size > 1;
  return {
    hasPaging: true,
    pageDetails: {
      itemNames: [...itemNames],
      nextLinkNames: [...nextLinks],
      isComplexPaging
    }
  };
}

function parseNextLinkName(paged: PagedResultMetadata): string | undefined {
  const pathComponents = paged.nextLinkPath?.split(".");
  if (pathComponents) {
    // TODO: This logic breaks down if there actually is a dotted path.
    return pathComponents[pathComponents.length - 1];
  }
  return undefined;
}

function parseItemName(paged: PagedResultMetadata): string | undefined {
  const pathComponents = paged.itemsPath?.split(".");
  if (pathComponents) {
    // TODO: This logic breaks down if there actually is a dotted path.
    return pathComponents[pathComponents.length - 1];
  }
  return undefined;
}

function extractSpecialSerializeInfo(
  program: Program,
  client: SdkClient,
  dpgContext: SdkContext
) {
  let hasMultiCollection = false;
  let hasPipeCollection = false;
  let hasTsvCollection = false;
  let hasSsvCollection = false;
  const operationGroups = listOperationGroups(dpgContext, client);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      route.parameters.parameters.forEach((parameter) => {
        const serializeInfo = getSpecialSerializeInfo(parameter);
        hasMultiCollection = hasMultiCollection
          ? hasMultiCollection
          : serializeInfo.hasMultiCollection;
        hasPipeCollection = hasPipeCollection
          ? hasPipeCollection
          : serializeInfo.hasPipeCollection;
        hasTsvCollection = hasTsvCollection
          ? hasTsvCollection
          : serializeInfo.hasTsvCollection;
        hasSsvCollection = hasSsvCollection
          ? hasSsvCollection
          : serializeInfo.hasSsvCollection;
      });
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    route.parameters.parameters.forEach((parameter) => {
      const serializeInfo = getSpecialSerializeInfo(parameter);
      hasMultiCollection = hasMultiCollection
        ? hasMultiCollection
        : serializeInfo.hasMultiCollection;
      hasPipeCollection = hasPipeCollection
        ? hasPipeCollection
        : serializeInfo.hasPipeCollection;
      hasTsvCollection = hasTsvCollection
        ? hasTsvCollection
        : serializeInfo.hasTsvCollection;
      hasSsvCollection = hasSsvCollection
        ? hasSsvCollection
        : serializeInfo.hasSsvCollection;
    });
  }
  return {
    hasMultiCollection,
    hasPipeCollection,
    hasTsvCollection,
    hasSsvCollection
  };
}
