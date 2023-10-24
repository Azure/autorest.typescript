// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";
import {
  CreateEmbedding200Response,
  CreateEmbeddingDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { CreateEmbeddingOptions } from "../../models/options.js";

export function _createEmbeddingSend(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: CreateEmbeddingOptions = { requestOptions: {} }
): StreamableMethod<
  CreateEmbedding200Response | CreateEmbeddingDefaultResponse
> {
  return context
    .path("/embeddings")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: embedding["model"],
        input: embedding["input"],
        user: embedding["user"],
      },
    });
}

export async function _createEmbeddingDeserialize(
  result: CreateEmbedding200Response | CreateEmbeddingDefaultResponse
): Promise<CreateEmbeddingResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    model: result.body["model"],
    data: (result.body["data"] ?? []).map((p) => ({
      index: p["index"],
      object: p["object"],
      embedding: p["embedding"],
    })),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

export async function createEmbedding(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: CreateEmbeddingOptions = { requestOptions: {} }
): Promise<CreateEmbeddingResponse> {
  const result = await _createEmbeddingSend(context, embedding, options);
  return _createEmbeddingDeserialize(result);
}
