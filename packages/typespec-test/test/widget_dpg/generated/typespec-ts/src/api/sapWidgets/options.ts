// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface SAPWidgetsAnalyzeWidgetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SAPWidgetsDeleteWidgetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SAPWidgetsUpdateWidgetOptionalParams extends OperationOptions {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight?: number;
  /** The color of the widget. */
  color?: "red" | "blue";
}

/** Optional parameters. */
export interface SAPWidgetsCreateOrReplaceOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface SAPWidgetsCreateWidgetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SAPWidgetsGetWidgetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SAPWidgetsQueryWidgetsPagesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SAPWidgetsListWidgetsPagesOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface SAPWidgetsSAPListWidgetsOptionalParams
  extends OperationOptions {
  optionalHeader?: string;
  nullableOptionalHeader?: string | null;
  optionalDateHeader?: Date;
  nullableDateHeader?: Date | null;
}
