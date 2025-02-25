// Licensed under the MIT License.

import {
  createChat,
  ChatContext,
  ChatClientOptionalParams,
  getStreamedCompletion,
  GetStreamedCompletionOptionalParams,
} from "./api/index.js";
import {
  AIChatCompletionRequest,
  AIChatErrorResponse,
} from "./models/models.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { ChatClientOptionalParams } from "./api/chatContext.js";

export class ChatClient {
  private _client: ChatContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpointParam: string, options: ChatClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createChat(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  getStreamedCompletion(
    body: AIChatCompletionRequest,
    options: GetStreamedCompletionOptionalParams = { requestOptions: {} },
  ): Promise<AIChatErrorResponse> {
    return getStreamedCompletion(this._client, body, options);
  }
}
