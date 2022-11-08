import { RequestParameters } from "@azure-rest/core-client";
import { Project, TrainingJobOptions, SwapDeploymentsOptions } from "./models";

export type ProjectResourceMergeAndPatch = Partial<Project>;

export interface ProjectsCreateOrUpdateBodyParam {
  body?: ProjectResourceMergeAndPatch;
}

export interface ProjectsCreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type ProjectsCreateOrUpdateParameters =
  ProjectsCreateOrUpdateMediaTypesParam &
    ProjectsCreateOrUpdateBodyParam &
    RequestParameters;
export type ProjectsGetParameters = RequestParameters;
export type ProjectsDeleteParameters = RequestParameters;

export interface ProjectsListQueryParamProperties {
  top?: number;
  skip?: number;
  maxpagesize?: number;
}

export interface ProjectsListQueryParam {
  queryParameters?: ProjectsListQueryParamProperties;
}

export type ProjectsListParameters = ProjectsListQueryParam & RequestParameters;

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
export type DeploymentsGetDeploymentParameters = RequestParameters;
export type DeploymentsDeployProjectParameters = RequestParameters;
export type DeploymentsDeleteDeploymentParameters = RequestParameters;
export type DeploymentsListParameters = RequestParameters;

export interface DeploymentsSwapDeploymentsBodyParam {
  /** The body schema of the operation. */
  body: SwapDeploymentsOptions;
}

export type DeploymentsSwapDeploymentsParameters =
  DeploymentsSwapDeploymentsBodyParam & RequestParameters;
export type JobsGetDeploymentStatusParameters = RequestParameters;
export type JobsGetSwapDeploymentsStatusParameters = RequestParameters;

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
