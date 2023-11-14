// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface WidgetsListWidgetsOptions extends OperationOptions {
  optionalHeader?: string;
  nullableOptionalHeader?: string | null;
  optionalDateHeader?: Date;
  nullableDateHeader?: Date | null;
}

export interface WidgetsGetWidgetOptions extends OperationOptions {}

export interface WidgetsCreateWidgetOptions extends OperationOptions {}

export interface WidgetsUpdateWidgetOptions extends OperationOptions {}

export interface WidgetsDeleteWidgetOptions extends OperationOptions {}

export interface WidgetsAnalyzeWidgetOptions extends OperationOptions {}
