// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface WidgetsListWidgetsOptionalParams extends OperationOptions {
  optionalHeader?: string;
  nullableOptionalHeader?: string | null;
  optionalDateHeader?: Date;
  nullableDateHeader?: Date | null;
}

/** Optional parameters. */
export interface WidgetsListWidgetsPagesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WidgetsQueryWidgetsPagesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WidgetsGetWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WidgetsCreateWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WidgetsCreateOrReplaceOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** The API version to use for this operation. */
  apiVersion?: string;
}

/** Optional parameters. */
export interface WidgetsUpdateWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WidgetsDeleteWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WidgetsAnalyzeWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface BudgetsCreateOrReplaceOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** The API version to use for this operation. */
  apiVersion?: string;
}

/** Optional parameters. */
export interface BudgetsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** The API version to use for this operation. */
  apiVersion?: string;
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}
