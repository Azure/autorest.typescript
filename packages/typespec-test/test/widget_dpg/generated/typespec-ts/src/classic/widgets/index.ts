// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WidgetServiceContext } from "../../api/WidgetServiceContext.js";
import {
  Widget,
  CreateWidget,
  UpdateWidget,
  AnalyzeResult,
} from "../../models/models.js";
import {
  listWidgets,
  listWidgetsPages,
  queryWidgetsPages,
  getWidget,
  createWidget,
  updateWidget,
  deleteWidget,
  analyzeWidget,
} from "../../api/widgets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  WidgetsListWidgetsOptionalParams,
  WidgetsListWidgetsPagesOptionalParams,
  WidgetsQueryWidgetsPagesOptionalParams,
  WidgetsGetWidgetOptionalParams,
  WidgetsCreateWidgetOptionalParams,
  WidgetsUpdateWidgetOptionalParams,
  WidgetsDeleteWidgetOptionalParams,
  WidgetsAnalyzeWidgetOptionalParams,
} from "../../models/options.js";

export interface WidgetsOperations {
  listWidgets: (
    requiredHeader: string,
    bytesHeader: Uint8Array,
    value: Uint8Array,
    csvArrayHeader: Uint8Array[],
    utcDateHeader: Date,
    options?: WidgetsListWidgetsOptionalParams,
  ) => Promise<Widget[]>;
  listWidgetsPages: (
    page: number,
    pageSize: number,
    options?: WidgetsListWidgetsPagesOptionalParams,
  ) => PagedAsyncIterableIterator<Widget>;
  queryWidgetsPages: (
    page: number,
    pageSize: number,
    options?: WidgetsQueryWidgetsPagesOptionalParams,
  ) => PagedAsyncIterableIterator<Widget>;
  getWidget: (
    id: string,
    options?: WidgetsGetWidgetOptionalParams,
  ) => Promise<Widget>;
  createWidget: (
    body: CreateWidget,
    options?: WidgetsCreateWidgetOptionalParams,
  ) => Promise<Widget>;
  updateWidget: (
    id: string,
    body: UpdateWidget,
    options?: WidgetsUpdateWidgetOptionalParams,
  ) => Promise<Widget>;
  deleteWidget: (
    id: string,
    options?: WidgetsDeleteWidgetOptionalParams,
  ) => Promise<void>;
  analyzeWidget: (
    id: string,
    options?: WidgetsAnalyzeWidgetOptionalParams,
  ) => Promise<AnalyzeResult>;
}

export function getWidgets(context: WidgetServiceContext) {
  return {
    listWidgets: (
      requiredHeader: string,
      bytesHeader: Uint8Array,
      value: Uint8Array,
      csvArrayHeader: Uint8Array[],
      utcDateHeader: Date,
      options?: WidgetsListWidgetsOptionalParams,
    ) =>
      listWidgets(
        context,
        requiredHeader,
        bytesHeader,
        value,
        csvArrayHeader,
        utcDateHeader,
        options,
      ),
    listWidgetsPages: (
      page: number,
      pageSize: number,
      options?: WidgetsListWidgetsPagesOptionalParams,
    ) => listWidgetsPages(context, page, pageSize, options),
    queryWidgetsPages: (
      page: number,
      pageSize: number,
      options?: WidgetsQueryWidgetsPagesOptionalParams,
    ) => queryWidgetsPages(context, page, pageSize, options),
    getWidget: (id: string, options?: WidgetsGetWidgetOptionalParams) =>
      getWidget(context, id, options),
    createWidget: (
      body: CreateWidget,
      options?: WidgetsCreateWidgetOptionalParams,
    ) => createWidget(context, body, options),
    updateWidget: (
      id: string,
      body: UpdateWidget,
      options?: WidgetsUpdateWidgetOptionalParams,
    ) => updateWidget(context, id, body, options),
    deleteWidget: (id: string, options?: WidgetsDeleteWidgetOptionalParams) =>
      deleteWidget(context, id, options),
    analyzeWidget: (id: string, options?: WidgetsAnalyzeWidgetOptionalParams) =>
      analyzeWidget(context, id, options),
  };
}

export function getWidgetsOperations(
  context: WidgetServiceContext,
): WidgetsOperations {
  return {
    ...getWidgets(context),
  };
}
