// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  myOp,
  MyOpOptionalParams,
  createSingle,
  SingleClientOptions,
  SingleContext,
} from "./api/index.js";

export class SingleClient {
  private _client: SingleContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates server with a single path parameter @server */
  constructor(endpointParam: string, options: SingleClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createSingle(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  myOp(options: MyOpOptionalParams = { requestOptions: {} }): Promise<void> {
    return myOp(this._client, options);
  }
}
