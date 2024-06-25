// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { BytesContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface BytesClientOptions extends ClientOptions {}

export { BytesContext } from "../rest/index.js";

/** Test for encode decorator on bytes. */
export function createBytes(options: BytesClientOptions = {}): BytesContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-encode-bytes-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
