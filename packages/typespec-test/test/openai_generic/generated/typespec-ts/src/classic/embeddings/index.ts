// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import { createEmbedding } from "../../api/embeddings";
import {
  CreateEmbeddingRequest,
  CreateEmbeddingOptions,
  CreateEmbeddingResponse,
} from "../../models";

export interface EmbeddingsOperations {
  embeddings: {
    createEmbedding: (
      embedding: CreateEmbeddingRequest,
      options?: CreateEmbeddingOptions
    ) => Promise<CreateEmbeddingResponse>;
  };
}

export function getEmbeddings(context: Client) {
  return {
    createEmbedding: (
      embedding: CreateEmbeddingRequest,
      options?: CreateEmbeddingOptions
    ) => createEmbedding(context, embedding, options),
  };
}

export function getEmbeddingsOperations(): EmbeddingsOperations {
  return {
    embeddings: getEmbeddings,
  };
}
