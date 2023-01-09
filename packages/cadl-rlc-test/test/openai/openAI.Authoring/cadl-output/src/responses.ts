// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  DeploymentListOutput,
  ErrorResponseOutput,
  CustomResponseFieldsOutput,
  DeploymentOutput,
  FileListOutput,
  FileOutput,
  FileContentOutput,
  FineTuneListOutput,
  FineTuneOutput,
  EventListOutput,
  ModelListOutput,
  ModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface ListDeployments200Response extends HttpResponse {
  status: "200";
  body: DeploymentListOutput;
}

export interface ListDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CreateDeployment201Headers {
  location: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateDeployment201Response extends HttpResponse {
  status: "201";
  body: CustomResponseFieldsOutput;
  headers: RawHttpHeaders & CreateDeployment201Headers;
}

export interface CreateDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetDeployment200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

export interface GetDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface UpdateDeployment200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface UpdateDeployment201Response extends HttpResponse {
  status: "201";
  body: DeploymentOutput;
}

export interface UpdateDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteDeployment204Response extends HttpResponse {
  status: "204";
}

export interface DeleteDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListFiles200Response extends HttpResponse {
  status: "200";
  body: FileListOutput;
}

export interface ListFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface UploadFile201Headers {
  location: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface UploadFile201Response extends HttpResponse {
  status: "201";
  body: CustomResponseFieldsOutput;
  headers: RawHttpHeaders & UploadFile201Headers;
}

export interface UploadFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetFile200Response extends HttpResponse {
  status: "200";
  body: FileOutput;
}

export interface GetFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteFile204Response extends HttpResponse {
  status: "204";
}

export interface DeleteFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetFileContent200Response extends HttpResponse {
  status: "200";
  body: FileContentOutput;
}

export interface GetFileContentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ImportFile201Headers {
  /** Location of the newly created item */
  location: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ImportFile201Response extends HttpResponse {
  status: "201";
  body: FileOutput;
  headers: RawHttpHeaders & ImportFile201Headers;
}

export interface ImportFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListFineTunes200Response extends HttpResponse {
  status: "200";
  body: FineTuneListOutput;
}

export interface ListFineTunesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CreateFineTune201Headers {
  /** Location of the newly created item */
  location: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateFineTune201Response extends HttpResponse {
  status: "201";
  body: FineTuneOutput;
  headers: RawHttpHeaders & CreateFineTune201Headers;
}

export interface CreateFineTuneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetFineTune200Response extends HttpResponse {
  status: "200";
  body: FineTuneOutput;
}

export interface GetFineTuneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteFineTune204Response extends HttpResponse {
  status: "204";
}

export interface DeleteFineTuneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListFineTuneEvents200Response extends HttpResponse {
  status: "200";
  body: EventListOutput;
}

export interface ListFineTuneEventsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CancelFineTune200Response extends HttpResponse {
  status: "200";
  body: FineTuneOutput;
}

export interface CancelFineTuneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListModels200Response extends HttpResponse {
  status: "200";
  body: ModelListOutput;
}

export interface ListModelsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: ModelOutput;
}

export interface GetModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
