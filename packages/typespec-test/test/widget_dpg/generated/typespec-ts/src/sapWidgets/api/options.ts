// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface AnalyzeWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UpdateWidgetOptionalParams extends OperationOptions {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight?: number;
  /** The color of the widget. */
  color?: "red" | "blue";
}

/** Optional parameters. */
export interface CreateOrReplaceOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CreateWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface QueryWidgetsPagesOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListWidgetsPagesOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SAPListWidgetsOptionalParams extends OperationOptions {
  optionalHeader?: string;
  nullableOptionalHeader?: string;
  optionalDateHeader?: Date;
  nullableDateHeader?: Date;
}
