// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { PageableContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface PageableClientOptions extends ClientOptions {}

export { PageableContext } from "../rest/index.js";

/** Test describing pageable. */
export function createPageable(
  options: PageableClientOptions = {},
): PageableContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-payload-pageable-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
