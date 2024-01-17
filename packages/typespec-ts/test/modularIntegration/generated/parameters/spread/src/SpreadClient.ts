// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { getModelOperations, ModelOperations } from "./classic/model/index.js";
import { getAliasOperations, AliasOperations } from "./classic/alias/index.js";
import {
  createSpread,
  SpreadClientOptions,
  SpreadContext,
} from "./api/index.js";

export { SpreadClientOptions } from "./api/SpreadContext.js";

export class SpreadClient {
  private _client: SpreadContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the spread operator. */
  constructor(options: SpreadClientOptions = {}) {
    this._client = createSpread(options);
    this.pipeline = this._client.pipeline;
    this.model = getModelOperations(this._client);
    this.alias = getAliasOperations(this._client);
  }

  /** The operation groups for Model */
  public readonly model: ModelOperations;
  /** The operation groups for Alias */
  public readonly alias: AliasOperations;
}
