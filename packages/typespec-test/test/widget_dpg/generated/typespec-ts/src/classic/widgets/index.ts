// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WidgetsAnalyzeWidgetOptionalParams,
  WidgetsDeleteWidgetOptionalParams,
  WidgetsUpdateWidgetOptionalParams,
  WidgetsCreateOrReplaceOptionalParams,
  WidgetsCreateWidgetOptionalParams,
  WidgetsGetWidgetOptionalParams,
  WidgetsQueryWidgetsPagesOptionalParams,
  WidgetsListWidgetsPagesOptionalParams,
  WidgetsListWidgetsOptionalParams,
} from "../../api/options.js";
import { WidgetServiceContext } from "../../api/widgetServiceContext.js";
import {
  analyzeWidget,
  deleteWidget,
  updateWidget,
  createOrReplace,
  createWidget,
  getWidget,
  queryWidgetsPages,
  listWidgetsPages,
  listWidgets,
} from "../../api/widgets/index.js";
import { User, Widget, AnalyzeResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Widgets operations. */
export interface WidgetsOperations {
  /** Analyze a widget. The only guarantee is that this method will return a string containing the results of the analysis. */
  analyzeWidget: (
    id: string,
    options?: WidgetsAnalyzeWidgetOptionalParams,
  ) => Promise<AnalyzeResult>;
  /** Delete a widget by ID. */
  deleteWidget: (
    id: string,
    options?: WidgetsDeleteWidgetOptionalParams,
  ) => Promise<void>;
  /**
   * Update the contents of the widget. The widget ID is required in the input, but cannot be changed. All other fields
   * are optional and will be updated within the widget if provided.
   */
  updateWidget: (
    id: string,
    options?: WidgetsUpdateWidgetOptionalParams,
  ) => Promise<Widget>;
  /** Long-running resource create or replace operation template. */
  createOrReplace: (
    name: string,
    resource: User,
    options?: WidgetsCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<User>, User>;
  /**
   * Create a new widget.
   *
   * The widget ID is not required during creation, as it is automatically set by the server. Providing an ID will
   * result in an error.
   */
  createWidget: (
    weight: number,
    color: "red" | "blue",
    options?: WidgetsCreateWidgetOptionalParams,
  ) => Promise<Widget>;
  /** Get a widget by ID. */
  getWidget: (
    id: string,
    options?: WidgetsGetWidgetOptionalParams,
  ) => Promise<Widget>;
  queryWidgetsPages: (
    page: number,
    pageSize: number,
    options?: WidgetsQueryWidgetsPagesOptionalParams,
  ) => PagedAsyncIterableIterator<Widget>;
  listWidgetsPages: (
    page: number,
    pageSize: number,
    options?: WidgetsListWidgetsPagesOptionalParams,
  ) => PagedAsyncIterableIterator<Widget>;
  /**
   * List all widgets in the system. This operation is not paginated, and returns a simple array of widgets.
   *
   * It does not accept any options or parameters.
   */
  listWidgets: (
    requiredHeader: string,
    bytesHeader: Uint8Array,
    value: Uint8Array,
    csvArrayHeader: Uint8Array[],
    utcDateHeader: Date,
    options?: WidgetsListWidgetsOptionalParams,
  ) => Promise<Widget[]>;
}

export function getWidgets(context: WidgetServiceContext) {
  return {
    analyzeWidget: (id: string, options?: WidgetsAnalyzeWidgetOptionalParams) =>
      analyzeWidget(context, id, options),
    deleteWidget: (id: string, options?: WidgetsDeleteWidgetOptionalParams) =>
      deleteWidget(context, id, options),
    updateWidget: (id: string, options?: WidgetsUpdateWidgetOptionalParams) =>
      updateWidget(context, id, options),
    createOrReplace: (
      name: string,
      resource: User,
      options?: WidgetsCreateOrReplaceOptionalParams,
    ) => createOrReplace(context, name, resource, options),
    createWidget: (
      weight: number,
      color: "red" | "blue",
      options?: WidgetsCreateWidgetOptionalParams,
    ) => createWidget(context, weight, color, options),
    getWidget: (id: string, options?: WidgetsGetWidgetOptionalParams) =>
      getWidget(context, id, options),
    queryWidgetsPages: (
      page: number,
      pageSize: number,
      options?: WidgetsQueryWidgetsPagesOptionalParams,
    ) => queryWidgetsPages(context, page, pageSize, options),
    listWidgetsPages: (
      page: number,
      pageSize: number,
      options?: WidgetsListWidgetsPagesOptionalParams,
    ) => listWidgetsPages(context, page, pageSize, options),
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
  };
}

export function getWidgetsOperations(
  context: WidgetServiceContext,
): WidgetsOperations {
  return {
    ...getWidgets(context),
  };
}
