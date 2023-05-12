import {
  SdkClient,
  SdkContext,
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
  SchemaContext
} from "@azure-tools/rlc-common";
import { getHttpOperation } from "@typespec/http";
import {
  getEnrichedDefaultApiVersion,
  getSchemaForType,
  trimUsage
} from "../modelUtils.js";

export function transformApiVersionInfo(
  client: SdkClient,
  program: Program,
  dpgContext: SdkContext,
  urlInfo?: UrlInfo
): ApiVersionInfo | undefined {
  const queryVersionDetail = getOperationQueryApiVersion(
    client,
    program,
    dpgContext
  );
  const pathVersionDetail = extractPathApiVersion(urlInfo);
  const isCrossedVersion =
    pathVersionDetail?.isCrossedVersion || queryVersionDetail?.isCrossedVersion;
  let defaultValue =
    getEnrichedDefaultApiVersion(program, dpgContext) ??
    pathVersionDetail?.defaultValue ??
    queryVersionDetail?.defaultValue;

  // Clear the default value if there exists cross version
  if (isCrossedVersion) {
    defaultValue = undefined;
  }

  return {
    definedPosition: extractDefinedPosition(
      queryVersionDetail,
      pathVersionDetail
    ),
    isCrossedVersion,
    defaultValue
  };
}

function getOperationQueryApiVersion(
  client: SdkClient,
  program: Program,
  dpgContext: SdkContext
): ApiVersionInfo | undefined {
  const operationGroups = listOperationGroups(dpgContext, client);
  const apiVersionTypes = new Set<string>();
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      const params = route.parameters.parameters.filter(
        (p) => p.type === "query" && isApiVersion(dpgContext, p)
      );
      params.map((p) => {
        const type = getSchemaForType(
          program,
          dpgContext,
          p.param.type,
          [SchemaContext.Exception, SchemaContext.Input],
          false,
          p.param
        );
        const typeString = JSON.stringify(trimUsage(type));
        apiVersionTypes.add(typeString);
      });
      if (apiVersionTypes.size > 1) {
        break;
      }
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    const params = route.parameters.parameters.filter(
      (p) => p.type === "query" && isApiVersion(dpgContext, p)
    );
    params.map((p) => {
      const type = getSchemaForType(
        program,
        dpgContext,
        p.param.type,
        [SchemaContext.Exception, SchemaContext.Input],
        false,
        p.param
      );
      const typeString = JSON.stringify(trimUsage(type));
      apiVersionTypes.add(typeString);
    });
    if (apiVersionTypes.size > 1) {
      break;
    }
  }
  // If no api-version parameter defined return directly
  if (apiVersionTypes.size === 0) {
    return;
  }
  const detail: ApiVersionInfo = {
    definedPosition: "query",
    isCrossedVersion: apiVersionTypes.size > 1,
    defaultValue: undefined // We won't prompt the query versions into client one
  };
  return detail;
}
