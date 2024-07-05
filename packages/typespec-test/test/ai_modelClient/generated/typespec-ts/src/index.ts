// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { ChatCompletionsClient } from "./chatCompletions/chatCompletionsClient.js";
export {
  ChatCompletionsClientOptions,
  CompleteOptionalParams,
  GetModelInfoOptionalParams,
} from "./chatCompletions/api/index.js";
export { EmbeddingsClient } from "./embeddings/embeddingsClient.js";
export {
  EmbeddingsClientOptions,
  EmbedOptionalParams,
  GetModelInfoOptionalParams as EmbeddingsClientGetModelInfoOptionalParams,
} from "./embeddings/api/index.js";
export { ImageEmbeddingsClient } from "./imageEmbeddings/imageEmbeddingsClient.js";
export {
  ImageEmbeddingsClientOptions,
  EmbedOptionalParams as ImageEmbeddingsClientEmbedOptionalParams,
  GetModelInfoOptionalParams as ImageEmbeddingsClientGetModelInfoOptionalParams,
} from "./imageEmbeddings/api/index.js";
