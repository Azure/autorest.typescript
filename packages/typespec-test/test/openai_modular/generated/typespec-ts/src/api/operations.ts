// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  chatRequestMessageUnionSerializer,
  functionDefinitionSerializer,
  azureChatExtensionConfigurationUnionSerializer,
  azureChatEnhancementConfigurationSerializer,
  chatCompletionsResponseFormatUnionSerializer,
  AudioTranscriptionOptions,
  AudioTranscription,
  AudioTaskLabel,
  AudioTranslationOptions,
  AudioTranslation,
  CompletionsOptions,
  Completions,
  ContentFilterSeverity,
  CompletionsFinishReason,
  ChatCompletionsOptions,
  ChatRole,
  ChatCompletions,
  ImageGenerationOptions,
  ImageGenerations,
  SpeechGenerationOptions,
  EmbeddingsOptions,
  Embeddings,
} from "../models/models.js";
import {
  GenerateSpeechFromText200Response,
  GenerateSpeechFromTextDefaultResponse,
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
import { uint8ArrayToString } from "@azure/core-util";
import { serializeRecord } from "../helpers/serializerHelpers.js";
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
} from "../models/options.js";

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
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        response_format: body["responseFormat"],
        language: body["language"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        timestamp_granularities: body["timestampGranularities"],
        model: body["model"],
      },
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
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        response_format: body["responseFormat"],
        language: body["language"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        timestamp_granularities: body["timestampGranularities"],
        model: body["model"],
      },
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

  return {
    text: result.body["text"],
    task: result.body["task"] as AudioTaskLabel,
    language: result.body["language"],
    duration: result.body["duration"],
    segments:
      result.body["segments"] === undefined
        ? result.body["segments"]
        : result.body["segments"].map((p) => {
            return {
              id: p["id"],
              start: p["start"],
              end: p["end"],
              text: p["text"],
              temperature: p["temperature"],
              avgLogprob: p["avg_logprob"],
              compressionRatio: p["compression_ratio"],
              noSpeechProb: p["no_speech_prob"],
              tokens: p["tokens"],
              seek: p["seek"],
            };
          }),
    words:
      result.body["words"] === undefined
        ? result.body["words"]
        : result.body["words"].map((p) => {
            return { word: p["word"], start: p["start"], end: p["end"] };
          }),
  };
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
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        response_format: body["responseFormat"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        model: body["model"],
      },
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
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        response_format: body["responseFormat"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        model: body["model"],
      },
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

  return {
    text: result.body["text"],
    task: result.body["task"] as AudioTaskLabel,
    language: result.body["language"],
    duration: result.body["duration"],
    segments:
      result.body["segments"] === undefined
        ? result.body["segments"]
        : result.body["segments"].map((p) => {
            return {
              id: p["id"],
              start: p["start"],
              end: p["end"],
              text: p["text"],
              temperature: p["temperature"],
              avgLogprob: p["avg_logprob"],
              compressionRatio: p["compression_ratio"],
              noSpeechProb: p["no_speech_prob"],
              tokens: p["tokens"],
              seek: p["seek"],
            };
          }),
  };
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
      body: {
        prompt: body["prompt"],
        max_tokens: body["maxTokens"],
        temperature: body["temperature"],
        top_p: body["topP"],
        logit_bias: !body.logitBias
          ? body.logitBias
          : (serializeRecord(body.logitBias as any) as any),
        user: body["user"],
        n: body["n"],
        logprobs: body["logprobs"],
        suffix: body["suffix"],
        echo: body["echo"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        best_of: body["bestOf"],
        stream: body["stream"],
        model: body["model"],
      },
    });
}

