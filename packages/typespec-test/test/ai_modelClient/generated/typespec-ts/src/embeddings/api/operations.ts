// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CapacityType,
  ModelInfo,
  ModelType,
  EmbeddingsResult,
} from "../../models/models.js";
import {
  GetEmbeddings200Response,
  GetEmbeddingsDefaultResponse,
  GetModelInfo200Response,
  GetModelInfoDefaultResponse,
  isUnexpected,
  ModelClientContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  EmbedOptionalParams,
  GetModelInfoOptionalParams,
} from "../models/options.js";

export function _embedSend(
  context: Client,
  input: string[],
  options: EmbedOptionalParams = { requestOptions: {} },
): StreamableMethod<GetEmbeddings200Response | GetEmbeddingsDefaultResponse> {
  return context
    .path("/embeddings")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.unknownParams !== undefined
          ? { "unknown-parameters": options?.unknownParams }
          : {}),
      },
      body: {
        input: input,
        dimensions: options?.dimensions,
        encoding_format: options?.encodingFormat,
        input_type: options?.inputType,
      },
    });
}

export async function _embedDeserialize(
  result: GetEmbeddings200Response | GetEmbeddingsDefaultResponse,
): Promise<EmbeddingsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    data: result.body["data"].map((p) => ({
      embedding: p["embedding"],
      index: p["index"],
    })),
    usage: {
      capacityType: result.body.usage["capacity_type"] as CapacityType,
      inputTokens: result.body.usage["input_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
    model: result.body["model"],
  };
}

/** Return the embeddings for a given text prompt. */
export async function embed(
  context: Client,
  input: string[],
  options: EmbedOptionalParams = { requestOptions: {} },
): Promise<EmbeddingsResult> {
  const result = await _embedSend(context, input, options);
  return _embedDeserialize(result);
}

export function _getModelInfoSend(
  context: Client,
  options: GetModelInfoOptionalParams = { requestOptions: {} },
): StreamableMethod<GetModelInfo200Response | GetModelInfoDefaultResponse> {
  return context
    .path("/info")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getModelInfoDeserialize(
  result: GetModelInfo200Response | GetModelInfoDefaultResponse,
): Promise<ModelInfo> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    modelName: result.body["model_name"],
    modelType: result.body["model_type"] as ModelType,
    modelProviderName: result.body["model_provider_name"],
  };
}

/** Returns information about the AI model. */
export async function getModelInfo(
  context: Client,
  options: GetModelInfoOptionalParams = { requestOptions: {} },
): Promise<ModelInfo> {
  const result = await _getModelInfoSend(context, options);
  return _getModelInfoDeserialize(result);
}
