import {
  ModelCollectionPropertiesSendCollectionModel200Response,
  ModelCollectionPropertiesSendCollectionModelDefaultResponse,
  ModelCollectionPropertiesGetCollectionModel200Response,
  ModelCollectionPropertiesGetCollectionModelDefaultResponse,
  ModelCollectionPropertiesSetCollectionModel200Response,
  ModelCollectionPropertiesSetCollectionModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /collection-models/models": ["200"],
  "GET /collection-models/models": ["200"],
  "PUT /collection-models/models": ["200"],
};

export function isUnexpected(
  response:
    | ModelCollectionPropertiesSendCollectionModel200Response
    | ModelCollectionPropertiesSendCollectionModelDefaultResponse
): response is ModelCollectionPropertiesSendCollectionModelDefaultResponse;
export function isUnexpected(
  response:
    | ModelCollectionPropertiesGetCollectionModel200Response
    | ModelCollectionPropertiesGetCollectionModelDefaultResponse
): response is ModelCollectionPropertiesGetCollectionModelDefaultResponse;
export function isUnexpected(
  response:
    | ModelCollectionPropertiesSetCollectionModel200Response
    | ModelCollectionPropertiesSetCollectionModelDefaultResponse
): response is ModelCollectionPropertiesSetCollectionModelDefaultResponse;
export function isUnexpected(
  response:
    | ModelCollectionPropertiesSendCollectionModel200Response
    | ModelCollectionPropertiesSendCollectionModelDefaultResponse
    | ModelCollectionPropertiesGetCollectionModel200Response
    | ModelCollectionPropertiesGetCollectionModelDefaultResponse
    | ModelCollectionPropertiesSetCollectionModel200Response
    | ModelCollectionPropertiesSetCollectionModelDefaultResponse
): response is
  | ModelCollectionPropertiesSendCollectionModelDefaultResponse
  | ModelCollectionPropertiesGetCollectionModelDefaultResponse
  | ModelCollectionPropertiesSetCollectionModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
