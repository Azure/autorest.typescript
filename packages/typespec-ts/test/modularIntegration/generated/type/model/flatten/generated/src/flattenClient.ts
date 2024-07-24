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
  FlattenClientOptionalParams,
  FlattenContext,
  putFlattenModel,
  putNestedFlattenModel,
} from "./api/index.js";

export { FlattenClientOptionalParams } from "./api/flattenContext.js";

export class FlattenClient {
  private _client: FlattenContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates the model flatten cases. */
  constructor(options: FlattenClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createFlatten({
      ...options,
      userAgentOptions: { userAgentPrefix },
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
