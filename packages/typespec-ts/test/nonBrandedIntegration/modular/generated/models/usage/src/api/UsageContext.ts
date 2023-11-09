// Licensed under the MIT license.

import { ClientOptions } from "@typespec/ts-http-runtime";
import { UsageContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface UsageClientOptions extends ClientOptions {}

export { UsageContext } from "../rest/index.js";

/** Illustrates usage of Record in different places(Operation parameters, return type or both). */
export function createUsage(options: UsageClientOptions = {}): UsageContext {
  const clientContext = getClient(options);
  return clientContext;
}
