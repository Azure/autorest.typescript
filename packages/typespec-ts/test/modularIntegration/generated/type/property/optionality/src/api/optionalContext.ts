// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { OptionalContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface OptionalClientOptions extends ClientOptions {}

export { OptionalContext } from "../rest/index.js";

/** Illustrates models with optional properties. */
export function createOptional(
  options: OptionalClientOptions = {},
): OptionalContext {
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
