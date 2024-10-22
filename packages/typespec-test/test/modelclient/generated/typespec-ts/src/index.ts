// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { ChatCompletionsClient } from "./chatCompletions/chatCompletionsClient.js";
export {
  ChatRequestMessage,
  ChatRequestMessageUnion,
  ChatRole,
  ChatRequestSystemMessage,
  ChatRequestUserMessage,
  ChatRequestAssistantMessage,
  ChatCompletionsToolCall,
  ChatCompletionsToolCallUnion,
  ChatCompletionsFunctionToolCall,
  FunctionCall,
  ChatRequestToolMessage,
  ChatCompletionsToolDefinition,
  ChatCompletionsToolDefinitionUnion,
  ChatCompletionsFunctionToolDefinition,
  FunctionDefinition,
  ChatCompletionsNamedToolSelection,
  ChatCompletionsNamedToolSelectionUnion,
  ChatCompletionsNamedFunctionToolSelection,
  ChatCompletionsFunctionToolSelection,
  ChatCompletionsResponseFormat,
  ChatCompletionsToolSelectionPreset,
  ChatCompletions,
  CompletionsUsage,
  CapacityType,
  ChatChoice,
  CompletionsFinishReason,
  ChatResponseMessage,
  ModelInfo,
  ModelType,
  EmbeddingEncodingFormat,
  EmbeddingInputType,
  EmbeddingsResult,
  EmbeddingItem,
  EmbeddingsUsage,
  EmbeddingInput,
  StreamingChatCompletionsUpdate,
  StreamingChatChoiceUpdate,
  UnknownParams,
} from "./models/index.js";
export {
  ChatCompletionsClientOptionalParams,
  CompleteOptionalParams,
  GetModelInfoOptionalParams,
} from "./chatCompletions/api/index.js";
export { EmbeddingsClient } from "./embeddings/embeddingsClient.js";
export {
  EmbeddingsClientOptionalParams,
  EmbedOptionalParams,
  GetModelInfoOptionalParams as EmbeddingsClientGetModelInfoOptionalParams,
} from "./embeddings/api/index.js";
export { ImageEmbeddingsClient } from "./imageEmbeddings/imageEmbeddingsClient.js";
export {
  ImageEmbeddingsClientOptionalParams,
  EmbedOptionalParams as ImageEmbeddingsClientEmbedOptionalParams,
  GetModelInfoOptionalParams as ImageEmbeddingsClientGetModelInfoOptionalParams,
} from "./imageEmbeddings/api/index.js";
