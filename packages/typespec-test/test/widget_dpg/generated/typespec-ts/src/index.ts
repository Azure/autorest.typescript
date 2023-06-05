// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { WidgetServiceClient } from "./WidgetServiceClient.js";
export {
  Widget,
  ColorType,
  AnalyzeResult,
  listWidgets,
  getWidget,
  createWidget,
  updateWidget,
  deleteWidget,
  analyzeWidget,
  ListWidgetsOptions,
  GetWidgetOptions,
  CreateWidgetOptions,
  UpdateWidgetOptions,
  DeleteWidgetOptions,
  AnalyzeWidgetOptions,
  createWidgetService,
  WidgetServiceClientOptions,
  WidgetServiceContext,
} from "./api/index.js";
export { RequestOptions } from "./common/interfaces.js";
