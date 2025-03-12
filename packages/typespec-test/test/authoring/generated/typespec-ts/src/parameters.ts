// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type {
  Project,
  TrainingJobOptions,
  Deployment,
  SwapDeploymentsOptions,
} from "./models.js";

/** The details of a project. */
export type ProjectResourceMergeAndPatch = Partial<Project>;

export interface CreateOrUpdateBodyParam {
  /** The details of a project. */
  body: ProjectResourceMergeAndPatch;
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
export type ListProjectsParameters = RequestParameters;

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
  /** Training job parameters. */
  body: TrainingJobOptions;
}

export type TrainParameters = TrainBodyParam & RequestParameters;
export type GetDeploymentParameters = RequestParameters;

export interface DeployProjectBodyParam {
  /** The details of a project deployment. */
  body: Deployment;
}

export type DeployProjectParameters = DeployProjectBodyParam &
  RequestParameters;
export type DeleteDeploymentParameters = RequestParameters;
export type ListDeploymentsParameters = RequestParameters;

export interface SwapDeploymentsBodyParam {
  /** Swap deployment options. */
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
