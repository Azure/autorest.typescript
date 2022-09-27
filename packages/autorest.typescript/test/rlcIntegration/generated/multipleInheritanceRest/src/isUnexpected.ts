// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetHorse200Response,
  GetHorseDefaultResponse,
  GetPet200Response,
  GetPetDefaultResponse,
  GetFeline200Response,
  GetFelineDefaultResponse,
  GetCat200Response,
  GetCatDefaultResponse,
  GetKitten200Response,
  GetKittenDefaultResponse
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
  response: GetHorse200Response | GetHorseDefaultResponse
): response is GetHorseDefaultResponse;
export function isUnexpected(
  response: GetPet200Response | GetPetDefaultResponse
): response is GetPetDefaultResponse;
export function isUnexpected(
  response: GetFeline200Response | GetFelineDefaultResponse
): response is GetFelineDefaultResponse;
export function isUnexpected(
  response: GetCat200Response | GetCatDefaultResponse
): response is GetCatDefaultResponse;
export function isUnexpected(
  response: GetKitten200Response | GetKittenDefaultResponse
): response is GetKittenDefaultResponse;
export function isUnexpected(
  response:
    | GetHorse200Response
    | GetHorseDefaultResponse
    | GetPet200Response
    | GetPetDefaultResponse
    | GetFeline200Response
    | GetFelineDefaultResponse
    | GetCat200Response
    | GetCatDefaultResponse
    | GetKitten200Response
    | GetKittenDefaultResponse
): response is
  | GetHorseDefaultResponse
  | GetPetDefaultResponse
  | GetFelineDefaultResponse
  | GetCatDefaultResponse
  | GetKittenDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
