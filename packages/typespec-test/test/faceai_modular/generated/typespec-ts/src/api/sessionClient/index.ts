// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
  isUnexpected,
  FaceContext as Client,
  CreateLivenessWithVerifySessionByFormData200Response,
  CreateLivenessWithVerifySessionByFormDataDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
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

export function _createLivenessSessionSend(
  context: Client,
  body: LivenessSessionCreationContent,
  options: SessionClientCreateLivenessSessionOptions = { requestOptions: {} },
): StreamableMethod<undefined> {
  return context
    .path("/face/{apiVersion}/detectLiveness/singleModal/sessions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        deviceCorrelationId: body["deviceCorrelationId"],
        authTokenTimeToLiveInSeconds: body["authTokenTimeToLiveInSeconds"],
        livenessOperationMode: body["livenessOperationMode"],
      },
    });
}

export async function _createLivenessSessionDeserialize(
  result,
): Promise<LivenessSessionCreationResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    sessionId: result.body["sessionId"],
    authToken: result.body["authToken"],
  };
}

/** Operation that applies to a collection of resources. */
export async function createLivenessSession(
  context: Client,
  body: LivenessSessionCreationContent,
  options: SessionClientCreateLivenessSessionOptions = { requestOptions: {} },
): Promise<LivenessSessionCreationResult> {
  const result = await _createLivenessSessionSend(context, body, options);
  return _createLivenessSessionDeserialize(result);
}

export function _getLivenessSessionSend(
  context: Client,
  sessionId: string,
  options: SessionClientGetLivenessSessionOptions = { requestOptions: {} },
): StreamableMethod<undefined> {
  return context
    .path(
      "/face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}",
      sessionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getLivenessSessionDeserialize(
  result,
): Promise<LivenessSession> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    deviceCorrelationId: result.body["deviceCorrelationId"],
    authTokenTimeToLiveInSeconds: result.body["authTokenTimeToLiveInSeconds"],
    livenessOperationMode: result.body["livenessOperationMode"],
    id: result.body["id"],
    createdDateTime: new Date(result.body["createdDateTime"]),
    sessionStartDateTime:
      result.body["sessionStartDateTime"] !== undefined
        ? new Date(result.body["sessionStartDateTime"])
        : undefined,
    sessionExpired: result.body["sessionExpired"],
    status: result.body["status"],
    result: !result.body.result
      ? undefined
      : {
          id: result.body.result?.["id"],
          sessionId: result.body.result?.["sessionId"],
          requestId: result.body.result?.["requestId"],
          clientRequestId: result.body.result?.["clientRequestId"],
          receivedDateTime: new Date(result.body.result?.["receivedDateTime"]),
          request: {
            url: result.body.result?.request["url"],
            method: result.body.result?.request["method"],
            contentLength: result.body.result?.request["contentLength"],
            contentType: result.body.result?.request["contentType"],
            userAgent: result.body.result?.request["userAgent"],
          },
          response: {
            body: result.body.result?.response["body"],
            statusCode: result.body.result?.response["statusCode"],
            latencyInMilliseconds:
              result.body.result?.response["latencyInMilliseconds"],
          },
          digest: result.body.result?.["digest"],
        },
  };
}

/** Resource read operation template. */
export async function getLivenessSession(
  context: Client,
  sessionId: string,
  options: SessionClientGetLivenessSessionOptions = { requestOptions: {} },
): Promise<LivenessSession> {
  const result = await _getLivenessSessionSend(context, sessionId, options);
  return _getLivenessSessionDeserialize(result);
}

export function _deleteLivenessSessionSend(
  context: Client,
  sessionId: string,
  options: SessionClientDeleteLivenessSessionOptions = { requestOptions: {} },
): StreamableMethod<undefined> {
  return context
    .path(
      "/face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}",
      sessionId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteLivenessSessionDeserialize(result): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** The most basic operation that applies to a resource. */
export async function deleteLivenessSession(
  context: Client,
  sessionId: string,
  options: SessionClientDeleteLivenessSessionOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteLivenessSessionSend(context, sessionId, options);
  return _deleteLivenessSessionDeserialize(result);
}

export function _listLivenessSessionsSend(
  context: Client,
  options: SessionClientListLivenessSessionsOptions = { requestOptions: {} },
): StreamableMethod<undefined> {
  return context
    .path("/face/{apiVersion}/detectLiveness/singleModal/sessions")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { start: options?.start, top: options?.top },
    });
}

