// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface SmokeTestOptions extends OperationOptions {
  /** The request should only proceed if an entity matches this string. */
  ifMatch?: string;
  /** The request should only proceed if no entity matches this string. */
  ifNoneMatch?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  ifUnmodifiedSince?: Date;
  /** The request should only proceed if the entity was modified after this time. */
  ifModifiedSince?: Date;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

export interface RepeatableActionOptions extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  repeatabilityRequestId?: string;
  /** Specifies the date and time at which the request was first created. */
  repeatabilityFirstSent?: Date;
}
