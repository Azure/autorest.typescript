// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { FixedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface FixedClientOptions extends ClientOptions {}

export { FixedContext } from "../rest/index.js";

export function createFixed(options: FixedClientOptions = {}): FixedContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-fixed-enums-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
