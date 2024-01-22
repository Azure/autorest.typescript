import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;

namespace Face;

@doc("The ApiVersion path parameter.")
model ApiVersionPathParameter {
    @segment("face")
    @path("apiVersion")
    @doc("The API version to use for this operation.")
    apiVersion: string;
}

@doc("The request for list resources.")
model ListRequestOptions {
    @doc("List sessions from the last sessionId greater than the \"start\". It contains no more than 64 characters. Default is empty.")
    @query start?: string;
    @doc("The number of sessions to list, ranging in [1, 1000]. Default is 1000.")
    @query top?: int32;
}

@doc("Data for creating liveness session.")
model LivenessSessionCreationContent {
    @doc("Device Correlation Id to use for linking multiple sessions together.")
    deviceCorrelationId: string;

    @doc("Session length in seconds. Range is 60 to 86400 seconds.")
    authTokenTimeToLiveInSeconds?: int32;

    @doc("The operation mode for the liveness modal.")
    @visibility("create")
    livenessOperationMode: string;
}

@doc("Session data returned for enumeration.")
model LivenessSessionItem is LivenessSessionCreationContent {
    @doc("Unique ID to reference this session.")
    @key("sessionId")
    @visibility("read")
    id: string;

    @doc("Session creation time in millisecond from epoch.")
    createdDateTime: utcDateTime;

    @doc("Session started time from session auth token.")
    sessionStartDateTime?: utcDateTime;

    @doc("Whether or not the session is expired.")
    sessionExpired: boolean;
}

@doc("Session details data.")
model LivenessSessionDetails<T extends BaseSessionAuditEntry> {
    @doc("The session status.")
    status: SessionStatus;

    @doc("The last result of session.")
    result?: T;
}

@doc("Session result of detect liveness.")
@resource("detectLiveness/singleModal/sessions")
model LivenessSession is LivenessSessionItem {
    ...LivenessSessionDetails<LivenessSessionAuditEntry>;
}

@doc("Session result of detect liveness with verify.")
@resource("detectLivenessWithVerify/singleModal/sessions")
model LivenessWithVerifySession is LivenessSessionItem {
    ...LivenessSessionDetails<LivenessWithVerifySessionAuditEntry>;
}

@doc("Response of liveness session creation.")
model LivenessSessionCreationResult {
    @doc("Unique ID to reference this session.")
    sessionId: string;

    @doc("Authorization token for use by the client application")
    authToken: string;
}

@doc("Session status.")
enum SessionStatus {
    @doc("Session has not started.")
    NotStarted,

    @doc("Session has started.")
    Started,

    @doc("Session has available result.")
    ResultAvailable
}

@doc("Audit entry for a request in the session.")
model SessionAuditEntryRequestInfo {
    @doc("The URL of the request.")
    url: string;

    @doc("The HTTP method of the request.")
    method: string;

    @doc("The length of the request body in bytes.")
    contentLength?: int64;

    @doc("The content type of the request.")
    contentType: string;

    @doc("The user agent of the request.")
    userAgent?: string;
}

@doc("Audit entry for a response in the session.")
model SessionAuditEntryResponseInfo {
    @doc("The response body.")
    body: Record<unknown>;

    @doc("The HTTP status code of the request.")
    statusCode: int32;

    @doc("The latency of the request.")
    latencyInMilliseconds: int64;
}

@doc("Audit entry for a request in session.")
@resource("audit")
model BaseSessionAuditEntry {
    @doc("ID of this audit entry.")
    @key
    @visibility("read")
    id: int64;

    @doc("Session ID of this audit entry.")
    sessionId: string;

    @doc("Request ID in the request header.")
    requestId: string;

    @doc("Client request ID in the request header.")
    clientRequestId: string;

    @doc("The UTC date time of the request.")
    receivedDateTime: utcDateTime;

    @doc("The request of this entry.")
    request: SessionAuditEntryRequestInfo;

    @doc("The response of this entry.")
    response: SessionAuditEntryResponseInfo;

    @doc("The digest of the request body.")
    digest: string;
}

@parentResource(LivenessSession)
model LivenessSessionAuditEntry is BaseSessionAuditEntry;

@parentResource(LivenessWithVerifySession)
model LivenessWithVerifySessionAuditEntry is BaseSessionAuditEntry;

@doc("Request of liveness with verify session creation.")
model LivenessWithVerifySessionCreationContent {
    @doc("The content type for the operation. Always multipart/form-data for this operation.")
    @header("content-type")
    contentType: "multipart/form-data";

    @doc("The json for creating liveness session.")
    Parameters: LivenessSessionCreationContent;

    @doc("The image stream for verify.")
    VerifyImage: bytes;
}