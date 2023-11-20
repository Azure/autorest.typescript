// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";
import {
  EmbeddingsCreate200Response,
  EmbeddingsCreateDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { RestError } from "@azure/core-rest-pipeline";
import { EmbeddingsCreateOptions } from "../../models/options.js";

export function _createSend(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: EmbeddingsCreateOptions = { requestOptions: {} }
): StreamableMethod<
  EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse
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

export async function _createDeserialize(
  result: EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse
): Promise<CreateEmbeddingResponse> {
  if (isUnexpected(result)) {
    const internalError = (result.body as any).error || result.body || result;
    const message = `Unexpected status code ${result.status}`;
    throw new RestError(internalError.message ?? message, {
      statusCode: Number(result.status),
      code: internalError.code,
      request: result.request,
    });
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

export async function create(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: EmbeddingsCreateOptions = { requestOptions: {} }
): Promise<CreateEmbeddingResponse> {
  const result = await _createSend(context, embedding, options);
  return _createDeserialize(result);
}
