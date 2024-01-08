// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  LivenessSessionCreationResultOutput,
  LivenessSessionOutput,
  LivenessSessionItemOutput,
  LivenessSessionAuditEntryOutput,
  LivenessWithVerifySessionOutput,
  LivenessWithVerifySessionAuditEntryOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface CreateLivenessSession200Response extends HttpResponse {
  status: "200";
  body: LivenessSessionCreationResultOutput;
}

export interface CreateLivenessSessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateLivenessSessionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateLivenessSessionDefaultHeaders;
}

/** The request has succeeded. */
export interface GetLivenessSession200Response extends HttpResponse {
  status: "200";
  body: LivenessSessionOutput;
}

export interface GetLivenessSessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetLivenessSessionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetLivenessSessionDefaultHeaders;
}

/** The request has succeeded. */
export interface DeleteLivenessSession200Response extends HttpResponse {
  status: "200";
}

export interface DeleteLivenessSessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteLivenessSessionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteLivenessSessionDefaultHeaders;
}

/** The request has succeeded. */
export interface ListLivenessSessions200Response extends HttpResponse {
  status: "200";
  body: Array<LivenessSessionItemOutput>;
}

export interface ListLivenessSessionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListLivenessSessionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListLivenessSessionsDefaultHeaders;
}

/** The request has succeeded. */
export interface ListLivenessSessionAuditEntries200Response
  extends HttpResponse {
  status: "200";
  body: Array<LivenessSessionAuditEntryOutput>;
}

export interface ListLivenessSessionAuditEntriesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListLivenessSessionAuditEntriesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListLivenessSessionAuditEntriesDefaultHeaders;
}

/** The request has succeeded. */
export interface CreateLivenessWithVerifySessionByJson200Response
  extends HttpResponse {
  status: "200";
  body: LivenessSessionCreationResultOutput;
}

export interface CreateLivenessWithVerifySessionByJsonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateLivenessWithVerifySessionByJsonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateLivenessWithVerifySessionByJsonDefaultHeaders;
}

/** The request has succeeded. */
export interface CreateLivenessWithVerifySessionByFormData200Response
  extends HttpResponse {
  status: "200";
  body: LivenessSessionCreationResultOutput;
}

export interface CreateLivenessWithVerifySessionByFormDataDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateLivenessWithVerifySessionByFormDataDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    CreateLivenessWithVerifySessionByFormDataDefaultHeaders;
}

/** The request has succeeded. */
export interface GetLivenessWithVerifySession200Response extends HttpResponse {
  status: "200";
  body: LivenessWithVerifySessionOutput;
}

export interface GetLivenessWithVerifySessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetLivenessWithVerifySessionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetLivenessWithVerifySessionDefaultHeaders;
}

/** The request has succeeded. */
export interface DeleteLivenessWithVerifySession200Response
  extends HttpResponse {
  status: "200";
}

export interface DeleteLivenessWithVerifySessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteLivenessWithVerifySessionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteLivenessWithVerifySessionDefaultHeaders;
}

/** The request has succeeded. */
export interface ListLivenessWithVerifySessions200Response
  extends HttpResponse {
  status: "200";
  body: Array<LivenessSessionItemOutput>;
}

export interface ListLivenessWithVerifySessionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListLivenessWithVerifySessionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListLivenessWithVerifySessionsDefaultHeaders;
}

/** The request has succeeded. */
export interface ListLivenessWithVerifySessionAuditEntries200Response
  extends HttpResponse {
  status: "200";
  body: Array<LivenessWithVerifySessionAuditEntryOutput>;
}

export interface ListLivenessWithVerifySessionAuditEntriesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListLivenessWithVerifySessionAuditEntriesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ListLivenessWithVerifySessionAuditEntriesDefaultHeaders;
}
