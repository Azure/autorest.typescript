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
 * it could be in either the url or the operation level,
 * and in operation level, it could be either path or query.
 * @param operationApiVersion api-version detail in both query and path
 * @param urlVersionDetail api-version detail in parameterized host
 * @returns calculated combined position info
 */
export function extractDefinedPosition(
  operationApiVersion?: ApiVersionInfo,
  urlVersionDetail?: ApiVersionInfo
): ApiVersionPosition {
  let pos: ApiVersionPosition = "none";
  if (operationApiVersion && urlVersionDetail) {
    pos = "duplicate";
  } else if (operationApiVersion?.definedPosition) {
    pos = operationApiVersion.definedPosition!;
  } else if (urlVersionDetail) {
    pos = "baseurl";
  }
  return pos;
}
