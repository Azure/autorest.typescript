// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";
import { create } from "../../api/embeddings/index.js";
import { EmbeddingsCreateOptions } from "../../models/options.js";

export interface EmbeddingsOperations {
  create: (
    embedding: CreateEmbeddingRequest,
    options?: EmbeddingsCreateOptions,
  ) => Promise<CreateEmbeddingResponse>;
}

export function getEmbeddings(context: OpenAIContext) {
  return {
    create: (
      embedding: CreateEmbeddingRequest,
      options?: EmbeddingsCreateOptions,
    ) => create(context, embedding, options),
  };
}

export function getEmbeddingsOperations(
  context: OpenAIContext,
): EmbeddingsOperations {
  return {
    ...getEmbeddings(context),
  };
}
