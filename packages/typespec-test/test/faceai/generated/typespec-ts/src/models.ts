// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Data for creating liveness session. */
export interface LivenessSessionCreationContent {
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
}

/** Request of liveness with verify session creation. */
export interface LivenessWithVerifySessionCreationContent {
  /** The json for creating liveness session. */
  Parameters: LivenessSessionCreationContent;
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
