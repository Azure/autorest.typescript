// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { Extension } from "./models/models.js";
import { PutOptionalParams, GetOptionalParams } from "./models/options.js";
import {
  put,
  get,
  createRecursive,
  RecursiveClientOptions,
  RecursiveContext,
} from "./api/index.js";

export { RecursiveClientOptions } from "./api/recursiveContext.js";

export class RecursiveClient {
  private _client: RecursiveContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates inheritance recursion */
  constructor(options: RecursiveClientOptions = {}) {
    this._client = createRecursive(options);
    this.pipeline = this._client.pipeline;
  }

  put(
    input: Extension,
    options: PutOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return put(this._client, input, options);
  }

  get(options: GetOptionalParams = { requestOptions: {} }): Promise<Extension> {
    return get(this._client, options);
  }
}
