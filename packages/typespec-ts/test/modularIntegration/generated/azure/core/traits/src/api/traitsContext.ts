// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { TraitsContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface TraitsClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { TraitsContext } from "../rest/index.js";

/** Illustrates Azure Core operation customizations by traits */
export function createTraits(options: TraitsClientOptions = {}): TraitsContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-azure-core-traits-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
