// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Request for creating liveness session. */
export interface CreateLivenessSessionContent {
  /** Type of liveness mode the client should follow. */
  livenessOperationMode: LivenessOperationMode;
  /** Whether or not to allow a '200 - Success' response body to be sent to the client, which may be undesirable for security reasons. Default is false, clients will receive a '204 - NoContent' empty body response. Regardless of selection, calling Session GetResult will always contain a response body enabling business logic to be implemented. */
  sendResultsToClient?: boolean;
  /** Whether or not to allow client to set their own 'deviceCorrelationId' via the Vision SDK. Default is false, and 'deviceCorrelationId' must be set in this request body. */
  deviceCorrelationIdSetInClient?: boolean;
  /** Unique Guid per each end-user device. This is to provide rate limiting and anti-hammering. If 'deviceCorrelationIdSetInClient' is true in this request, this 'deviceCorrelationId' must be null. */
  deviceCorrelationId?: string;
  /** Seconds the session should last for. Range is 60 to 86400 seconds. Default value is 600. */
  authTokenTimeToLiveInSeconds?: number;
}

/** Request of liveness with verify session creation. */
export interface CreateLivenessWithVerifySessionContent {
  /** The parameters for creating session. */
  Parameters: CreateLivenessSessionContent;
  /**
   * The image stream for verify. Content-Disposition header field for this part must have filename.
   *
   * Value may contain any sequence of octets
   */
  VerifyImage:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
}

/** Alias for DetectionModel */
export type DetectionModel = string;
/** Alias for RecognitionModel */
export type RecognitionModel = string;
/** Alias for FaceAttributeType */
export type FaceAttributeType = string;
/** Alias for FindSimilarMatchMode */
export type FindSimilarMatchMode = string;
/** Alias for LivenessOperationMode */
export type LivenessOperationMode = string;
/** API versions for Azure AI Face API. */
export type Versions = "v1.1-preview.1";
