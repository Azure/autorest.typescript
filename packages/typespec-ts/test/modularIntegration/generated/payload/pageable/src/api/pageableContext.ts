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
