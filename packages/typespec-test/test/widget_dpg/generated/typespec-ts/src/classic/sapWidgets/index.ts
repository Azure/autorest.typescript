// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SAPWidgetServiceContext } from "../../api/sapWidgetServiceContext.js";
import {
  analyzeWidget,
  deleteWidget,
  updateWidget,
  createOrReplace,
  createWidget,
  getWidget,
  queryWidgetsPages,
  listWidgetsPages,
  sapListWidgets,
  SAPWidgetsAnalyzeWidgetOptionalParams,
  SAPWidgetsDeleteWidgetOptionalParams,
  SAPWidgetsUpdateWidgetOptionalParams,
  SAPWidgetsCreateOrReplaceOptionalParams,
  SAPWidgetsCreateWidgetOptionalParams,
  SAPWidgetsGetWidgetOptionalParams,
  SAPWidgetsQueryWidgetsPagesOptionalParams,
  SAPWidgetsListWidgetsPagesOptionalParams,
  SAPWidgetsSAPListWidgetsOptionalParams,
} from "../../api/sapWidgets/index.js";
import { SAPUser, Widget, AnalyzeResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SAPWidgets operations. */
export interface SAPWidgetsOperations {
  /** Analyze a widget. The only guarantee is that this method will return a string containing the results of the analysis. */
  analyzeWidget: (
    id: string,
    options?: SAPWidgetsAnalyzeWidgetOptionalParams,
  ) => Promise<AnalyzeResult>;
  /** Delete a widget by ID. */
  deleteWidget: (
    id: string,
    options?: SAPWidgetsDeleteWidgetOptionalParams,
  ) => Promise<void>;
  /**
   * Update the contents of the widget. The widget ID is required in the input, but cannot be changed. All other fields
   * are optional and will be updated within the widget if provided.
   */
  updateWidget: (
    id: string,
    options?: SAPWidgetsUpdateWidgetOptionalParams,
  ) => Promise<Widget>;
  /** Long-running resource create or replace operation template. */
  createOrReplace: (
    name: string,
    resource: SAPUser,
    options?: SAPWidgetsCreateOrReplaceOptionalParams,
  ) => PollerLike<OperationState<SAPUser>, SAPUser>;
  /**
   * Create a new widget.
   *
   * The widget ID is not required during creation, as it is automatically set by the server. Providing an ID will
   * result in an error.
   */
  createWidget: (
    weight: number,
    color: "red" | "blue",
    options?: SAPWidgetsCreateWidgetOptionalParams,
  ) => Promise<Widget>;
  /** Get a widget by ID. */
  getWidget: (
    id: string,
    options?: SAPWidgetsGetWidgetOptionalParams,
  ) => Promise<Widget>;
  queryWidgetsPages: (
    page: number,
    pageSize: number,
    options?: SAPWidgetsQueryWidgetsPagesOptionalParams,
  ) => PagedAsyncIterableIterator<Widget>;
  listWidgetsPages: (
    page: number,
    pageSize: number,
    options?: SAPWidgetsListWidgetsPagesOptionalParams,
  ) => PagedAsyncIterableIterator<Widget>;
  /**
   * List all widgets in the system. This operation is not paginated, and returns a simple array of widgets.
   *
   * It does not accept any options or parameters.
   */
  sapListWidgets: (
    requiredHeader: string,
    bytesHeader: Uint8Array,
    value: Uint8Array,
    csvArrayHeader: Uint8Array[],
    utcDateHeader: Date,
    options?: SAPWidgetsSAPListWidgetsOptionalParams,
  ) => Promise<Widget[]>;
}

function _getSAPWidgets(context: SAPWidgetServiceContext) {
  return {
    analyzeWidget: (
      id: string,
      options?: SAPWidgetsAnalyzeWidgetOptionalParams,
    ) => analyzeWidget(context, id, options),
    deleteWidget: (
      id: string,
      options?: SAPWidgetsDeleteWidgetOptionalParams,
    ) => deleteWidget(context, id, options),
    updateWidget: (
      id: string,
      options?: SAPWidgetsUpdateWidgetOptionalParams,
    ) => updateWidget(context, id, options),
    createOrReplace: (
      name: string,
      resource: SAPUser,
      options?: SAPWidgetsCreateOrReplaceOptionalParams,
    ) => createOrReplace(context, name, resource, options),
    createWidget: (
      weight: number,
      color: "red" | "blue",
      options?: SAPWidgetsCreateWidgetOptionalParams,
    ) => createWidget(context, weight, color, options),
    getWidget: (id: string, options?: SAPWidgetsGetWidgetOptionalParams) =>
      getWidget(context, id, options),
    queryWidgetsPages: (
      page: number,
      pageSize: number,
      options?: SAPWidgetsQueryWidgetsPagesOptionalParams,
    ) => queryWidgetsPages(context, page, pageSize, options),
    listWidgetsPages: (
      page: number,
      pageSize: number,
      options?: SAPWidgetsListWidgetsPagesOptionalParams,
    ) => listWidgetsPages(context, page, pageSize, options),
    sapListWidgets: (
      requiredHeader: string,
      bytesHeader: Uint8Array,
      value: Uint8Array,
      csvArrayHeader: Uint8Array[],
      utcDateHeader: Date,
      options?: SAPWidgetsSAPListWidgetsOptionalParams,
    ) =>
      sapListWidgets(
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

export function _getSAPWidgetsOperations(
  context: SAPWidgetServiceContext,
): SAPWidgetsOperations {
  return {
    ..._getSAPWidgets(context),
  };
}
