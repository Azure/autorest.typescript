import {
  RoundTripBasicGetModel200Response,
  RoundTripBasicGetModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /roundtrip-basic/models": ["200"],
};

export function isUnexpected(
  response:
    | RoundTripBasicGetModel200Response
    | RoundTripBasicGetModelDefaultResponse
): response is RoundTripBasicGetModelDefaultResponse;
export function isUnexpected(
  response:
    | RoundTripBasicGetModel200Response
    | RoundTripBasicGetModelDefaultResponse
): response is RoundTripBasicGetModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
