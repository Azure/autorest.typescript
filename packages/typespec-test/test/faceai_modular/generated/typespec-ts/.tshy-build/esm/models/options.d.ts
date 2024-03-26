import { OperationOptions } from "@azure-rest/core-client";
export interface SessionClientCreateLivenessSessionOptions extends OperationOptions {
}
export interface SessionClientGetLivenessSessionOptions extends OperationOptions {
}
export interface SessionClientDeleteLivenessSessionOptions extends OperationOptions {
}
export interface SessionClientListLivenessSessionsOptions extends OperationOptions {
    /** List sessions from the last sessionId greater than the "start". It contains no more than 64 characters. Default is empty. */
    start?: string;
    /** The number of sessions to list, ranging in [1, 1000]. Default is 1000. */
    top?: number;
}
export interface SessionClientListLivenessSessionAuditEntriesOptions extends OperationOptions {
    /** List sessions from the last sessionId greater than the "start". It contains no more than 64 characters. Default is empty. */
    start?: string;
    /** The number of sessions to list, ranging in [1, 1000]. Default is 1000. */
    top?: number;
}
export interface SessionClientCreateLivenessWithVerifySessionByJsonOptions extends OperationOptions {
}
export interface SessionClientCreateLivenessWithVerifySessionByFormDataOptions extends OperationOptions {
    /** The content type for the operation. Always multipart/form-data for this operation. */
    contentType?: string;
}
export interface SessionClientGetLivenessWithVerifySessionOptions extends OperationOptions {
}
export interface SessionClientDeleteLivenessWithVerifySessionOptions extends OperationOptions {
}
export interface SessionClientListLivenessWithVerifySessionsOptions extends OperationOptions {
    /** List sessions from the last sessionId greater than the "start". It contains no more than 64 characters. Default is empty. */
    start?: string;
    /** The number of sessions to list, ranging in [1, 1000]. Default is 1000. */
    top?: number;
}
export interface SessionClientListLivenessWithVerifySessionAuditEntriesOptions extends OperationOptions {
    /** List sessions from the last sessionId greater than the "start". It contains no more than 64 characters. Default is empty. */
    start?: string;
    /** The number of sessions to list, ranging in [1, 1000]. Default is 1000. */
    top?: number;
}
//# sourceMappingURL=options.d.ts.map