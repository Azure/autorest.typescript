// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  DeploymentEmbeddingsOptionsEmbeddings,
  EmbeddingItem,
  EmbeddingsUsage,
  EmbeddingsOptions,
  DeploymentCompletionsOptionsCompletions,
  Choice,
  CompletionsLogProbs,
  CompletionsUsage,
  CompletionsOptions,
} from "./api/models.js";
export { createOpenAI, OpenAIContext } from "./api/OpenAIContext.js";
export {
  getEmbeddings,
  getCompletions,
  GetEmbeddingsOptions,
  GetCompletionsOptions,
} from "./api/operations.js";
export { ClientOptions, RequestOptions } from "./common/interfaces.js";
