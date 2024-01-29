// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { RpcContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface RpcClientOptions extends ClientOptions {}

export { RpcContext } from "../rest/index.js";

/** Illustrates bodies templated with Azure Core with long-running RPC operation */
export function createRpc(options: RpcClientOptions = {}): RpcContext {
  const clientContext = getClient(options);
  return clientContext;
}
