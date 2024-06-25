// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { WidgetServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface WidgetServiceClientOptions extends ClientOptions {}

export { WidgetServiceContext } from "../rest/index.js";

export function createWidgetService(
  endpoint: string,
  options: WidgetServiceClientOptions = {},
): WidgetServiceContext {
  const clientContext = getClient(endpoint, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-widget_dpg-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
