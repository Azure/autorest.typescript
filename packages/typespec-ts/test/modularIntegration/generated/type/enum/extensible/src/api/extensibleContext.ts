// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ExtensibleContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ExtensibleClientOptions extends ClientOptions {}

export { ExtensibleContext } from "../rest/index.js";

export function createExtensible(
  options: ExtensibleClientOptions = {},
): ExtensibleContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-extensible-enums-api/1.0.0",
    },
    ...options,
  });
  return clientContext;
}
