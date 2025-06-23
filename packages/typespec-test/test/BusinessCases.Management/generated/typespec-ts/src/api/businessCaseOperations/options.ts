// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface BusinessCaseOperationsGetReportDownloadUrlOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface BusinessCaseOperationsCompareSummaryOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface BusinessCaseOperationsDeleteOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface BusinessCaseOperationsCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface BusinessCaseOperationsListByParentOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface BusinessCaseOperationsGetOptionalParams
  extends OperationOptions {}
