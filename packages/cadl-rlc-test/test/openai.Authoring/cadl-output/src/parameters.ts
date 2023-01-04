// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Deployment, File, FileImport, FineTuneCreation } from "./models";

export type ListDeploymentsParameters = RequestParameters;

export interface CreateDeploymentBodyParam {
  body?: Deployment;
}

export type CreateDeploymentParameters = CreateDeploymentBodyParam &
  RequestParameters;
export type GetDeploymentParameters = RequestParameters;
export type DeploymentResourceMergeAndPatch = Partial<Deployment>;

export interface UpdateDeploymentBodyParam {
  body?: DeploymentResourceMergeAndPatch;
}

export interface UpdateDeploymentMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type UpdateDeploymentParameters = UpdateDeploymentMediaTypesParam &
  UpdateDeploymentBodyParam &
  RequestParameters;
export type DeleteDeploymentParameters = RequestParameters;
export type ListFilesParameters = RequestParameters;

export interface UploadFileBodyParam {
  body?: File;
}

export type UploadFileParameters = UploadFileBodyParam & RequestParameters;
export type GetFileParameters = RequestParameters;
export type DeleteFileParameters = RequestParameters;
export type GetFileContentParameters = RequestParameters;

export interface ImportFileBodyParam {
  /** expected schema for the body of the completion post request */
  body: FileImport;
}

export type ImportFileParameters = ImportFileBodyParam & RequestParameters;
export type ListFineTunesParameters = RequestParameters;

export interface CreateFineTuneBodyParam {
  body?: FineTuneCreation;
}

export type CreateFineTuneParameters = CreateFineTuneBodyParam &
  RequestParameters;
export type GetFineTuneParameters = RequestParameters;
export type DeleteFineTuneParameters = RequestParameters;

export interface ListFineTuneEventsQueryParamProperties {
  /**
   * A flag indicating whether to stream events for the fine-tune job. If set to true,
   * events will be sent as data-only server-sent events as they become available. The stream will terminate with
   * a data: [DONE] message when the job is finished (succeeded, cancelled, or failed).
   * If set to false, only events generated so far will be returned..
   */
  stream: boolean;
}

export interface ListFineTuneEventsQueryParam {
  queryParameters: ListFineTuneEventsQueryParamProperties;
}

export type ListFineTuneEventsParameters = ListFineTuneEventsQueryParam &
  RequestParameters;
export type CancelFineTuneParameters = RequestParameters;
export type ListModelsParameters = RequestParameters;
export type GetModelParameters = RequestParameters;
