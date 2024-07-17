import { TelemetryInfo } from "@azure-tools/rlc-common";
import {
  getHttpOperationWithCache,
  listOperationGroups,
  listOperationsInOperationGroup,
  SdkClient,
  SdkContext
} from "@azure-tools/typespec-client-generator-core";
import { getCustomRequestHeaderNameForOperation } from "../utils/operationUtil.js";

export function transformTelemetryInfo(
  client: SdkClient,
  dpgContext: SdkContext
): TelemetryInfo | undefined {
  const customRequestIdHeaderName = getCustomRequestHeaderNameForClient(
    dpgContext,
    client
  );
  if (customRequestIdHeaderName) {
    return {
      customRequestIdHeaderName
    };
  }
  return undefined;
}

function getCustomRequestHeaderNameForClient(
  dpgContext: SdkContext,
  client: SdkClient
) {
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const headerName = getCustomRequestHeaderNameForOperation(
      getHttpOperationWithCache(dpgContext, clientOp)
    );
    if (headerName !== undefined) {
      return headerName;
    }
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const headerName = getCustomRequestHeaderNameForOperation(
        getHttpOperationWithCache(dpgContext, op)
      );
      if (headerName !== undefined) {
        return headerName;
      }
    }
  }
  return undefined;
}
