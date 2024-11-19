// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { DeploymentOutput } from "./outputModels.js";

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

/** The request has succeeded. */
export interface DeployProject200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
}

/** A Deployment resource was successfully created. */
export interface DeployProject201Response extends HttpResponse {
  status: "201";
  body: DeploymentOutput;
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
