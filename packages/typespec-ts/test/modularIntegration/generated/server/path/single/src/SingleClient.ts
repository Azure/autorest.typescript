// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  myOp,
  createSingle,
  SingleClientOptions,
  SingleContext,
} from "./api/index.js";
import { MyOpOptions } from "./models/options.js";

export { SingleClientOptions } from "./api/SingleContext.js";

export class SingleClient {
  private _client: SingleContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates server with a single path parameter @server */
  constructor(endpoint: string, options: SingleClientOptions = {}) {
    this._client = createSingle(endpoint, options);
    this.pipeline = this._client.pipeline;
  }

  myOp(options: MyOpOptions = { requestOptions: {} }): Promise<void> {
    return myOp(this._client, options);
  }
}
