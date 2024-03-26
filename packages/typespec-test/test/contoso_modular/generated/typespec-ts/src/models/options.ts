// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface WidgetsGetWidgetOptions extends OperationOptions {}

export interface WidgetsGetWidgetOperationStatusOptions
  extends OperationOptions {}

export interface WidgetsCreateOrUpdateWidgetOptions extends OperationOptions {
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}

export interface WidgetsDeleteWidgetOptions extends OperationOptions {}

export interface WidgetsListWidgetsOptions extends OperationOptions {}
