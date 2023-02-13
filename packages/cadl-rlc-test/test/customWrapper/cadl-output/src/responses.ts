// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import { DeploymentOutput, ErrorResponseOutput } from "./outputModels";

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
  body: ErrorResponseOutput;
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
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & DeployProjectDefaultHeaders;
}
