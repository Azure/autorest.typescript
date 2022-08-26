import { RequestParameters } from "@azure-rest/core-client";
import { TrainingJobOptions, SwapDeploymentsOptions } from "./models";

export interface ProjectsCreateOrUpdateQueryParamProperties {
  apiVersion: string;
}

export interface ProjectsCreateOrUpdateQueryParam {
  queryParameters: ProjectsCreateOrUpdateQueryParamProperties;
}

export interface ProjectsCreateOrUpdateMediaTypesParam {
  contentType?: "application/merge-patch+json";
}

export type ProjectsCreateOrUpdateParameters =
  ProjectsCreateOrUpdateQueryParam &
    ProjectsCreateOrUpdateMediaTypesParam &
    RequestParameters;

export interface ProjectsGetQueryParamProperties {
  apiVersion: string;
}

export interface ProjectsGetQueryParam {
  queryParameters: ProjectsGetQueryParamProperties;
}

export type ProjectsGetParameters = ProjectsGetQueryParam & RequestParameters;

export interface ProjectsDeleteQueryParamProperties {
  apiVersion: string;
}

export interface ProjectsDeleteQueryParam {
  queryParameters: ProjectsDeleteQueryParamProperties;
}

export type ProjectsDeleteParameters = ProjectsDeleteQueryParam &
  RequestParameters;

export interface ProjectsListQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
  apiVersion: string;
}

export interface ProjectsListQueryParam {
  queryParameters: ProjectsListQueryParamProperties;
}

export type ProjectsListParameters = ProjectsListQueryParam & RequestParameters;

export interface ProjectsExportQueryParamProperties {
  projectFileVersion: string;
  apiVersion: string;
}

export interface ProjectsExportQueryParam {
  queryParameters: ProjectsExportQueryParamProperties;
}

export type ProjectsExportParameters = ProjectsExportQueryParam &
  RequestParameters;

export interface ProjectsImportxQueryParamProperties {
  apiVersion: string;
}

export interface ProjectsImportxQueryParam {
  queryParameters: ProjectsImportxQueryParamProperties;
}

export type ProjectsImportxParameters = ProjectsImportxQueryParam &
  RequestParameters;

export interface ProjectsTrainBodyParam {
  body: TrainingJobOptions;
}

export interface ProjectsTrainQueryParamProperties {
  apiVersion: string;
}

export interface ProjectsTrainQueryParam {
  queryParameters: ProjectsTrainQueryParamProperties;
}

export type ProjectsTrainParameters = ProjectsTrainQueryParam &
  ProjectsTrainBodyParam &
  RequestParameters;

export interface DeploymentsGetDeploymentQueryParamProperties {
  apiVersion: string;
}

export interface DeploymentsGetDeploymentQueryParam {
  queryParameters: DeploymentsGetDeploymentQueryParamProperties;
}

export type DeploymentsGetDeploymentParameters =
  DeploymentsGetDeploymentQueryParam & RequestParameters;

export interface DeploymentsDeployProjectQueryParamProperties {
  apiVersion: string;
}

export interface DeploymentsDeployProjectQueryParam {
  queryParameters: DeploymentsDeployProjectQueryParamProperties;
}

export type DeploymentsDeployProjectParameters =
  DeploymentsDeployProjectQueryParam & RequestParameters;

export interface DeploymentsDeleteDeploymentQueryParamProperties {
  apiVersion: string;
}

export interface DeploymentsDeleteDeploymentQueryParam {
  queryParameters: DeploymentsDeleteDeploymentQueryParamProperties;
}

export type DeploymentsDeleteDeploymentParameters =
  DeploymentsDeleteDeploymentQueryParam & RequestParameters;

export interface DeploymentsListQueryParamProperties {
  apiVersion: string;
}

export interface DeploymentsListQueryParam {
  queryParameters: DeploymentsListQueryParamProperties;
}

export type DeploymentsListParameters = DeploymentsListQueryParam &
  RequestParameters;

export interface DeploymentsSwapDeploymentsBodyParam {
  body: SwapDeploymentsOptions;
}

export interface DeploymentsSwapDeploymentsQueryParamProperties {
  apiVersion: string;
}

export interface DeploymentsSwapDeploymentsQueryParam {
  queryParameters: DeploymentsSwapDeploymentsQueryParamProperties;
}

export type DeploymentsSwapDeploymentsParameters =
  DeploymentsSwapDeploymentsQueryParam &
    DeploymentsSwapDeploymentsBodyParam &
    RequestParameters;

export interface JobsGetDeploymentStatusQueryParamProperties {
  apiVersion: string;
}

export interface JobsGetDeploymentStatusQueryParam {
  queryParameters: JobsGetDeploymentStatusQueryParamProperties;
}

export type JobsGetDeploymentStatusParameters =
  JobsGetDeploymentStatusQueryParam & RequestParameters;

export interface JobsGetSwapDeploymentsStatusQueryParamProperties {
  apiVersion: string;
}

export interface JobsGetSwapDeploymentsStatusQueryParam {
  queryParameters: JobsGetSwapDeploymentsStatusQueryParamProperties;
}

export type JobsGetSwapDeploymentsStatusParameters =
  JobsGetSwapDeploymentsStatusQueryParam & RequestParameters;

export interface GlobalGetSupportedLanguagesQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
  apiVersion: string;
}

export interface GlobalGetSupportedLanguagesQueryParam {
  queryParameters: GlobalGetSupportedLanguagesQueryParamProperties;
}

export type GlobalGetSupportedLanguagesParameters =
  GlobalGetSupportedLanguagesQueryParam & RequestParameters;

export interface GlobalListTrainingConfigVersionsQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
  apiVersion: string;
}

export interface GlobalListTrainingConfigVersionsQueryParam {
  queryParameters: GlobalListTrainingConfigVersionsQueryParamProperties;
}

export type GlobalListTrainingConfigVersionsParameters =
  GlobalListTrainingConfigVersionsQueryParam & RequestParameters;
