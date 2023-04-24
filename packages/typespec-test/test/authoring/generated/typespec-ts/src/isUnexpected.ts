// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateOrUpdate200Response,
  CreateOrUpdate201Response,
  CreateOrUpdateLogicalResponse,
  CreateOrUpdateDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  Delete202Response,
  DeleteLogicalResponse,
  DeleteDefaultResponse,
  ListProjects200Response,
  ListProjectsDefaultResponse,
  Export202Response,
  ExportLogicalResponse,
  ExportDefaultResponse,
  Importx202Response,
  ImportxLogicalResponse,
  ImportxDefaultResponse,
  Train202Response,
  TrainLogicalResponse,
  TrainDefaultResponse,
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  DeployProject200Response,
  DeployProject201Response,
  DeployProjectLogicalResponse,
  DeployProjectDefaultResponse,
  DeleteDeployment202Response,
  DeleteDeploymentLogicalResponse,
  DeleteDeploymentDefaultResponse,
  ListDeployments200Response,
  ListDeploymentsDefaultResponse,
  SwapDeployments202Response,
  SwapDeploymentsLogicalResponse,
  SwapDeploymentsDefaultResponse,
  GetDeploymentStatus200Response,
  GetDeploymentStatusDefaultResponse,
  GetSwapDeploymentsStatus200Response,
  GetSwapDeploymentsStatusDefaultResponse,
  GetSupportedLanguages200Response,
  GetSupportedLanguagesDefaultResponse,
  ListTrainingConfigVersions200Response,
  ListTrainingConfigVersionsDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "PATCH /authoring/analyze-text/projects/{projectName}": ["200", "201"],
  "GET /authoring/analyze-text/projects/{projectName}": ["200"],
  "DELETE /authoring/analyze-text/projects/{projectName}": ["202"],
  "GET /authoring/analyze-text/projects": ["200"],
  "POST /authoring/analyze-text/projects/{projectName}:export": ["202"],
  "GET /authoring/analyze-text/projects/{projectName}:export": ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}:importx": ["202"],
  "GET /authoring/analyze-text/projects/{projectName}:importx": ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}:train": ["202"],
  "GET /authoring/analyze-text/projects/{projectName}:train": ["200", "202"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}":
    ["200"],
  "PUT /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}":
    ["200", "201"],
  "DELETE /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}":
    ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments": ["200"],
  "POST /authoring/analyze-text/projects/{projectName}/deployments:swap": [
    "202",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/deployments:swap": [
    "200",
    "202",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/swap/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/global/languages": ["200"],
  "GET /authoring/analyze-text/projects/global/training-config-versions": [
    "200",
  ],
};

