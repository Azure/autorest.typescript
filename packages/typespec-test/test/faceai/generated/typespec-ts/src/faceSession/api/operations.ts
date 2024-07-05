// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  createLivenessSessionContentSerializer,
  QualityForRecognition,
  CreateLivenessWithVerifySessionResult,
  CreateLivenessSessionContent,
  CreateLivenessSessionResult,
  LivenessSession,
  FaceSessionStatus,
  LivenessSessionAuditEntry,
  FaceLivenessDecision,
  FaceImageType,
  LivenessModel,
  LivenessSessionItem,
  CreateLivenessWithVerifySessionContent,
  LivenessWithVerifySession,
} from "../models/models.js";
import {
  isUnexpected,
  FaceContext as Client,
  CreateLivenessSession200Response,
  CreateLivenessSessionDefaultResponse,
  CreateLivenessWithVerifySession200Response,
  CreateLivenessWithVerifySessionDefaultResponse,
  CreateLivenessWithVerifySessionWithVerifyImage200Response,
  CreateLivenessWithVerifySessionWithVerifyImageDefaultResponse,
  DeleteLivenessSession200Response,
  DeleteLivenessSessionDefaultResponse,
  DeleteLivenessWithVerifySession200Response,
  DeleteLivenessWithVerifySessionDefaultResponse,
  GetLivenessSessionAuditEntries200Response,
  GetLivenessSessionAuditEntriesDefaultResponse,
  GetLivenessSessionResult200Response,
  GetLivenessSessionResultDefaultResponse,
  GetLivenessSessions200Response,
  GetLivenessSessionsDefaultResponse,
  GetLivenessWithVerifySessionAuditEntries200Response,
  GetLivenessWithVerifySessionAuditEntriesDefaultResponse,
  GetLivenessWithVerifySessionResult200Response,
  GetLivenessWithVerifySessionResultDefaultResponse,
  GetLivenessWithVerifySessions200Response,
  GetLivenessWithVerifySessionsDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  CreateLivenessSessionOptionalParams,
  DeleteLivenessSessionOptionalParams,
  GetLivenessSessionResultOptionalParams,
  GetLivenessSessionsOptionalParams,
  GetLivenessSessionAuditEntriesOptionalParams,
  CreateLivenessWithVerifySessionOptionalParams,
  CreateLivenessWithVerifySessionWithVerifyImageOptionalParams,
  DeleteLivenessWithVerifySessionOptionalParams,
  GetLivenessWithVerifySessionResultOptionalParams,
  GetLivenessWithVerifySessionsOptionalParams,
  GetLivenessWithVerifySessionAuditEntriesOptionalParams,
} from "../models/options.js";

export function _createLivenessSessionSend(
  context: Client,
  body: CreateLivenessSessionContent,
  options: CreateLivenessSessionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CreateLivenessSession200Response | CreateLivenessSessionDefaultResponse
> {
  return context
    .path("/detectLiveness/singleModal/sessions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        livenessOperationMode: body["livenessOperationMode"],
        sendResultsToClient: body["sendResultsToClient"],
        deviceCorrelationIdSetInClient: body["deviceCorrelationIdSetInClient"],
        deviceCorrelationId: body["deviceCorrelationId"],
        authTokenTimeToLiveInSeconds: body["authTokenTimeToLiveInSeconds"],
      },
    });
}

export async function _createLivenessSessionDeserialize(
  result:
    | CreateLivenessSession200Response
    | CreateLivenessSessionDefaultResponse,
): Promise<CreateLivenessSessionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    sessionId: result.body["sessionId"],
    authToken: result.body["authToken"],
  };
}

/**
 * A session is best for client device scenarios where developers want to authorize a client device to perform only a liveness detection without granting full access to their resource. Created sessions have a limited life span and only authorize clients to perform the desired action before access is expired.
 *
 * Permissions includes...
 * >
 * *
 *   * Ability to call /detectLiveness/singleModal for up to 3 retries.
 *   * A token lifetime of 10 minutes.
 *
 * > [!NOTE]
 * > Client access can be revoked by deleting the session using the Delete Liveness Session operation. To retrieve a result, use the Get Liveness Session. To audit the individual requests that a client has made to your resource, use the List Liveness Session Audit Entries.
 */
