// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FaceContext } from "../../api/FaceContext.js";
import {
  LivenessSessionCreationContent,
  LivenessSessionCreationResult,
  LivenessSession,
  LivenessSessionAuditEntry,
  LivenessSessionItem,
  LivenessWithVerifySessionCreationContent,
  LivenessWithVerifySession,
  LivenessWithVerifySessionAuditEntry,
} from "../../models/models.js";
import {
  createLivenessSession,
  getLivenessSession,
  deleteLivenessSession,
  listLivenessSessions,
  listLivenessSessionAuditEntries,
  createLivenessWithVerifySessionByJson,
  createLivenessWithVerifySessionByFormData,
  getLivenessWithVerifySession,
  deleteLivenessWithVerifySession,
  listLivenessWithVerifySessions,
  listLivenessWithVerifySessionAuditEntries,
} from "../../api/sessionClient/index.js";
import {
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
} from "../../models/options.js";

export interface SessionClientOperations {
  createLivenessSession: (
    body: LivenessSessionCreationContent,
    options?: SessionClientCreateLivenessSessionOptions,
  ) => Promise<LivenessSessionCreationResult>;
  getLivenessSession: (
    sessionId: string,
    options?: SessionClientGetLivenessSessionOptions,
  ) => Promise<LivenessSession>;
  deleteLivenessSession: (
    sessionId: string,
    options?: SessionClientDeleteLivenessSessionOptions,
  ) => Promise<void>;
  listLivenessSessions: (
    options?: SessionClientListLivenessSessionsOptions,
  ) => Promise<LivenessSessionItem[]>;
  listLivenessSessionAuditEntries: (
    sessionId: string,
    options?: SessionClientListLivenessSessionAuditEntriesOptions,
  ) => Promise<LivenessSessionAuditEntry[]>;
  createLivenessWithVerifySessionByJson: (
    body: LivenessSessionCreationContent,
    options?: SessionClientCreateLivenessWithVerifySessionByJsonOptions,
  ) => Promise<LivenessSessionCreationResult>;
  createLivenessWithVerifySessionByFormData: (
    body: LivenessWithVerifySessionCreationContent,
    options?: SessionClientCreateLivenessWithVerifySessionByFormDataOptions,
  ) => Promise<LivenessSessionCreationResult>;
  getLivenessWithVerifySession: (
    sessionId: string,
    options?: SessionClientGetLivenessWithVerifySessionOptions,
  ) => Promise<LivenessWithVerifySession>;
  deleteLivenessWithVerifySession: (
    sessionId: string,
    options?: SessionClientDeleteLivenessWithVerifySessionOptions,
  ) => Promise<void>;
  listLivenessWithVerifySessions: (
    options?: SessionClientListLivenessWithVerifySessionsOptions,
  ) => Promise<LivenessSessionItem[]>;
  listLivenessWithVerifySessionAuditEntries: (
    sessionId: string,
    options?: SessionClientListLivenessWithVerifySessionAuditEntriesOptions,
  ) => Promise<LivenessWithVerifySessionAuditEntry[]>;
}

export function getSessionClient(context: FaceContext) {
  return {
    createLivenessSession: (
      body: LivenessSessionCreationContent,
      options?: SessionClientCreateLivenessSessionOptions,
    ) => createLivenessSession(context, body, options),
    getLivenessSession: (
      sessionId: string,
      options?: SessionClientGetLivenessSessionOptions,
    ) => getLivenessSession(context, sessionId, options),
    deleteLivenessSession: (
      sessionId: string,
      options?: SessionClientDeleteLivenessSessionOptions,
    ) => deleteLivenessSession(context, sessionId, options),
    listLivenessSessions: (
      options?: SessionClientListLivenessSessionsOptions,
    ) => listLivenessSessions(context, options),
    listLivenessSessionAuditEntries: (
      sessionId: string,
      options?: SessionClientListLivenessSessionAuditEntriesOptions,
    ) => listLivenessSessionAuditEntries(context, sessionId, options),
    createLivenessWithVerifySessionByJson: (
      body: LivenessSessionCreationContent,
      options?: SessionClientCreateLivenessWithVerifySessionByJsonOptions,
    ) => createLivenessWithVerifySessionByJson(context, body, options),
    createLivenessWithVerifySessionByFormData: (
      body: LivenessWithVerifySessionCreationContent,
      options?: SessionClientCreateLivenessWithVerifySessionByFormDataOptions,
    ) => createLivenessWithVerifySessionByFormData(context, body, options),
    getLivenessWithVerifySession: (
      sessionId: string,
      options?: SessionClientGetLivenessWithVerifySessionOptions,
    ) => getLivenessWithVerifySession(context, sessionId, options),
    deleteLivenessWithVerifySession: (
      sessionId: string,
      options?: SessionClientDeleteLivenessWithVerifySessionOptions,
    ) => deleteLivenessWithVerifySession(context, sessionId, options),
    listLivenessWithVerifySessions: (
      options?: SessionClientListLivenessWithVerifySessionsOptions,
    ) => listLivenessWithVerifySessions(context, options),
    listLivenessWithVerifySessionAuditEntries: (
      sessionId: string,
      options?: SessionClientListLivenessWithVerifySessionAuditEntriesOptions,
    ) => listLivenessWithVerifySessionAuditEntries(context, sessionId, options),
  };
}

export function getSessionClientOperations(
  context: FaceContext,
): SessionClientOperations {
  return {
    ...getSessionClient(context),
  };
}
