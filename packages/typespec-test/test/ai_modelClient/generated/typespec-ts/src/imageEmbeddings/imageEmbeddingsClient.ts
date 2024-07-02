// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createImageEmbeddings,
  ImageEmbeddingsClientOptions,
  ModelClientContext,
  embed,
  getModelInfo,
} from "./api/index.js";
import { GetModelInfoOptionalParams } from "../chatCompletions/index.js";
import { EmbedOptionalParams } from "../embeddings/index.js";
import { EmbeddingsResult, ModelInfo } from "../models/models.js";
import { EmbeddingInput } from "../rest/models.js";

export { ImageEmbeddingsClientOptions } from "./api/imageEmbeddingsContext.js";

export class ImageEmbeddingsClient {
  private _client: ModelClientContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: ImageEmbeddingsClientOptions = {},
  ) {
    this._client = createImageEmbeddings(endpoint, credential, options);
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
