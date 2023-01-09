// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListDeployments200Response,
  ListDeploymentsDefaultResponse,
  CreateDeployment201Response,
  CreateDeploymentDefaultResponse,
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  UpdateDeployment200Response,
  UpdateDeployment201Response,
  UpdateDeploymentDefaultResponse,
  DeleteDeployment204Response,
  DeleteDeploymentDefaultResponse,
  ListFiles200Response,
  ListFilesDefaultResponse,
  UploadFile201Response,
  UploadFileDefaultResponse,
  GetFile200Response,
  GetFileDefaultResponse,
  DeleteFile204Response,
  DeleteFileDefaultResponse,
  GetFileContent200Response,
  GetFileContentDefaultResponse,
  ImportFile201Response,
  ImportFileDefaultResponse,
  ListFineTunes200Response,
  ListFineTunesDefaultResponse,
  CreateFineTune201Response,
  CreateFineTuneDefaultResponse,
  GetFineTune200Response,
  GetFineTuneDefaultResponse,
  DeleteFineTune204Response,
  DeleteFineTuneDefaultResponse,
  ListFineTuneEvents200Response,
  ListFineTuneEventsDefaultResponse,
  CancelFineTune200Response,
  CancelFineTuneDefaultResponse,
  ListModels200Response,
  ListModelsDefaultResponse,
  GetModel200Response,
  GetModelDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /deployments": ["200"],
  "POST /deployments": ["201"],
  "GET /deployments/{deploymentId}": ["200"],
  "PATCH /deployments/{deploymentId}": ["200", "201"],
  "DELETE /deployments/{deploymentId}": ["204"],
  "GET /files": ["200"],
  "POST /files": ["201"],
  "GET /files/{fileId}": ["200"],
  "DELETE /files/{fileId}": ["204"],
  "GET /files/{fileId}:content": ["200"],
  "POST /files/import": ["201"],
  "GET /fine-tunes": ["200"],
  "POST /fine-tunes": ["201"],
  "GET /fine-tunes/{fineTuneId}": ["200"],
  "DELETE /fine-tunes/{fineTuneId}": ["204"],
  "GET /fine-tunes/{fineTuneId}:listFineTuneEvents": ["200"],
  "POST /fine-tunes/{fineTuneId}:cancel": ["200"],
  "GET /models": ["200"],
  "GET /models/{model_id}": ["200"],
};

export function isUnexpected(
  response: ListDeployments200Response | ListDeploymentsDefaultResponse
): response is ListDeploymentsDefaultResponse;
export function isUnexpected(
  response: CreateDeployment201Response | CreateDeploymentDefaultResponse
): response is CreateDeploymentDefaultResponse;
export function isUnexpected(
  response: GetDeployment200Response | GetDeploymentDefaultResponse
): response is GetDeploymentDefaultResponse;
export function isUnexpected(
  response:
    | UpdateDeployment200Response
    | UpdateDeployment201Response
    | UpdateDeploymentDefaultResponse
): response is UpdateDeploymentDefaultResponse;
export function isUnexpected(
  response: DeleteDeployment204Response | DeleteDeploymentDefaultResponse
): response is DeleteDeploymentDefaultResponse;
export function isUnexpected(
  response: ListFiles200Response | ListFilesDefaultResponse
): response is ListFilesDefaultResponse;
export function isUnexpected(
  response: UploadFile201Response | UploadFileDefaultResponse
): response is UploadFileDefaultResponse;
export function isUnexpected(
  response: GetFile200Response | GetFileDefaultResponse
): response is GetFileDefaultResponse;
export function isUnexpected(
  response: DeleteFile204Response | DeleteFileDefaultResponse
): response is DeleteFileDefaultResponse;
export function isUnexpected(
  response: GetFileContent200Response | GetFileContentDefaultResponse
): response is GetFileContentDefaultResponse;
export function isUnexpected(
  response: ImportFile201Response | ImportFileDefaultResponse
): response is ImportFileDefaultResponse;
export function isUnexpected(
  response: ListFineTunes200Response | ListFineTunesDefaultResponse
): response is ListFineTunesDefaultResponse;
export function isUnexpected(
  response: CreateFineTune201Response | CreateFineTuneDefaultResponse
): response is CreateFineTuneDefaultResponse;
export function isUnexpected(
  response: GetFineTune200Response | GetFineTuneDefaultResponse
): response is GetFineTuneDefaultResponse;
export function isUnexpected(
  response: DeleteFineTune204Response | DeleteFineTuneDefaultResponse
): response is DeleteFineTuneDefaultResponse;
export function isUnexpected(
  response: ListFineTuneEvents200Response | ListFineTuneEventsDefaultResponse
): response is ListFineTuneEventsDefaultResponse;
export function isUnexpected(
  response: CancelFineTune200Response | CancelFineTuneDefaultResponse
): response is CancelFineTuneDefaultResponse;
export function isUnexpected(
  response: ListModels200Response | ListModelsDefaultResponse
): response is ListModelsDefaultResponse;
export function isUnexpected(
  response: GetModel200Response | GetModelDefaultResponse
): response is GetModelDefaultResponse;
export function isUnexpected(
  response:
    | ListDeployments200Response
    | ListDeploymentsDefaultResponse
    | CreateDeployment201Response
    | CreateDeploymentDefaultResponse
    | GetDeployment200Response
    | GetDeploymentDefaultResponse
    | UpdateDeployment200Response
    | UpdateDeployment201Response
    | UpdateDeploymentDefaultResponse
    | DeleteDeployment204Response
    | DeleteDeploymentDefaultResponse
    | ListFiles200Response
    | ListFilesDefaultResponse
    | UploadFile201Response
    | UploadFileDefaultResponse
    | GetFile200Response
    | GetFileDefaultResponse
    | DeleteFile204Response
    | DeleteFileDefaultResponse
    | GetFileContent200Response
    | GetFileContentDefaultResponse
    | ImportFile201Response
    | ImportFileDefaultResponse
    | ListFineTunes200Response
    | ListFineTunesDefaultResponse
    | CreateFineTune201Response
    | CreateFineTuneDefaultResponse
    | GetFineTune200Response
    | GetFineTuneDefaultResponse
    | DeleteFineTune204Response
    | DeleteFineTuneDefaultResponse
    | ListFineTuneEvents200Response
    | ListFineTuneEventsDefaultResponse
    | CancelFineTune200Response
    | CancelFineTuneDefaultResponse
    | ListModels200Response
    | ListModelsDefaultResponse
    | GetModel200Response
    | GetModelDefaultResponse
): response is
  | ListDeploymentsDefaultResponse
  | CreateDeploymentDefaultResponse
  | GetDeploymentDefaultResponse
  | UpdateDeploymentDefaultResponse
  | DeleteDeploymentDefaultResponse
  | ListFilesDefaultResponse
  | UploadFileDefaultResponse
  | GetFileDefaultResponse
  | DeleteFileDefaultResponse
  | GetFileContentDefaultResponse
  | ImportFileDefaultResponse
  | ListFineTunesDefaultResponse
  | CreateFineTuneDefaultResponse
  | GetFineTuneDefaultResponse
  | DeleteFineTuneDefaultResponse
  | ListFineTuneEventsDefaultResponse
  | CancelFineTuneDefaultResponse
  | ListModelsDefaultResponse
  | GetModelDefaultResponse {
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
