// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createEmbedding } from "../../api/embeddings/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";
import { CreateEmbeddingOptions } from "../../models/options.js";

export interface EmbeddingsOperations {
  embeddings: {
    createEmbedding: (
      embedding: CreateEmbeddingRequest,
      options?: CreateEmbeddingOptions
    ) => Promise<CreateEmbeddingResponse>;
  };
}

export function getEmbeddings(context: OpenAIContext) {
  return {
    createEmbedding: (
      embedding: CreateEmbeddingRequest,
      options?: CreateEmbeddingOptions
    ) => createEmbedding(context, embedding, options),
  };
}

export function getEmbeddingsOperations(
  context: OpenAIContext
): EmbeddingsOperations {
  return {
    embeddings: getEmbeddings(context),
  };
}
