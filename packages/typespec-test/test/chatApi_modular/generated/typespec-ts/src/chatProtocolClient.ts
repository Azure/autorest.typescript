// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  GenericChatClient,
  GenericChatClientOptionalParams,
} from "./genericChat/genericChatClient.js";
import {
  createChatProtocol,
  ChatProtocolContext,
  ChatProtocolClientOptionalParams,
} from "./api/index.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ChatProtocolClientOptionalParams } from "./api/chatProtocolContext.js";

export class ChatProtocolClient {
  private _client: ChatProtocolContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    endpointParam: string;
    credential: KeyCredential | TokenCredential;
    options: ChatProtocolClientOptionalParams;
  };

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
    this._clientParams = { endpointParam, credential, options };
  }

  getGenericChatClient(options: GenericChatClientOptionalParams = {}): GenericChatClient {
    return new GenericChatClient(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }
}
