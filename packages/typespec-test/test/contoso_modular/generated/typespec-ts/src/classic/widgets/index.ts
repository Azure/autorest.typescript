// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WidgetManagerContext } from "../../api/WidgetManagerContext.js";
import {
  Widget,
  ResourceOperationStatus,
  OperationStatus,
} from "../../models/models.js";
import {
  getWidget,
  getWidgetOperationStatus,
  createOrUpdateWidget,
  deleteWidget,
  listWidgets,
} from "../../api/widgets/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  WidgetsGetWidgetOptions,
  WidgetsGetWidgetOperationStatusOptions,
  WidgetsCreateOrUpdateWidgetOptions,
  WidgetsDeleteWidgetOptions,
  WidgetsListWidgetsOptions,
} from "../../models/options.js";

export interface WidgetsOperations {
  getWidget: (
    widgetName: string,
    options?: WidgetsGetWidgetOptions,
  ) => Promise<Widget>;
  getWidgetOperationStatus: (
    widgetName: string,
    operationId: string,
    options?: WidgetsGetWidgetOperationStatusOptions,
  ) => Promise<ResourceOperationStatus>;
  createOrUpdateWidget: (
    widgetName: string,
    resource: Widget,
    options?: WidgetsCreateOrUpdateWidgetOptions,
  ) => Promise<Widget>;
  deleteWidget: (
    widgetName: string,
    options?: WidgetsDeleteWidgetOptions,
  ) => Promise<OperationStatus>;
  listWidgets: (
    options?: WidgetsListWidgetsOptions,
  ) => PagedAsyncIterableIterator<Widget>;
}

export function getWidgets(context: WidgetManagerContext) {
  return {
    getWidget: (widgetName: string, options?: WidgetsGetWidgetOptions) =>
      getWidget(context, widgetName, options),
    getWidgetOperationStatus: (
      widgetName: string,
      operationId: string,
      options?: WidgetsGetWidgetOperationStatusOptions,
    ) => getWidgetOperationStatus(context, widgetName, operationId, options),
    createOrUpdateWidget: (
      widgetName: string,
      resource: Widget,
      options?: WidgetsCreateOrUpdateWidgetOptions,
    ) => createOrUpdateWidget(context, widgetName, resource, options),
    deleteWidget: (widgetName: string, options?: WidgetsDeleteWidgetOptions) =>
      deleteWidget(context, widgetName, options),
    listWidgets: (options?: WidgetsListWidgetsOptions) =>
      listWidgets(context, options),
  };
}

export function getWidgetsOperations(
  context: WidgetManagerContext,
): WidgetsOperations {
  return {
    ...getWidgets(context),
  };
}
