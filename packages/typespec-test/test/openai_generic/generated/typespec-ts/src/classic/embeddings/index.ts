// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { embeddingsCreate } from "../../api/embeddings/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";
import { EmbeddingsCreateOptions } from "../../models/options.js";

export interface EmbeddingsOperations {
  embeddings: {
    create: (
      embedding: CreateEmbeddingRequest,
      options?: EmbeddingsCreateOptions
    ) => Promise<CreateEmbeddingResponse>;
  };
}

export function getEmbeddings(context: OpenAIContext) {
  return {
    create: (
      embedding: CreateEmbeddingRequest,
      options?: EmbeddingsCreateOptions
    ) => embeddingsCreate(context, embedding, options),
  };
}

export function getEmbeddingsOperations(
  context: OpenAIContext
): EmbeddingsOperations {
  return {
    embeddings: getEmbeddings(context),
  };
}
