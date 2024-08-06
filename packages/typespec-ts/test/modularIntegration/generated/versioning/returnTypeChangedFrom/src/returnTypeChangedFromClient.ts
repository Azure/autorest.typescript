// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { Versions } from "./models/models.js";
import { TestOptionalParams } from "./models/options.js";
import {
  test,
  createReturnTypeChangedFrom,
  ReturnTypeChangedFromContext,
  ReturnTypeChangedFromClientOptionalParams,
} from "./api/index.js";

export { ReturnTypeChangedFromClientOptionalParams } from "./api/returnTypeChangedFromContext.js";

export class ReturnTypeChangedFromClient {
  private _client: ReturnTypeChangedFromContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the `@returnTypeChangedFrom` decorator. */
  constructor(
    endpointParam: string,
    version: Versions,
    options: ReturnTypeChangedFromClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createReturnTypeChangedFrom(endpointParam, version, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  test(
    body: string,
    options: TestOptionalParams = { requestOptions: {} },
  ): Promise<string> {
    return test(this._client, body, options);
  }
}
