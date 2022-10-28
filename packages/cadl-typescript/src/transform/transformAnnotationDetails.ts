import { PagedResultMetadata } from "@azure-tools/cadl-azure-core";
import { AnnotationDetails } from "@azure-tools/rlc-common";
import { Model, Program, Type } from "@cadl-lang/compiler";
import { getAllHttpServices } from "@cadl-lang/rest/http";
import {
  hasPagingOperations,
  extractPagedMetadataNested,
  hasPollingOperations
} from "../operationUtil.js";

export function transformAnnotationDetails(
  program: Program
): AnnotationDetails | undefined {
  // Extract paged metadata from Azure.Core.Page
  const annotationDetails = {
    hasLongRunning: hasPollingOperations(program)
  };
  const details = extractPageDetailFromCore(program);
  if (details) {
    return {
      ...details,
      ...annotationDetails
    };
  }
  // TODO: Remove this when @pageable is finally removed.
  const nextLinks = new Set<string>();
  const [services, _diagnostics] = getAllHttpServices(program);
  const routes = services.flatMap((service) => service.operations);
  for (const route of routes) {
    if (getPageable(program, route.operation)) {
      const nextLinkName = getPageable(program, route.operation) || "nextLink";
      if (nextLinkName) {
        nextLinks.add(nextLinkName);
      }
    }
  }
  if (nextLinks.size === 0) {
    return annotationDetails;
  }
  return {
    ...annotationDetails,
    hasPaging: true,
    pageDetails: {
      itemNames: ["value"],
      nextLinkNames: [...nextLinks],
      isComplexPaging: nextLinks.size > 1
    }
  };
}
const pageableOperationsKey = Symbol("pageable");
export function getPageable(
  program: Program,
  entity: Type
): string | undefined {
  return program.stateMap(pageableOperationsKey).get(entity);
}

function extractPageDetailFromCore(program: Program) {
  if (!hasPagingOperations(program)) {
    return;
  }
  const [services, _diagnostics] = getAllHttpServices(program);
  const routes = services.flatMap((service) => service.operations);
  const nextLinks = new Set<string>();
  const itemNames = new Set<string>();
  // Add default values
  nextLinks.add("nextLink");
  itemNames.add("value");
  for (const route of routes) {
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
