// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { createLivenessSession, getLivenessSession, deleteLivenessSession, listLivenessSessions, listLivenessSessionAuditEntries, createLivenessWithVerifySessionByJson, createLivenessWithVerifySessionByFormData, getLivenessWithVerifySession, deleteLivenessWithVerifySession, listLivenessWithVerifySessions, listLivenessWithVerifySessionAuditEntries, } from "../../api/sessionClient/index.js";
export function getSessionClient(context) {
    return {
        createLivenessSession: (body, options) => createLivenessSession(context, body, options),
        getLivenessSession: (sessionId, options) => getLivenessSession(context, sessionId, options),
        deleteLivenessSession: (sessionId, options) => deleteLivenessSession(context, sessionId, options),
        listLivenessSessions: (options) => listLivenessSessions(context, options),
        listLivenessSessionAuditEntries: (sessionId, options) => listLivenessSessionAuditEntries(context, sessionId, options),
        createLivenessWithVerifySessionByJson: (body, options) => createLivenessWithVerifySessionByJson(context, body, options),
        createLivenessWithVerifySessionByFormData: (body, options) => createLivenessWithVerifySessionByFormData(context, body, options),
        getLivenessWithVerifySession: (sessionId, options) => getLivenessWithVerifySession(context, sessionId, options),
        deleteLivenessWithVerifySession: (sessionId, options) => deleteLivenessWithVerifySession(context, sessionId, options),
        listLivenessWithVerifySessions: (options) => listLivenessWithVerifySessions(context, options),
        listLivenessWithVerifySessionAuditEntries: (sessionId, options) => listLivenessWithVerifySessionAuditEntries(context, sessionId, options),
    };
}
export function getSessionClientOperations(context) {
    return {
        ...getSessionClient(context),
    };
}
//# sourceMappingURL=index.js.map