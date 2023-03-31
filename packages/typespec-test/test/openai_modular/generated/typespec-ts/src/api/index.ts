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
} from "./models.js";
export { createOpenAI, OpenAIContext } from "./OpenAIContext.js";
export {
  getEmbeddings,
  getCompletions,
  GetEmbeddingsOptions,
  GetCompletionsOptions,
} from "./operations.js";
