// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { WidgetServiceClient } from "./widgetServiceClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  User,
  Widget,
  WidgetError,
  AnalyzeResult,
  NonReferencedModel,
  KnownVersions,
} from "./models/widgetService/index.js";
export { WidgetServiceClientOptionalParams } from "./api/index.js";
export {
  BudgetsGetBudgetsOptionalParams,
  BudgetsCreateOrReplaceOptionalParams,
} from "./api/budgets/index.js";
export {
  WidgetsAnalyzeWidgetOptionalParams,
  WidgetsDeleteWidgetOptionalParams,
  WidgetsUpdateWidgetOptionalParams,
  WidgetsCreateOrReplaceOptionalParams,
  WidgetsCreateWidgetOptionalParams,
  WidgetsGetWidgetOptionalParams,
  WidgetsQueryWidgetsPagesOptionalParams,
  WidgetsListWidgetsPagesOptionalParams,
  WidgetsListWidgetsOptionalParams,
} from "./api/widgets/index.js";
export { BudgetsOperations, WidgetsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
