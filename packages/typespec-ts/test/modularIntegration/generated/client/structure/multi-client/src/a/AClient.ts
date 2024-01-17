// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  getClientOperations,
  ClientOperations,
} from "./classic/client/index.js";
import { createA, AClientOptions, ServiceContext } from "./api/index.js";

export { AClientOptions } from "./api/AContext.js";

export class AClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    client: ClientType,
    options: AClientOptions = {},
  ) {
    this._client = createA(endpoint, client, options);
    this.pipeline = this._client.pipeline;
    this.client = getClientOperations(this._client);
  }

  /** The operation groups for ClientStructureMultiClientClientA */
  public readonly client: ClientOperations;
}
