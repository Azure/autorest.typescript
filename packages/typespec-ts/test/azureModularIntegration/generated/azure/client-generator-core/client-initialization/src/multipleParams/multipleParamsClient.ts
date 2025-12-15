// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createMultipleParams,
  MultipleParamsContext,
  MultipleParamsClientOptionalParams,
} from "./api/index.js";
import { Input } from "../models/models.js";
import { withBody, withQuery } from "./api/operations.js";
import {
  WithBodyOptionalParams,
  WithQueryOptionalParams,
} from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { MultipleParamsClientOptionalParams } from "./api/multipleParamsContext.js";

export class MultipleParamsClient {
  private _client: MultipleParamsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    name: string,
    region: string,
    options: MultipleParamsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMultipleParams(name, region, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  withBody(
    body: Input,
    options: WithBodyOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withBody(this._client, body, options);
  }

  withQuery(
    id: string,
    options: WithQueryOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withQuery(this._client, id, options);
  }
}
