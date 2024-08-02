// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureEmbeddingModel } from "../models/models.js";
import { ModelContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  GetOptionalParams,
  PutOptionalParams,
  PostOptionalParams,
} from "../models/options.js";

export function _getSend(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/model/embeddingVector")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<number[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** get an embedding vector */
export async function get(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<number[]> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: number[],
  options: PutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/model/embeddingVector")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** put an embedding vector */
export async function put(
  context: Client,
  body: number[],
  options: PutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}

export function _postSend(
  context: Client,
  body: AzureEmbeddingModel,
  options: PostOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/model/embeddingVector")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { embedding: body["embedding"] },
    });
}

export async function _postDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureEmbeddingModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    embedding: result.body["embedding"],
  };
}

/** post a model which has an embeddingVector property */
export async function post(
  context: Client,
  body: AzureEmbeddingModel,
  options: PostOptionalParams = { requestOptions: {} },
): Promise<AzureEmbeddingModel> {
  const result = await _postSend(context, body, options);
  return _postDeserialize(result);
}
