import {
  EnumPropertiesBasicSendEnumPropertyModel200Response,
  EnumPropertiesBasicSendEnumPropertyModelDefaultResponse,
  EnumPropertiesBasicGetEnumPropertModel200Response,
  EnumPropertiesBasicGetEnumPropertModelDefaultResponse,
  EnumPropertiesBasicSetEnumPropertModel200Response,
  EnumPropertiesBasicSetEnumPropertModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /enum-properties-basic/models": ["200"],
  "GET /enum-properties-basic/models": ["200"],
  "PUT /enum-properties-basic/models": ["200"],
};

export function isUnexpected(
  response:
    | EnumPropertiesBasicSendEnumPropertyModel200Response
    | EnumPropertiesBasicSendEnumPropertyModelDefaultResponse
): response is EnumPropertiesBasicSendEnumPropertyModelDefaultResponse;
export function isUnexpected(
  response:
    | EnumPropertiesBasicGetEnumPropertModel200Response
    | EnumPropertiesBasicGetEnumPropertModelDefaultResponse
): response is EnumPropertiesBasicGetEnumPropertModelDefaultResponse;
export function isUnexpected(
  response:
    | EnumPropertiesBasicSetEnumPropertModel200Response
    | EnumPropertiesBasicSetEnumPropertModelDefaultResponse
): response is EnumPropertiesBasicSetEnumPropertModelDefaultResponse;
export function isUnexpected(
  response:
    | EnumPropertiesBasicSendEnumPropertyModel200Response
    | EnumPropertiesBasicSendEnumPropertyModelDefaultResponse
    | EnumPropertiesBasicGetEnumPropertModel200Response
    | EnumPropertiesBasicGetEnumPropertModelDefaultResponse
    | EnumPropertiesBasicSetEnumPropertModel200Response
    | EnumPropertiesBasicSetEnumPropertModelDefaultResponse
): response is
  | EnumPropertiesBasicSendEnumPropertyModelDefaultResponse
  | EnumPropertiesBasicGetEnumPropertModelDefaultResponse
  | EnumPropertiesBasicSetEnumPropertModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