export async function createLivenessSession(
  context: Client,
  body: CreateLivenessSessionContent,
  options: CreateLivenessSessionOptionalParams = { requestOptions: {} },
): Promise<CreateLivenessSessionResult> {
  const result = await _createLivenessSessionSend(context, body, options);
  return _createLivenessSessionDeserialize(result);
}

export function _deleteLivenessSessionSend(
  context: Client,
  sessionId: string,
  options: DeleteLivenessSessionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DeleteLivenessSession200Response | DeleteLivenessSessionDefaultResponse
> {
  return context
    .path("/detectLiveness/singleModal/sessions/{sessionId}", sessionId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteLivenessSessionDeserialize(
  result:
    | DeleteLivenessSession200Response
    | DeleteLivenessSessionDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * > [!NOTE]
 * > Deleting a session deactivates the Session Auth Token by blocking future API calls made with that Auth Token. While this can be used to remove any access for that token, those requests will still count towards overall resource rate limits. It's best to leverage TokenTTL to limit length of tokens in the case that it is misused.
 */
export async function deleteLivenessSession(
  context: Client,
  sessionId: string,
  options: DeleteLivenessSessionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteLivenessSessionSend(context, sessionId, options);
  return _deleteLivenessSessionDeserialize(result);
}

export function _getLivenessSessionResultSend(
  context: Client,
  sessionId: string,
  options: GetLivenessSessionResultOptionalParams = { requestOptions: {} },
): StreamableMethod<
  GetLivenessSessionResult200Response | GetLivenessSessionResultDefaultResponse
> {
  return context
    .path("/detectLiveness/singleModal/sessions/{sessionId}", sessionId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getLivenessSessionResultDeserialize(
  result:
    | GetLivenessSessionResult200Response
    | GetLivenessSessionResultDefaultResponse,
): Promise<LivenessSession> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    createdDateTime: new Date(result.body["createdDateTime"]),
    sessionStartDateTime:
      result.body["sessionStartDateTime"] !== undefined
        ? new Date(result.body["sessionStartDateTime"])
        : undefined,
    sessionExpired: result.body["sessionExpired"],
    deviceCorrelationId: result.body["deviceCorrelationId"],
    authTokenTimeToLiveInSeconds: result.body["authTokenTimeToLiveInSeconds"],
    status: result.body["status"] as FaceSessionStatus,
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
            body: {
              livenessDecision: result.body.result?.response.body[
                "livenessDecision"
              ] as FaceLivenessDecision,
              target: !result.body.result?.response.body.target
                ? undefined
                : {
                    faceRectangle: {
                      top: result.body.result?.response.body.target
                        ?.faceRectangle["top"],
                      left: result.body.result?.response.body.target
                        ?.faceRectangle["left"],
                      width:
                        result.body.result?.response.body.target?.faceRectangle[
                          "width"
                        ],
                      height:
                        result.body.result?.response.body.target?.faceRectangle[
                          "height"
                        ],
                    },
                    fileName:
                      result.body.result?.response.body.target?.["fileName"],
                    timeOffsetWithinFile:
                      result.body.result?.response.body.target?.[
                        "timeOffsetWithinFile"
                      ],
                    imageType: result.body.result?.response.body.target?.[
                      "imageType"
                    ] as FaceImageType,
                  },
              modelVersionUsed: result.body.result?.response.body[
                "modelVersionUsed"
              ] as LivenessModel,
              verifyResult: !result.body.result?.response.body.verifyResult
                ? undefined
                : {
                    verifyImage: {
                      faceRectangle: {
                        top: result.body.result?.response.body.verifyResult
                          ?.verifyImage.faceRectangle["top"],
                        left: result.body.result?.response.body.verifyResult
                          ?.verifyImage.faceRectangle["left"],
                        width:
                          result.body.result?.response.body.verifyResult
                            ?.verifyImage.faceRectangle["width"],
                        height:
                          result.body.result?.response.body.verifyResult
                            ?.verifyImage.faceRectangle["height"],
                      },
                      qualityForRecognition: result.body.result?.response.body
                        .verifyResult?.verifyImage[
                        "qualityForRecognition"
                      ] as QualityForRecognition,
                    },
                    matchConfidence:
                      result.body.result?.response.body.verifyResult?.[
                        "matchConfidence"
                      ],
                    isIdentical:
                      result.body.result?.response.body.verifyResult?.[
                        "isIdentical"
                      ],
                  },
            },
            statusCode: result.body.result?.response["statusCode"],
            latencyInMilliseconds:
              result.body.result?.response["latencyInMilliseconds"],
          },
          digest: result.body.result?.["digest"],
        },
  };
}

/** Get session result of detectLiveness/singleModal call. */
export async function getLivenessSessionResult(
  context: Client,
  sessionId: string,
  options: GetLivenessSessionResultOptionalParams = { requestOptions: {} },
): Promise<LivenessSession> {
  const result = await _getLivenessSessionResultSend(
    context,
    sessionId,
    options,
  );
  return _getLivenessSessionResultDeserialize(result);
}

export function _getLivenessSessionsSend(
  context: Client,
  options: GetLivenessSessionsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  GetLivenessSessions200Response | GetLivenessSessionsDefaultResponse
> {
  return context
    .path("/detectLiveness/singleModal/sessions")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { start: options?.start, top: options?.top },
    });
}

export async function _getLivenessSessionsDeserialize(
  result: GetLivenessSessions200Response | GetLivenessSessionsDefaultResponse,
): Promise<LivenessSessionItem[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        id: p["id"],
        createdDateTime: new Date(p["createdDateTime"]),
        sessionStartDateTime:
          p["sessionStartDateTime"] !== undefined
            ? new Date(p["sessionStartDateTime"])
            : undefined,
        sessionExpired: p["sessionExpired"],
        deviceCorrelationId: p["deviceCorrelationId"],
        authTokenTimeToLiveInSeconds: p["authTokenTimeToLiveInSeconds"],
      }));
}

