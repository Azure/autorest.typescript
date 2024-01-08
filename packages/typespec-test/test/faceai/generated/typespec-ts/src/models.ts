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
  /** The image stream for verify. */
  VerifyImage: string;
}
