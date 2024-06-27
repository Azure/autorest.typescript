// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { NullableContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface NullableClientOptions extends ClientOptions {}

export { NullableContext } from "../rest/index.js";

/** Illustrates models with nullable properties. */
export function createNullable(
  options: NullableClientOptions = {},
): NullableContext {
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
