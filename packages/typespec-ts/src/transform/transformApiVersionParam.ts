import {
  Client,
  DpgContext,
  getDefaultApiVersion,
  isApiVersion,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import { ignoreDiagnostics, Program } from "@typespec/compiler";
import { ApiVersionInfo, UrlInfo } from "@azure-tools/rlc-common";
import { getHttpOperation } from "@typespec/http";
import {
  getDefaultService,
  getSchemaForType,
  trimUsage
} from "../modelUtils.js";

export function transformApiVersionInfo(
  client: Client,
  program: Program,
  dpgContext: DpgContext,
  urlInfo?: UrlInfo
): ApiVersionInfo | undefined {
  const queryVersionDetail = getOperationQueryApiVersion(
    client,
    program,
    dpgContext
  );
  const pathVersionDetail = getPathApiVersion(urlInfo);

  // TODO: remember to switch TCGC directly once the change is applied
  // https://github.com/Azure/typespec-azure/pull/2821
  const definedDefault =
    getDefaultApiVersion(dpgContext, getDefaultService(program)?.type!)
      ?.value ?? getDefaultService(program)?.version;
  const definedPosition = extractDefinedPosition(
    queryVersionDetail,
    pathVersionDetail
  );
  const isCrossedVersion =
    queryVersionDetail?.isCrossedVersion ?? pathVersionDetail?.isCrossedVersion;
  let defaultValue =
    definedDefault ??
    pathVersionDetail?.defaultValue ??
    queryVersionDetail?.defaultValue;

  // Clear the default value if there exists cross version
  if (isCrossedVersion) {
    defaultValue = undefined;
  }

  return {
    definedPosition,
    isCrossedVersion,
    defaultValue
  };
}

function extractDefinedPosition(
  queryApiVersion?: ApiVersionInfo,
  pathVersionDetail?: ApiVersionInfo
) {
  let pos: "none" | "both" | "query" | "path" = "none";
  if (queryApiVersion && pathVersionDetail) {
    pos = "both";
  } else if (queryApiVersion && !pathVersionDetail) {
    pos = "query";
  } else if (!queryApiVersion && pathVersionDetail) {
    pos = "path";
  }

  return pos;
}

function getPathApiVersion(urlInfo?: UrlInfo): ApiVersionInfo | undefined {
  if (!urlInfo) {
    return;
  }
  const param = urlInfo.urlParameters?.filter(
    (p) =>
      p.name.toLowerCase() === "api-version" ||
      p.name.toLowerCase() === "apiversion"
  );
  if (!param || param?.length < 1) {
    return;
  }
  const detail: ApiVersionInfo = {
    definedPosition: "query",
    isCrossedVersion: false
  };
  return detail;
}

function getOperationQueryApiVersion(
  client: Client,
  program: Program,
  dpgContext: DpgContext
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
        const type = getSchemaForType(program, p.param.type);
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
      const type = getSchemaForType(program, p.param.type);
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
