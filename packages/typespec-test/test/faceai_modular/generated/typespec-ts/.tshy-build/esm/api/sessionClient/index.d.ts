import { LivenessSessionCreationContent, LivenessSessionCreationResult, LivenessSession, LivenessSessionAuditEntry, LivenessSessionItem, LivenessWithVerifySessionCreationContent, LivenessWithVerifySession, LivenessWithVerifySessionAuditEntry } from "../../models/models.js";
import { FaceContext as Client, CreateLivenessWithVerifySessionByFormData200Response, CreateLivenessWithVerifySessionByFormDataDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { SessionClientCreateLivenessSessionOptions, SessionClientGetLivenessSessionOptions, SessionClientDeleteLivenessSessionOptions, SessionClientListLivenessSessionsOptions, SessionClientListLivenessSessionAuditEntriesOptions, SessionClientCreateLivenessWithVerifySessionByJsonOptions, SessionClientCreateLivenessWithVerifySessionByFormDataOptions, SessionClientGetLivenessWithVerifySessionOptions, SessionClientDeleteLivenessWithVerifySessionOptions, SessionClientListLivenessWithVerifySessionsOptions, SessionClientListLivenessWithVerifySessionAuditEntriesOptions } from "../../models/options.js";
export declare function _createLivenessSessionSend(context: Client, body: LivenessSessionCreationContent, options?: SessionClientCreateLivenessSessionOptions): StreamableMethod<undefined>;
export declare function _createLivenessSessionDeserialize(result: any): Promise<LivenessSessionCreationResult>;
/** Operation that applies to a collection of resources. */
export declare function createLivenessSession(context: Client, body: LivenessSessionCreationContent, options?: SessionClientCreateLivenessSessionOptions): Promise<LivenessSessionCreationResult>;
export declare function _getLivenessSessionSend(context: Client, sessionId: string, options?: SessionClientGetLivenessSessionOptions): StreamableMethod<undefined>;
export declare function _getLivenessSessionDeserialize(result: any): Promise<LivenessSession>;
/** Resource read operation template. */
export declare function getLivenessSession(context: Client, sessionId: string, options?: SessionClientGetLivenessSessionOptions): Promise<LivenessSession>;
export declare function _deleteLivenessSessionSend(context: Client, sessionId: string, options?: SessionClientDeleteLivenessSessionOptions): StreamableMethod<undefined>;
export declare function _deleteLivenessSessionDeserialize(result: any): Promise<void>;
/** The most basic operation that applies to a resource. */
export declare function deleteLivenessSession(context: Client, sessionId: string, options?: SessionClientDeleteLivenessSessionOptions): Promise<void>;
export declare function _listLivenessSessionsSend(context: Client, options?: SessionClientListLivenessSessionsOptions): StreamableMethod<undefined>;
export declare function _listLivenessSessionsDeserialize(result: any): Promise<LivenessSessionItem[]>;
/** Operation that lists resources in a paginated way. */
export declare function listLivenessSessions(context: Client, options?: SessionClientListLivenessSessionsOptions): Promise<LivenessSessionItem[]>;
export declare function _listLivenessSessionAuditEntriesSend(context: Client, sessionId: string, options?: SessionClientListLivenessSessionAuditEntriesOptions): StreamableMethod<undefined>;
export declare function _listLivenessSessionAuditEntriesDeserialize(result: any): Promise<LivenessSessionAuditEntry[]>;
/** Operation that lists resources in a non-paginated way. */
export declare function listLivenessSessionAuditEntries(context: Client, sessionId: string, options?: SessionClientListLivenessSessionAuditEntriesOptions): Promise<LivenessSessionAuditEntry[]>;
export declare function _createLivenessWithVerifySessionByJsonSend(context: Client, body: LivenessSessionCreationContent, options?: SessionClientCreateLivenessWithVerifySessionByJsonOptions): StreamableMethod<undefined>;
export declare function _createLivenessWithVerifySessionByJsonDeserialize(result: any): Promise<LivenessSessionCreationResult>;
/** Operation that applies to a collection of resources. */
export declare function createLivenessWithVerifySessionByJson(context: Client, body: LivenessSessionCreationContent, options?: SessionClientCreateLivenessWithVerifySessionByJsonOptions): Promise<LivenessSessionCreationResult>;
export declare function _createLivenessWithVerifySessionByFormDataSend(context: Client, body: LivenessWithVerifySessionCreationContent, options?: SessionClientCreateLivenessWithVerifySessionByFormDataOptions): StreamableMethod<CreateLivenessWithVerifySessionByFormData200Response | CreateLivenessWithVerifySessionByFormDataDefaultResponse>;
export declare function _createLivenessWithVerifySessionByFormDataDeserialize(result: CreateLivenessWithVerifySessionByFormData200Response | CreateLivenessWithVerifySessionByFormDataDefaultResponse): Promise<LivenessSessionCreationResult>;
/** Operation that applies to a collection of resources. */
export declare function createLivenessWithVerifySessionByFormData(context: Client, body: LivenessWithVerifySessionCreationContent, options?: SessionClientCreateLivenessWithVerifySessionByFormDataOptions): Promise<LivenessSessionCreationResult>;
export declare function _getLivenessWithVerifySessionSend(context: Client, sessionId: string, options?: SessionClientGetLivenessWithVerifySessionOptions): StreamableMethod<undefined>;
export declare function _getLivenessWithVerifySessionDeserialize(result: any): Promise<LivenessWithVerifySession>;
/** Resource read operation template. */
export declare function getLivenessWithVerifySession(context: Client, sessionId: string, options?: SessionClientGetLivenessWithVerifySessionOptions): Promise<LivenessWithVerifySession>;
export declare function _deleteLivenessWithVerifySessionSend(context: Client, sessionId: string, options?: SessionClientDeleteLivenessWithVerifySessionOptions): StreamableMethod<undefined>;
export declare function _deleteLivenessWithVerifySessionDeserialize(result: any): Promise<void>;
/** The most basic operation that applies to a resource. */
export declare function deleteLivenessWithVerifySession(context: Client, sessionId: string, options?: SessionClientDeleteLivenessWithVerifySessionOptions): Promise<void>;
export declare function _listLivenessWithVerifySessionsSend(context: Client, options?: SessionClientListLivenessWithVerifySessionsOptions): StreamableMethod<undefined>;
export declare function _listLivenessWithVerifySessionsDeserialize(result: any): Promise<LivenessSessionItem[]>;
/** Operation that lists resources in a paginated way. */
export declare function listLivenessWithVerifySessions(context: Client, options?: SessionClientListLivenessWithVerifySessionsOptions): Promise<LivenessSessionItem[]>;
export declare function _listLivenessWithVerifySessionAuditEntriesSend(context: Client, sessionId: string, options?: SessionClientListLivenessWithVerifySessionAuditEntriesOptions): StreamableMethod<undefined>;
export declare function _listLivenessWithVerifySessionAuditEntriesDeserialize(result: any): Promise<LivenessWithVerifySessionAuditEntry[]>;
/** Operation that lists resources in a non-paginated way. */
export declare function listLivenessWithVerifySessionAuditEntries(context: Client, sessionId: string, options?: SessionClientListLivenessWithVerifySessionAuditEntriesOptions): Promise<LivenessWithVerifySessionAuditEntry[]>;
//# sourceMappingURL=index.d.ts.map