// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorResponse, ErrorModel } from "@azure-rest/core-client";

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

/** Data of the job */
export interface JobDataOutput {
  /** Comment. */
  comment: string;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: JobResultOutput;
}
