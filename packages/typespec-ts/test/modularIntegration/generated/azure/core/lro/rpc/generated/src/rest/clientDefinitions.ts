// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { LongRunningRpcParameters } from "./parameters.js";
import {
  LongRunningRpc202Response,
  LongRunningRpcDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface LongRunningRpc {
  /** Generate data. */
  post(
    options: LongRunningRpcParameters,
  ): StreamableMethod<
    LongRunningRpc202Response | LongRunningRpcDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/azure/core/lro/rpc/generations:submit' has methods for the following verbs: post */
  (path: "/azure/core/lro/rpc/generations:submit"): LongRunningRpc;
}

export type RpcContext = Client & {
  path: Routes;
};
