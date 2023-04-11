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
import { HttpOperationParameter, getHttpOperation } from "@typespec/http";
import { getDefaultService, getDefaultValue } from "./transform.js";

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
    definedPosition === "query"
      ? Boolean(queryVersionDetail?.isCrossedVersion)
      : false;
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
  let apiVersionParam: HttpOperationParameter | undefined;
  let hasClientApiVersion = false;
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const route = ignoreDiagnostics(getHttpOperation(program, op));
      const apiVersions = route.parameters.parameters.filter(
        (p) =>
          p.type === "query" &&
          isApiVersion(dpgContext, p) &&
          getDefaultValue(program, dpgContext, p.param)
      );
      if (
        apiVersions.length === 1 &&
        !hasClientApiVersion &&
        !apiVersionParam
      ) {
        apiVersionParam = apiVersions[0];
        hasClientApiVersion = true;
      } else if (apiVersions.length !== 1) {
        hasClientApiVersion = false;
        break;
      } else if (
        apiVersions.length == 1 &&
        getDefaultValue(program, dpgContext, apiVersions[0]?.param) !==
          getDefaultValue(program, dpgContext, apiVersionParam?.param)
      ) {
        hasClientApiVersion = false;
        break;
      }
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const route = ignoreDiagnostics(getHttpOperation(program, clientOp));
    const apiVersions = route.parameters.parameters.filter(
      (p) =>
        p.type === "query" &&
        isApiVersion(dpgContext, p) &&
        getDefaultValue(program, dpgContext, p.param)
    );
    if (apiVersions.length === 1 && !hasClientApiVersion && !apiVersionParam) {
      apiVersionParam = apiVersions[0];
      hasClientApiVersion = true;
    } else if (apiVersions.length !== 1) {
      hasClientApiVersion = false;
      break;
    } else if (
      apiVersions.length == 1 &&
      getDefaultValue(program, dpgContext, apiVersions[0]?.param) !==
        getDefaultValue(program, dpgContext, apiVersionParam?.param)
    ) {
      hasClientApiVersion = false;
      break;
    }
  }
  if (!apiVersionParam) {
    return;
  }
  const detail: ApiVersionInfo = {
    definedPosition: "query",
    isCrossedVersion: !hasClientApiVersion,
    defaultValue: getDefaultValue(
      program,
      dpgContext,
      apiVersionParam!.param
    ) as string
  };
  return detail;
}
