// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import {
  HttpResponse,
  LongRunningOperationLocationHeaders,
  ErrorResponse,
} from "@azure-rest/core-client";
import {
  ProjectOutput,
  OperationStatusOutput,
  ProjectListOutput,
  DeploymentOutput,
  DeploymentListOutput,
  DeploymentJobOutput,
  SwapDeploymentsJobOutput,
  PagedSupportedLanguageOutput,
  PagedTrainingConfigVersionOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface CreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ProjectOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface CreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Delete202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface DeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ListProjects200Response extends HttpResponse {
  status: "200";
  body: ProjectListOutput;
}

export interface ListProjectsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Export202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface ExportDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Importx202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface ImportxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Train202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface TrainDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GetDeployment200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

export interface GetDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DeployProject200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DeployProject201Response extends HttpResponse {
  status: "201";
  body: DeploymentOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface DeployProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeleteDeployment202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface DeleteDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ListDeployments200Response extends HttpResponse {
  status: "200";
  body: DeploymentListOutput;
}

export interface ListDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface SwapDeployments202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface SwapDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GetDeploymentStatus200Response extends HttpResponse {
  status: "200";
  body: DeploymentJobOutput;
}

export interface GetDeploymentStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GetSwapDeploymentsStatus200Response extends HttpResponse {
  status: "200";
  body: SwapDeploymentsJobOutput;
}

export interface GetSwapDeploymentsStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GetSupportedLanguages200Response extends HttpResponse {
  status: "200";
  body: PagedSupportedLanguageOutput;
}

export interface GetSupportedLanguagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ListTrainingConfigVersions200Response extends HttpResponse {
  status: "200";
  body: PagedTrainingConfigVersionOutput;
}

export interface ListTrainingConfigVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
