// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createEmbeddings,
  EmbeddingsContext,
  EmbeddingsClientOptionalParams,
  embed,
  getModelInfo,
  EmbedOptionalParams,
  GetModelInfoOptionalParams,
} from "./api/index.js";
import { ModelInfo, EmbeddingsResult } from "../models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export { EmbeddingsClientOptionalParams } from "./api/embeddingsContext.js";

export class EmbeddingsClient {
  private _client: EmbeddingsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: EmbeddingsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createEmbeddings(endpointParam, credential, {
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
