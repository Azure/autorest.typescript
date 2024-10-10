// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
export interface WidgetsUpdateWidgetOptionalParams extends OperationOptions {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight?: number;
  /** The color of the widget. */
  color?: "red" | "blue";
}

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
