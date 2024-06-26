// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { FlattenContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface FlattenClientOptions extends ClientOptions {}

export { FlattenContext } from "../rest/index.js";

/** Illustrates the model flatten cases. */
export function createFlatten(
  options: FlattenClientOptions = {},
): FlattenContext {
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
