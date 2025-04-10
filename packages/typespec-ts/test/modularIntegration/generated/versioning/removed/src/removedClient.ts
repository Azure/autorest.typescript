// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  modelV3,
  v2,
  ModelV3OptionalParams,
  V2OptionalParams,
  createRemoved,
  RemovedContext,
  RemovedClientOptionalParams,
} from "./api/index.js";
import { ModelV2, ModelV3, Versions } from "./models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";

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
      : `azsdk-js-client`;
    this._client = createRemoved(endpointParam, version, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** This operation will pass different paths and different request bodies based on different versions. */
  modelV3(
    body: ModelV3,
    options: ModelV3OptionalParams = { requestOptions: {} },
  ): Promise<ModelV3> {
    return modelV3(this._client, body, options);
  }

  v2(
    body: ModelV2,
    options: V2OptionalParams = { requestOptions: {} },
  ): Promise<ModelV2> {
    return v2(this._client, body, options);
  }
}
