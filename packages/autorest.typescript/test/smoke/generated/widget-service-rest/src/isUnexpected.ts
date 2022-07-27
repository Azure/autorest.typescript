// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  List200Response,
  ListdefaultResponse,
  Create200Response,
  CreatedefaultResponse,
  Read200Response,
  ReaddefaultResponse,
  CustomGet200Response,
  CustomGetdefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /": ["200"],
  "POST /": ["200"],
  "GET /widgets/{id}": ["200"],
  "GET /customGet": ["200"]
};

export function isUnexpected(
  response: List200Response | ListdefaultResponse
): response is ListdefaultResponse;
export function isUnexpected(
  response: Create200Response | CreatedefaultResponse
): response is CreatedefaultResponse;
export function isUnexpected(
  response: Read200Response | ReaddefaultResponse
): response is ReaddefaultResponse;
export function isUnexpected(
  response: CustomGet200Response | CustomGetdefaultResponse
): response is CustomGetdefaultResponse;
export function isUnexpected(
  response:
    | List200Response
    | ListdefaultResponse
    | Create200Response
    | CreatedefaultResponse
    | Read200Response
    | ReaddefaultResponse
    | CustomGet200Response
    | CustomGetdefaultResponse
): response is
  | ListdefaultResponse
  | CreatedefaultResponse
  | ReaddefaultResponse
  | CustomGetdefaultResponse {
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
          candidateParts[i].startsWith("{") &&
          candidateParts[i].endsWith("}")
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
