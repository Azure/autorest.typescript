import {
  ReadonlyPropertiesGetOptionalPropertyModel200Response,
  ReadonlyPropertiesGetOptionalPropertyModelDefaultResponse,
  ReadonlyPropertiesSetOptionalPropertyModel200Response,
  ReadonlyPropertiesSetOptionalPropertyModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /readonly-properties/models": ["200"],
  "PUT /readonly-properties/models": ["200"],
};

export function isUnexpected(
  response:
    | ReadonlyPropertiesGetOptionalPropertyModel200Response
    | ReadonlyPropertiesGetOptionalPropertyModelDefaultResponse
): response is ReadonlyPropertiesGetOptionalPropertyModelDefaultResponse;
export function isUnexpected(
  response:
    | ReadonlyPropertiesSetOptionalPropertyModel200Response
    | ReadonlyPropertiesSetOptionalPropertyModelDefaultResponse
): response is ReadonlyPropertiesSetOptionalPropertyModelDefaultResponse;
export function isUnexpected(
  response:
    | ReadonlyPropertiesGetOptionalPropertyModel200Response
    | ReadonlyPropertiesGetOptionalPropertyModelDefaultResponse
    | ReadonlyPropertiesSetOptionalPropertyModel200Response
    | ReadonlyPropertiesSetOptionalPropertyModelDefaultResponse
): response is
  | ReadonlyPropertiesGetOptionalPropertyModelDefaultResponse
  | ReadonlyPropertiesSetOptionalPropertyModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
