// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createNotDefined,
  NotDefinedClientOptions,
  NotDefinedContext,
  valid,
} from "./api/index.js";
import { ValidOptions } from "./models/options.js";

export { NotDefinedClientOptions } from "./api/NotDefinedContext.js";

export class NotDefinedClient {
  private _client: NotDefinedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates server doesn't define endpoint. Client should automatically add an endpoint to let user pass in. */
  constructor(endpoint: string, options: NotDefinedClientOptions = {}) {
    this._client = createNotDefined(endpoint, options);
    this.pipeline = this._client.pipeline;
  }

  valid(options: ValidOptions = { requestOptions: {} }): Promise<void> {
    return valid(this._client, options);
  }
}