/**
 * List sessions from the last sessionId greater than the 'start'.
 *
 * The result should be ordered by sessionId in ascending order.
 */
export async function getLivenessSessions(
  context: Client,
  options: GetLivenessSessionsOptionalParams = { requestOptions: {} },
): Promise<LivenessSessionItem[]> {
  const result = await _getLivenessSessionsSend(context, options);
  return _getLivenessSessionsDeserialize(result);
}

export function _getLivenessSessionAuditEntriesSend(
  context: Client,
  sessionId: string,
  options: GetLivenessSessionAuditEntriesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | GetLivenessSessionAuditEntries200Response
  | GetLivenessSessionAuditEntriesDefaultResponse
> {
  return context
    .path("/detectLiveness/singleModal/sessions/{sessionId}/audit", sessionId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { start: options?.start, top: options?.top },
    });
}

export async function _getLivenessSessionAuditEntriesDeserialize(
  result:
    | GetLivenessSessionAuditEntries200Response
    | GetLivenessSessionAuditEntriesDefaultResponse,
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
          body: {
            livenessDecision: p.response.body[
              "livenessDecision"
            ] as FaceLivenessDecision,
            target: !p.response.body.target
              ? undefined
              : {
                  faceRectangle: {
                    top: p.response.body.target?.faceRectangle["top"],
                    left: p.response.body.target?.faceRectangle["left"],
                    width: p.response.body.target?.faceRectangle["width"],
                    height: p.response.body.target?.faceRectangle["height"],
                  },
                  fileName: p.response.body.target?.["fileName"],
                  timeOffsetWithinFile:
                    p.response.body.target?.["timeOffsetWithinFile"],
                  imageType: p.response.body.target?.[
                    "imageType"
                  ] as FaceImageType,
                },
            modelVersionUsed: p.response.body[
              "modelVersionUsed"
            ] as LivenessModel,
            verifyResult: !p.response.body.verifyResult
              ? undefined
              : {
                  verifyImage: {
                    faceRectangle: {
                      top: p.response.body.verifyResult?.verifyImage
                        .faceRectangle["top"],
                      left: p.response.body.verifyResult?.verifyImage
                        .faceRectangle["left"],
                      width:
                        p.response.body.verifyResult?.verifyImage.faceRectangle[
                          "width"
                        ],
                      height:
                        p.response.body.verifyResult?.verifyImage.faceRectangle[
                          "height"
                        ],
                    },
                    qualityForRecognition: p.response.body.verifyResult
                      ?.verifyImage[
                      "qualityForRecognition"
                    ] as QualityForRecognition,
                  },
                  matchConfidence:
                    p.response.body.verifyResult?.["matchConfidence"],
                  isIdentical: p.response.body.verifyResult?.["isIdentical"],
                },
          },
          statusCode: p.response["statusCode"],
          latencyInMilliseconds: p.response["latencyInMilliseconds"],
        },
        digest: p["digest"],
      }));
}

