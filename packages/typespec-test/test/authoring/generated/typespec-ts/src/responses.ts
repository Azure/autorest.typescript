// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
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

export interface CreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrUpdateDefaultHeaders;
}

/** The final response for long-running createOrUpdate operation */
export interface CreateOrUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: ProjectOutput;
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
}

export interface GetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDefaultHeaders;
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

export interface DeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteDefaultHeaders;
}

/** The final response for long-running delete operation */
export interface DeleteLogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

/** The request has succeeded. */
export interface ListProjects200Response extends HttpResponse {
  status: "200";
  body: ProjectListOutput;
}

export interface ListProjectsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListProjectsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListProjectsDefaultHeaders;
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

export interface ExportDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExportDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExportDefaultHeaders;
}

/** The final response for long-running export operation */
export interface ExportLogicalResponse extends HttpResponse {
  status: "200";
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

export interface ImportxDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ImportxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ImportxDefaultHeaders;
}

/** The final response for long-running importx operation */
export interface ImportxLogicalResponse extends HttpResponse {
  status: "200";
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

export interface TrainDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TrainDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TrainDefaultHeaders;
}

/** The final response for long-running train operation */
export interface TrainLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetDeployment200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

export interface GetDeploymentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDeploymentDefaultHeaders;
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

export interface DeployProjectDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeployProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeployProjectDefaultHeaders;
}

/** The final response for long-running deployProject operation */
export interface DeployProjectLogicalResponse extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
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

export interface DeleteDeploymentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteDeploymentDefaultHeaders;
}

/** The final response for long-running deleteDeployment operation */
export interface DeleteDeploymentLogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

/** The request has succeeded. */
export interface ListDeployments200Response extends HttpResponse {
  status: "200";
  body: DeploymentListOutput;
}

export interface ListDeploymentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListDeploymentsDefaultHeaders;
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

export interface SwapDeploymentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SwapDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SwapDeploymentsDefaultHeaders;
}

/** The final response for long-running swapDeployments operation */
export interface SwapDeploymentsLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetDeploymentStatus200Response extends HttpResponse {
  status: "200";
  body: DeploymentJobOutput;
}

export interface GetDeploymentStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDeploymentStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDeploymentStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface GetSwapDeploymentsStatus200Response extends HttpResponse {
  status: "200";
  body: SwapDeploymentsJobOutput;
}

export interface GetSwapDeploymentsStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetSwapDeploymentsStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetSwapDeploymentsStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface GetSupportedLanguages200Response extends HttpResponse {
  status: "200";
  body: PagedSupportedLanguageOutput;
}

export interface GetSupportedLanguagesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetSupportedLanguagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetSupportedLanguagesDefaultHeaders;
}

/** The request has succeeded. */
export interface ListTrainingConfigVersions200Response extends HttpResponse {
  status: "200";
  body: PagedTrainingConfigVersionOutput;
}

export interface ListTrainingConfigVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListTrainingConfigVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListTrainingConfigVersionsDefaultHeaders;
}
