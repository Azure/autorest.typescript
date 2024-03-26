import { FaceContext } from "../../api/FaceContext.js";
import { LivenessSessionCreationContent, LivenessSessionCreationResult, LivenessSession, LivenessSessionAuditEntry, LivenessSessionItem, LivenessWithVerifySessionCreationContent, LivenessWithVerifySession, LivenessWithVerifySessionAuditEntry } from "../../models/models.js";
import { SessionClientCreateLivenessSessionOptions, SessionClientGetLivenessSessionOptions, SessionClientDeleteLivenessSessionOptions, SessionClientListLivenessSessionsOptions, SessionClientListLivenessSessionAuditEntriesOptions, SessionClientCreateLivenessWithVerifySessionByJsonOptions, SessionClientCreateLivenessWithVerifySessionByFormDataOptions, SessionClientGetLivenessWithVerifySessionOptions, SessionClientDeleteLivenessWithVerifySessionOptions, SessionClientListLivenessWithVerifySessionsOptions, SessionClientListLivenessWithVerifySessionAuditEntriesOptions } from "../../models/options.js";
export interface SessionClientOperations {
    createLivenessSession: (body: LivenessSessionCreationContent, options?: SessionClientCreateLivenessSessionOptions) => Promise<LivenessSessionCreationResult>;
    getLivenessSession: (sessionId: string, options?: SessionClientGetLivenessSessionOptions) => Promise<LivenessSession>;
    deleteLivenessSession: (sessionId: string, options?: SessionClientDeleteLivenessSessionOptions) => Promise<void>;
    listLivenessSessions: (options?: SessionClientListLivenessSessionsOptions) => Promise<LivenessSessionItem[]>;
    listLivenessSessionAuditEntries: (sessionId: string, options?: SessionClientListLivenessSessionAuditEntriesOptions) => Promise<LivenessSessionAuditEntry[]>;
    createLivenessWithVerifySessionByJson: (body: LivenessSessionCreationContent, options?: SessionClientCreateLivenessWithVerifySessionByJsonOptions) => Promise<LivenessSessionCreationResult>;
    createLivenessWithVerifySessionByFormData: (body: LivenessWithVerifySessionCreationContent, options?: SessionClientCreateLivenessWithVerifySessionByFormDataOptions) => Promise<LivenessSessionCreationResult>;
    getLivenessWithVerifySession: (sessionId: string, options?: SessionClientGetLivenessWithVerifySessionOptions) => Promise<LivenessWithVerifySession>;
    deleteLivenessWithVerifySession: (sessionId: string, options?: SessionClientDeleteLivenessWithVerifySessionOptions) => Promise<void>;
    listLivenessWithVerifySessions: (options?: SessionClientListLivenessWithVerifySessionsOptions) => Promise<LivenessSessionItem[]>;
    listLivenessWithVerifySessionAuditEntries: (sessionId: string, options?: SessionClientListLivenessWithVerifySessionAuditEntriesOptions) => Promise<LivenessWithVerifySessionAuditEntry[]>;
}
export declare function getSessionClient(context: FaceContext): {
    createLivenessSession: (body: LivenessSessionCreationContent, options?: SessionClientCreateLivenessSessionOptions) => Promise<LivenessSessionCreationResult>;
    getLivenessSession: (sessionId: string, options?: SessionClientGetLivenessSessionOptions) => Promise<LivenessSession>;
    deleteLivenessSession: (sessionId: string, options?: SessionClientDeleteLivenessSessionOptions) => Promise<void>;
    listLivenessSessions: (options?: SessionClientListLivenessSessionsOptions) => Promise<LivenessSessionItem[]>;
    listLivenessSessionAuditEntries: (sessionId: string, options?: SessionClientListLivenessSessionAuditEntriesOptions) => Promise<LivenessSessionAuditEntry[]>;
    createLivenessWithVerifySessionByJson: (body: LivenessSessionCreationContent, options?: SessionClientCreateLivenessWithVerifySessionByJsonOptions) => Promise<LivenessSessionCreationResult>;
    createLivenessWithVerifySessionByFormData: (body: LivenessWithVerifySessionCreationContent, options?: SessionClientCreateLivenessWithVerifySessionByFormDataOptions) => Promise<LivenessSessionCreationResult>;
    getLivenessWithVerifySession: (sessionId: string, options?: SessionClientGetLivenessWithVerifySessionOptions) => Promise<LivenessWithVerifySession>;
    deleteLivenessWithVerifySession: (sessionId: string, options?: SessionClientDeleteLivenessWithVerifySessionOptions) => Promise<void>;
    listLivenessWithVerifySessions: (options?: SessionClientListLivenessWithVerifySessionsOptions) => Promise<LivenessSessionItem[]>;
    listLivenessWithVerifySessionAuditEntries: (sessionId: string, options?: SessionClientListLivenessWithVerifySessionAuditEntriesOptions) => Promise<LivenessWithVerifySessionAuditEntry[]>;
};
export declare function getSessionClientOperations(context: FaceContext): SessionClientOperations;
//# sourceMappingURL=index.d.ts.map