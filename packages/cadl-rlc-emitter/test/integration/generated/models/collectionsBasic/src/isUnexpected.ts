import {
  CollectionPropertiesBasicSendCollectionModel200Response,
  CollectionPropertiesBasicSendCollectionModelDefaultResponse,
  CollectionPropertiesBasicGetCollectionModel200Response,
  CollectionPropertiesBasicGetCollectionModelDefaultResponse,
  CollectionPropertiesBasicSetCollectionModel200Response,
  CollectionPropertiesBasicSetCollectionModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /collection-properties-basic/models": ["200"],
  "GET /collection-properties-basic/models": ["200"],
  "PUT /collection-properties-basic/models": ["200"],
};

export function isUnexpected(
  response:
    | CollectionPropertiesBasicSendCollectionModel200Response
    | CollectionPropertiesBasicSendCollectionModelDefaultResponse
): response is CollectionPropertiesBasicSendCollectionModelDefaultResponse;
export function isUnexpected(
  response:
    | CollectionPropertiesBasicGetCollectionModel200Response
    | CollectionPropertiesBasicGetCollectionModelDefaultResponse
): response is CollectionPropertiesBasicGetCollectionModelDefaultResponse;
export function isUnexpected(
  response:
    | CollectionPropertiesBasicSetCollectionModel200Response
    | CollectionPropertiesBasicSetCollectionModelDefaultResponse
): response is CollectionPropertiesBasicSetCollectionModelDefaultResponse;
export function isUnexpected(
  response:
    | CollectionPropertiesBasicSendCollectionModel200Response
    | CollectionPropertiesBasicSendCollectionModelDefaultResponse
    | CollectionPropertiesBasicGetCollectionModel200Response
    | CollectionPropertiesBasicGetCollectionModelDefaultResponse
    | CollectionPropertiesBasicSetCollectionModel200Response
    | CollectionPropertiesBasicSetCollectionModelDefaultResponse
): response is
  | CollectionPropertiesBasicSendCollectionModelDefaultResponse
  | CollectionPropertiesBasicGetCollectionModelDefaultResponse
  | CollectionPropertiesBasicSetCollectionModelDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