export async function _listLivenessSessionsDeserialize(
  result,
): Promise<LivenessSessionItem[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        deviceCorrelationId: p["deviceCorrelationId"],
        authTokenTimeToLiveInSeconds: p["authTokenTimeToLiveInSeconds"],
        livenessOperationMode: p["livenessOperationMode"],
        id: p["id"],
        createdDateTime: new Date(p["createdDateTime"]),
        sessionStartDateTime:
          p["sessionStartDateTime"] !== undefined
            ? new Date(p["sessionStartDateTime"])
            : undefined,
        sessionExpired: p["sessionExpired"],
      }));
}

/** Operation that lists resources in a paginated way. */
export async function listLivenessSessions(
  context: Client,
  options: SessionClientListLivenessSessionsOptions = { requestOptions: {} },
): Promise<LivenessSessionItem[]> {
  const result = await _listLivenessSessionsSend(context, options);
  return _listLivenessSessionsDeserialize(result);
}

export function _listLivenessSessionAuditEntriesSend(
  context: Client,
  sessionId: string,
  options: SessionClientListLivenessSessionAuditEntriesOptions = {
    requestOptions: {},
  },
): StreamableMethod<undefined> {
  return context
    .path(
      "/face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}/audit",
      sessionId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { start: options?.start, top: options?.top },
    });
}

export async function _listLivenessSessionAuditEntriesDeserialize(
  result,
): Promise<LivenessSessionAuditEntry[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        id: p["id"],
        sessionId: p["sessionId"],
        requestId: p["requestId"],
        clientRequestId: p["clientRequestId"],
        receivedDateTime: new Date(p["receivedDateTime"]),
        request: {
          url: p.request["url"],
          method: p.request["method"],
          contentLength: p.request["contentLength"],
          contentType: p.request["contentType"],
          userAgent: p.request["userAgent"],
        },
        response: {
          body: p.response["body"],
          statusCode: p.response["statusCode"],
          latencyInMilliseconds: p.response["latencyInMilliseconds"],
        },
        digest: p["digest"],
      }));
}

/** Operation that lists resources in a non-paginated way. */
export async function listLivenessSessionAuditEntries(
  context: Client,
  sessionId: string,
  options: SessionClientListLivenessSessionAuditEntriesOptions = {
    requestOptions: {},
  },
): Promise<LivenessSessionAuditEntry[]> {
  const result = await _listLivenessSessionAuditEntriesSend(
    context,
    sessionId,
    options,
  );
  return _listLivenessSessionAuditEntriesDeserialize(result);
}

export function _createLivenessWithVerifySessionByJsonSend(
  context: Client,
  body: LivenessSessionCreationContent,
  options: SessionClientCreateLivenessWithVerifySessionByJsonOptions = {
    requestOptions: {},
  },
): StreamableMethod<undefined> {
  return context
    .path("/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        deviceCorrelationId: body["deviceCorrelationId"],
        authTokenTimeToLiveInSeconds: body["authTokenTimeToLiveInSeconds"],
        livenessOperationMode: body["livenessOperationMode"],
      },
    }) as StreamableMethod<undefined>;
}

export async function _createLivenessWithVerifySessionByJsonDeserialize(
  result,
): Promise<LivenessSessionCreationResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    sessionId: result.body["sessionId"],
    authToken: result.body["authToken"],
  };
}

/** Operation that applies to a collection of resources. */
export async function createLivenessWithVerifySessionByJson(
  context: Client,
  body: LivenessSessionCreationContent,
  options: SessionClientCreateLivenessWithVerifySessionByJsonOptions = {
    requestOptions: {},
  },
): Promise<LivenessSessionCreationResult> {
  const result = await _createLivenessWithVerifySessionByJsonSend(
    context,
    body,
    options,
  );
  return _createLivenessWithVerifySessionByJsonDeserialize(result);
}

