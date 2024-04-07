// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getStringOperations,
  StringOperations,
} from "./classic/string/index.js";
import { createFixed, FixedClientOptions, FixedContext } from "./api/index.js";

export { FixedClientOptions } from "./api/FixedContext.js";

export class FixedClient {
  private _client: FixedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: FixedClientOptions = {}) {
    this._client = createFixed(options);
    this.pipeline = this._client.pipeline;
    this.string = getStringOperations(this._client);
  }

  /** The operation groups for String */
  public readonly string: StringOperations;
}
