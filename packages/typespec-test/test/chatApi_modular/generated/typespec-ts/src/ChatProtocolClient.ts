// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getGenericChatClientOperations,
  GenericChatClientOperations,
} from "./classic/genericChatClient/index.js";
import {
  createChatProtocol,
  ChatProtocolClientOptions,
  ChatProtocolContext,
} from "./api/index.js";

export { ChatProtocolClientOptions } from "./api/ChatProtocolContext.js";

export class ChatProtocolClient {
  private _client: ChatProtocolContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure APIs for the Azure Chat protocol. */
  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: ChatProtocolClientOptions = {},
  ) {
    this._client = createChatProtocol(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
    this.genericChatClient = getGenericChatClientOperations(this._client);
  }

  /** The operation groups for GenericChatClient */
  public readonly genericChatClient: GenericChatClientOperations;
}
