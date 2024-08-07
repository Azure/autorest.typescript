// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ModelV2, Versions } from "./models/models.js";
import { V2OptionalParams } from "./models/options.js";
import {
  v2,
  createRemoved,
  RemovedContext,
  RemovedClientOptionalParams,
} from "./api/index.js";

export { RemovedClientOptionalParams } from "./api/removedContext.js";

export class RemovedClient {
  private _client: RemovedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the `@removed` decorator. */
  constructor(
    endpointParam: string,
    version: Versions,
    options: RemovedClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createRemoved(endpointParam, version, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  v2(
    body: ModelV2,
    options: V2OptionalParams = { requestOptions: {} },
  ): Promise<ModelV2> {
    return v2(this._client, body, options);
  }
}
