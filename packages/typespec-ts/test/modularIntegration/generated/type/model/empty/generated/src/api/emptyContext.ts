// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { EmptyContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface EmptyClientOptions extends ClientOptions {}

export { EmptyContext } from "../rest/index.js";

/** Illustrates usage of empty model used in operation's parameters and responses. */
export function createEmpty(options: EmptyClientOptions = {}): EmptyContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-modular-model-empty-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
