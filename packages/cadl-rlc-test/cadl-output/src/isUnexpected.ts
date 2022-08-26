import {
  ProjectsCreateOrUpdate200Response,
  ProjectsCreateOrUpdate201Response,
  ProjectsCreateOrUpdateDefaultResponse,
  ProjectsGet200Response,
  ProjectsGetDefaultResponse,
  ProjectsDelete202Response,
  ProjectsDeleteDefaultResponse,
  ProjectsList200Response,
  ProjectsListDefaultResponse,
  ProjectsExport202Response,
  ProjectsExportDefaultResponse,
  ProjectsImportx202Response,
  ProjectsImportxDefaultResponse,
  ProjectsTrain202Response,
  ProjectsTrainDefaultResponse,
  DeploymentsGetDeployment200Response,
  DeploymentsGetDeploymentDefaultResponse,
  DeploymentsDeployProject200Response,
  DeploymentsDeployProject201Response,
  DeploymentsDeployProjectDefaultResponse,
  DeploymentsDeleteDeployment202Response,
  DeploymentsDeleteDeploymentDefaultResponse,
  DeploymentsList200Response,
  DeploymentsListDefaultResponse,
  DeploymentsSwapDeployments202Response,
  DeploymentsSwapDeploymentsDefaultResponse,
  JobsGetDeploymentStatus200Response,
  JobsGetDeploymentStatusDefaultResponse,
  JobsGetSwapDeploymentsStatus200Response,
  JobsGetSwapDeploymentsStatusDefaultResponse,
  GlobalGetSupportedLanguages200Response,
  GlobalGetSupportedLanguagesDefaultResponse,
  GlobalListTrainingConfigVersions200Response,
  GlobalListTrainingConfigVersionsDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "PATCH /authoring/analyze-text/projects/{projectName}": ["200", "201"],
  "GET /authoring/analyze-text/projects/{projectName}": ["200"],
  "DELETE /authoring/analyze-text/projects/{projectName}": ["202"],
  "GET /authoring/analyze-text/projects": ["200"],
  "POST /authoring/analyze-text/projects/{projectName}:export": ["202"],
  "POST /authoring/analyze-text/projects/{projectName}:importx": ["202"],
  "POST /authoring/analyze-text/projects/{projectName}:train": ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}":
    ["200"],
  "PUT /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}":
    ["200", "201"],
  "DELETE /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}":
    ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments": ["200"],
  "POST /authoring/analyze-text/projects/{projectName}/deployments/swap": [
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
    | ProjectsCreateOrUpdate200Response
    | ProjectsCreateOrUpdate201Response
    | ProjectsCreateOrUpdateDefaultResponse
): response is ProjectsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: ProjectsGet200Response | ProjectsGetDefaultResponse
): response is ProjectsGetDefaultResponse;
export function isUnexpected(
  response: ProjectsDelete202Response | ProjectsDeleteDefaultResponse
): response is ProjectsDeleteDefaultResponse;
export function isUnexpected(
  response: ProjectsList200Response | ProjectsListDefaultResponse
): response is ProjectsListDefaultResponse;
export function isUnexpected(
  response: ProjectsExport202Response | ProjectsExportDefaultResponse
): response is ProjectsExportDefaultResponse;
export function isUnexpected(
  response: ProjectsImportx202Response | ProjectsImportxDefaultResponse
): response is ProjectsImportxDefaultResponse;
export function isUnexpected(
  response: ProjectsTrain202Response | ProjectsTrainDefaultResponse
): response is ProjectsTrainDefaultResponse;
export function isUnexpected(
  response:
    | DeploymentsGetDeployment200Response
    | DeploymentsGetDeploymentDefaultResponse
): response is DeploymentsGetDeploymentDefaultResponse;
export function isUnexpected(
  response:
    | DeploymentsDeployProject200Response
    | DeploymentsDeployProject201Response
    | DeploymentsDeployProjectDefaultResponse
): response is DeploymentsDeployProjectDefaultResponse;
export function isUnexpected(
  response:
    | DeploymentsDeleteDeployment202Response
    | DeploymentsDeleteDeploymentDefaultResponse
): response is DeploymentsDeleteDeploymentDefaultResponse;
export function isUnexpected(
  response: DeploymentsList200Response | DeploymentsListDefaultResponse
): response is DeploymentsListDefaultResponse;
export function isUnexpected(
  response:
    | DeploymentsSwapDeployments202Response
    | DeploymentsSwapDeploymentsDefaultResponse
): response is DeploymentsSwapDeploymentsDefaultResponse;
export function isUnexpected(
  response:
    | JobsGetDeploymentStatus200Response
    | JobsGetDeploymentStatusDefaultResponse
): response is JobsGetDeploymentStatusDefaultResponse;
export function isUnexpected(
  response:
    | JobsGetSwapDeploymentsStatus200Response
    | JobsGetSwapDeploymentsStatusDefaultResponse
): response is JobsGetSwapDeploymentsStatusDefaultResponse;
export function isUnexpected(
  response:
    | GlobalGetSupportedLanguages200Response
    | GlobalGetSupportedLanguagesDefaultResponse
): response is GlobalGetSupportedLanguagesDefaultResponse;
export function isUnexpected(
  response:
    | GlobalListTrainingConfigVersions200Response
    | GlobalListTrainingConfigVersionsDefaultResponse
): response is GlobalListTrainingConfigVersionsDefaultResponse;
export function isUnexpected(
  response:
    | ProjectsCreateOrUpdate200Response
    | ProjectsCreateOrUpdate201Response
    | ProjectsCreateOrUpdateDefaultResponse
    | ProjectsGet200Response
    | ProjectsGetDefaultResponse
    | ProjectsDelete202Response
    | ProjectsDeleteDefaultResponse
    | ProjectsList200Response
    | ProjectsListDefaultResponse
    | ProjectsExport202Response
    | ProjectsExportDefaultResponse
    | ProjectsImportx202Response
    | ProjectsImportxDefaultResponse
    | ProjectsTrain202Response
    | ProjectsTrainDefaultResponse
    | DeploymentsGetDeployment200Response
    | DeploymentsGetDeploymentDefaultResponse
    | DeploymentsDeployProject200Response
    | DeploymentsDeployProject201Response
    | DeploymentsDeployProjectDefaultResponse
    | DeploymentsDeleteDeployment202Response
    | DeploymentsDeleteDeploymentDefaultResponse
    | DeploymentsList200Response
    | DeploymentsListDefaultResponse
    | DeploymentsSwapDeployments202Response
    | DeploymentsSwapDeploymentsDefaultResponse
    | JobsGetDeploymentStatus200Response
    | JobsGetDeploymentStatusDefaultResponse
    | JobsGetSwapDeploymentsStatus200Response
    | JobsGetSwapDeploymentsStatusDefaultResponse
    | GlobalGetSupportedLanguages200Response
    | GlobalGetSupportedLanguagesDefaultResponse
    | GlobalListTrainingConfigVersions200Response
    | GlobalListTrainingConfigVersionsDefaultResponse
): response is
  | ProjectsCreateOrUpdateDefaultResponse
  | ProjectsGetDefaultResponse
  | ProjectsDeleteDefaultResponse
  | ProjectsListDefaultResponse
  | ProjectsExportDefaultResponse
  | ProjectsImportxDefaultResponse
  | ProjectsTrainDefaultResponse
  | DeploymentsGetDeploymentDefaultResponse
  | DeploymentsDeployProjectDefaultResponse
  | DeploymentsDeleteDeploymentDefaultResponse
  | DeploymentsListDefaultResponse
  | DeploymentsSwapDeploymentsDefaultResponse
  | JobsGetDeploymentStatusDefaultResponse
  | JobsGetSwapDeploymentsStatusDefaultResponse
  | GlobalGetSupportedLanguagesDefaultResponse
  | GlobalListTrainingConfigVersionsDefaultResponse {
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
