// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  AudioSpeechVoice,
  AudioSpeechOutputFormat,
  AudioSpeechOptions,
  AudioTranscriptionFormat,
  AudioTranscriptionOptions,
  AudioTranscription,
  AudioTaskLabel,
  AudioTranscriptionSegment,
  AudioTranslationFormat,
  AudioTranslationOptions,
  AudioTranslation,
  AudioTranslationSegment,
  CompletionsOptions,
  Completions,
  ContentFilterResultsForPrompt,
  ContentFilterResultDetailsForPrompt,
  ContentFilterResult,
  ContentFilterSeverity,
  ContentFilterDetectionResult,
  ContentFilterBlocklistIdResult,
  Error,
  InnerError,
  Choice,
  ContentFilterResultsForChoice,
  ContentFilterCitedDetectionResult,
  CompletionsLogProbabilityModel,
  CompletionsFinishReason,
  CompletionsUsage,
  ChatRequestMessage,
  ChatRole,
  ChatRequestSystemMessage,
  ChatRequestUserMessage,
  ChatMessageContentItem,
  ChatMessageTextContentItem,
  ChatMessageImageContentItem,
  ChatMessageImageUrl,
  ChatMessageImageDetailLevel,
  ChatRequestAssistantMessage,
  ChatCompletionsToolCall,
  ChatCompletionsFunctionToolCall,
  FunctionCall,
  ChatRequestToolMessage,
  ChatRequestFunctionMessage,
  FunctionDefinition,
  FunctionCallPreset,
  FunctionName,
  AzureChatExtensionConfiguration,
  AzureChatExtensionType,
  AzureSearchChatExtensionConfiguration,
  AzureSearchChatExtensionParameters,
  OnYourDataAuthenticationOptions,
  OnYourDataAuthenticationType,
  OnYourDataApiKeyAuthenticationOptions,
  OnYourDataConnectionStringAuthenticationOptions,
  OnYourDataKeyAndKeyIdAuthenticationOptions,
  OnYourDataEncodedApiKeyAuthenticationOptions,
  OnYourDataAccessTokenAuthenticationOptions,
  OnYourDataSystemAssignedManagedIdentityAuthenticationOptions,
  OnYourDataUserAssignedManagedIdentityAuthenticationOptions,
  AzureSearchIndexFieldMappingOptions,
  AzureSearchQueryType,
  OnYourDataVectorizationSource,
  OnYourDataVectorizationSourceType,
  OnYourDataEndpointVectorizationSource,
  OnYourDataDeploymentNameVectorizationSource,
  OnYourDataModelIdVectorizationSource,
  AzureMachineLearningIndexChatExtensionConfiguration,
  AzureMachineLearningIndexChatExtensionParameters,
  AzureCosmosDBChatExtensionConfiguration,
  AzureCosmosDBChatExtensionParameters,
  AzureCosmosDBFieldMappingOptions,
  ElasticsearchChatExtensionConfiguration,
  ElasticsearchChatExtensionParameters,
  ElasticsearchIndexFieldMappingOptions,
  ElasticsearchQueryType,
  PineconeChatExtensionConfiguration,
  PineconeChatExtensionParameters,
  PineconeFieldMappingOptions,
  AzureChatEnhancementConfiguration,
  AzureChatGroundingEnhancementConfiguration,
  AzureChatOCREnhancementConfiguration,
  ChatCompletionsResponseFormat,
  ChatCompletionsTextResponseFormat,
  ChatCompletionsJsonResponseFormat,
  ChatCompletionsToolDefinition,
  ChatCompletionsFunctionToolDefinition,
  ChatCompletionsToolSelectionPreset,
  ChatCompletionsNamedToolSelection,
  ChatCompletionsNamedFunctionToolSelection,
  ChatCompletionsFunctionToolSelection,
  ChatCompletionsOptions,
  ChatCompletions,
  ChatChoice,
  ChatResponseMessage,
  AzureChatExtensionsMessageContext,
  AzureChatExtensionDataSourceResponseCitation,
  ChatChoiceLogProbabilityInfo,
  ChatTokenLogProbabilityResult,
  ChatTokenLogProbabilityInfo,
  ChatFinishDetails,
  StopFinishDetails,
  MaxTokensFinishDetails,
  AzureChatEnhancements,
  AzureGroundingEnhancement,
  AzureGroundingEnhancementLine,
  AzureGroundingEnhancementLineSpan,
  AzureGroundingEnhancementCoordinatePoint,
  ImageSize,
  ImageGenerationResponseFormat,
  ImageGenerationQuality,
  ImageGenerationStyle,
  ImageGenerationOptions,
  ImageGenerations,
  ImageGenerationData,
  EmbeddingsOptions,
  Embeddings,
  EmbeddingItem,
  EmbeddingsUsage,
  ServiceApiVersions,
  ChatRequestUserMessageContent,
  ChatCompletionsOptionsFunctionCall,
  ChatCompletionsOptionsToolChoice,
} from "../models/models.js";
import {
  AudioSpeechVoice as AudioSpeechVoiceRest,
  AudioSpeechOutputFormat as AudioSpeechOutputFormatRest,
  AudioSpeechOptions as AudioSpeechOptionsRest,
  AudioTranscriptionFormat as AudioTranscriptionFormatRest,
  AudioTranscriptionOptions as AudioTranscriptionOptionsRest,
  AudioTranscriptionOutput as AudioTranscriptionRest,
  AudioTaskLabelOutput as AudioTaskLabelRest,
  AudioTranscriptionSegmentOutput as AudioTranscriptionSegmentRest,
  AudioTranslationFormat as AudioTranslationFormatRest,
  AudioTranslationOptions as AudioTranslationOptionsRest,
  AudioTranslationOutput as AudioTranslationRest,
  AudioTranslationSegmentOutput as AudioTranslationSegmentRest,
  CompletionsOptions as CompletionsOptionsRest,
  CompletionsOutput as CompletionsRest,
  ContentFilterResultsForPromptOutput as ContentFilterResultsForPromptRest,
  ContentFilterResultDetailsForPromptOutput as ContentFilterResultDetailsForPromptRest,
  ContentFilterResultOutput as ContentFilterResultRest,
  ContentFilterSeverityOutput as ContentFilterSeverityRest,
  ContentFilterDetectionResultOutput as ContentFilterDetectionResultRest,
  ContentFilterBlocklistIdResultOutput as ContentFilterBlocklistIdResultRest,
  ErrorOutput as ErrorRest,
  InnerErrorOutput as InnerErrorRest,
  ChoiceOutput as ChoiceRest,
  ContentFilterResultsForChoiceOutput as ContentFilterResultsForChoiceRest,
  ContentFilterCitedDetectionResultOutput as ContentFilterCitedDetectionResultRest,
  CompletionsLogProbabilityModelOutput as CompletionsLogProbabilityModelRest,
  CompletionsFinishReasonOutput as CompletionsFinishReasonRest,
  CompletionsUsageOutput as CompletionsUsageRest,
  ChatRequestMessage as ChatRequestMessageRest,
  ChatRoleOutput as ChatRoleRest,
  ChatRequestSystemMessage as ChatRequestSystemMessageRest,
  ChatRequestUserMessage as ChatRequestUserMessageRest,
  ChatMessageContentItem as ChatMessageContentItemRest,
  ChatMessageTextContentItem as ChatMessageTextContentItemRest,
  ChatMessageImageContentItem as ChatMessageImageContentItemRest,
  ChatMessageImageUrl as ChatMessageImageUrlRest,
  ChatMessageImageDetailLevel as ChatMessageImageDetailLevelRest,
  ChatRequestAssistantMessage as ChatRequestAssistantMessageRest,
  ChatCompletionsToolCallOutput as ChatCompletionsToolCallRest,
  ChatCompletionsFunctionToolCallOutput as ChatCompletionsFunctionToolCallRest,
  FunctionCallOutput as FunctionCallRest,
  ChatRequestToolMessage as ChatRequestToolMessageRest,
  ChatRequestFunctionMessage as ChatRequestFunctionMessageRest,
  FunctionDefinition as FunctionDefinitionRest,
  FunctionCallPreset as FunctionCallPresetRest,
  FunctionName as FunctionNameRest,
  AzureChatExtensionConfiguration as AzureChatExtensionConfigurationRest,
  AzureChatExtensionType as AzureChatExtensionTypeRest,
  AzureSearchChatExtensionConfiguration as AzureSearchChatExtensionConfigurationRest,
  AzureSearchChatExtensionParameters as AzureSearchChatExtensionParametersRest,
  OnYourDataAuthenticationOptions as OnYourDataAuthenticationOptionsRest,
  OnYourDataAuthenticationType as OnYourDataAuthenticationTypeRest,
  OnYourDataApiKeyAuthenticationOptions as OnYourDataApiKeyAuthenticationOptionsRest,
  OnYourDataConnectionStringAuthenticationOptions as OnYourDataConnectionStringAuthenticationOptionsRest,
  OnYourDataKeyAndKeyIdAuthenticationOptions as OnYourDataKeyAndKeyIdAuthenticationOptionsRest,
  OnYourDataEncodedApiKeyAuthenticationOptions as OnYourDataEncodedApiKeyAuthenticationOptionsRest,
  OnYourDataAccessTokenAuthenticationOptions as OnYourDataAccessTokenAuthenticationOptionsRest,
  OnYourDataSystemAssignedManagedIdentityAuthenticationOptions as OnYourDataSystemAssignedManagedIdentityAuthenticationOptionsRest,
  OnYourDataUserAssignedManagedIdentityAuthenticationOptions as OnYourDataUserAssignedManagedIdentityAuthenticationOptionsRest,
  AzureSearchIndexFieldMappingOptions as AzureSearchIndexFieldMappingOptionsRest,
  AzureSearchQueryType as AzureSearchQueryTypeRest,
  OnYourDataVectorizationSource as OnYourDataVectorizationSourceRest,
  OnYourDataVectorizationSourceType as OnYourDataVectorizationSourceTypeRest,
  OnYourDataEndpointVectorizationSource as OnYourDataEndpointVectorizationSourceRest,
  OnYourDataDeploymentNameVectorizationSource as OnYourDataDeploymentNameVectorizationSourceRest,
  OnYourDataModelIdVectorizationSource as OnYourDataModelIdVectorizationSourceRest,
  AzureMachineLearningIndexChatExtensionConfiguration as AzureMachineLearningIndexChatExtensionConfigurationRest,
  AzureMachineLearningIndexChatExtensionParameters as AzureMachineLearningIndexChatExtensionParametersRest,
  AzureCosmosDBChatExtensionConfiguration as AzureCosmosDBChatExtensionConfigurationRest,
  AzureCosmosDBChatExtensionParameters as AzureCosmosDBChatExtensionParametersRest,
  AzureCosmosDBFieldMappingOptions as AzureCosmosDBFieldMappingOptionsRest,
  ElasticsearchChatExtensionConfiguration as ElasticsearchChatExtensionConfigurationRest,
  ElasticsearchChatExtensionParameters as ElasticsearchChatExtensionParametersRest,
  ElasticsearchIndexFieldMappingOptions as ElasticsearchIndexFieldMappingOptionsRest,
  ElasticsearchQueryType as ElasticsearchQueryTypeRest,
  PineconeChatExtensionConfiguration as PineconeChatExtensionConfigurationRest,
  PineconeChatExtensionParameters as PineconeChatExtensionParametersRest,
  PineconeFieldMappingOptions as PineconeFieldMappingOptionsRest,
  AzureChatEnhancementConfiguration as AzureChatEnhancementConfigurationRest,
  AzureChatGroundingEnhancementConfiguration as AzureChatGroundingEnhancementConfigurationRest,
  AzureChatOCREnhancementConfiguration as AzureChatOCREnhancementConfigurationRest,
  ChatCompletionsResponseFormat as ChatCompletionsResponseFormatRest,
  ChatCompletionsTextResponseFormat as ChatCompletionsTextResponseFormatRest,
  ChatCompletionsJsonResponseFormat as ChatCompletionsJsonResponseFormatRest,
  ChatCompletionsToolDefinition as ChatCompletionsToolDefinitionRest,
  ChatCompletionsFunctionToolDefinition as ChatCompletionsFunctionToolDefinitionRest,
  ChatCompletionsToolSelectionPreset as ChatCompletionsToolSelectionPresetRest,
  ChatCompletionsNamedToolSelection as ChatCompletionsNamedToolSelectionRest,
  ChatCompletionsNamedFunctionToolSelection as ChatCompletionsNamedFunctionToolSelectionRest,
  ChatCompletionsFunctionToolSelection as ChatCompletionsFunctionToolSelectionRest,
  ChatCompletionsOptions as ChatCompletionsOptionsRest,
  ChatCompletionsOutput as ChatCompletionsRest,
  ChatChoiceOutput as ChatChoiceRest,
  ChatResponseMessageOutput as ChatResponseMessageRest,
  AzureChatExtensionsMessageContextOutput as AzureChatExtensionsMessageContextRest,
  AzureChatExtensionDataSourceResponseCitationOutput as AzureChatExtensionDataSourceResponseCitationRest,
  ChatChoiceLogProbabilityInfoOutput as ChatChoiceLogProbabilityInfoRest,
  ChatTokenLogProbabilityResultOutput as ChatTokenLogProbabilityResultRest,
  ChatTokenLogProbabilityInfoOutput as ChatTokenLogProbabilityInfoRest,
  ChatFinishDetailsOutput as ChatFinishDetailsRest,
  StopFinishDetailsOutput as StopFinishDetailsRest,
  MaxTokensFinishDetailsOutput as MaxTokensFinishDetailsRest,
  AzureChatEnhancementsOutput as AzureChatEnhancementsRest,
  AzureGroundingEnhancementOutput as AzureGroundingEnhancementRest,
  AzureGroundingEnhancementLineOutput as AzureGroundingEnhancementLineRest,
  AzureGroundingEnhancementLineSpanOutput as AzureGroundingEnhancementLineSpanRest,
  AzureGroundingEnhancementCoordinatePointOutput as AzureGroundingEnhancementCoordinatePointRest,
  ImageSize as ImageSizeRest,
  ImageGenerationResponseFormat as ImageGenerationResponseFormatRest,
  ImageGenerationQuality as ImageGenerationQualityRest,
  ImageGenerationStyle as ImageGenerationStyleRest,
  ImageGenerationOptions as ImageGenerationOptionsRest,
  ImageGenerationsOutput as ImageGenerationsRest,
  ImageGenerationDataOutput as ImageGenerationDataRest,
  EmbeddingsOptions as EmbeddingsOptionsRest,
  EmbeddingsOutput as EmbeddingsRest,
  EmbeddingItemOutput as EmbeddingItemRest,
  EmbeddingsUsageOutput as EmbeddingsUsageRest,
} from "../rest/index.js";

