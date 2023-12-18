// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DemoServiceContext } from "../../api/DemoServiceContext.js";
import { Widget1 } from "../../models/models.js";
import { customGet1 } from "../../api/widgetService/index.js";
import { WidgetServiceCustomGet1Options } from "../../models/options.js";

export interface WidgetServiceOperations {
  customGet1: (
    body: Widget1,
    options?: WidgetServiceCustomGet1Options
  ) => Promise<void>;
}

export function getWidgetService(context: DemoServiceContext) {
  return {
    customGet1: (body: Widget1, options?: WidgetServiceCustomGet1Options) =>
      customGet1(context, body, options),
  };
}

export function getWidgetServiceOperations(
  context: DemoServiceContext
): WidgetServiceOperations {
  return {
    ...getWidgetService(context),
  };
}
