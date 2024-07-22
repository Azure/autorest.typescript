// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { AzureEmbeddingModel } from "./models/models.js";
import {
  GetOptionalParams,
  PutOptionalParams,
  PostOptionalParams,
} from "./models/options.js";
import {
  createModel,
  ModelClientOptionalParams,
  ModelContext,
  get,
  put,
  post,
} from "./api/index.js";

export { ModelClientOptionalParams } from "./api/modelContext.js";

export class ModelClient {
  private _client: ModelContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: ModelClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createModel({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** get an embedding vector */
  get(options: GetOptionalParams = { requestOptions: {} }): Promise<number[]> {
    return get(this._client, options);
  }

  /** put an embedding vector */
  put(
    body: number[],
    options: PutOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return put(this._client, body, options);
  }

  /** post a model which has an embeddingVector property */
  post(
    body: AzureEmbeddingModel,
    options: PostOptionalParams = { requestOptions: {} },
  ): Promise<AzureEmbeddingModel> {
    return post(this._client, body, options);
  }
}
