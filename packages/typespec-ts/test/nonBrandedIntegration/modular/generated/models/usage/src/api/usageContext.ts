// Licensed under the MIT license.

import { ClientOptions } from "@typespec/ts-http-runtime";
import { UsageContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface UsageClientOptions extends ClientOptions {}

export { UsageContext } from "../rest/index.js";

/** Illustrates usage of Record in different places(Operation parameters, return type or both). */
export function createUsage(options: UsageClientOptions = {}): UsageContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-modular-api`
    : "azsdk-js-modular-api";

  const clientContext = getClient({
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
