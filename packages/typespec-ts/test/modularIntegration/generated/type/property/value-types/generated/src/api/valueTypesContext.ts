// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { ValueTypesContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface ValueTypesClientOptions extends ClientOptions {}

export { ValueTypesContext } from "../rest/index.js";

/** Illustrates various property types for models */
export function createValueTypes(
  options: ValueTypesClientOptions = {},
): ValueTypesContext {
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
