// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import { create, CreateOptions } from "../../api/embeddings/index.js";
import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";

export interface EmbeddingsOperations {
  embeddings: {
    create: (
      embedding: CreateEmbeddingRequest,
      options?: CreateOptions
    ) => Promise<CreateEmbeddingResponse>;
  };
}

export function getEmbeddings(context: OpenAIContext) {
  return {
    create: (embedding: CreateEmbeddingRequest, options?: CreateOptions) =>
      create(context, embedding, options),
  };
}

export function getEmbeddingsOperations(
  context: OpenAIContext
): EmbeddingsOperations {
  return {
    embeddings: getEmbeddings(context),
  };
}
