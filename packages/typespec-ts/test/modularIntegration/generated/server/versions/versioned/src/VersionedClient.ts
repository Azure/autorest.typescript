// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  WithoutApiVersionOptionalParams,
  WithQueryApiVersionOptionalParams,
  WithPathApiVersionOptionalParams,
} from "./models/options.js";
import {
  withoutApiVersion,
  withQueryApiVersion,
  withPathApiVersion,
  createVersioned,
  VersionedClientOptions,
  VersionedContext,
} from "./api/index.js";

export { VersionedClientOptions } from "./api/VersionedContext.js";

export class VersionedClient {
  private _client: VersionedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates versioned server. */
  constructor(endpointParam: string, options: VersionedClientOptions = {}) {
    this._client = createVersioned(endpointParam, options);
    this.pipeline = this._client.pipeline;
  }

  withoutApiVersion(
    options: WithoutApiVersionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withoutApiVersion(this._client, options);
  }

  withQueryApiVersion(
    options: WithQueryApiVersionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withQueryApiVersion(this._client, options);
  }

  withPathApiVersion(
    apiVersion: string,
    options: WithPathApiVersionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withPathApiVersion(this._client, apiVersion, options);
  }
}