export function _createLivenessWithVerifySessionByFormDataSend(
  context: Client,
  body: LivenessWithVerifySessionCreationContent,
  options: SessionClientCreateLivenessWithVerifySessionByFormDataOptions = {
    requestOptions: {},
  },
): StreamableMethod<
  | CreateLivenessWithVerifySessionByFormData200Response
  | CreateLivenessWithVerifySessionByFormDataDefaultResponse
> {
  return context
    .path("/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        Parameters: {
          deviceCorrelationId: body.parameters["deviceCorrelationId"],
          authTokenTimeToLiveInSeconds:
            body.parameters["authTokenTimeToLiveInSeconds"],
          livenessOperationMode: body.parameters["livenessOperationMode"],
        },
        VerifyImage: uint8ArrayToString(body["verifyImage"], "base64"),
      },
    }) as StreamableMethod<
    | CreateLivenessWithVerifySessionByFormData200Response
    | CreateLivenessWithVerifySessionByFormDataDefaultResponse
  >;
}

export async function _createLivenessWithVerifySessionByFormDataDeserialize(
  result:
    | CreateLivenessWithVerifySessionByFormData200Response
    | CreateLivenessWithVerifySessionByFormDataDefaultResponse,
): Promise<LivenessSessionCreationResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    sessionId: result.body["sessionId"],
    authToken: result.body["authToken"],
  };
}

/** Operation that applies to a collection of resources. */
export async function createLivenessWithVerifySessionByFormData(
  context: Client,
  body: LivenessWithVerifySessionCreationContent,
  options: SessionClientCreateLivenessWithVerifySessionByFormDataOptions = {
    requestOptions: {},
  },
): Promise<LivenessSessionCreationResult> {
  const result = await _createLivenessWithVerifySessionByFormDataSend(
    context,
    body,
    options,
  );
  return _createLivenessWithVerifySessionByFormDataDeserialize(result);
}

export function _getLivenessWithVerifySessionSend(
  context: Client,
  sessionId: string,
  options: SessionClientGetLivenessWithVerifySessionOptions = {
    requestOptions: {},
  },
): StreamableMethod<undefined> {
  return context
    .path(
      "/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}",
      sessionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getLivenessWithVerifySessionDeserialize(
  result,
): Promise<LivenessWithVerifySession> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    deviceCorrelationId: result.body["deviceCorrelationId"],
    authTokenTimeToLiveInSeconds: result.body["authTokenTimeToLiveInSeconds"],
    livenessOperationMode: result.body["livenessOperationMode"],
    id: result.body["id"],
    createdDateTime: new Date(result.body["createdDateTime"]),
    sessionStartDateTime:
      result.body["sessionStartDateTime"] !== undefined
        ? new Date(result.body["sessionStartDateTime"])
        : undefined,
    sessionExpired: result.body["sessionExpired"],
    status: result.body["status"],
    result: !result.body.result
      ? undefined
      : {
          id: result.body.result?.["id"],
          sessionId: result.body.result?.["sessionId"],
          requestId: result.body.result?.["requestId"],
          clientRequestId: result.body.result?.["clientRequestId"],
          receivedDateTime: new Date(result.body.result?.["receivedDateTime"]),
          request: {
            url: result.body.result?.request["url"],
            method: result.body.result?.request["method"],
            contentLength: result.body.result?.request["contentLength"],
            contentType: result.body.result?.request["contentType"],
            userAgent: result.body.result?.request["userAgent"],
          },
          response: {
            body: result.body.result?.response["body"],
            statusCode: result.body.result?.response["statusCode"],
            latencyInMilliseconds:
              result.body.result?.response["latencyInMilliseconds"],
          },
          digest: result.body.result?.["digest"],
        },
  };
}

