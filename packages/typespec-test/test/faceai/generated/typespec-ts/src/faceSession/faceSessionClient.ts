// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  CreateLivenessWithVerifySessionResult,
  CreateLivenessSessionContent,
  CreateLivenessSessionResult,
  LivenessSession,
  LivenessSessionAuditEntry,
  LivenessSessionItem,
  CreateLivenessWithVerifySessionContent,
  LivenessWithVerifySession,
} from "./models/models.js";
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
} from "./models/options.js";
import {
  createFaceSession,
  FaceSessionClientOptions,
  FaceContext,
  createLivenessSession,
  deleteLivenessSession,
  getLivenessSessionResult,
  getLivenessSessions,
  getLivenessSessionAuditEntries,
  createLivenessWithVerifySession,
  createLivenessWithVerifySessionWithVerifyImage,
  deleteLivenessWithVerifySession,
  getLivenessWithVerifySessionResult,
  getLivenessWithVerifySessions,
  getLivenessWithVerifySessionAuditEntries,
} from "./api/index.js";

export { FaceSessionClientOptions } from "./api/faceSessionContext.js";

export class FaceSessionClient {
  private _client: FaceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: FaceSessionClientOptions = {},
  ) {
    this._client = createFaceSession(endpointParam, credential, options);
    this.pipeline = this._client.pipeline;
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
  createLivenessSession(
    body: CreateLivenessSessionContent,
    options: CreateLivenessSessionOptionalParams = { requestOptions: {} },
  ): Promise<CreateLivenessSessionResult> {
    return createLivenessSession(this._client, body, options);
  }

  /**
   * > [!NOTE]
   * > Deleting a session deactivates the Session Auth Token by blocking future API calls made with that Auth Token. While this can be used to remove any access for that token, those requests will still count towards overall resource rate limits. It's best to leverage TokenTTL to limit length of tokens in the case that it is misused.
   */
  deleteLivenessSession(
    sessionId: string,
    options: DeleteLivenessSessionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteLivenessSession(this._client, sessionId, options);
  }

  /** Get session result of detectLiveness/singleModal call. */
  getLivenessSessionResult(
    sessionId: string,
    options: GetLivenessSessionResultOptionalParams = { requestOptions: {} },
  ): Promise<LivenessSession> {
    return getLivenessSessionResult(this._client, sessionId, options);
  }

  /**
   * List sessions from the last sessionId greater than the 'start'.
   *
   * The result should be ordered by sessionId in ascending order.
   */
  getLivenessSessions(
    options: GetLivenessSessionsOptionalParams = { requestOptions: {} },
  ): Promise<LivenessSessionItem[]> {
    return getLivenessSessions(this._client, options);
  }

  /** Gets session requests and response body for the session. */
  getLivenessSessionAuditEntries(
    sessionId: string,
    options: GetLivenessSessionAuditEntriesOptionalParams = {
      requestOptions: {},
    },
  ): Promise<LivenessSessionAuditEntry[]> {
    return getLivenessSessionAuditEntries(this._client, sessionId, options);
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
  createLivenessWithVerifySession(
    body: CreateLivenessSessionContent,
    options: CreateLivenessWithVerifySessionOptionalParams = {
      requestOptions: {},
    },
  ): Promise<CreateLivenessWithVerifySessionResult> {
    return createLivenessWithVerifySession(this._client, body, options);
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
  createLivenessWithVerifySessionWithVerifyImage(
    body: CreateLivenessWithVerifySessionContent,
    options: CreateLivenessWithVerifySessionWithVerifyImageOptionalParams = {
      requestOptions: {},
    },
  ): Promise<CreateLivenessWithVerifySessionResult> {
    return createLivenessWithVerifySessionWithVerifyImage(
      this._client,
      body,
      options,
    );
  }

  /**
   * > [!NOTE]
   * > Deleting a session deactivates the Session Auth Token by blocking future API calls made with that Auth Token. While this can be used to remove any access for that token, those requests will still count towards overall resource rate limits. It's best to leverage TokenTTL to limit length of tokens in the case that it is misused.
   */
  deleteLivenessWithVerifySession(
    sessionId: string,
    options: DeleteLivenessWithVerifySessionOptionalParams = {
      requestOptions: {},
    },
  ): Promise<void> {
    return deleteLivenessWithVerifySession(this._client, sessionId, options);
  }

  /** Get session result of detectLivenessWithVerify/singleModal call. */
  getLivenessWithVerifySessionResult(
    sessionId: string,
    options: GetLivenessWithVerifySessionResultOptionalParams = {
      requestOptions: {},
    },
  ): Promise<LivenessWithVerifySession> {
    return getLivenessWithVerifySessionResult(this._client, sessionId, options);
  }

  /**
   * List sessions from the last sessionId greater than the "start".
   *
   * The result should be ordered by sessionId in ascending order.
   */
  getLivenessWithVerifySessions(
    options: GetLivenessWithVerifySessionsOptionalParams = {
      requestOptions: {},
    },
  ): Promise<LivenessSessionItem[]> {
    return getLivenessWithVerifySessions(this._client, options);
  }

  /** Gets session requests and response body for the session. */
  getLivenessWithVerifySessionAuditEntries(
    sessionId: string,
    options: GetLivenessWithVerifySessionAuditEntriesOptionalParams = {
      requestOptions: {},
    },
  ): Promise<LivenessSessionAuditEntry[]> {
    return getLivenessWithVerifySessionAuditEntries(
      this._client,
      sessionId,
      options,
    );
  }
}
