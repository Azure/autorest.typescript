// Licensed under the MIT license.

import { ClientOptions } from "@typespec/ts-http-runtime";
import { WidgetServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface WidgetServiceClientOptions extends ClientOptions {}

export { WidgetServiceContext } from "../rest/index.js";

export function createWidgetService(
  endpoint: string,
  options: WidgetServiceClientOptions = {},
): WidgetServiceContext {
  const clientContext = getClient(endpoint, options);
  return clientContext;
}
