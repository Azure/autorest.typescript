// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Response of liveness session creation. */
export interface LivenessSessionCreationResultOutput {
  /** Unique ID to reference this session. */
  sessionId: string;
  /** Authorization token for use by the client application */
  authToken: string;
}

/** The ApiVersion path parameter. */
export interface ApiVersionPathParameterOutput {}

/** The request for list resources. */
export interface ListRequestOptionsOutput {}

/** Session result of detect liveness. */
export interface LivenessSessionOutput {
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
  /** Unique ID to reference this session. */
  readonly id: string;
  /** Session creation time in millisecond from epoch. */
  createdDateTime: string;
  /** Session started time from session auth token. */
  sessionStartDateTime?: string;
  /** Whether or not the session is expired. */
  sessionExpired: boolean;
  /**
   * The session status.
   *
   * Possible values: "NotStarted", "Started", "ResultAvailable"
   */
  status: string;
  /** The last result of session. */
  result?: LivenessSessionAuditEntryOutput;
}

/** Audit entry for a request in session. */
export interface LivenessSessionAuditEntryOutput {
  /** ID of this audit entry. */
  readonly id: number;
  /** Session ID of this audit entry. */
  sessionId: string;
  /** Request ID in the request header. */
  requestId: string;
  /** Client request ID in the request header. */
  clientRequestId: string;
  /** The UTC date time of the request. */
  receivedDateTime: string;
  /** The request of this entry. */
  request: SessionAuditEntryRequestInfoOutput;
  /** The response of this entry. */
  response: SessionAuditEntryResponseInfoOutput;
  /** The digest of the request body. */
  digest: string;
}

/** Audit entry for a request in the session. */
export interface SessionAuditEntryRequestInfoOutput {
  /** The URL of the request. */
  url: string;
  /** The HTTP method of the request. */
  method: string;
  /** The length of the request body in bytes. */
  contentLength?: number;
  /** The content type of the request. */
  contentType: string;
  /** The user agent of the request. */
  userAgent?: string;
}

/** Audit entry for a response in the session. */
export interface SessionAuditEntryResponseInfoOutput {
  /** The response body. */
  body: Record<string, any>;
  /** The HTTP status code of the request. */
  statusCode: number;
  /** The latency of the request. */
  latencyInMilliseconds: number;
}

/** Session data returned for enumeration. */
export interface LivenessSessionItemOutput {
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
  /** Unique ID to reference this session. */
  readonly id: string;
  /** Session creation time in millisecond from epoch. */
  createdDateTime: string;
  /** Session started time from session auth token. */
  sessionStartDateTime?: string;
  /** Whether or not the session is expired. */
  sessionExpired: boolean;
}

/** Session result of detect liveness with verify. */
export interface LivenessWithVerifySessionOutput {
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
  /** Unique ID to reference this session. */
  readonly id: string;
  /** Session creation time in millisecond from epoch. */
  createdDateTime: string;
  /** Session started time from session auth token. */
  sessionStartDateTime?: string;
  /** Whether or not the session is expired. */
  sessionExpired: boolean;
  /**
   * The session status.
   *
   * Possible values: "NotStarted", "Started", "ResultAvailable"
   */
  status: string;
  /** The last result of session. */
  result?: LivenessWithVerifySessionAuditEntryOutput;
}

/** Audit entry for a request in session. */
export interface LivenessWithVerifySessionAuditEntryOutput {
  /** ID of this audit entry. */
  readonly id: number;
  /** Session ID of this audit entry. */
  sessionId: string;
  /** Request ID in the request header. */
  requestId: string;
  /** Client request ID in the request header. */
  clientRequestId: string;
  /** The UTC date time of the request. */
  receivedDateTime: string;
  /** The request of this entry. */
  request: SessionAuditEntryRequestInfoOutput;
  /** The response of this entry. */
  response: SessionAuditEntryResponseInfoOutput;
  /** The digest of the request body. */
  digest: string;
}
