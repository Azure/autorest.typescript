// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { JobResultOutput, JobPollResultOutput } from "./outputModels";

/** The request has succeeded. */
export interface CreateJob200Response extends HttpResponse {
  status: "200";
  body: JobResultOutput;
}

export interface CreateJob202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
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

/** The final response for long-running getJob operation */
export interface GetJobLogicalResponse extends HttpResponse {
  status: "200";
  body: JobResultOutput;
}

/** The request has succeeded. */
export interface CreateJobFinalOnLocation200Response extends HttpResponse {
  status: "200";
  body: JobResultOutput;
}

export interface CreateJobFinalOnLocation202Headers {
  /** The location for final resource location. */
  location: string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface CreateJobFinalOnLocation202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CreateJobFinalOnLocation202Headers;
}

export interface CreateJobFinalOnLocationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateJobFinalOnLocationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateJobFinalOnLocationDefaultHeaders;
}

/** The final response for long-running createJobFinalOnLocation operation */
export interface CreateJobFinalOnLocationLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetPoll200Response extends HttpResponse {
  status: "200";
  body: JobPollResultOutput;
}

export interface GetPollDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetPollDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetPollDefaultHeaders;
}

/** The final response for long-running getPoll operation */
export interface GetPollLogicalResponse extends HttpResponse {
  status: "200";
  body: JobPollResultOutput;
}
