// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";
import { create } from "../../api/embeddings/index.js";
import { EmbeddingsCreateOptionalParams } from "../../models/options.js";

export interface Embeddings {
  create: (
    embedding: CreateEmbeddingRequest,
    options?: EmbeddingsCreateOptionalParams,
  ) => Promise<CreateEmbeddingResponse>;
}

export function getEmbeddings(context: OpenAIContext) {
  return {
    create: (
      embedding: CreateEmbeddingRequest,
      options?: EmbeddingsCreateOptionalParams,
    ) => create(context, embedding, options),
  };
}

export function getEmbeddingsOperations(context: OpenAIContext): Embeddings {
  return {
    ...getEmbeddings(context),
  };
}
