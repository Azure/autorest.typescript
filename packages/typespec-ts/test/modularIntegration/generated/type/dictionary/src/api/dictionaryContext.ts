// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { DictionaryContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface DictionaryClientOptions extends ClientOptions {}

export { DictionaryContext } from "../rest/index.js";

/** Illustrates various of dictionaries. */
export function createDictionary(
  options: DictionaryClientOptions = {},
): DictionaryContext {
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
