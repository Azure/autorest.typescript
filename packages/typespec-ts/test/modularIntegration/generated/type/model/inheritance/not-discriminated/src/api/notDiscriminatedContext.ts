// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { NotDiscriminatedContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface NotDiscriminatedClientOptions extends ClientOptions {}

export { NotDiscriminatedContext } from "../rest/index.js";

/** Illustrates not-discriminated inheritance model. */
export function createNotDiscriminated(
  options: NotDiscriminatedClientOptions = {},
): NotDiscriminatedContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-model-inheritance-not-discriminated-api/1.0.0",
    },
    ...options,
  });
  return clientContext;
}