export async function _getCompletionsDeserialize(
  result: GetCompletions200Response | GetCompletionsDefaultResponse,
): Promise<Completions> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    promptFilterResults:
      result.body["prompt_filter_results"] === undefined
        ? result.body["prompt_filter_results"]
        : result.body["prompt_filter_results"].map((p) => {
            return {
              promptIndex: p["prompt_index"],
              contentFilterResults: {
                sexual: !p.content_filter_results.sexual
                  ? undefined
                  : {
                      filtered: p.content_filter_results.sexual?.["filtered"],
                      severity: p.content_filter_results.sexual?.[
                        "severity"
                      ] as ContentFilterSeverity,
                    },
                violence: !p.content_filter_results.violence
                  ? undefined
                  : {
                      filtered: p.content_filter_results.violence?.["filtered"],
                      severity: p.content_filter_results.violence?.[
                        "severity"
                      ] as ContentFilterSeverity,
                    },
                hate: !p.content_filter_results.hate
                  ? undefined
                  : {
                      filtered: p.content_filter_results.hate?.["filtered"],
                      severity: p.content_filter_results.hate?.[
                        "severity"
                      ] as ContentFilterSeverity,
                    },
                selfHarm: !p.content_filter_results.self_harm
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.self_harm?.["filtered"],
                      severity: p.content_filter_results.self_harm?.[
                        "severity"
                      ] as ContentFilterSeverity,
                    },
                profanity: !p.content_filter_results.profanity
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.profanity?.["filtered"],
                      detected:
                        p.content_filter_results.profanity?.["detected"],
                    },
                customBlocklists: !p.content_filter_results.custom_blocklists
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.custom_blocklists?.[
                          "filtered"
                        ],
                      details: p.content_filter_results.custom_blocklists?.[
                        "details"
                      ].map((p) => {
                        return { filtered: p["filtered"], id: p["id"] };
                      }),
                    },
                error: !p.content_filter_results.error
                  ? undefined
                  : p.content_filter_results.error,
                jailbreak: !p.content_filter_results.jailbreak
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.jailbreak?.["filtered"],
                      detected:
                        p.content_filter_results.jailbreak?.["detected"],
                    },
                indirectAttack: !p.content_filter_results.indirect_attack
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.indirect_attack?.["filtered"],
                      detected:
                        p.content_filter_results.indirect_attack?.["detected"],
                    },
              },
            };
          }),
    choices: result.body["choices"].map((p) => {
      return {
        text: p["text"],
        index: p["index"],
        contentFilterResults: !p.content_filter_results
          ? undefined
          : {
              sexual: !p.content_filter_results?.sexual
                ? undefined
                : {
                    filtered: p.content_filter_results?.sexual?.["filtered"],
                    severity: p.content_filter_results?.sexual?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              violence: !p.content_filter_results?.violence
                ? undefined
                : {
                    filtered: p.content_filter_results?.violence?.["filtered"],
                    severity: p.content_filter_results?.violence?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              hate: !p.content_filter_results?.hate
                ? undefined
                : {
                    filtered: p.content_filter_results?.hate?.["filtered"],
                    severity: p.content_filter_results?.hate?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              selfHarm: !p.content_filter_results?.self_harm
                ? undefined
                : {
                    filtered: p.content_filter_results?.self_harm?.["filtered"],
                    severity: p.content_filter_results?.self_harm?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              profanity: !p.content_filter_results?.profanity
                ? undefined
                : {
                    filtered: p.content_filter_results?.profanity?.["filtered"],
                    detected: p.content_filter_results?.profanity?.["detected"],
                  },
              customBlocklists: !p.content_filter_results?.custom_blocklists
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.custom_blocklists?.["filtered"],
                    details: p.content_filter_results?.custom_blocklists?.[
                      "details"
                    ].map((p) => {
                      return { filtered: p["filtered"], id: p["id"] };
                    }),
                  },
              error: !p.content_filter_results?.error
                ? undefined
                : p.content_filter_results?.error,
              protectedMaterialText: !p.content_filter_results
                ?.protected_material_text
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.protected_material_text?.[
                        "filtered"
                      ],
                    detected:
                      p.content_filter_results?.protected_material_text?.[
                        "detected"
                      ],
                  },
              protectedMaterialCode: !p.content_filter_results
                ?.protected_material_code
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.protected_material_code?.[
                        "filtered"
                      ],
                    detected:
                      p.content_filter_results?.protected_material_code?.[
                        "detected"
                      ],
                    url: p.content_filter_results?.protected_material_code?.[
                      "URL"
                    ],
                    license:
                      p.content_filter_results?.protected_material_code?.[
                        "license"
                      ],
                  },
            },
        logprobs:
          p.logprobs === null
            ? null
            : {
                tokens: p.logprobs["tokens"],
                tokenLogprobs: p.logprobs["token_logprobs"],
                topLogprobs: p.logprobs["top_logprobs"],
                textOffset: p.logprobs["text_offset"],
              },
        finishReason: p["finish_reason"] as CompletionsFinishReason,
      };
    }),
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
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
      body: {
        messages: body["messages"].map((p) =>
          chatRequestMessageUnionSerializer(p),
        ),
        functions:
          body["functions"] === undefined
            ? body["functions"]
            : body["functions"].map(functionDefinitionSerializer),
        function_call: body["functionCall"] as any,
        max_tokens: body["maxTokens"],
        temperature: body["temperature"],
        top_p: body["topP"],
        logit_bias: !body.logitBias
          ? body.logitBias
          : (serializeRecord(body.logitBias as any) as any),
        user: body["user"],
        n: body["n"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        stream: body["stream"],
        model: body["model"],
        data_sources:
          body["dataSources"] === undefined
            ? body["dataSources"]
            : body["dataSources"].map((p) =>
                azureChatExtensionConfigurationUnionSerializer(p),
              ),
        enhancements: !body.enhancements
          ? body.enhancements
          : azureChatEnhancementConfigurationSerializer(body.enhancements),
        seed: body["seed"],
        logprobs: body["logprobs"],
        top_logprobs: body["topLogprobs"],
        response_format: !body.responseFormat
          ? body.responseFormat
          : chatCompletionsResponseFormatUnionSerializer(body.responseFormat),
        tools: body["tools"],
        tool_choice: body["toolChoice"] as any,
      },
    });
}

