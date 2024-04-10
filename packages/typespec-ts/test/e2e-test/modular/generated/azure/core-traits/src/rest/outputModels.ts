// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Provides the 'If-*' headers to enable conditional (cached) responses */
export interface ConditionalRequestHeadersOutput {}

/** Provides the 'ETag' header to enable conditional (cached) requests */
export interface EtagResponseEnvelopeOutput {}

/** Provides the 'x-ms-client-request-id' header to enable request correlation in requests and responses. */
export interface ClientRequestIdHeaderOutput {}

/** Sample Model */
export interface UserOutput {
  /** The user's id. */
  readonly id: number;
  /** The user's name. */
  name?: string;
}

/** Provides the 'Repeatability-*' headers to enable repeatable requests. */
export interface RepeatabilityRequestHeadersOutput {}

/** Provides the 'Repeatability-*' headers to enable repeatable requests. */
export interface RepeatabilityResponseHeadersOutput {}

/** User action response */
export interface UserActionResponseOutput {
  /** User action result. */
  userActionResult: string;
}

/** Alias for RepeatabilityResultOutput */
export type RepeatabilityResultOutput = "accepted" | "rejected";
