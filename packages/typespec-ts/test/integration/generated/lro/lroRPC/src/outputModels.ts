// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorResponse } from "@azure-rest/core-client";

/** Result of the job */
export interface JobResultOutput {
  /** A processing job identifier. */
  readonly jobId: string;
  /** Comment. */
  readonly comment: string;
  /**
   * The status of the processing job.
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "canceled", "partiallyCompleted"
   */
  readonly status: string;
  /** Error objects that describes the error when status is "Failed". */
  readonly errors?: Array<ErrorResponse>;
  /** The results. */
  readonly results?: string[];
}
