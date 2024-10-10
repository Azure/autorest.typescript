// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  OpenAIContext as Client,
  GenerateSpeechFromTextOptionalParams,
  GetAudioTranscriptionAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetChatCompletionsOptionalParams,
  GetCompletionsOptionalParams,
  GetEmbeddingsOptionalParams,
  GetImageGenerationsOptionalParams,
} from "./index.js";
import {
  AudioTranscriptionOptions,
  audioTranscriptionOptionsSerializer,
  AudioTranscription,
  audioTranscriptionDeserializer,
  AudioTranslationOptions,
  audioTranslationOptionsSerializer,
  AudioTranslation,
  audioTranslationDeserializer,
  CompletionsOptions,
  completionsOptionsSerializer,
  Completions,
  completionsDeserializer,
  ChatCompletionsOptions,
  chatCompletionsOptionsSerializer,
  ChatCompletions,
  chatCompletionsDeserializer,
  ImageGenerationOptions,
  imageGenerationOptionsSerializer,
  ImageGenerations,
  imageGenerationsDeserializer,
  SpeechGenerationOptions,
  speechGenerationOptionsSerializer,
  EmbeddingsOptions,
  embeddingsOptionsSerializer,
  Embeddings,
  embeddingsDeserializer,
} from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getAudioTranscriptionAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/transcriptions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: audioTranscriptionOptionsSerializer(body),
    });
}

export async function _getAudioTranscriptionAsPlainTextDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
 * written language corresponding to the language it was spoken in.
 */
export async function getAudioTranscriptionAsPlainText(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): Promise<string> {
  const result = await _getAudioTranscriptionAsPlainTextSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranscriptionAsPlainTextDeserialize(result);
}

export function _getAudioTranscriptionAsResponseObjectSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/transcriptions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: audioTranscriptionOptionsSerializer(body),
    });
}

export async function _getAudioTranscriptionAsResponseObjectDeserialize(
  result: PathUncheckedResponse,
): Promise<AudioTranscription> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return audioTranscriptionDeserializer(result.body);
}

/**
 * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
 * written language corresponding to the language it was spoken in.
 */
export async function getAudioTranscriptionAsResponseObject(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): Promise<AudioTranscription> {
  const result = await _getAudioTranscriptionAsResponseObjectSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranscriptionAsResponseObjectDeserialize(result);
}

export function _getAudioTranslationAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/translations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: audioTranslationOptionsSerializer(body),
    });
}

export async function _getAudioTranslationAsPlainTextDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Gets English language transcribed text and associated metadata from provided spoken audio data. */
export async function getAudioTranslationAsPlainText(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): Promise<string> {
  const result = await _getAudioTranslationAsPlainTextSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranslationAsPlainTextDeserialize(result);
}

export function _getAudioTranslationAsResponseObjectSend(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/translations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: audioTranslationOptionsSerializer(body),
    });
}

export async function _getAudioTranslationAsResponseObjectDeserialize(
  result: PathUncheckedResponse,
): Promise<AudioTranslation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return audioTranslationDeserializer(result.body);
}

/** Gets English language transcribed text and associated metadata from provided spoken audio data. */
export async function getAudioTranslationAsResponseObject(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): Promise<AudioTranslation> {
  const result = await _getAudioTranslationAsResponseObjectSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranslationAsResponseObjectDeserialize(result);
}

export function _getCompletionsSend(
  context: Client,
  deploymentId: string,
  body: CompletionsOptions,
  options: GetCompletionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: completionsOptionsSerializer(body),
    });
}

export async function _getCompletionsDeserialize(
  result: PathUncheckedResponse,
): Promise<Completions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return completionsDeserializer(result.body);
}

/**
 * Gets completions for the provided input prompts.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getCompletions(
  context: Client,
  deploymentId: string,
  body: CompletionsOptions,
  options: GetCompletionsOptionalParams = { requestOptions: {} },
): Promise<Completions> {
  const result = await _getCompletionsSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getCompletionsDeserialize(result);
}

export function _getChatCompletionsSend(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/chat/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: chatCompletionsOptionsSerializer(body),
    });
}

export async function _getChatCompletionsDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chatCompletionsDeserializer(result.body);
}

/**
 * Gets chat completions for the provided chat messages.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getChatCompletions(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsOptionalParams = { requestOptions: {} },
): Promise<ChatCompletions> {
  const result = await _getChatCompletionsSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getChatCompletionsDeserialize(result);
}

export function _getImageGenerationsSend(
  context: Client,
  deploymentId: string,
  body: ImageGenerationOptions,
  options: GetImageGenerationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/images/generations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: imageGenerationOptionsSerializer(body),
    });
}

export async function _getImageGenerationsDeserialize(
  result: PathUncheckedResponse,
): Promise<ImageGenerations> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return imageGenerationsDeserializer(result.body);
}

/** Creates an image given a prompt. */
export async function getImageGenerations(
  context: Client,
  deploymentId: string,
  body: ImageGenerationOptions,
  options: GetImageGenerationsOptionalParams = { requestOptions: {} },
): Promise<ImageGenerations> {
  const result = await _getImageGenerationsSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getImageGenerationsDeserialize(result);
}

export function _generateSpeechFromTextSend(
  context: Client,
  deploymentId: string,
  body: SpeechGenerationOptions,
  options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/speech", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: speechGenerationOptionsSerializer(body),
    });
}

export async function _generateSpeechFromTextDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Generates text-to-speech audio from the input text. */
export async function generateSpeechFromText(
  context: Client,
  deploymentId: string,
  body: SpeechGenerationOptions,
  options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _generateSpeechFromTextSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _generateSpeechFromTextDeserialize(result);
}

export function _getEmbeddingsSend(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: embeddingsOptionsSerializer(body),
    });
}

export async function _getEmbeddingsDeserialize(
  result: PathUncheckedResponse,
): Promise<Embeddings> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return embeddingsDeserializer(result.body);
}

/** Return the embeddings for a given prompt. */
export async function getEmbeddings(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptionalParams = { requestOptions: {} },
): Promise<Embeddings> {
  const result = await _getEmbeddingsSend(context, deploymentId, body, options);
  return _getEmbeddingsDeserialize(result);
}
