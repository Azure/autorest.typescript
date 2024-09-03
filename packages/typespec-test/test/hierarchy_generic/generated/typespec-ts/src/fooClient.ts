// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Pipeline } from "@azure/core-rest-pipeline";
import { A } from "./models/models.js";
import { Op1OptionalParams } from "./models/options.js";
import { getBOperations, BOperations } from "./classic/b/index.js";
import { getCOperations, COperations } from "./classic/c/index.js";
import { getDOperations, DOperations } from "./classic/d/index.js";
import {
  createFoo,
  FooContext,
  FooClientOptionalParams,
  op1,
} from "./api/index.js";

export { FooClientOptionalParams } from "./api/fooContext.js";

export class FooClient {
  private _client: FooContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: FooClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createFoo(endpoint, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.b = getBOperations(this._client);
    this.c = getCOperations(this._client);
    this.d = getDOperations(this._client);
  }

  _op1(
    body: A,
    options: Op1OptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return op1(this._client, body, options);
  }

  /** The operation groups for B */
  public readonly b: BOperations;
  /** The operation groups for C */
  public readonly c: COperations;
  /** The operation groups for D */
  public readonly d: DOperations;
}