export async function _getChatCompletionsDeserialize(
  result: GetChatCompletions200Response | GetChatCompletionsDefaultResponse,
): Promise<ChatCompletions> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    choices: result.body["choices"].map((p) => {
      return {
        message: !p.message
          ? undefined
          : {
              role: p.message?.["role"] as ChatRole,
              content: p.message?.["content"],
              toolCalls:
                p.message?.["tool_calls"] === undefined
                  ? p.message?.["tool_calls"]
                  : p.message?.["tool_calls"],
              functionCall: !p.message?.function_call
                ? undefined
                : {
                    name: p.message?.function_call?.["name"],
                    arguments: p.message?.function_call?.["arguments"],
                  },
              context: !p.message?.context
                ? undefined
                : {
                    citations:
                      p.message?.context?.["citations"] === undefined
                        ? p.message?.context?.["citations"]
                        : p.message?.context?.["citations"].map((p) => {
                            return {
                              content: p["content"],
                              title: p["title"],
                              url: p["url"],
                              filepath: p["filepath"],
                              chunkId: p["chunk_id"],
                            };
                          }),
                    intent: p.message?.context?.["intent"],
                    allRetrievedDocuments:
                      p.message?.context?.["all_retrieved_documents"] ===
                      undefined
                        ? p.message?.context?.["all_retrieved_documents"]
                        : p.message?.context?.["all_retrieved_documents"].map(
                            (p) => {
                              return {
                                content: p["content"],
                                title: p["title"],
                                url: p["url"],
                                filepath: p["filepath"],
                                chunkId: p["chunk_id"],
                                searchQueries: p["search_queries"],
                                dataSourceIndex: p["data_source_index"],
                                originalSearchScore: p["original_search_score"],
                                rerankScore: p["rerank_score"],
                                filterReason: p["filter_reason"],
                              };
                            },
                          ),
                  },
            },
        logprobs:
          p.logprobs === null
            ? null
            : {
                content:
                  p.logprobs["content"] === null
                    ? p.logprobs["content"]
                    : p.logprobs["content"].map((p) => {
                        return {
                          token: p["token"],
                          logprob: p["logprob"],
                          bytes: p["bytes"],
                          topLogprobs:
                            p["top_logprobs"] === null
                              ? p["top_logprobs"]
                              : p["top_logprobs"].map((p) => {
                                  return {
                                    token: p["token"],
                                    logprob: p["logprob"],
                                    bytes: p["bytes"],
                                  };
                                }),
                        };
                      }),
              },
        index: p["index"],
        finishReason: p["finish_reason"] as CompletionsFinishReason,
        finishDetails: !p.finish_details
          ? undefined
          : { type: p.finish_details?.["type"] },
        delta: !p.delta
          ? undefined
          : {
              role: p.delta?.["role"] as ChatRole,
              content: p.delta?.["content"],
              toolCalls:
                p.delta?.["tool_calls"] === undefined
                  ? p.delta?.["tool_calls"]
                  : p.delta?.["tool_calls"],
              functionCall: !p.delta?.function_call
                ? undefined
                : {
                    name: p.delta?.function_call?.["name"],
                    arguments: p.delta?.function_call?.["arguments"],
                  },
              context: !p.delta?.context
                ? undefined
                : {
                    citations:
                      p.delta?.context?.["citations"] === undefined
                        ? p.delta?.context?.["citations"]
                        : p.delta?.context?.["citations"].map((p) => {
                            return {
                              content: p["content"],
                              title: p["title"],
                              url: p["url"],
                              filepath: p["filepath"],
                              chunkId: p["chunk_id"],
                            };
                          }),
                    intent: p.delta?.context?.["intent"],
                    allRetrievedDocuments:
                      p.delta?.context?.["all_retrieved_documents"] ===
                      undefined
                        ? p.delta?.context?.["all_retrieved_documents"]
                        : p.delta?.context?.["all_retrieved_documents"].map(
                            (p) => {
                              return {
                                content: p["content"],
                                title: p["title"],
                                url: p["url"],
                                filepath: p["filepath"],
                                chunkId: p["chunk_id"],
                                searchQueries: p["search_queries"],
                                dataSourceIndex: p["data_source_index"],
                                originalSearchScore: p["original_search_score"],
                                rerankScore: p["rerank_score"],
                                filterReason: p["filter_reason"],
                              };
                            },
                          ),
                  },
            },
        contentFilterResults: !p.content_filter_results
          ? undefined
          : {
              sexual: !p.content_filter_results?.sexual
                ? undefined
                : {
                    filtered: p.content_filter_results?.sexual?.["filtered"],
                    severity: p.content_filter_results?.sexual?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              violence: !p.content_filter_results?.violence
                ? undefined
                : {
                    filtered: p.content_filter_results?.violence?.["filtered"],
                    severity: p.content_filter_results?.violence?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              hate: !p.content_filter_results?.hate
                ? undefined
                : {
                    filtered: p.content_filter_results?.hate?.["filtered"],
                    severity: p.content_filter_results?.hate?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              selfHarm: !p.content_filter_results?.self_harm
                ? undefined
                : {
                    filtered: p.content_filter_results?.self_harm?.["filtered"],
                    severity: p.content_filter_results?.self_harm?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              profanity: !p.content_filter_results?.profanity
                ? undefined
                : {
                    filtered: p.content_filter_results?.profanity?.["filtered"],
                    detected: p.content_filter_results?.profanity?.["detected"],
                  },
              customBlocklists: !p.content_filter_results?.custom_blocklists
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.custom_blocklists?.["filtered"],
                    details: p.content_filter_results?.custom_blocklists?.[
                      "details"
                    ].map((p) => {
                      return { filtered: p["filtered"], id: p["id"] };
                    }),
                  },
              error: !p.content_filter_results?.error
                ? undefined
                : p.content_filter_results?.error,
              protectedMaterialText: !p.content_filter_results
                ?.protected_material_text
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.protected_material_text?.[
                        "filtered"
                      ],
                    detected:
                      p.content_filter_results?.protected_material_text?.[
                        "detected"
                      ],
                  },
              protectedMaterialCode: !p.content_filter_results
                ?.protected_material_code
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.protected_material_code?.[
                        "filtered"
                      ],
                    detected:
                      p.content_filter_results?.protected_material_code?.[
                        "detected"
                      ],
                    url: p.content_filter_results?.protected_material_code?.[
                      "URL"
                    ],
                    license:
                      p.content_filter_results?.protected_material_code?.[
                        "license"
                      ],
                  },
            },
        enhancements: !p.enhancements
          ? undefined
          : {
              grounding: !p.enhancements?.grounding
                ? undefined
                : {
                    lines: p.enhancements?.grounding?.["lines"].map((p) => {
                      return {
                        text: p["text"],
                        spans: p["spans"].map((p) => {
                          return {
                            text: p["text"],
                            offset: p["offset"],
                            length: p["length"],
                            polygon: p["polygon"].map((p) => {
                              return { x: p["x"], y: p["y"] };
                            }),
                          };
                        }),
                      };
                    }),
                  },
            },
      };
    }),
    model: result.body["model"],
    promptFilterResults:
      result.body["prompt_filter_results"] === undefined
        ? result.body["prompt_filter_results"]
        : result.body["prompt_filter_results"].map((p) => {
            return {
              promptIndex: p["prompt_index"],
              contentFilterResults: {
                sexual: !p.content_filter_results.sexual
                  ? undefined
                  : {
                      filtered: p.content_filter_results.sexual?.["filtered"],
                      severity: p.content_filter_results.sexual?.[
                        "severity"
                      ] as ContentFilterSeverity,
                    },
                violence: !p.content_filter_results.violence
                  ? undefined
                  : {
                      filtered: p.content_filter_results.violence?.["filtered"],
                      severity: p.content_filter_results.violence?.[
                        "severity"
                      ] as ContentFilterSeverity,
                    },
                hate: !p.content_filter_results.hate
                  ? undefined
                  : {
                      filtered: p.content_filter_results.hate?.["filtered"],
                      severity: p.content_filter_results.hate?.[
                        "severity"
                      ] as ContentFilterSeverity,
                    },
                selfHarm: !p.content_filter_results.self_harm
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.self_harm?.["filtered"],
                      severity: p.content_filter_results.self_harm?.[
                        "severity"
                      ] as ContentFilterSeverity,
                    },
                profanity: !p.content_filter_results.profanity
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.profanity?.["filtered"],
                      detected:
                        p.content_filter_results.profanity?.["detected"],
                    },
                customBlocklists: !p.content_filter_results.custom_blocklists
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.custom_blocklists?.[
                          "filtered"
                        ],
                      details: p.content_filter_results.custom_blocklists?.[
                        "details"
                      ].map((p) => {
                        return { filtered: p["filtered"], id: p["id"] };
                      }),
                    },
                error: !p.content_filter_results.error
                  ? undefined
                  : p.content_filter_results.error,
                jailbreak: !p.content_filter_results.jailbreak
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.jailbreak?.["filtered"],
                      detected:
                        p.content_filter_results.jailbreak?.["detected"],
                    },
                indirectAttack: !p.content_filter_results.indirect_attack
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.indirect_attack?.["filtered"],
                      detected:
                        p.content_filter_results.indirect_attack?.["detected"],
                    },
              },
            };
          }),
    systemFingerprint: result.body["system_fingerprint"],
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
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
      body: {
        model: body["model"],
        prompt: body["prompt"],
        n: body["n"],
        size: body["size"],
        response_format: body["responseFormat"],
        quality: body["quality"],
        style: body["style"],
        user: body["user"],
      },
    });
}

