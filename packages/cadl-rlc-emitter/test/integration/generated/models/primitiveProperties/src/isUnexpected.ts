import {
  PrimitivePropertiesGetModel200Response,
  PrimitivePropertiesGetModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /primitive-properties/models": ["200"],
};

export function isUnexpected(
  response:
    | PrimitivePropertiesGetModel200Response
    | PrimitivePropertiesGetModelDefaultResponse
): response is PrimitivePropertiesGetModelDefaultResponse;
export function isUnexpected(
  response:
    | PrimitivePropertiesGetModel200Response
    | PrimitivePropertiesGetModelDefaultResponse
): response is PrimitivePropertiesGetModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
