// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  NoOperationParamsOptionalParams,
  WithOperationPathParamOptionalParams,
} from "./models/options.js";
import {
  createMultiple,
  MultipleContext,
  MultipleClientOptionalParams,
  noOperationParams,
  withOperationPathParam,
} from "./api/index.js";

export { MultipleClientOptionalParams } from "./api/multipleContext.js";

export class MultipleClient {
  private _client: MultipleContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: MultipleClientOptionalParams = {},
  ) {
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
