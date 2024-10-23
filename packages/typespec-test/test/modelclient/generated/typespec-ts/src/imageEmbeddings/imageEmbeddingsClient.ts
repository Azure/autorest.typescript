// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createImageEmbeddings,
  ImageEmbeddingsContext,
  ImageEmbeddingsClientOptionalParams,
  embed,
  getModelInfo,
  EmbedOptionalParams,
  GetModelInfoOptionalParams,
} from "./api/index.js";
import {
  ModelInfo,
  EmbeddingsResult,
  EmbeddingInput,
} from "../models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export { ImageEmbeddingsClientOptionalParams } from "./api/imageEmbeddingsContext.js";

export class ImageEmbeddingsClient {
  private _client: ImageEmbeddingsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: ImageEmbeddingsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createImageEmbeddings(endpointParam, credential, {
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
