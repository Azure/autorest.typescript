// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { FooContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface FooClientOptions extends ClientOptions {}

export { FooContext } from "../rest/index.js";

export function createFoo(
  endpoint: string,
  options: FooClientOptions = {},
): FooContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-modular-api`
    : "azsdk-js-modular-api";

  const clientContext = getClient(endpoint, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
