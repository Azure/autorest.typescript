// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ErrorModel } from "@azure-rest/core-client";

/** Identifier for collections. */
export interface Collection {
  readonly collectionId: string;
}

/** A response containing error details. */
export interface ErrorResponse {
  /** The error object. */
  error: ErrorModel;
  /** String error code indicating what went wrong. */
  errorCode?: string;
}
