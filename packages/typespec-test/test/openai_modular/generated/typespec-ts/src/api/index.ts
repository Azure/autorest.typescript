// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  DeploymentEmbeddingsOptionsEmbeddings,
  EmbeddingItem,
  EmbeddingsUsage,
  EmbeddingsOptions,
  DeploymentCompletionsOptionsCompletions,
  Choice,
  CompletionsLogProbabilityModel,
  CompletionsFinishReason,
  CompletionsUsage,
  CompletionsOptions,
  DeploymentChatCompletionsOptionsChatCompletions,
  ChatChoice,
  ChatMessage,
  ChatRole,
  ChatCompletionsOptions,
} from "./models.js";
export { createOpenAI, OpenAIContext } from "./OpenAIContext.js";
export {
  getEmbeddings,
  getCompletions,
  getChatCompletions,
  GetEmbeddingsOptions,
  GetCompletionsOptions,
  GetChatCompletionsOptions,
} from "./operations.js";
