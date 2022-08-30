import {
  DogsGetDogs200Response,
  DogsGetDogsDefaultResponse,
  DogsSetDogs200Response,
  DogsSetDogsDefaultResponse,
  CatsGetCats200Response,
  CatsGetCatsDefaultResponse,
  CatsSetCats200Response,
  CatsSetCatsDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /dogs": ["200"],
  "PUT /dogs/models": ["200"],
  "GET /cats": ["200"],
  "PUT /cats": ["200"],
};

export function isUnexpected(
  response: DogsGetDogs200Response | DogsGetDogsDefaultResponse
): response is DogsGetDogsDefaultResponse;
export function isUnexpected(
  response: DogsSetDogs200Response | DogsSetDogsDefaultResponse
): response is DogsSetDogsDefaultResponse;
export function isUnexpected(
  response: CatsGetCats200Response | CatsGetCatsDefaultResponse
): response is CatsGetCatsDefaultResponse;
export function isUnexpected(
  response: CatsSetCats200Response | CatsSetCatsDefaultResponse
): response is CatsSetCatsDefaultResponse;
export function isUnexpected(
  response:
    | DogsGetDogs200Response
    | DogsGetDogsDefaultResponse
    | DogsSetDogs200Response
    | DogsSetDogsDefaultResponse
    | CatsGetCats200Response
    | CatsGetCatsDefaultResponse
    | CatsSetCats200Response
    | CatsSetCatsDefaultResponse
): response is
  | DogsGetDogsDefaultResponse
  | DogsSetDogsDefaultResponse
  | CatsGetCatsDefaultResponse
  | CatsSetCatsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