/** Resource read operation template. */
export async function getLivenessWithVerifySession(
  context: Client,
  sessionId: string,
  options: SessionClientGetLivenessWithVerifySessionOptions = {
    requestOptions: {},
  },
): Promise<LivenessWithVerifySession> {
  const result = await _getLivenessWithVerifySessionSend(
    context,
    sessionId,
    options,
  );
  return _getLivenessWithVerifySessionDeserialize(result);
}

export function _deleteLivenessWithVerifySessionSend(
  context: Client,
  sessionId: string,
  options: SessionClientDeleteLivenessWithVerifySessionOptions = {
    requestOptions: {},
  },
): StreamableMethod<undefined> {
  return context
    .path(
      "/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}",
      sessionId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteLivenessWithVerifySessionDeserialize(
  result,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** The most basic operation that applies to a resource. */
export async function deleteLivenessWithVerifySession(
  context: Client,
  sessionId: string,
  options: SessionClientDeleteLivenessWithVerifySessionOptions = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _deleteLivenessWithVerifySessionSend(
    context,
    sessionId,
    options,
  );
  return _deleteLivenessWithVerifySessionDeserialize(result);
}

export function _listLivenessWithVerifySessionsSend(
  context: Client,
  options: SessionClientListLivenessWithVerifySessionsOptions = {
    requestOptions: {},
  },
): StreamableMethod<undefined> {
  return context
    .path("/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { start: options?.start, top: options?.top },
    }) as StreamableMethod<undefined>;
}

export async function _listLivenessWithVerifySessionsDeserialize(
  result,
): Promise<LivenessSessionItem[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        deviceCorrelationId: p["deviceCorrelationId"],
        authTokenTimeToLiveInSeconds: p["authTokenTimeToLiveInSeconds"],
        livenessOperationMode: p["livenessOperationMode"],
        id: p["id"],
        createdDateTime: new Date(p["createdDateTime"]),
        sessionStartDateTime:
          p["sessionStartDateTime"] !== undefined
            ? new Date(p["sessionStartDateTime"])
            : undefined,
        sessionExpired: p["sessionExpired"],
      }));
}

/** Operation that lists resources in a paginated way. */
export async function listLivenessWithVerifySessions(
  context: Client,
  options: SessionClientListLivenessWithVerifySessionsOptions = {
    requestOptions: {},
  },
): Promise<LivenessSessionItem[]> {
  const result = await _listLivenessWithVerifySessionsSend(context, options);
  return _listLivenessWithVerifySessionsDeserialize(result);
}

export function _listLivenessWithVerifySessionAuditEntriesSend(
  context: Client,
  sessionId: string,
  options: SessionClientListLivenessWithVerifySessionAuditEntriesOptions = {
    requestOptions: {},
  },
): StreamableMethod<undefined> {
  return context
    .path(
      "/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}/audit",
      sessionId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { start: options?.start, top: options?.top },
    });
}

export async function _listLivenessWithVerifySessionAuditEntriesDeserialize(
  result,
): Promise<LivenessWithVerifySessionAuditEntry[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        id: p["id"],
        sessionId: p["sessionId"],
        requestId: p["requestId"],
        clientRequestId: p["clientRequestId"],
        receivedDateTime: new Date(p["receivedDateTime"]),
        request: {
          url: p.request["url"],
          method: p.request["method"],
          contentLength: p.request["contentLength"],
          contentType: p.request["contentType"],
          userAgent: p.request["userAgent"],
        },
        response: {
          body: p.response["body"],
          statusCode: p.response["statusCode"],
          latencyInMilliseconds: p.response["latencyInMilliseconds"],
        },
        digest: p["digest"],
      }));
}

/** Operation that lists resources in a non-paginated way. */
export async function listLivenessWithVerifySessionAuditEntries(
  context: Client,
  sessionId: string,
  options: SessionClientListLivenessWithVerifySessionAuditEntriesOptions = {
    requestOptions: {},
  },
): Promise<LivenessWithVerifySessionAuditEntry[]> {
  const result = await _listLivenessWithVerifySessionAuditEntriesSend(
    context,
    sessionId,
    options,
  );
  return _listLivenessWithVerifySessionAuditEntriesDeserialize(result);
}
