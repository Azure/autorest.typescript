import {
  MultiInterfaceClientGetDogs200Response,
  MultiInterfaceClientGetDogsDefaultResponse,
  MultiInterfaceClientSetDogs200Response,
  MultiInterfaceClientSetDogsDefaultResponse,
  MultiInterfaceClientGetCats200Response,
  MultiInterfaceClientGetCatsDefaultResponse,
  MultiInterfaceClientSetCats200Response,
  MultiInterfaceClientSetCatsDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /dogs": ["200"],
  "PUT /dogs/models": ["200"],
  "GET /cats": ["200"],
  "PUT /cats": ["200"],
};

export function isUnexpected(
  response:
    | MultiInterfaceClientGetDogs200Response
    | MultiInterfaceClientGetDogsDefaultResponse
): response is MultiInterfaceClientGetDogsDefaultResponse;
export function isUnexpected(
  response:
    | MultiInterfaceClientSetDogs200Response
    | MultiInterfaceClientSetDogsDefaultResponse
): response is MultiInterfaceClientSetDogsDefaultResponse;
export function isUnexpected(
  response:
    | MultiInterfaceClientGetCats200Response
    | MultiInterfaceClientGetCatsDefaultResponse
): response is MultiInterfaceClientGetCatsDefaultResponse;
export function isUnexpected(
  response:
    | MultiInterfaceClientSetCats200Response
    | MultiInterfaceClientSetCatsDefaultResponse
): response is MultiInterfaceClientSetCatsDefaultResponse;
export function isUnexpected(
  response:
    | MultiInterfaceClientGetDogs200Response
    | MultiInterfaceClientGetDogsDefaultResponse
    | MultiInterfaceClientSetDogs200Response
    | MultiInterfaceClientSetDogsDefaultResponse
    | MultiInterfaceClientGetCats200Response
    | MultiInterfaceClientGetCatsDefaultResponse
    | MultiInterfaceClientSetCats200Response
    | MultiInterfaceClientSetCatsDefaultResponse
): response is
  | MultiInterfaceClientGetDogsDefaultResponse
  | MultiInterfaceClientSetDogsDefaultResponse
  | MultiInterfaceClientGetCatsDefaultResponse
  | MultiInterfaceClientSetCatsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
