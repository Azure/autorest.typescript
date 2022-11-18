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
export interface ProjectsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ProjectsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ProjectOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface ProjectsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ProjectsGet200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
}

export interface ProjectsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ProjectsDelete202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface ProjectsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface ProjectsList200Response extends HttpResponse {
  status: "200";
  body: ProjectListOutput;
}

export interface ProjectsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ProjectsExport202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface ProjectsExportDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ProjectsImportx202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface ProjectsImportxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ProjectsTrain202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface ProjectsTrainDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DeploymentsGetDeployment200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

export interface DeploymentsGetDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DeploymentsDeployProject200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DeploymentsDeployProject201Response extends HttpResponse {
  status: "201";
  body: DeploymentOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface DeploymentsDeployProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeploymentsDeleteDeployment202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface DeploymentsDeleteDeploymentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface DeploymentsList200Response extends HttpResponse {
  status: "200";
  body: DeploymentListOutput;
}

export interface DeploymentsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeploymentsSwapDeployments202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LongRunningOperationLocationHeaders;
}

export interface DeploymentsSwapDeploymentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface JobsGetDeploymentStatus200Response extends HttpResponse {
  status: "200";
  body: DeploymentJobOutput;
}

export interface JobsGetDeploymentStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface JobsGetSwapDeploymentsStatus200Response extends HttpResponse {
  status: "200";
  body: SwapDeploymentsJobOutput;
}

export interface JobsGetSwapDeploymentsStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GlobalGetSupportedLanguages200Response extends HttpResponse {
  status: "200";
  body: PagedSupportedLanguageOutput;
}

export interface GlobalGetSupportedLanguagesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GlobalListTrainingConfigVersions200Response
  extends HttpResponse {
  status: "200";
  body: PagedTrainingConfigVersionOutput;
}

export interface GlobalListTrainingConfigVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
