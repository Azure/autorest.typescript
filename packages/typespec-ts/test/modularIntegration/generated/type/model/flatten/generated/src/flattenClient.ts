// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { FlattenModel, NestedFlattenModel } from "./models/models.js";
import {
  PutFlattenModelOptionalParams,
  PutNestedFlattenModelOptionalParams,
} from "./models/options.js";
import {
  createFlatten,
  FlattenClientOptions,
  FlattenContext,
  putFlattenModel,
  putNestedFlattenModel,
} from "./api/index.js";

export { FlattenClientOptions } from "./api/flattenContext.js";

export class FlattenClient {
  private _client: FlattenContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates the model flatten cases. */
  constructor(options: FlattenClientOptions = {}) {
    this._client = createFlatten({
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-modular-model-flatten-classic/1.0.0-beta.1",
      },
      ...options,
    });
    this.pipeline = this._client.pipeline;
  }

  putFlattenModel(
    input: FlattenModel,
    options: PutFlattenModelOptionalParams = { requestOptions: {} },
  ): Promise<FlattenModel> {
    return putFlattenModel(this._client, input, options);
  }

  putNestedFlattenModel(
    input: NestedFlattenModel,
    options: PutNestedFlattenModelOptionalParams = { requestOptions: {} },
  ): Promise<NestedFlattenModel> {
    return putNestedFlattenModel(this._client, input, options);
  }
}
