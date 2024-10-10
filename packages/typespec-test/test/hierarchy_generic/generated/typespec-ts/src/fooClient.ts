// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getBOperations, BOperations } from "./classic/b/index.js";
import { getDOperations, DOperations } from "./classic/d/index.js";
import {
  createFoo,
  FooContext,
  FooClientOptionalParams,
  op1,
  Op1OptionalParams,
} from "./api/index.js";
import { A } from "./models/models.js";
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
    this.b = getBOperations(this._client);
    this.d = getDOperations(this._client);
  }

  op1(
    body: A,
    options: Op1OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return op1(this._client, body, options);
  }

  /** The operation groups for B */
  public readonly b: BOperations;
  /** The operation groups for D */
  public readonly d: DOperations;
}
