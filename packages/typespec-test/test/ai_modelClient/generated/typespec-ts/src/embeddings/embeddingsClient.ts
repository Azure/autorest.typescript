// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createEmbeddings,
  EmbeddingsClientOptions,
  ModelClientContext,
  embed,
  getModelInfo,
} from "./api/index.js";
import { GetModelInfoOptionalParams } from "../chatCompletions/index.js";
import { EmbeddingsResult, ModelInfo } from "../models/models.js";
import { EmbedOptionalParams } from "./models/options.js";

export { EmbeddingsClientOptions } from "./api/embeddingsContext.js";

export class EmbeddingsClient {
  private _client: ModelClientContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: EmbeddingsClientOptions = {},
  ) {
    this._client = createEmbeddings(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** Return the embeddings for a given text prompt. */
  embed(
    input: string[],
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
