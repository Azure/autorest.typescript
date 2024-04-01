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
  WithoutApiVersionOptions,
  WithQueryApiVersionOptions,
  WithPathApiVersionOptions,
} from "./models/options.js";

export { NotVersionedClientOptions } from "./api/NotVersionedContext.js";

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
    options: WithoutApiVersionOptions = { requestOptions: {} },
  ): Promise<void> {
    return withoutApiVersion(this._client, options);
  }

  withQueryApiVersion(
    apiVersion: string,
    options: WithQueryApiVersionOptions = { requestOptions: {} },
  ): Promise<void> {
    return withQueryApiVersion(this._client, apiVersion, options);
  }

  withPathApiVersion(
    apiVersion: string,
    options: WithPathApiVersionOptions = { requestOptions: {} },
  ): Promise<void> {
    return withPathApiVersion(this._client, apiVersion, options);
  }
}