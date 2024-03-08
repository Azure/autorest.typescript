// Licensed under the MIT license.

import { OperationOptions } from "@typespec/ts-http-runtime";

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

export interface WidgetsUpdateWidgetOptions extends OperationOptions {}

export interface WidgetsDeleteWidgetOptions extends OperationOptions {}

export interface WidgetsAnalyzeWidgetOptions extends OperationOptions {}
