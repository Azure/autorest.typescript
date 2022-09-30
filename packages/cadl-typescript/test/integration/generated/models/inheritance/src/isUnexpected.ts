import {
  BasicPolymorphicModelsSetValue200Response,
  BasicPolymorphicModelsSetValueDefaultResponse,
  BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response,
  BasicPolymorphicModelsSetValueWithPolymorphicPropertyDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "PUT /polymorphic/model": ["200"],
  "PUT /polymorphic/property": ["200"],
};

export function isUnexpected(
  response:
    | BasicPolymorphicModelsSetValue200Response
    | BasicPolymorphicModelsSetValueDefaultResponse
): response is BasicPolymorphicModelsSetValueDefaultResponse;
export function isUnexpected(
  response:
    | BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response
    | BasicPolymorphicModelsSetValueWithPolymorphicPropertyDefaultResponse
): response is BasicPolymorphicModelsSetValueWithPolymorphicPropertyDefaultResponse;
export function isUnexpected(
  response:
    | BasicPolymorphicModelsSetValue200Response
    | BasicPolymorphicModelsSetValueDefaultResponse
    | BasicPolymorphicModelsSetValueWithPolymorphicProperty200Response
    | BasicPolymorphicModelsSetValueWithPolymorphicPropertyDefaultResponse
): response is
  | BasicPolymorphicModelsSetValueDefaultResponse
  | BasicPolymorphicModelsSetValueWithPolymorphicPropertyDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
