import { HelperFunctionDetails, PackageFlavor } from "@azure-tools/rlc-common";
import {
  getHttpOperationWithCache,
  listOperationGroups,
  listOperationsInOperationGroup,
  SdkClient
} from "@azure-tools/typespec-client-generator-core";
import { Model, Program, Type } from "@typespec/compiler";
import { HttpOperation } from "@typespec/http";
import { SdkContext } from "../utils/interfaces.js";
import {
  extractPagedMetadataNested,
  getSpecialSerializeInfo,
  hasPagingOperations,
  hasPollingOperations,
  parseItemName,
  parseNextLinkName
} from "../utils/operationUtil.js";

export function transformHelperFunctionDetails(
  client: SdkClient,
  dpgContext: SdkContext,
  flavor?: PackageFlavor
): HelperFunctionDetails {
  const program = dpgContext.program;
  const serializeInfo = extractSpecialSerializeInfo(client, dpgContext);
  // Disable paging and long running for non-Azure clients.
  if (flavor !== "azure") {
    return {
      hasLongRunning: false,
      hasPaging: false,
      ...serializeInfo
    };
  }

  // Extract paged metadata from Azure.Core.Page
  const annotationDetails = {
    hasLongRunning: hasPollingOperations(client, dpgContext)
  };
  const details = extractPageDetailFromCore(client, dpgContext);
  if (details) {
    return {
      ...details,
      ...annotationDetails,
      ...serializeInfo
    };
  }
  // TODO: Remove this when @pageable is finally removed.
  const nextLinks = new Set<string>();
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = getHttpOperationWithCache(dpgContext, clientOp);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    if (getPageable(program, route.operation)) {
      const nextLinkName = getPageable(program, route.operation) || "nextLink";
      if (nextLinkName) {
        nextLinks.add(nextLinkName);
      }
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
      if (getPageable(program, route.operation)) {
        const nextLinkName =
          getPageable(program, route.operation) || "nextLink";
        if (nextLinkName) {
          nextLinks.add(nextLinkName);
        }
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

function extractPageDetailFromCore(client: SdkClient, dpgContext: SdkContext) {
  const program = dpgContext.program;
  if (!hasPagingOperations(client, dpgContext)) {
    return;
  }
  const nextLinks = new Set<string>();
  const itemNames = new Set<string>();
  // Add default values
  nextLinks.add("nextLink");
  itemNames.add("value");
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = getHttpOperationWithCache(dpgContext, clientOp);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    extractPageDetailFromCoreForRoute(route);
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
      extractPageDetailFromCoreForRoute(route);
    }
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

function extractSpecialSerializeInfo(
  client: SdkClient,
  dpgContext: SdkContext
) {
  let hasMultiCollection = false;
  let hasCsvCollection = false;
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = getHttpOperationWithCache(dpgContext, clientOp);
    route.parameters.parameters.forEach((parameter) => {
      const serializeInfo = getSpecialSerializeInfo(
        dpgContext,
        parameter.type,
        (parameter as any).format
      );
      hasMultiCollection = hasMultiCollection
        ? hasMultiCollection
        : serializeInfo.hasMultiCollection;
    });
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = getHttpOperationWithCache(dpgContext, op);
      route.parameters.parameters.forEach((parameter) => {
        const serializeInfo = getSpecialSerializeInfo(
          dpgContext,
          parameter.type,
          (parameter as any).format
        );
        hasMultiCollection = hasMultiCollection
          ? hasMultiCollection
          : serializeInfo.hasMultiCollection;
        hasCsvCollection = hasCsvCollection
          ? hasCsvCollection
          : serializeInfo.hasCsvCollection;
      });
    }
  }
  return {
    hasMultiCollection,
    hasCsvCollection
  };
}
