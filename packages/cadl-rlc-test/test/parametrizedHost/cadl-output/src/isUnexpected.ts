import {
  ConfidentialLedgerListCollections200Response,
  ConfidentialLedgerListCollectionsDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /app/collections": ["200"],
};

export function isUnexpected(
  response:
    | ConfidentialLedgerListCollections200Response
    | ConfidentialLedgerListCollectionsDefaultResponse
): response is ConfidentialLedgerListCollectionsDefaultResponse;
export function isUnexpected(
  response:
    | ConfidentialLedgerListCollections200Response
    | ConfidentialLedgerListCollectionsDefaultResponse
): response is ConfidentialLedgerListCollectionsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
