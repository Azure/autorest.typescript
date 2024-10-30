// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createChatCompletions,
  ChatCompletionsContext,
  ChatCompletionsClientOptionalParams,
  complete,
  getModelInfo,
  CompleteOptionalParams,
  GetModelInfoOptionalParams,
} from "./api/index.js";
import {
  ChatRequestMessageUnion,
  ChatCompletions,
  ModelInfo,
} from "../models/models.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export { ChatCompletionsClientOptionalParams } from "./api/chatCompletionsContext.js";

export class ChatCompletionsClient {
  private _client: ChatCompletionsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: ChatCompletionsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createChatCompletions(endpointParam, credential, {
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
