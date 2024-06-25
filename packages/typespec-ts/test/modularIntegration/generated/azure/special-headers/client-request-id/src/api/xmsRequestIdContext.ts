// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { XmsRequestIdClientContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface XmsRequestIdClientOptions extends ClientOptions {}

export { XmsRequestIdClientContext } from "../rest/index.js";

/** Azure client request id header configurations. */
export function createXmsRequestId(
  options: XmsRequestIdClientOptions = {},
): XmsRequestIdClientContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-modular-model-usage-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
