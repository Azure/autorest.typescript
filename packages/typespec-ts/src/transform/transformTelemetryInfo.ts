import { TelemetryInfo } from "@azure-tools/rlc-common";
import {
  SdkClient,
  SdkContext,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { ignoreDiagnostics } from "@typespec/compiler";
import { getCustomRequestHeaderNameForOperation } from "../utils/operationUtil.js";
import { getHttpOperation } from "@typespec/http";

export function transformTelemetryInfo(
  dpgContext: SdkContext,
  client: SdkClient
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
  const program = dpgContext.program;
  const operationGroups = listOperationGroups(dpgContext, client);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const headerName = getCustomRequestHeaderNameForOperation(
        ignoreDiagnostics(getHttpOperation(program, op))
      );
      if (headerName !== undefined) {
        return headerName;
      }
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const headerName = getCustomRequestHeaderNameForOperation(
      ignoreDiagnostics(getHttpOperation(program, clientOp))
    );
    if (headerName !== undefined) {
      return headerName;
    }
  }
  return undefined;
}