export async function _getImageGenerationsDeserialize(
  result: GetImageGenerations200Response | GetImageGenerationsDefaultResponse,
): Promise<ImageGenerations> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    created: new Date(result.body["created"]),
    data: result.body["data"].map((p) => {
      return {
        url: p["url"],
        base64Data: p["b64_json"],
        contentFilterResults: !p.content_filter_results
          ? undefined
          : {
              sexual: !p.content_filter_results?.sexual
                ? undefined
                : {
                    filtered: p.content_filter_results?.sexual?.["filtered"],
                    severity: p.content_filter_results?.sexual?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              violence: !p.content_filter_results?.violence
                ? undefined
                : {
                    filtered: p.content_filter_results?.violence?.["filtered"],
                    severity: p.content_filter_results?.violence?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              hate: !p.content_filter_results?.hate
                ? undefined
                : {
                    filtered: p.content_filter_results?.hate?.["filtered"],
                    severity: p.content_filter_results?.hate?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              selfHarm: !p.content_filter_results?.self_harm
                ? undefined
                : {
                    filtered: p.content_filter_results?.self_harm?.["filtered"],
                    severity: p.content_filter_results?.self_harm?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
            },
        revisedPrompt: p["revised_prompt"],
        promptFilterResults: !p.prompt_filter_results
          ? undefined
          : {
              sexual: !p.prompt_filter_results?.sexual
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.sexual?.["filtered"],
                    severity: p.prompt_filter_results?.sexual?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              violence: !p.prompt_filter_results?.violence
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.violence?.["filtered"],
                    severity: p.prompt_filter_results?.violence?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              hate: !p.prompt_filter_results?.hate
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.hate?.["filtered"],
                    severity: p.prompt_filter_results?.hate?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              selfHarm: !p.prompt_filter_results?.self_harm
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.self_harm?.["filtered"],
                    severity: p.prompt_filter_results?.self_harm?.[
                      "severity"
                    ] as ContentFilterSeverity,
                  },
              profanity: !p.prompt_filter_results?.profanity
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.profanity?.["filtered"],
                    detected: p.prompt_filter_results?.profanity?.["detected"],
                  },
              jailbreak: !p.prompt_filter_results?.jailbreak
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.jailbreak?.["filtered"],
                    detected: p.prompt_filter_results?.jailbreak?.["detected"],
                  },
              customBlocklists: !p.prompt_filter_results?.custom_blocklists
                ? undefined
                : {
                    filtered:
                      p.prompt_filter_results?.custom_blocklists?.["filtered"],
                    details: p.prompt_filter_results?.custom_blocklists?.[
                      "details"
                    ].map((p) => {
                      return { filtered: p["filtered"], id: p["id"] };
                    }),
                  },
            },
      };
    }),
  };
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
): StreamableMethod<
  GenerateSpeechFromText200Response | GenerateSpeechFromTextDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/audio/speech", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        input: body["input"],
        voice: body["voice"],
        response_format: body["responseFormat"],
        speed: body["speed"],
        model: body["model"],
      },
    });
}

export async function _generateSpeechFromTextDeserialize(
  result:
    | GenerateSpeechFromText200Response
    | GenerateSpeechFromTextDefaultResponse,
): Promise<Uint8Array> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body as any;
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
): StreamableMethod<GetEmbeddings200Response | GetEmbeddingsDefaultResponse> {
  return context
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        user: body["user"],
        model: body["model"],
        input: body["input"],
        encoding_format: body["encodingFormat"],
        dimensions: body["dimensions"],
        input_type: body["inputType"],
      },
    });
}

export async function _getEmbeddingsDeserialize(
  result: GetEmbeddings200Response | GetEmbeddingsDefaultResponse,
): Promise<Embeddings> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    data: result.body["data"].map((p) => {
      return { embedding: p["embedding"], index: p["index"] };
    }),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
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
