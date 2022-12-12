// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Project, TrainingJobOptions, SwapDeploymentsOptions } from "./models";

export type ProjectResourceMergeAndPatch = Partial<Project>;

export interface CreateOrUpdateBodyParam {
  body?: ProjectResourceMergeAndPatch;
}

export interface CreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateParameters = CreateOrUpdateMediaTypesParam &
  CreateOrUpdateBodyParam &
  RequestParameters;
export type GetParameters = RequestParameters;
export type DeleteParameters = RequestParameters;

export interface ListProjectsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListProjectsQueryParam {
  queryParameters?: ListProjectsQueryParamProperties;
}

export type ListProjectsParameters = ListProjectsQueryParam & RequestParameters;

export interface ExportQueryParamProperties {
  /** The project file version. */
  projectFileVersion: string;
}

export interface ExportQueryParam {
  queryParameters: ExportQueryParamProperties;
}

export type ExportParameters = ExportQueryParam & RequestParameters;
export type ImportxParameters = RequestParameters;

export interface TrainBodyParam {
  /** The body of the request. */
  body: TrainingJobOptions;
}

export type TrainParameters = TrainBodyParam & RequestParameters;
export type GetDeploymentParameters = RequestParameters;
export type DeployProjectParameters = RequestParameters;
export type DeleteDeploymentParameters = RequestParameters;
export type ListDeploymentsParameters = RequestParameters;

export interface SwapDeploymentsBodyParam {
  /** The body schema of the operation. */
  body: SwapDeploymentsOptions;
}

export type SwapDeploymentsParameters = SwapDeploymentsBodyParam &
  RequestParameters;
export type GetDeploymentStatusParameters = RequestParameters;
export type GetSwapDeploymentsStatusParameters = RequestParameters;

export interface GetSupportedLanguagesQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface GetSupportedLanguagesQueryParam {
  queryParameters?: GetSupportedLanguagesQueryParamProperties;
}

export type GetSupportedLanguagesParameters = GetSupportedLanguagesQueryParam &
  RequestParameters;

export interface ListTrainingConfigVersionsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListTrainingConfigVersionsQueryParam {
  queryParameters?: ListTrainingConfigVersionsQueryParamProperties;
}

export type ListTrainingConfigVersionsParameters =
  ListTrainingConfigVersionsQueryParam & RequestParameters;
