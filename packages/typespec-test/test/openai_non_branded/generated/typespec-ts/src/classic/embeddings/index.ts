// Licensed under the MIT license.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";
import { create } from "../../api/embeddings/index.js";
import { EmbeddingsCreateOptionalParams } from "../../models/options.js";

export interface EmbeddingsOperations {
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

export function getEmbeddingsOperations(
  context: OpenAIContext,
): EmbeddingsOperations {
  return {
    ...getEmbeddings(context),
  };
}
