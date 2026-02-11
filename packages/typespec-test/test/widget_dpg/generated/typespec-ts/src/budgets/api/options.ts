// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ContinueOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetBudgetsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateOrReplaceOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}
