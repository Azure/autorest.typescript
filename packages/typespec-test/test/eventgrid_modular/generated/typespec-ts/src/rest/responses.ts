// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  ReceiveResponseOutput,
  LockTokensResponseOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface PublishCloudEvent200Response extends HttpResponse {
  status: "200";
}

export interface PublishCloudEventDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PublishCloudEventDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PublishCloudEventDefaultHeaders;
}

/** The request has succeeded. */
export interface PublishBatchOfCloudEvents200Response extends HttpResponse {
  status: "200";
}

export interface PublishBatchOfCloudEventsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PublishBatchOfCloudEventsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PublishBatchOfCloudEventsDefaultHeaders;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ReceiveBatchOfCloudEvents201Response extends HttpResponse {
  status: "201";
  body: ReceiveResponseOutput;
}

export interface ReceiveBatchOfCloudEventsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ReceiveBatchOfCloudEventsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ReceiveBatchOfCloudEventsDefaultHeaders;
}

/** The request has succeeded. */
export interface AcknowledgeBatchOfCloudEvents200Response extends HttpResponse {
  status: "200";
  body: LockTokensResponseOutput;
}

export interface AcknowledgeBatchOfCloudEventsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AcknowledgeBatchOfCloudEventsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AcknowledgeBatchOfCloudEventsDefaultHeaders;
}

/** The request has succeeded. */
export interface ReleaseBatchOfCloudEvents200Response extends HttpResponse {
  status: "200";
  body: LockTokensResponseOutput;
}

export interface ReleaseBatchOfCloudEventsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ReleaseBatchOfCloudEventsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ReleaseBatchOfCloudEventsDefaultHeaders;
}
