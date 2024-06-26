// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { RepeatabilityContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RepeatabilityClientOptions extends ClientOptions {}

export { RepeatabilityContext } from "../rest/index.js";

/** Illustrates OASIS repeatability headers */
export function createRepeatability(
  options: RepeatabilityClientOptions = {},
): RepeatabilityContext {
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
