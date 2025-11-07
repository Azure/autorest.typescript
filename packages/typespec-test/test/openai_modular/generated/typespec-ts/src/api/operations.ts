// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "./index.js";
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
import { getBinaryResponse } from "../static-helpers/serialization/get-binary-response.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  GetEmbeddingsOptionalParams,
  GenerateSpeechFromTextOptionalParams,
  GetImageGenerationsOptionalParams,
  GetChatCompletionsOptionalParams,
  GetCompletionsOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranscriptionAsPlainTextOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getEmbeddingsSend(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/embeddings{?api%2Dversion}",
    {
      deploymentId: deploymentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
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

export function _generateSpeechFromTextSend(
  context: Client,
  deploymentId: string,
  body: SpeechGenerationOptions,
  options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/speech{?api%2Dversion}",
    {
      deploymentId: deploymentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/octet-stream",
        ...options.requestOptions?.headers,
      },
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
  const streamableMethod = _generateSpeechFromTextSend(
    context,
    deploymentId,
    body,
    options,
  );
  const result = await getBinaryResponse(streamableMethod);
  return _generateSpeechFromTextDeserialize(result);
}

export function _getImageGenerationsSend(
  context: Client,
  deploymentId: string,
  body: ImageGenerationOptions,
  options: GetImageGenerationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/images/generations{?api%2Dversion}",
    {
      deploymentId: deploymentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
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

export function _getChatCompletionsSend(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/chat/completions{?api%2Dversion}",
    {
      deploymentId: deploymentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
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

export function _getCompletionsSend(
  context: Client,
  deploymentId: string,
  body: CompletionsOptions,
  options: GetCompletionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/completions{?api%2Dversion}",
    {
      deploymentId: deploymentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
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

export function _getAudioTranslationAsResponseObjectSend(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/translations{?api%2Dversion}",
    {
      deploymentId: deploymentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
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

export function _getAudioTranslationAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/translations{?api%2Dversion}",
    {
      deploymentId: deploymentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
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

export function _getAudioTranscriptionAsResponseObjectSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/transcriptions{?api%2Dversion}",
    {
      deploymentId: deploymentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
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

export function _getAudioTranscriptionAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/deployments/{deploymentId}/audio/transcriptions{?api%2Dversion}",
    {
      deploymentId: deploymentId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
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
