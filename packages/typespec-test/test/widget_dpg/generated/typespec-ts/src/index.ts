// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { SAPWidgetServiceClient } from "./sapWidgetServiceClient.js";
export type { RestorePollerOptions } from "./restorePollerHelpers.js";
export { restorePoller } from "./restorePollerHelpers.js";
export type {
  Widget,
  WidgetError,
  SAPUser,
  AnalyzeResult,
  NonReferencedModel,
} from "./models/index.js";
export { KnownVersions } from "./models/index.js";
export type { SAPWidgetServiceClientOptionalParams } from "./api/index.js";
export type { BudgetsOperations, SAPWidgetsOperations } from "./classic/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { RestError, isRestError } from "@azure/core-rest-pipeline";
