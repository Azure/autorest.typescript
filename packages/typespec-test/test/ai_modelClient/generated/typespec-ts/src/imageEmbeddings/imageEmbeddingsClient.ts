// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  ModelInfo,
  EmbeddingsResult,
  EmbeddingInput,
} from "./../models/models.js";
import {
  createImageEmbeddings,
  ModelClientContext,
  ImageEmbeddingsClientOptionalParams,
  embed,
  getModelInfo,
  EmbedOptionalParams,
  GetModelInfoOptionalParams,
} from "./api/index.js";

export class ImageEmbeddingsClient {
  private _client: ModelClientContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: ImageEmbeddingsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createImageEmbeddings(endpoint, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Return the embeddings for given images. */
  embed(
    input: EmbeddingInput[],
    options: EmbedOptionalParams = { requestOptions: {} },
  ): Promise<EmbeddingsResult> {
    return embed(this._client, input, options);
  }

  /** Returns information about the AI model. */
  getModelInfo(
    options: GetModelInfoOptionalParams = { requestOptions: {} },
  ): Promise<ModelInfo> {
    return getModelInfo(this._client, options);
  }
}
