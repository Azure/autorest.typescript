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

export interface LivenessWithVerifySessionCreationContentParametersPartDescriptor {
  name: "Parameters";
  body: LivenessSessionCreationContent;
}

export interface LivenessWithVerifySessionCreationContentVerifyImagePartDescriptor {
  name: "VerifyImage";
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  filename?: string;
  contentType?: string;
}

/** Request of liveness with verify session creation. */
export type LivenessWithVerifySessionCreationContent =
  | FormData
  | Array<
      | LivenessWithVerifySessionCreationContentParametersPartDescriptor
      | LivenessWithVerifySessionCreationContentVerifyImagePartDescriptor
    >;
