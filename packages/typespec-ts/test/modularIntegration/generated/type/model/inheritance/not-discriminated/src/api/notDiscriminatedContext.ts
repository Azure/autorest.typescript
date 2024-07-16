// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { NotDiscriminatedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface NotDiscriminatedClientOptions extends ClientOptions {}

export { NotDiscriminatedContext } from "../rest/index.js";

/** Illustrates not-discriminated inheritance model. */
export function createNotDiscriminated(
  options: NotDiscriminatedClientOptions = {},
): NotDiscriminatedContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient({
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
