// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface WidgetsListWidgetsOptions extends OperationOptions {
  optionalHeader?: string;
  nullableOptionalHeader?: string | null;
  optionalDateHeader?: Date;
  nullableDateHeader?: Date | null;
}

export interface WidgetsListWidgetsPagesOptions extends OperationOptions {}

export interface WidgetsQueryWidgetsPagesOptions extends OperationOptions {}

export interface WidgetsGetWidgetOptions extends OperationOptions {}

export interface WidgetsCreateWidgetOptions extends OperationOptions {}

export interface WidgetsCreateOrReplaceOptions extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface WidgetsUpdateWidgetOptions extends OperationOptions {}

export interface WidgetsDeleteWidgetOptions extends OperationOptions {}

export interface WidgetsAnalyzeWidgetOptions extends OperationOptions {}
