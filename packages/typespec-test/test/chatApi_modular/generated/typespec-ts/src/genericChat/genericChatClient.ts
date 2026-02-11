// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createGenericChat,
  GenericChatContext,
  GenericChatClientOptionalParams,
} from "./api/index.js";
import {
  StreamingChatCompletionOptionsRecord,
  ChatCompletionChunkRecord,
  ChatCompletionOptionsRecord,
  ChatCompletionRecord,
} from "../models/models.js";
import { create, createStreaming } from "./api/operations.js";
import { CreateOptionalParams, CreateStreamingOptionalParams } from "./api/options.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { GenericChatClientOptionalParams } from "./api/genericChatContext.js";

export class GenericChatClient {
  private _client: GenericChatContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: GenericChatClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createGenericChat(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Creates a new chat completion. */
  create(
    body: ChatCompletionOptionsRecord,
    options: CreateOptionalParams = { requestOptions: {} },
  ): Promise<ChatCompletionRecord> {
    return create(this._client, body, options);
  }

  /** Creates a new streaming chat completion. */
  createStreaming(
    body: StreamingChatCompletionOptionsRecord,
    options: CreateStreamingOptionalParams = { requestOptions: {} },
  ): Promise<ChatCompletionChunkRecord> {
    return createStreaming(this._client, body, options);
  }
}
