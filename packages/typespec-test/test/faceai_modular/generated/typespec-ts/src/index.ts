// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { FaceClient, FaceClientOptions } from "./FaceClient.js";
export {
  LivenessSessionCreationContent,
  LivenessSessionCreationResult,
  LivenessSession,
  SessionStatus,
  LivenessSessionAuditEntry,
  SessionAuditEntryRequestInfo,
  SessionAuditEntryResponseInfo,
  LivenessSessionItem,
  LivenessWithVerifySessionCreationContent,
  LivenessWithVerifySession,
  LivenessWithVerifySessionAuditEntry,
  SessionClientCreateLivenessSessionOptions,
  SessionClientGetLivenessSessionOptions,
  SessionClientDeleteLivenessSessionOptions,
  SessionClientListLivenessSessionsOptions,
  SessionClientListLivenessSessionAuditEntriesOptions,
  SessionClientCreateLivenessWithVerifySessionByJsonOptions,
  SessionClientCreateLivenessWithVerifySessionByFormDataOptions,
  SessionClientGetLivenessWithVerifySessionOptions,
  SessionClientDeleteLivenessWithVerifySessionOptions,
  SessionClientListLivenessWithVerifySessionsOptions,
  SessionClientListLivenessWithVerifySessionAuditEntriesOptions,
} from "./models/index.js";
export { SessionClientOperations } from "./classic/index.js";
