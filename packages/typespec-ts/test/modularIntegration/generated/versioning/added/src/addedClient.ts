// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ModelV1, ModelV2, Versions } from "./models/models.js";
import {
  V1OptionalParams,
  V2OptionalParams,
  V2InInterfaceOptionalParams,
} from "./models/options.js";
import {
  createAdded,
  AddedClientOptions,
  AddedContext,
  v1,
  v2,
  v2InInterface,
} from "./api/index.js";

export { AddedClientOptions } from "./api/addedContext.js";

export class AddedClient {
  private _client: AddedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the `@added` decorator. */
  constructor(
    endpointParam: string,
    version: Versions,
    options: AddedClientOptions = {},
  ) {
    this._client = createAdded(endpointParam, version, {
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-versionning-added-classic/1.0.0-beta.1",
      },
      ...options,
    });
    this.pipeline = this._client.pipeline;
  }

  v1(
    headerV2: string,
    body: ModelV1,
    options: V1OptionalParams = { requestOptions: {} },
  ): Promise<ModelV1> {
    return v1(this._client, headerV2, body, options);
  }

  v2(
    body: ModelV2,
    options: V2OptionalParams = { requestOptions: {} },
  ): Promise<ModelV2> {
    return v2(this._client, body, options);
  }

  v2InInterface(
    body: ModelV2,
    options: V2InInterfaceOptionalParams = { requestOptions: {} },
  ): Promise<ModelV2> {
    return v2InInterface(this._client, body, options);
  }
}
