// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { A } from "./models/models.js";
import { Op1Options } from "./models/options.js";
import { getBOperations, BOperations } from "./classic/b/index.js";
import { getDOperations, DOperations } from "./classic/d/index.js";
import { createFoo, FooClientOptions, FooContext, op1 } from "./api/index.js";

export { FooClientOptions } from "./api/FooContext.js";

export class FooClient {
  private _client: FooContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: FooClientOptions = {}) {
    this._client = createFoo(endpoint, options);
    this.pipeline = this._client.pipeline;
    this.b = getBOperations(this._client);
    this.d = getDOperations(this._client);
  }

  op1(body: A, options: Op1Options = { requestOptions: {} }): Promise<void> {
    return op1(this._client, body, options);
  }

  /** The operation groups for B */
  public readonly b: BOperations;
  /** The operation groups for D */
  public readonly d: DOperations;
}
