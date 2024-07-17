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
  createChatProtocol,
  ChatProtocolClientOptionalParams,
  ChatProtocolContext,
  createStreaming,
  create,
  CreateStreamingOptionalParams,
  CreateOptionalParams,
} from "./api/index.js";

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
      : "azsdk-js-client";

    this._client = createChatProtocol(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
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
