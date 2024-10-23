// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  EmbeddingsContext as Client,
  EmbedOptionalParams,
  GetModelInfoOptionalParams,
} from "./index.js";
import {
  ModelInfo,
  modelInfoDeserializer,
  EmbeddingsResult,
  embeddingsResultDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _embedSend(
  context: Client,
  input: string[],
  options: EmbedOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/embeddings").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      ...(options?.unknownParams !== undefined
        ? { "unknown-parameters": options?.unknownParams }
        : {}),
    },
    body: {
      input: input.map((p: any) => {
        return p;
      }),
      dimensions: options?.dimensions,
      encoding_format: options?.encodingFormat,
      input_type: options?.inputType,
    },
  });
}

export async function _embedDeserialize(
  result: PathUncheckedResponse,
): Promise<EmbeddingsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return embeddingsResultDeserializer(result.body);
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
): StreamableMethod {
  return context
    .path("/info")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getModelInfoDeserialize(
  result: PathUncheckedResponse,
): Promise<ModelInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return modelInfoDeserializer(result.body);
}

/** Returns information about the AI model. */
export async function getModelInfo(
  context: Client,
  options: GetModelInfoOptionalParams = { requestOptions: {} },
): Promise<ModelInfo> {
  const result = await _getModelInfoSend(context, options);
  return _getModelInfoDeserialize(result);
}
