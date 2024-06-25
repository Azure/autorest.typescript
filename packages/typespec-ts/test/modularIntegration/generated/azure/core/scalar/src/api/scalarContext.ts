// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ScalarContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ScalarClientOptions extends ClientOptions {}

export { ScalarContext } from "../rest/index.js";

export function createScalar(options: ScalarClientOptions = {}): ScalarContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-azure-core-scalar-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
