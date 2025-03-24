// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createChatProtocol,
  ChatProtocolContext,
  ChatProtocolClientOptionalParams,
} from "./api/index.js";
import {
  StreamingChatCompletionOptionsRecord,
  ChatCompletionChunkRecord,
  ChatCompletionOptionsRecord,
  ChatCompletionRecord,
} from "./models/models.js";
import {
  CreateOptionalParams,
  CreateStreamingOptionalParams,
} from "./api/options.js";
import { create, createStreaming } from "./api/operations.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export { ChatProtocolClientOptionalParams } from "./api/chatProtocolContext.js";

export class ChatProtocolClient {
  private _client: ChatProtocolContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure APIs for the Azure Chat protocol. */
  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: ChatProtocolClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createChatProtocol(endpointParam, credential, {
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
