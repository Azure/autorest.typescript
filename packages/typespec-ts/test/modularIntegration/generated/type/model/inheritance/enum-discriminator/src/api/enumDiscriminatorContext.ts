// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { EnumDiscriminatorContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface EnumDiscriminatorClientOptions extends ClientOptions {}

export { EnumDiscriminatorContext } from "../rest/index.js";

/** Illustrates inheritance with enum discriminator. */
export function createEnumDiscriminator(
  options: EnumDiscriminatorClientOptions = {},
): EnumDiscriminatorContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-model-inheritance-enum-discriminator-api/1.0.0",
    },
    ...options,
  });
  return clientContext;
}