/** Gets session requests and response body for the session. */
export async function getLivenessSessionAuditEntries(
  context: Client,
  sessionId: string,
  options: GetLivenessSessionAuditEntriesOptionalParams = {
    requestOptions: {},
  },
): Promise<LivenessSessionAuditEntry[]> {
  const result = await _getLivenessSessionAuditEntriesSend(
    context,
    sessionId,
    options,
  );
  return _getLivenessSessionAuditEntriesDeserialize(result);
}

export function _createLivenessWithVerifySessionSend(
  context: Client,
  body: CreateLivenessSessionContent,
  options: CreateLivenessWithVerifySessionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CreateLivenessWithVerifySession200Response
  | CreateLivenessWithVerifySessionDefaultResponse
> {
  return context
    .path("/detectLivenessWithVerify/singleModal/sessions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        livenessOperationMode: body["livenessOperationMode"],
        sendResultsToClient: body["sendResultsToClient"],
        deviceCorrelationIdSetInClient: body["deviceCorrelationIdSetInClient"],
        deviceCorrelationId: body["deviceCorrelationId"],
        authTokenTimeToLiveInSeconds: body["authTokenTimeToLiveInSeconds"],
      },
    }) as StreamableMethod<
    | CreateLivenessWithVerifySession200Response
    | CreateLivenessWithVerifySessionDefaultResponse
  >;
}

export async function _createLivenessWithVerifySessionDeserialize(
  result:
    | CreateLivenessWithVerifySession200Response
    | CreateLivenessWithVerifySessionDefaultResponse,
): Promise<CreateLivenessWithVerifySessionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    sessionId: result.body["sessionId"],
    authToken: result.body["authToken"],
    verifyImage: !result.body.verifyImage
      ? undefined
      : {
          faceRectangle: {
            top: result.body.verifyImage?.faceRectangle["top"],
            left: result.body.verifyImage?.faceRectangle["left"],
            width: result.body.verifyImage?.faceRectangle["width"],
            height: result.body.verifyImage?.faceRectangle["height"],
          },
          qualityForRecognition: result.body.verifyImage?.[
            "qualityForRecognition"
          ] as QualityForRecognition,
        },
  };
}

/**
 * A session is best for client device scenarios where developers want to authorize a client device to perform only a liveness detection without granting full access to their resource. Created sessions have a limited life span and only authorize clients to perform the desired action before access is expired.
 *
 * Permissions includes...
 * >
 * *
 *   * Ability to call /detectLivenessWithVerify/singleModal for up to 3 retries.
 *   * A token lifetime of 10 minutes.
 *
 * > [!NOTE]
 * >
 * > *
 * >   * Client access can be revoked by deleting the session using the Delete Liveness With Verify Session operation.
 * >   * To retrieve a result, use the Get Liveness With Verify Session.
 * >   * To audit the individual requests that a client has made to your resource, use the List Liveness With Verify Session Audit Entries.
 *
 * Alternative Option: Client device submits VerifyImage during the /detectLivenessWithVerify/singleModal call.
 * > [!NOTE]
 * > Extra measures should be taken to validate that the client is sending the expected VerifyImage.
 */
export async function createLivenessWithVerifySession(
  context: Client,
  body: CreateLivenessSessionContent,
  options: CreateLivenessWithVerifySessionOptionalParams = {
    requestOptions: {},
  },
): Promise<CreateLivenessWithVerifySessionResult> {
  const result = await _createLivenessWithVerifySessionSend(
    context,
    body,
    options,
  );
  return _createLivenessWithVerifySessionDeserialize(result);
}

