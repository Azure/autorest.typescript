// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { EnumDiscriminatorContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface EnumDiscriminatorClientOptions extends ClientOptions {}

export { EnumDiscriminatorContext } from "../rest/index.js";

/** Illustrates inheritance with enum discriminator. */
export function createEnumDiscriminator(
  options: EnumDiscriminatorClientOptions = {},
): EnumDiscriminatorContext {
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
