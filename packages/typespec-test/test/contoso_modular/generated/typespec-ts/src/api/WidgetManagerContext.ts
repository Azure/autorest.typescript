// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { WidgetManagerContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface WidgetManagerClientOptions extends ClientOptions {}

export { WidgetManagerContext } from "../rest/index.js";

export function createWidgetManager(
  endpoint: string,
  options: WidgetManagerClientOptions = {},
): WidgetManagerContext {
  const clientContext = getClient(endpoint, options);
  return clientContext;
}
