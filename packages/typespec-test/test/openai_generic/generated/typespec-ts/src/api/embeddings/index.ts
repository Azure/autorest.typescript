// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  OpenAIContext as Client,
  EmbeddingsCreateOptionalParams,
} from "../index.js";
import {
  CreateEmbeddingRequest,
  createEmbeddingRequestSerializer,
  CreateEmbeddingResponse,
  createEmbeddingResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: EmbeddingsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/embeddings")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createEmbeddingRequestSerializer(embedding),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateEmbeddingResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return createEmbeddingResponseDeserializer(result.body);
}

export async function create(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: EmbeddingsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateEmbeddingResponse> {
  const result = await _createSend(context, embedding, options);
  return _createDeserialize(result);
}
