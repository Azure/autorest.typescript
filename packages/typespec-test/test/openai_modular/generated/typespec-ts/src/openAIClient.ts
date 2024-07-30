// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  AudioTranscriptionOptions,
  AudioTranscription,
  AudioTranslationOptions,
  AudioTranslation,
  CompletionsOptions,
  Completions,
  ChatCompletionsOptions,
  ChatCompletions,
  ImageGenerationOptions,
  ImageGenerations,
  SpeechGenerationOptions,
  EmbeddingsOptions,
  Embeddings,
} from "./models/models.js";
import {
  GetAudioTranscriptionAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetCompletionsOptionalParams,
  GetChatCompletionsOptionalParams,
  GetImageGenerationsOptionalParams,
  GenerateSpeechFromTextOptionalParams,
  GetEmbeddingsOptionalParams,
} from "./models/options.js";
import {
  createOpenAI,
  OpenAIClientOptionalParams,
  OpenAIContext,
  getAudioTranscriptionAsPlainText,
  getAudioTranscriptionAsResponseObject,
  getAudioTranslationAsPlainText,
  getAudioTranslationAsResponseObject,
  getCompletions,
  getChatCompletions,
  getImageGenerations,
  generateSpeechFromText,
  getEmbeddings,
} from "./api/index.js";

export { OpenAIClientOptionalParams } from "./api/openAIContext.js";

export class OpenAIClient {
  private _client: OpenAIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: OpenAIClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createOpenAI(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
   * written language corresponding to the language it was spoken in.
   */
  getAudioTranscriptionAsPlainText(
    deploymentId: string,
    body: AudioTranscriptionOptions,
    options: GetAudioTranscriptionAsPlainTextOptionalParams = {
      requestOptions: {},
    },
  ): Promise<string> {
    return getAudioTranscriptionAsPlainText(
      this._client,
      deploymentId,
      body,
      options,
    );
  }

  /**
   * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
   * written language corresponding to the language it was spoken in.
   */
  getAudioTranscriptionAsResponseObject(
    deploymentId: string,
    body: AudioTranscriptionOptions,
    options: GetAudioTranscriptionAsResponseObjectOptionalParams = {
      requestOptions: {},
    },
  ): Promise<AudioTranscription> {
    return getAudioTranscriptionAsResponseObject(
      this._client,
      deploymentId,
      body,
      options,
    );
  }

  /** Gets English language transcribed text and associated metadata from provided spoken audio data. */
  getAudioTranslationAsPlainText(
    deploymentId: string,
    body: AudioTranslationOptions,
    options: GetAudioTranslationAsPlainTextOptionalParams = {
      requestOptions: {},
    },
  ): Promise<string> {
    return getAudioTranslationAsPlainText(
      this._client,
      deploymentId,
      body,
      options,
    );
  }

  /** Gets English language transcribed text and associated metadata from provided spoken audio data. */
  getAudioTranslationAsResponseObject(
    deploymentId: string,
    body: AudioTranslationOptions,
    options: GetAudioTranslationAsResponseObjectOptionalParams = {
      requestOptions: {},
    },
  ): Promise<AudioTranslation> {
    return getAudioTranslationAsResponseObject(
      this._client,
      deploymentId,
      body,
      options,
    );
  }

  /**
   * Gets completions for the provided input prompts.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  getCompletions(
    deploymentId: string,
    body: CompletionsOptions,
    options: GetCompletionsOptionalParams = { requestOptions: {} },
  ): Promise<Completions> {
    return getCompletions(this._client, deploymentId, body, options);
  }

  /**
   * Gets chat completions for the provided chat messages.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  getChatCompletions(
    deploymentId: string,
    body: ChatCompletionsOptions,
    options: GetChatCompletionsOptionalParams = { requestOptions: {} },
  ): Promise<ChatCompletions> {
    return getChatCompletions(this._client, deploymentId, body, options);
  }

  /** Creates an image given a prompt. */
  getImageGenerations(
    deploymentId: string,
    body: ImageGenerationOptions,
    options: GetImageGenerationsOptionalParams = { requestOptions: {} },
  ): Promise<ImageGenerations> {
    return getImageGenerations(this._client, deploymentId, body, options);
  }

  /** Generates text-to-speech audio from the input text. */
  generateSpeechFromText(
    deploymentId: string,
    body: SpeechGenerationOptions,
    options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return generateSpeechFromText(this._client, deploymentId, body, options);
  }

  /** Return the embeddings for a given prompt. */
  getEmbeddings(
    deploymentId: string,
    body: EmbeddingsOptions,
    options: GetEmbeddingsOptionalParams = { requestOptions: {} },
  ): Promise<Embeddings> {
    return getEmbeddings(this._client, deploymentId, body, options);
  }
}
