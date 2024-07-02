// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { SingleContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface SingleClientOptions extends ClientOptions {}

export { SingleContext } from "../rest/index.js";

/** Illustrates server with a single path parameter @server */
export function createSingle(
  endpointParam: string,
  options: SingleClientOptions = {},
): SingleContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpointParam, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
