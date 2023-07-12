// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { ColorType } from "./models.js";

export interface ListWidgetsOptions extends OperationOptions {}

export interface GetWidgetOptions extends OperationOptions {}

export interface CreateWidgetOptions extends OperationOptions {}

export interface UpdateWidgetOptions extends OperationOptions {
  /** The weight of the widget. This is an int32, but must be greater than zero. */
  weight?: number;
  /** The color of the widget. */
  color?: ColorType;
}

export interface DeleteWidgetOptions extends OperationOptions {}

export interface AnalyzeWidgetOptions extends OperationOptions {}