export function _createLivenessWithVerifySessionWithVerifyImageSend(
  context: Client,
  body: CreateLivenessWithVerifySessionContent,
  options: CreateLivenessWithVerifySessionWithVerifyImageOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CreateLivenessWithVerifySessionWithVerifyImage200Response
  | CreateLivenessWithVerifySessionWithVerifyImageDefaultResponse
> {
  return context
    .path("/detectLivenessWithVerify/singleModal/sessions")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        Parameters: createLivenessSessionContentSerializer(body.parameters),
        VerifyImage: uint8ArrayToString(body["verifyImage"], "base64"),
      },
    }) as StreamableMethod<
    | CreateLivenessWithVerifySessionWithVerifyImage200Response
    | CreateLivenessWithVerifySessionWithVerifyImageDefaultResponse
  >;
}

export async function _createLivenessWithVerifySessionWithVerifyImageDeserialize(
  result:
    | CreateLivenessWithVerifySessionWithVerifyImage200Response
    | CreateLivenessWithVerifySessionWithVerifyImageDefaultResponse,
): Promise<CreateLivenessWithVerifySessionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    sessionId: result.body["sessionId"],
    authToken: result.body["authToken"],
    verifyImage: !result.body.verifyImage
      ? undefined
      : {
          faceRectangle: {
            top: result.body.verifyImage?.faceRectangle["top"],
            left: result.body.verifyImage?.faceRectangle["left"],
            width: result.body.verifyImage?.faceRectangle["width"],
            height: result.body.verifyImage?.faceRectangle["height"],
          },
          qualityForRecognition: result.body.verifyImage?.[
            "qualityForRecognition"
          ] as QualityForRecognition,
        },
  };
}

/**
 * A session is best for client device scenarios where developers want to authorize a client device to perform only a liveness detection without granting full access to their resource. Created sessions have a limited life span and only authorize clients to perform the desired action before access is expired.
 *
 * Permissions includes...
 * >
 * *
 *   * Ability to call /detectLivenessWithVerify/singleModal for up to 3 retries.
 *   * A token lifetime of 10 minutes.
 *
 * > [!NOTE]
 * >
 * > *
 * >   * Client access can be revoked by deleting the session using the Delete Liveness With Verify Session operation.
 * >   * To retrieve a result, use the Get Liveness With Verify Session.
 * >   * To audit the individual requests that a client has made to your resource, use the List Liveness With Verify Session Audit Entries.
 *
 * Recommended Option: VerifyImage is provided during session creation.
 */
export async function createLivenessWithVerifySessionWithVerifyImage(
  context: Client,
  body: CreateLivenessWithVerifySessionContent,
  options: CreateLivenessWithVerifySessionWithVerifyImageOptionalParams = {
    requestOptions: {},
  },
): Promise<CreateLivenessWithVerifySessionResult> {
  const result = await _createLivenessWithVerifySessionWithVerifyImageSend(
    context,
    body,
    options,
  );
  return _createLivenessWithVerifySessionWithVerifyImageDeserialize(result);
}

