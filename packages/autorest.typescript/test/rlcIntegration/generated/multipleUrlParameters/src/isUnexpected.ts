// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  EntityCreateOrUpdate200Response,
  EntityCreateOrUpdateDefaultResponse,
  EntityListByGuids200Response,
  EntityListByGuidsDefaultResponse,
  EntityCreateOrUpdateEntities200Response,
  EntityCreateOrUpdateEntitiesDefaultResponse,
  EntityDeleteByGuids200Response,
  EntityDeleteByGuidsDefaultResponse,
  EntityAddClassification204Response,
  EntityAddClassificationDefaultResponse,
  EntityGetByGuid200Response,
  EntityGetByGuidDefaultResponse,
  EntityPartialUpdateEntityAttributeByGuid200Response,
  EntityPartialUpdateEntityAttributeByGuidDefaultResponse,
  EntityDeleteByGuid200Response,
  EntityDeleteByGuidDefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /entity": ["200"],
  "GET /entity/bulk": ["200"],
  "POST /entity/bulk": ["200"],
  "DELETE /entity/bulk": ["200"],
  "POST /entity/bulk/classification": ["204"],
  "GET /entity/guid/{guid}": ["200"],
  "PUT /entity/guid/{guid}": ["200"],
  "DELETE /entity/guid/{guid}": ["200"]
};

export function isUnexpected(
  response:
    | EntityCreateOrUpdate200Response
    | EntityCreateOrUpdateDefaultResponse
): response is EntityCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: EntityListByGuids200Response | EntityListByGuidsDefaultResponse
): response is EntityListByGuidsDefaultResponse;
export function isUnexpected(
  response:
    | EntityCreateOrUpdateEntities200Response
    | EntityCreateOrUpdateEntitiesDefaultResponse
): response is EntityCreateOrUpdateEntitiesDefaultResponse;
export function isUnexpected(
  response: EntityDeleteByGuids200Response | EntityDeleteByGuidsDefaultResponse
): response is EntityDeleteByGuidsDefaultResponse;
export function isUnexpected(
  response:
    | EntityAddClassification204Response
    | EntityAddClassificationDefaultResponse
): response is EntityAddClassificationDefaultResponse;
export function isUnexpected(
  response: EntityGetByGuid200Response | EntityGetByGuidDefaultResponse
): response is EntityGetByGuidDefaultResponse;
export function isUnexpected(
  response:
    | EntityPartialUpdateEntityAttributeByGuid200Response
    | EntityPartialUpdateEntityAttributeByGuidDefaultResponse
): response is EntityPartialUpdateEntityAttributeByGuidDefaultResponse;
export function isUnexpected(
  response: EntityDeleteByGuid200Response | EntityDeleteByGuidDefaultResponse
): response is EntityDeleteByGuidDefaultResponse;
export function isUnexpected(
  response:
    | EntityCreateOrUpdate200Response
    | EntityCreateOrUpdateDefaultResponse
    | EntityListByGuids200Response
    | EntityListByGuidsDefaultResponse
    | EntityCreateOrUpdateEntities200Response
    | EntityCreateOrUpdateEntitiesDefaultResponse
    | EntityDeleteByGuids200Response
    | EntityDeleteByGuidsDefaultResponse
    | EntityAddClassification204Response
    | EntityAddClassificationDefaultResponse
    | EntityGetByGuid200Response
    | EntityGetByGuidDefaultResponse
    | EntityPartialUpdateEntityAttributeByGuid200Response
    | EntityPartialUpdateEntityAttributeByGuidDefaultResponse
    | EntityDeleteByGuid200Response
    | EntityDeleteByGuidDefaultResponse
): response is
  | EntityCreateOrUpdateDefaultResponse
  | EntityListByGuidsDefaultResponse
  | EntityCreateOrUpdateEntitiesDefaultResponse
  | EntityDeleteByGuidsDefaultResponse
  | EntityAddClassificationDefaultResponse
  | EntityGetByGuidDefaultResponse
  | EntityPartialUpdateEntityAttributeByGuidDefaultResponse
  | EntityDeleteByGuidDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i]?.startsWith("{") &&
          candidateParts[i]?.endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