export function isUnexpected(
  response:
    | CreateOrUpdate200Response
    | CreateOrUpdate201Response
    | CreateOrUpdateLogicalResponse
    | CreateOrUpdateDefaultResponse
): response is CreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: Get200Response | GetDefaultResponse
): response is GetDefaultResponse;
export function isUnexpected(
  response: Delete202Response | DeleteLogicalResponse | DeleteDefaultResponse
): response is DeleteDefaultResponse;
export function isUnexpected(
  response: ListProjects200Response | ListProjectsDefaultResponse
): response is ListProjectsDefaultResponse;
export function isUnexpected(
  response: Export202Response | ExportLogicalResponse | ExportDefaultResponse
): response is ExportDefaultResponse;
export function isUnexpected(
  response: Importx202Response | ImportxLogicalResponse | ImportxDefaultResponse
): response is ImportxDefaultResponse;
export function isUnexpected(
  response: Train202Response | TrainLogicalResponse | TrainDefaultResponse
): response is TrainDefaultResponse;
export function isUnexpected(
  response: GetDeployment200Response | GetDeploymentDefaultResponse
): response is GetDeploymentDefaultResponse;
export function isUnexpected(
  response:
    | DeployProject200Response
    | DeployProject201Response
    | DeployProjectLogicalResponse
    | DeployProjectDefaultResponse
): response is DeployProjectDefaultResponse;
export function isUnexpected(
  response:
    | DeleteDeployment202Response
    | DeleteDeploymentLogicalResponse
    | DeleteDeploymentDefaultResponse
): response is DeleteDeploymentDefaultResponse;
export function isUnexpected(
  response: ListDeployments200Response | ListDeploymentsDefaultResponse
): response is ListDeploymentsDefaultResponse;
export function isUnexpected(
  response:
    | SwapDeployments202Response
    | SwapDeploymentsLogicalResponse
    | SwapDeploymentsDefaultResponse
): response is SwapDeploymentsDefaultResponse;
export function isUnexpected(
  response: GetDeploymentStatus200Response | GetDeploymentStatusDefaultResponse
): response is GetDeploymentStatusDefaultResponse;
export function isUnexpected(
  response:
    | GetSwapDeploymentsStatus200Response
    | GetSwapDeploymentsStatusDefaultResponse
): response is GetSwapDeploymentsStatusDefaultResponse;
export function isUnexpected(
  response:
    | GetSupportedLanguages200Response
    | GetSupportedLanguagesDefaultResponse
): response is GetSupportedLanguagesDefaultResponse;
export function isUnexpected(
  response:
    | ListTrainingConfigVersions200Response
    | ListTrainingConfigVersionsDefaultResponse
): response is ListTrainingConfigVersionsDefaultResponse;
export function isUnexpected(
  response:
    | CreateOrUpdate200Response
    | CreateOrUpdate201Response
    | CreateOrUpdateLogicalResponse
    | CreateOrUpdateDefaultResponse
    | Get200Response
    | GetDefaultResponse
    | Delete202Response
    | DeleteLogicalResponse
    | DeleteDefaultResponse
    | ListProjects200Response
    | ListProjectsDefaultResponse
    | Export202Response
    | ExportLogicalResponse
    | ExportDefaultResponse
    | Importx202Response
    | ImportxLogicalResponse
    | ImportxDefaultResponse
    | Train202Response
    | TrainLogicalResponse
    | TrainDefaultResponse
    | GetDeployment200Response
    | GetDeploymentDefaultResponse
    | DeployProject200Response
    | DeployProject201Response
    | DeployProjectLogicalResponse
    | DeployProjectDefaultResponse
    | DeleteDeployment202Response
    | DeleteDeploymentLogicalResponse
    | DeleteDeploymentDefaultResponse
    | ListDeployments200Response
    | ListDeploymentsDefaultResponse
    | SwapDeployments202Response
    | SwapDeploymentsLogicalResponse
    | SwapDeploymentsDefaultResponse
    | GetDeploymentStatus200Response
    | GetDeploymentStatusDefaultResponse
    | GetSwapDeploymentsStatus200Response
    | GetSwapDeploymentsStatusDefaultResponse
    | GetSupportedLanguages200Response
    | GetSupportedLanguagesDefaultResponse
    | ListTrainingConfigVersions200Response
    | ListTrainingConfigVersionsDefaultResponse
): response is
  | CreateOrUpdateDefaultResponse
  | GetDefaultResponse
  | DeleteDefaultResponse
  | ListProjectsDefaultResponse
  | ExportDefaultResponse
  | ImportxDefaultResponse
  | TrainDefaultResponse
  | GetDeploymentDefaultResponse
  | DeployProjectDefaultResponse
  | DeleteDeploymentDefaultResponse
  | ListDeploymentsDefaultResponse
  | SwapDeploymentsDefaultResponse
  | GetDeploymentStatusDefaultResponse
  | GetSwapDeploymentsStatusDefaultResponse
  | GetSupportedLanguagesDefaultResponse
  | ListTrainingConfigVersionsDefaultResponse {
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
          `${candidateParts[i]?.slice(start, end)}`
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
