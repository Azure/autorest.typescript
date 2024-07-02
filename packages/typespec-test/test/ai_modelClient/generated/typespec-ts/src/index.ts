// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  ChatCompletionsClient,
  ChatCompletionsClientOptions,
} from "./chatCompletions/chatCompletionsClient.js";
export {
  CompleteOptionalParams,
  GetModelInfoOptionalParams,
} from "./chatCompletions/models/index.js";
export {
  EmbeddingsClient,
  EmbeddingsClientOptions,
} from "./embeddings/embeddingsClient.js";
export {
  EmbedOptionalParams,
  GetModelInfoOptionalParams as EmbeddingsClientGetModelInfoOptionalParams,
} from "./embeddings/models/index.js";
export {
  ImageEmbeddingsClient,
  ImageEmbeddingsClientOptions,
} from "./imageEmbeddings/imageEmbeddingsClient.js";
export {
  EmbedOptionalParams as ImageEmbeddingsClientEmbedOptionalParams,
  GetModelInfoOptionalParams as ImageEmbeddingsClientGetModelInfoOptionalParams,
} from "./imageEmbeddings/models/index.js";
