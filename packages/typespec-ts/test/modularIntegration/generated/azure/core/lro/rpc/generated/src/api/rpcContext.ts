// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { RpcContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface RpcClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { RpcContext } from "../rest/index.js";

/** Illustrates bodies templated with Azure Core with long-running RPC operation */
export function createRpc(options: RpcClientOptions = {}): RpcContext {
  const clientContext = getClient(options);
  return clientContext;
}
