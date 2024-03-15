// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorResponse } from "@azure-rest/core-client";

/** Result of the job */
export interface JobResultOutput {
  /** A processing job identifier. */
  readonly jobId: string;
  /** Comment. */
  readonly comment: string;
  /** The status of the processing job. */
  readonly status: JobStatusOutput;
  /** Error objects that describes the error when status is "Failed". */
  readonly errors?: Array<ErrorResponse>;
  /** The results. */
  readonly results?: string[];
}

/** Alias for JobStatusOutput */
export type JobStatusOutput =
  | string
  | "notStarted"
  | "running"
  | "Succeeded"
  | "Failed"
  | "canceled"
  | "partiallyCompleted";
