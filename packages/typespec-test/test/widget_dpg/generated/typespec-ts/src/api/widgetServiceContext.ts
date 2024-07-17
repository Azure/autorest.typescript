// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { WidgetServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface WidgetServiceClientOptionalParams extends ClientOptions {}

export { WidgetServiceContext } from "../rest/index.js";

export function createWidgetService(
  endpoint: string,
  options: WidgetServiceClientOptionalParams = {},
): WidgetServiceContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpoint, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
