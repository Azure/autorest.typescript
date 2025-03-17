// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  create,
  EmbeddingsCreateOptionalParams,
} from "../../api/embeddings/index.js";
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

function _getEmbeddings(context: OpenAIContext) {
  return {
    create: (
      embedding: CreateEmbeddingRequest,
      options?: EmbeddingsCreateOptionalParams,
    ) => create(context, embedding, options),
  };
}

export function _getEmbeddingsOperations(
  context: OpenAIContext,
): EmbeddingsOperations {
  return {
    ..._getEmbeddings(context),
  };
}
