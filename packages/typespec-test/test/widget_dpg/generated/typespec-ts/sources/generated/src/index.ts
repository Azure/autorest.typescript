// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  WidgetServiceClient,
  WidgetServiceClientOptions,
} from "./widgetServiceClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  User,
  Widget,
  WidgetError,
  ListWidgetsPagesResults,
  CreateWidget,
  UpdateWidget,
  AnalyzeResult,
  NonReferencedModel,
  Versions,
  OperationStatusUserError,
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
  BudgetsCreateOrUpdateOptionalParams,
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./models/index.js";
export { BudgetsOperations, WidgetsOperations } from "./classic/index.js";
