import { TelemetryInfo } from "@azure-tools/rlc-common";
import {
  SdkClient,
  SdkContext,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { ignoreDiagnostics } from "@typespec/compiler";
import { HttpOperation, HttpOperationParameter } from "@typespec/http";
import { getHttpOperationWithCache } from "../utils/operationUtil.js";

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
        ignoreDiagnostics(getHttpOperationWithCache(program, op))
      );
      if (headerName != undefined) {
        return headerName;
      }
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const headerName = getCustomRequestHeaderNameForOperation(
      ignoreDiagnostics(getHttpOperationWithCache(program, clientOp))
    );
    if (headerName != undefined) {
      return headerName;
    }
  }
  return undefined;
}

const CUSTOM_REQUEST_HEADER_NAME = "client-request-id";
function getCustomRequestHeaderNameForOperation(
  route: HttpOperation
): string | undefined {
  const params = route.parameters.parameters.filter(
    isCustomClientRequestIdParam
  );
  if (params.length > 0) {
    return CUSTOM_REQUEST_HEADER_NAME;
  }

  return undefined;
}

export function isCustomClientRequestIdParam(param: HttpOperationParameter) {
  return (
    param.type === "header" &&
    param.name.toLowerCase() == CUSTOM_REQUEST_HEADER_NAME
  );
}
