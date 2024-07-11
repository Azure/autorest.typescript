// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";
import { GenerationOptions, GenerationResult } from "./models/models.js";
import {
  longRunningRpc,
  LongRunningRpcOptionalParams,
  createRpc,
  RpcClientOptions,
  RpcContext,
} from "./api/index.js";

export class RpcClient {
  private _client: RpcContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates bodies templated with Azure Core with long-running RPC operation */
  constructor(options: RpcClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createRpc({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Generate data. */
  longRunningRpc(
    body: GenerationOptions,
    options: LongRunningRpcOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<GenerationResult>, GenerationResult> {
    return longRunningRpc(this._client, body, options);
  }
}
