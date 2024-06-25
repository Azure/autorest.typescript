// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  StreamingChatCompletionOptionsRecord,
  ChatCompletionChunkRecord,
  ChatCompletionOptionsRecord,
  ChatCompletionRecord,
} from "./models/models.js";
import {
  CreateStreamingOptionalParams,
  CreateOptionalParams,
} from "./models/options.js";
import {
  createChatProtocol,
  ChatProtocolClientOptions,
  ChatProtocolContext,
  createStreaming,
  create,
} from "./api/index.js";

export { ChatProtocolClientOptions } from "./api/chatProtocolContext.js";

export class ChatProtocolClient {
  private _client: ChatProtocolContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure APIs for the Azure Chat protocol. */
  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: ChatProtocolClientOptions = {},
  ) {
    this._client = createChatProtocol(endpointParam, credential, {
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-ai-chat-protocol-classic/1.0.0-beta.1",
      },
      ...options,
    });
    this.pipeline = this._client.pipeline;
  }

  /** Creates a new streaming chat completion. */
  createStreaming(
    body: StreamingChatCompletionOptionsRecord,
    options: CreateStreamingOptionalParams = { requestOptions: {} },
  ): Promise<ChatCompletionChunkRecord> {
    return createStreaming(this._client, body, options);
  }

  /** Creates a new chat completion. */
  create(
    body: ChatCompletionOptionsRecord,
    options: CreateOptionalParams = { requestOptions: {} },
  ): Promise<ChatCompletionRecord> {
    return create(this._client, body, options);
  }
}
