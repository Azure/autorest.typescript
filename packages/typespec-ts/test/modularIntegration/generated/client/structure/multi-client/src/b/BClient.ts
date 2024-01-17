// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  getClientOperations,
  ClientOperations,
} from "./classic/client/index.js";
import { createB, BClientOptions, ServiceContext } from "./api/index.js";

export { BClientOptions } from "./api/BContext.js";

export class BClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    client: ClientType,
    options: BClientOptions = {},
  ) {
    this._client = createB(endpoint, client, options);
    this.pipeline = this._client.pipeline;
    this.client = getClientOperations(this._client);
  }

  /** The operation groups for ClientStructureMultiClientClientB */
  public readonly client: ClientOperations;
}
