// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  getClientOperations,
  ClientOperations,
} from "./classic/client/index.js";
import {
  createRenamedOperation,
  RenamedOperationClientOptions,
  ServiceContext,
} from "./api/index.js";

export { RenamedOperationClientOptions } from "./api/RenamedOperationContext.js";

export class RenamedOperationClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    client: ClientType,
    options: RenamedOperationClientOptions = {},
  ) {
    this._client = createRenamedOperation(endpoint, client, options);
    this.pipeline = this._client.pipeline;
    this.client = getClientOperations(this._client);
  }

  /** The operation groups for ClientStructureRenamedOperation */
  public readonly client: ClientOperations;
}
