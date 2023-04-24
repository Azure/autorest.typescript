// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  UserOutput,
  OperationStatusOutput,
  ResourceOperationStatusOutput,
} from "./outputModels";

export interface CreateOrReplace200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface CreateOrReplace200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
  headers: RawHttpHeaders & CreateOrReplace200Headers;
}

export interface CreateOrReplace201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrReplace201Response extends HttpResponse {
  status: "201";
  body: UserOutput;
  headers: RawHttpHeaders & CreateOrReplace201Headers;
}

export interface CreateOrReplaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrReplaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrReplaceDefaultHeaders;
}

/** The final response for long-running createOrReplace operation */
export interface CreateOrReplaceLogicalResponse extends HttpResponse {
  status: "200";
  body: UserOutput;
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

export interface Export202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Export202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
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
  body: ResourceOperationStatusOutput;
}
