// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { JobResultOutput } from "./outputModels";

/** The request has succeeded. */
export interface GetJob200Response extends HttpResponse {
  status: "200";
  body: JobResultOutput;
}

export interface GetJobDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetJobDefaultHeaders;
}

export interface CreateJob202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface CreateJob202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CreateJob202Headers;
}

export interface CreateJobDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateJobDefaultHeaders;
}

/** The final response for long-running createJob operation */
export interface CreateJobLogicalResponse extends HttpResponse {
  status: "200";
}
