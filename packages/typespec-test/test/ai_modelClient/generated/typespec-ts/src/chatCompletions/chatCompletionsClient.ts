// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  ChatCompletions,
  ModelInfo,
  ChatRequestMessageUnion,
} from "./../models/models.js";
import {
  createChatCompletions,
  ChatCompletionsClientOptionalParams,
  ModelClientContext,
  complete,
  getModelInfo,
  CompleteOptionalParams,
  GetModelInfoOptionalParams,
} from "./api/index.js";

export class ChatCompletionsClient {
  private _client: ModelClientContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: ChatCompletionsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createChatCompletions(endpoint, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   * Gets chat completions for the provided chat messages.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  complete(
    messages: ChatRequestMessageUnion[],
    options: CompleteOptionalParams = { requestOptions: {} },
  ): Promise<ChatCompletions> {
    return complete(this._client, messages, options);
  }

  /** Returns information about the AI model. */
  getModelInfo(
    options: GetModelInfoOptionalParams = { requestOptions: {} },
  ): Promise<ModelInfo> {
    return getModelInfo(this._client, options);
  }
}
