import {
  SdkClient,
  isApiVersion,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { ignoreDiagnostics, Program } from "@typespec/compiler";
import {
  ApiVersionInfo,
  UrlInfo,
  extractPathApiVersion,
  extractDefinedPosition,
  SchemaContext,
  ApiVersionPosition
} from "@azure-tools/rlc-common";
import { getHttpOperation } from "@typespec/http";
import {
  getEnrichedDefaultApiVersion,
  getSchemaForType,
  trimUsage
} from "../utils/modelUtils.js";
import { SdkContext } from "../utils/interfaces.js";

export function transformApiVersionInfo(
  client: SdkClient,
  dpgContext: SdkContext,
  urlInfo?: UrlInfo
): ApiVersionInfo | undefined {
  const program = dpgContext.program;
  const queryVersionDetail = getOperationApiVersion(
    client,
    program,
    dpgContext
  );
  const pathVersionDetail = extractPathApiVersion(urlInfo);
  const isCrossedVersion =
    pathVersionDetail?.isCrossedVersion || queryVersionDetail?.isCrossedVersion;
  const defaultValue =
    (pathVersionDetail || queryVersionDetail) && !isCrossedVersion
      ? getEnrichedDefaultApiVersion(program, dpgContext) ??
        pathVersionDetail?.defaultValue ??
        queryVersionDetail?.defaultValue
      : undefined;

  return {
    definedPosition: extractDefinedPosition(
      queryVersionDetail,
      pathVersionDetail
    ),
    isCrossedVersion,
    defaultValue
  };
}

function getOperationApiVersion(
  client: SdkClient,
  program: Program,
  dpgContext: SdkContext
): ApiVersionInfo | undefined {
  const apiVersionTypes = new Set<string>();
  const locations = new Set<ApiVersionPosition>();
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    // ignore overload base operation
    if (route.overloads && route.overloads?.length > 0) {
      continue;
    }
    const params = route.parameters.parameters.filter(
      (p) =>
        (p.type === "query" || p.type === "path") && isApiVersion(dpgContext, p)
    );
    params.map((p) => {
      const type = getSchemaForType(
        dpgContext,
        p.param.type,
        [SchemaContext.Exception, SchemaContext.Input],
        false,
        p.param
      );
      if (p.type !== "header") {
        locations.add(p.type);
      }
      const typeString = JSON.stringify(trimUsage(type));
      apiVersionTypes.add(typeString);
    });
    if (apiVersionTypes.size > 1) {
      break;
    }
  }
  const operationGroups = listOperationGroups(dpgContext, client, true);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      // ignore overload base operation
      if (route.overloads && route.overloads?.length > 0) {
        continue;
      }
      const params = route.parameters.parameters.filter(
        (p) =>
          (p.type === "query" || p.type === "path") &&
          isApiVersion(dpgContext, p)
      );
      params.map((p) => {
        const type = getSchemaForType(
          dpgContext,
          p.param.type,
          [SchemaContext.Exception, SchemaContext.Input],
          false,
          p.param
        );
        if (p.type !== "header") {
          locations.add(p.type);
        }

        const typeString = JSON.stringify(trimUsage(type));
        apiVersionTypes.add(typeString);
      });
      if (apiVersionTypes.size > 1) {
        break;
      }
    }
  }
  // If no api-version parameter defined return directly
  if (apiVersionTypes.size === 0) {
    return;
  }
  const detail: ApiVersionInfo = {
    definedPosition:
      locations.size > 1 ? "duplicate" : locations.values().next().value,
    isCrossedVersion: apiVersionTypes.size > 1,
    defaultValue: undefined // We won't prompt the query versions into client one
  };
  return detail;
}
