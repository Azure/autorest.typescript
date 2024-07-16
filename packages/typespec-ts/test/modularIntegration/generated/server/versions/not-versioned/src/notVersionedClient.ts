// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createNotVersioned,
  NotVersionedClientOptionalParams,
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

export { NotVersionedClientOptionalParams } from "./api/notVersionedContext.js";

export class NotVersionedClient {
  private _client: NotVersionedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates not-versioned server. */
  constructor(
    endpointParam: string,
    options: NotVersionedClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createNotVersioned(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
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
