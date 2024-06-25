// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ContentNegotiationContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ContentNegotiationClientOptions extends ClientOptions {}

export { ContentNegotiationContext } from "../rest/index.js";

/** Test describing optionality of the request body. */
export function createContentNegotiation(
  options: ContentNegotiationClientOptions = {},
): ContentNegotiationContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-payload-content-negotiation-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
