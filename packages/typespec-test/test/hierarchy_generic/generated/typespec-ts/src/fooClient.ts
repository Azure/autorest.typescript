// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { _getDOperations, DOperations } from "./classic/d/index.js";
import { _getBOperations, BOperations } from "./classic/b/index.js";
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
      : `azsdk-js-client`;
    this._client = createFoo(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.d = _getDOperations(this._client);
    this.b = _getBOperations(this._client);
  }

  /** The operation groups for d */
  public readonly d: DOperations;
  /** The operation groups for b */
  public readonly b: BOperations;

  op1(
    body: A,
    options: Op1OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return op1(this._client, body, options);
  }
}
