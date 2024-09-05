// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { _ListWidgetsPagesResults } from "./models/models.js";
import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export {
  WidgetServiceClient,
  WidgetServiceClientOptionalParams,
} from "./widgetServiceClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  User,
  Widget,
  WidgetError,
  CreateWidgetRequest,
  UpdateWidgetRequest,
  AnalyzeResult,
  NonReferencedModel,
  WidgetColor,
  CreateWidgetRequestColor,
  UpdateWidgetRequestColor,
  Versions,
  ErrorResponse,
  WidgetsListWidgetsOptionalParams,
  WidgetsListWidgetsPagesOptionalParams,
  WidgetsQueryWidgetsPagesOptionalParams,
  WidgetsGetWidgetOptionalParams,
  WidgetsCreateWidgetOptionalParams,
  WidgetsCreateOrReplaceOptionalParams,
  WidgetsUpdateWidgetOptionalParams,
  WidgetsDeleteWidgetOptionalParams,
  WidgetsAnalyzeWidgetOptionalParams,
  BudgetsCreateOrReplaceOptionalParams,
} from "./models/index.js";
export { BudgetsOperations, WidgetsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
