// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext, ComputeClientOptionalParams, createCompute } from "./api/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export type { ComputeClientOptionalParams } from "./api/computeContext.js";

export class ComputeClient {
  private _client: ComputeContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Compute Client */
  constructor(credential: TokenCredential, options: ComputeClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createCompute(credential, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
  }
}
