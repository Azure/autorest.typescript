// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { RpcContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RpcClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { RpcContext } from "../rest/index.js";

/** Illustrates bodies templated with Azure Core with long-running RPC operation */
export function createRpc(options: RpcClientOptions = {}): RpcContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-modular-lro-rpc-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
