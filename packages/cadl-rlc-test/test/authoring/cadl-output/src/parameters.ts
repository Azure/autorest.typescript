import { RequestParameters } from "@azure-rest/core-client";
import {
  Project,
  TrainingJobOptions,
  Deployment,
  SwapDeploymentsOptions,
  DeploymentJob,
  SwapDeploymentsJob,
} from "./models";

export interface ProjectsCreateOrUpdateBodyParam {
  body?: Project;
}

export interface ProjectsCreateOrUpdateMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type ProjectsCreateOrUpdateParameters =
  ProjectsCreateOrUpdateMediaTypesParam &
    ProjectsCreateOrUpdateBodyParam &
    RequestParameters;

export interface ProjectsGetBodyParam {
  body?: Project;
}

export type ProjectsGetParameters = ProjectsGetBodyParam & RequestParameters;

export interface ProjectsDeleteBodyParam {
  body?: Project;
}

export type ProjectsDeleteParameters = ProjectsDeleteBodyParam &
  RequestParameters;

export interface ProjectsListBodyParam {
  body?: Project;
}

export interface ProjectsListQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface ProjectsListQueryParam {
  queryParameters?: ProjectsListQueryParamProperties;
}

export type ProjectsListParameters = ProjectsListQueryParam &
  ProjectsListBodyParam &
  RequestParameters;

export interface ProjectsExportQueryParamProperties {
  projectFileVersion: string;
}

export interface ProjectsExportQueryParam {
  queryParameters: ProjectsExportQueryParamProperties;
}

export type ProjectsExportParameters = ProjectsExportQueryParam &
  RequestParameters;
export type ProjectsImportxParameters = RequestParameters;

export interface ProjectsTrainBodyParam {
  body: TrainingJobOptions;
}

export type ProjectsTrainParameters = ProjectsTrainBodyParam &
  RequestParameters;

export interface DeploymentsGetDeploymentBodyParam {
  body?: Deployment;
}

export type DeploymentsGetDeploymentParameters =
  DeploymentsGetDeploymentBodyParam & RequestParameters;

export interface DeploymentsDeployProjectBodyParam {
  body?: Deployment;
}

export type DeploymentsDeployProjectParameters =
  DeploymentsDeployProjectBodyParam & RequestParameters;

export interface DeploymentsDeleteDeploymentBodyParam {
  body?: Deployment;
}

export type DeploymentsDeleteDeploymentParameters =
  DeploymentsDeleteDeploymentBodyParam & RequestParameters;

export interface DeploymentsListBodyParam {
  body?: Deployment;
}

export type DeploymentsListParameters = DeploymentsListBodyParam &
  RequestParameters;

export interface DeploymentsSwapDeploymentsBodyParam {
  /** The body schema of the operation. */
  body: SwapDeploymentsOptions;
}

export type DeploymentsSwapDeploymentsParameters =
  DeploymentsSwapDeploymentsBodyParam & RequestParameters;

export interface JobsGetDeploymentStatusBodyParam {
  body?: DeploymentJob;
}

export type JobsGetDeploymentStatusParameters =
  JobsGetDeploymentStatusBodyParam & RequestParameters;

export interface JobsGetSwapDeploymentsStatusBodyParam {
  body?: SwapDeploymentsJob;
}

export type JobsGetSwapDeploymentsStatusParameters =
  JobsGetSwapDeploymentsStatusBodyParam & RequestParameters;

export interface GlobalGetSupportedLanguagesQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface GlobalGetSupportedLanguagesQueryParam {
  queryParameters?: GlobalGetSupportedLanguagesQueryParamProperties;
}

export type GlobalGetSupportedLanguagesParameters =
  GlobalGetSupportedLanguagesQueryParam & RequestParameters;

export interface GlobalListTrainingConfigVersionsQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface GlobalListTrainingConfigVersionsQueryParam {
  queryParameters?: GlobalListTrainingConfigVersionsQueryParamProperties;
}

export type GlobalListTrainingConfigVersionsParameters =
  GlobalListTrainingConfigVersionsQueryParam & RequestParameters;
