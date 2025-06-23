import { HelperFunctionDetails, PackageFlavor } from "@azure-tools/rlc-common";
import {
  getHttpOperationWithCache,
  SdkClient
} from "@azure-tools/typespec-client-generator-core";
import { Model } from "@typespec/compiler";
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
import { getCollectionFormat } from "../utils/modelUtils.js";
import { listOperationsUnderRLCClient } from "../utils/clientUtils.js";

export function transformHelperFunctionDetails(
  client: SdkClient,
  dpgContext: SdkContext,
  flavor?: PackageFlavor
): HelperFunctionDetails {
  const serializeInfo = extractSpecialSerializeInfo(client, dpgContext);
  // Disable paging and long running for non-Azure clients.
  if (flavor !== "azure") {
    return {
      hasLongRunning: false,
      hasPaging: false,
      ...serializeInfo
    };
  }

  const annotationDetails = {
    hasLongRunning: hasPollingOperations(client, dpgContext)
  };
  const details = extractPageDetailFromCore(client, dpgContext);
  return {
    ...details,
    ...annotationDetails,
    ...serializeInfo
  };
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
  for (const op of listOperationsUnderRLCClient(client)) {
    const route = getHttpOperationWithCache(dpgContext, op);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
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

function extractSpecialSerializeInfo(
  client: SdkClient,
  dpgContext: SdkContext
) {
  let hasMultiCollection = false;
  let hasCsvCollection = false;
  for (const op of listOperationsUnderRLCClient(client)) {
    const route = getHttpOperationWithCache(dpgContext, op);
    route.parameters.parameters.forEach((parameter) => {
      const format = getCollectionFormat(dpgContext, parameter as any);
      const serializeInfo = getSpecialSerializeInfo(
        dpgContext,
        parameter.type,
        format!
      );
      hasMultiCollection = hasMultiCollection
        ? hasMultiCollection
        : serializeInfo.hasMultiCollection;
      hasCsvCollection = hasCsvCollection
        ? hasCsvCollection
        : serializeInfo.hasCsvCollection;
    });
  }
  return {
    hasMultiCollection,
    hasCsvCollection
  };
}
