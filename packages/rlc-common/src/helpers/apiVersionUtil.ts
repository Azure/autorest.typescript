import { ApiVersionInfo, ApiVersionPosition, UrlInfo } from "../interfaces.js";

/**
 * Extract the path api-version detail from UrlInfo, return undefined if no valid api-version parameter
 * @param urlInfo UrlInfo detail
 * @returns path api-version detail
 */
export function extractPathApiVersion(
  urlInfo?: UrlInfo
): ApiVersionInfo | undefined {
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
    definedPosition: "path",
    isCrossedVersion: Boolean(param?.length > 1),
    defaultValue:
      param.length === 1 ? (param[0].value as string | undefined) : undefined
  };
  return detail;
}

/**
 * Extract the final position value from api-version in query and path defined.
 * 1. If both defined, return both
 * 2. If only query, return query; only path, return path
 * 3. If both undefined, return none
 * @param queryApiVersion query api-version detail
 * @param pathVersionDetail path api-version detail
 * @returns calculated combined position info
 */
export function extractDefinedPosition(
  queryApiVersion?: ApiVersionInfo,
  pathVersionDetail?: ApiVersionInfo
): ApiVersionPosition {
  let pos: ApiVersionPosition = "none";
  if (queryApiVersion && pathVersionDetail) {
    pos = "both";
  } else if (queryApiVersion && !pathVersionDetail) {
    pos = "query";
  } else if (!queryApiVersion && pathVersionDetail) {
    pos = "path";
  }

  return pos;
}
