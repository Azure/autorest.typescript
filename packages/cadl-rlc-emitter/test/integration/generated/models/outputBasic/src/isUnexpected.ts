import {
  OutputBasicGetModel200Response,
  OutputBasicGetModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /output-basic/models": ["200"],
};

export function isUnexpected(
  response: OutputBasicGetModel200Response | OutputBasicGetModelDefaultResponse
): response is OutputBasicGetModelDefaultResponse;
export function isUnexpected(
  response: OutputBasicGetModel200Response | OutputBasicGetModelDefaultResponse
): response is OutputBasicGetModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
