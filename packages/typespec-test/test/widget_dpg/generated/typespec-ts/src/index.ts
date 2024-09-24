// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _ListWidgetsPagesResults,
  _listWidgetsPagesResultsSerializer,
  _listWidgetsPagesResultsDeserializer,
} from "./models/models.js";
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
  WidgetColor,
  WidgetError,
  CreateWidget,
  CreateWidgetColor,
  UpdateWidgetRequest,
  UpdateWidgetRequestColor,
  AnalyzeResult,
  NonReferencedModel,
  Versions,
} from "./models/index.js";
export {
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
  createWidgetService,
  WidgetServiceContext,
  WidgetServiceClientOptionalParams,
} from "./api/index.js";
export { BudgetsOperations, WidgetsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
