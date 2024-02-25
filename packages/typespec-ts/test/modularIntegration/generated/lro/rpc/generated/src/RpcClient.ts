// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PollerLike, OperationState } from "@marygao/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  GenerationOptions,
  GenerationResult,
  OperationState,
} from "./models/models.js";
import { LongRunningRpcOptions } from "./models/options.js";
import {
  longRunningRpc,
  createRpc,
  RpcClientOptions,
  RpcContext,
} from "./api/index.js";

export { RpcClientOptions } from "./api/RpcContext.js";

export class RpcClient {
  private _client: RpcContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates bodies templated with Azure Core with long-running RPC operation */
  constructor(options: RpcClientOptions = {}) {
    this._client = createRpc(options);
    this.pipeline = this._client.pipeline;
  }

  /** Generate data. */
  longRunningRpc(
    body: GenerationOptions,
    options: LongRunningRpcOptions = { requestOptions: {} },
  ): PollerLike<OperationState<GenerationResult>, GenerationResult> {
    return longRunningRpc(this._client, body, options);
  }
}
