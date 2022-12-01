// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ProjectOutput,
  ErrorResponseOutput,
  OperationStatusOutput,
  ProjectListOutput,
  DeploymentOutput,
  DeploymentListOutput,
  DeploymentJobOutput,
  SwapDeploymentsJobOutput,
  PagedSupportedLanguageOutput,
  PagedTrainingConfigVersionOutput,
} from "./outputModels";

export interface CreateOrUpdate200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface CreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
  headers: RawHttpHeaders & CreateOrUpdate200Headers;
}

export interface CreateOrUpdate201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ProjectOutput;
  headers: RawHttpHeaders & CreateOrUpdate201Headers;
}

export interface CreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface Delete202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Delete202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & Delete202Headers;
}

export interface DeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListProjects200Response extends HttpResponse {
  status: "200";
  body: ProjectListOutput;
}

export interface ListProjectsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface Export202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Export202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & Export202Headers;
}

export interface ExportDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface Importx202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Importx202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & Importx202Headers;
}

export interface ImportxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface Train202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Train202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & Train202Headers;
}

export interface TrainDefaultResponse extends HttpResponse {
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

export interface DeployProject200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface DeployProject200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
  headers: RawHttpHeaders & DeployProject200Headers;
}

export interface DeployProject201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DeployProject201Response extends HttpResponse {
  status: "201";
  body: DeploymentOutput;
  headers: RawHttpHeaders & DeployProject201Headers;
}

export interface DeployProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface DeleteDeployment202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeleteDeployment202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & DeleteDeployment202Headers;
}

export interface DeleteDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListDeployments200Response extends HttpResponse {
  status: "200";
  body: DeploymentListOutput;
}

export interface ListDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface SwapDeployments202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface SwapDeployments202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & SwapDeployments202Headers;
}

export interface SwapDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetDeploymentStatus200Response extends HttpResponse {
  status: "200";
  body: DeploymentJobOutput;
}

export interface GetDeploymentStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetSwapDeploymentsStatus200Response extends HttpResponse {
  status: "200";
  body: SwapDeploymentsJobOutput;
}

export interface GetSwapDeploymentsStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetSupportedLanguages200Response extends HttpResponse {
  status: "200";
  body: PagedSupportedLanguageOutput;
}

export interface GetSupportedLanguagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListTrainingConfigVersions200Response extends HttpResponse {
  status: "200";
  body: PagedTrainingConfigVersionOutput;
}

export interface ListTrainingConfigVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
