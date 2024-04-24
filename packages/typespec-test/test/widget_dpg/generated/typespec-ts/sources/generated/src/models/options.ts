// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface WidgetsListWidgetsOptionalParams extends OperationOptions {
  optionalHeader?: string;
  nullableOptionalHeader?: string | null;
  optionalDateHeader?: Date;
  nullableDateHeader?: Date | null;
}

export interface WidgetsListWidgetsPagesOptionalParams
  extends OperationOptions {}

export interface WidgetsQueryWidgetsPagesOptionalParams
  extends OperationOptions {}

export interface WidgetsGetWidgetOptionalParams extends OperationOptions {}

export interface WidgetsCreateWidgetOptionalParams extends OperationOptions {}

export interface WidgetsCreateOrReplaceOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export interface WidgetsUpdateWidgetOptionalParams extends OperationOptions {}

export interface WidgetsDeleteWidgetOptionalParams extends OperationOptions {}

export interface WidgetsAnalyzeWidgetOptionalParams extends OperationOptions {}

export interface BudgetsCreateOrReplaceOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export interface BudgetsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** The API version to use for this operation. */
  apiVersion?: string;
  /** This request has a JSON Merge Patch body. */
  contentType?: string;
}
