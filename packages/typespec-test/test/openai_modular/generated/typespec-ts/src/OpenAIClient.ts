// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import {
  createOpenAI,
  OpenAIContext,
  OpenAIClientOptions,
  getEmbeddings,
  getCompletions,
  getChatCompletions,
  getImageOperationStatus,
  startGenerateImage,
} from "./api/index.js";
import {
  Embeddings,
  Completions,
  ChatMessage,
  ChatCompletions,
  ImageOperationResponse,
} from "./models/models.js";
import {
  GetEmbeddingsOptions,
  GetCompletionsOptions,
  GetChatCompletionsOptions,
  GetImageOperationStatusOptions,
  StartGenerateImageOptions,
} from "./models/options.js";

export { OpenAIClientOptions } from "./api/OpenAIContext.js";

export class OpenAIClient {
  private _client: OpenAIContext;

  /** Azure OpenAI APIs for completions and search */
  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: OpenAIClientOptions = {}
  ) {
    this._client = createOpenAI(endpoint, credential, options);
  }

  /** Return the embeddings for a given prompt. */
  getEmbeddings(
    input: string[],
    deploymentId: string,
    options: GetEmbeddingsOptions = { requestOptions: {} }
  ): Promise<Embeddings> {
    return getEmbeddings(this._client, input, deploymentId, options);
  }

  /**
   * Gets completions for the provided input prompts.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  getCompletions(
    prompt: string[],
    deploymentId: string,
    options: GetCompletionsOptions = { requestOptions: {} }
  ): Promise<Completions> {
    return getCompletions(this._client, prompt, deploymentId, options);
  }

  /**
   * Gets chat completions for the provided chat messages.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  getChatCompletions(
    messages: ChatMessage[],
    deploymentId: string,
    options: GetChatCompletionsOptions = { requestOptions: {} }
  ): Promise<ChatCompletions> {
    return getChatCompletions(this._client, messages, deploymentId, options);
  }

  /** Returns the status of the images operation */
  getImageOperationStatus(
    operationId: string,
    options: GetImageOperationStatusOptions = { requestOptions: {} }
  ): Promise<ImageOperationResponse> {
    return getImageOperationStatus(this._client, operationId, options);
  }

  /** Starts the generation of a batch of images from a text caption */
  startGenerateImage(
    prompt: string,
    options: StartGenerateImageOptions = { requestOptions: {} }
  ): Promise<ImageOperationResponse> {
    return startGenerateImage(this._client, prompt, options);
  }
}
