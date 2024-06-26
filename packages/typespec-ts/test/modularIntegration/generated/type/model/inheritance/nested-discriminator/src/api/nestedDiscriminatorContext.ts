// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { NestedDiscriminatorContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface NestedDiscriminatorClientOptions extends ClientOptions {}

export { NestedDiscriminatorContext } from "../rest/index.js";

/** Illustrates multiple level inheritance with multiple discriminators. */
export function createNestedDiscriminator(
  options: NestedDiscriminatorClientOptions = {},
): NestedDiscriminatorContext {
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
