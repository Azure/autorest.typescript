// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { SingleDiscriminatorContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface SingleDiscriminatorClientOptions extends ClientOptions {}

export { SingleDiscriminatorContext } from "../rest/index.js";

/** Illustrates inheritance with single discriminator. */
export function createSingleDiscriminator(
  options: SingleDiscriminatorClientOptions = {},
): SingleDiscriminatorContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-model-inheritance-single-discriminator-api/1.0.0",
    },
    ...options,
  });
  return clientContext;
}
