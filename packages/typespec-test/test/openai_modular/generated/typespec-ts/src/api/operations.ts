// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AudioSpeechOptions,
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
  EmbeddingsOptions,
  Embeddings,
} from "../models/models.js";
import {
  serializeAudioSpeechOptions,
  serializeAudioTranscriptionOptions,
  deserializeAudioTranscription,
  serializeAudioTranslationOptions,
  deserializeAudioTranslation,
  serializeCompletionsOptions,
  deserializeCompletions,
  serializeChatCompletionsOptions,
  deserializeChatCompletions,
  serializeImageGenerationOptions,
  deserializeImageGenerations,
  serializeEmbeddingsOptions,
  deserializeEmbeddings,
} from "../utils/serializeUtil.js";
import {
  GetAudioSpeech200Response,
  GetAudioSpeechDefaultResponse,
  GetAudioTranscriptionAsPlainText200Response,
  GetAudioTranscriptionAsPlainTextDefaultResponse,
  GetAudioTranscriptionAsResponseObject200Response,
  GetAudioTranscriptionAsResponseObjectDefaultResponse,
  GetAudioTranslationAsPlainText200Response,
  GetAudioTranslationAsPlainTextDefaultResponse,
  GetAudioTranslationAsResponseObject200Response,
  GetAudioTranslationAsResponseObjectDefaultResponse,
  GetChatCompletions200Response,
  GetChatCompletionsDefaultResponse,
  GetCompletions200Response,
  GetCompletionsDefaultResponse,
  GetEmbeddings200Response,
  GetEmbeddingsDefaultResponse,
  GetImageGenerations200Response,
  GetImageGenerationsDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import {
  GetAudioSpeechOptionalParams,
  GetAudioTranscriptionAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetCompletionsOptionalParams,
  GetChatCompletionsOptionalParams,
  GetImageGenerationsOptionalParams,
  GetEmbeddingsOptionalParams,
} from "../models/options.js";

export function _getAudioSpeechSend(
  context: Client,
  deploymentId: string,
  body: AudioSpeechOptions,
  options: GetAudioSpeechOptionalParams = { requestOptions: {} },
): StreamableMethod<GetAudioSpeech200Response | GetAudioSpeechDefaultResponse> {
  return context
    .path("/deployments/{deploymentId}/audio/speech", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeAudioSpeechOptions(body),
    });
}

export async function _getAudioSpeechDeserialize(
  result: GetAudioSpeech200Response | GetAudioSpeechDefaultResponse,
): Promise<Uint8Array> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/** Generates text-to-speech audio from the input text. */
export async function getAudioSpeech(
  context: Client,
  deploymentId: string,
  body: AudioSpeechOptions,
  options: GetAudioSpeechOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getAudioSpeechSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioSpeechDeserialize(result);
}

export function _getAudioTranscriptionAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | GetAudioTranscriptionAsPlainText200Response
  | GetAudioTranscriptionAsPlainTextDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/audio/transcriptions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: serializeAudioTranscriptionOptions(body),
    }) as StreamableMethod<
    | GetAudioTranscriptionAsPlainText200Response
    | GetAudioTranscriptionAsPlainTextDefaultResponse
  >;
}

export async function _getAudioTranscriptionAsPlainTextDeserialize(
  result:
    | GetAudioTranscriptionAsPlainText200Response
    | GetAudioTranscriptionAsPlainTextDefaultResponse,
): Promise<string> {
  if (isUnexpected(result)) {
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
): StreamableMethod<
  | GetAudioTranscriptionAsResponseObject200Response
  | GetAudioTranscriptionAsResponseObjectDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/audio/transcriptions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: serializeAudioTranscriptionOptions(body),
    }) as StreamableMethod<
    | GetAudioTranscriptionAsResponseObject200Response
    | GetAudioTranscriptionAsResponseObjectDefaultResponse
  >;
}

export async function _getAudioTranscriptionAsResponseObjectDeserialize(
  result:
    | GetAudioTranscriptionAsResponseObject200Response
    | GetAudioTranscriptionAsResponseObjectDefaultResponse,
): Promise<AudioTranscription> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeAudioTranscription(result.body);
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
): StreamableMethod<
  | GetAudioTranslationAsPlainText200Response
  | GetAudioTranslationAsPlainTextDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/audio/translations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: serializeAudioTranslationOptions(body),
    }) as StreamableMethod<
    | GetAudioTranslationAsPlainText200Response
    | GetAudioTranslationAsPlainTextDefaultResponse
  >;
}

export async function _getAudioTranslationAsPlainTextDeserialize(
  result:
    | GetAudioTranslationAsPlainText200Response
    | GetAudioTranslationAsPlainTextDefaultResponse,
): Promise<string> {
  if (isUnexpected(result)) {
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
): StreamableMethod<
  | GetAudioTranslationAsResponseObject200Response
  | GetAudioTranslationAsResponseObjectDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/audio/translations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: serializeAudioTranslationOptions(body),
    }) as StreamableMethod<
    | GetAudioTranslationAsResponseObject200Response
    | GetAudioTranslationAsResponseObjectDefaultResponse
  >;
}

export async function _getAudioTranslationAsResponseObjectDeserialize(
  result:
    | GetAudioTranslationAsResponseObject200Response
    | GetAudioTranslationAsResponseObjectDefaultResponse,
): Promise<AudioTranslation> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeAudioTranslation(result.body);
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
): StreamableMethod<GetCompletions200Response | GetCompletionsDefaultResponse> {
  return context
    .path("/deployments/{deploymentId}/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeCompletionsOptions(body),
    });
}

export async function _getCompletionsDeserialize(
  result: GetCompletions200Response | GetCompletionsDefaultResponse,
): Promise<Completions> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeCompletions(result.body);
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
): StreamableMethod<
  GetChatCompletions200Response | GetChatCompletionsDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/chat/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeChatCompletionsOptions(body),
    });
}

export async function _getChatCompletionsDeserialize(
  result: GetChatCompletions200Response | GetChatCompletionsDefaultResponse,
): Promise<ChatCompletions> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeChatCompletions(result.body);
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
): StreamableMethod<
  GetImageGenerations200Response | GetImageGenerationsDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/images/generations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeImageGenerationOptions(body),
    });
}

export async function _getImageGenerationsDeserialize(
  result: GetImageGenerations200Response | GetImageGenerationsDefaultResponse,
): Promise<ImageGenerations> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeImageGenerations(result.body);
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

export function _getEmbeddingsSend(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptionalParams = { requestOptions: {} },
): StreamableMethod<GetEmbeddings200Response | GetEmbeddingsDefaultResponse> {
  return context
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeEmbeddingsOptions(body),
    });
}

export async function _getEmbeddingsDeserialize(
  result: GetEmbeddings200Response | GetEmbeddingsDefaultResponse,
): Promise<Embeddings> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeEmbeddings(result.body);
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
