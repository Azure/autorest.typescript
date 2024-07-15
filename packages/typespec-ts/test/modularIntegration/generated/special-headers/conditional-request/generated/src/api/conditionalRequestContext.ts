// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ConditionalRequestContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface ConditionalRequestClientOptions extends ClientOptions {}

export { ConditionalRequestContext } from "../rest/index.js";

/** Illustrates conditional request headers */
export function createConditionalRequest(
  options: ConditionalRequestClientOptions = {},
): ConditionalRequestContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient({
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
