// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createNotVersioned,
  NotVersionedClientOptions,
  NotVersionedContext,
  withoutApiVersion,
  withQueryApiVersion,
  withPathApiVersion,
} from "./api/index.js";
import {
  WithoutApiVersionOptionalParams,
  WithQueryApiVersionOptionalParams,
  WithPathApiVersionOptionalParams,
} from "./models/options.js";

export { NotVersionedClientOptions } from "./api/notVersionedContext.js";

export class NotVersionedClient {
  private _client: NotVersionedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates not-versioned server. */
  constructor(endpointParam: string, options: NotVersionedClientOptions = {}) {
    this._client = createNotVersioned(endpointParam, options);
    this.pipeline = this._client.pipeline;
  }

  withoutApiVersion(
    options: WithoutApiVersionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withoutApiVersion(this._client, options);
  }

  withQueryApiVersion(
    apiVersion: string,
    options: WithQueryApiVersionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withQueryApiVersion(this._client, apiVersion, options);
  }

  withPathApiVersion(
    apiVersion: string,
    options: WithPathApiVersionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withPathApiVersion(this._client, apiVersion, options);
  }
}
