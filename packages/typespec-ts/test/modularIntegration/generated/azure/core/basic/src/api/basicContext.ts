// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { BasicContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface BasicClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { BasicContext } from "../rest/index.js";

/** Illustrates bodies templated with Azure Core */
export function createBasic(options: BasicClientOptions = {}): BasicContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-azure-core-basic-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
