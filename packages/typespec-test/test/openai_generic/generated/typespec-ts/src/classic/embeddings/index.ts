// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import { create } from "../../api/embeddings/index.js";
import { EmbeddingsCreateOptionalParams } from "../../api/options.js";
import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";

/** Interface representing a Embeddings operations. */
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
