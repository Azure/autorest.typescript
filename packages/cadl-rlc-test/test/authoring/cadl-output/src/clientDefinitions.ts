// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

/** Contains operations for Projects operations */
export interface ProjectsOperations {
  /** Creates a new project or updates an existing one. */
  createOrUpdate(
    projectName: string,
    options: ProjectsCreateOrUpdateParameters
  ): StreamableMethod<
    | ProjectsCreateOrUpdate200Response
    | ProjectsCreateOrUpdate201Response
    | ProjectsCreateOrUpdateDefaultResponse
  >;
  /** Gets the details of a project. */
  get(
    projectName: string,
    options?: ProjectsGetParameters
  ): StreamableMethod<ProjectsGet200Response | ProjectsGetDefaultResponse>;
  /** Deletes a project. */
  delete(
    projectName: string,
    options?: ProjectsDeleteParameters
  ): StreamableMethod<
    ProjectsDelete202Response | ProjectsDeleteDefaultResponse
  >;
  /** Lists the existing projects. */
  list(
    options?: ProjectsListParameters
  ): StreamableMethod<ProjectsList200Response | ProjectsListDefaultResponse>;
  /** Triggers a job to export a project's data. */
  export(
    projectName: string,
    options: ProjectsExportParameters
  ): StreamableMethod<
    ProjectsExport202Response | ProjectsExportDefaultResponse
  >;
  /** Triggers a job to export a project's data. */
  importx(
    projectName: string,
    options?: ProjectsImportxParameters
  ): StreamableMethod<
    ProjectsImportx202Response | ProjectsImportxDefaultResponse
  >;
  /** Triggers a training job for a project. */
  train(
    projectName: string,
    options: ProjectsTrainParameters
  ): StreamableMethod<ProjectsTrain202Response | ProjectsTrainDefaultResponse>;
}

/** Contains operations for Deployments operations */
export interface DeploymentsOperations {
  /** Gets the details of a deployment. */
  getDeployment(
    projectName: string,
    deploymentName: string,
    options?: DeploymentsGetDeploymentParameters
  ): StreamableMethod<
    | DeploymentsGetDeployment200Response
    | DeploymentsGetDeploymentDefaultResponse
  >;
  /** Creates a new deployment or replaces an existing one. */
  deployProject(
    projectName: string,
    deploymentName: string,
    options?: DeploymentsDeployProjectParameters
  ): StreamableMethod<
    | DeploymentsDeployProject200Response
    | DeploymentsDeployProject201Response
    | DeploymentsDeployProjectDefaultResponse
  >;
  /** Deletes a project deployment. */
  deleteDeployment(
    projectName: string,
    deploymentName: string,
    options?: DeploymentsDeleteDeploymentParameters
  ): StreamableMethod<
    | DeploymentsDeleteDeployment202Response
    | DeploymentsDeleteDeploymentDefaultResponse
  >;
  /** Lists the existing deployments. */
  list(
    projectName: string,
    options?: DeploymentsListParameters
  ): StreamableMethod<
    DeploymentsList200Response | DeploymentsListDefaultResponse
  >;
  /** Swaps two existing deployments with each other. */
  swapDeployments(
    projectName: string,
    options: DeploymentsSwapDeploymentsParameters
  ): StreamableMethod<
    | DeploymentsSwapDeployments202Response
    | DeploymentsSwapDeploymentsDefaultResponse
  >;
}

/** Contains operations for Jobs operations */
export interface JobsOperations {
  /** Gets the status of an existing deployment job. */
  getDeploymentStatus(
    projectName: string,
    deploymentName: string,
    jobId: string,
    options?: JobsGetDeploymentStatusParameters
  ): StreamableMethod<
    JobsGetDeploymentStatus200Response | JobsGetDeploymentStatusDefaultResponse
  >;
  /** Gets the status of an existing swap deployment job. */
  getSwapDeploymentsStatus(
    projectName: string,
    deploymentName: string,
    jobId: string,
    options?: JobsGetSwapDeploymentsStatusParameters
  ): StreamableMethod<
    | JobsGetSwapDeploymentsStatus200Response
    | JobsGetSwapDeploymentsStatusDefaultResponse
  >;
}

/** Contains operations for Global operations */
export interface GlobalOperations {
  getSupportedLanguages(
    options?: GlobalGetSupportedLanguagesParameters
  ): StreamableMethod<
    | GlobalGetSupportedLanguages200Response
    | GlobalGetSupportedLanguagesDefaultResponse
  >;
  listTrainingConfigVersions(
    options?: GlobalListTrainingConfigVersionsParameters
  ): StreamableMethod<
    | GlobalListTrainingConfigVersions200Response
    | GlobalListTrainingConfigVersionsDefaultResponse
  >;
}

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
    projects: ProjectsOperations;
    deployments: DeploymentsOperations;
    jobs: JobsOperations;
    global: GlobalOperations;
  };
