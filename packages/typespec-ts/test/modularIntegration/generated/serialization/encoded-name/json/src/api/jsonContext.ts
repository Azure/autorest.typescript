// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { JsonContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface JsonClientOptions extends ClientOptions {}

export { JsonContext } from "../rest/index.js";

/** Projection */
export function createJson(options: JsonClientOptions = {}): JsonContext {
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
