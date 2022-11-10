import {
  ProjectsCreateOrUpdateParameters,
  ProjectsGetParameters,
  ProjectsDeleteParameters,
  ProjectsListParameters,
  ProjectsExportParameters,
  ProjectsImportxParameters,
  ProjectsTrainParameters,
  DeploymentsGetDeploymentParameters,
  DeploymentsDeployProjectParameters,
  DeploymentsDeleteDeploymentParameters,
  DeploymentsListParameters,
  DeploymentsSwapDeploymentsParameters,
  JobsGetDeploymentStatusParameters,
  JobsGetSwapDeploymentsStatusParameters,
  GlobalGetSupportedLanguagesParameters,
  GlobalListTrainingConfigVersionsParameters,
} from "./parameters";
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ProjectsCreateOrUpdate {
  /** Creates a new project or updates an existing one. */
  patch(
    options: ProjectsCreateOrUpdateParameters
  ): StreamableMethod<
    | ProjectsCreateOrUpdate200Response
    | ProjectsCreateOrUpdate201Response
    | ProjectsCreateOrUpdateDefaultResponse
  >;
  /** Gets the details of a project. */
  get(
    options?: ProjectsGetParameters
  ): StreamableMethod<ProjectsGet200Response | ProjectsGetDefaultResponse>;
  /** Deletes a project. */
  delete(
    options?: ProjectsDeleteParameters
  ): StreamableMethod<
    ProjectsDelete202Response | ProjectsDeleteDefaultResponse
  >;
}

export interface ProjectsList {
  /** Lists the existing projects. */
  get(
    options?: ProjectsListParameters
  ): StreamableMethod<ProjectsList200Response | ProjectsListDefaultResponse>;
}

export interface ProjectsExport {
  /** Triggers a job to export a project's data. */
  post(
    options: ProjectsExportParameters
  ): StreamableMethod<
    ProjectsExport202Response | ProjectsExportDefaultResponse
  >;
}

export interface ProjectsImportx {
  /** Triggers a job to export a project's data. */
  post(
    options?: ProjectsImportxParameters
  ): StreamableMethod<
    ProjectsImportx202Response | ProjectsImportxDefaultResponse
  >;
}

export interface ProjectsTrain {
  /** Triggers a training job for a project. */
  post(
    options: ProjectsTrainParameters
  ): StreamableMethod<ProjectsTrain202Response | ProjectsTrainDefaultResponse>;
}

export interface DeploymentsGetDeployment {
  /** Gets the details of a deployment. */
  get(
    options?: DeploymentsGetDeploymentParameters
  ): StreamableMethod<
    | DeploymentsGetDeployment200Response
    | DeploymentsGetDeploymentDefaultResponse
  >;
  /** Creates a new deployment or replaces an existing one. */
  put(
    options?: DeploymentsDeployProjectParameters
  ): StreamableMethod<
    | DeploymentsDeployProject200Response
    | DeploymentsDeployProject201Response
    | DeploymentsDeployProjectDefaultResponse
  >;
  /** Deletes a project deployment. */
  delete(
    options?: DeploymentsDeleteDeploymentParameters
  ): StreamableMethod<
    | DeploymentsDeleteDeployment202Response
    | DeploymentsDeleteDeploymentDefaultResponse
  >;
}

export interface DeploymentsList {
  /** Lists the existing deployments. */
  get(
    options?: DeploymentsListParameters
  ): StreamableMethod<
    DeploymentsList200Response | DeploymentsListDefaultResponse
  >;
}

export interface DeploymentsSwapDeployments {
  /** Swaps two existing deployments with each other. */
  post(
    options: DeploymentsSwapDeploymentsParameters
  ): StreamableMethod<
    | DeploymentsSwapDeployments202Response
    | DeploymentsSwapDeploymentsDefaultResponse
  >;
}

export interface JobsGetDeploymentStatus {
  /** Gets the status of an existing deployment job. */
  get(
    options?: JobsGetDeploymentStatusParameters
  ): StreamableMethod<
    JobsGetDeploymentStatus200Response | JobsGetDeploymentStatusDefaultResponse
  >;
}

export interface JobsGetSwapDeploymentsStatus {
  /** Gets the status of an existing swap deployment job. */
  get(
    options?: JobsGetSwapDeploymentsStatusParameters
  ): StreamableMethod<
    | JobsGetSwapDeploymentsStatus200Response
    | JobsGetSwapDeploymentsStatusDefaultResponse
  >;
}

export interface GlobalGetSupportedLanguages {
  get(
    options?: GlobalGetSupportedLanguagesParameters
  ): StreamableMethod<
    | GlobalGetSupportedLanguages200Response
    | GlobalGetSupportedLanguagesDefaultResponse
  >;
}

export interface GlobalListTrainingConfigVersions {
  get(
    options?: GlobalListTrainingConfigVersionsParameters
  ): StreamableMethod<
    | GlobalListTrainingConfigVersions200Response
    | GlobalListTrainingConfigVersionsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}' has methods for the following verbs: patch, get, delete */
  (
    path: "/authoring/analyze-text/projects/{projectName}",
    projectName: string
  ): ProjectsCreateOrUpdate;
  /** Resource for '/authoring/analyze-text/projects' has methods for the following verbs: get */
  (path: "/authoring/analyze-text/projects"): ProjectsList;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}:export' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}:export",
    projectName: string
  ): ProjectsExport;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}:importx' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}:importx",
    projectName: string
  ): ProjectsImportx;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}:train' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}:train",
    projectName: string
  ): ProjectsTrain;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/\{deploymentName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}",
    projectName: string,
    deploymentName: string
  ): DeploymentsGetDeployment;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments",
    projectName: string
  ): DeploymentsList;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/swap' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/swap",
    projectName: string
  ): DeploymentsSwapDeployments;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/\{deploymentName\}/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/jobs/{jobId}",
    projectName: string,
    deploymentName: string,
    jobId: string
  ): JobsGetDeploymentStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/\{deploymentName\}/swap/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/swap/jobs/{jobId}",
    projectName: string,
    deploymentName: string,
    jobId: string
  ): JobsGetSwapDeploymentsStatus;
  /** Resource for '/authoring/analyze-text/projects/global/languages' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/global/languages"
  ): GlobalGetSupportedLanguages;
  /** Resource for '/authoring/analyze-text/projects/global/training-config-versions' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/global/training-config-versions"
  ): GlobalListTrainingConfigVersions;
}

export type MicrosoftCognitiveLanguageServiceAnalyzeTextAuthoringClient =
  Client & {
    path: Routes;
  };
