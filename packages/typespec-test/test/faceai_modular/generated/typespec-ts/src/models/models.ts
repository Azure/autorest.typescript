// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Data for creating liveness session. */
export interface LivenessSessionCreationContent {
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
}

/** Response of liveness session creation. */
export interface LivenessSessionCreationResult {
  /** Unique ID to reference this session. */
  sessionId: string;
  /** Authorization token for use by the client application */
  authToken: string;
}

/** Session result of detect liveness. */
export interface LivenessSession {
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
  /** Unique ID to reference this session. */
  readonly id: string;
  /** Session creation time in millisecond from epoch. */
  createdDateTime: Date;
  /** Session started time from session auth token. */
  sessionStartDateTime?: Date;
  /** Whether or not the session is expired. */
  sessionExpired: boolean;
  /** The session status. */
  status: SessionStatus;
  /** The last result of session. */
  result?: LivenessSessionAuditEntry;
}

/** Session status. */
/** "NotStarted", "Started", "ResultAvailable" */
export type SessionStatus = string;

/** Audit entry for a request in session. */
export interface LivenessSessionAuditEntry {
  /** ID of this audit entry. */
  readonly id: number;
  /** Session ID of this audit entry. */
  sessionId: string;
  /** Request ID in the request header. */
  requestId: string;
  /** Client request ID in the request header. */
  clientRequestId: string;
  /** The UTC date time of the request. */
  receivedDateTime: Date;
  /** The request of this entry. */
  request: SessionAuditEntryRequestInfo;
  /** The response of this entry. */
  response: SessionAuditEntryResponseInfo;
  /** The digest of the request body. */
  digest: string;
}

/** Audit entry for a request in the session. */
export interface SessionAuditEntryRequestInfo {
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
export interface SessionAuditEntryResponseInfo {
  /** The response body. */
  body: Record<string, unknown>;
  /** The HTTP status code of the request. */
  statusCode: number;
  /** The latency of the request. */
  latencyInMilliseconds: number;
}

/** Session data returned for enumeration. */
export interface LivenessSessionItem {
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
  /** Unique ID to reference this session. */
  readonly id: string;
  /** Session creation time in millisecond from epoch. */
  createdDateTime: Date;
  /** Session started time from session auth token. */
  sessionStartDateTime?: Date;
  /** Whether or not the session is expired. */
  sessionExpired: boolean;
}

/** Request of liveness with verify session creation. */
export interface LivenessWithVerifySessionCreationContent {
  /** The json for creating liveness session. */
  parameters: LivenessSessionCreationContent;
  /** The image stream for verify. */
  verifyImage: Uint8Array;
}

/** Session result of detect liveness with verify. */
export interface LivenessWithVerifySession {
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
  /** Unique ID to reference this session. */
  readonly id: string;
  /** Session creation time in millisecond from epoch. */
  createdDateTime: Date;
  /** Session started time from session auth token. */
  sessionStartDateTime?: Date;
  /** Whether or not the session is expired. */
  sessionExpired: boolean;
  /** The session status. */
  status: SessionStatus;
  /** The last result of session. */
  result?: LivenessWithVerifySessionAuditEntry;
}

/** Audit entry for a request in session. */
export interface LivenessWithVerifySessionAuditEntry {
  /** ID of this audit entry. */
  readonly id: number;
  /** Session ID of this audit entry. */
  sessionId: string;
  /** Request ID in the request header. */
  requestId: string;
  /** Client request ID in the request header. */
  clientRequestId: string;
  /** The UTC date time of the request. */
  receivedDateTime: Date;
  /** The request of this entry. */
  request: SessionAuditEntryRequestInfo;
  /** The response of this entry. */
  response: SessionAuditEntryResponseInfo;
  /** The digest of the request body. */
  digest: string;
}
