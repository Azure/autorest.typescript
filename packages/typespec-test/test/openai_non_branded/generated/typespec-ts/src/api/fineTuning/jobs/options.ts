// Licensed under the MIT License.

import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface FineTuningJobsCancelOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FineTuningJobsListEventsOptionalParams extends OperationOptions {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
}

/** Optional parameters. */
export interface FineTuningJobsRetrieveOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FineTuningJobsListOptionalParams extends OperationOptions {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
}

/** Optional parameters. */
export interface FineTuningJobsCreateOptionalParams extends OperationOptions {}