export function _deleteLivenessWithVerifySessionSend(
  context: Client,
  sessionId: string,
  options: DeleteLivenessWithVerifySessionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DeleteLivenessWithVerifySession200Response
  | DeleteLivenessWithVerifySessionDefaultResponse
> {
  return context
    .path(
      "/detectLivenessWithVerify/singleModal/sessions/{sessionId}",
      sessionId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteLivenessWithVerifySessionDeserialize(
  result:
    | DeleteLivenessWithVerifySession200Response
    | DeleteLivenessWithVerifySessionDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * > [!NOTE]
 * > Deleting a session deactivates the Session Auth Token by blocking future API calls made with that Auth Token. While this can be used to remove any access for that token, those requests will still count towards overall resource rate limits. It's best to leverage TokenTTL to limit length of tokens in the case that it is misused.
 */
export async function deleteLivenessWithVerifySession(
  context: Client,
  sessionId: string,
  options: DeleteLivenessWithVerifySessionOptionalParams = {
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

export function _getLivenessWithVerifySessionResultSend(
  context: Client,
  sessionId: string,
  options: GetLivenessWithVerifySessionResultOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | GetLivenessWithVerifySessionResult200Response
  | GetLivenessWithVerifySessionResultDefaultResponse
> {
  return context
    .path(
      "/detectLivenessWithVerify/singleModal/sessions/{sessionId}",
      sessionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getLivenessWithVerifySessionResultDeserialize(
  result:
    | GetLivenessWithVerifySessionResult200Response
    | GetLivenessWithVerifySessionResultDefaultResponse,
): Promise<LivenessWithVerifySession> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    createdDateTime: new Date(result.body["createdDateTime"]),
    sessionStartDateTime:
      result.body["sessionStartDateTime"] !== undefined
        ? new Date(result.body["sessionStartDateTime"])
        : undefined,
    sessionExpired: result.body["sessionExpired"],
    deviceCorrelationId: result.body["deviceCorrelationId"],
    authTokenTimeToLiveInSeconds: result.body["authTokenTimeToLiveInSeconds"],
    status: result.body["status"] as FaceSessionStatus,
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
            body: {
              livenessDecision: result.body.result?.response.body[
                "livenessDecision"
              ] as FaceLivenessDecision,
              target: !result.body.result?.response.body.target
                ? undefined
                : {
                    faceRectangle: {
                      top: result.body.result?.response.body.target
                        ?.faceRectangle["top"],
                      left: result.body.result?.response.body.target
                        ?.faceRectangle["left"],
                      width:
                        result.body.result?.response.body.target?.faceRectangle[
                          "width"
                        ],
                      height:
                        result.body.result?.response.body.target?.faceRectangle[
                          "height"
                        ],
                    },
                    fileName:
                      result.body.result?.response.body.target?.["fileName"],
                    timeOffsetWithinFile:
                      result.body.result?.response.body.target?.[
                        "timeOffsetWithinFile"
                      ],
                    imageType: result.body.result?.response.body.target?.[
                      "imageType"
                    ] as FaceImageType,
                  },
              modelVersionUsed: result.body.result?.response.body[
                "modelVersionUsed"
              ] as LivenessModel,
              verifyResult: !result.body.result?.response.body.verifyResult
                ? undefined
                : {
                    verifyImage: {
                      faceRectangle: {
                        top: result.body.result?.response.body.verifyResult
                          ?.verifyImage.faceRectangle["top"],
                        left: result.body.result?.response.body.verifyResult
                          ?.verifyImage.faceRectangle["left"],
                        width:
                          result.body.result?.response.body.verifyResult
                            ?.verifyImage.faceRectangle["width"],
                        height:
                          result.body.result?.response.body.verifyResult
                            ?.verifyImage.faceRectangle["height"],
                      },
                      qualityForRecognition: result.body.result?.response.body
                        .verifyResult?.verifyImage[
                        "qualityForRecognition"
                      ] as QualityForRecognition,
                    },
                    matchConfidence:
                      result.body.result?.response.body.verifyResult?.[
                        "matchConfidence"
                      ],
                    isIdentical:
                      result.body.result?.response.body.verifyResult?.[
                        "isIdentical"
                      ],
                  },
            },
            statusCode: result.body.result?.response["statusCode"],
            latencyInMilliseconds:
              result.body.result?.response["latencyInMilliseconds"],
          },
          digest: result.body.result?.["digest"],
        },
  };
}

/** Get session result of detectLivenessWithVerify/singleModal call. */
export async function getLivenessWithVerifySessionResult(
  context: Client,
  sessionId: string,
  options: GetLivenessWithVerifySessionResultOptionalParams = {
    requestOptions: {},
  },
): Promise<LivenessWithVerifySession> {
  const result = await _getLivenessWithVerifySessionResultSend(
    context,
    sessionId,
    options,
  );
  return _getLivenessWithVerifySessionResultDeserialize(result);
}

export function _getLivenessWithVerifySessionsSend(
  context: Client,
  options: GetLivenessWithVerifySessionsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | GetLivenessWithVerifySessions200Response
  | GetLivenessWithVerifySessionsDefaultResponse
> {
  return context
    .path("/detectLivenessWithVerify/singleModal/sessions")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { start: options?.start, top: options?.top },
    });
}

export async function _getLivenessWithVerifySessionsDeserialize(
  result:
    | GetLivenessWithVerifySessions200Response
    | GetLivenessWithVerifySessionsDefaultResponse,
): Promise<LivenessSessionItem[]> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p) => ({
        id: p["id"],
        createdDateTime: new Date(p["createdDateTime"]),
        sessionStartDateTime:
          p["sessionStartDateTime"] !== undefined
            ? new Date(p["sessionStartDateTime"])
            : undefined,
        sessionExpired: p["sessionExpired"],
        deviceCorrelationId: p["deviceCorrelationId"],
        authTokenTimeToLiveInSeconds: p["authTokenTimeToLiveInSeconds"],
      }));
}

/**
 * List sessions from the last sessionId greater than the "start".
 *
 * The result should be ordered by sessionId in ascending order.
 */
export async function getLivenessWithVerifySessions(
  context: Client,
  options: GetLivenessWithVerifySessionsOptionalParams = { requestOptions: {} },
): Promise<LivenessSessionItem[]> {
  const result = await _getLivenessWithVerifySessionsSend(context, options);
  return _getLivenessWithVerifySessionsDeserialize(result);
}

export function _getLivenessWithVerifySessionAuditEntriesSend(
  context: Client,
  sessionId: string,
  options: GetLivenessWithVerifySessionAuditEntriesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | GetLivenessWithVerifySessionAuditEntries200Response
  | GetLivenessWithVerifySessionAuditEntriesDefaultResponse
> {
  return context
    .path(
      "/detectLivenessWithVerify/singleModal/sessions/{sessionId}/audit",
      sessionId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { start: options?.start, top: options?.top },
    });
}

export async function _getLivenessWithVerifySessionAuditEntriesDeserialize(
  result:
    | GetLivenessWithVerifySessionAuditEntries200Response
    | GetLivenessWithVerifySessionAuditEntriesDefaultResponse,
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
          body: {
            livenessDecision: p.response.body[
              "livenessDecision"
            ] as FaceLivenessDecision,
            target: !p.response.body.target
              ? undefined
              : {
                  faceRectangle: {
                    top: p.response.body.target?.faceRectangle["top"],
                    left: p.response.body.target?.faceRectangle["left"],
                    width: p.response.body.target?.faceRectangle["width"],
                    height: p.response.body.target?.faceRectangle["height"],
                  },
                  fileName: p.response.body.target?.["fileName"],
                  timeOffsetWithinFile:
                    p.response.body.target?.["timeOffsetWithinFile"],
                  imageType: p.response.body.target?.[
                    "imageType"
                  ] as FaceImageType,
                },
            modelVersionUsed: p.response.body[
              "modelVersionUsed"
            ] as LivenessModel,
            verifyResult: !p.response.body.verifyResult
              ? undefined
              : {
                  verifyImage: {
                    faceRectangle: {
                      top: p.response.body.verifyResult?.verifyImage
                        .faceRectangle["top"],
                      left: p.response.body.verifyResult?.verifyImage
                        .faceRectangle["left"],
                      width:
                        p.response.body.verifyResult?.verifyImage.faceRectangle[
                          "width"
                        ],
                      height:
                        p.response.body.verifyResult?.verifyImage.faceRectangle[
                          "height"
                        ],
                    },
                    qualityForRecognition: p.response.body.verifyResult
                      ?.verifyImage[
                      "qualityForRecognition"
                    ] as QualityForRecognition,
                  },
                  matchConfidence:
                    p.response.body.verifyResult?.["matchConfidence"],
                  isIdentical: p.response.body.verifyResult?.["isIdentical"],
                },
          },
          statusCode: p.response["statusCode"],
          latencyInMilliseconds: p.response["latencyInMilliseconds"],
        },
        digest: p["digest"],
      }));
}

/** Gets session requests and response body for the session. */
export async function getLivenessWithVerifySessionAuditEntries(
  context: Client,
  sessionId: string,
  options: GetLivenessWithVerifySessionAuditEntriesOptionalParams = {
    requestOptions: {},
  },
): Promise<LivenessSessionAuditEntry[]> {
  const result = await _getLivenessWithVerifySessionAuditEntriesSend(
    context,
    sessionId,
    options,
  );
  return _getLivenessWithVerifySessionAuditEntriesDeserialize(result);
}
