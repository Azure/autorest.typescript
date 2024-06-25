// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { UsageContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface UsageClientOptions extends ClientOptions {}

export { UsageContext } from "../rest/index.js";

/** Test for internal decorator. */
export function createUsage(options: UsageClientOptions = {}): UsageContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-clientGeneratorCore-usage-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
