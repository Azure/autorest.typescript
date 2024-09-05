// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ErrorModel } from "@azure-rest/core-client";

/** The Contoso Widget Manager service version. */
export type Versions = "2022-08-30";

/** A response containing error details. */
export interface ErrorResponse {
  /** The error object. */
  error: ErrorModel;
  /** String error code indicating what went wrong. */
  errorCode?: string;
}
