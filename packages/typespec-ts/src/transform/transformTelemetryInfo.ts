import { TelemetryInfo } from "@azure-tools/rlc-common";
import {
  getHttpOperationWithCache,
  SdkClient,
  SdkContext
} from "@azure-tools/typespec-client-generator-core";
import { getCustomRequestHeaderNameForOperation } from "../utils/operationUtil.js";
import { listOperationsUnderRLCClient } from "../utils/clientUtils.js";

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
  for (const op of listOperationsUnderRLCClient(client)) {
    const headerName = getCustomRequestHeaderNameForOperation(
      getHttpOperationWithCache(dpgContext, op)
    );
    if (headerName !== undefined) {
      return headerName;
    }
  }
  return undefined;
}