export function serializeAudioSpeechVoice(
  o: AudioSpeechVoice,
): AudioSpeechVoiceRest {
  return o;
}

export function deserializeAudioSpeechVoice(
  o: AudioSpeechVoiceRest,
): AudioSpeechVoice {
  return o;
}

export function serializeAudioSpeechOutputFormat(
  o: AudioSpeechOutputFormat,
): AudioSpeechOutputFormatRest {
  return o;
}

export function deserializeAudioSpeechOutputFormat(
  o: AudioSpeechOutputFormatRest,
): AudioSpeechOutputFormat {
  return o;
}

export function serializeAudioSpeechOptions(
  o: AudioSpeechOptions,
): AudioSpeechOptionsRest {
  return {
    ...o,
    input: o["input"],
    voice: serializeAudioSpeechVoice(o["voice"]),
    ...(o["responseFormat"] === undefined
      ? {}
      : {
          response_format: serializeAudioSpeechOutputFormat(
            o["responseFormat"],
          ),
        }),
    ...(o["speed"] === undefined ? {} : { speed: o["speed"] }),
  };
}

export function deserializeAudioSpeechOptions(
  o: AudioSpeechOptionsRest,
): AudioSpeechOptions {
  return {
    ...o,
    input: o["input"],
    voice: deserializeAudioSpeechVoice(o["voice"]),
    ...(o["response_format"] === undefined
      ? {}
      : {
          responseFormat: deserializeAudioSpeechOutputFormat(
            o["response_format"],
          ),
        }),
    ...(o["speed"] === undefined ? {} : { speed: o["speed"] }),
  };
}

export function serializeAudioTranscriptionFormat(
  o: AudioTranscriptionFormat,
): AudioTranscriptionFormatRest {
  return o;
}

export function deserializeAudioTranscriptionFormat(
  o: AudioTranscriptionFormatRest,
): AudioTranscriptionFormat {
  return o;
}

