// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  Project,
  TrainingJobOptions,
  Deployment,
  SwapDeploymentsOptions,
} from "./models";

/** The resource instance. */
export type ProjectResourceMergeAndPatch = Partial<Project>;

export interface CreateOrUpdateBodyParam {
  /** The resource instance. */
  body: ProjectResourceMergeAndPatch;
}

export interface CreateOrUpdateQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface CreateOrUpdateQueryParam {
  queryParameters: CreateOrUpdateQueryParamProperties;
}

export interface CreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateParameters = CreateOrUpdateQueryParam &
  CreateOrUpdateMediaTypesParam &
  CreateOrUpdateBodyParam &
  RequestParameters;

export interface GetQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetQueryParam {
  queryParameters: GetQueryParamProperties;
}

export type GetParameters = GetQueryParam & RequestParameters;

export interface DeleteQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeleteQueryParam {
  queryParameters: DeleteQueryParamProperties;
}

export type DeleteParameters = DeleteQueryParam & RequestParameters;

export interface ListProjectsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ListProjectsQueryParam {
  queryParameters: ListProjectsQueryParamProperties;
}

export type ListProjectsParameters = ListProjectsQueryParam & RequestParameters;

export interface ExportQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The project file version. */
  projectFileVersion: string;
}

export interface ExportQueryParam {
  queryParameters: ExportQueryParamProperties;
}

export type ExportParameters = ExportQueryParam & RequestParameters;

export interface ImportxQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ImportxQueryParam {
  queryParameters: ImportxQueryParamProperties;
}

export type ImportxParameters = ImportxQueryParam & RequestParameters;

export interface TrainBodyParam {
  /** The body of the request. */
  body: TrainingJobOptions;
}

export interface TrainQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface TrainQueryParam {
  queryParameters: TrainQueryParamProperties;
}

export type TrainParameters = TrainQueryParam &
  TrainBodyParam &
  RequestParameters;

export interface GetDeploymentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetDeploymentQueryParam {
  queryParameters: GetDeploymentQueryParamProperties;
}

export type GetDeploymentParameters = GetDeploymentQueryParam &
  RequestParameters;

export interface DeployProjectBodyParam {
  /** The resource instance. */
  body: Deployment;
}

export interface DeployProjectQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeployProjectQueryParam {
  queryParameters: DeployProjectQueryParamProperties;
}

export type DeployProjectParameters = DeployProjectQueryParam &
  DeployProjectBodyParam &
  RequestParameters;

export interface DeleteDeploymentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeleteDeploymentQueryParam {
  queryParameters: DeleteDeploymentQueryParamProperties;
}

export type DeleteDeploymentParameters = DeleteDeploymentQueryParam &
  RequestParameters;

export interface ListDeploymentsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ListDeploymentsQueryParam {
  queryParameters: ListDeploymentsQueryParamProperties;
}

export type ListDeploymentsParameters = ListDeploymentsQueryParam &
  RequestParameters;

export interface SwapDeploymentsBodyParam {
  /** The body schema of the operation. */
  body: SwapDeploymentsOptions;
}

export interface SwapDeploymentsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface SwapDeploymentsQueryParam {
  queryParameters: SwapDeploymentsQueryParamProperties;
}

export type SwapDeploymentsParameters = SwapDeploymentsQueryParam &
  SwapDeploymentsBodyParam &
  RequestParameters;

export interface GetDeploymentStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetDeploymentStatusQueryParam {
  queryParameters: GetDeploymentStatusQueryParamProperties;
}

export type GetDeploymentStatusParameters = GetDeploymentStatusQueryParam &
  RequestParameters;

export interface GetSwapDeploymentsStatusQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetSwapDeploymentsStatusQueryParam {
  queryParameters: GetSwapDeploymentsStatusQueryParamProperties;
}

export type GetSwapDeploymentsStatusParameters =
  GetSwapDeploymentsStatusQueryParam & RequestParameters;

export interface GetSupportedLanguagesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface GetSupportedLanguagesQueryParam {
  queryParameters: GetSupportedLanguagesQueryParamProperties;
}

export type GetSupportedLanguagesParameters = GetSupportedLanguagesQueryParam &
  RequestParameters;

export interface ListTrainingConfigVersionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListTrainingConfigVersionsQueryParam {
  queryParameters: ListTrainingConfigVersionsQueryParamProperties;
}

export type ListTrainingConfigVersionsParameters =
  ListTrainingConfigVersionsQueryParam & RequestParameters;
