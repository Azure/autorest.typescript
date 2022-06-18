// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetHorse200Response,
  GetHorsedefaultResponse,
  GetPet200Response,
  GetPetdefaultResponse,
  GetFeline200Response,
  GetFelinedefaultResponse,
  GetCat200Response,
  GetCatdefaultResponse,
  GetKitten200Response,
  GetKittendefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /multipleInheritance/horse": ["200"],
  "PUT /multipleInheritance/horse": ["200"],
  "GET /multipleInheritance/pet": ["200"],
  "PUT /multipleInheritance/pet": ["200"],
  "GET /multipleInheritance/feline": ["200"],
  "PUT /multipleInheritance/feline": ["200"],
  "GET /multipleInheritance/cat": ["200"],
  "PUT /multipleInheritance/cat": ["200"],
  "GET /multipleInheritance/kitten": ["200"],
  "PUT /multipleInheritance/kitten": ["200"]
};

export function isUnexpected(
  response: GetHorse200Response | GetHorsedefaultResponse
): response is GetHorsedefaultResponse;
export function isUnexpected(
  response: GetPet200Response | GetPetdefaultResponse
): response is GetPetdefaultResponse;
export function isUnexpected(
  response: GetFeline200Response | GetFelinedefaultResponse
): response is GetFelinedefaultResponse;
export function isUnexpected(
  response: GetCat200Response | GetCatdefaultResponse
): response is GetCatdefaultResponse;
export function isUnexpected(
  response: GetKitten200Response | GetKittendefaultResponse
): response is GetKittendefaultResponse;
export function isUnexpected(
  response:
    | GetHorse200Response
    | GetHorsedefaultResponse
    | GetPet200Response
    | GetPetdefaultResponse
    | GetFeline200Response
    | GetFelinedefaultResponse
    | GetCat200Response
    | GetCatdefaultResponse
    | GetKitten200Response
    | GetKittendefaultResponse
): response is
  | GetHorsedefaultResponse
  | GetPetdefaultResponse
  | GetFelinedefaultResponse
  | GetCatdefaultResponse
  | GetKittendefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
