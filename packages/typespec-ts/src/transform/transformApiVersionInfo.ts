import {
  ApiVersionInfo,
  ApiVersionPosition,
  extractDefinedPosition,
  extractPathApiVersion,
  SchemaContext,
  UrlInfo
} from "@azure-tools/rlc-common";
import {
  getHttpOperationWithCache,
  isApiVersion,
  SdkClient
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../utils/interfaces.js";
import {
  getDefaultApiVersionString,
  getSchemaForType,
  trimUsage
} from "../utils/modelUtils.js";
import { listOperationsUnderRLCClient } from "../utils/clientUtils.js";

export function transformApiVersionInfo(
  client: SdkClient,
  dpgContext: SdkContext,
  urlInfo?: UrlInfo
): ApiVersionInfo | undefined {
  const queryVersionDetail = getOperationApiVersion(client, dpgContext);
  const pathVersionDetail = extractPathApiVersion(urlInfo);
  const isCrossedVersion =
    queryVersionDetail || pathVersionDetail
      ? Boolean(
          pathVersionDetail?.isCrossedVersion ||
            queryVersionDetail?.isCrossedVersion
        )
      : undefined;
  const defaultValue =
    (pathVersionDetail || queryVersionDetail) && !isCrossedVersion
      ? (getDefaultApiVersionString(dpgContext) ??
        pathVersionDetail?.defaultValue ??
        queryVersionDetail?.defaultValue)
      : undefined;

  if (pathVersionDetail && queryVersionDetail) {
    return pathVersionDetail;
  }
  if (pathVersionDetail && !queryVersionDetail) {
    dpgContext.hasApiVersionInClient = true;
  }
  return {
    definedPosition: extractDefinedPosition(
      queryVersionDetail,
      pathVersionDetail
    ),
    isCrossedVersion,
    defaultValue,
    required: pathVersionDetail?.required ?? queryVersionDetail?.required
  };
}

export function getOperationApiVersion(
  client: SdkClient,
  dpgContext: SdkContext
): ApiVersionInfo | undefined {
  const apiVersionTypes = new Set<string>();
  const locations = new Set<ApiVersionPosition>();
  const required = new Set<boolean>();
  dpgContext.hasApiVersionInClient = true;
  let hasApiVersionInOperation = true;
  for (const op of listOperationsUnderRLCClient(client)) {
    hasApiVersionInOperation = false;
    const route = getHttpOperationWithCache(dpgContext, op);
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    const params = route.parameters.parameters.filter(
      (p) =>
        (p.type === "query" || p.type === "path") && isApiVersion(dpgContext, p.param)
    );
    params.map((p) => {
      const type = getSchemaForType(dpgContext, p.param.type, {
        usage: [SchemaContext.Exception, SchemaContext.Input],
        needRef: false,
        relevantProperty: p.param
      });
      required.add(!p.param.optional);
      if (p.type === "query" || p.type === "path") {
        locations.add(p.type);
      }
      const typeString = JSON.stringify(trimUsage(type));
      apiVersionTypes.add(typeString);
    });
    if (apiVersionTypes.size > 1 || !dpgContext.hasApiVersionInClient) {
      break;
    }
    if (params.length === 1) {
      hasApiVersionInOperation = true;
    }
    if (!hasApiVersionInOperation) {
      dpgContext.hasApiVersionInClient = false;
    }
  }
  // If no api-version parameter defined return directly
  if (apiVersionTypes.size === 0 || !dpgContext.hasApiVersionInClient) {
    return;
  }
  const detail: ApiVersionInfo = {
    definedPosition:
      locations.size > 1 ? "duplicate" : locations.values().next().value,
    isCrossedVersion: apiVersionTypes.size > 1,
    defaultValue: undefined, // We won't prompt the query versions into client one
    required: required.values().next().value
  };
  return detail;
}
