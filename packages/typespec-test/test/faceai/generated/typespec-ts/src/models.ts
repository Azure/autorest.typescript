// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Request for creating liveness session. */
export interface LivenessSessionCreationContent {
  /** The operation mode for the liveness modal. */
  livenessOperationMode: LivenessOperationMode;
  /** Whether or not send back the operation response to client. */
  sendResultsToClient?: boolean;
  /** Whether or not the device correlation id is set by the client. */
  deviceCorrelationIdSetInClient?: boolean;
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
}

/** Request of liveness with verify session creation. */
export interface LivenessSessionWithVerifyImageCreationContent {
  /** The parameters for creating session. */
  Parameters: LivenessSessionCreationContentForMultipart;
  /**
   * The image stream for verify.
   *
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  VerifyImage:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
}

/** Dedicated parameter model for multipart/form-data. */
export interface LivenessSessionCreationContentForMultipart {
  /** The operation mode for the liveness modal. */
  livenessOperationMode: LivenessOperationMode;
  /** Whether or not send back the operation response to client. */
  sendResultsToClient?: boolean;
  /** Whether or not the device correlation id is set by the client. */
  deviceCorrelationIdSetInClient?: boolean;
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
}

/** Available options for detect face with attribute. */
export type FaceAttributeType =
  | "headPose"
  | "glasses"
  | "occlusion"
  | "accessories"
  | "blur"
  | "exposure"
  | "noise"
  | "mask"
  | "qualityForRecognition";
/** Alias for RecognitionModel */
export type RecognitionModel =
  | string
  | "recognition_01"
  | "recognition_02"
  | "recognition_03"
  | "recognition_04";
/** Alias for DetectionModel */
export type DetectionModel =
  | string
  | "detection_01"
  | "detection_02"
  | "detection_03";
/** Alias for FindSimilarMatchMode */
export type FindSimilarMatchMode = string | "matchPerson" | "matchFace";
/** Alias for LivenessOperationMode */
export type LivenessOperationMode = string | "Passive";
/** Alias for Versions */
export type Versions = "v1.1-preview.1";
