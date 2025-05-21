// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface BudgetsContinueOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface BudgetsGetBudgetsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface BudgetsCreateOrReplaceOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}
