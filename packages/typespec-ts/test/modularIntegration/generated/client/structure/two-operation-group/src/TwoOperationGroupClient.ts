// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  getClientOperations,
  ClientOperations,
} from "./classic/client/index.js";
import {
  createTwoOperationGroup,
  TwoOperationGroupClientOptions,
  ServiceContext,
} from "./api/index.js";

export { TwoOperationGroupClientOptions } from "./api/TwoOperationGroupContext.js";

export class TwoOperationGroupClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    client: ClientType,
    options: TwoOperationGroupClientOptions = {},
  ) {
    this._client = createTwoOperationGroup(endpoint, client, options);
    this.pipeline = this._client.pipeline;
    this.client = getClientOperations(this._client);
  }

  /** The operation groups for ClientStructureTwoOperationGroupGroup1 */
  public readonly client: ClientOperations;
}