export function serializeAudioTranscriptionOptions(
  o: AudioTranscriptionOptions,
): AudioTranscriptionOptionsRest {
  return {
    ...o,
    file: uint8ArrayToString(o["file"], "base64"),
    ...(o["filename"] === undefined ? {} : { filename: o["filename"] }),
    ...(o["responseFormat"] === undefined
      ? {}
      : {
          response_format: serializeAudioTranscriptionFormat(
            o["responseFormat"],
          ),
        }),
    ...(o["language"] === undefined ? {} : { language: o["language"] }),
    ...(o["prompt"] === undefined ? {} : { prompt: o["prompt"] }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
  };
}

export function deserializeAudioTranscriptionOptions(
  o: AudioTranscriptionOptionsRest,
): AudioTranscriptionOptions {
  return {
    ...o,
    file:
      typeof o["file"] === "string"
        ? stringToUint8Array(o["file"], "base64")
        : o["file"],
    ...(o["filename"] === undefined ? {} : { filename: o["filename"] }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          responseFormat: deserializeAudioTranscriptionFormat(
            o["response_format"],
          ),
        }),
    ...(o["language"] === undefined ? {} : { language: o["language"] }),
    ...(o["prompt"] === undefined ? {} : { prompt: o["prompt"] }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
  };
}

export function serializeAudioTranscription(
  o: AudioTranscription,
): AudioTranscriptionRest {
  return {
    ...o,
    text: o["text"],
    ...(o["task"] === undefined
      ? {}
      : { task: serializeAudioTaskLabel(o["task"]) }),
    ...(o["language"] === undefined ? {} : { language: o["language"] }),
    ...(o["duration"] === undefined
      ? {}
      : {
          duration: (() => {
            throw Error("Not implemented.");
          })(),
        }),
    ...(o["segments"] === undefined
      ? {}
      : {
          segments: o["segments"].map((e) =>
            serializeAudioTranscriptionSegment(e),
          ),
        }),
  };
}

export function deserializeAudioTranscription(
  o: AudioTranscriptionRest,
): AudioTranscription {
  return {
    ...o,
    text: o["text"],
    ...(o["task"] === undefined
      ? {}
      : { task: deserializeAudioTaskLabel(o["task"]) }),
    ...(o["language"] === undefined ? {} : { language: o["language"] }),
    ...(o["duration"] === undefined
      ? {}
      : {
          duration: (() => {
            throw Error("Not implemented.");
          })(),
        }),
    ...(o["segments"] === undefined
      ? {}
      : {
          segments: o["segments"].map((e) =>
            deserializeAudioTranscriptionSegment(e),
          ),
        }),
  };
}

export function serializeAudioTaskLabel(o: AudioTaskLabel): AudioTaskLabelRest {
  return o;
}

export function deserializeAudioTaskLabel(
  o: AudioTaskLabelRest,
): AudioTaskLabel {
  return o;
}

export function serializeAudioTranscriptionSegment(
  o: AudioTranscriptionSegment,
): AudioTranscriptionSegmentRest {
  return {
    ...o,
    id: o["id"],
    start: (() => {
      throw Error("Not implemented.");
    })(),
    end: (() => {
      throw Error("Not implemented.");
    })(),
    text: o["text"],
    temperature: o["temperature"],
    avg_logprob: o["avgLogprob"],
    compression_ratio: o["compressionRatio"],
    no_speech_prob: o["noSpeechProb"],
    tokens: o["tokens"],
    seek: o["seek"],
  };
}

export function deserializeAudioTranscriptionSegment(
  o: AudioTranscriptionSegmentRest,
): AudioTranscriptionSegment {
  return {
    ...o,
    id: o["id"],
    start: (() => {
      throw Error("Not implemented.");
    })(),
    end: (() => {
      throw Error("Not implemented.");
    })(),
    text: o["text"],
    temperature: o["temperature"],
    avgLogprob: o["avg_logprob"],
    compressionRatio: o["compression_ratio"],
    noSpeechProb: o["no_speech_prob"],
    tokens: o["tokens"],
    seek: o["seek"],
  };
}

export function serializeAudioTranslationFormat(
  o: AudioTranslationFormat,
): AudioTranslationFormatRest {
  return o;
}

export function deserializeAudioTranslationFormat(
  o: AudioTranslationFormatRest,
): AudioTranslationFormat {
  return o;
}

export function serializeAudioTranslationOptions(
  o: AudioTranslationOptions,
): AudioTranslationOptionsRest {
  return {
    ...o,
    file: uint8ArrayToString(o["file"], "base64"),
    ...(o["filename"] === undefined ? {} : { filename: o["filename"] }),
    ...(o["responseFormat"] === undefined
      ? {}
      : {
          response_format: serializeAudioTranslationFormat(o["responseFormat"]),
        }),
    ...(o["prompt"] === undefined ? {} : { prompt: o["prompt"] }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
  };
}

export function deserializeAudioTranslationOptions(
  o: AudioTranslationOptionsRest,
): AudioTranslationOptions {
  return {
    ...o,
    file:
      typeof o["file"] === "string"
        ? stringToUint8Array(o["file"], "base64")
        : o["file"],
    ...(o["filename"] === undefined ? {} : { filename: o["filename"] }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          responseFormat: deserializeAudioTranslationFormat(
            o["response_format"],
          ),
        }),
    ...(o["prompt"] === undefined ? {} : { prompt: o["prompt"] }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
  };
}

export function serializeAudioTranslation(
  o: AudioTranslation,
): AudioTranslationRest {
  return {
    ...o,
    text: o["text"],
    ...(o["task"] === undefined
      ? {}
      : { task: serializeAudioTaskLabel(o["task"]) }),
    ...(o["language"] === undefined ? {} : { language: o["language"] }),
    ...(o["duration"] === undefined
      ? {}
      : {
          duration: (() => {
            throw Error("Not implemented.");
          })(),
        }),
    ...(o["segments"] === undefined
      ? {}
      : {
          segments: o["segments"].map((e) =>
            serializeAudioTranslationSegment(e),
          ),
        }),
  };
}

export function deserializeAudioTranslation(
  o: AudioTranslationRest,
): AudioTranslation {
  return {
    ...o,
    text: o["text"],
    ...(o["task"] === undefined
      ? {}
      : { task: deserializeAudioTaskLabel(o["task"]) }),
    ...(o["language"] === undefined ? {} : { language: o["language"] }),
    ...(o["duration"] === undefined
      ? {}
      : {
          duration: (() => {
            throw Error("Not implemented.");
          })(),
        }),
    ...(o["segments"] === undefined
      ? {}
      : {
          segments: o["segments"].map((e) =>
            deserializeAudioTranslationSegment(e),
          ),
        }),
  };
}

export function serializeAudioTranslationSegment(
  o: AudioTranslationSegment,
): AudioTranslationSegmentRest {
  return {
    ...o,
    id: o["id"],
    start: (() => {
      throw Error("Not implemented.");
    })(),
    end: (() => {
      throw Error("Not implemented.");
    })(),
    text: o["text"],
    temperature: o["temperature"],
    avg_logprob: o["avgLogprob"],
    compression_ratio: o["compressionRatio"],
    no_speech_prob: o["noSpeechProb"],
    tokens: o["tokens"],
    seek: o["seek"],
  };
}

export function deserializeAudioTranslationSegment(
  o: AudioTranslationSegmentRest,
): AudioTranslationSegment {
  return {
    ...o,
    id: o["id"],
    start: (() => {
      throw Error("Not implemented.");
    })(),
    end: (() => {
      throw Error("Not implemented.");
    })(),
    text: o["text"],
    temperature: o["temperature"],
    avgLogprob: o["avg_logprob"],
    compressionRatio: o["compression_ratio"],
    noSpeechProb: o["no_speech_prob"],
    tokens: o["tokens"],
    seek: o["seek"],
  };
}

export function serializeCompletionsOptions(
  o: CompletionsOptions,
): CompletionsOptionsRest {
  return {
    ...o,
    prompt: o["prompt"],
    ...(o["maxTokens"] === undefined ? {} : { max_tokens: o["maxTokens"] }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["topP"] === undefined ? {} : { top_p: o["topP"] }),
    ...(o["logitBias"] === undefined
      ? {}
      : {
          logit_bias: (() => {
            throw Error("Not implemented.");
          })(),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["n"] === undefined ? {} : { n: o["n"] }),
    ...(o["logprobs"] === undefined ? {} : { logprobs: o["logprobs"] }),
    ...(o["echo"] === undefined ? {} : { echo: o["echo"] }),
    ...(o["stop"] === undefined ? {} : { stop: o["stop"] }),
    ...(o["presencePenalty"] === undefined
      ? {}
      : { presence_penalty: o["presencePenalty"] }),
    ...(o["frequencyPenalty"] === undefined
      ? {}
      : { frequency_penalty: o["frequencyPenalty"] }),
    ...(o["bestOf"] === undefined ? {} : { best_of: o["bestOf"] }),
    ...(o["stream"] === undefined ? {} : { stream: o["stream"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
  };
}

export function deserializeCompletionsOptions(
  o: CompletionsOptionsRest,
): CompletionsOptions {
  return {
    ...o,
    prompt: o["prompt"],
    ...(o["max_tokens"] === undefined ? {} : { maxTokens: o["max_tokens"] }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["top_p"] === undefined ? {} : { topP: o["top_p"] }),
    ...(o["logit_bias"] === undefined
      ? {}
      : {
          logitBias: (() => {
            throw Error("Not implemented.");
          })(),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["n"] === undefined ? {} : { n: o["n"] }),
    ...(o["logprobs"] === undefined ? {} : { logprobs: o["logprobs"] }),
    ...(o["echo"] === undefined ? {} : { echo: o["echo"] }),
    ...(o["stop"] === undefined ? {} : { stop: o["stop"] }),
    ...(o["presence_penalty"] === undefined
      ? {}
      : { presencePenalty: o["presence_penalty"] }),
    ...(o["frequency_penalty"] === undefined
      ? {}
      : { frequencyPenalty: o["frequency_penalty"] }),
    ...(o["best_of"] === undefined ? {} : { bestOf: o["best_of"] }),
    ...(o["stream"] === undefined ? {} : { stream: o["stream"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
  };
}

export function serializeCompletions(o: Completions): CompletionsRest {
  return {
    ...o,
    id: o["id"],
    created: o["created"].getTime(),
    ...(o["promptFilterResults"] === undefined
      ? {}
      : {
          prompt_filter_results: o["promptFilterResults"].map((e) =>
            serializeContentFilterResultsForPrompt(e),
          ),
        }),
    choices: o["choices"].map((e) => serializeChoice(e)),
    usage: serializeCompletionsUsage(o["usage"]),
  };
}

export function deserializeCompletions(o: CompletionsRest): Completions {
  return {
    ...o,
    id: o["id"],
    created: new Date(o["created"]),
    ...(o["prompt_filter_results"] === undefined
      ? {}
      : {
          promptFilterResults: o["prompt_filter_results"].map((e) =>
            deserializeContentFilterResultsForPrompt(e),
          ),
        }),
    choices: o["choices"].map((e) => deserializeChoice(e)),
    usage: deserializeCompletionsUsage(o["usage"]),
  };
}

export function serializeContentFilterResultsForPrompt(
  o: ContentFilterResultsForPrompt,
): ContentFilterResultsForPromptRest {
  return {
    ...o,
    prompt_index: o["promptIndex"],
    content_filter_results: serializeContentFilterResultDetailsForPrompt(
      o["contentFilterResults"],
    ),
  };
}

export function deserializeContentFilterResultsForPrompt(
  o: ContentFilterResultsForPromptRest,
): ContentFilterResultsForPrompt {
  return {
    ...o,
    promptIndex: o["prompt_index"],
    contentFilterResults: deserializeContentFilterResultDetailsForPrompt(
      o["content_filter_results"],
    ),
  };
}

export function serializeContentFilterResultDetailsForPrompt(
  o: ContentFilterResultDetailsForPrompt,
): ContentFilterResultDetailsForPromptRest {
  return {
    ...o,
    ...(o["sexual"] === undefined
      ? {}
      : { sexual: serializeContentFilterResult(o["sexual"]) }),
    ...(o["violence"] === undefined
      ? {}
      : { violence: serializeContentFilterResult(o["violence"]) }),
    ...(o["hate"] === undefined
      ? {}
      : { hate: serializeContentFilterResult(o["hate"]) }),
    ...(o["selfHarm"] === undefined
      ? {}
      : { self_harm: serializeContentFilterResult(o["selfHarm"]) }),
    ...(o["profanity"] === undefined
      ? {}
      : { profanity: serializeContentFilterDetectionResult(o["profanity"]) }),
    ...(o["customBlocklists"] === undefined
      ? {}
      : {
          custom_blocklists: o["customBlocklists"].map((e) =>
            serializeContentFilterBlocklistIdResult(e),
          ),
        }),
    ...(o["error"] === undefined ? {} : { error: serializeError(o["error"]) }),
    ...(o["jailbreak"] === undefined
      ? {}
      : { jailbreak: serializeContentFilterDetectionResult(o["jailbreak"]) }),
  };
}

export function deserializeContentFilterResultDetailsForPrompt(
  o: ContentFilterResultDetailsForPromptRest,
): ContentFilterResultDetailsForPrompt {
  return {
    ...o,
    ...(o["sexual"] === undefined
      ? {}
      : { sexual: deserializeContentFilterResult(o["sexual"]) }),
    ...(o["violence"] === undefined
      ? {}
      : { violence: deserializeContentFilterResult(o["violence"]) }),
    ...(o["hate"] === undefined
      ? {}
      : { hate: deserializeContentFilterResult(o["hate"]) }),
    ...(o["self_harm"] === undefined
      ? {}
      : { selfHarm: deserializeContentFilterResult(o["self_harm"]) }),
    ...(o["profanity"] === undefined
      ? {}
      : { profanity: deserializeContentFilterDetectionResult(o["profanity"]) }),
    ...(o["custom_blocklists"] === undefined
      ? {}
      : {
          customBlocklists: o["custom_blocklists"].map((e) =>
            deserializeContentFilterBlocklistIdResult(e),
          ),
        }),
    ...(o["error"] === undefined
      ? {}
      : { error: deserializeError(o["error"]) }),
    ...(o["jailbreak"] === undefined
      ? {}
      : { jailbreak: deserializeContentFilterDetectionResult(o["jailbreak"]) }),
  };
}

export function serializeContentFilterResult(
  o: ContentFilterResult,
): ContentFilterResultRest {
  return {
    ...o,
    severity: serializeContentFilterSeverity(o["severity"]),
    filtered: o["filtered"],
  };
}

export function deserializeContentFilterResult(
  o: ContentFilterResultRest,
): ContentFilterResult {
  return {
    ...o,
    severity: deserializeContentFilterSeverity(o["severity"]),
    filtered: o["filtered"],
  };
}

export function serializeContentFilterSeverity(
  o: ContentFilterSeverity,
): ContentFilterSeverityRest {
  return o;
}

export function deserializeContentFilterSeverity(
  o: ContentFilterSeverityRest,
): ContentFilterSeverity {
  return o;
}

export function serializeContentFilterDetectionResult(
  o: ContentFilterDetectionResult,
): ContentFilterDetectionResultRest {
  return { ...o, filtered: o["filtered"], detected: o["detected"] };
}

export function deserializeContentFilterDetectionResult(
  o: ContentFilterDetectionResultRest,
): ContentFilterDetectionResult {
  return { ...o, filtered: o["filtered"], detected: o["detected"] };
}

export function serializeContentFilterBlocklistIdResult(
  o: ContentFilterBlocklistIdResult,
): ContentFilterBlocklistIdResultRest {
  return { ...o, id: o["id"], filtered: o["filtered"] };
}

export function deserializeContentFilterBlocklistIdResult(
  o: ContentFilterBlocklistIdResultRest,
): ContentFilterBlocklistIdResult {
  return { ...o, id: o["id"], filtered: o["filtered"] };
}

export function serializeError(o: Error): ErrorRest {
  return {
    ...o,
    code: o["code"],
    message: o["message"],
    ...(o["target"] === undefined ? {} : { target: o["target"] }),
    ...(o["details"] === undefined
      ? {}
      : { details: o["details"].map((e) => serializeError(e)) }),
    ...(o["innererror"] === undefined
      ? {}
      : { innererror: serializeInnerError(o["innererror"]) }),
  };
}

export function deserializeError(o: ErrorRest): Error {
  return {
    ...o,
    code: o["code"],
    message: o["message"],
    ...(o["target"] === undefined ? {} : { target: o["target"] }),
    ...(o["details"] === undefined
      ? {}
      : { details: o["details"].map((e) => deserializeError(e)) }),
    ...(o["innererror"] === undefined
      ? {}
      : { innererror: deserializeInnerError(o["innererror"]) }),
  };
}

export function serializeInnerError(o: InnerError): InnerErrorRest {
  return {
    ...o,
    ...(o["code"] === undefined ? {} : { code: o["code"] }),
    ...(o["innererror"] === undefined
      ? {}
      : { innererror: serializeInnerError(o["innererror"]) }),
  };
}

export function deserializeInnerError(o: InnerErrorRest): InnerError {
  return {
    ...o,
    ...(o["code"] === undefined ? {} : { code: o["code"] }),
    ...(o["innererror"] === undefined
      ? {}
      : { innererror: deserializeInnerError(o["innererror"]) }),
  };
}

export function serializeChoice(o: Choice): ChoiceRest {
  return {
    ...o,
    text: o["text"],
    index: o["index"],
    ...(o["contentFilterResults"] === undefined
      ? {}
      : {
          content_filter_results: serializeContentFilterResultsForChoice(
            o["contentFilterResults"],
          ),
        }),
    logprobs:
      o["logprobs"] === null
        ? o["logprobs"]
        : serializeCompletionsLogProbabilityModel(o["logprobs"]),
    finish_reason:
      o["finishReason"] === null
        ? o["finishReason"]
        : serializeCompletionsFinishReason(o["finishReason"]),
  };
}

export function deserializeChoice(o: ChoiceRest): Choice {
  return {
    ...o,
    text: o["text"],
    index: o["index"],
    ...(o["content_filter_results"] === undefined
      ? {}
      : {
          contentFilterResults: deserializeContentFilterResultsForChoice(
            o["content_filter_results"],
          ),
        }),
    logprobs:
      o["logprobs"] === null
        ? o["logprobs"]
        : deserializeCompletionsLogProbabilityModel(o["logprobs"]),
    finishReason:
      o["finish_reason"] === null
        ? o["finish_reason"]
        : deserializeCompletionsFinishReason(o["finish_reason"]),
  };
}

export function serializeContentFilterResultsForChoice(
  o: ContentFilterResultsForChoice,
): ContentFilterResultsForChoiceRest {
  return {
    ...o,
    ...(o["sexual"] === undefined
      ? {}
      : { sexual: serializeContentFilterResult(o["sexual"]) }),
    ...(o["violence"] === undefined
      ? {}
      : { violence: serializeContentFilterResult(o["violence"]) }),
    ...(o["hate"] === undefined
      ? {}
      : { hate: serializeContentFilterResult(o["hate"]) }),
    ...(o["selfHarm"] === undefined
      ? {}
      : { self_harm: serializeContentFilterResult(o["selfHarm"]) }),
    ...(o["profanity"] === undefined
      ? {}
      : { profanity: serializeContentFilterDetectionResult(o["profanity"]) }),
    ...(o["customBlocklists"] === undefined
      ? {}
      : {
          custom_blocklists: o["customBlocklists"].map((e) =>
            serializeContentFilterBlocklistIdResult(e),
          ),
        }),
    ...(o["error"] === undefined ? {} : { error: serializeError(o["error"]) }),
    ...(o["protectedMaterialText"] === undefined
      ? {}
      : {
          protected_material_text: serializeContentFilterDetectionResult(
            o["protectedMaterialText"],
          ),
        }),
    ...(o["protectedMaterialCode"] === undefined
      ? {}
      : {
          protected_material_code: serializeContentFilterCitedDetectionResult(
            o["protectedMaterialCode"],
          ),
        }),
  };
}

export function deserializeContentFilterResultsForChoice(
  o: ContentFilterResultsForChoiceRest,
): ContentFilterResultsForChoice {
  return {
    ...o,
    ...(o["sexual"] === undefined
      ? {}
      : { sexual: deserializeContentFilterResult(o["sexual"]) }),
    ...(o["violence"] === undefined
      ? {}
      : { violence: deserializeContentFilterResult(o["violence"]) }),
    ...(o["hate"] === undefined
      ? {}
      : { hate: deserializeContentFilterResult(o["hate"]) }),
    ...(o["self_harm"] === undefined
      ? {}
      : { selfHarm: deserializeContentFilterResult(o["self_harm"]) }),
    ...(o["profanity"] === undefined
      ? {}
      : { profanity: deserializeContentFilterDetectionResult(o["profanity"]) }),
    ...(o["custom_blocklists"] === undefined
      ? {}
      : {
          customBlocklists: o["custom_blocklists"].map((e) =>
            deserializeContentFilterBlocklistIdResult(e),
          ),
        }),
    ...(o["error"] === undefined
      ? {}
      : { error: deserializeError(o["error"]) }),
    ...(o["protected_material_text"] === undefined
      ? {}
      : {
          protectedMaterialText: deserializeContentFilterDetectionResult(
            o["protected_material_text"],
          ),
        }),
    ...(o["protected_material_code"] === undefined
      ? {}
      : {
          protectedMaterialCode: deserializeContentFilterCitedDetectionResult(
            o["protected_material_code"],
          ),
        }),
  };
}

export function serializeContentFilterCitedDetectionResult(
  o: ContentFilterCitedDetectionResult,
): ContentFilterCitedDetectionResultRest {
  return {
    ...o,
    filtered: o["filtered"],
    detected: o["detected"],
    ...(o["url"] === undefined ? {} : { URL: o["url"] }),
    license: o["license"],
  };
}

export function deserializeContentFilterCitedDetectionResult(
  o: ContentFilterCitedDetectionResultRest,
): ContentFilterCitedDetectionResult {
  return {
    ...o,
    filtered: o["filtered"],
    detected: o["detected"],
    ...(o["URL"] === undefined ? {} : { url: o["URL"] }),
    license: o["license"],
  };
}

export function serializeCompletionsLogProbabilityModel(
  o: CompletionsLogProbabilityModel,
): CompletionsLogProbabilityModelRest {
  return {
    ...o,
    tokens: o["tokens"],
    token_logprobs: o["tokenLogprobs"],
    top_logprobs: o["topLogprobs"].map((e: undefined) =>
      (() => {
        throw Error("Not implemented.");
      })(),
    ),
    text_offset: o["textOffset"],
  };
}

export function deserializeCompletionsLogProbabilityModel(
  o: CompletionsLogProbabilityModelRest,
): CompletionsLogProbabilityModel {
  return {
    ...o,
    tokens: o["tokens"],
    tokenLogprobs: o["token_logprobs"],
    topLogprobs: o["top_logprobs"].map((e: undefined) =>
      (() => {
        throw Error("Not implemented.");
      })(),
    ),
    textOffset: o["text_offset"],
  };
}

export function serializeCompletionsFinishReason(
  o: CompletionsFinishReason,
): CompletionsFinishReasonRest {
  return o;
}

export function deserializeCompletionsFinishReason(
  o: CompletionsFinishReasonRest,
): CompletionsFinishReason {
  return o;
}

export function serializeCompletionsUsage(
  o: CompletionsUsage,
): CompletionsUsageRest {
  return {
    ...o,
    completion_tokens: o["completionTokens"],
    prompt_tokens: o["promptTokens"],
    total_tokens: o["totalTokens"],
  };
}

export function deserializeCompletionsUsage(
  o: CompletionsUsageRest,
): CompletionsUsage {
  return {
    ...o,
    completionTokens: o["completion_tokens"],
    promptTokens: o["prompt_tokens"],
    totalTokens: o["total_tokens"],
  };
}

export function serializeChatRequestMessage(
  o: ChatRequestMessage,
): ChatRequestMessageRest {
  return { ...o, role: serializeChatRole(o["role"]) };
}

export function deserializeChatRequestMessage(
  o: ChatRequestMessageRest,
): ChatRequestMessage {
  return { ...o, role: deserializeChatRole(o["role"]) };
}

export function serializeChatRole(o: ChatRole): ChatRoleRest {
  return o;
}

export function deserializeChatRole(o: ChatRoleRest): ChatRole {
  return o;
}

export function serializeChatRequestSystemMessage(
  o: ChatRequestSystemMessage,
): ChatRequestSystemMessageRest {
  return {
    ...o,
    ...serializeChatRequestMessage(o),
    role: o["role"],
    content: o["content"],
    ...(o["name"] === undefined ? {} : { name: o["name"] }),
  };
}

export function deserializeChatRequestSystemMessage(
  o: ChatRequestSystemMessageRest,
): ChatRequestSystemMessage {
  return {
    ...o,
    ...deserializeChatRequestMessage(o),
    role: o["role"],
    content: o["content"],
    ...(o["name"] === undefined ? {} : { name: o["name"] }),
  };
}

export function serializeChatRequestUserMessage(
  o: ChatRequestUserMessage,
): ChatRequestUserMessageRest {
  return {
    ...o,
    ...serializeChatRequestMessage(o),
    role: o["role"],
    content: serializeChatRequestUserMessageContent(o["content"]),
    ...(o["name"] === undefined ? {} : { name: o["name"] }),
  };
}

export function deserializeChatRequestUserMessage(
  o: ChatRequestUserMessageRest,
): ChatRequestUserMessage {
  return {
    ...o,
    ...deserializeChatRequestMessage(o),
    role: o["role"],
    content: deserializeChatRequestUserMessageContent(o["content"]),
    ...(o["name"] === undefined ? {} : { name: o["name"] }),
  };
}

export function serializeChatMessageContentItem(
  o: ChatMessageContentItem,
): ChatMessageContentItemRest {
  return { ...o, type: o["type"] };
}

export function deserializeChatMessageContentItem(
  o: ChatMessageContentItemRest,
): ChatMessageContentItem {
  return { ...o, type: o["type"] };
}

export function serializeChatMessageTextContentItem(
  o: ChatMessageTextContentItem,
): ChatMessageTextContentItemRest {
  return {
    ...o,
    ...serializeChatMessageContentItem(o),
    type: o["type"],
    text: o["text"],
  };
}

export function deserializeChatMessageTextContentItem(
  o: ChatMessageTextContentItemRest,
): ChatMessageTextContentItem {
  return {
    ...o,
    ...deserializeChatMessageContentItem(o),
    type: o["type"],
    text: o["text"],
  };
}

export function serializeChatMessageImageContentItem(
  o: ChatMessageImageContentItem,
): ChatMessageImageContentItemRest {
  return {
    ...o,
    ...serializeChatMessageContentItem(o),
    type: o["type"],
    image_url: serializeChatMessageImageUrl(o["imageUrl"]),
  };
}

export function deserializeChatMessageImageContentItem(
  o: ChatMessageImageContentItemRest,
): ChatMessageImageContentItem {
  return {
    ...o,
    ...deserializeChatMessageContentItem(o),
    type: o["type"],
    imageUrl: deserializeChatMessageImageUrl(o["image_url"]),
  };
}

export function serializeChatMessageImageUrl(
  o: ChatMessageImageUrl,
): ChatMessageImageUrlRest {
  return {
    ...o,
    url: o["url"],
    ...(o["detail"] === undefined
      ? {}
      : { detail: serializeChatMessageImageDetailLevel(o["detail"]) }),
  };
}

export function deserializeChatMessageImageUrl(
  o: ChatMessageImageUrlRest,
): ChatMessageImageUrl {
  return {
    ...o,
    url: o["url"],
    ...(o["detail"] === undefined
      ? {}
      : { detail: deserializeChatMessageImageDetailLevel(o["detail"]) }),
  };
}

export function serializeChatMessageImageDetailLevel(
  o: ChatMessageImageDetailLevel,
): ChatMessageImageDetailLevelRest {
  return o;
}

export function deserializeChatMessageImageDetailLevel(
  o: ChatMessageImageDetailLevelRest,
): ChatMessageImageDetailLevel {
  return o;
}

export function serializeChatRequestAssistantMessage(
  o: ChatRequestAssistantMessage,
): ChatRequestAssistantMessageRest {
  return {
    ...o,
    ...serializeChatRequestMessage(o),
    role: o["role"],
    content: o["content"] === null ? o["content"] : o["content"],
    ...(o["name"] === undefined ? {} : { name: o["name"] }),
    ...(o["toolCalls"] === undefined
      ? {}
      : {
          tool_calls: o["toolCalls"].map((e) =>
            serializeChatCompletionsToolCall(e),
          ),
        }),
    ...(o["functionCall"] === undefined
      ? {}
      : { function_call: serializeFunctionCall(o["functionCall"]) }),
  };
}

export function deserializeChatRequestAssistantMessage(
  o: ChatRequestAssistantMessageRest,
): ChatRequestAssistantMessage {
  return {
    ...o,
    ...deserializeChatRequestMessage(o),
    role: o["role"],
    content: o["content"] === null ? o["content"] : o["content"],
    ...(o["name"] === undefined ? {} : { name: o["name"] }),
    ...(o["tool_calls"] === undefined
      ? {}
      : {
          toolCalls: o["tool_calls"].map((e) =>
            deserializeChatCompletionsToolCall(e),
          ),
        }),
    ...(o["function_call"] === undefined
      ? {}
      : { functionCall: deserializeFunctionCall(o["function_call"]) }),
  };
}

export function serializeChatCompletionsToolCall(
  o: ChatCompletionsToolCall,
): ChatCompletionsToolCallRest {
  return { ...o, type: o["type"], id: o["id"] };
}

export function deserializeChatCompletionsToolCall(
  o: ChatCompletionsToolCallRest,
): ChatCompletionsToolCall {
  return { ...o, type: o["type"], id: o["id"] };
}

export function serializeChatCompletionsFunctionToolCall(
  o: ChatCompletionsFunctionToolCall,
): ChatCompletionsFunctionToolCallRest {
  return {
    ...o,
    ...serializeChatCompletionsToolCall(o),
    type: o["type"],
    function: serializeFunctionCall(o["function"]),
  };
}

export function deserializeChatCompletionsFunctionToolCall(
  o: ChatCompletionsFunctionToolCallRest,
): ChatCompletionsFunctionToolCall {
  return {
    ...o,
    ...deserializeChatCompletionsToolCall(o),
    type: o["type"],
    function: deserializeFunctionCall(o["function"]),
  };
}

export function serializeFunctionCall(o: FunctionCall): FunctionCallRest {
  return { ...o, name: o["name"], arguments: o["arguments"] };
}

export function deserializeFunctionCall(o: FunctionCallRest): FunctionCall {
  return { ...o, name: o["name"], arguments: o["arguments"] };
}

export function serializeChatRequestToolMessage(
  o: ChatRequestToolMessage,
): ChatRequestToolMessageRest {
  return {
    ...o,
    ...serializeChatRequestMessage(o),
    role: o["role"],
    content: o["content"] === null ? o["content"] : o["content"],
    tool_call_id: o["toolCallId"],
  };
}

export function deserializeChatRequestToolMessage(
  o: ChatRequestToolMessageRest,
): ChatRequestToolMessage {
  return {
    ...o,
    ...deserializeChatRequestMessage(o),
    role: o["role"],
    content: o["content"] === null ? o["content"] : o["content"],
    toolCallId: o["tool_call_id"],
  };
}

export function serializeChatRequestFunctionMessage(
  o: ChatRequestFunctionMessage,
): ChatRequestFunctionMessageRest {
  return {
    ...o,
    ...serializeChatRequestMessage(o),
    role: o["role"],
    name: o["name"],
    content: o["content"] === null ? o["content"] : o["content"],
  };
}

export function deserializeChatRequestFunctionMessage(
  o: ChatRequestFunctionMessageRest,
): ChatRequestFunctionMessage {
  return {
    ...o,
    ...deserializeChatRequestMessage(o),
    role: o["role"],
    name: o["name"],
    content: o["content"] === null ? o["content"] : o["content"],
  };
}

export function serializeFunctionDefinition(
  o: FunctionDefinition,
): FunctionDefinitionRest {
  return {
    ...o,
    name: o["name"],
    ...(o["description"] === undefined
      ? {}
      : { description: o["description"] }),
    ...(o["parameters"] === undefined ? {} : { parameters: o["parameters"] }),
  };
}

export function deserializeFunctionDefinition(
  o: FunctionDefinitionRest,
): FunctionDefinition {
  return {
    ...o,
    name: o["name"],
    ...(o["description"] === undefined
      ? {}
      : { description: o["description"] }),
    ...(o["parameters"] === undefined ? {} : { parameters: o["parameters"] }),
  };
}

export function serializeFunctionCallPreset(
  o: FunctionCallPreset,
): FunctionCallPresetRest {
  return o;
}

export function deserializeFunctionCallPreset(
  o: FunctionCallPresetRest,
): FunctionCallPreset {
  return o;
}

export function serializeFunctionName(o: FunctionName): FunctionNameRest {
  return { ...o, name: o["name"] };
}

export function deserializeFunctionName(o: FunctionNameRest): FunctionName {
  return { ...o, name: o["name"] };
}

export function serializeAzureChatExtensionConfiguration(
  o: AzureChatExtensionConfiguration,
): AzureChatExtensionConfigurationRest {
  return { ...o, type: serializeAzureChatExtensionType(o["type"]) };
}

export function deserializeAzureChatExtensionConfiguration(
  o: AzureChatExtensionConfigurationRest,
): AzureChatExtensionConfiguration {
  return { ...o, type: deserializeAzureChatExtensionType(o["type"]) };
}

export function serializeAzureChatExtensionType(
  o: AzureChatExtensionType,
): AzureChatExtensionTypeRest {
  return o;
}

export function deserializeAzureChatExtensionType(
  o: AzureChatExtensionTypeRest,
): AzureChatExtensionType {
  return o;
}

export function serializeAzureSearchChatExtensionConfiguration(
  o: AzureSearchChatExtensionConfiguration,
): AzureSearchChatExtensionConfigurationRest {
  return {
    ...o,
    ...serializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: serializeAzureSearchChatExtensionParameters(o["parameters"]),
  };
}

export function deserializeAzureSearchChatExtensionConfiguration(
  o: AzureSearchChatExtensionConfigurationRest,
): AzureSearchChatExtensionConfiguration {
  return {
    ...o,
    ...deserializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: deserializeAzureSearchChatExtensionParameters(o["parameters"]),
  };
}

export function serializeAzureSearchChatExtensionParameters(
  o: AzureSearchChatExtensionParameters,
): AzureSearchChatExtensionParametersRest {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: serializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["topNDocuments"] === undefined
      ? {}
      : { top_n_documents: o["topNDocuments"] }),
    ...(o["inScope"] === undefined ? {} : { in_scope: o["inScope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["roleInformation"] === undefined
      ? {}
      : { role_information: o["roleInformation"] }),
    endpoint: o["endpoint"],
    index_name: o["indexName"],
    ...(o["fieldsMapping"] === undefined
      ? {}
      : {
          fields_mapping: serializeAzureSearchIndexFieldMappingOptions(
            o["fieldsMapping"],
          ),
        }),
    ...(o["queryType"] === undefined
      ? {}
      : { query_type: serializeAzureSearchQueryType(o["queryType"]) }),
    ...(o["semanticConfiguration"] === undefined
      ? {}
      : { semantic_configuration: o["semanticConfiguration"] }),
    ...(o["filter"] === undefined ? {} : { filter: o["filter"] }),
    ...(o["embeddingDependency"] === undefined
      ? {}
      : {
          embedding_dependency: serializeOnYourDataVectorizationSource(
            o["embeddingDependency"],
          ),
        }),
  };
}

export function deserializeAzureSearchChatExtensionParameters(
  o: AzureSearchChatExtensionParametersRest,
): AzureSearchChatExtensionParameters {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: deserializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["top_n_documents"] === undefined
      ? {}
      : { topNDocuments: o["top_n_documents"] }),
    ...(o["in_scope"] === undefined ? {} : { inScope: o["in_scope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["role_information"] === undefined
      ? {}
      : { roleInformation: o["role_information"] }),
    endpoint: o["endpoint"],
    indexName: o["index_name"],
    ...(o["fields_mapping"] === undefined
      ? {}
      : {
          fieldsMapping: deserializeAzureSearchIndexFieldMappingOptions(
            o["fields_mapping"],
          ),
        }),
    ...(o["query_type"] === undefined
      ? {}
      : { queryType: deserializeAzureSearchQueryType(o["query_type"]) }),
    ...(o["semantic_configuration"] === undefined
      ? {}
      : { semanticConfiguration: o["semantic_configuration"] }),
    ...(o["filter"] === undefined ? {} : { filter: o["filter"] }),
    ...(o["embedding_dependency"] === undefined
      ? {}
      : {
          embeddingDependency: deserializeOnYourDataVectorizationSource(
            o["embedding_dependency"],
          ),
        }),
  };
}

export function serializeOnYourDataAuthenticationOptions(
  o: OnYourDataAuthenticationOptions,
): OnYourDataAuthenticationOptionsRest {
  return { ...o, type: serializeOnYourDataAuthenticationType(o["type"]) };
}

export function deserializeOnYourDataAuthenticationOptions(
  o: OnYourDataAuthenticationOptionsRest,
): OnYourDataAuthenticationOptions {
  return { ...o, type: deserializeOnYourDataAuthenticationType(o["type"]) };
}

export function serializeOnYourDataAuthenticationType(
  o: OnYourDataAuthenticationType,
): OnYourDataAuthenticationTypeRest {
  return o;
}

export function deserializeOnYourDataAuthenticationType(
  o: OnYourDataAuthenticationTypeRest,
): OnYourDataAuthenticationType {
  return o;
}

export function serializeOnYourDataApiKeyAuthenticationOptions(
  o: OnYourDataApiKeyAuthenticationOptions,
): OnYourDataApiKeyAuthenticationOptionsRest {
  return {
    ...o,
    ...serializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    key: o["key"],
  };
}

export function deserializeOnYourDataApiKeyAuthenticationOptions(
  o: OnYourDataApiKeyAuthenticationOptionsRest,
): OnYourDataApiKeyAuthenticationOptions {
  return {
    ...o,
    ...deserializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    key: o["key"],
  };
}

export function serializeOnYourDataConnectionStringAuthenticationOptions(
  o: OnYourDataConnectionStringAuthenticationOptions,
): OnYourDataConnectionStringAuthenticationOptionsRest {
  return {
    ...o,
    ...serializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    connection_string: o["connectionString"],
  };
}

export function deserializeOnYourDataConnectionStringAuthenticationOptions(
  o: OnYourDataConnectionStringAuthenticationOptionsRest,
): OnYourDataConnectionStringAuthenticationOptions {
  return {
    ...o,
    ...deserializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    connectionString: o["connection_string"],
  };
}

export function serializeOnYourDataKeyAndKeyIdAuthenticationOptions(
  o: OnYourDataKeyAndKeyIdAuthenticationOptions,
): OnYourDataKeyAndKeyIdAuthenticationOptionsRest {
  return {
    ...o,
    ...serializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    key: o["key"],
    key_id: o["keyId"],
  };
}

export function deserializeOnYourDataKeyAndKeyIdAuthenticationOptions(
  o: OnYourDataKeyAndKeyIdAuthenticationOptionsRest,
): OnYourDataKeyAndKeyIdAuthenticationOptions {
  return {
    ...o,
    ...deserializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    key: o["key"],
    keyId: o["key_id"],
  };
}

export function serializeOnYourDataEncodedApiKeyAuthenticationOptions(
  o: OnYourDataEncodedApiKeyAuthenticationOptions,
): OnYourDataEncodedApiKeyAuthenticationOptionsRest {
  return {
    ...o,
    ...serializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    encoded_api_key: o["encodedApiKey"],
  };
}

export function deserializeOnYourDataEncodedApiKeyAuthenticationOptions(
  o: OnYourDataEncodedApiKeyAuthenticationOptionsRest,
): OnYourDataEncodedApiKeyAuthenticationOptions {
  return {
    ...o,
    ...deserializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    encodedApiKey: o["encoded_api_key"],
  };
}

export function serializeOnYourDataAccessTokenAuthenticationOptions(
  o: OnYourDataAccessTokenAuthenticationOptions,
): OnYourDataAccessTokenAuthenticationOptionsRest {
  return {
    ...o,
    ...serializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    access_token: o["accessToken"],
  };
}

export function deserializeOnYourDataAccessTokenAuthenticationOptions(
  o: OnYourDataAccessTokenAuthenticationOptionsRest,
): OnYourDataAccessTokenAuthenticationOptions {
  return {
    ...o,
    ...deserializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    accessToken: o["access_token"],
  };
}

export function serializeOnYourDataSystemAssignedManagedIdentityAuthenticationOptions(
  o: OnYourDataSystemAssignedManagedIdentityAuthenticationOptions,
): OnYourDataSystemAssignedManagedIdentityAuthenticationOptionsRest {
  return {
    ...o,
    ...serializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
  };
}

export function deserializeOnYourDataSystemAssignedManagedIdentityAuthenticationOptions(
  o: OnYourDataSystemAssignedManagedIdentityAuthenticationOptionsRest,
): OnYourDataSystemAssignedManagedIdentityAuthenticationOptions {
  return {
    ...o,
    ...deserializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
  };
}

export function serializeOnYourDataUserAssignedManagedIdentityAuthenticationOptions(
  o: OnYourDataUserAssignedManagedIdentityAuthenticationOptions,
): OnYourDataUserAssignedManagedIdentityAuthenticationOptionsRest {
  return {
    ...o,
    ...serializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    managed_identity_resource_id: o["managedIdentityResourceId"],
  };
}

export function deserializeOnYourDataUserAssignedManagedIdentityAuthenticationOptions(
  o: OnYourDataUserAssignedManagedIdentityAuthenticationOptionsRest,
): OnYourDataUserAssignedManagedIdentityAuthenticationOptions {
  return {
    ...o,
    ...deserializeOnYourDataAuthenticationOptions(o),
    type: o["type"],
    managedIdentityResourceId: o["managed_identity_resource_id"],
  };
}

export function serializeAzureSearchIndexFieldMappingOptions(
  o: AzureSearchIndexFieldMappingOptions,
): AzureSearchIndexFieldMappingOptionsRest {
  return {
    ...o,
    ...(o["titleField"] === undefined ? {} : { title_field: o["titleField"] }),
    ...(o["urlField"] === undefined ? {} : { url_field: o["urlField"] }),
    ...(o["filepathField"] === undefined
      ? {}
      : { filepath_field: o["filepathField"] }),
    ...(o["contentFields"] === undefined
      ? {}
      : { content_fields: o["contentFields"] }),
    ...(o["contentFieldsSeparator"] === undefined
      ? {}
      : { content_fields_separator: o["contentFieldsSeparator"] }),
    ...(o["vectorFields"] === undefined
      ? {}
      : { vector_fields: o["vectorFields"] }),
    ...(o["imageVectorFields"] === undefined
      ? {}
      : { image_vector_fields: o["imageVectorFields"] }),
  };
}

export function deserializeAzureSearchIndexFieldMappingOptions(
  o: AzureSearchIndexFieldMappingOptionsRest,
): AzureSearchIndexFieldMappingOptions {
  return {
    ...o,
    ...(o["title_field"] === undefined ? {} : { titleField: o["title_field"] }),
    ...(o["url_field"] === undefined ? {} : { urlField: o["url_field"] }),
    ...(o["filepath_field"] === undefined
      ? {}
      : { filepathField: o["filepath_field"] }),
    ...(o["content_fields"] === undefined
      ? {}
      : { contentFields: o["content_fields"] }),
    ...(o["content_fields_separator"] === undefined
      ? {}
      : { contentFieldsSeparator: o["content_fields_separator"] }),
    ...(o["vector_fields"] === undefined
      ? {}
      : { vectorFields: o["vector_fields"] }),
    ...(o["image_vector_fields"] === undefined
      ? {}
      : { imageVectorFields: o["image_vector_fields"] }),
  };
}

export function serializeAzureSearchQueryType(
  o: AzureSearchQueryType,
): AzureSearchQueryTypeRest {
  return o;
}

export function deserializeAzureSearchQueryType(
  o: AzureSearchQueryTypeRest,
): AzureSearchQueryType {
  return o;
}

export function serializeOnYourDataVectorizationSource(
  o: OnYourDataVectorizationSource,
): OnYourDataVectorizationSourceRest {
  return { ...o, type: serializeOnYourDataVectorizationSourceType(o["type"]) };
}

export function deserializeOnYourDataVectorizationSource(
  o: OnYourDataVectorizationSourceRest,
): OnYourDataVectorizationSource {
  return {
    ...o,
    type: deserializeOnYourDataVectorizationSourceType(o["type"]),
  };
}

export function serializeOnYourDataVectorizationSourceType(
  o: OnYourDataVectorizationSourceType,
): OnYourDataVectorizationSourceTypeRest {
  return o;
}

export function deserializeOnYourDataVectorizationSourceType(
  o: OnYourDataVectorizationSourceTypeRest,
): OnYourDataVectorizationSourceType {
  return o;
}

export function serializeOnYourDataEndpointVectorizationSource(
  o: OnYourDataEndpointVectorizationSource,
): OnYourDataEndpointVectorizationSourceRest {
  return {
    ...o,
    ...serializeOnYourDataVectorizationSource(o),
    type: o["type"],
    endpoint: o["endpoint"],
    authentication: serializeOnYourDataAuthenticationOptions(
      o["authentication"],
    ),
  };
}

export function deserializeOnYourDataEndpointVectorizationSource(
  o: OnYourDataEndpointVectorizationSourceRest,
): OnYourDataEndpointVectorizationSource {
  return {
    ...o,
    ...deserializeOnYourDataVectorizationSource(o),
    type: o["type"],
    endpoint: o["endpoint"],
    authentication: deserializeOnYourDataAuthenticationOptions(
      o["authentication"],
    ),
  };
}

export function serializeOnYourDataDeploymentNameVectorizationSource(
  o: OnYourDataDeploymentNameVectorizationSource,
): OnYourDataDeploymentNameVectorizationSourceRest {
  return {
    ...o,
    ...serializeOnYourDataVectorizationSource(o),
    type: o["type"],
    deployment_name: o["deploymentName"],
  };
}

export function deserializeOnYourDataDeploymentNameVectorizationSource(
  o: OnYourDataDeploymentNameVectorizationSourceRest,
): OnYourDataDeploymentNameVectorizationSource {
  return {
    ...o,
    ...deserializeOnYourDataVectorizationSource(o),
    type: o["type"],
    deploymentName: o["deployment_name"],
  };
}

export function serializeOnYourDataModelIdVectorizationSource(
  o: OnYourDataModelIdVectorizationSource,
): OnYourDataModelIdVectorizationSourceRest {
  return {
    ...o,
    ...serializeOnYourDataVectorizationSource(o),
    type: o["type"],
    model_id: o["modelId"],
  };
}

export function deserializeOnYourDataModelIdVectorizationSource(
  o: OnYourDataModelIdVectorizationSourceRest,
): OnYourDataModelIdVectorizationSource {
  return {
    ...o,
    ...deserializeOnYourDataVectorizationSource(o),
    type: o["type"],
    modelId: o["model_id"],
  };
}

export function serializeAzureMachineLearningIndexChatExtensionConfiguration(
  o: AzureMachineLearningIndexChatExtensionConfiguration,
): AzureMachineLearningIndexChatExtensionConfigurationRest {
  return {
    ...o,
    ...serializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: serializeAzureMachineLearningIndexChatExtensionParameters(
      o["parameters"],
    ),
  };
}

export function deserializeAzureMachineLearningIndexChatExtensionConfiguration(
  o: AzureMachineLearningIndexChatExtensionConfigurationRest,
): AzureMachineLearningIndexChatExtensionConfiguration {
  return {
    ...o,
    ...deserializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: deserializeAzureMachineLearningIndexChatExtensionParameters(
      o["parameters"],
    ),
  };
}

export function serializeAzureMachineLearningIndexChatExtensionParameters(
  o: AzureMachineLearningIndexChatExtensionParameters,
): AzureMachineLearningIndexChatExtensionParametersRest {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: serializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["topNDocuments"] === undefined
      ? {}
      : { top_n_documents: o["topNDocuments"] }),
    ...(o["inScope"] === undefined ? {} : { in_scope: o["inScope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["roleInformation"] === undefined
      ? {}
      : { role_information: o["roleInformation"] }),
    project_resource_id: o["projectResourceId"],
    name: o["name"],
    version: o["version"],
    ...(o["filter"] === undefined ? {} : { filter: o["filter"] }),
  };
}

export function deserializeAzureMachineLearningIndexChatExtensionParameters(
  o: AzureMachineLearningIndexChatExtensionParametersRest,
): AzureMachineLearningIndexChatExtensionParameters {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: deserializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["top_n_documents"] === undefined
      ? {}
      : { topNDocuments: o["top_n_documents"] }),
    ...(o["in_scope"] === undefined ? {} : { inScope: o["in_scope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["role_information"] === undefined
      ? {}
      : { roleInformation: o["role_information"] }),
    projectResourceId: o["project_resource_id"],
    name: o["name"],
    version: o["version"],
    ...(o["filter"] === undefined ? {} : { filter: o["filter"] }),
  };
}

export function serializeAzureCosmosDBChatExtensionConfiguration(
  o: AzureCosmosDBChatExtensionConfiguration,
): AzureCosmosDBChatExtensionConfigurationRest {
  return {
    ...o,
    ...serializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: serializeAzureCosmosDBChatExtensionParameters(o["parameters"]),
  };
}

export function deserializeAzureCosmosDBChatExtensionConfiguration(
  o: AzureCosmosDBChatExtensionConfigurationRest,
): AzureCosmosDBChatExtensionConfiguration {
  return {
    ...o,
    ...deserializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: deserializeAzureCosmosDBChatExtensionParameters(
      o["parameters"],
    ),
  };
}

export function serializeAzureCosmosDBChatExtensionParameters(
  o: AzureCosmosDBChatExtensionParameters,
): AzureCosmosDBChatExtensionParametersRest {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: serializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["topNDocuments"] === undefined
      ? {}
      : { top_n_documents: o["topNDocuments"] }),
    ...(o["inScope"] === undefined ? {} : { in_scope: o["inScope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["roleInformation"] === undefined
      ? {}
      : { role_information: o["roleInformation"] }),
    database_name: o["databaseName"],
    container_name: o["containerName"],
    index_name: o["indexName"],
    fields_mapping: serializeAzureCosmosDBFieldMappingOptions(
      o["fieldsMapping"],
    ),
    embedding_dependency: serializeOnYourDataVectorizationSource(
      o["embeddingDependency"],
    ),
  };
}

export function deserializeAzureCosmosDBChatExtensionParameters(
  o: AzureCosmosDBChatExtensionParametersRest,
): AzureCosmosDBChatExtensionParameters {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: deserializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["top_n_documents"] === undefined
      ? {}
      : { topNDocuments: o["top_n_documents"] }),
    ...(o["in_scope"] === undefined ? {} : { inScope: o["in_scope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["role_information"] === undefined
      ? {}
      : { roleInformation: o["role_information"] }),
    databaseName: o["database_name"],
    containerName: o["container_name"],
    indexName: o["index_name"],
    fieldsMapping: deserializeAzureCosmosDBFieldMappingOptions(
      o["fields_mapping"],
    ),
    embeddingDependency: deserializeOnYourDataVectorizationSource(
      o["embedding_dependency"],
    ),
  };
}

export function serializeAzureCosmosDBFieldMappingOptions(
  o: AzureCosmosDBFieldMappingOptions,
): AzureCosmosDBFieldMappingOptionsRest {
  return {
    ...o,
    ...(o["titleField"] === undefined ? {} : { title_field: o["titleField"] }),
    ...(o["urlField"] === undefined ? {} : { url_field: o["urlField"] }),
    ...(o["filepathField"] === undefined
      ? {}
      : { filepath_field: o["filepathField"] }),
    content_fields: o["contentFields"],
    ...(o["contentFieldsSeparator"] === undefined
      ? {}
      : { content_fields_separator: o["contentFieldsSeparator"] }),
    vector_fields: o["vectorFields"],
  };
}

export function deserializeAzureCosmosDBFieldMappingOptions(
  o: AzureCosmosDBFieldMappingOptionsRest,
): AzureCosmosDBFieldMappingOptions {
  return {
    ...o,
    ...(o["title_field"] === undefined ? {} : { titleField: o["title_field"] }),
    ...(o["url_field"] === undefined ? {} : { urlField: o["url_field"] }),
    ...(o["filepath_field"] === undefined
      ? {}
      : { filepathField: o["filepath_field"] }),
    contentFields: o["content_fields"],
    ...(o["content_fields_separator"] === undefined
      ? {}
      : { contentFieldsSeparator: o["content_fields_separator"] }),
    vectorFields: o["vector_fields"],
  };
}

export function serializeElasticsearchChatExtensionConfiguration(
  o: ElasticsearchChatExtensionConfiguration,
): ElasticsearchChatExtensionConfigurationRest {
  return {
    ...o,
    ...serializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: serializeElasticsearchChatExtensionParameters(o["parameters"]),
  };
}

export function deserializeElasticsearchChatExtensionConfiguration(
  o: ElasticsearchChatExtensionConfigurationRest,
): ElasticsearchChatExtensionConfiguration {
  return {
    ...o,
    ...deserializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: deserializeElasticsearchChatExtensionParameters(
      o["parameters"],
    ),
  };
}

export function serializeElasticsearchChatExtensionParameters(
  o: ElasticsearchChatExtensionParameters,
): ElasticsearchChatExtensionParametersRest {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: serializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["topNDocuments"] === undefined
      ? {}
      : { top_n_documents: o["topNDocuments"] }),
    ...(o["inScope"] === undefined ? {} : { in_scope: o["inScope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["roleInformation"] === undefined
      ? {}
      : { role_information: o["roleInformation"] }),
    endpoint: o["endpoint"],
    index_name: o["indexName"],
    ...(o["fieldsMapping"] === undefined
      ? {}
      : {
          fields_mapping: serializeElasticsearchIndexFieldMappingOptions(
            o["fieldsMapping"],
          ),
        }),
    ...(o["queryType"] === undefined
      ? {}
      : { query_type: serializeElasticsearchQueryType(o["queryType"]) }),
    ...(o["embeddingDependency"] === undefined
      ? {}
      : {
          embedding_dependency: serializeOnYourDataVectorizationSource(
            o["embeddingDependency"],
          ),
        }),
  };
}

export function deserializeElasticsearchChatExtensionParameters(
  o: ElasticsearchChatExtensionParametersRest,
): ElasticsearchChatExtensionParameters {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: deserializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["top_n_documents"] === undefined
      ? {}
      : { topNDocuments: o["top_n_documents"] }),
    ...(o["in_scope"] === undefined ? {} : { inScope: o["in_scope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["role_information"] === undefined
      ? {}
      : { roleInformation: o["role_information"] }),
    endpoint: o["endpoint"],
    indexName: o["index_name"],
    ...(o["fields_mapping"] === undefined
      ? {}
      : {
          fieldsMapping: deserializeElasticsearchIndexFieldMappingOptions(
            o["fields_mapping"],
          ),
        }),
    ...(o["query_type"] === undefined
      ? {}
      : { queryType: deserializeElasticsearchQueryType(o["query_type"]) }),
    ...(o["embedding_dependency"] === undefined
      ? {}
      : {
          embeddingDependency: deserializeOnYourDataVectorizationSource(
            o["embedding_dependency"],
          ),
        }),
  };
}

export function serializeElasticsearchIndexFieldMappingOptions(
  o: ElasticsearchIndexFieldMappingOptions,
): ElasticsearchIndexFieldMappingOptionsRest {
  return {
    ...o,
    ...(o["titleField"] === undefined ? {} : { title_field: o["titleField"] }),
    ...(o["urlField"] === undefined ? {} : { url_field: o["urlField"] }),
    ...(o["filepathField"] === undefined
      ? {}
      : { filepath_field: o["filepathField"] }),
    ...(o["contentFields"] === undefined
      ? {}
      : { content_fields: o["contentFields"] }),
    ...(o["contentFieldsSeparator"] === undefined
      ? {}
      : { content_fields_separator: o["contentFieldsSeparator"] }),
    ...(o["vectorFields"] === undefined
      ? {}
      : { vector_fields: o["vectorFields"] }),
  };
}

export function deserializeElasticsearchIndexFieldMappingOptions(
  o: ElasticsearchIndexFieldMappingOptionsRest,
): ElasticsearchIndexFieldMappingOptions {
  return {
    ...o,
    ...(o["title_field"] === undefined ? {} : { titleField: o["title_field"] }),
    ...(o["url_field"] === undefined ? {} : { urlField: o["url_field"] }),
    ...(o["filepath_field"] === undefined
      ? {}
      : { filepathField: o["filepath_field"] }),
    ...(o["content_fields"] === undefined
      ? {}
      : { contentFields: o["content_fields"] }),
    ...(o["content_fields_separator"] === undefined
      ? {}
      : { contentFieldsSeparator: o["content_fields_separator"] }),
    ...(o["vector_fields"] === undefined
      ? {}
      : { vectorFields: o["vector_fields"] }),
  };
}

export function serializeElasticsearchQueryType(
  o: ElasticsearchQueryType,
): ElasticsearchQueryTypeRest {
  return o;
}

export function deserializeElasticsearchQueryType(
  o: ElasticsearchQueryTypeRest,
): ElasticsearchQueryType {
  return o;
}

export function serializePineconeChatExtensionConfiguration(
  o: PineconeChatExtensionConfiguration,
): PineconeChatExtensionConfigurationRest {
  return {
    ...o,
    ...serializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: serializePineconeChatExtensionParameters(o["parameters"]),
  };
}

export function deserializePineconeChatExtensionConfiguration(
  o: PineconeChatExtensionConfigurationRest,
): PineconeChatExtensionConfiguration {
  return {
    ...o,
    ...deserializeAzureChatExtensionConfiguration(o),
    type: o["type"],
    parameters: deserializePineconeChatExtensionParameters(o["parameters"]),
  };
}

export function serializePineconeChatExtensionParameters(
  o: PineconeChatExtensionParameters,
): PineconeChatExtensionParametersRest {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: serializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["topNDocuments"] === undefined
      ? {}
      : { top_n_documents: o["topNDocuments"] }),
    ...(o["inScope"] === undefined ? {} : { in_scope: o["inScope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["roleInformation"] === undefined
      ? {}
      : { role_information: o["roleInformation"] }),
    environment: o["environment"],
    index_name: o["indexName"],
    fields_mapping: serializePineconeFieldMappingOptions(o["fieldsMapping"]),
    embedding_dependency: serializeOnYourDataVectorizationSource(
      o["embeddingDependency"],
    ),
  };
}

export function deserializePineconeChatExtensionParameters(
  o: PineconeChatExtensionParametersRest,
): PineconeChatExtensionParameters {
  return {
    ...o,
    ...(o["authentication"] === undefined
      ? {}
      : {
          authentication: deserializeOnYourDataAuthenticationOptions(
            o["authentication"],
          ),
        }),
    ...(o["top_n_documents"] === undefined
      ? {}
      : { topNDocuments: o["top_n_documents"] }),
    ...(o["in_scope"] === undefined ? {} : { inScope: o["in_scope"] }),
    ...(o["strictness"] === undefined ? {} : { strictness: o["strictness"] }),
    ...(o["role_information"] === undefined
      ? {}
      : { roleInformation: o["role_information"] }),
    environment: o["environment"],
    indexName: o["index_name"],
    fieldsMapping: deserializePineconeFieldMappingOptions(o["fields_mapping"]),
    embeddingDependency: deserializeOnYourDataVectorizationSource(
      o["embedding_dependency"],
    ),
  };
}

export function serializePineconeFieldMappingOptions(
  o: PineconeFieldMappingOptions,
): PineconeFieldMappingOptionsRest {
  return {
    ...o,
    ...(o["titleField"] === undefined ? {} : { title_field: o["titleField"] }),
    ...(o["urlField"] === undefined ? {} : { url_field: o["urlField"] }),
    ...(o["filepathField"] === undefined
      ? {}
      : { filepath_field: o["filepathField"] }),
    content_fields: o["contentFields"],
    ...(o["contentFieldsSeparator"] === undefined
      ? {}
      : { content_fields_separator: o["contentFieldsSeparator"] }),
  };
}

export function deserializePineconeFieldMappingOptions(
  o: PineconeFieldMappingOptionsRest,
): PineconeFieldMappingOptions {
  return {
    ...o,
    ...(o["title_field"] === undefined ? {} : { titleField: o["title_field"] }),
    ...(o["url_field"] === undefined ? {} : { urlField: o["url_field"] }),
    ...(o["filepath_field"] === undefined
      ? {}
      : { filepathField: o["filepath_field"] }),
    contentFields: o["content_fields"],
    ...(o["content_fields_separator"] === undefined
      ? {}
      : { contentFieldsSeparator: o["content_fields_separator"] }),
  };
}

export function serializeAzureChatEnhancementConfiguration(
  o: AzureChatEnhancementConfiguration,
): AzureChatEnhancementConfigurationRest {
  return {
    ...o,
    ...(o["grounding"] === undefined
      ? {}
      : {
          grounding: serializeAzureChatGroundingEnhancementConfiguration(
            o["grounding"],
          ),
        }),
    ...(o["ocr"] === undefined
      ? {}
      : { ocr: serializeAzureChatOCREnhancementConfiguration(o["ocr"]) }),
  };
}

export function deserializeAzureChatEnhancementConfiguration(
  o: AzureChatEnhancementConfigurationRest,
): AzureChatEnhancementConfiguration {
  return {
    ...o,
    ...(o["grounding"] === undefined
      ? {}
      : {
          grounding: deserializeAzureChatGroundingEnhancementConfiguration(
            o["grounding"],
          ),
        }),
    ...(o["ocr"] === undefined
      ? {}
      : { ocr: deserializeAzureChatOCREnhancementConfiguration(o["ocr"]) }),
  };
}

export function serializeAzureChatGroundingEnhancementConfiguration(
  o: AzureChatGroundingEnhancementConfiguration,
): AzureChatGroundingEnhancementConfigurationRest {
  return { ...o, enabled: o["enabled"] };
}

export function deserializeAzureChatGroundingEnhancementConfiguration(
  o: AzureChatGroundingEnhancementConfigurationRest,
): AzureChatGroundingEnhancementConfiguration {
  return { ...o, enabled: o["enabled"] };
}

export function serializeAzureChatOCREnhancementConfiguration(
  o: AzureChatOCREnhancementConfiguration,
): AzureChatOCREnhancementConfigurationRest {
  return { ...o, enabled: o["enabled"] };
}

export function deserializeAzureChatOCREnhancementConfiguration(
  o: AzureChatOCREnhancementConfigurationRest,
): AzureChatOCREnhancementConfiguration {
  return { ...o, enabled: o["enabled"] };
}

export function serializeChatCompletionsResponseFormat(
  o: ChatCompletionsResponseFormat,
): ChatCompletionsResponseFormatRest {
  return { ...o, type: o["type"] };
}

export function deserializeChatCompletionsResponseFormat(
  o: ChatCompletionsResponseFormatRest,
): ChatCompletionsResponseFormat {
  return { ...o, type: o["type"] };
}

export function serializeChatCompletionsTextResponseFormat(
  o: ChatCompletionsTextResponseFormat,
): ChatCompletionsTextResponseFormatRest {
  return {
    ...o,
    ...serializeChatCompletionsResponseFormat(o),
    type: o["type"],
  };
}

export function deserializeChatCompletionsTextResponseFormat(
  o: ChatCompletionsTextResponseFormatRest,
): ChatCompletionsTextResponseFormat {
  return {
    ...o,
    ...deserializeChatCompletionsResponseFormat(o),
    type: o["type"],
  };
}

export function serializeChatCompletionsJsonResponseFormat(
  o: ChatCompletionsJsonResponseFormat,
): ChatCompletionsJsonResponseFormatRest {
  return {
    ...o,
    ...serializeChatCompletionsResponseFormat(o),
    type: o["type"],
  };
}

export function deserializeChatCompletionsJsonResponseFormat(
  o: ChatCompletionsJsonResponseFormatRest,
): ChatCompletionsJsonResponseFormat {
  return {
    ...o,
    ...deserializeChatCompletionsResponseFormat(o),
    type: o["type"],
  };
}

export function serializeChatCompletionsToolDefinition(
  o: ChatCompletionsToolDefinition,
): ChatCompletionsToolDefinitionRest {
  return { ...o, type: o["type"] };
}

export function deserializeChatCompletionsToolDefinition(
  o: ChatCompletionsToolDefinitionRest,
): ChatCompletionsToolDefinition {
  return { ...o, type: o["type"] };
}

export function serializeChatCompletionsFunctionToolDefinition(
  o: ChatCompletionsFunctionToolDefinition,
): ChatCompletionsFunctionToolDefinitionRest {
  return {
    ...o,
    ...serializeChatCompletionsToolDefinition(o),
    type: o["type"],
    function: serializeFunctionDefinition(o["function"]),
  };
}

export function deserializeChatCompletionsFunctionToolDefinition(
  o: ChatCompletionsFunctionToolDefinitionRest,
): ChatCompletionsFunctionToolDefinition {
  return {
    ...o,
    ...deserializeChatCompletionsToolDefinition(o),
    type: o["type"],
    function: deserializeFunctionDefinition(o["function"]),
  };
}

export function serializeChatCompletionsToolSelectionPreset(
  o: ChatCompletionsToolSelectionPreset,
): ChatCompletionsToolSelectionPresetRest {
  return o;
}

export function deserializeChatCompletionsToolSelectionPreset(
  o: ChatCompletionsToolSelectionPresetRest,
): ChatCompletionsToolSelectionPreset {
  return o;
}

export function serializeChatCompletionsNamedToolSelection(
  o: ChatCompletionsNamedToolSelection,
): ChatCompletionsNamedToolSelectionRest {
  return { ...o, type: o["type"] };
}

export function deserializeChatCompletionsNamedToolSelection(
  o: ChatCompletionsNamedToolSelectionRest,
): ChatCompletionsNamedToolSelection {
  return { ...o, type: o["type"] };
}

export function serializeChatCompletionsNamedFunctionToolSelection(
  o: ChatCompletionsNamedFunctionToolSelection,
): ChatCompletionsNamedFunctionToolSelectionRest {
  return {
    ...o,
    ...serializeChatCompletionsNamedToolSelection(o),
    type: o["type"],
    function: serializeChatCompletionsFunctionToolSelection(o["function"]),
  };
}

export function deserializeChatCompletionsNamedFunctionToolSelection(
  o: ChatCompletionsNamedFunctionToolSelectionRest,
): ChatCompletionsNamedFunctionToolSelection {
  return {
    ...o,
    ...deserializeChatCompletionsNamedToolSelection(o),
    type: o["type"],
    function: deserializeChatCompletionsFunctionToolSelection(o["function"]),
  };
}

export function serializeChatCompletionsFunctionToolSelection(
  o: ChatCompletionsFunctionToolSelection,
): ChatCompletionsFunctionToolSelectionRest {
  return { ...o, name: o["name"] };
}

export function deserializeChatCompletionsFunctionToolSelection(
  o: ChatCompletionsFunctionToolSelectionRest,
): ChatCompletionsFunctionToolSelection {
  return { ...o, name: o["name"] };
}

export function serializeChatCompletionsOptions(
  o: ChatCompletionsOptions,
): ChatCompletionsOptionsRest {
  return {
    ...o,
    messages: o["messages"].map((e) => serializeChatRequestMessage(e)),
    ...(o["functions"] === undefined
      ? {}
      : {
          functions: o["functions"].map((e) => serializeFunctionDefinition(e)),
        }),
    ...(o["functionCall"] === undefined
      ? {}
      : {
          function_call: serializeChatCompletionsOptionsFunctionCall(
            o["functionCall"],
          ),
        }),
    ...(o["maxTokens"] === undefined ? {} : { max_tokens: o["maxTokens"] }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["topP"] === undefined ? {} : { top_p: o["topP"] }),
    ...(o["logitBias"] === undefined
      ? {}
      : {
          logit_bias: (() => {
            throw Error("Not implemented.");
          })(),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["n"] === undefined ? {} : { n: o["n"] }),
    ...(o["stop"] === undefined ? {} : { stop: o["stop"] }),
    ...(o["presencePenalty"] === undefined
      ? {}
      : { presence_penalty: o["presencePenalty"] }),
    ...(o["frequencyPenalty"] === undefined
      ? {}
      : { frequency_penalty: o["frequencyPenalty"] }),
    ...(o["stream"] === undefined ? {} : { stream: o["stream"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
    ...(o["dataSources"] === undefined
      ? {}
      : {
          data_sources: o["dataSources"].map((e) =>
            serializeAzureChatExtensionConfiguration(e),
          ),
        }),
    ...(o["enhancements"] === undefined
      ? {}
      : {
          enhancements: serializeAzureChatEnhancementConfiguration(
            o["enhancements"],
          ),
        }),
    ...(o["seed"] === undefined ? {} : { seed: o["seed"] }),
    ...(o["logprobs"] === undefined
      ? {}
      : { logprobs: o["logprobs"] === null ? o["logprobs"] : o["logprobs"] }),
    ...(o["top_logprobs"] === undefined
      ? {}
      : {
          top_logprobs:
            o["top_logprobs"] === null ? o["top_logprobs"] : o["top_logprobs"],
        }),
    ...(o["responseFormat"] === undefined
      ? {}
      : {
          response_format: serializeChatCompletionsResponseFormat(
            o["responseFormat"],
          ),
        }),
    ...(o["tools"] === undefined
      ? {}
      : {
          tools: o["tools"].map((e) =>
            serializeChatCompletionsToolDefinition(e),
          ),
        }),
    ...(o["toolChoice"] === undefined
      ? {}
      : {
          tool_choice: serializeChatCompletionsOptionsToolChoice(
            o["toolChoice"],
          ),
        }),
  };
}

export function deserializeChatCompletionsOptions(
  o: ChatCompletionsOptionsRest,
): ChatCompletionsOptions {
  return {
    ...o,
    messages: o["messages"].map((e) => deserializeChatRequestMessage(e)),
    ...(o["functions"] === undefined
      ? {}
      : {
          functions: o["functions"].map((e) =>
            deserializeFunctionDefinition(e),
          ),
        }),
    ...(o["function_call"] === undefined
      ? {}
      : {
          functionCall: deserializeChatCompletionsOptionsFunctionCall(
            o["function_call"],
          ),
        }),
    ...(o["max_tokens"] === undefined ? {} : { maxTokens: o["max_tokens"] }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["top_p"] === undefined ? {} : { topP: o["top_p"] }),
    ...(o["logit_bias"] === undefined
      ? {}
      : {
          logitBias: (() => {
            throw Error("Not implemented.");
          })(),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["n"] === undefined ? {} : { n: o["n"] }),
    ...(o["stop"] === undefined ? {} : { stop: o["stop"] }),
    ...(o["presence_penalty"] === undefined
      ? {}
      : { presencePenalty: o["presence_penalty"] }),
    ...(o["frequency_penalty"] === undefined
      ? {}
      : { frequencyPenalty: o["frequency_penalty"] }),
    ...(o["stream"] === undefined ? {} : { stream: o["stream"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
    ...(o["data_sources"] === undefined
      ? {}
      : {
          dataSources: o["data_sources"].map((e) =>
            deserializeAzureChatExtensionConfiguration(e),
          ),
        }),
    ...(o["enhancements"] === undefined
      ? {}
      : {
          enhancements: deserializeAzureChatEnhancementConfiguration(
            o["enhancements"],
          ),
        }),
    ...(o["seed"] === undefined ? {} : { seed: o["seed"] }),
    ...(o["logprobs"] === undefined
      ? {}
      : { logprobs: o["logprobs"] === null ? o["logprobs"] : o["logprobs"] }),
    ...(o["top_logprobs"] === undefined
      ? {}
      : {
          top_logprobs:
            o["top_logprobs"] === null ? o["top_logprobs"] : o["top_logprobs"],
        }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          responseFormat: deserializeChatCompletionsResponseFormat(
            o["response_format"],
          ),
        }),
    ...(o["tools"] === undefined
      ? {}
      : {
          tools: o["tools"].map((e) =>
            deserializeChatCompletionsToolDefinition(e),
          ),
        }),
    ...(o["tool_choice"] === undefined
      ? {}
      : {
          toolChoice: deserializeChatCompletionsOptionsToolChoice(
            o["tool_choice"],
          ),
        }),
  };
}

export function serializeChatCompletions(
  o: ChatCompletions,
): ChatCompletionsRest {
  return {
    ...o,
    id: o["id"],
    created: o["created"].getTime(),
    choices: o["choices"].map((e) => serializeChatChoice(e)),
    ...(o["promptFilterResults"] === undefined
      ? {}
      : {
          prompt_filter_results: o["promptFilterResults"].map((e) =>
            serializeContentFilterResultsForPrompt(e),
          ),
        }),
    ...(o["systemFingerprint"] === undefined
      ? {}
      : { system_fingerprint: o["systemFingerprint"] }),
    usage: serializeCompletionsUsage(o["usage"]),
  };
}

export function deserializeChatCompletions(
  o: ChatCompletionsRest,
): ChatCompletions {
  return {
    ...o,
    id: o["id"],
    created: new Date(o["created"]),
    choices: o["choices"].map((e) => deserializeChatChoice(e)),
    ...(o["prompt_filter_results"] === undefined
      ? {}
      : {
          promptFilterResults: o["prompt_filter_results"].map((e) =>
            deserializeContentFilterResultsForPrompt(e),
          ),
        }),
    ...(o["system_fingerprint"] === undefined
      ? {}
      : { systemFingerprint: o["system_fingerprint"] }),
    usage: deserializeCompletionsUsage(o["usage"]),
  };
}

export function serializeChatChoice(o: ChatChoice): ChatChoiceRest {
  return {
    ...o,
    ...(o["message"] === undefined
      ? {}
      : { message: serializeChatResponseMessage(o["message"]) }),
    logprobs:
      o["logprobs"] === null
        ? o["logprobs"]
        : serializeChatChoiceLogProbabilityInfo(o["logprobs"]),
    index: o["index"],
    finish_reason:
      o["finishReason"] === null
        ? o["finishReason"]
        : serializeCompletionsFinishReason(o["finishReason"]),
    ...(o["finishDetails"] === undefined
      ? {}
      : { finish_details: serializeChatFinishDetails(o["finishDetails"]) }),
    ...(o["delta"] === undefined
      ? {}
      : { delta: serializeChatResponseMessage(o["delta"]) }),
    ...(o["contentFilterResults"] === undefined
      ? {}
      : {
          content_filter_results: serializeContentFilterResultsForChoice(
            o["contentFilterResults"],
          ),
        }),
    ...(o["enhancements"] === undefined
      ? {}
      : { enhancements: serializeAzureChatEnhancements(o["enhancements"]) }),
  };
}

export function deserializeChatChoice(o: ChatChoiceRest): ChatChoice {
  return {
    ...o,
    ...(o["message"] === undefined
      ? {}
      : { message: deserializeChatResponseMessage(o["message"]) }),
    logprobs:
      o["logprobs"] === null
        ? o["logprobs"]
        : deserializeChatChoiceLogProbabilityInfo(o["logprobs"]),
    index: o["index"],
    finishReason:
      o["finish_reason"] === null
        ? o["finish_reason"]
        : deserializeCompletionsFinishReason(o["finish_reason"]),
    ...(o["finish_details"] === undefined
      ? {}
      : { finishDetails: deserializeChatFinishDetails(o["finish_details"]) }),
    ...(o["delta"] === undefined
      ? {}
      : { delta: deserializeChatResponseMessage(o["delta"]) }),
    ...(o["content_filter_results"] === undefined
      ? {}
      : {
          contentFilterResults: deserializeContentFilterResultsForChoice(
            o["content_filter_results"],
          ),
        }),
    ...(o["enhancements"] === undefined
      ? {}
      : { enhancements: deserializeAzureChatEnhancements(o["enhancements"]) }),
  };
}

export function serializeChatResponseMessage(
  o: ChatResponseMessage,
): ChatResponseMessageRest {
  return {
    ...o,
    role: serializeChatRole(o["role"]),
    content: o["content"] === null ? o["content"] : o["content"],
    ...(o["toolCalls"] === undefined
      ? {}
      : {
          tool_calls: o["toolCalls"].map((e) =>
            serializeChatCompletionsToolCall(e),
          ),
        }),
    ...(o["functionCall"] === undefined
      ? {}
      : { function_call: serializeFunctionCall(o["functionCall"]) }),
    ...(o["context"] === undefined
      ? {}
      : { context: serializeAzureChatExtensionsMessageContext(o["context"]) }),
  };
}

export function deserializeChatResponseMessage(
  o: ChatResponseMessageRest,
): ChatResponseMessage {
  return {
    ...o,
    role: deserializeChatRole(o["role"]),
    content: o["content"] === null ? o["content"] : o["content"],
    ...(o["tool_calls"] === undefined
      ? {}
      : {
          toolCalls: o["tool_calls"].map((e) =>
            deserializeChatCompletionsToolCall(e),
          ),
        }),
    ...(o["function_call"] === undefined
      ? {}
      : { functionCall: deserializeFunctionCall(o["function_call"]) }),
    ...(o["context"] === undefined
      ? {}
      : {
          context: deserializeAzureChatExtensionsMessageContext(o["context"]),
        }),
  };
}

export function serializeAzureChatExtensionsMessageContext(
  o: AzureChatExtensionsMessageContext,
): AzureChatExtensionsMessageContextRest {
  return {
    ...o,
    ...(o["citations"] === undefined
      ? {}
      : {
          citations: o["citations"].map((e) =>
            serializeAzureChatExtensionDataSourceResponseCitation(e),
          ),
        }),
    ...(o["intent"] === undefined ? {} : { intent: o["intent"] }),
  };
}

export function deserializeAzureChatExtensionsMessageContext(
  o: AzureChatExtensionsMessageContextRest,
): AzureChatExtensionsMessageContext {
  return {
    ...o,
    ...(o["citations"] === undefined
      ? {}
      : {
          citations: o["citations"].map((e) =>
            deserializeAzureChatExtensionDataSourceResponseCitation(e),
          ),
        }),
    ...(o["intent"] === undefined ? {} : { intent: o["intent"] }),
  };
}

export function serializeAzureChatExtensionDataSourceResponseCitation(
  o: AzureChatExtensionDataSourceResponseCitation,
): AzureChatExtensionDataSourceResponseCitationRest {
  return {
    ...o,
    content: o["content"],
    ...(o["title"] === undefined ? {} : { title: o["title"] }),
    ...(o["url"] === undefined ? {} : { url: o["url"] }),
    ...(o["filepath"] === undefined ? {} : { filepath: o["filepath"] }),
    ...(o["chunk_id"] === undefined ? {} : { chunk_id: o["chunk_id"] }),
  };
}

export function deserializeAzureChatExtensionDataSourceResponseCitation(
  o: AzureChatExtensionDataSourceResponseCitationRest,
): AzureChatExtensionDataSourceResponseCitation {
  return {
    ...o,
    content: o["content"],
    ...(o["title"] === undefined ? {} : { title: o["title"] }),
    ...(o["url"] === undefined ? {} : { url: o["url"] }),
    ...(o["filepath"] === undefined ? {} : { filepath: o["filepath"] }),
    ...(o["chunk_id"] === undefined ? {} : { chunk_id: o["chunk_id"] }),
  };
}

export function serializeChatChoiceLogProbabilityInfo(
  o: ChatChoiceLogProbabilityInfo,
): ChatChoiceLogProbabilityInfoRest {
  return {
    ...o,
    content:
      o["content"] === null
        ? o["content"]
        : o["content"].map((e) => serializeChatTokenLogProbabilityResult(e)),
  };
}

export function deserializeChatChoiceLogProbabilityInfo(
  o: ChatChoiceLogProbabilityInfoRest,
): ChatChoiceLogProbabilityInfo {
  return {
    ...o,
    content:
      o["content"] === null
        ? o["content"]
        : o["content"].map((e) => deserializeChatTokenLogProbabilityResult(e)),
  };
}

export function serializeChatTokenLogProbabilityResult(
  o: ChatTokenLogProbabilityResult,
): ChatTokenLogProbabilityResultRest {
  return {
    ...o,
    token: o["token"],
    logprob: o["logprob"],
    bytes: o["bytes"] === null ? o["bytes"] : o["bytes"],
    top_logprobs:
      o["top_logprobs"] === null
        ? o["top_logprobs"]
        : o["top_logprobs"].map((e) => serializeChatTokenLogProbabilityInfo(e)),
  };
}

export function deserializeChatTokenLogProbabilityResult(
  o: ChatTokenLogProbabilityResultRest,
): ChatTokenLogProbabilityResult {
  return {
    ...o,
    token: o["token"],
    logprob: o["logprob"],
    bytes: o["bytes"] === null ? o["bytes"] : o["bytes"],
    top_logprobs:
      o["top_logprobs"] === null
        ? o["top_logprobs"]
        : o["top_logprobs"].map((e) =>
            deserializeChatTokenLogProbabilityInfo(e),
          ),
  };
}

export function serializeChatTokenLogProbabilityInfo(
  o: ChatTokenLogProbabilityInfo,
): ChatTokenLogProbabilityInfoRest {
  return {
    ...o,
    token: o["token"],
    logprob: o["logprob"],
    bytes: o["bytes"] === null ? o["bytes"] : o["bytes"],
  };
}

export function deserializeChatTokenLogProbabilityInfo(
  o: ChatTokenLogProbabilityInfoRest,
): ChatTokenLogProbabilityInfo {
  return {
    ...o,
    token: o["token"],
    logprob: o["logprob"],
    bytes: o["bytes"] === null ? o["bytes"] : o["bytes"],
  };
}

export function serializeChatFinishDetails(
  o: ChatFinishDetails,
): ChatFinishDetailsRest {
  return { ...o, type: o["type"] };
}

export function deserializeChatFinishDetails(
  o: ChatFinishDetailsRest,
): ChatFinishDetails {
  return { ...o, type: o["type"] };
}

export function serializeStopFinishDetails(
  o: StopFinishDetails,
): StopFinishDetailsRest {
  return {
    ...o,
    ...serializeChatFinishDetails(o),
    type: o["type"],
    stop: o["stop"],
  };
}

export function deserializeStopFinishDetails(
  o: StopFinishDetailsRest,
): StopFinishDetails {
  return {
    ...o,
    ...deserializeChatFinishDetails(o),
    type: o["type"],
    stop: o["stop"],
  };
}

export function serializeMaxTokensFinishDetails(
  o: MaxTokensFinishDetails,
): MaxTokensFinishDetailsRest {
  return { ...o, ...serializeChatFinishDetails(o), type: o["type"] };
}

export function deserializeMaxTokensFinishDetails(
  o: MaxTokensFinishDetailsRest,
): MaxTokensFinishDetails {
  return { ...o, ...deserializeChatFinishDetails(o), type: o["type"] };
}

export function serializeAzureChatEnhancements(
  o: AzureChatEnhancements,
): AzureChatEnhancementsRest {
  return {
    ...o,
    ...(o["grounding"] === undefined
      ? {}
      : { grounding: serializeAzureGroundingEnhancement(o["grounding"]) }),
  };
}

export function deserializeAzureChatEnhancements(
  o: AzureChatEnhancementsRest,
): AzureChatEnhancements {
  return {
    ...o,
    ...(o["grounding"] === undefined
      ? {}
      : { grounding: deserializeAzureGroundingEnhancement(o["grounding"]) }),
  };
}

export function serializeAzureGroundingEnhancement(
  o: AzureGroundingEnhancement,
): AzureGroundingEnhancementRest {
  return {
    ...o,
    lines: o["lines"].map((e) => serializeAzureGroundingEnhancementLine(e)),
  };
}

export function deserializeAzureGroundingEnhancement(
  o: AzureGroundingEnhancementRest,
): AzureGroundingEnhancement {
  return {
    ...o,
    lines: o["lines"].map((e) => deserializeAzureGroundingEnhancementLine(e)),
  };
}

export function serializeAzureGroundingEnhancementLine(
  o: AzureGroundingEnhancementLine,
): AzureGroundingEnhancementLineRest {
  return {
    ...o,
    text: o["text"],
    spans: o["spans"].map((e) => serializeAzureGroundingEnhancementLineSpan(e)),
  };
}

export function deserializeAzureGroundingEnhancementLine(
  o: AzureGroundingEnhancementLineRest,
): AzureGroundingEnhancementLine {
  return {
    ...o,
    text: o["text"],
    spans: o["spans"].map((e) =>
      deserializeAzureGroundingEnhancementLineSpan(e),
    ),
  };
}

export function serializeAzureGroundingEnhancementLineSpan(
  o: AzureGroundingEnhancementLineSpan,
): AzureGroundingEnhancementLineSpanRest {
  return {
    ...o,
    text: o["text"],
    offset: o["offset"],
    length: o["length"],
    polygon: o["polygon"].map((e) =>
      serializeAzureGroundingEnhancementCoordinatePoint(e),
    ),
  };
}

export function deserializeAzureGroundingEnhancementLineSpan(
  o: AzureGroundingEnhancementLineSpanRest,
): AzureGroundingEnhancementLineSpan {
  return {
    ...o,
    text: o["text"],
    offset: o["offset"],
    length: o["length"],
    polygon: o["polygon"].map((e) =>
      deserializeAzureGroundingEnhancementCoordinatePoint(e),
    ),
  };
}

export function serializeAzureGroundingEnhancementCoordinatePoint(
  o: AzureGroundingEnhancementCoordinatePoint,
): AzureGroundingEnhancementCoordinatePointRest {
  return { ...o, x: o["x"], y: o["y"] };
}

export function deserializeAzureGroundingEnhancementCoordinatePoint(
  o: AzureGroundingEnhancementCoordinatePointRest,
): AzureGroundingEnhancementCoordinatePoint {
  return { ...o, x: o["x"], y: o["y"] };
}

export function serializeImageSize(o: ImageSize): ImageSizeRest {
  return o;
}

export function deserializeImageSize(o: ImageSizeRest): ImageSize {
  return o;
}

export function serializeImageGenerationResponseFormat(
  o: ImageGenerationResponseFormat,
): ImageGenerationResponseFormatRest {
  return o;
}

export function deserializeImageGenerationResponseFormat(
  o: ImageGenerationResponseFormatRest,
): ImageGenerationResponseFormat {
  return o;
}

export function serializeImageGenerationQuality(
  o: ImageGenerationQuality,
): ImageGenerationQualityRest {
  return o;
}

export function deserializeImageGenerationQuality(
  o: ImageGenerationQualityRest,
): ImageGenerationQuality {
  return o;
}

export function serializeImageGenerationStyle(
  o: ImageGenerationStyle,
): ImageGenerationStyleRest {
  return o;
}

export function deserializeImageGenerationStyle(
  o: ImageGenerationStyleRest,
): ImageGenerationStyle {
  return o;
}

export function serializeImageGenerationOptions(
  o: ImageGenerationOptions,
): ImageGenerationOptionsRest {
  return {
    ...o,
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
    prompt: o["prompt"],
    ...(o["n"] === undefined ? {} : { n: o["n"] }),
    ...(o["size"] === undefined ? {} : { size: serializeImageSize(o["size"]) }),
    ...(o["responseFormat"] === undefined
      ? {}
      : {
          response_format: serializeImageGenerationResponseFormat(
            o["responseFormat"],
          ),
        }),
    ...(o["quality"] === undefined
      ? {}
      : { quality: serializeImageGenerationQuality(o["quality"]) }),
    ...(o["style"] === undefined
      ? {}
      : { style: serializeImageGenerationStyle(o["style"]) }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function deserializeImageGenerationOptions(
  o: ImageGenerationOptionsRest,
): ImageGenerationOptions {
  return {
    ...o,
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
    prompt: o["prompt"],
    ...(o["n"] === undefined ? {} : { n: o["n"] }),
    ...(o["size"] === undefined
      ? {}
      : { size: deserializeImageSize(o["size"]) }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          responseFormat: deserializeImageGenerationResponseFormat(
            o["response_format"],
          ),
        }),
    ...(o["quality"] === undefined
      ? {}
      : { quality: deserializeImageGenerationQuality(o["quality"]) }),
    ...(o["style"] === undefined
      ? {}
      : { style: deserializeImageGenerationStyle(o["style"]) }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function serializeImageGenerations(
  o: ImageGenerations,
): ImageGenerationsRest {
  return {
    ...o,
    created: o["created"].getTime(),
    data: o["data"].map((e) => serializeImageGenerationData(e)),
  };
}

export function deserializeImageGenerations(
  o: ImageGenerationsRest,
): ImageGenerations {
  return {
    ...o,
    created: new Date(o["created"]),
    data: o["data"].map((e) => deserializeImageGenerationData(e)),
  };
}

export function serializeImageGenerationData(
  o: ImageGenerationData,
): ImageGenerationDataRest {
  return {
    ...o,
    ...(o["url"] === undefined ? {} : { url: o["url"] }),
    ...(o["base64Data"] === undefined ? {} : { b64_json: o["base64Data"] }),
    ...(o["revisedPrompt"] === undefined
      ? {}
      : { revised_prompt: o["revisedPrompt"] }),
  };
}

export function deserializeImageGenerationData(
  o: ImageGenerationDataRest,
): ImageGenerationData {
  return {
    ...o,
    ...(o["url"] === undefined ? {} : { url: o["url"] }),
    ...(o["b64_json"] === undefined ? {} : { base64Data: o["b64_json"] }),
    ...(o["revised_prompt"] === undefined
      ? {}
      : { revisedPrompt: o["revised_prompt"] }),
  };
}

export function serializeEmbeddingsOptions(
  o: EmbeddingsOptions,
): EmbeddingsOptionsRest {
  return {
    ...o,
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
    input: o["input"],
    ...(o["inputType"] === undefined ? {} : { input_type: o["inputType"] }),
  };
}

export function deserializeEmbeddingsOptions(
  o: EmbeddingsOptionsRest,
): EmbeddingsOptions {
  return {
    ...o,
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["model"] === undefined ? {} : { model: o["model"] }),
    input: o["input"],
    ...(o["input_type"] === undefined ? {} : { inputType: o["input_type"] }),
  };
}

export function serializeEmbeddings(o: Embeddings): EmbeddingsRest {
  return {
    ...o,
    data: o["data"].map((e) => serializeEmbeddingItem(e)),
    usage: serializeEmbeddingsUsage(o["usage"]),
  };
}

export function deserializeEmbeddings(o: EmbeddingsRest): Embeddings {
  return {
    ...o,
    data: o["data"].map((e) => deserializeEmbeddingItem(e)),
    usage: deserializeEmbeddingsUsage(o["usage"]),
  };
}

export function serializeEmbeddingItem(o: EmbeddingItem): EmbeddingItemRest {
  return { ...o, embedding: o["embedding"], index: o["index"] };
}

export function deserializeEmbeddingItem(o: EmbeddingItemRest): EmbeddingItem {
  return { ...o, embedding: o["embedding"], index: o["index"] };
}

export function serializeEmbeddingsUsage(
  o: EmbeddingsUsage,
): EmbeddingsUsageRest {
  return {
    ...o,
    prompt_tokens: o["promptTokens"],
    total_tokens: o["totalTokens"],
  };
}

export function deserializeEmbeddingsUsage(
  o: EmbeddingsUsageRest,
): EmbeddingsUsage {
  return {
    ...o,
    promptTokens: o["prompt_tokens"],
    totalTokens: o["total_tokens"],
  };
}

export function serializeServiceApiVersions(o: ServiceApiVersions): FIXMYNAME {
  return o;
}

export function deserializeServiceApiVersions(
  o: FIXMYNAME,
): ServiceApiVersions {
  return o;
}

export function serializeChatRequestUserMessageContent(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeChatRequestUserMessageContent(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function serializeChatCompletionsOptionsFunctionCall(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeChatCompletionsOptionsFunctionCall(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function serializeChatCompletionsOptionsToolChoice(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeChatCompletionsOptionsToolChoice(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}
