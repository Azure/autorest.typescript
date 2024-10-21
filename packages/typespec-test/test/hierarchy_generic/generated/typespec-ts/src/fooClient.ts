// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createFoo,
  FooContext,
  FooClientOptionalParams,
  op1,
  Op1OptionalParams,
} from "./api/index.js";
import { A, Ba, Bea } from "./models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { FooClientOptionalParams } from "./api/fooContext.js";

export class FooClient {
  private _client: FooContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpointParam: string, options: FooClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createFoo(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  op1(
    body: A,
    options: Op1OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return op1(this._client, body, options);
  }

  op1(
    body: Ba,
    options: Op1OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return op1(this._client, body, options);
  }

  op1(
    body: Bea,
    options: Op1OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return op1(this._client, body, options);
  }

  op1(
    body: Ba,
    options: Op1OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return op1(this._client, body, options);
  }

  op1(
    body: A,
    options: Op1OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return op1(this._client, body, options);
  }
}
