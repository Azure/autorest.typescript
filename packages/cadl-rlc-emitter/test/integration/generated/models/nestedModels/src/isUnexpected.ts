import {
  NestedModelsBasicSendNestedModel200Response,
  NestedModelsBasicSendNestedModelDefaultResponse,
  NestedModelsBasicGetNestedModel200Response,
  NestedModelsBasicGetNestedModelDefaultResponse,
  NestedModelsBasicSetNestedModel200Response,
  NestedModelsBasicSetNestedModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /nested-models/models": ["200"],
  "GET /nested-models/models": ["200"],
  "PUT /nested-models/models": ["200"],
};

export function isUnexpected(
  response:
    | NestedModelsBasicSendNestedModel200Response
    | NestedModelsBasicSendNestedModelDefaultResponse
): response is NestedModelsBasicSendNestedModelDefaultResponse;
export function isUnexpected(
  response:
    | NestedModelsBasicGetNestedModel200Response
    | NestedModelsBasicGetNestedModelDefaultResponse
): response is NestedModelsBasicGetNestedModelDefaultResponse;
export function isUnexpected(
  response:
    | NestedModelsBasicSetNestedModel200Response
    | NestedModelsBasicSetNestedModelDefaultResponse
): response is NestedModelsBasicSetNestedModelDefaultResponse;
export function isUnexpected(
  response:
    | NestedModelsBasicSendNestedModel200Response
    | NestedModelsBasicSendNestedModelDefaultResponse
    | NestedModelsBasicGetNestedModel200Response
    | NestedModelsBasicGetNestedModelDefaultResponse
    | NestedModelsBasicSetNestedModel200Response
    | NestedModelsBasicSetNestedModelDefaultResponse
): response is
  | NestedModelsBasicSendNestedModelDefaultResponse
  | NestedModelsBasicGetNestedModelDefaultResponse
  | NestedModelsBasicSetNestedModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
