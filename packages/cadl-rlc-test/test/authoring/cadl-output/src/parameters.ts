import { RequestParameters } from "@azure-rest/core-client";
import { TrainingJobOptions, SwapDeploymentsOptions } from "./models";

export interface ProjectsCreateOrUpdateQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ProjectsGetQueryParam {
  queryParameters: ProjectsGetQueryParamProperties;
}

export type ProjectsGetParameters = ProjectsGetQueryParam & RequestParameters;

export interface ProjectsDeleteQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ProjectsListQueryParam {
  queryParameters: ProjectsListQueryParamProperties;
}

export type ProjectsListParameters = ProjectsListQueryParam & RequestParameters;

export interface ProjectsExportQueryParamProperties {
  projectFileVersion: string;
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ProjectsExportQueryParam {
  queryParameters: ProjectsExportQueryParamProperties;
}

export type ProjectsExportParameters = ProjectsExportQueryParam &
  RequestParameters;

export interface ProjectsImportxQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ProjectsTrainQueryParam {
  queryParameters: ProjectsTrainQueryParamProperties;
}

export type ProjectsTrainParameters = ProjectsTrainQueryParam &
  ProjectsTrainBodyParam &
  RequestParameters;

export interface DeploymentsGetDeploymentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeploymentsGetDeploymentQueryParam {
  queryParameters: DeploymentsGetDeploymentQueryParamProperties;
}

export type DeploymentsGetDeploymentParameters =
  DeploymentsGetDeploymentQueryParam & RequestParameters;

export interface DeploymentsDeployProjectQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeploymentsDeployProjectQueryParam {
  queryParameters: DeploymentsDeployProjectQueryParamProperties;
}

export type DeploymentsDeployProjectParameters =
  DeploymentsDeployProjectQueryParam & RequestParameters;

export interface DeploymentsDeleteDeploymentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeploymentsDeleteDeploymentQueryParam {
  queryParameters: DeploymentsDeleteDeploymentQueryParamProperties;
}

export type DeploymentsDeleteDeploymentParameters =
  DeploymentsDeleteDeploymentQueryParam & RequestParameters;

export interface DeploymentsListQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeploymentsListQueryParam {
  queryParameters: DeploymentsListQueryParamProperties;
}

export type DeploymentsListParameters = DeploymentsListQueryParam &
  RequestParameters;

export interface DeploymentsSwapDeploymentsBodyParam {
  /** The body schema of the operation. */
  body: SwapDeploymentsOptions;
}

export interface DeploymentsSwapDeploymentsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeploymentsSwapDeploymentsQueryParam {
  queryParameters: DeploymentsSwapDeploymentsQueryParamProperties;
}

export type DeploymentsSwapDeploymentsParameters =
  DeploymentsSwapDeploymentsQueryParam &
    DeploymentsSwapDeploymentsBodyParam &
    RequestParameters;

export interface JobsGetDeploymentStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface JobsGetDeploymentStatusQueryParam {
  queryParameters: JobsGetDeploymentStatusQueryParamProperties;
}

export type JobsGetDeploymentStatusParameters =
  JobsGetDeploymentStatusQueryParam & RequestParameters;

export interface JobsGetSwapDeploymentsStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  /** The API version to use for this operation. */
  "api-version": string;
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
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GlobalListTrainingConfigVersionsQueryParam {
  queryParameters: GlobalListTrainingConfigVersionsQueryParamProperties;
}

export type GlobalListTrainingConfigVersionsParameters =
  GlobalListTrainingConfigVersionsQueryParam & RequestParameters;
