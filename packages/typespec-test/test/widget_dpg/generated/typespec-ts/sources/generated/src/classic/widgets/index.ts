// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WidgetServiceContext } from "../../api/WidgetServiceContext.js";
import {
  Widget,
  CreateWidget,
  User,
  UpdateWidget,
  AnalyzeResult,
} from "../../models/models.js";
import {
  listWidgets,
  listWidgetsPages,
  queryWidgetsPages,
  getWidget,
  createWidget,
  createOrReplace,
  updateWidget,
  deleteWidget,
  analyzeWidget,
} from "../../api/widgets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { Next } from "@marygao/core-lro";
import {
  WidgetsListWidgetsOptions,
  WidgetsListWidgetsPagesOptions,
  WidgetsQueryWidgetsPagesOptions,
  WidgetsGetWidgetOptions,
  WidgetsCreateWidgetOptions,
  WidgetsCreateOrReplaceOptions,
  WidgetsUpdateWidgetOptions,
  WidgetsDeleteWidgetOptions,
  WidgetsAnalyzeWidgetOptions,
} from "../../models/options.js";

export interface WidgetsOperations {
  listWidgets: (
    requiredHeader: string,
    bytesHeader: Uint8Array,
    value: Uint8Array,
    csvArrayHeader: Uint8Array[],
    utcDateHeader: Date,
    options?: WidgetsListWidgetsOptions,
  ) => Promise<Widget[]>;
  listWidgetsPages: (
    page: number,
    pageSize: number,
    options?: WidgetsListWidgetsPagesOptions,
  ) => PagedAsyncIterableIterator<Widget>;
  queryWidgetsPages: (
    page: number,
    pageSize: number,
    options?: WidgetsQueryWidgetsPagesOptions,
  ) => PagedAsyncIterableIterator<Widget>;
  getWidget: (id: string, options?: WidgetsGetWidgetOptions) => Promise<Widget>;
  createWidget: (
    body: CreateWidget,
    options?: WidgetsCreateWidgetOptions,
  ) => Promise<Widget>;
  createOrReplace: (
    name: string,
    resource: User,
    options?: WidgetsCreateOrReplaceOptions,
  ) => Next.PollerLike<Next.OperationState<User>, User>;
  updateWidget: (
    id: string,
    body: UpdateWidget,
    options?: WidgetsUpdateWidgetOptions,
  ) => Promise<Widget>;
  deleteWidget: (
    id: string,
    options?: WidgetsDeleteWidgetOptions,
  ) => Promise<void>;
  analyzeWidget: (
    id: string,
    options?: WidgetsAnalyzeWidgetOptions,
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
      options?: WidgetsListWidgetsOptions,
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
      options?: WidgetsListWidgetsPagesOptions,
    ) => listWidgetsPages(context, page, pageSize, options),
    queryWidgetsPages: (
      page: number,
      pageSize: number,
      options?: WidgetsQueryWidgetsPagesOptions,
    ) => queryWidgetsPages(context, page, pageSize, options),
    getWidget: (id: string, options?: WidgetsGetWidgetOptions) =>
      getWidget(context, id, options),
    createWidget: (body: CreateWidget, options?: WidgetsCreateWidgetOptions) =>
      createWidget(context, body, options),
    createOrReplace: (
      name: string,
      resource: User,
      options?: WidgetsCreateOrReplaceOptions,
    ) => createOrReplace(context, name, resource, options),
    updateWidget: (
      id: string,
      body: UpdateWidget,
      options?: WidgetsUpdateWidgetOptions,
    ) => updateWidget(context, id, body, options),
    deleteWidget: (id: string, options?: WidgetsDeleteWidgetOptions) =>
      deleteWidget(context, id, options),
    analyzeWidget: (id: string, options?: WidgetsAnalyzeWidgetOptions) =>
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
