// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { BodyOptionalityContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface BodyOptionalityClientOptions extends ClientOptions {}

export { BodyOptionalityContext } from "../rest/index.js";

/** Test describing optionality of the request body. */
export function createBodyOptionality(
  options: BodyOptionalityClientOptions = {},
): BodyOptionalityContext {
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
