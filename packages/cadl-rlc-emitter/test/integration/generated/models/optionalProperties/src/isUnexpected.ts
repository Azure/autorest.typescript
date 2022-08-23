import {
  OptionalPropertiesSendOptionalPropertyModel200Response,
  OptionalPropertiesSendOptionalPropertyModelDefaultResponse,
  OptionalPropertiesGetOptionalPropertyModel200Response,
  OptionalPropertiesGetOptionalPropertyModelDefaultResponse,
  OptionalPropertiesSetOptionalPropertyModel200Response,
  OptionalPropertiesSetOptionalPropertyModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /optional-properties/models": ["200"],
  "GET /optional-properties/models": ["200"],
  "PUT /optional-properties/models": ["200"],
};

export function isUnexpected(
  response:
    | OptionalPropertiesSendOptionalPropertyModel200Response
    | OptionalPropertiesSendOptionalPropertyModelDefaultResponse
): response is OptionalPropertiesSendOptionalPropertyModelDefaultResponse;
export function isUnexpected(
  response:
    | OptionalPropertiesGetOptionalPropertyModel200Response
    | OptionalPropertiesGetOptionalPropertyModelDefaultResponse
): response is OptionalPropertiesGetOptionalPropertyModelDefaultResponse;
export function isUnexpected(
  response:
    | OptionalPropertiesSetOptionalPropertyModel200Response
    | OptionalPropertiesSetOptionalPropertyModelDefaultResponse
): response is OptionalPropertiesSetOptionalPropertyModelDefaultResponse;
export function isUnexpected(
  response:
    | OptionalPropertiesSendOptionalPropertyModel200Response
    | OptionalPropertiesSendOptionalPropertyModelDefaultResponse
    | OptionalPropertiesGetOptionalPropertyModel200Response
    | OptionalPropertiesGetOptionalPropertyModelDefaultResponse
    | OptionalPropertiesSetOptionalPropertyModel200Response
    | OptionalPropertiesSetOptionalPropertyModelDefaultResponse
): response is
  | OptionalPropertiesSendOptionalPropertyModelDefaultResponse
  | OptionalPropertiesGetOptionalPropertyModelDefaultResponse
  | OptionalPropertiesSetOptionalPropertyModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
