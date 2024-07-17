// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { ModelInfo, EmbeddingsResult } from "./../models/models.js";
import {
  createEmbeddings,
  EmbeddingsClientOptionalParams,
  ModelClientContext,
  embed,
  getModelInfo,
  EmbedOptionalParams,
  GetModelInfoOptionalParams,
} from "./api/index.js";

export class EmbeddingsClient {
  private _client: ModelClientContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: EmbeddingsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createEmbeddings(endpoint, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
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
