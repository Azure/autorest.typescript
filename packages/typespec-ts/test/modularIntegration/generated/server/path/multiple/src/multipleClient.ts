// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createMultiple,
  MultipleClientOptions,
  MultipleContext,
  noOperationParams,
  withOperationPathParam,
  NoOperationParamsOptionalParams,
  WithOperationPathParamOptionalParams,
} from "./api/index.js";

export class MultipleClient {
  private _client: MultipleContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpointParam: string, options: MultipleClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createMultiple(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  noOperationParams(
    options: NoOperationParamsOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return noOperationParams(this._client, options);
  }

  withOperationPathParam(
    keyword: string,
    options: WithOperationPathParamOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withOperationPathParam(this._client, keyword, options);
  }
}
