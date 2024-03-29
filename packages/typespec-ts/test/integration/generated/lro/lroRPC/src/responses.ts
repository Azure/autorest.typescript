// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { ResourceOperationStatusOutput } from "./outputModels.js";

export interface LongRunningRpc202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface LongRunningRpc202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
  headers: RawHttpHeaders & LongRunningRpc202Headers;
}

export interface LongRunningRpcDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LongRunningRpcDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LongRunningRpcDefaultHeaders;
}

/** The final response for long-running longRunningRpc operation */
export interface LongRunningRpcLogicalResponse extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}
