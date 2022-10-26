import {
  DevDrivenGetPages200Response,
  DevDrivenGetPagesDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /resiliency/devdriven/customization/model/{mode}": ["200"],
  "POST /resiliency/devdriven/customization/model/{mode}": ["200"],
  "GET /resiliency/devdriven/products": ["200"],
  "PUT /resiliency/devdriven/customization/lro/{mode}": ["200"],
};

export function isUnexpected(
  response: DevDrivenGetPages200Response | DevDrivenGetPagesDefaultResponse
): response is DevDrivenGetPagesDefaultResponse;
export function isUnexpected(
  response: DevDrivenGetPages200Response | DevDrivenGetPagesDefaultResponse
): response is DevDrivenGetPagesDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
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
      if (candidateParts[i] !== pathParts[j]) {
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

  // No match was found, return an empty array.
  return [];
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
