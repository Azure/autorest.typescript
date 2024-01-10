// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DetectEntireSeries200Response,
  DetectEntireSeriesDefaultResponse,
  DetectLastPoint200Response,
  DetectLastPointDefaultResponse,
  DetectChangePoint200Response,
  DetectChangePointDefaultResponse,
  GetBatchDetectionResult200Response,
  GetBatchDetectionResultDefaultResponse,
  CreateMultivariateModel201Response,
  CreateMultivariateModelDefaultResponse,
  ListMultivariateModel200Response,
  ListMultivariateModelDefaultResponse,
  DeleteMultivariateModel204Response,
  DeleteMultivariateModelDefaultResponse,
  GetMultivariateModel200Response,
  GetMultivariateModelDefaultResponse,
  BatchDetectAnomaly202Response,
  BatchDetectAnomalyDefaultResponse,
  LastDetectAnomaly200Response,
  LastDetectAnomalyDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /timeseries/entire/detect": ["200"],
  "POST /timeseries/last/detect": ["200"],
  "POST /timeseries/changepoint/detect": ["200"],
  "GET /multivariate/detect-batch/{resultId}": ["200"],
  "POST /multivariate/models": ["201"],
  "GET /multivariate/models": ["200"],
  "DELETE /multivariate/models/{modelId}": ["204"],
  "GET /multivariate/models/{modelId}": ["200"],
  "POST /multivariate/models/{modelId}:detect-batch": ["202"],
  "GET /multivariate/models/{modelId}:detect-batch": ["202"],
  "POST /multivariate/models/{modelId}:detect-last": ["200"],
};

export function isUnexpected(
  response: DetectEntireSeries200Response | DetectEntireSeriesDefaultResponse,
): response is DetectEntireSeriesDefaultResponse;
export function isUnexpected(
  response: DetectLastPoint200Response | DetectLastPointDefaultResponse,
): response is DetectLastPointDefaultResponse;
export function isUnexpected(
  response: DetectChangePoint200Response | DetectChangePointDefaultResponse,
): response is DetectChangePointDefaultResponse;
export function isUnexpected(
  response:
    | GetBatchDetectionResult200Response
    | GetBatchDetectionResultDefaultResponse,
): response is GetBatchDetectionResultDefaultResponse;
export function isUnexpected(
  response:
    | CreateMultivariateModel201Response
    | CreateMultivariateModelDefaultResponse,
): response is CreateMultivariateModelDefaultResponse;
export function isUnexpected(
  response:
    | ListMultivariateModel200Response
    | ListMultivariateModelDefaultResponse,
): response is ListMultivariateModelDefaultResponse;
export function isUnexpected(
  response:
    | DeleteMultivariateModel204Response
    | DeleteMultivariateModelDefaultResponse,
): response is DeleteMultivariateModelDefaultResponse;
export function isUnexpected(
  response:
    | GetMultivariateModel200Response
    | GetMultivariateModelDefaultResponse,
): response is GetMultivariateModelDefaultResponse;
export function isUnexpected(
  response: BatchDetectAnomaly202Response | BatchDetectAnomalyDefaultResponse,
): response is BatchDetectAnomalyDefaultResponse;
export function isUnexpected(
  response: LastDetectAnomaly200Response | LastDetectAnomalyDefaultResponse,
): response is LastDetectAnomalyDefaultResponse;
export function isUnexpected(
  response:
    | DetectEntireSeries200Response
    | DetectEntireSeriesDefaultResponse
    | DetectLastPoint200Response
    | DetectLastPointDefaultResponse
    | DetectChangePoint200Response
    | DetectChangePointDefaultResponse
    | GetBatchDetectionResult200Response
    | GetBatchDetectionResultDefaultResponse
    | CreateMultivariateModel201Response
    | CreateMultivariateModelDefaultResponse
    | ListMultivariateModel200Response
    | ListMultivariateModelDefaultResponse
    | DeleteMultivariateModel204Response
    | DeleteMultivariateModelDefaultResponse
    | GetMultivariateModel200Response
    | GetMultivariateModelDefaultResponse
    | BatchDetectAnomaly202Response
    | BatchDetectAnomalyDefaultResponse
    | LastDetectAnomaly200Response
    | LastDetectAnomalyDefaultResponse,
): response is
  | DetectEntireSeriesDefaultResponse
  | DetectLastPointDefaultResponse
  | DetectChangePointDefaultResponse
  | GetBatchDetectionResultDefaultResponse
  | CreateMultivariateModelDefaultResponse
  | ListMultivariateModelDefaultResponse
  | DeleteMultivariateModelDefaultResponse
  | GetMultivariateModelDefaultResponse
  | BatchDetectAnomalyDefaultResponse
  | LastDetectAnomalyDefaultResponse {
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

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

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
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
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
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
