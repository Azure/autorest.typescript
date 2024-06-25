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
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-modular-model-flatten-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
