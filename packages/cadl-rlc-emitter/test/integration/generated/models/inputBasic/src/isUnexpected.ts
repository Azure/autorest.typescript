import {
  InputBasicGetModel200Response,
  InputBasicGetModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /input-basic/models": ["200"],
};

export function isUnexpected(
  response: InputBasicGetModel200Response | InputBasicGetModelDefaultResponse
): response is InputBasicGetModelDefaultResponse;
export function isUnexpected(
  response: InputBasicGetModel200Response | InputBasicGetModelDefaultResponse
): response is InputBasicGetModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
